import React, { useState } from 'react';
import { Bot, X, Send, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

export const FloatingAIBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: lang === 'hi' 
        ? "नमस्ते! मैं आपका जनजातीय सहायक (JanJatiya AI Sahayak) हूँ। मैं अनुसूचित जनजाति छात्रवृत्ति, पात्रता, जाति प्रमाण पत्र सत्यापन और डीबीटी भुगतान में आपकी सहायता कर सकता हूँ।"
        : "Namaste! I am JanJatiya AI Sahayak, your official guide for Ministry of Tribal Affairs Scholarships, Eligibility, Document OCR, and DBT tracking. How may I assist you today?",
      options: [
        "Check my scholarship eligibility",
        "How to verify ST Certificate via OCR?",
        "Status of NFST Fellowship stipend",
        "National Overseas Scholarship documents"
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Append user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // AI Simulated Reply
    setTimeout(() => {
      let botResponse = "";
      let suggestions = [];
      const lower = query.toLowerCase();

      if (lower.includes('eligib') || lower.includes('check') || lower.includes('पात्रता')) {
        botResponse = "Based on Government criteria, you can use our 3-step AI Eligibility Matcher! Key rules: You must belong to a recognized Scheduled Tribe (ST) category with valid revenue certificate. Most schemes have family income limits between ₹2.5L to ₹6.0L per annum (PVTG candidates receive 100% full exemption).";
        suggestions = ["Open AI Eligibility Checker", "View Post-Matric ST Scheme", "Income certificate guidelines"];
      } else if (lower.includes('ocr') || lower.includes('cert') || lower.includes('doc') || lower.includes('दस्तावेज़')) {
        botResponse = "Our AI Document Verification engine reads your ST Caste Certificate using bilingual OCR. It cross-checks the Certificate Number, Sub-Tribe, Issuing Tahsildar/SDM, and digital QR seal against the State Revenue Registry with 99.4% accuracy.";
        suggestions = ["Try AI OCR Document Tool", "What if my seal is blurred?"];
      } else if (lower.includes('dbt') || lower.includes('stipend') || lower.includes('money') || lower.includes('payment') || lower.includes('रुपये')) {
        botResponse = "All scholarship allowances are directly disbursed via the Public Financial Management System (PFMS) through the Aadhaar Payment Bridge (APB). Ensure your bank account is active with NPCI Aadhaar seeding.";
        suggestions = ["Track my DBT payment", "Check Aadhaar bank status"];
      } else if (lower.includes('overseas') || lower.includes('विदेश') || lower.includes('nos')) {
        botResponse = "The National Overseas Scholarship (NOS-ST) provides 100% financial assistance for Master's, Ph.D., and Post-Doctoral studies in Top 500 QS ranked foreign universities. Annual maintenance allowance of $15,400 (USA) or £9,900 (UK) is granted.";
        suggestions = ["View NOS Scheme Guidelines", "List of approved universities"];
      } else {
        botResponse = "Thank you for reaching out. Under the Ministry of Tribal Affairs guidelines, you can apply for Post-Matric, Top Class (IIT/IIM/AIIMS), National Overseas, or NFST Research Fellowships with single-sign on through DigiLocker.";
        suggestions = ["View All ST Schemes", "Contact Toll-Free Helpline: 1800-11-7788"];
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse, options: suggestions }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 bg-gradient-to-r from-gov-navy-900 to-gov-navy-800 hover:from-gov-navy-850 hover:to-gov-navy-750 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl border-2 border-amber-400 hover:scale-105 transition-all duration-300"
          title="Open AI Assistant"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-amber-400 text-gov-navy-950 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5 text-gov-navy-900" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></span>
          </div>
          <div className="hidden sm:block text-left pr-1">
            <p className="text-xs font-bold text-amber-300 leading-tight">JanJatiya AI Sahayak</p>
            <p className="text-[10px] text-slate-300">24x7 Tribal Query Assistant</p>
          </div>
        </button>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-300 w-[90vw] sm:w-[380px] h-[520px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-gov-navy-900 text-white p-3.5 flex items-center justify-between border-b-2 border-gov-saffron-500">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-gov-navy-950 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <span>JanJatiya AI Sahayak</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </h3>
                <p className="text-[10px] text-slate-300">Official MoTA AI Assistant (Bilingual)</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Link
                to="/assistant"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white"
                title="Open full page assistant"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#F8FAFC] text-xs">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-3 leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gov-navy-900 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>

                {/* Quick prompt suggestions */}
                {msg.options && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleSend(opt)}
                        className="px-2 py-1 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 text-[11px] rounded-full transition text-left"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] p-2 bg-white rounded-lg border border-slate-200 w-24">
                <span className="w-1.5 h-1.5 bg-gov-saffron-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gov-saffron-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-gov-saffron-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span className="ml-1 text-[10px]">Thinking...</span>
              </div>
            )}
          </div>

          {/* Input Footer */}
          <div className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'hi' ? 'पूछें (उदा. क्या मैं पात्र हूँ?)...' : 'Ask query or scheme name...'}
              className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gov-navy-900"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 bg-gov-navy-900 hover:bg-gov-navy-800 text-amber-300 rounded-lg transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
