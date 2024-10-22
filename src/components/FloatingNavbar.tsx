/** @format */

import React from "react";

const FloatingNavbar: React.FC = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 text-black transform -translate-x-1/2 bg-white/60 border border-black/90 rounded-lg shadow-lg p-4 z-50">
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="font-bold  transition">
            Home
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className="font-bold  transition"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/resume"
            className="font-bold  transition"
          >
            Resume
          </a>
        </li>
        
      </ul>
    </nav>
  );
};



export default FloatingNavbar;
