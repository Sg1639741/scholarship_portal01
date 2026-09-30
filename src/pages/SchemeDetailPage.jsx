import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SCHEMES_DATA } from '../data/schemesData';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

export const SchemeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const scheme = SCHEMES_DATA.find(s => s.id === id) || SCHEMES_DATA[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16">
      {/* Top Banner */}
      <div className="bg-gov-navy-900 text-white py-10 px-4 border-b-4 border-gov-saffron-500">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:underline mb-4 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Schemes Directory</span>
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400 text-gov-navy-950 uppercase font-mono">
              {scheme.code}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              Active AY 2026-27
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {lang === 'hi' ? scheme.titleHi : scheme.title}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            {scheme.ministry}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-5 space-y-6">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-6">
          {/* Financial Grant Summary Banner */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block">
                Total Scholarship / Fellowship Grant
              </span>
              <p className="text-xl sm:text-2xl font-black text-gov-navy-950 mt-1">
                {scheme.stipend}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Disbursed through Public Financial Management System (PFMS) directly into Aadhaar-seeded Bank Account.
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-2">
              <span className="text-xs font-bold text-amber-900">
                Deadline: {scheme.deadline}
              </span>
              <Link
                to={`/login?redirect=apply&scheme=${scheme.id}`}
                className="px-6 py-2.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded-lg text-xs font-bold shadow flex items-center gap-1.5 transition"
              >
                <span>Apply with DigiLocker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Eligibility Criteria Section */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gov-navy-950 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Official Eligibility Norms</span>
            </h3>
            <p className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-700">
              {scheme.eligibility.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Family Income Cap</span>
                <span className="font-bold text-slate-900">≤ ₹{scheme.eligibility.incomeLimit.toLocaleString('en-IN')} / year</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Minimum Marks</span>
                <span className="font-bold text-slate-900">{scheme.eligibility.minMarks}% in Qualifying Exam</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Beneficiaries</span>
                <span className="font-bold text-slate-900">{scheme.totalBeneficiaries}</span>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gov-navy-950 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gov-saffron-600" />
              <span>Comprehensive Scheme Benefits</span>
            </h3>
            <ul className="space-y-2">
              {scheme.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-gov-saffron-600 mt-2 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mandatory Documents */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gov-navy-950 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Mandatory Documents (Verified via AI OCR)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scheme.documents.map((d, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              to={`/ai-checker?scheme=${scheme.id}`}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold transition flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Check My Match Probability</span>
            </Link>

            <Link
              to={`/login?redirect=apply&scheme=${scheme.id}`}
              className="px-6 py-2.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded-lg text-xs font-bold transition flex items-center gap-2 shadow"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
