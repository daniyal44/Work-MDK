import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { pageSEO } from '../data/seoData';

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
        <header className="relative pt-36 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white text-center">
          <div className="container mx-auto px-6 relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-6 uppercase tracking-wider">
              <i className="ri-settings-4-line text-blue-600"></i> Elite Web & IoT Engineering
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-slate-900">
              Enterprise <span className="text-blue-600">Solutions & Services</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-8">
              From IoT energy logistics (<strong className="text-slate-900">Zyphuel</strong>) and real-time geospatial tracking to high-impact 3D interfaces and full-stack web platforms.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </header>

        {/* Services Grid Section */}
        <section className="container mx-auto py-16 px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Service 1: Web Development */}
            <div className="bg-white rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between group border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300">
              <div>
                <div className="h-48 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 relative overflow-hidden">
                  <i className="ri-code-s-slash-line text-7xl text-blue-600/80 group-hover:scale-110 transition duration-500"></i>
                </div>
                <span className="text-xs uppercase font-bold text-blue-600 tracking-widest mb-2 block">
                  Development Layer
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                  Full-Stack Web Development
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  Custom website architectures using modern frameworks like React, Next.js, Node.js, and CSS preprocessors. We build lightning-fast, responsive, SEO-ready codebases designed to convert global audiences.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> Single Page Apps (SPA) & Static Site Generators
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> Robust Backend REST & GraphQL API Integration
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> High Lighthouse Performance & 100% Core Web Vitals
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  Inquire Service <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>

            {/* Service 2: UI/UX & 3D Web Design */}
            <div className="bg-white rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between group border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300">
              <div>
                <div className="h-48 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 relative overflow-hidden">
                  <i className="ri-pantone-line text-7xl text-blue-600/80 group-hover:scale-110 transition duration-500"></i>
                </div>
                <span className="text-xs uppercase font-bold text-blue-600 tracking-widest mb-2 block">
                  Visual & 3D Layer
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                  UI/UX Design & 3D Visual Art
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  User-centric interface layouts designed to elevate usability, prestige, and interactive engagement. We create prototypes, interactive 3D WebGL scenes (Three.js), and cohesive design systems.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> High-Fidelity Wireframes, Prototypes & Micro-Interactions
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> 3D CSS Structures & WebGL Shaders (Poke nexus style)
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> Comprehensive Accessibility (WCAG) Alignment
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  Inquire Service <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>

            {/* Service 3: IoT & Energy Logistics (Zyphuel Platform) */}
            <div className="bg-white rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between group border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300">
              <div>
                <div className="h-48 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 relative overflow-hidden">
                  <i className="ri-truck-line text-7xl text-blue-600/80 group-hover:scale-110 transition duration-500"></i>
                </div>
                <span className="text-xs uppercase font-bold text-blue-600 tracking-widest mb-2 block">
                  Logistics & IoT Layer
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                  IoT Energy Telemetry & Fleet Logistics
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  Leveraging the architecture pioneered in <strong className="text-slate-900">Zyphuel</strong>, we engineer on-demand mobile dispatch platforms, GPS tracking, tank telemetry monitors, and automated digital refueling workflows.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> Real-Time GPS Tracking & Automated Vehicle Routing (VRP)
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> IoT Dispenser Telemetry & Anti-Spill Automation
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> 24/7 Enterprise Refueling Dispatch for Fleets & Generators
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  Inquire Energy Logistics <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>

            {/* Service 4: Search Engine & AEO/GEO Optimization */}
            <div className="bg-white rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between group border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300">
              <div>
                <div className="h-48 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 relative overflow-hidden">
                  <i className="ri-search-eye-line text-7xl text-blue-600/80 group-hover:scale-110 transition duration-500"></i>
                </div>
                <span className="text-xs uppercase font-bold text-blue-600 tracking-widest mb-2 block">
                  Search & AI Indexing Layer
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                  SEO, AEO & Generative Engine Optimization (GEO)
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  Ensure your brand dominates Google, Bing, and AI Answer Engines (ChatGPT, Gemini, Perplexity, Claude) through semantic schema graphs, speakable metadata, and technical crawlability.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> Interlinked Schema.org JSON-LD (WebSite, Org, LocalBusiness, FAQ)
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> Voice Search (AEO) & AI Knowledge Graph Calibration
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <i className="ri-checkbox-circle-fill text-blue-600 text-base"></i> Google Business Profile Local SEO for Multi-City Expansion
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
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
