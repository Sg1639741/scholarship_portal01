import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { IndianRupee, Users, Award, ShieldCheck, Building2, TrendingUp } from 'lucide-react';

export const QuickStats = () => {
  const { lang } = useLanguage();

  const stats = [
    {
      icon: IndianRupee,
      value: "₹3,840 Cr+",
      labelEn: "Total DBT Disbursed",
      labelHi: "कुल डीबीटी संवितरण",
      subtextEn: "Directly into Bank Accounts",
      subtextHi: "सीधे आधार-लिंक्ड बैंक खातों में",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50 border-amber-200"
    },
    {
      icon: Users,
      value: "42.8 Lakh+",
      labelEn: "ST Students Benefited",
      labelHi: "लाभान्वित एसटी छात्र",
      subtextEn: "Across 28 States & 8 UTs",
      subtextHi: "28 राज्यों और 8 केंद्र शासित प्रदेशों में",
      color: "from-blue-600 to-indigo-700",
      bgLight: "bg-blue-50 border-blue-200"
    },
    {
      icon: Award,
      value: "18+ Schemes",
      labelEn: "Scholarships & Fellowships",
      labelHi: "सक्रिय छात्रवृत्ति व शोध योजनाएं",
      subtextEn: "Pre-Matric to Post-Doctoral",
      subtextHi: "प्री-मैट्रिक से लेकर पोस्ट-डॉक्टरेट तक",
      color: "from-emerald-600 to-teal-700",
      bgLight: "bg-emerald-50 border-emerald-200"
    },
    {
      icon: ShieldCheck,
      value: "99.4%",
      labelEn: "AI Verification Accuracy",
      labelHi: "एआई सत्यापन सटीकता",
      subtextEn: "Tribe Certificate OCR Engine",
      subtextHi: "डिजिलॉकर व राज्य अभिलेख आधारित",
      color: "from-purple-600 to-indigo-800",
      bgLight: "bg-purple-50 border-purple-200"
    },
    {
      icon: Building2,
      value: "14,250+",
      labelEn: "Partner Institutions",
      labelHi: "संबद्ध शिक्षण संस्थान",
      subtextEn: "IITs, NITs, Central Univs & Schools",
      subtextHi: "आईआईटी, एनआईटी व ईएमआरएस",
      color: "from-slate-700 to-slate-900",
      bgLight: "bg-slate-50 border-slate-200"
    }
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-5 md:p-6">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-gov-saffron-100 text-gov-saffron-600">
              <TrendingUp className="w-4 h-4" />
            </span>
            <h3 className="font-extrabold text-sm sm:text-base text-gov-navy-950 uppercase tracking-wide">
              {lang === 'hi' ? 'राष्ट्रीय प्रगति सांख्यिकी (वित्तीय वर्ष 2025-26)' : 'NATIONAL PERFORMANCE INDICATORS (FY 2025-26)'}
            </h3>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">
            Live Central PFMS & DigiLocker Telemetry
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-3.5 rounded-lg border ${item.bgLight} hover:shadow-md transition-shadow flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-sm`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">#0{idx+1}</span>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-gov-navy-950 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5 line-clamp-1">
                    {lang === 'hi' ? item.labelHi : item.labelEn}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                    {lang === 'hi' ? item.subtextHi : item.subtextEn}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
