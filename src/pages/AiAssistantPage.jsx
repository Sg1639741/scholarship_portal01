import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AiAssistantPage = () => {
  const { lang } = useLanguage();
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: lang === 'hi'
        ? "नमस्ते! मैं आपका जनजातीय सहायक (JanJatiya AI Sahayak) हूँ। आप मुझसे अनुसूचित जनजाति छात्रवृत्ति, पात्रता मानदंड, जाति प्रमाण पत्र सत्यापन, डीबीटी भुगतान और विदेश अध्ययन के बारे में पूछ सकते हैं।"
        : "Namaste! I am JanJatiya AI Sahayak, your dedicated guide for Ministry of Tribal Affairs (Govt. of India) scholarships, eligibility matching, AI document verification, and DBT disbursements. How can I empower your educational journey today?",
      quickLinks: [
        { label: "Check AI Eligibility", url: "/ai-checker" },
        { label: "ST Caste Certificate OCR", url: "/document-verification" },
        { label: "Track DBT Status", url: "/track" }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    "What is the income ceiling for Post-Matric ST Scholarship?",
    "Can PVTG students get 100% full fee waiver?",
    "How does AI OCR verify my Scheduled Tribe certificate?",
    "What is the monthly stipend for National Fellowship (NFST)?",
    "List of foreign universities for National Overseas Scholarship",
    "My bank account is not seeded with Aadhaar, what to do?"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: query }];
    setMessages(newMsgs);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      let links = [];
      const q = query.toLowerCase();

      if (q.includes('income') || q.includes('ceiling') || q.includes('limit') || q.includes('आय')) {
        botResponse = "For Post-Matric ST Scholarship (PMS-ST), the annual parental income ceiling is ₹2,50,000 per annum. For National Fellowship (NFST) and National Overseas Scholarship (NOS), the ceiling is ₹6,00,000 per annum. Under the PM-JANMAN mission, students from 75 Particularly Vulnerable Tribal Groups (PVTGs) are 100% exempt from income restrictions!";
        links = [{ label: "Verify Income via AI Checker", url: "/ai-checker" }];
      } else if (q.includes('pvtg') || q.includes('janman') || q.includes('कमजोर')) {
        botResponse = "Under PM-JANMAN, students belonging to 75 notified PVTG communities (e.g. Baiga, Birhor, Chenchu, Kamar, Sahariya, Maria Gond) receive fast-track automatic admissions, zero fee liability, full hostel coverage, and top-tier civil service & research coaching allowances.";
        links = [{ label: "Browse PM-JANMAN Scheme", url: "/schemes" }];
      } else if (q.includes('overseas') || q.includes('foreign') || q.includes('विदेश') || q.includes('nos')) {
        botResponse = "The National Overseas Scholarship (NOS-ST) provides 100 slots annually for ST students admitted to Top 500 QS World University Ranked institutions. It pays 100% tuition fees, annual maintenance allowance of $15,400 (USA) or £9,900 (UK), health insurance, and return airfare!";
        links = [{ label: "View NOS Guidelines", url: "/schemes" }];
      } else if (q.includes('fellowship') || q.includes('phd') || q.includes('stipend') || q.includes('nfst')) {
        botResponse = "The National Fellowship for Higher Education of ST Students (NFST) awards ₹37,000/month for Junior Research Fellows (JRF) for first 2 years, and ₹42,000/month for Senior Research Fellows (SRF) for remaining 3 years, plus HRA and annual contingency grants of up to ₹12,000.";
        links = [{ label: "View NFST Details", url: "/schemes" }, { label: "Track Application", url: "/track" }];
      } else if (q.includes('ocr') || q.includes('cert') || q.includes('verify') || q.includes('सत्यापन')) {
        botResponse = "Our AI Document Verification tool scans your Caste and Income certificates using Tesseract 5.0 neural OCR. It verifies the Certificate Number, issuing Sub-Divisional Magistrate (SDM) or Tahsildar seal, and digital QR code against State Revenue registries in under 30 seconds.";
        links = [{ label: "Test AI OCR Scanner Now", url: "/document-verification" }];
      } else if (q.includes('aadhaar') || q.includes('dbt') || q.includes('bank') || q.includes('pfms')) {
        botResponse = "All scholarship payments are routed via the National Payments Corporation of India (NPCI) Aadhaar Payment Bridge. Ensure your Aadhaar is linked with your primary active bank account by visiting your bank branch or via the UIDAI Aadhaar seeding check portal.";
        links = [{ label: "View DBT Passbook", url: "/dashboard" }];
      } else {
        botResponse = "Thank you for inquiring with the JanJatiya Portal AI Helpdesk. All Central Sector ST schemes feature 100% paperless DigiLocker e-KYC and automated AI verification under the Ministry of Tribal Affairs.";
        links = [{ label: "Explore Schemes", url: "/schemes" }, { label: "Launch AI Checker", url: "/ai-checker" }];
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse, quickLinks: links }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16 flex flex-col">
      {/* Header Banner */}
      <div className="bg-gov-navy-900 text-white py-8 px-4 border-b-4 border-gov-saffron-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-gov-navy-950 flex items-center justify-center shadow-lg font-bold">
              <Bot className="w-7 h-7 text-gov-navy-900" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-white">
                  JanJatiya AI Sahayak (जनजातीय सहायक)
                </h1>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Official Ministry of Tribal Affairs 24x7 Conversational Intelligence Engine
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                voiceEnabled ? 'bg-amber-400 text-gov-navy-950' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
              title="Toggle Audio Read-Out"
            >
              {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{voiceEnabled ? 'Voice On' : 'Voice Off'}</span>
            </button>
            <button
              onClick={() => setMessages([messages[0]])}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1"
              title="Reset Conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-5 flex-1 w-full flex flex-col space-y-4">
        {/* Sample Prompt Chips */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-gov-saffron-600" />
            <span>Suggested Questions for ST Scholars:</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {samplePrompts.map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSend(prompt)}
                className="px-3 py-1.5 bg-slate-50 hover:bg-amber-50 hover:border-amber-300 border border-slate-200 text-slate-700 text-xs rounded-full transition text-left"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages Log */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 flex-1 min-h-[460px] flex flex-col overflow-hidden">
          <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-[#F8FAFC]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-gov-navy-900 text-amber-300 flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-sm">
                    AI
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 shadow-sm text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gov-navy-900 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Optional Quick Links in bot message */}
                  {msg.quickLinks && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-2">
                      {msg.quickLinks.map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          to={link.url}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold rounded-lg transition"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-500 text-xs p-3 bg-white rounded-xl border border-slate-200 w-36">
                <span className="w-2 h-2 bg-gov-saffron-600 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gov-saffron-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-gov-saffron-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span>Generating...</span>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-4 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your query regarding ST scholarships, eligibility, DBT or certificates..."
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gov-navy-900"
              />
              <button
                type="submit"
                className="p-3 bg-gov-navy-900 hover:bg-gov-navy-800 text-amber-300 rounded-xl transition shadow flex items-center justify-center flex-shrink-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
