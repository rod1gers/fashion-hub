import React, { useState } from 'react';
import hamburgerIcon from '../icons/burger-menu.svg';
import closeIcon from '../icons/close-icon.svg';

interface MobileNavProps {
  className: string;
}

const MobileNav: React.FC<MobileNavProps> = ({className}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={`fixed flex right-0 items-center justify-center rounded-full shadow-lg focus:outline-none z-50 ${className}`}
      >
        {!isOpen ? (
          <div>
            <img
              src={hamburgerIcon}
            />          
          </div>
        ) : (
          <div>
            <img 
              src={closeIcon}
            />
          </div>
        )}
      </button>

      <nav
        className={`fixed top-0 right-0 h-full bg-dark_gray p-6 z-40 w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-6 mt-10 text-white">
          <li>
            <a href="/" className="font-bold transition">
              Home
            </a>
          </li>
          <li>
            <a href="/projects" className="font-bold transition">
              Projects
            </a>
          </li>
          <li>
            <a href="/resume" className="font-bold transition">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
