import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navItemClass =
  "text-gray-300 hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-base font-inherit";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // Logs out user and sends them back to login page.
  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowMenu(false);
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-[#0b0f1a] text-white">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-xl font-bold text-purple-400 no-underline hover:text-purple-300"
      >
        {"</>"} CodeTrack
      </Link>

      {/* Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/" className={`${navItemClass} no-underline`}>
          Home
        </Link>
        <Link to="/dsa" className={`${navItemClass} no-underline`}>
          DSA Sheet
        </Link>
        <Link to="/core-subjects" className={`${navItemClass} no-underline`}>
          Core Subjects
        </Link>
        {/* Jumps to progress section on home page. */}
        <Link to="/#progress" className={`${navItemClass} no-underline`}>
          Progress Dashboard
        </Link>
        <Link to="/dsa" className={`${navItemClass} no-underline`}>
          Playground
        </Link>
        <Link to="/core-subjects" className={`${navItemClass} no-underline`}>
          Resources
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Router Link keeps SPA navigation working without full reload. */}
        <Link
          to="/#progress"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 no-underline text-white"
        >
          Progress
        </Link>

        <div className="relative">
          {/* Clickable profile icon to open account options. */}
          <button
            type="button"
            onClick={() => setShowMenu((prev) => !prev)}
            className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center"
            aria-label="Open profile menu"
          >
            👤
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 rounded-lg border border-white/10 bg-[#111827] shadow-lg z-50">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;