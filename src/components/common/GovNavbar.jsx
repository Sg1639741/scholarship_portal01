import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { 
  Home, 
  GraduationCap, 
  Sparkles, 
  SearchCheck, 
  FileCheck2, 
  Bot, 
  LayoutDashboard, 
  ShieldCheck,
  Menu,
  X,
  Bell
} from 'lucide-react';

export const GovNavbar = () => {
  const { lang, t } = useLanguage();
  const { isStudent, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      to: '/',
      labelEn: 'Home',
      labelHi: 'मुख्य पृष्ठ',
      icon: Home
    },
    {
      to: '/schemes',
      labelEn: 'Scholarships & Fellowships',
      labelHi: 'छात्रवृत्ति व अध्येतावृत्ति',
      icon: GraduationCap
    },
    {
      to: '/ai-checker',
      labelEn: 'AI Eligibility Checker',
      labelHi: 'एआई पात्रता जांच',
      icon: Sparkles,
      highlight: true
    },
    {
      to: '/track',
      labelEn: 'Track Application',
      labelHi: 'आवेदन स्थिति',
      icon: SearchCheck
    },
    {
      to: '/document-verification',
      labelEn: 'AI Document OCR',
      labelHi: 'दस्तावेज़ सत्यापन',
      icon: FileCheck2
    },
    {
      to: '/assistant',
      labelEn: 'AI Sahayak',
      labelHi: 'जनजातीय सहायक',
      icon: Bot
    },
    ...(isStudent ? [{
      to: '/dashboard',
      labelEn: 'Student Dashboard',
      labelHi: 'विद्यार्थी डैशबोर्ड',
      icon: LayoutDashboard,
      badge: 'Active'
    }] : []),
    ...(isAdmin ? [{
      to: '/admin',
      labelEn: 'Officer Scrutiny Portal',
      labelHi: 'अधिकारी पोर्टल',
      icon: ShieldCheck,
      badge: 'Officer'
    }] : [
      {
        to: '/admin',
        labelEn: 'Officer Portal',
        labelHi: 'अधिकारी पोर्टल',
        icon: ShieldCheck
      }
    ])
  ];

  return (
    <nav className="bg-gov-navy-900 text-white sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-xs font-semibold rounded transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                      isActive
                        ? 'bg-gov-navy-800 text-amber-300 border-b-2 border-gov-saffron-500 shadow-inner'
                        : link.highlight
                        ? 'text-amber-300 hover:bg-gov-navy-800'
                        : 'text-slate-200 hover:bg-gov-navy-800 hover:text-white'
                    }`
                  }
                >
                  <Icon className={`w-3.5 h-3.5 ${link.highlight ? 'text-amber-400' : ''}`} />
                  <span>{t(link.labelEn, link.labelHi)}</span>
                  {link.badge && (
                    <span className="text-[9px] bg-gov-saffron-600 text-white font-bold px-1.5 py-0.2 rounded-full uppercase ml-1">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Quick Mobile Heading */}
          <div className="lg:hidden flex items-center gap-2">
            <span className="font-bold text-xs text-amber-300 tracking-wide uppercase">
              {lang === 'hi' ? 'जनजातीय पोर्टल' : 'Tribal Scholarship Portal'}
            </span>
          </div>

          {/* Right quick notifications or portal indicator */}
          <div className="hidden lg:flex items-center space-x-3">
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                `text-xs px-2.5 py-1 rounded flex items-center gap-1.5 ${
                  isActive ? 'bg-gov-navy-800 text-amber-300' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              <Bell className="w-3.5 h-3.5" />
              <span>{t('Alerts', 'सूचनाएं')}</span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-gov-navy-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gov-navy-950 border-t border-slate-700 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-semibold ${
                    isActive
                      ? 'bg-gov-navy-800 text-amber-300'
                      : 'text-slate-200 hover:bg-gov-navy-800'
                  }`
                }
              >
                <Icon className="w-4 h-4 text-amber-400" />
                <span>{t(link.labelEn, link.labelHi)}</span>
                {link.badge && (
                  <span className="text-[9px] bg-gov-saffron-600 text-white font-bold px-1.5 py-0.5 rounded-full ml-auto">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>Toll-Free Helpline: 1800-11-7788</span>
            <NavLink to="/notifications" onClick={() => setMobileMenuOpen(false)} className="text-amber-400">
              {t('View Alerts', 'सूचनाएं')}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
