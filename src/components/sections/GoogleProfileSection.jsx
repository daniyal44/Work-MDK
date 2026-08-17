import React from 'react';
import { siteMetadata } from '../../data/seoData';

export default function GoogleProfileSection() {
  return (
    <section id="google-business-profile-section" className="container mx-auto px-6 py-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto glass-card p-8 md:p-10 rounded-3xl border border-purple-500/20 bg-slate-900/60 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <i className="ri-google-fill text-base"></i> Google Business Profile Verified Studio
            </div>
            <h2 className="text-3xl font-black text-white mb-3 tracking-tight font-display">
              MDK Gallery — Web & UI/UX Studio
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Official Google Maps & Business Profile verified digital agency led by{' '}
              <strong className="text-purple-400">Muhammad Daniyal (MDK)</strong>. Delivering high-impact 3D web applications, visual interfaces, and custom full-stack solutions globally.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <i className="ri-map-pin-2-fill text-purple-400 text-lg flex-shrink-0"></i>
                <span>Main Boulevard, Gulberg III, Lahore, Punjab, Pakistan (Postal: 54600)</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-phone-fill text-emerald-400 text-lg flex-shrink-0"></i>
                <a href={`tel:${siteMetadata.phone}`} className="hover:text-emerald-400 transition-colors">
                  +92 323 0112464
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-mail-fill text-cyan-400 text-lg flex-shrink-0"></i>
                <a href={`mailto:${siteMetadata.email}`} className="hover:text-cyan-400 transition-colors">
                  {siteMetadata.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-time-fill text-amber-400 text-lg flex-shrink-0"></i>
                <span>Operating Hours: 24/7 Global Client Support</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-950/80 rounded-2xl border border-white/10 text-center">
            <div className="flex items-center gap-1 text-amber-400 text-xl mb-2">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <span className="text-white text-sm font-bold ml-2">5.0 / 5.0 Rating</span>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Top Rated Web Development & UI/UX Studio on Google Business Profile & International Platforms
            </p>
            <a
              href="https://maps.google.com/?cid=MDKGallery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
            >
              <i className="ri-google-fill text-lg"></i> View Google Business Profile & Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
