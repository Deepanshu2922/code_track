import React from "react";
import { Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="h-[90vh] flex items-center justify-between px-16">

      {/* Left Side */}
      <div className="max-w-xl">
        
        <p className="text-purple-400 mb-4">
          ✨ Track. Learn. Excel.
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            CODE,
          </span>
          <br />
          TRACK,
          <br />
          IMPROVE.
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Your complete DSA + Core Subjects learning tracker.
        </p>

        <p className="mt-2 text-gray-500">
          Solve problems, track progress, and improve efficiently.
        </p>

        <div className="mt-8 flex gap-4">
          {/* Use router navigation so buttons work inside SPA routes. */}
          <button
            type="button"
            onClick={() => navigate("/dsa")}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 transition"
          >
            Start Solving
          </button>

          <button
            type="button"
            onClick={() => navigate("/core-subjects")}
            className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-white/10 transition"
          >
            Explore Sheets
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hidden md:flex items-center justify-center w-1/2 relative">

  {/* Glow behind image */}
  <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-30 blur-[150px] rounded-full"></div>

  {/* Decorative graphic (no bundled image asset) */}
  <div
    className="relative flex h-[320px] w-[320px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
    aria-hidden
  >
    <Code2
      className="text-purple-300 opacity-90"
      strokeWidth={1}
      size={180}
    />
  </div>

</div>

    </section>
  );
};

export default Hero;