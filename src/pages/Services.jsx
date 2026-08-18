import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { pageSEO } from '../data/seoData';

export default function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://workmdk.netlify.app/services#service",
    "url": "https://workmdk.netlify.app/services",
    "name": "MDK Gallery - Web & UI/UX Design Services",
    "description": "Explore digital services by Muhammad Daniyal (itsmdk / ItxMDK / MuhammadDaniel / itxmtk / zphuel): custom Web Engineering, 3D Web UI, Zyphuel, Poke nexus, Dashcart, Hittop, Scale verse, and Ladoni architecture."
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-6 uppercase tracking-wider">
              <i className="ri-settings-4-line text-cyan-400"></i> Elite Web Capabilities
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display">
              Professional <span className="text-gradient-emerald-cyan">Solutions</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-8">
              Providing high-performance web systems and strategic interface designs optimized for conversion, branding, and scale.
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
        </header>

        {/* Services Grid Section */}
        <section className="container mx-auto py-16 px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Service 1: Web Development */}
            <div className="glass-card rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-purple-900/40 to-slate-900/60 border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.2),transparent_70%)]"></div>
                  <i className="ri-code-s-slash-line text-7xl text-purple-400/80 group-hover:scale-110 transition duration-500"></i>
                </div>
                <span className="text-xs uppercase font-bold text-purple-400 tracking-widest mb-2 block">
                  Development Layer
                </span>
                <h3 className="text-2xl font-bold text-[#f8fafc] mb-4 font-display">
                  Web Development
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  Custom website architectures using standard modern frameworks like React, Next.js, and CSS preprocessors. We build lightning-fast, responsive, SEO-ready codebases designed to convert global audiences.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-purple-400 text-base"></i> Single Page Apps & Static Generators
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-purple-400 text-base"></i> Robust Backend REST & GraphQL API Integration
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-purple-400 text-base"></i> High Lighthouse Performance & Core Web Vitals
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

            {/* Service 2: UI/UX Design */}
            <div className="glass-card rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-slate-900/60 border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2),transparent_70%)]"></div>
                  <i className="ri-pantone-line text-7xl text-emerald-400/80 group-hover:scale-110 transition duration-500"></i>
                </div>
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest mb-2 block">
                  Visual Layer
                </span>
                <h3 className="text-2xl font-bold text-[#f8fafc] mb-4 font-display">
                  UI/UX Design
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  User-centric interface layouts designed to elevate usability, prestige, and visual interaction. We construct prototypes, conduct customer research, and construct premium brand elements.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-emerald-400 text-base"></i> High-Fidelity Wireframes & Prototypes
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-emerald-400 text-base"></i> Custom Interactive Design Systems
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <i className="ri-checkbox-circle-fill text-emerald-400 text-base"></i> Accessibility (WCAG) Alignment
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
          </div>
        </section>
      </main>
    </>
  );
}
