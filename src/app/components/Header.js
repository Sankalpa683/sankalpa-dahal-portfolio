"use client"

import { useState } from 'react';

export default function Navbar() {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b sticky top-0 border-gray-300 bg-white z-50">
      <div className="flex justify-between sm:justify-around items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full transform transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-xl font-semibold">
            Sankalpa <span className="text-blue-500">Dahal</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Menu Links - Hidden on mobile */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-500">About</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-500">Project</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-500">Skills</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-500">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu - Visible on small screens */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col space-y-4 py-4 px-6">
          <li><a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-500">About</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-500">Project</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-500">Skills</a></li>
          <li><a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
