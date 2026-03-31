import React, { useEffect, useMemo, useState } from "react";
import { dsaSheet } from "../data/dsaSheet";

function DSASheet() {
  // Read current logged-in user email from JWT payload for per-user progress.
  const getCurrentUserEmail = () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return "guest";
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.email || "guest";
    } catch (error) {
      return "guest";
    }
  };

  const userEmail = getCurrentUserEmail();
  const storageKey = `dsaSolved_${userEmail}`;

  // Load solved state from localStorage so progress remains saved.
  const [solved, setSolved] = useState(() => {
    try {
      const storedValue = localStorage.getItem(storageKey);
      return storedValue ? JSON.parse(storedValue) : {};
    } catch (error) {
      return {};
    }
  });

  // Persist solved state whenever user marks/unmarks a question.
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(solved));
  }, [solved, storageKey]);

  // Calculate progress bar values from all available DSA questions.
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

  const toggleSolved = (id) => {
    setSolved((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="p-6">
      {/* Progress section updates in real time from saved solved questions. */}
      <div className="mb-8 rounded-xl bg-gray-900 p-4 border border-white/10">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-white">DSA Progress</h2>
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

      {dsaSheet.map((topic, i) => (
        <div key={i} className="mb-8">
          {/* Keep topic headings clearly visible on dark background. */}
          <h2 className="text-2xl font-bold mb-4 text-white">{topic.topic}</h2>

          {topic.subtopics.map((sub, j) => (
            <div key={j} className="mb-6 bg-gray-900 p-4 rounded-xl">
              <h3 className="text-xl mb-3 text-white">{sub.name}</h3>

              {sub.problems.map((p) => (
                <div
                  key={p.id}
                  className="flex justify-between items-center border-b py-3"
                >
                  {/* Left */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={solved[p.id] || false}
                      onChange={() => toggleSolved(p.id)}
                    />
                    <span className="text-white">{p.title}</span>
                  </div>

                  {/* Right */}
                  <div className="flex gap-4 items-center">
                    <span className="text-sm text-white">{p.difficulty}</span>

                    <button
                      onClick={() => window.open(p.link, "_blank")}
                      className="bg-blue-500 px-3 py-1 rounded"
                    >
                      Practice
                    </button>

                    {/* Opens solution link when available for this problem. */}
                    <button
                      type="button"
                      onClick={() => p.solution && window.open(p.solution, "_blank")}
                      disabled={!p.solution}
                      className="bg-gray-500 hover:bg-gray-400 text-white px-3 py-1 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Solution
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DSASheet;