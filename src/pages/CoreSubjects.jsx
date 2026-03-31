import React, { useState } from "react";
import { coreSubjects } from "../data/coreSubjects";

function CoreSubjects() {
  const [covered, setCovered] = useState({});

  const toggleCovered = (id) => {
    setCovered((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-white">Core Subjects</h1>
      <p className="text-gray-400 mb-8 text-sm">
        Track topics for OS, DBMS, networks, OOP, and COA. Open a link to read;
        mark items when you have covered them.
      </p>

      {coreSubjects.map((subjectBlock, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">
            {subjectBlock.subject}
          </h2>

          {subjectBlock.modules.map((mod, j) => (
            <div
              key={j}
              className="mb-6 bg-gray-900/80 border border-white/10 p-4 rounded-xl"
            >
              <h3 className="text-xl mb-3 text-white">{mod.name}</h3>

              {mod.topics.map((t) => (
                <div
                  key={t.id}
                  className="flex flex-wrap justify-between items-center gap-3 border-b border-white/10 py-3 last:border-b-0"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <input
                      type="checkbox"
                      checked={covered[t.id] || false}
                      onChange={() => toggleCovered(t.id)}
                      aria-label={`Mark ${t.title} as covered`}
                    />
                    <span className="text-gray-100">{t.title}</span>
                  </div>

                  <div className="flex gap-3 items-center shrink-0">
                    <span className="text-sm text-gray-400">{t.importance}</span>
                    <button
                      type="button"
                      onClick={() => window.open(t.link, "_blank", "noopener,noreferrer")}
                      className="bg-violet-600 hover:bg-violet-500 px-3 py-1 rounded text-sm"
                    >
                      Read
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

export default CoreSubjects;
