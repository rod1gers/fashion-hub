/** @format */

import React from "react";

const FloatingNavbar: React.FC = () => {
  const whatsappUrl = process.env.REACT_APP_WHATSAPP;

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
            href={whatsappUrl}
            target="_blank"
            className="font-bold  transition"
          >
            WhatsApp
          </a>
        </li>
        
      </ul>
    </nav>
  );
};



export default FloatingNavbar;
