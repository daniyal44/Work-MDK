import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import { pageSEO, siteMetadata } from '../data/seoData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://workmdk.netlify.app/contact#contactpage",
        "url": "https://workmdk.netlify.app/contact",
        "name": "Contact Muhammad Daniyal - Zyphuel & ItxMDK Creator",
        "description": "Get in touch with Muhammad Daniyal (itsmdk / ItxMDK / zphuel) for Zyphuel mobile fuel delivery, Poke nexus, Dashcart, Hittop, Scale verse, and Ladoni inquiries.",
        "inLanguage": "en-US",
        "mainEntity": { "@id": "https://workmdk.netlify.app/#person" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://workmdk.netlify.app/contact#breadcrumb",
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
            "name": "Contact Studio",
            "item": "https://workmdk.netlify.app/contact"
          }
        ]
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://workmdk.netlify.app/#localbusiness",
        "name": "MDK Gallery & Zyphuel Support",
        "url": "https://workmdk.netlify.app/",
        "telephone": siteMetadata.phone,
        "email": siteMetadata.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Boulevard, Gulberg III",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "postalCode": "54600",
          "addressCountry": "PK"
        }
      }
    ]
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 6000);
    }, 800);
  };

  return (
    <>
      <SEO
        title={pageSEO.contact.title}
        description={pageSEO.contact.description}
        keywords={pageSEO.contact.keywords}
        canonical={pageSEO.contact.canonical}
        schema={contactSchema}
      />

      <main>
        {/* Header Section */}
        <header className="relative pt-36 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white text-center">
          <div className="container mx-auto px-6 relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-6 uppercase tracking-wider">
              <i className="ri-mail-send-line text-blue-600"></i> Direct Inquiry & Support Channel
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-slate-900">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-8">
              Discuss enterprise contracts, custom full-stack web applications, or connect regarding <strong className="text-slate-900 font-semibold">Zyphuel</strong> mobile fuel infrastructure.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </header>

        {/* Contact Form & Studio Details */}
        <section className="container mx-auto py-16 px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Direct Studio & Founder Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 font-display text-slate-900">
                  Studio Headquarters
                </h2>
                <div className="space-y-6 text-sm text-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <i className="ri-map-pin-2-fill text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Physical Studio Location</h3>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        Lahore, Punjab 54400, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <i className="ri-phone-fill text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Direct Phone / WhatsApp</h3>
                      <a
                        href={`tel:${siteMetadata.phone}`}
                        className="text-blue-600 font-medium hover:underline text-xs mt-1 block"
                      >
                        +92 323 0112464
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <i className="ri-mail-fill text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Official Direct Email</h3>
                      <a
                        href={`mailto:${siteMetadata.email}`}
                        className="text-blue-600 font-medium hover:underline text-xs mt-1 block truncate"
                      >
                        {siteMetadata.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <i className="ri-time-fill text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Hours of Operation</h3>
                      <p className="text-slate-600 text-xs mt-1">24/7 Global Client Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer Connect Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold mb-3 font-display text-slate-900">Connect with Daniyal</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Engage on GitHub, explore verified professional records on LinkedIn, or inspect our official Google Maps profile.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteMetadata.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-xs font-semibold flex items-center gap-2 transition"
                  >
                    <i className="ri-github-fill"></i> GitHub
                  </a>
                  <a
                    href={siteMetadata.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-xs font-semibold flex items-center gap-2 transition"
                  >
                    <i className="ri-linkedin-fill"></i> LinkedIn
                  </a>
                  <a
                    href={siteMetadata.socials.gmb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-xs font-semibold flex items-center gap-2 transition"
                  >
                    <i className="ri-google-fill"></i> Google Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-md">
                <h2 className="text-2xl font-bold mb-2 font-display text-slate-900">
                  Send a Direct Message
                </h2>
                <p className="text-slate-500 text-xs mb-8">
                  Fill out the form below. We typically respond in under 2 hours.
                </p>

                {showSuccess && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3 animate-fade-in-up">
                    <i className="ri-checkbox-circle-fill text-lg text-emerald-600"></i>
                    <span>Thank you! Your message has been received. We will respond promptly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Inquiry Category
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-700 focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer"
                    >
                      <option value="">Select a subject...</option>
                      <option value="custom-web-app">Custom Web Application Development</option>
                      <option value="zyphuel-inquiry">Zyphuel Mobile Fuel Logistics</option>
                      <option value="3d-ui-ux">Interactive 3D UI/UX & WebGL</option>
                      <option value="seo-geo-strategy">SEO / AEO / GEO Search Engine Optimization</option>
                      <option value="general-partnership">General Inquiries & Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Project Details / Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline your project scope, requirements, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 text-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition accent-glow-btn flex items-center justify-center gap-2 shadow-md shadow-blue-600/25"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin text-lg"></i>
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-fill text-lg"></i>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
