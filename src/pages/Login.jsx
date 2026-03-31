import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE, getFetchErrorMessage, parseJsonSafe } from "../api/client";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Sends login request, stores token, then redirects to protected home.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Build the URL in a way that cannot accidentally call the React dev server.
      // If API_BASE is set, call `${API_BASE}/login`; otherwise use relative `/login` (served via CRA proxy).
      const url = API_BASE ? `${API_BASE}/login` : "/login";

      console.log("[login] Request URL:", url);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log("[login] Response status:", response.status);
      const data = await parseJsonSafe(response);
      console.log("[login] Response data:", data);

      if (!response.ok) {
        throw new Error(
          data.message || `Login failed (${response.status} ${response.statusText}).`
        );
      }

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (requestError) {
      setError(getFetchErrorMessage(requestError));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <p className="text-slate-400 mb-6">Welcome back. Enter your details.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-indigo-600 hover:bg-indigo-500 transition px-3 py-2 font-medium disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-slate-400 mt-4">
          New user?{" "}
          <Link to="/signup" className="text-indigo-400 hover:text-indigo-300">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
