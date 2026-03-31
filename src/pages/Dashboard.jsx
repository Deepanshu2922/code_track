import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE, getFetchErrorMessage, parseJsonSafe } from "../api/client";

function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetches protected data using JWT token from localStorage.
  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(`${API_BASE}/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await parseJsonSafe(response);

        if (!response.ok) {
          throw new Error(
            data.message ||
              `Failed to load dashboard (${response.status} ${response.statusText}).`
          );
        }

        setEmail(data.email);
        setMessage(data.message);
      } catch (requestError) {
        setError(getFetchErrorMessage(requestError));
      }
    };

    fetchDashboardData();
  }, []);

  // Logs the user out by clearing token and redirecting to login.
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="rounded-md bg-red-600 hover:bg-red-500 px-3 py-2 text-sm font-medium"
          >
            Logout
          </button>
        </div>

        {error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          <div className="space-y-2 text-slate-200">
            <p>
              Logged in as: <span className="font-semibold">{email}</span>
            </p>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
