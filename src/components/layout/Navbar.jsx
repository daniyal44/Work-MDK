import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Articles', path: '/articles' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <nav className="glass-nav fixed w-full z-30 top-0 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={closeMobileMenu}
          className="text-2xl font-bold flex items-center gap-2 text-blue-600 tracking-wider font-display group"
        >
          <i className="ri-gallery-line text-2xl text-blue-600 group-hover:rotate-12 transition-transform duration-300"></i>
          <span className="text-slate-900 font-extrabold">MDK <span className="text-blue-600">Gallery</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-7 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-0.5'
                    : 'text-slate-600 hover:text-blue-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-2xl focus:outline-none text-slate-800 hover:text-blue-600 transition"
          aria-label="Toggle navigation menu"
        >
          <i className={isMobileOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md w-full px-6 py-4 border-t border-slate-200 shadow-lg space-y-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block text-lg py-2 border-b border-slate-100 transition-colors ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
        </div>
      )}
    </nav>
  );
}
