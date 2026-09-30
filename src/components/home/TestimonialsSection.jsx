import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Quote, MapPin } from 'lucide-react';

export const TestimonialsSection = () => {
  const { lang } = useLanguage();

  const stories = [
    {
      name: "Sunita Soren",
      tribe: "Santhal Tribe (Dumka, Jharkhand)",
      scheme: "National Fellowship (NFST)",
      role: "Ph.D. Scholar, Central University of Jharkhand",
      quote: "The monthly fellowship stipend of ₹37,000 via direct DBT allows me to conduct research in tribal forest ecology without financial stress. The AI document verification completed in under 2 minutes!",
      quoteHi: "प्रत्यक्ष डीबीटी के माध्यम से ₹37,000 की मासिक अध्येतावृत्ति मुझे बिना किसी वित्तीय तनाव के जनजातीय वन पारिस्थितिकी में शोध करने में सक्षम बनाती है।"
    },
    {
      name: "Dinesh Meena",
      tribe: "Meena Tribe (Sawai Madhopur, Rajasthan)",
      scheme: "National Overseas Scholarship (NOS)",
      role: "M.S. in Robotics, University of Manchester, UK",
      quote: "Receiving the 100% funded National Overseas Scholarship changed my life. Everything from tuition fees to flight tickets and living allowance was handled directly by the Ministry.",
      quoteHi: "100% वित्तपोषित राष्ट्रीय विदेशी छात्रवृत्ति ने मेरा जीवन बदल दिया। ट्यूशन फीस से लेकर हवाई टिकट और रहने का भत्ता सब मंत्रालय द्वारा प्रदान किया गया।"
    },
    {
      name: "Ananya Maravi",
      tribe: "Gond Tribe (Mandla, Madhya Pradesh)",
      scheme: "Top Class Scheme in Premier Institutes",
      role: "B.Tech Computer Science, IIT Bombay",
      quote: "As an Eklavya School alumna, getting a full tuition fee waiver plus ₹86,000 for a laptop in the first year helped me compete equally with top engineering minds of India.",
      quoteHi: "एकलव्य विद्यालय की छात्रा के रूप में प्रथम वर्ष में पूर्ण ट्यूशन फीस छूट और लैपटॉप के लिए ₹86,000 मिलने से मुझे शीर्ष इंजीनियरिंग संस्थानों में पढ़ने का अवसर मिला।"
    }
  ];

  return (
    <section className="py-14 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold text-gov-saffron-600 uppercase tracking-widest mb-1.5">
            {lang === 'hi' ? 'जनजातीय प्रतिभाओं की सफलता की कहानियां' : 'VOICE OF TRIBAL SCHOLARS'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-navy-950">
            {lang === 'hi' ? 'सपनों को उड़ान, भविष्य को पहचान' : 'Empowering Tribal Dreams Across the Nation'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Real impact stories from ST students studying across premier Indian and international institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-400 mb-3 opacity-60" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{lang === 'hi' ? item.quoteHi : item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gov-navy-900 text-amber-300 font-bold flex items-center justify-center text-sm flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gov-navy-950">{item.name}</h4>
                  <p className="text-[11px] font-semibold text-gov-saffron-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.tribe}</span>
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
