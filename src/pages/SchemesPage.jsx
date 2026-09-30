import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SCHEMES_DATA } from '../data/schemesData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  Filter, 
  IndianRupee, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  BookOpen, 
  FileText,
  X
} from 'lucide-react';

export const SchemesPage = () => {
  const { lang, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [maxIncome, setMaxIncome] = useState(800000);
  const [selectedSchemeForModal, setSelectedSchemeForModal] = useState(null);

  const levels = ['All', 'Pre-Matric', 'Post-Matric', 'Undergraduate', 'M.Phil/Ph.D.', 'Overseas', 'All Levels'];

  const filteredSchemes = useMemo(() => {
    return SCHEMES_DATA.filter((scheme) => {
      // Search query check
      const matchesSearch =
        scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.eligibility.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Level check
      const matchesLevel = selectedLevel === 'All' || scheme.level === selectedLevel;

      // Income check
      const matchesIncome = scheme.eligibility.incomeLimit <= maxIncome || scheme.id === 'st-pvtg-special-grant';

      return matchesSearch && matchesLevel && matchesIncome;
    });
  }, [searchQuery, selectedLevel, maxIncome]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16">
      {/* Top Banner */}
      <div className="bg-gov-navy-900 text-white py-10 px-4 border-b-4 border-gov-saffron-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest mb-2">
            <span>{lang === 'hi' ? 'मंत्रालय योजना कोष' : 'CENTRAL & STATE ST SCHOLARSHIPS DIRECTORY'}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            {lang === 'hi' ? 'अनुसूचित जनजाति छात्रवृत्ति व अध्येतावृत्ति योजनाएं' : 'Scheduled Tribes Scholarships & Fellowships'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed">
            {lang === 'hi'
              ? 'प्री-मैट्रिक, पोस्ट-मैट्रिक, टॉप क्लास प्रीमियर संस्थान एवं राष्ट्रीय विदेशी छात्रवृत्ति की अधिकृत सूची। एआई-सत्यापित प्रत्यक्ष लाभ अंतरण (DBT) समर्थित।'
              : 'Official repository of 100% centrally sponsored schemes for tribal scholars. Direct bank transfer via PFMS, verified with DigiLocker and state revenue records.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-5">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 sm:p-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Box */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scheme name, degree (e.g. Ph.D., Engineering, Overseas)..."
                className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-navy-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Income Slider Filter */}
            <div className="md:col-span-3">
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Annual Family Income</span>
                <span className="text-gov-navy-900 font-bold">≤ ₹{(maxIncome / 100000).toFixed(1)} Lakh</span>
              </div>
              <input
                type="range"
                min="200000"
                max="800000"
                step="50000"
                value={maxIncome}
                onChange={(e) => setMaxIncome(Number(e.target.value))}
                className="w-full accent-gov-saffron-600 cursor-pointer"
              />
            </div>

            {/* AI Assistant CTA */}
            <div className="md:col-span-3">
              <Link
                to="/ai-checker"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-amber-500 to-gov-saffron-600 hover:from-amber-600 hover:to-gov-saffron-700 text-white rounded-lg text-xs font-bold shadow-md transition"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>{t('AI Match My Profile', 'मेरी पात्रता जांचें')}</span>
              </Link>
            </div>
          </div>

          {/* Level Filter Chips */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Level:</span>
            </span>
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedLevel === lvl
                    ? 'bg-gov-navy-900 text-amber-300 font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mt-6 mb-4">
          <p className="text-xs font-bold text-slate-600">
            Showing <span className="text-gov-navy-950 font-black">{filteredSchemes.length}</span> Official Tribal Schemes
          </p>
          <span className="text-xs text-slate-500">Academic Session 2026-27</span>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-5">
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-gov-navy-900 border border-blue-200">
                    {scheme.code}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    {scheme.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gov-navy-950 hover:text-gov-saffron-600 transition-colors leading-snug">
                  {lang === 'hi' ? scheme.titleHi : scheme.title}
                </h3>

                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {scheme.ministry}
                </p>

                {/* Amount Box */}
                <div className="mt-4 p-3 rounded-lg bg-emerald-50/70 border border-emerald-200">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">Financial Assistance</span>
                  <p className="text-sm font-black text-gov-green-700 mt-0.5 flex items-center gap-1">
                    <IndianRupee className="w-4 h-4" />
                    <span>{scheme.stipend}</span>
                  </p>
                </div>

                {/* Eligibility Snippet */}
                <div className="mt-4 space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] text-slate-700">Family Income: Up to ₹{(scheme.eligibility.incomeLimit / 100000).toFixed(1)} Lakh/yr</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] text-slate-700">Beneficiaries: {scheme.totalBeneficiaries}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gov-saffron-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] font-semibold text-slate-800">Deadline: {scheme.deadline}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1">
                  {scheme.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedSchemeForModal(scheme)}
                  className="text-xs font-bold text-gov-navy-900 hover:text-gov-saffron-600 transition flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Guidelines</span>
                </button>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/ai-checker?scheme=${scheme.id}`}
                    className="p-1.5 bg-amber-100 text-amber-900 hover:bg-amber-200 rounded transition"
                    title="Check AI Eligibility for this scheme"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/login?redirect=apply&scheme=${scheme.id}`}
                    className="px-3.5 py-1.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white text-xs font-bold rounded-md shadow-sm transition flex items-center gap-1"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guidelines Modal */}
      {selectedSchemeForModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-300 flex flex-col">
            {/* Modal Header */}
            <div className="bg-gov-navy-900 text-white p-5 sticky top-0 z-10 flex items-center justify-between border-b-2 border-gov-saffron-500">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-400 text-gov-navy-950 rounded uppercase">
                  {selectedSchemeForModal.code}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  {selectedSchemeForModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSchemeForModal(null)}
                className="p-1.5 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {/* Stipend Banner */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-[11px] font-bold text-amber-900 uppercase">Scholarship Package:</span>
                <p className="text-base font-black text-gov-navy-950 mt-0.5">
                  {selectedSchemeForModal.stipend}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Disbursed via PFMS Direct Benefit Transfer (DBT) directly into verified Aadhaar-linked Bank Account.
                </p>
              </div>

              {/* Eligibility Criteria */}
              <div>
                <h4 className="font-bold text-gov-navy-950 text-sm mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Official Eligibility Criteria</span>
                </h4>
                <p className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs leading-relaxed">
                  {selectedSchemeForModal.eligibility.description}
                </p>
              </div>

              {/* Scheme Benefits */}
              <div>
                <h4 className="font-bold text-gov-navy-950 text-sm mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-gov-saffron-600" />
                  <span>Key Benefits & Allowances</span>
                </h4>
                <ul className="space-y-2">
                  {selectedSchemeForModal.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-gov-saffron-600 mt-1.5 flex-shrink-0"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Documents */}
              <div>
                <h4 className="font-bold text-gov-navy-950 text-sm mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Mandatory Documents (Verified via AI OCR / DigiLocker)</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSchemeForModal.documents.map((doc, dIdx) => (
                    <li key={dIdx} className="p-2.5 rounded bg-slate-50 border border-slate-200 text-[11px] text-slate-700 flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between sticky bottom-0">
              <button
                onClick={() => setSelectedSchemeForModal(null)}
                className="px-4 py-2 rounded text-xs font-semibold text-slate-600 hover:bg-slate-200 transition"
              >
                Close
              </button>

              <div className="flex items-center gap-3">
                <Link
                  to={`/ai-checker?scheme=${selectedSchemeForModal.id}`}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded text-xs font-bold transition flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Check Fit</span>
                </Link>
                <Link
                  to={`/login?redirect=apply&scheme=${selectedSchemeForModal.id}`}
                  className="px-5 py-2 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded text-xs font-bold transition flex items-center gap-1.5 shadow"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
