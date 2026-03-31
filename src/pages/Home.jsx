import React, { useMemo } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Background from "../components/Background";
import { dsaSheet } from "../data/dsaSheet";

const Home = () => {
  // Read user-specific solved questions to show quick progress on home page.
  const solved = useMemo(() => {
    try {
      const token = localStorage.getItem("token");
      const payload = token ? JSON.parse(atob(token.split(".")[1])) : {};
      const email = payload.email || "guest";
      const stored = localStorage.getItem(`dsaSolved_${email}`);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      return {};
    }
  }, []);

  const totalQuestions = useMemo(
    () =>
      dsaSheet.reduce(
        (sum, topic) =>
          sum +
          topic.subtopics.reduce(
            (subSum, subtopic) => subSum + subtopic.problems.length,
            0
          ),
        0
      ),
    []
  );
  const solvedCount = Object.values(solved).filter(Boolean).length;
  const progressPercent =
    totalQuestions > 0 ? Math.round((solvedCount / totalQuestions) * 100) : 0;

  return (
    // Restored original main UI layout after authentication.
    <div className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Background visual layer */}
      <Background />

      {/* Foreground page content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* Home progress section shown when user clicks "Progress". */}
        <section id="progress" className="px-10 py-6">
          <div className="rounded-xl bg-gray-900/80 border border-white/10 p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-white">Your Progress</h2>
              <span className="text-sm text-white">
                {solvedCount}/{totalQuestions} solved ({progressPercent}%)
              </span>
            </div>
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </section>
        <Features />
      </div>
    </div>
  );
};

export default Home;