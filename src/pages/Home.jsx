import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import GalleryGrid from '../components/gallery/GalleryGrid';
import FAQSection from '../components/sections/FAQSection';
import GoogleProfileSection from '../components/sections/GoogleProfileSection';
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
        "name": "MDK Gallery - Zyphuel & Poke nexus Official Site",
        "alternateName": [
          "Zyphuel", "zphuel", "ItxMDK", "itxmtk", "MuhammadDaniel", 
          "itsmdk", "itx dk", "itxM", "itcM", "Poke nexus", 
          "Muhammad Daniyal", "Dashcart", "Hittop", "Scale verse", "Ladoni"
        ],
        "description": "MDK Art Gallery — Home of Zyphuel on-demand mobile fuel delivery, Poke nexus, Dashcart, Hittop, Scale verse, Ladoni, and interactive 3D web applications by Muhammad Daniyal (ItxMDK / itsmdk / MuhammadDaniel).",
        "inLanguage": "en-US",
        "publisher": { "@id": "https://workmdk.netlify.app/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://workmdk.netlify.app/?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://workmdk.netlify.app/#organization",
        "name": "MDK Gallery",
        "alternateName": ["Zyphuel Ecosystem", "Poke nexus Studio", "Dashcart Group", "Hittop Network", "Scale verse", "Ladoni Enterprise", "ItxMDK Digital"],
        "url": "https://workmdk.netlify.app/",
        "logo": siteMetadata.defaultImage,
        "foundingDate": "2008",
        "founder": { "@id": "https://workmdk.netlify.app/#person" },
        "sameAs": [
          siteMetadata.socials.github,
          siteMetadata.socials.linkedin,
          siteMetadata.socials.instagram,
          siteMetadata.socials.twitter,
          siteMetadata.socials.youtube,
          siteMetadata.socials.tiktok
        ],
        "areaServed": ["Worldwide", "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Pakistan"]
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService", "WebDesigner"],
        "@id": "https://workmdk.netlify.app/#localbusiness",
        "name": "MDK Gallery - Zyphuel, Poke nexus & ItxMDK Web Studio",
        "alternateName": [
          "Muhammad Daniyal MDK Web Development", "itsmdk Studio Lahore", 
          "Zyphuel Tech", "Poke nexus Labs", "Dashcart Web", 
          "Hittop Media", "Scale verse Digital", "Ladoni Creative"
        ],
        "url": "https://workmdk.netlify.app/",
        "logo": siteMetadata.defaultImage,
        "image": siteMetadata.defaultImage,
        "telephone": siteMetadata.phone,
        "email": siteMetadata.email,
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Boulevard, Gulberg III",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "postalCode": "54600",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 31.5204,
          "longitude": 74.3587
        },
        "hasMap": "https://maps.google.com/?cid=MDKGallery",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "48",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Person",
        "@id": "https://workmdk.netlify.app/#person",
        "name": "Muhammad Daniyal",
        "alternateName": ["ItxMDK", "itsmdk", "MuhammadDaniel", "itxmtk", "itx dk", "itxM", "itcM", "zphuel", "Zyphuel Lead"],
        "jobTitle": "Lead Creator & Founder of Zyphuel, Poke nexus, Dashcart, Hittop, Scale verse, Ladoni",
        "url": "https://workmdk.netlify.app/about",
        "email": siteMetadata.email,
        "sameAs": [
          siteMetadata.socials.github,
          siteMetadata.socials.linkedin,
          siteMetadata.socials.instagram,
          siteMetadata.socials.twitter
        ],
        "knowsAbout": [
          "Zyphuel Mobile Fuel Delivery", "IoT Energy Logistics", "zphuel Systems", 
          "ItxMDK Projects", "itxmtk Platforms", "MuhammadDaniel Apps", "itsmdk Design", 
          "Poke nexus Gaming Engine", "Dashcart E-Commerce", "Hittop Digital", 
          "Scale verse Cloud", "Ladoni Platform", "3D Web Graphics", "Frontend Architecture", 
          "React", "Next.js", "Node.js", "Tailwind CSS", "UI/UX Design", "Full Stack Development", 
          "SEO, AEO & GEO Optimization"
        ]
      },
      {
        "@type": "SpeakableSpecification",
        "@id": "https://workmdk.netlify.app/#speakable",
        "cssSelector": ["#hero-title", "#seo-voice-summary"]
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span> Zyphuel Ecosystem & Web Artistry
          </div>
          <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 font-display">
            Interactive Demos, <br />
            <span className="text-gradient-purple-cyan">Zyphuel & Creative Systems</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
            The official showcase for <strong className="text-white">Zyphuel</strong> (on-demand energy logistics), <strong className="text-white">Poke nexus</strong>, <strong className="text-white">Dashcart</strong>, and state-of-the-art interactive 3D web applications designed by <strong className="text-purple-400">Muhammad Daniyal (MDK / ItxMDK)</strong>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#gallery-section"
              className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl accent-glow-btn transition duration-300"
            >
              Explore Latest Projects
            </a>
            <Link
              to="/articles"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card hover:bg-purple-600/20 border border-purple-500/30 font-semibold transition duration-300 text-purple-300 flex items-center justify-center gap-2"
            >
              <i className="ri-article-line text-lg"></i> Read Zyphuel Articles
            </Link>
          </div>
        </div>
      </header>

      {/* Main Interactive Gallery Grid (Latest Projects First) */}
      <main className="container mx-auto pb-16 px-6">
        <GalleryGrid />
      </main>

      {/* Featured Zyphuel Articles & Technical Insights Section */}
      <section className="container mx-auto px-6 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <i className="ri-newspaper-line text-cyan-400"></i> Industry Insights
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                Featured <span className="text-gradient-purple-cyan">Zyphuel Articles</span>
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mt-2">
                Discover the technology, safety engineering, and IoT telemetry architecture behind Pakistan's 24/7 mobile fuel network.
              </p>
            </div>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All Articles <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {zyphuelArticles.slice(0, 2).map((article) => (
              <div
                key={article.id}
                className="glass-card rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between border border-white/10 group"
              >
                <div>
                  <div className="image-zoom-container h-48 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs uppercase font-bold text-cyan-400 tracking-widest mb-2 block">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-purple-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>
                <div>
                  <Link
                    to="/articles"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
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

      {/* Google Profile Local SEO Card */}
      <GoogleProfileSection />
    </>
  );
}
