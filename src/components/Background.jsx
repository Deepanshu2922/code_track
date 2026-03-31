import React from "react";

const Background = () => {
  return (
    <>
      {/* 🌌 Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(139,92,246,0.25),transparent_60%)]"></div>

      {/* 🔳 Grid */}
      <div className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
             linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:50px_50px]">
      </div>

      {/* ✨ Dots */}
      <div className="absolute inset-0">
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full top-20 left-1/4 opacity-70"></div>
        <div className="absolute w-2 h-2 bg-pink-400 rounded-full top-40 right-1/3 opacity-70"></div>
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full bottom-20 left-1/3 opacity-70"></div>
        <div className="absolute w-2 h-2 bg-purple-300 rounded-full bottom-32 right-1/4 opacity-70"></div>
      </div>

      {/* 🌟 Glow */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>
    </>
  );
};

export default Background;