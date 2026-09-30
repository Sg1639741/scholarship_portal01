import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { Eye, Sun, UserCheck, ShieldCheck, LogOut } from 'lucide-react';

export const GovTopBar = () => {
  const { lang, toggleLanguage, fontSize, setFontSize, highContrast, setHighContrast } = useLanguage();
  const { role, loginAsStudent, loginAsAdmin, logout, isStudent } = useAuth();

  return (
    <div className="bg-[#0B2341] text-white text-xs select-none border-b border-slate-700">
      {/* Tricolor Ribbon */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF7A00] via-[#FFFFFF] to-[#128807]" />

      <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
        {/* Left: Ministry identity */}
        <div className="flex items-center space-x-3 text-slate-200">
          <span className="font-semibold tracking-wide flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-gov-saffron-500 animate-pulse"></span>
            {lang === 'hi' ? 'भारत सरकार' : 'GOVERNMENT OF INDIA'}
          </span>
          <span className="text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-300 font-medium">
            {lang === 'hi' ? 'जनजातीय कार्य मंत्रालय' : 'MINISTRY OF TRIBAL AFFAIRS'}
          </span>
        </div>

        {/* Right: Accessibility Controls & Demo Switcher */}
        <div className="flex items-center flex-wrap gap-2.5">
          {/* Quick Demo Role Switcher */}
          <div className="hidden md:flex items-center bg-slate-800/80 rounded px-2 py-0.5 border border-slate-700">
            <span className="text-[11px] text-slate-400 mr-2">Demo Role:</span>
            {!role || role === 'guest' ? (
              <div className="flex gap-1.5">
                <button
                  onClick={loginAsStudent}
                  className="px-2 py-0.5 bg-blue-600/70 hover:bg-blue-600 text-[11px] text-white rounded transition flex items-center gap-1 font-medium"
                  title="Switch to Student Demo Account"
                >
                  <UserCheck className="w-3 h-3" /> Student
                </button>
                <button
                  onClick={loginAsAdmin}
                  className="px-2 py-0.5 bg-amber-600/70 hover:bg-amber-600 text-[11px] text-white rounded transition flex items-center gap-1 font-medium"
                  title="Switch to Officer Scrutiny Portal"
                >
                  <ShieldCheck className="w-3 h-3" /> Officer
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${isStudent ? 'bg-blue-900 text-blue-200' : 'bg-amber-900 text-amber-200'}`}>
                  {isStudent ? '🎓 Student Mode' : '🛡️ Officer Mode'}
                </span>
                <button
                  onClick={logout}
                  className="text-slate-400 hover:text-white transition flex items-center gap-1 text-[11px]"
                  title="Sign out to guest"
                >
                  <LogOut className="w-3 h-3" /> Exit
                </button>
              </div>
            )}
          </div>

          {/* Text Size Control */}
          <div className="flex items-center bg-slate-800/90 rounded border border-slate-700">
            <button
              onClick={() => setFontSize('sm')}
              className={`px-1.5 py-0.5 hover:text-amber-400 font-medium ${fontSize === 'sm' ? 'text-amber-400 bg-slate-700' : 'text-slate-300'}`}
              title="Small text"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('md')}
              className={`px-1.5 py-0.5 hover:text-amber-400 font-medium ${fontSize === 'md' ? 'text-amber-400 bg-slate-700' : 'text-slate-300'}`}
              title="Standard text"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-1.5 py-0.5 hover:text-amber-400 font-bold ${fontSize === 'lg' ? 'text-amber-400 bg-slate-700' : 'text-slate-300'}`}
              title="Large text"
            >
              A+
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className="p-1 rounded bg-slate-800/90 hover:text-amber-400 text-slate-300 border border-slate-700"
            title="Toggle High Contrast"
          >
            {highContrast ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5" />}
          </button>

          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="px-2 py-0.5 rounded bg-gov-saffron-600 hover:bg-gov-saffron-500 font-semibold text-white transition flex items-center gap-1 shadow-sm"
            title="Switch Language"
          >
            <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
