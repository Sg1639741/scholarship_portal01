import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { UserCheck, Sparkles, Building, CreditCard, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks = () => {
  const { lang, t } = useLanguage();

  const steps = [
    {
      step: "01",
      icon: UserCheck,
      titleEn: "DigiLocker & Aadhaar e-KYC",
      titleHi: "डिजिलॉकर व आधार ई-केवाईसी",
      descEn: "Sign in with Aadhaar OTP to automatically fetch verified Tribe & Income certificates from State Revenue records.",
      descHi: "आधार ओटीपी से लॉगिन करें और राज्य राजस्व रिकॉर्ड से सीधे डिजिटल जाति व आय प्रमाण पत्र प्राप्त करें।"
    },
    {
      step: "02",
      icon: Sparkles,
      titleEn: "AI Fitment & OCR Validation",
      titleHi: "एआई पात्रता व ओसीआर सत्यापन",
      descEn: "Our neural AI engine extracts certificate numbers, detects tamper signs, and calculates your match score across 18+ schemes.",
      descHi: "एआई इंजन प्रमाण पत्र संख्या निकालता है, मुहरों की जांच करता है और आपके लिए सबसे उपयुक्त योजना चुनता है।"
    },
    {
      step: "03",
      icon: Building,
      titleEn: "Single-Window Fast Scrutiny",
      titleHi: "एकल खिड़की त्वरित जांच",
      descEn: "University Nodal Officer and District Welfare Officer verify credentials via digital workflows with transparent SLA tracking.",
      descHi: "विश्वविद्यालय व जिला कल्याण अधिकारी पारदर्शी समयबद्ध प्रणाली द्वारा ऑनलाइन सत्यापन पूर्ण करते हैं।"
    },
    {
      step: "04",
      icon: CreditCard,
      titleEn: "Direct Benefit Transfer (DBT)",
      titleHi: "सीधे बैंक खाते में डीबीटी भुगतान",
      descEn: "Sanctioned scholarship & contingency allowance is credited directly to your bank account via PFMS Aadhaar Payment Bridge.",
      descHi: "स्वीकृत वजीफा और अनुदान राशि सीधे आपके आधार से जुड़े बैंक खाते में पीएफएमएस द्वारा भेजी जाती है।"
    }
  ];

  return (
    <section className="py-14 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gov-saffron-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? '100% डिजिटल एवं पारदर्शी प्रक्रिया' : '100% DIGITAL & TRANSPARENT PROCESS'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-navy-950">
            {lang === 'hi' ? 'आवेदन से डीबीटी भुगतान तक की 4-चरणीय यात्रा' : '4-Step Seamless Journey: From Application to DBT'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            {lang === 'hi'
              ? 'बिना किसी भौतिक कागजी कार्रवाई के अपने घर या कॉलेज से 10 मिनट में आवेदन पूरा करें।'
              : 'Zero physical paperwork. Complete your entire scholarship submission online in under 10 minutes.'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-gov-navy-800 opacity-30">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-gov-navy-900 text-amber-300 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-gov-navy-950 mb-2">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[11px] font-bold text-gov-saffron-600">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Action Banner */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-gov-navy-900 via-gov-navy-850 to-gov-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                {lang === 'hi' ? 'क्या आप जानना चाहते हैं कि आप किस योजना के पात्र हैं?' : 'Not sure which ST scheme matches your qualification?'}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {lang === 'hi'
                  ? 'हमारे एआई पात्रता जांचकर्ता का उपयोग करें और तुरंत अपनी रिपोर्ट प्राप्त करें।'
                  : 'Let our intelligent rule engine evaluate your criteria in real-time.'}
              </p>
            </div>
          </div>

          <Link
            to="/ai-checker"
            className="px-5 py-2.5 bg-gov-saffron-600 hover:bg-gov-saffron-500 text-white text-xs sm:text-sm font-bold rounded-md shadow transition whitespace-nowrap"
          >
            {t('Launch AI Checker', 'एआई जांचकर्ता प्रारंभ करें')}
          </Link>
        </div>
      </div>
    </section>
  );
};
