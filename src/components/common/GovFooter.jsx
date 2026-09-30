import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

export const GovFooter = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-gov-navy-950 text-slate-300 text-xs border-t-4 border-gov-saffron-500">
      {/* Top Footer: Information Columns */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Ministry Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white p-1 flex items-center justify-center">
              <span className="text-gov-navy-950 font-black text-sm">MoTA</span>
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                {lang === 'hi' ? 'जनजातीय कार्य मंत्रालय' : 'Ministry of Tribal Affairs'}
              </p>
              <p className="text-[10px] text-slate-400">Government of India</p>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            {lang === 'hi'
              ? 'अनुसूचित जनजाति के विद्यार्थियों के शैक्षिक उत्थान और उच्च अनुसंधान हेतु एकीकृत डिजिटल छात्रवृत्ति एवं अध्येतावृत्ति प्रबंधन प्रणाली।'
              : 'Empowering Scheduled Tribe youth and research scholars through transparent, AI-governed direct benefit transfers under the PM-JANMAN vision.'}
          </p>
          <div className="pt-2 flex flex-col gap-1.5 text-slate-400 text-[11px]">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gov-saffron-500 flex-shrink-0" />
              Shastri Bhawan, Dr. Rajendra Prasad Road, New Delhi - 110001
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gov-saffron-500 flex-shrink-0" />
              Toll-Free Helpline: 1800-11-7788 (9:00 AM - 6:00 PM)
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gov-saffron-500 flex-shrink-0" />
              support-tribalscholarship@gov.in
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm mb-3 border-b border-slate-700 pb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-3 bg-gov-saffron-500 rounded-sm"></span>
            {lang === 'hi' ? 'महत्वपूर्ण योजनाएं' : 'Key ST Schemes'}
          </h4>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link to="/schemes" className="hover:text-amber-400 transition flex items-center justify-between">
                <span>Post-Matric ST Scholarship</span>
                <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-amber-300">Active</span>
              </Link>
            </li>
            <li>
              <Link to="/schemes" className="hover:text-amber-400 transition">
                National Overseas Scholarship (NOS)
              </Link>
            </li>
            <li>
              <Link to="/schemes" className="hover:text-amber-400 transition">
                National Fellowship (NFST Ph.D./M.Phil)
              </Link>
            </li>
            <li>
              <Link to="/schemes" className="hover:text-amber-400 transition">
                Top Class Education in Premier Institutes
              </Link>
            </li>
            <li>
              <Link to="/schemes" className="hover:text-amber-400 transition">
                Pre-Matric Scholarship for ST Classes IX & X
              </Link>
            </li>
            <li>
              <Link to="/schemes" className="hover:text-amber-400 transition">
                PM-JANMAN Educational PVTG Grant
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: AI & Student Portals */}
        <div>
          <h4 className="text-white font-bold text-sm mb-3 border-b border-slate-700 pb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-3 bg-gov-saffron-500 rounded-sm"></span>
            {lang === 'hi' ? 'पोर्टल सुविधाएं' : 'Portal Features'}
          </h4>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link to="/ai-checker" className="hover:text-amber-400 transition flex items-center gap-1.5 text-amber-300 font-semibold">
                <span>⚡ AI Eligibility Match Engine</span>
              </Link>
            </li>
            <li>
              <Link to="/document-verification" className="hover:text-amber-400 transition">
                AI Tribe Certificate OCR Scanner
              </Link>
            </li>
            <li>
              <Link to="/track" className="hover:text-amber-400 transition">
                Real-Time Application Status Tracker
              </Link>
            </li>
            <li>
              <Link to="/assistant" className="hover:text-amber-400 transition">
                JanJatiya Sahayak (AI Chatbot)
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-amber-400 transition">
                Student Self-Service Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-amber-400 transition">
                Officer Scrutiny & Approval System
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Official Government Initiatives */}
        <div>
          <h4 className="text-white font-bold text-sm mb-3 border-b border-slate-700 pb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-3 bg-gov-saffron-500 rounded-sm"></span>
            {lang === 'hi' ? 'सरकारी पहल' : 'National Initiatives'}
          </h4>
          <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
            <div className="p-2 bg-slate-900 border border-slate-800 rounded">
              <span className="font-bold text-white block text-xs">🇮🇳 Digital India</span>
              <span className="text-slate-400">Power To Empower</span>
            </div>
            <div className="p-2 bg-slate-900 border border-slate-800 rounded">
              <span className="font-bold text-white block text-xs">📁 DigiLocker</span>
              <span className="text-slate-400">Paperless Governance</span>
            </div>
            <div className="p-2 bg-slate-900 border border-slate-800 rounded">
              <span className="font-bold text-white block text-xs">🏦 PFMS DBT</span>
              <span className="text-slate-400">100% Aadhaar Bridge</span>
            </div>
            <div className="p-2 bg-slate-900 border border-slate-800 rounded">
              <span className="font-bold text-white block text-xs">🏛️ CPGRAMS</span>
              <span className="text-slate-400">Grievance Redressal</span>
            </div>
          </div>
          <div className="mt-4 p-2.5 bg-slate-900/80 rounded border border-slate-800">
            <p className="text-[11px] text-slate-300">
              <span className="font-semibold text-amber-400">Certified Secure:</span> 256-bit SSL encrypted. Adheres to Guidelines for Indian Government Websites (GIGW 3.0).
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Legal & NIC Attribution Strip */}
      <div className="bg-[#051324] border-t border-slate-800 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            <p>
              Website Content Managed by <strong>Ministry of Tribal Affairs, Government of India</strong>.
            </p>
            <p className="text-[10px] text-slate-500 mt-0.5">
              Designed & Developed on NeGD / NIC Cloud Architecture | Version 4.2-AI-ST
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-white">Terms of Use</a>
            <span>|</span>
            <a href="#hyperlink" className="hover:text-white">Hyperlinking Policy</a>
            <span>|</span>
            <a href="#copyright" className="hover:text-white">Copyright Policy</a>
            <span>|</span>
            <span className="text-slate-300 font-semibold bg-slate-800 px-2 py-0.5 rounded">
              Visitors: 1,84,91,240
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
