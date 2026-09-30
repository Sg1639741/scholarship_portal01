import React, { useState } from 'react';
import { FAQ_DATA } from '../../data/faqData';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown, HelpCircle, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FaqSection = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: FAQ info & Downloads */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gov-saffron-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'FREQUENTLY ASKED QUESTIONS'}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-gov-navy-950">
              {lang === 'hi' ? 'छात्रवृत्ति से जुड़े महत्वपूर्ण सवाल व जवाब' : 'Got Questions About ST Scholarships?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Find quick, authentic answers to common queries regarding caste certificate verification, income limits, DigiLocker integration, and DBT payments.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-gov-navy-800" />
                <span>Important Official Guidelines</span>
              </h4>
              <ul className="text-xs space-y-2 text-blue-700">
                <li>
                  <a href="#rules" className="hover:underline flex items-center justify-between">
                    <span>MoTA Scholarship Operational Manual 2026</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#pvtg" className="hover:underline flex items-center justify-between">
                    <span>PM-JANMAN Educational PVTG Norms</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#dbt" className="hover:underline flex items-center justify-between">
                    <span>Aadhaar Seeding NPCI Bank Guide</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  to="/assistant"
                  className="w-full text-center block py-2 bg-gov-navy-900 hover:bg-gov-navy-800 text-amber-300 font-bold text-xs rounded transition"
                >
                  Ask JanJatiya AI Assistant
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 space-y-3">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-lg border border-slate-200 overflow-hidden bg-white shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                  >
                    <span className="text-xs sm:text-sm font-bold text-gov-navy-950">
                      {lang === 'hi' ? faq.qHi : faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-gov-saffron-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <p>{lang === 'hi' ? faq.aHi : faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
