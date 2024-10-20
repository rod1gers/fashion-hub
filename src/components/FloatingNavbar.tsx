import React from "react";

const FloatingNavbar: React.FC = () => {
    return (
        <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 z-50">
            <ul className="flex space-x-6">
                <li><a href="#home" className="text-gray-800 font-bold hover:text-blue-500 transition">Home</a></li>
                <li><a href="#projects" className="text-gray-800 font-bold hover:text-blue-500 transition">Projects</a></li>
                <li><a href="#services" className="text-gray-800 font-bold hover:text-blue-500 transition">Services</a></li>
                <li><a href="#contact" className="text-gray-800 font-bold hover:text-blue-500 transition">Contact</a></li>
            </ul>
        </nav>
    );
};

export default FloatingNavbar;
