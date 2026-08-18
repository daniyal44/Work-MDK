import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { pageSEO, siteMetadata } from '../data/seoData';

export default function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": "https://workmdk.netlify.app/services#service",
        "url": "https://workmdk.netlify.app/services",
        "name": "MDK Gallery & Zyphuel Digital Engineering Services",
        "description": "Explore digital services by Muhammad Daniyal (itsmdk / ItxMDK / MuhammadDaniel / itxmtk / zphuel): custom Web Engineering, 3D Web UI, Zyphuel IoT energy logistics, Dashcart e-commerce, and cloud architecture.",
        "provider": {
          "@type": "Person",
          "name": "Muhammad Daniyal",
          "alternateName": "ItxMDK"
        },
        "areaServed": ["Worldwide", "United States", "United Kingdom", "Pakistan", "United Arab Emirates", "Canada", "Australia"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web & IoT Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full-Stack Web Development",
                "description": "React, Next.js, Node.js and cloud SPA architectures with 100% Core Web Vitals optimization."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UI/UX Design & 3D Visual Art",
                "description": "Interactive WebGL, Three.js 3D shaders, and accessible modern UI systems."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "IoT Energy Telemetry & Fleet Logistics",
                "description": "On-demand mobile dispatch systems, GPS tracking, and automated dispensing workflows (Zyphuel platform architecture)."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO, AEO & Generative Engine Optimization (GEO)",
                "description": "Schema graph architecture and technical optimization for Google, Bing, ChatGPT, and Gemini."
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://workmdk.netlify.app/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://workmdk.netlify.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://workmdk.netlify.app/services"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title={pageSEO.services.title}
        description={pageSEO.services.description}
        keywords={pageSEO.services.keywords}
        canonical={pageSEO.services.canonical}
        schema={servicesSchema}
      />

      <main>
        {/* Header Section */}
        <header className="relative pt-36 pb-16 overflow-hidden radial-glow-cyan text-center">
          <div className="container mx-auto px-6 relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-6 uppercase tracking-wider">
              <i className="ri-settings-4-line text-cyan-400"></i> Elite Web & IoT Engineering
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display">
              Enterprise <span className="text-gradient-emerald-cyan">Solutions & Services</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-8">
              From IoT energy logistics (<strong className="text-white">Zyphuel</strong>) and real-time geospatial tracking to high-impact 3D interfaces and full-stack web platforms.
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
        </header>

        {/* Services Grid Section */}
        <section className="container mx-auto py-16 px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Service 1: Web Development */}
            <div className="glass-card rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between group border border-white/10 hover:border-purple-500/40 transition-all duration-300">
              <div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-purple-900/40 to-slate-900/60 border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.2),transparent_70%)]"></div>
                  <i className="ri-code-s-slash-line text-7xl text-purple-400/80 group-hover:scale-110 transition duration-500"></i>
                </div>
                <span className="text-xs uppercase font-bold text-purple-400 tracking-widest mb-2 block">
                  Development Layer
                </span>
                <h3 className="text-2xl font-bold text-[#f8fafc] mb-4 font-display">
                  Full-Stack Web Development
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  Custom website architectures using modern frameworks like React, Next.js, Node.js, and CSS preprocessors. We build lightning-fast, responsive, SEO-ready codebases designed to convert global audiences.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-purple-400 text-base"></i> Single Page Apps (SPA) & Static Site Generators
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-purple-400 text-base"></i> Robust Backend REST & GraphQL API Integration
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-purple-400 text-base"></i> High Lighthouse Performance & 100% Core Web Vitals
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors text-sm"
                >
                  Inquire Service <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>

            {/* Service 2: UI/UX & 3D Web Design */}
            <div className="glass-card rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between group border border-white/10 hover:border-emerald-500/40 transition-all duration-300">
              <div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-slate-900/60 border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2),transparent_70%)]"></div>
                  <i className="ri-pantone-line text-7xl text-emerald-400/80 group-hover:scale-110 transition duration-500"></i>
                </div>
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest mb-2 block">
                  Visual & 3D Layer
                </span>
                <h3 className="text-2xl font-bold text-[#f8fafc] mb-4 font-display">
                  UI/UX Design & 3D Visual Art
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  User-centric interface layouts designed to elevate usability, prestige, and interactive engagement. We create prototypes, interactive 3D WebGL scenes (Three.js), and cohesive design systems.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-emerald-400 text-base"></i> High-Fidelity Wireframes, Prototypes & Micro-Interactions
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-emerald-400 text-base"></i> 3D CSS Structures & WebGL Shaders (Poke nexus style)
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-emerald-400 text-base"></i> Comprehensive Accessibility (WCAG) Alignment
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors text-sm"
                >
                  Inquire Service <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>

            {/* Service 3: IoT & Energy Logistics (Zyphuel Platform) */}
            <div className="glass-card rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between group border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
              <div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-slate-900/60 border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.2),transparent_70%)]"></div>
                  <i className="ri-truck-line text-7xl text-cyan-400/80 group-hover:scale-110 transition duration-500"></i>
                </div>
                <span className="text-xs uppercase font-bold text-cyan-400 tracking-widest mb-2 block">
                  Logistics & IoT Layer
                </span>
                <h3 className="text-2xl font-bold text-[#f8fafc] mb-4 font-display">
                  IoT Energy Telemetry & Fleet Logistics
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  Leveraging the architecture pioneered in <strong className="text-white">Zyphuel</strong>, we engineer on-demand mobile dispatch platforms, GPS tracking, tank telemetry monitors, and automated digital refueling workflows.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-cyan-400 text-base"></i> Real-Time GPS Tracking & Automated Vehicle Routing (VRP)
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-cyan-400 text-base"></i> IoT Dispenser Telemetry & Anti-Spill Automation
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-cyan-400 text-base"></i> 24/7 Enterprise Refueling Dispatch for Fleets & Generators
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors text-sm"
                >
                  Inquire Energy Logistics <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>

            {/* Service 4: Search Engine & AEO/GEO Optimization */}
            <div className="glass-card rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between group border border-white/10 hover:border-amber-500/40 transition-all duration-300">
              <div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-amber-900/40 to-slate-900/60 border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.2),transparent_70%)]"></div>
                  <i className="ri-search-eye-line text-7xl text-amber-400/80 group-hover:scale-110 transition duration-500"></i>
                </div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-widest mb-2 block">
                  Search & AI Indexing Layer
                </span>
                <h3 className="text-2xl font-bold text-[#f8fafc] mb-4 font-display">
                  SEO, AEO & Generative Engine Optimization (GEO)
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  Ensure your brand dominates Google, Bing, and AI Answer Engines (ChatGPT, Gemini, Perplexity, Claude) through semantic schema graphs, speakable metadata, and technical crawlability.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-amber-400 text-base"></i> Interlinked Schema.org JSON-LD (WebSite, Org, LocalBusiness, FAQ)
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-amber-400 text-base"></i> Voice Search (AEO) & AI Knowledge Graph Calibration
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-amber-400 text-base"></i> Google Business Profile Local SEO for Multi-City Expansion
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors text-sm"
                >
                  Inquire SEO / GEO Strategy <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
