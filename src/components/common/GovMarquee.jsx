import React from 'react';
import { Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const GovMarquee = () => {
  const { lang } = useLanguage();

  const announcements = [
    {
      textEn: "📢 National Overseas Scholarship (NOS-ST) 2026-27 Phase II: Applications Open for Top 500 QS Universities abroad.",
      textHi: "📢 राष्ट्रीय विदेशी छात्रवृत्ति (NOS-ST) 2026-27 चरण II: शीर्ष 500 विदेशी विश्वविद्यालयों के लिए आवेदन आमंत्रित।",
      link: "/schemes"
    },
    {
      textEn: "⚡ Direct Benefit Transfer (DBT): ₹3,840 Crores successfully disbursed to 42.8 Lakh ST Students directly via Aadhaar Bridge.",
      textHi: "⚡ प्रत्यक्ष लाभ अंतरण (DBT): ₹3,840 करोड़ आधार ब्रिज के माध्यम से 42.8 लाख एसटी छात्रों को सीधे हस्तांतरित।",
      link: "/track"
    },
    {
      textEn: "🤖 New: Instant AI Caste Certificate OCR Verification now live! DigiLocker linked within 30 seconds.",
      textHi: "🤖 नया: तत्काल एआई जाति प्रमाण पत्र ओसीआर सत्यापन अब सक्रिय! डिजिलॉकर 30 सेकंड में लिंक करें।",
      link: "/document-verification"
    }
  ];

  return (
    <div className="bg-[#FFF8E7] border-b border-amber-200 py-1.5 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {/* Label Badge */}
        <div className="flex-shrink-0 flex items-center gap-1.5 bg-gov-saffron-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow-sm">
          <Megaphone className="w-3 h-3 animate-bounce" />
          <span>{lang === 'hi' ? 'ताज़ा घोषणाएं' : 'LATEST UPDATES'}</span>
        </div>

        {/* Scrolling or Ticker items */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-8 text-xs text-slate-800 font-medium py-0.5">
          {announcements.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="inline-flex items-center gap-1 hover:text-gov-navy-900 hover:underline transition"
            >
              <span>{lang === 'hi' ? item.textHi : item.textEn}</span>
              <ArrowRight className="w-3 h-3 text-gov-saffron-600 inline" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
