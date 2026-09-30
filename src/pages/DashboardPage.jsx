import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_STUDENT } from '../data/mockUserData';
import { useAuth } from '../context/AuthContext';
import { 
  User, 
  IndianRupee, 
  Award, 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Download, 
  ShieldCheck,
  Bell
} from 'lucide-react';

export const DashboardPage = () => {
  const { currentUser, isStudent } = useAuth();
  
  // Use MOCK_STUDENT if not logged in as student for seamless demo
  const student = (isStudent && currentUser) ? currentUser : MOCK_STUDENT;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16">
      {/* Top Banner */}
      <div className="bg-gov-navy-900 text-white py-8 px-4 border-b-4 border-gov-saffron-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-400 text-gov-navy-950 font-black text-xl flex items-center justify-center shadow-lg border-2 border-white">
              {student.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-white">
                  {student.name}
                </h1>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>DigiLocker Verified</span>
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Tribe: <strong>{student.subTribe}</strong> | Domicile: <strong>{student.domicileState}</strong> | ID: <span className="font-mono text-amber-300">{student.id}</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {student.course} — {student.institution}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/notifications"
              className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold text-white flex items-center gap-2 border border-white/20 transition"
            >
              <Bell className="w-3.5 h-3.5 text-amber-300" />
              <span>Alerts (2)</span>
            </Link>
            <Link
              to="/schemes"
              className="px-4 py-2 bg-gov-saffron-600 hover:bg-gov-saffron-500 rounded-lg text-xs font-bold text-white flex items-center gap-1.5 shadow transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply Scheme</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-5 space-y-6">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Sanctioned</span>
              <p className="text-xl font-black text-gov-green-700 mt-0.5">₹7,90,000</p>
              <p className="text-[11px] text-slate-500 mt-1">Under 2 Active Grants</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <IndianRupee className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Active Applications</span>
              <p className="text-xl font-black text-gov-navy-950 mt-0.5">2 Schemes</p>
              <p className="text-[11px] text-emerald-600 font-semibold mt-1">Stage 5 of 6 Clear</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-gov-navy-900 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">DBT Bank Account</span>
              <p className="text-base font-black text-slate-900 mt-0.5">{student.dbtAccount.bankName}</p>
              <p className="text-[11px] text-slate-500 mt-1">A/C *{student.dbtAccount.accountLast4} (NPCI Active)</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">AI Document Health</span>
              <p className="text-xl font-black text-emerald-600 mt-0.5">99.4% Valid</p>
              <p className="text-[11px] text-slate-500 mt-1">All Revenue Seals Verified</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Active Applications Section */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-gov-navy-950">
                Active Scholarship & Fellowship Applications
              </h2>
              <p className="text-xs text-slate-500">Live multi-tier status verified across Ministry scrutiny channels</p>
            </div>
            <Link
              to="/track"
              className="text-xs font-bold text-gov-saffron-600 hover:underline flex items-center gap-1"
            >
              <span>Full Workflow View</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {student.applications.map((app) => (
              <div key={app.appId} className="p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-blue-50 text-blue-900 rounded">
                        {app.appId}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        app.currentStage === 6
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {app.statusBadge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gov-navy-950 mt-1">
                      {app.schemeName}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-sm font-black text-gov-green-700">
                      ₹{app.sanctionAmount.toLocaleString('en-IN')}
                    </p>
                    <p className="text-[10px] text-slate-500">{app.annualStipend}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Progress: Stage {app.currentStage} of 6</span>
                    <span className="text-gov-saffron-600 font-semibold">{app.statusText}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gov-navy-900 to-gov-saffron-500 rounded-full"
                      style={{ width: `${(app.currentStage / 6) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-4 text-xs text-slate-600">
                    <span>Applied on: <strong>{app.appliedDate}</strong></span>
                    <span>•</span>
                    <span>Tribe: <strong>{student.subTribe}</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/track?id=${app.appId}`}
                      className="px-3 py-1.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded text-xs font-bold transition flex items-center gap-1"
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Track Timeline</span>
                    </Link>
                    <button
                      onClick={() => alert(`Sanction Order for ${app.appId} downloaded.`)}
                      className="px-3 py-1.5 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded text-xs font-bold transition flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Sanction Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DBT Payment Credits History & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* DBT Payment History */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow-md border border-slate-200 p-5">
            <h3 className="text-base font-black text-gov-navy-950 mb-3 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-gov-green-700" />
              <span>Direct Benefit Transfer (DBT) Disbursement History</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-600 font-bold uppercase border-b">
                  <tr>
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3">Scheme</th>
                    <th className="py-2.5 px-3">Amount</th>
                    <th className="py-2.5 px-3">PFMS UTR No.</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {student.dbtHistory.map((txn) => (
                    <tr key={txn.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-semibold text-slate-800">{txn.date}</td>
                      <td className="py-3 px-3 text-slate-700">{txn.scheme}</td>
                      <td className="py-3 px-3 font-black text-gov-green-700">{txn.amount}</td>
                      <td className="py-3 px-3 font-mono text-[11px] text-slate-600">{txn.utr}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {txn.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Tools Box */}
          <div className="lg:col-span-4 bg-white rounded-xl shadow-md border border-slate-200 p-5 space-y-3">
            <h3 className="text-base font-black text-gov-navy-950 mb-1">
              Beneficiary Quick Actions
            </h3>

            <Link
              to="/document-verification"
              className="w-full p-3 rounded-lg border border-slate-200 hover:border-amber-400 bg-slate-50 hover:bg-amber-50/50 transition flex items-center gap-3 block"
            >
              <div className="w-8 h-8 rounded bg-blue-100 text-gov-navy-900 flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gov-navy-950">AI Document Scanner</p>
                <p className="text-[10px] text-slate-500">Scan & verify caste or income certificate</p>
              </div>
            </Link>

            <Link
              to="/ai-checker"
              className="w-full p-3 rounded-lg border border-slate-200 hover:border-amber-400 bg-slate-50 hover:bg-amber-50/50 transition flex items-center gap-3 block"
            >
              <div className="w-8 h-8 rounded bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gov-navy-950">AI Scheme Matchmaker</p>
                <p className="text-[10px] text-slate-500">Discover new research fellowships</p>
              </div>
            </Link>

            <Link
              to="/assistant"
              className="w-full p-3 rounded-lg border border-slate-200 hover:border-amber-400 bg-slate-50 hover:bg-amber-50/50 transition flex items-center gap-3 block"
            >
              <div className="w-8 h-8 rounded bg-emerald-100 text-emerald-900 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gov-navy-950">JanJatiya AI Sahayak</p>
                <p className="text-[10px] text-slate-500">24x7 help for queries & grievances</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
