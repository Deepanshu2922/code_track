import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DSASheet from "./pages/DSASheet";
import CoreSubjects from "./pages/CoreSubjects";
import Background from "./components/Background";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
        
        {/* Background (always visible) */}
        <Background />

        {/* Pages */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dsa" element={<DSASheet />} />
            <Route path="/core-subjects" element={<CoreSubjects />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;