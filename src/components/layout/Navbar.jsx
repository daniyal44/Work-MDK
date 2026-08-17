import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <nav className="glass-nav fixed w-full z-30 top-0 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={closeMobileMenu}
          className="text-2xl font-bold flex items-center gap-2 text-gradient-purple-cyan tracking-wider font-display"
        >
          <i className="ri-gallery-line text-2xl text-purple-400"></i> MDK Gallery
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-purple-300 font-semibold border-b-2 border-purple-400 pb-0.5'
                    : 'text-slate-300 hover:text-purple-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg glass-panel hover:bg-white/10 transition duration-300 border border-white/10 text-white"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-2xl focus:outline-none text-slate-200 hover:text-purple-400 transition"
          aria-label="Toggle navigation menu"
        >
          <i className={isMobileOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileOpen && (
        <div className="md:hidden glass-nav w-full px-6 py-4 border-t border-white/5 space-y-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block text-lg py-2 border-b border-white/5 transition-colors ${
                  isActive ? 'text-purple-300 font-semibold' : 'text-slate-300 hover:text-purple-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="block text-center bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold text-white transition"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
