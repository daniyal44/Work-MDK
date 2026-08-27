import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { pageSEO } from '../data/seoData';
import { teamMembers, coreValues } from '../data/teamData';

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://workmdk.netlify.app/about#aboutpage",
        "url": "https://workmdk.netlify.app/about",
        "name": "About MDK Gallery & Zyphuel - Muhammad Daniyal (ItxMDK)",
        "description": "Learn about MDK Gallery, Zyphuel mobile fuel delivery, Poke nexus, Dashcart, Hittop, Scale verse, Ladoni, and founder Muhammad Daniyal (itsmdk / ItxMDK / MuhammadDaniel).",
        "inLanguage": "en-US",
        "mainEntity": { "@id": "https://workmdk.netlify.app/#person" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://workmdk.netlify.app/about#breadcrumb",
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
            "name": "About Studio",
            "item": "https://workmdk.netlify.app/about"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://workmdk.netlify.app/#person",
        "name": "Muhammad Daniyal",
        "alternateName": ["ItxMDK", "itsmdk", "MuhammadDaniel", "itxmtk", "zphuel", "Zyphuel Lead"],
        "jobTitle": "Lead Full-Stack Developer & Founder",
        "image": "/images/daniyal.jpeg",
        "url": "https://workmdk.netlify.app/about",
        "worksFor": {
          "@type": "Organization",
          "name": "MDK Gallery",
          "url": "https://workmdk.netlify.app/"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title={pageSEO.about.title}
        description={pageSEO.about.description}
        keywords={pageSEO.about.keywords}
        canonical={pageSEO.about.canonical}
        schema={aboutSchema}
      />

      <main id="main-content">
        {/* Hero Section */}
        <header className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white text-center">
          <div className="container mx-auto px-6 relative z-10 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-slate-900">
              About <span className="text-blue-600">MDK Gallery & Studio</span>
            </h1>
            <p className="hero-description max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed mb-10">
              We transform complex ideas into breathtaking digital platforms through the fusion of design strategy, IoT energy logistics (<strong className="text-blue-600">Zyphuel</strong>), high-end frontend coding, and 3D web technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-full text-sm font-semibold text-slate-700">
                <span className="text-blue-600 font-bold">15+ Years</span> of Experience
              </div>
              <div className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-full text-sm font-semibold text-slate-700">
                <span className="text-blue-600 font-bold">250+</span> Projects & Systems
              </div>
              <div className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-full text-sm font-semibold text-slate-700">
                <span className="text-blue-600 font-bold">24/7</span> Client Support
              </div>
            </div>
          </div>
        </header>

        {/* Our Story Section */}
        <section className="container mx-auto py-16 px-6" aria-labelledby="story-heading">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="relative bg-white border border-slate-200 rounded-3xl p-3 shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="MDK Gallery creative studio team collaborating on web strategy and Zyphuel energy architecture"
                    title="MDK Gallery Studio Workspace"
                    width="800"
                    height="600"
                    className="w-full h-auto object-cover rounded-2xl transition duration-500 group-hover:scale-105"
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-bold font-display">MDK Innovation Lab</p>
                    <p className="text-xs text-slate-200 mt-1">Home of Zyphuel, Poke nexus, Dashcart & Scale verse</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 id="story-heading" className="text-3xl font-bold mb-6 text-slate-900 font-display">
                Our Story & <span className="text-blue-600">Vision</span>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded by lead developer <strong className="text-slate-900 font-semibold">Muhammad Daniyal (MDK / ItxMDK)</strong>, MDK Gallery originated as a creative studio and has evolved into an enterprise digital incubator. Beyond building visually stunning 3D web applications, Daniyal engineered <strong className="text-blue-600 font-semibold">Zyphuel</strong>—Pakistan's pioneering on-demand mobile fuel delivery ecosystem headquartered in Lahore.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We combine 3D WebGL graphics, IoT telemetry sensors, cloud microservices, and geospatial dispatch engines to create applications that serve international and local enterprises across 15+ countries.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 text-center">
                  <div className="text-2xl font-black text-blue-600 font-display">15+</div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">Years Experience</div>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 text-center">
                  <div className="text-2xl font-black text-blue-600 font-display">250+</div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">Demos & Apps</div>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 text-center">
                  <div className="text-2xl font-black text-blue-600 font-display">24/7</div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">Active Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="container mx-auto py-16 px-6" aria-labelledby="approach-heading">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80"
                    alt="MDK Gallery designers sketching UI/UX layouts"
                    title="UI/UX Prototyping Phase"
                    width="600"
                    height="700"
                    className="w-full h-full object-cover"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
                    alt="Frontend software engineer coding interactive 3D web code"
                    title="Frontend Code Development"
                    width="600"
                    height="500"
                    className="w-full h-full object-cover"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 id="approach-heading" className="text-3xl font-bold mb-6 text-slate-900 font-display">
                Our Engineering <span className="text-blue-600">Approach</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether deploying on-demand energy logistics like Zyphuel or 3D WebGL web showcases, our workflow is rigorous and data-driven:
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                    <i className="ri-lightbulb-line text-xl" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">1. Strategy & System Architecture</h3>
                    <p className="text-slate-600 text-sm mt-1">
                      We model complex telemetry data, business workflows, and user requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                    <i className="ri-palette-line text-xl" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">2. Interactive Design & Telemetry UI</h3>
                    <p className="text-slate-600 text-sm mt-1">
                      We craft real-time geospatial dashboards, 3D visual models, and intuitive controls.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                    <i className="ri-code-box-line text-xl" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">3. Full-Stack Code & High-Scale Deployment</h3>
                    <p className="text-slate-600 text-sm mt-1">
                      We engineer resilient APIs, WebSocket streaming, and optimized multi-region servers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto py-16 px-6" aria-labelledby="values-heading">
          <div className="text-center mb-12">
            <h2 id="values-heading" className="text-3xl font-bold text-slate-900 font-display">
              Our Core <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm">The guidelines behind everything we deploy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val) => (
              <div key={val.id} className="bg-white p-8 rounded-3xl text-center border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto mb-6 text-2xl">
                  <i className={val.icon} aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 font-display text-slate-900">{val.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="container mx-auto py-16 px-6" aria-labelledby="team-heading">
          <div className="text-center mb-12">
            <h2 id="team-heading" className="text-3xl font-bold text-slate-900 font-display">
              Meet Our <span className="text-blue-600">Leadership</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm">The architects driving MDK Gallery forward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <article key={member.id} className="bg-white rounded-3xl overflow-hidden group border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={member.image}
                    alt={`${member.name} photo - ${member.role} at MDK Gallery`}
                    title={`${member.name} - ${member.role}`}
                    width="600"
                    height="750"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-900">{member.name}</h3>
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-1 mb-3">
                      {member.role}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
