import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | MDK Gallery"
        description="The page you are looking for does not exist or has been moved."
        canonical="/404"
      />

      <main className="container mx-auto px-6 pt-44 pb-32 text-center flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-3xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 text-5xl mb-8 animate-pulse shadow-sm">
          <i className="ri-error-warning-line"></i>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-blue-600 font-display mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-display">
          Page Not Found
        </h2>
        <p className="text-slate-600 max-w-md mx-auto mb-8 text-sm leading-relaxed">
          The requested page or interactive demo could not be found. Use the quick links below to explore the showcase.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            to="/"
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl accent-glow-btn transition shadow-md shadow-blue-600/20"
          >
            Home Showcase
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold rounded-xl transition shadow-sm"
          >
            Explore Projects
          </Link>
          <Link
            to="/articles"
            className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold rounded-xl transition shadow-sm"
          >
            Read Articles
          </Link>
        </div>
      </main>
    </>
  );
}
