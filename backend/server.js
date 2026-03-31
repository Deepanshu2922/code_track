const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = require("./models/User");

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "replace_this_with_env_secret_in_production";
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/codetrack";

// CORS: allow React dev server; must run before routes.
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// In-memory fallback when MongoDB is not reachable.
const users = [
  {
    email: "codetrack12@gmail.com",
    password: bcrypt.hashSync("codetrack1234", 10),
  },
];

let mongoConnected = false;

async function connectMongo() {
  try {
    await mongoose.connect(MONGO_URI);
    mongoConnected = true;
    console.log("MongoDB connected:", MONGO_URI.replace(/:[^:@]+@/, ":****@"));

    const seedEmail = "codetrack12@gmail.com";
    const existing = await User.findOne({ email: seedEmail });
    if (!existing) {
      const hashed = await bcrypt.hash("codetrack1234", 10);
      await User.create({ email: seedEmail, password: hashed });
      console.log("Seeded default user:", seedEmail);
    }
  } catch (err) {
    mongoConnected = false;
    console.warn("MongoDB unavailable — using in-memory store:", err.message);
  }
}

async function findUserByEmail(email) {
  const normalized = email.trim().toLowerCase();
  if (mongoConnected) {
    return User.findOne({ email: normalized });
  }
  return users.find((u) => u.email.toLowerCase() === normalized) || null;
}

async function createUserRecord(email, password) {
  const normalized = email.trim().toLowerCase();
  const hashedPassword = await bcrypt.hash(password, 10);
  if (mongoConnected) {
    await User.create({ email: normalized, password: hashedPassword });
  } else {
    users.push({ email: normalized, password: hashedPassword });
  }
}

// Shared signup handler for /signup and POST /api/user
async function handleSignup(req, res) {
  console.log("[signup] received:", req.method, req.path, { email: req.body?.email });

  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const existing = await findUserByEmail(email);
    if (existing) {
      return res.status(409).json({ message: "User already exists." });
    }

    await createUserRecord(email, password);
    console.log("[signup] success:", email.trim().toLowerCase());
    return res.status(201).json({ message: "Signup successful." });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "User already exists." });
    }
    console.error("[signup] error:", error);
    return res.status(500).json({ message: "Could not create user." });
  }
}

// Middleware to verify JWT token before allowing access to protected routes.
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token missing." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
}

// Signup (legacy path)
app.post("/signup", handleSignup);

// REST API path expected by frontend when using /api/user
app.post("/api/user", handleSignup);

// Login route: validates credentials and returns a JWT token.
app.post("/login", async (req, res) => {
  console.log("[login] received:", { email: req.body?.email });

  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    console.log("[login] success:", user.email);
    return res.json({ token, message: "Login successful." });
  } catch (error) {
    console.error("[login] error:", error);
    return res.status(500).json({ message: "Could not log in." });
  }
});

// Example protected route to validate token and fetch user data.
app.get("/dashboard", authenticateToken, (req, res) => {
  return res.json({
    message: "Protected dashboard data fetched successfully.",
    email: req.user.email,
  });
});

async function start() {
  await connectMongo();
  app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
