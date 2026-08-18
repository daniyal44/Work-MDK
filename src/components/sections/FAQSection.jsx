import React, { useState } from 'react';
import { faqItems } from '../../data/faqData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="container mx-auto px-6 py-16 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <i className="ri-question-line text-blue-600"></i> Common Inquiries
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Everything you need to know about MDK Studio, Zyphuel, and our engineering workflows.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:border-blue-500"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-base md:text-lg font-bold font-display transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
                    {item.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <i className="ri-arrow-down-s-line text-lg"></i>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2 animate-fade-in-up">
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
