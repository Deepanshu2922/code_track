import React from "react";
import { CheckCircle, FileText, BookOpen, BarChart3, Flame } from "lucide-react";

const features = [
  {
    icon: <CheckCircle size={28} />,
    title: "Track Solved Problems",
    desc: "Keep track of every problem you solve with detailed statistics and insights.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <FileText size={28} />,
    title: "Structured DSA Sheets",
    desc: "Access curated problem sets organized by topics and difficulty levels.",
    color: "from-purple-500 to-indigo-500",
    highlight: true,
  },
  {
    icon: <BookOpen size={28} />,
    title: "Core Subject Notes",
    desc: "Comprehensive notes for OS, DBMS, Networks, and other CS fundamentals.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Progress Analytics",
    desc: "Visualize your learning journey with detailed charts and metrics.",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: <Flame size={28} />,
    title: "Daily Streak System",
    desc: "Stay motivated with streaks and achieve your coding goals consistently.",
    color: "from-orange-500 to-red-500",
  },
];

const Features = () => {
  return (
    <section className="px-10 py-20 bg-[#050816] text-white">
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md 
            hover:scale-105 transition duration-300
            ${item.highlight ? "shadow-[0_0_40px_rgba(139,92,246,0.3)] border-purple-500/40" : ""}`}
          >
            
            {/* Icon */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r ${item.color} mb-4`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Features;