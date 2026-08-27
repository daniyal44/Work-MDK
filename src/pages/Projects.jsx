import React from 'react';
import SEO from '../components/common/SEO';
import { pageSEO } from '../data/seoData';
import { featuredProjects, coreSkills } from '../data/projectsData';

export default function Projects() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://workmdk.netlify.app/projects#profilepage",
        "url": "https://workmdk.netlify.app/projects",
        "name": "Muhammad Daniyal Portfolio - MDK Art Gallery & Zyphuel Architecture",
        "description": "Portfolio of Full-Stack Developer & UI/UX Architect Muhammad Daniyal (MDK / ItxMDK) showcasing Zyphuel mobile fuel delivery, 3D WebGL experiments, and interactive web systems.",
        "inLanguage": "en-US",
        "mainEntity": { "@id": "https://workmdk.netlify.app/#person" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://workmdk.netlify.app/projects#breadcrumb",
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
            "name": "Featured Projects",
            "item": "https://workmdk.netlify.app/projects"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://workmdk.netlify.app/projects#itemlist",
        "name": "Featured Engineering Projects by Muhammad Daniyal",
        "itemListElement": featuredProjects.map((p, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": p.title,
          "description": p.description,
          "image": p.image,
          "url": p.demoUrl
        }))
      }
    ]
  };

  return (
    <>
      <SEO
        title={pageSEO.projects.title}
        description={pageSEO.projects.description}
        keywords={pageSEO.projects.keywords}
        canonical={pageSEO.projects.canonical}
        schema={projectsSchema}
      />

      <main>
        {/* Header Section */}
        <header className="relative pt-36 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white text-center">
          <div className="container mx-auto px-6 relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <i className="ri-code-box-line text-blue-600"></i> Featured Architectures (Latest First)
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-slate-900">
              Muhammad <span className="text-blue-600">Daniyal</span> Portfolio
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-8">
              Engineering <strong className="text-slate-900">Zyphuel</strong> on-demand fuel logistics, dynamic 3D web interfaces, CSS perspective transformations, and high-performance frontend architectures.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </header>

        {/* About Me Detail Section */}
        <section className="container mx-auto py-16 px-6">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 font-display">About Me</h2>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 font-display">
                Architecting High-Scale Digital Products & IoT Platforms
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                I am a Senior Full-Stack Developer and UI/UX Product Designer with extensive experience architecting modern web platforms and mission-critical systems like <strong className="text-slate-900 font-semibold">Zyphuel</strong> (on-demand mobile fuel delivery in Pakistan).
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                My engineering approach blends state-of-the-art visual frontend interfaces (3D WebGL, React, Tailwind CSS) with fault-tolerant distributed backends (Node.js, IoT telemetry pipelines, and cloud APIs).
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Core Skills & Stacks</h4>
              <div className="flex flex-wrap gap-2.5">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="relative bg-white border border-slate-200 rounded-3xl p-3 shadow-lg overflow-hidden max-w-sm">
                  <img
                    src="/images/daniyal.jpeg"
                    alt="Muhammad Daniyal Portrait - Creator of Zyphuel & ItxMDK"
                    className="w-full h-auto object-cover rounded-2xl transition duration-500 group-hover:scale-105"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Projects Grid (Latest First) */}
        <section className="container mx-auto py-16 px-6">
          <div className="border-b border-slate-200 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2 font-display text-slate-900">
                <i className="ri-projector-line text-blue-600"></i> Flagship Platforms & Applications
              </h2>
              <p className="text-slate-500 mt-2 text-sm">
                Chronological showcase of core systems built for utility, productivity, energy logistics, and scale.
              </p>
            </div>
            <span className="text-xs uppercase font-bold text-blue-700 tracking-wider">
              Showing Latest First (1 → {featuredProjects.length})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-3xl overflow-hidden block flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300">
                <div>
                  <div className="image-zoom-container h-52 bg-slate-50 border-b border-slate-100 relative">
                    <img
                      src={project.image}
                      alt={`${project.title} Showcase`}
                      className="w-full h-full object-cover"
                      decoding="async"
                      loading="lazy"
                    />
                    {project.category && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold bg-white/90 backdrop-blur border border-slate-200 text-blue-700 shadow-sm">
                        {project.category}
                      </span>
                    )}
                  </div>
                  <div className="p-6 pb-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[10px] uppercase font-semibold bg-slate-50 border border-slate-200 text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition shadow-sm"
                  >
                    Link
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold transition text-slate-700"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
