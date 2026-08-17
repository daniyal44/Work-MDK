import React, { useState } from 'react';
import { faqItems } from '../../data/faqData';

export default function FAQSection() {
  // Store which FAQ is currently opened (or default to null/first one)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="container mx-auto px-6 py-16 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gradient-purple-cyan font-display">
          Frequently Asked Questions & Key Facts
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={item.id} 
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg md:text-xl font-bold text-purple-300 font-display">
                    {item.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-purple-600 text-white' : ''}`}>
                    <i className="ri-arrow-down-s-line text-lg"></i>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 mt-2 animate-fade-in-up">
                    <p className="mt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
