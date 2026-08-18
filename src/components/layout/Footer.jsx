import React from 'react';
import { Link } from 'react-router-dom';
import { siteMetadata } from '../../data/seoData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-200 pt-16 pb-12 mt-20 bg-slate-50 text-slate-600 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left mb-16">
          
          {/* Column 1: Brand & Studio Overview */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-2xl font-bold flex items-center gap-2 text-blue-600 tracking-wider font-display group inline-block"
            >
              <i className="ri-gallery-line text-2xl text-blue-600 group-hover:rotate-12 transition-transform duration-300"></i>
              <span className="text-slate-900 font-extrabold">MDK <span className="text-blue-600">Gallery</span></span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              Creative Web Engineering & Interactive 3D Showcase by <strong className="text-slate-800">Muhammad Daniyal (MDK)</strong>. Building responsive web applications, modern interactive design systems, and distributed cloud solutions.
            </p>
            
            {/* Live Availability Status */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for New Projects</span>
              </div>
            </div>

            {/* Social Developer Profiles */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                Verified Social Profiles:
              </span>
              <div className="flex flex-wrap items-center gap-2 text-slate-600">
                <a
                  href={siteMetadata.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile - Muhammad Daniyal"
                  title="GitHub Profile"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-300 text-lg shadow-sm"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href={siteMetadata.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile - Muhammad Daniyal"
                  title="Personal LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-300 text-lg shadow-sm"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a
                  href={siteMetadata.socials.linkedinCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zyphuel Company LinkedIn"
                  title="Zyphuel Company LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-300 text-lg shadow-sm"
                >
                  <i className="ri-building-line"></i>
                </a>
                <a
                  href={siteMetadata.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile - Muhammad Daniyal"
                  title="Facebook Profile"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-300 text-lg shadow-sm"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href={siteMetadata.socials.gmb}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile - MDK Gallery"
                  title="Google Business Profile"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all duration-300 text-lg shadow-sm"
                >
                  <i className="ri-google-fill"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 font-display flex items-center gap-2">
              <i className="ri-compass-3-line text-blue-600"></i> Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line text-blue-500 group-hover:translate-x-1 transition-transform"></i> Home Showcase
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line text-blue-500 group-hover:translate-x-1 transition-transform"></i> Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line text-blue-500 group-hover:translate-x-1 transition-transform"></i> Technical Articles (130+)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line text-blue-500 group-hover:translate-x-1 transition-transform"></i> Engineering Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line text-blue-500 group-hover:translate-x-1 transition-transform"></i> About Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <i className="ri-arrow-right-s-line text-blue-500 group-hover:translate-x-1 transition-transform"></i> Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Engineering Specializations */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 font-display flex items-center gap-2">
              <i className="ri-code-box-line text-blue-600"></i> Specializations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Full-Stack Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> 3D WebGL & Interactive UI
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Real-Time Systems & IoT
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Cloud Architecture & APIs
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Performance Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Location & Direct Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 font-display flex items-center gap-2">
              <i className="ri-map-pin-2-line text-blue-600"></i> Location & Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <i className="ri-map-pin-2-fill text-blue-600 text-sm mt-0.5 flex-shrink-0"></i>
                <span className="leading-relaxed text-slate-700">
                  Lahore, Punjab 54400, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="ri-phone-fill text-blue-600 text-sm flex-shrink-0"></i>
                <a href={`tel:${siteMetadata.phone}`} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                  +92 323 0112464
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="ri-mail-fill text-blue-600 text-sm flex-shrink-0"></i>
                <a href={`mailto:${siteMetadata.email}`} className="text-slate-700 hover:text-blue-600 transition-colors font-medium truncate">
                  {siteMetadata.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="ri-time-fill text-blue-600 text-sm flex-shrink-0"></i>
                <span>Client Support: 24/7 Worldwide</span>
              </div>
              
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm shadow-blue-600/20"
                >
                  <i className="ri-send-plane-fill"></i> Send Quick Message
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} MDK Gallery. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-[11px]">
              Designed & Developed by <strong className="text-slate-800 font-semibold">Muhammad Daniyal</strong>
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white hover:bg-blue-600 hover:text-white border border-slate-200 flex items-center justify-center text-slate-600 transition-all duration-300 shadow-sm"
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <i className="ri-arrow-up-line"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
