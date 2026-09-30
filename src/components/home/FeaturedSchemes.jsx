import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SCHEMES_DATA } from '../../data/schemesData';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Calendar, 
  IndianRupee, 
  ArrowRight, 
  Sparkles, 
  Check
} from 'lucide-react';

export const FeaturedSchemes = () => {
  const { lang, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Higher Education', 'Study Abroad', 'Doctoral Research', 'Premier Institutes'];

  const filteredSchemes = SCHEMES_DATA.filter(scheme => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Higher Education') return scheme.level === 'Post-Matric' || scheme.level === 'Undergraduate';
    if (selectedFilter === 'Study Abroad') return scheme.level === 'Overseas';
    if (selectedFilter === 'Doctoral Research') return scheme.level === 'M.Phil/Ph.D.';
    if (selectedFilter === 'Premier Institutes') return scheme.category === 'Premier Institutions';
    return true;
  });

  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gov-saffron-600 uppercase tracking-widest mb-1.5">
              <span className="w-2.5 h-1 bg-gov-saffron-600 rounded"></span>
              <span>{lang === 'hi' ? 'केंद्रीय एवं राज्य योजनाएं' : 'CENTRAL SECTOR & SPONSORED SCHEMES'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-navy-950">
              {lang === 'hi' ? 'प्रमुख जनजातीय छात्रवृत्ति एवं अध्येतावृत्ति' : 'Flagship Scholarships & Fellowships'}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
              {lang === 'hi'
                ? 'अनुसूचित जनजाति के योग्य विद्यार्थियों के लिए भारत सरकार द्वारा 100% वित्तपोषित योजनाएं।'
                : 'Direct benefit transfers approved under Ministry of Tribal Affairs guidelines for academic year 2026-27.'}
            </p>
          </div>

          <Link
            to="/schemes"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gov-navy-900 hover:text-gov-saffron-600 transition"
          >
            <span>{t('View All Schemes', 'सभी योजनाएं देखें')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedFilter === filter
                  ? 'bg-gov-navy-900 text-amber-300 shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.slice(0, 6).map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header Top Strip */}
              <div className="p-5 pb-3">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-gov-navy-800 border border-blue-200">
                    {scheme.code}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Open
                  </span>
                </div>

                <h3 className="text-base font-bold text-gov-navy-950 group-hover:text-gov-saffron-600 transition-colors line-clamp-2 min-h-[3rem]">
                  {lang === 'hi' ? scheme.titleHi : scheme.title}
                </h3>

                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  {scheme.ministry}
                </p>

                {/* Amount / Benefit Badge */}
                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="text-[10px] uppercase font-bold text-slate-500">Scholarship Grant</div>
                  <div className="text-sm font-extrabold text-gov-green-700 flex items-center gap-1 mt-0.5">
                    <IndianRupee className="w-4 h-4 text-gov-green-700" />
                    <span>{scheme.stipend}</span>
                  </div>
                </div>

                {/* Key Eligibility Highlights */}
                <div className="mt-3.5 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] text-slate-700">Income limit: Up to ₹{(scheme.eligibility.incomeLimit / 100000).toFixed(1)} Lakh/year</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] text-slate-700">Category: Scheduled Tribe (ST) only</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] font-medium text-amber-900">Deadline: {scheme.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  to={`/ai-checker?scheme=${scheme.id}`}
                  className="text-xs font-bold text-gov-navy-900 hover:text-gov-saffron-600 flex items-center gap-1 transition"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gov-saffron-600" />
                  <span>Check Fit</span>
                </Link>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/schemes/${scheme.id}`}
                    className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded transition"
                  >
                    Guidelines
                  </Link>
                  <Link
                    to={`/login?redirect=apply&scheme=${scheme.id}`}
                    className="px-3 py-1.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white text-xs font-bold rounded-md shadow-sm transition flex items-center gap-1"
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
    </section>
  );
};
