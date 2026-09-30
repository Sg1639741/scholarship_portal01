import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_STUDENT } from '../data/mockUserData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  CheckCircle2, 
  Download, 
  Calendar
} from 'lucide-react';

export const ApplicationTrackingPage = () => {
  const { lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get('id') || "APP-NFST-2026-44021";

  const [inputAppId, setInputAppId] = useState(initialId);
  const [activeApplication, setActiveApplication] = useState(
    MOCK_STUDENT.applications.find(a => a.appId === initialId) || MOCK_STUDENT.applications[0]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const found = MOCK_STUDENT.applications.find(
      a => a.appId.toLowerCase() === inputAppId.trim().toLowerCase()
    );
    if (found) {
      setActiveApplication(found);
    } else {
      // Default to first application for demo
      setActiveApplication(MOCK_STUDENT.applications[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16">
      {/* Header Banner */}
      <div className="bg-gov-navy-900 text-white py-10 px-4 border-b-4 border-gov-saffron-500">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-2">
            <Search className="w-3.5 h-3.5" />
            <span>REAL-TIME APPLICATION TRACKING</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            {lang === 'hi' ? 'आवेदन स्थिति एवं डीबीटी ट्रैकर' : 'Track ST Scholarship & Fellowship Status'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            Check the step-by-step verification progress of your application across University, District, State, and Ministry levels with official audit remarks.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-6">
        {/* Tracker Search Input */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-5 mb-8">
          <form onSubmit={handleSearch}>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Enter Application ID or Aadhaar Reference No.
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={inputAppId}
                  onChange={(e) => setInputAppId(e.target.value)}
                  placeholder="e.g. APP-NFST-2026-44021"
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm font-bold text-gov-navy-900 focus:outline-none focus:ring-2 focus:ring-gov-navy-900"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gov-saffron-600 hover:bg-gov-saffron-500 text-white rounded-lg text-xs sm:text-sm font-bold shadow transition flex items-center justify-center gap-1.5"
              >
                <span>Track Status</span>
              </button>
            </div>
          </form>

          {/* Quick Demo ID chips */}
          <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-slate-500">
            <span>Try sample applications:</span>
            <button
              onClick={() => {
                setInputAppId("APP-NFST-2026-44021");
                setActiveApplication(MOCK_STUDENT.applications[0]);
              }}
              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-gov-navy-900 rounded font-mono text-[11px]"
            >
              APP-NFST-2026-44021 (NFST Fellowship)
            </button>
            <button
              onClick={() => {
                setInputAppId("APP-TCS-2025-11093");
                setActiveApplication(MOCK_STUDENT.applications[1]);
              }}
              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-gov-navy-900 rounded font-mono text-[11px]"
            >
              APP-TCS-2025-11093 (Premier Top Class)
            </button>
          </div>
        </div>

        {/* Application Card Overview */}
        {activeApplication && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
              {/* Header Status Strip */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-100 text-blue-900">
                      {activeApplication.appId}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      activeApplication.currentStage === 6
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {activeApplication.statusBadge}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-gov-navy-950 mt-2">
                    {activeApplication.schemeName}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Candidate: <strong>{MOCK_STUDENT.name}</strong> ({MOCK_STUDENT.subTribe} Tribe, {MOCK_STUDENT.domicileState})
                  </p>
                </div>

                <button
                  onClick={() => alert("Sanction Order Acknowledgement Slip downloaded (PDF).")}
                  className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg flex items-center gap-2 transition self-start sm:self-auto"
                >
                  <Download className="w-4 h-4 text-gov-navy-900" />
                  <span>Download Slip</span>
                </button>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Applied Date</span>
                  <span className="text-xs font-bold text-slate-900">{activeApplication.appliedDate}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Sanction Grant</span>
                  <span className="text-xs font-black text-gov-green-700">₹{activeApplication.sanctionAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">DBT Mode</span>
                  <span className="text-xs font-bold text-blue-700">Aadhaar Bridge (APB)</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Target Bank</span>
                  <span className="text-xs font-bold text-slate-900">SBI A/C *4109</span>
                </div>
              </div>

              {/* Status Stepper Timeline */}
              <div className="pt-4">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-6">
                  Official Multilevel Scrutiny Timeline
                </h3>

                <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {activeApplication.timeline.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Circle Dot */}
                      <div className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        step.completed
                          ? 'bg-emerald-600 text-white ring-4 ring-emerald-100'
                          : 'bg-amber-500 text-white ring-4 ring-amber-100 animate-pulse'
                      }`}>
                        {step.completed ? <CheckCircle2 className="w-3.5 h-3.5" /> : idx + 1}
                      </div>

                      {/* Timeline Content */}
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                          <h4 className="text-sm font-bold text-gov-navy-950">
                            {step.title}
                          </h4>
                          <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            <span>{step.date}</span>
                          </span>
                        </div>

                        <p className="text-xs font-semibold text-gov-saffron-600">
                          Authority: {step.authority}
                        </p>

                        <p className="text-xs text-slate-600 mt-2 bg-white p-2.5 rounded border border-slate-200/80 leading-relaxed">
                          <strong>Remarks:</strong> {step.remarks}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
