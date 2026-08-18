import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GalleryGrid from '../components/gallery/GalleryGrid';
import FAQSection from '../components/sections/FAQSection';
import { pageSEO, siteMetadata } from '../data/seoData';
import { zyphuelArticles } from '../data/articlesData';

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://workmdk.netlify.app/#website",
        "url": "https://workmdk.netlify.app/",
        "name": "MDK Art Gallery - Official Creative Web Showcase",
        "alternateName": [
          "MDK Art Gallery", "MDK Gallery", "Muhammad Daniyal", 
          "ItxMDK", "itsmdk", "MuhammadDaniel", "itxmtk", 
          "Zyphuel", "Poke nexus", "Dashcart", "Hittop", "Scale verse", "Ladoni"
        ],
        "description": "MDK Art Gallery — Official digital art and interactive web showcase featuring 130+ 3D WebGL experiments, CSS engineering demos, and creative systems by Muhammad Daniyal (MDK / ItxMDK).",
        "inLanguage": "en-US",
        "publisher": { "@id": "https://workmdk.netlify.app/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://workmdk.netlify.app/#organization",
        "name": "MDK Art Gallery",
        "url": "https://workmdk.netlify.app/",
        "logo": siteMetadata.defaultImage,
        "founder": { "@id": "https://workmdk.netlify.app/#person" }
      },
      {
        "@type": "Person",
        "@id": "https://workmdk.netlify.app/#person",
        "name": "Muhammad Daniyal",
        "alternateName": ["ItxMDK", "itsmdk", "MuhammadDaniel", "itxmtk", "MDK"],
        "jobTitle": "Lead Full-Stack Architect, Creative Developer & Founder",
        "url": "https://workmdk.netlify.app/about"
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
      <header className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-6 uppercase tracking-wider shadow-sm">
            <i className="ri-gallery-line text-blue-600"></i> Creative Web Engineering & Interactive Art
          </div>
          <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 font-display text-slate-900">
            MDK Art Gallery, <br />
            <span className="text-blue-600">Creative 3D Web & UI Showcase</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
            The official digital showcase for <strong className="text-slate-900 font-semibold">MDK Art Gallery</strong>, featuring 130+ interactive 3D web experiments, creative animations, generative UI designs, and modern frontend engineering curated and developed by <strong className="text-blue-600 font-semibold">Muhammad Daniyal (MDK / ItxMDK)</strong>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#gallery-section"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl accent-glow-btn transition duration-300 shadow-md shadow-blue-600/25"
            >
              Explore 130+ Artworks
            </a>
            <Link
              to="/articles"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 font-semibold transition duration-300 text-blue-600 flex items-center justify-center gap-2 shadow-sm"
            >
              <i className="ri-article-line text-lg"></i> Technical Case Studies
            </Link>
          </div>
        </div>
      </header>

      {/* Main Interactive Gallery Grid (Latest Projects First) */}
      <main className="container mx-auto pb-16 px-6">
        <GalleryGrid />
      </main>

      {/* Featured Articles & Technical Insights Section */}
      <section className="container mx-auto px-6 py-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <i className="ri-newspaper-line text-blue-600"></i> Technical Insights
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                Featured <span className="text-blue-600">Technical Articles</span>
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mt-2">
                Discover the architecture, IoT telemetry engineering, and design systems powering our 130+ projects.
              </p>
            </div>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              View All 130+ Articles <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {zyphuelArticles.slice(0, 2).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 group"
              >
                <div>
                  <div className="image-zoom-container h-52 rounded-2xl overflow-hidden mb-6 bg-slate-50 border border-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs uppercase font-bold text-blue-600 tracking-widest mb-2 block">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>
                <div>
                  <Link
                    to="/articles"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                  >
                    Read Full Story <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <FAQSection />
    </>
  );
}
