import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  CreditCard, 
  Award
} from 'lucide-react';

export const HeroBanner = () => {
  const { lang, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/schemes?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/schemes');
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gov-navy-950 via-gov-navy-900 to-[#0e3259] text-white overflow-hidden border-b-4 border-gov-saffron-500">
      {/* Background Indian Tricolor subtle ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gov-saffron-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gov-green-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Vision & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* National Mission Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-amber-300 font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-gov-saffron-500 animate-ping"></span>
              <span>
                {lang === 'hi'
                  ? 'जनजातीय गौरव वर्ष 2026 | पीएम-जनमन मिशन'
                  : 'Tribal Empowerment Mission 2026 | PM-JANMAN Vision'}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {lang === 'hi' ? (
                  <>
                    सशक्त आदिवासी, समृद्ध भारत <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
                      एआई-सक्षम जनजातीय छात्रवृत्ति पोर्टल
                    </span>
                  </>
                ) : (
                  <>
                    Empowering Tribal Scholars <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
                      Through AI-Driven Direct Benefit Transfers
                    </span>
                  </>
                )}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {lang === 'hi'
                  ? 'कक्षा 9वीं से लेकर ऑक्सफ़ोर्ड व हार्वर्ड में डॉक्टरेट शोध तक — अनुसूचित जनजाति के विद्यार्थियों के लिए पारदर्शी, त्वरित और 100% पेपरलेस छात्रवृत्ति व अध्येतावृत्ति प्रबंधन प्रणाली।'
                  : 'From Class IX to Doctoral Fellowships at premier IITs, IIMs, and Top 500 QS Global Universities. Automated AI caste certificate verification, DigiLocker sync, and Aadhaar-enabled DBT.'}
              </p>
            </div>

            {/* Hero Search Bar */}
            <form onSubmit={handleSearch} className="max-w-xl">
              <div className="relative flex items-center bg-white rounded-lg shadow-xl p-1.5 focus-within:ring-2 focus-within:ring-amber-400">
                <Search className="w-5 h-5 text-slate-400 ml-2.5 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'hi' ? 'योजना का नाम, पाठ्यक्रम (उदा. Ph.D., Engineering, विदेश अध्ययन)...' : 'Search schemes, course (e.g. Ph.D., Engineering, Overseas)...'}
                  className="w-full px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="bg-gov-saffron-600 hover:bg-gov-saffron-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-md transition shadow flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>{t('Search', 'खोजें')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/ai-checker"
                className="px-5 py-3 rounded-md bg-gradient-to-r from-gov-saffron-600 to-gov-saffron-500 hover:from-gov-saffron-500 hover:to-orange-500 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>{t('Check AI Eligibility (60s)', 'एआई पात्रता जांच (60 सेकंड)')}</span>
              </Link>
              <Link
                to="/schemes"
                className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm backdrop-blur-sm transition flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-amber-300" />
                <span>{t('Browse All Schemes', 'सभी योजनाएं देखें')}</span>
              </Link>
              <Link
                to="/track"
                className="px-4 py-3 rounded-md text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition flex items-center gap-1.5 underline underline-offset-4"
              >
                <span>{t('Track by App ID', 'आवेदन ट्रैक करें')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>DigiLocker Verified</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Aadhaar DBT Bridge</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Physical Paperwork</span>
              </span>
            </div>
          </div>

          {/* Right Column: Portal Fast Facts & AI Assistant Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 text-slate-900 rounded-xl p-6 shadow-2xl border-2 border-amber-300/40 relative backdrop-blur-sm">
              {/* Header badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-gov-navy-900 text-amber-400 flex items-center justify-center font-bold text-sm shadow">
                    AI
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gov-navy-900">
                      {lang === 'hi' ? 'जनजातीय स्मार्ट पोर्टल सेवा' : 'Smart Tribal Portal Hub'}
                    </h3>
                    <p className="text-[11px] text-slate-500">Ministry of Tribal Affairs Scrutiny Node</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Active AY 2026-27
                </span>
              </div>

              {/* Fast Feature list */}
              <div className="space-y-3.5 my-5">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-amber-300 transition">
                  <div className="p-2 rounded bg-amber-100 text-gov-saffron-600 flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">AI Scheme Matchmaker</h4>
                    <p className="text-[11px] text-slate-600">Calculates probability of approval based on tribe, income and marks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 transition">
                  <div className="p-2 rounded bg-blue-100 text-blue-700 flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Instant AI OCR Verification</h4>
                    <p className="text-[11px] text-slate-600">Auto-reads Caste & Income Certificates; detects seals and signatures.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-green-300 transition">
                  <div className="p-2 rounded bg-emerald-100 text-emerald-700 flex-shrink-0">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Direct Benefit Transfer (DBT)</h4>
                    <p className="text-[11px] text-slate-600">Stipend directly credited to your Aadhaar-linked bank account via PFMS.</p>
                  </div>
                </div>
              </div>

              {/* Direct Link CTA */}
              <div className="pt-2 flex items-center justify-between">
                <Link
                  to="/document-verification"
                  className="text-xs font-bold text-gov-navy-900 hover:text-gov-saffron-600 transition flex items-center gap-1"
                >
                  <span>{t('Test AI Document OCR Tool', 'एआई दस्तावेज़ स्कैनर चलाएं')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/login"
                  className="text-xs font-bold px-3 py-1.5 bg-gov-navy-900 text-white rounded hover:bg-gov-navy-800 transition"
                >
                  {t('Student Sign In', 'विद्यार्थी लॉगिन')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
