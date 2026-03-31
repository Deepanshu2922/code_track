import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import DSASheet from "./pages/DSASheet";
import CoreSubjects from "./pages/CoreSubjects";

// Prevents access to protected pages when user has no token.
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Routes>
      {/* Home is protected, so main UI is visible only after login. */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      {/* Keep learning pages accessible only after authentication. */}
      <Route
        path="/dsa"
        element={
          <ProtectedRoute>
            <DSASheet />
          </ProtectedRoute>
        }
      />
      <Route
        path="/core-subjects"
        element={
          <ProtectedRoute>
            <CoreSubjects />
          </ProtectedRoute>
        }
      />
      {/* Unknown routes fall back to protected home. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
