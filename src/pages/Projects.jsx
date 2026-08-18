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
        "name": "Muhammad Daniyal Portfolio - Zyphuel, Poke nexus & ItxMDK Projects",
        "description": "Portfolio of Full-Stack Developer Muhammad Daniyal (ItxMDK / itsmdk / zphuel) showcasing Zyphuel, Poke nexus, Dashcart, Hittop, Scale verse, and Ladoni projects.",
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
        <header className="relative pt-36 pb-16 overflow-hidden radial-glow-cyan text-center">
          <div className="container mx-auto px-6 relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <i className="ri-code-box-line text-purple-400"></i> Featured Architectures (Latest First)
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display">
              Muhammad <span className="text-gradient-purple-cyan">Daniyal</span> Portfolio
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-8">
              Engineering <strong className="text-white">Zyphuel</strong> on-demand fuel logistics, <strong className="text-white">Poke nexus</strong> 3D systems, high-speed commerce, and distributed backend cloud platforms.
            </p>
            <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>
        </header>

        {/* About Me Detail Section */}
        <section className="container mx-auto py-16 px-6">
          <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gradient-purple-cyan font-display">About Me</h2>
              <h3 className="text-xl font-semibold mb-4 text-purple-300 font-display">
                Architecting High-Scale Digital Products & IoT Platforms
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                I am a Senior Full-Stack Developer and UI/UX Product Designer with extensive experience architecting modern web platforms and mission-critical systems like <strong className="text-white">Zyphuel</strong> (on-demand mobile fuel delivery in Pakistan).
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                My engineering approach blends state-of-the-art visual frontend interfaces (3D WebGL, React, Tailwind CSS) with fault-tolerant distributed backends (Node.js, IoT telemetry pipelines, and cloud APIs).
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Core Skills & Stacks</h4>
              <div className="flex flex-wrap gap-2.5">
                {coreSkills.map((skill, index) => {
                  const colors = [
                    'bg-purple-500/10 border-purple-500/25 text-purple-300',
                    'bg-cyan-500/10 border-cyan-500/25 text-cyan-300',
                    'bg-emerald-500/10 border-emerald-500/25 text-emerald-300',
                    'bg-blue-500/10 border-blue-500/25 text-blue-300',
                    'bg-amber-500/10 border-amber-500/25 text-amber-300',
                    'bg-indigo-500/10 border-indigo-500/25 text-indigo-300',
                    'bg-pink-500/10 border-pink-500/25 text-pink-300',
                  ];
                  const colorClass = colors[index % colors.length];
                  return (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${colorClass}`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-3 overflow-hidden max-w-sm">
                  <img
                    src="https://i.postimg.cc/05bcb8rt/MDK2.png"
                    alt="Muhammad Daniyal Portrait - Creator of Zyphuel & ItxMDK"
                    className="w-full h-auto object-cover rounded-xl transition duration-500 group-hover:scale-105"
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
          <div className="border-b border-white/10 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2 font-display">
                <i className="ri-projector-line text-purple-400"></i> Flagship Platforms & Applications
              </h2>
              <p className="text-slate-400 mt-2 text-sm">
                Chronological showcase of core systems built for utility, productivity, energy logistics, and scale.
              </p>
            </div>
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
              Showing Latest First (1 → {featuredProjects.length})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="glass-card rounded-2xl overflow-hidden block flex flex-col justify-between border border-white/10 hover:border-purple-500/40 transition-all duration-300">
                <div>
                  <div className="image-zoom-container h-52 bg-slate-900 border-b border-white/5 relative">
                    <img
                      src={project.image}
                      alt={`${project.title} Showcase`}
                      className="w-full h-full object-cover"
                      decoding="async"
                      loading="lazy"
                    />
                    {project.category && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] uppercase font-bold bg-slate-950/80 backdrop-blur border border-white/10 text-cyan-300">
                        {project.category}
                      </span>
                    )}
                  </div>
                  <div className="p-6 pb-2">
                    <h3 className="text-xl font-bold text-gradient-purple-cyan mb-2 font-display">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[10px] uppercase font-bold bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-semibold transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 border border-white/10 hover:bg-white/5 rounded-lg text-xs font-semibold transition text-slate-300"
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
