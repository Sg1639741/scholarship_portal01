import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { PhoneCall, ShieldCheck, Sparkles, User, Bell } from 'lucide-react';

export const GovHeader = () => {
  const { lang, t } = useLanguage();
  const { isStudent, role, currentUser } = useAuth();

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: National Emblem & Portal Title */}
        <Link to="/" className="flex items-center gap-3.5 group text-left">
          {/* Ashoka Emblem Vector representation */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <svg
              className="w-12 h-14 text-gov-navy-900 group-hover:scale-105 transition-transform"
              viewBox="0 0 100 120"
              fill="currentColor"
            >
              {/* Ashoka Stambh Stylized Government Emblem */}
              <circle cx="50" cy="20" r="16" fill="#0B2341" />
              <rect x="34" y="38" width="32" height="10" rx="2" fill="#0B2341" />
              <circle cx="50" cy="62" r="14" fill="#0B2341" stroke="#FFFFFF" strokeWidth="2" />
              {/* Wheel spokes */}
              <circle cx="50" cy="62" r="5" fill="#FFFFFF" />
              <path d="M50 48 L50 76 M36 62 L64 62 M40 52 L60 72 M40 72 L60 52" stroke="#0B2341" strokeWidth="1.5" />
              {/* Base */}
              <path d="M22 84 L78 84 L72 96 L28 96 Z" fill="#0B2341" />
              <rect x="18" y="98" width="64" height="6" rx="2" fill="#D9531E" />
              {/* Motto text */}
              <text x="50" y="114" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0B2341" letterSpacing="0.5">
                सत्यमेव जयते
              </text>
            </svg>
          </div>

          <div className="border-l border-slate-300 pl-3.5">
            <p className="text-[12px] font-bold text-gov-saffron-600 tracking-wider uppercase font-sans">
              {lang === 'hi' ? 'जनजातीय कार्य मंत्रालय | भारत सरकार' : 'MINISTRY OF TRIBAL AFFAIRS | GOVT. OF INDIA'}
            </p>
            <h1 className="text-lg md:text-xl font-extrabold text-gov-navy-900 leading-tight">
              {lang === 'hi' 
                ? 'राष्ट्रीय जनजातीय छात्रवृत्ति एवं अध्येतावृत्ति पोर्टल'
                : 'National Tribal Scholarship & Fellowship Portal'}
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              {lang === 'hi'
                ? 'एआई-सक्षम प्रत्यक्ष लाभ अंतरण (DBT) प्रबंधन प्रणाली | विकसित भारत @2047'
                : 'AI-Enabled Unified Portal for ST Students & Research Scholars | PM-JANMAN'}
            </p>
          </div>
        </Link>

        {/* Right: Badges & Quick Action/Helpline */}
        <div className="flex items-center gap-3 self-center md:self-auto">
          {/* PM-JANMAN & Digital India badges */}
          <div className="hidden lg:flex items-center gap-2 border-r border-slate-200 pr-3 text-right">
            <div>
              <div className="text-[11px] font-bold text-gov-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200 inline-block">
                🇮🇳 Viksit Bharat @2047
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">DBT Directly to Bank</p>
            </div>
          </div>

          {/* Toll Free Helpline */}
          <div className="hidden sm:flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-gov-navy-800">
              <PhoneCall className="w-4 h-4 text-gov-navy-800" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-semibold uppercase">National Helpline (Toll-Free)</p>
              <p className="text-xs font-bold text-gov-navy-900 tracking-wide">1800-11-7788</p>
            </div>
          </div>

          {/* Dynamic Login / Profile Button */}
          {role === 'guest' || !currentUser ? (
            <div className="flex items-center gap-2">
              <Link
                to="/ai-checker"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-gov-navy-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-md transition shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-gov-saffron-600" />
                AI Match
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-gov-navy-900 hover:bg-gov-navy-800 rounded-md transition shadow-md hover:shadow"
              >
                <User className="w-3.5 h-3.5" />
                {t('Login / Register', 'लॉगिन / पंजीकरण')}
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <Link
                to="/notifications"
                className="relative p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-gov-saffron-600 ring-2 ring-white"></span>
              </Link>

              <Link
                to={isStudent ? "/dashboard" : "/admin"}
                className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-md shadow-sm transition ${
                  isStudent 
                    ? 'bg-gov-navy-900 text-white hover:bg-gov-navy-800' 
                    : 'bg-amber-700 text-white hover:bg-amber-800'
                }`}
              >
                {isStudent ? <User className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                <span>{currentUser.name}</span>
                <span className="text-[10px] opacity-75 hidden sm:inline">({isStudent ? 'Scholar' : 'Officer'})</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
