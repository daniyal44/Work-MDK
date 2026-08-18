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
    "@type": "ContactPage",
    "@id": "https://workmdk.netlify.app/contact#contactpage",
    "url": "https://workmdk.netlify.app/contact",
    "name": "Contact Muhammad Daniyal - Zyphuel & ItxMDK Creator",
    "description": "Get in touch with Muhammad Daniyal (itsmdk / ItxMDK / zphuel) for Zyphuel, Poke nexus, Dashcart, Hittop, Scale verse, and Ladoni inquiries."
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
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
        <header className="relative pt-36 pb-16 overflow-hidden radial-glow-cyan text-center">
          <div className="container mx-auto px-6 relative z-10 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display">
              Get In <span className="text-gradient-purple-cyan">Touch</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-8">
              Have an enterprise web project, a custom API system, or a creative design request? We are ready to help you launch.
            </p>
            <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>
        </header>

        {/* Contact Content Section */}
        <section className="container mx-auto py-16 px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Info Panel */}
            <div className="w-full lg:w-2/5 flex flex-col gap-8">
              <div className="relative w-full max-w-md mx-auto hidden lg:block">
                <div className="absolute -inset-4 bg-purple-500/10 rounded-full blur-xl opacity-60"></div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3594/3594445.png"
                  alt="Creative Contact illustration"
                  className="relative w-48 h-48 mx-auto object-contain animate-pulse"
                  decoding="async"
                  loading="lazy"
                />
              </div>

              <div className="glass-panel rounded-3xl p-8 border border-white/5 w-full">
                <h3 className="text-xl font-bold mb-6 text-purple-300 font-display">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/10 border border-purple-500/25 p-3 rounded-xl text-purple-400">
                      <i className="ri-map-pin-line text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm">Our Location</h4>
                      <p className="text-slate-400 text-xs mt-1">Lahore, Pakistan (Serving Globally)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/10 border border-purple-500/25 p-3 rounded-xl text-purple-400">
                      <i className="ri-phone-line text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm">Phone Number</h4>
                      <a href={`tel:${siteMetadata.phone}`} className="text-slate-400 hover:text-purple-400 text-xs mt-1 block">
                        (+92) 323-0112464
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/10 border border-purple-500/25 p-3 rounded-xl text-purple-400">
                      <i className="ri-mail-send-line text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm">Email Address</h4>
                      <a href={`mailto:${siteMetadata.email}`} className="text-slate-400 hover:text-purple-400 text-xs mt-1 block">
                        {siteMetadata.email}
                      </a>
                      <p className="text-slate-500 text-[11px] mt-0.5">ItxMDK@proton.me</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="w-full lg:w-3/5 glass-panel rounded-3xl border border-white/5 p-8 md:p-10 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#f8fafc] mb-2 font-display">Send A Message</h2>
              <p className="text-slate-400 mb-8 text-sm">
                Fill out the form details below, and we will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                <div className="relative">
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl glass-input placeholder-slate-500 text-sm"
                    placeholder="e.g. John Doe"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl glass-input placeholder-slate-500 text-sm"
                    placeholder="e.g. john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Project Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl glass-input cursor-pointer bg-[#0f172a] text-slate-200 text-sm"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="general" className="bg-slate-900">General Web Inquiry</option>
                    <option value="collaboration" className="bg-slate-900">Business Collaboration</option>
                    <option value="commission" className="bg-slate-900">Commission Request</option>
                    <option value="feedback" className="bg-slate-900">Product Feedback</option>
                    <option value="other" className="bg-slate-900">Other Options</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl glass-input placeholder-slate-500 text-sm resize-none"
                    placeholder="How can we help your business? Describe project specs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white rounded-xl accent-glow-btn font-semibold flex items-center justify-center gap-2 transition duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending Message...</span>
                      <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  ) : (
                    <span>Send Inquiry Message</span>
                  )}
                </button>
              </form>

              {/* Success feedback alert */}
              {showSuccess && (
                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 animate-fade-in-up">
                  <div className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-lg text-emerald-400"></i>
                    <span className="text-sm font-medium">
                      Thank you! Your message has been sent successfully. We will connect soon.
                    </span>
                  </div>
                </div>
              )}

              {/* Social media icons */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6 text-center">
                  Follow Us Globally
                </h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://instagram.com/MDKGallery"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="bg-white/5 border border-white/10 hover:bg-purple-500/10 hover:border-purple-400 p-3 rounded-full transition duration-300 text-slate-400 hover:text-purple-400 text-xl"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a
                    href="https://github.com/MuhammadDaniyalMDK"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="bg-white/5 border border-white/10 hover:bg-purple-500/10 hover:border-purple-400 p-3 rounded-full transition duration-300 text-slate-400 hover:text-purple-400 text-xl"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                  <a
                    href="https://twitter.com/MuhammadDaniyalMDK"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="bg-white/5 border border-white/10 hover:bg-purple-500/10 hover:border-purple-400 p-3 rounded-full transition duration-300 text-slate-400 hover:text-purple-400 text-xl"
                  >
                    <i className="ri-twitter-x-line"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/MuhammadDaniyalMDK"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="bg-white/5 border border-white/10 hover:bg-purple-500/10 hover:border-purple-400 p-3 rounded-full transition duration-300 text-slate-400 hover:text-purple-400 text-xl"
                  >
                    <i className="ri-linkedin-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
