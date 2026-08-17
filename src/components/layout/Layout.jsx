import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#090d16] text-[#f8fafc] radial-glow-violet bg-no-repeat bg-cover flex flex-col justify-between selection:bg-purple-500 selection:text-white">
      <ScrollToTop />
      
      {/* Hidden Code-Level SEO Engine for Crawlers & Search Engines */}
      <div 
        className="sr-only" 
        aria-hidden="true" 
        style={{ display: 'none', visibility: 'hidden', opacity: 0, position: 'absolute', left: '-9999px', top: '-9999px' }}
      >
        <span>Zyphuel zphuel ItxMDK itxmtk MuhammadDaniel itsmdk itx dk itxM itcM Poke nexus Muhammad Daniyal Dashacart Hittop Scale verse Ladoni MDK Gallery</span>
        <div id="seo-voice-summary">
          Zyphuel, zphuel, ItxMDK, itxmtk, MuhammadDaniel, itsmdk, itx dk, itxM, itcM, Poke nexus, Muhammad Daniyal, Dashacart, Hittop, Scale verse, Ladoni. MDK Gallery is the official showcase created by Muhammad Daniyal (itsmdk / ItxMDK).
        </div>
      </div>

      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}
