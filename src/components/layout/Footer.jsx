import React from 'react';
import { Link } from 'react-router-dom';
import { siteMetadata } from '../../data/seoData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-20 bg-slate-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-3 font-display">MDK Gallery</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Interactive 3D Web & Creative Frontend Showcase by Muhammad Daniyal (MDK).
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href={siteMetadata.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-purple-400 transition-colors text-lg"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href={siteMetadata.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-purple-400 transition-colors text-lg"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href={siteMetadata.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="hover:text-purple-400 transition-colors text-lg"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About MDK Studio</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Web & UI Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Studio</Link>
              </li>
            </ul>
          </div>

          {/* SEO & Indexing Column */}
          <div>
            <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-4">SEO & Indexing</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">XML Sitemap</a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Robots Directives</a>
              </li>
              <li>
                <a href="/manifest.json" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PWA Web Manifest</a>
              </li>
              <li>
                <a href="https://maps.google.com/?cid=MDKGallery" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Maps Profile</a>
              </li>
            </ul>
          </div>

          {/* Location & NAP Column */}
          <div>
            <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-4">Location & NAP</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-2">
              Main Boulevard, Gulberg III, Lahore, Punjab 54600, Pakistan
            </p>
            <p className="text-xs text-slate-400">
              Phone:{' '}
              <a href="tel:+923230112464" className="text-purple-400 hover:underline">
                +92 323 0112464
              </a>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Email:{' '}
              <a href="mailto:m.daniyalkhan490@gmail.com" className="text-purple-400 hover:underline">
                m.daniyalkhan490@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MDK Gallery. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed by Muhammad Daniyal (MDK)</p>
        </div>
      </div>
    </footer>
  );
}
