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
        <div className="w-24 h-24 rounded-3xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-5xl mb-8 animate-pulse">
          <i className="ri-error-warning-line"></i>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-gradient-purple-cyan font-display mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">
          Page Not Found
        </h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
          The interactive demo, showcase page, or link you are seeking has either moved or does not exist.
        </p>
        <Link
          to="/"
          className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl accent-glow-btn transition"
        >
          Return to Home Showcase
        </Link>
      </main>
    </>
  );
}
