"use client"

import { useState } from 'react';
import { PhoneForwarded } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b sticky top-0 border-gray-300 bg-white z-50">
      <div className="flex justify-between sm:justify-around items-center py-4 px-6">
        {/* Logo */}
        <Link href='/'>
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

        </Link>
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
          <li><Link href="/" className="transition-colors duration-300 hover:text-blue-500">Home</Link></li>
          <li><Link href="#about" className="transition-colors duration-300 hover:text-blue-500">About</Link></li>
          <li><Link href="#projects" className="transition-colors duration-300 hover:text-blue-500">Project</Link></li>
          <li><Link href="#skills" className="transition-colors duration-300 hover:text-blue-500">Skills</Link></li>
          <li><Link href="#contact" className="transition-colors duration-300 hover:text-blue-500">Contact</Link></li>
          <li>
            <Link href="mailto:sank.dahal@gmail.com" className="mt-4 py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer  text-center shadow-xs transition-all duration-500 hover:bg-indigo-700">
              Talk with Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu - Visible on small screens */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col space-y-4 py-4 px-6">
          <li><Link href="/" className="transition-colors duration-300 hover:text-blue-500">Home</Link></li>
          <li><Link href="#about" className="transition-colors duration-300 hover:text-blue-500">About</Link></li>
          <li><Link href="#projects" className="transition-colors duration-300 hover:text-blue-500">Project</Link></li>
          <li><Link href="#skills" className="transition-colors duration-300 hover:text-blue-500">Skills</Link></li>
          <li><Link href="#contact" className="transition-colors duration-300 hover:text-blue-500">Contact</Link></li>
          <hr />
          <li className='w-full flex flex-col flex-wrap justify-center items-center'>
            <Link href="mailto:sank.dahal@gmail.com" className="mt-4 py-2.5 flex flex-wrap justify-center items-center gap-2 w-full px-6 text-sm bg-indigo-500 text-center text-white rounded-lg cursor-pointer shadow-xs transition-all duration-500 hover:bg-indigo-700">
              <PhoneForwarded className='text-sm' /> Talk with  Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
