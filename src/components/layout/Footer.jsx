import React from 'react';
import { Link } from 'react-router-dom';
import { siteMetadata } from '../../data/seoData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-12 mt-20 bg-slate-950/95 text-slate-400">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left mb-16">
          
          {/* Brand & Studio Overview */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-2xl font-bold flex items-center gap-2 text-gradient-purple-cyan tracking-wider font-display"
            >
              <i className="ri-gallery-line text-2xl text-purple-400"></i> MDK Gallery
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Creative Web Engineering & Interactive 3D Showcase by <strong className="text-slate-200">Muhammad Daniyal (MDK)</strong>. Building responsive web applications, modern interactive design systems, and distributed cloud solutions.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Developer Profiles:
              </span>
              <div className="flex items-center gap-3 text-slate-400">
                <a
                  href={siteMetadata.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile - Muhammad Daniyal"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 text-lg"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href={siteMetadata.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile - Muhammad Daniyal"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 text-lg"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a
                  href={siteMetadata.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile - MDK Gallery"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 text-lg"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href={siteMetadata.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter X Profile - Muhammad Daniyal"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 text-lg"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-4 font-display">
              Site Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="ri-arrow-right-s-line text-purple-400"></i> Home Showcase
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="ri-arrow-right-s-line text-purple-400"></i> Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="ri-arrow-right-s-line text-purple-400"></i> Technical Articles
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="ri-arrow-right-s-line text-purple-400"></i> Engineering Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="ri-arrow-right-s-line text-purple-400"></i> About Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <i className="ri-arrow-right-s-line text-purple-400"></i> Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering Specializations */}
          <div>
            <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-4 font-display">
              Specializations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Full-Stack Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> 3D WebGL & Interactive UI
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Real-Time Systems & IoT
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Cloud Architecture & APIs
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span> Performance Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Studio Contact */}
          <div>
            <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-4 font-display">
              Studio & Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <i className="ri-map-pin-2-fill text-purple-400 text-sm mt-0.5 flex-shrink-0"></i>
                <span className="leading-relaxed">
                  Main Boulevard, Gulberg III, Lahore, Punjab 54600, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="ri-phone-fill text-emerald-400 text-sm flex-shrink-0"></i>
                <a href={`tel:${siteMetadata.phone}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                  +92 323 0112464
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="ri-mail-fill text-cyan-400 text-sm flex-shrink-0"></i>
                <a href={`mailto:${siteMetadata.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors truncate">
                  {siteMetadata.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="ri-time-fill text-amber-400 text-sm flex-shrink-0"></i>
                <span>Client Support: 24/7 Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} MDK Gallery. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-[11px]">
            <span>Designed & Developed by <strong className="text-purple-400">Muhammad Daniyal</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
