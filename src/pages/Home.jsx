import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GalleryGrid from '../components/gallery/GalleryGrid';
import FAQSection from '../components/sections/FAQSection';
import GoogleProfileSection from '../components/sections/GoogleProfileSection';
import { pageSEO } from '../data/seoData';

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://workmdk.netlify.app/#website",
        "url": "https://workmdk.netlify.app/",
        "name": "MDK Gallery - Zyphuel & Poke nexus Official Site",
        "alternateName": ["Zyphuel", "zphuel", "ItxMDK", "itxmtk", "MuhammadDaniel", "itsmdk", "itx dk", "itxM", "itcM", "Poke nexus", "Muhammad Daniyal", "Dashacart", "Hittop", "Scale verse", "Ladoni"],
        "description": "MDK Art Gallery — Home of Zyphuel, Poke nexus, Dashacart, Hittop, Scale verse, Ladoni, and interactive 3D web applications by Muhammad Daniyal (ItxMDK / itsmdk / MuhammadDaniel).",
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://workmdk.netlify.app/#organization",
        "name": "MDK Gallery",
        "url": "https://workmdk.netlify.app/",
        "logo": "https://i.postimg.cc/zDFwVm0R/a-3d-render-of-a-sleek-logo-displaying-t-WRu-g5NXRt6KYp-FGOq-b-Lw-16RSYne-RDW8XD5oo3lm-JA.jpg",
        "foundingDate": "2008"
      }
    ]
  };

  return (
    <>
      <SEO
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        canonical={pageSEO.home.canonical}
        schema={homeSchema}
      />

      {/* Hero Section */}
      <header className="relative pt-36 pb-20 overflow-hidden radial-glow-cyan">
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span> World-Class Web Artistry
          </div>
          <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 font-display">
            Interactive Demos & <br />
            <span className="text-gradient-purple-cyan">Creative Web Artwork</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
            A showcase of state-of-the-art interactive frontends, 3D CSS structures, and advanced animations designed by Muhammad Daniyal (MDK) for global clients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#gallery-section"
              className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl accent-glow-btn transition duration-300"
            >
              Explore Interactive Gallery
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card hover:bg-white/5 border border-white/10 font-semibold transition duration-300 text-slate-200"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </header>

      {/* Main Interactive Gallery Grid */}
      <main className="container mx-auto pb-24 px-6">
        <GalleryGrid />
      </main>

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* Google Profile Local SEO Card */}
      <GoogleProfileSection />
    </>
  );
}
