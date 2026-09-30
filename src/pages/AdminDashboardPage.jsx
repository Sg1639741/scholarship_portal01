import React, { useState } from 'react';
import { MOCK_OFFICER, MOCK_ADMIN_APPLICATIONS } from '../data/mockUserData';
import { 
  ShieldCheck, 
  Users, 
  IndianRupee, 
  AlertTriangle, 
  CheckCircle2, 
  Search, 
  FileCheck2, 
  Check, 
  X, 
  Eye, 
  Sparkles
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

export const AdminDashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [applications, setApplications] = useState(MOCK_ADMIN_APPLICATIONS);
  const [selectedApp, setSelectedApp] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const stateDistributionData = [
    { state: 'Jharkhand', applications: 4820 },
    { state: 'Odisha', applications: 5120 },
    { state: 'Madhya Pradesh', applications: 6240 },
    { state: 'Chhattisgarh', applications: 3910 },
    { state: 'Maharashtra', applications: 2890 },
    { state: 'Assam', applications: 2410 },
    { state: 'Rajasthan', applications: 3100 }
  ];

  const schemeBudgetData = [
    { name: 'Post-Matric ST', value: 45, color: '#163B6B' },
    { name: 'National Fellowship', value: 25, color: '#D9531E' },
    { name: 'Top Class Premier', value: 18, color: '#169343' },
    { name: 'National Overseas', value: 12, color: '#B8860B' }
  ];

  const handleApprove = (id, name) => {
    setApplications(prev => prev.map(app => 
      app.id === id ? { ...app, status: 'Sanctioned Approved', aiRiskLevel: 'Approved' } : app
    ));
    setToastMessage(`Application ${id} for ${name} has been approved for DBT disbursement.`);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleReject = (id) => {
    setApplications(prev => prev.map(app => 
      app.id === id ? { ...app, status: 'Rejected / Discrepancy Flagged', aiRiskLevel: 'Rejected' } : app
    ));
    setToastMessage(`Application ${id} flagged for clarification.`);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const filteredApps = applications.filter(app => 
    app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.scheme.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.tribe.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16">
      {/* Officer Header */}
      <div className="bg-[#0B1E36] text-white py-8 px-4 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-gov-navy-950 font-black flex items-center justify-center text-lg shadow">
              <ShieldCheck className="w-7 h-7 text-gov-navy-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-white">
                  {MOCK_OFFICER.name}
                </h1>
                <span className="text-[10px] bg-amber-400 text-gov-navy-950 font-black px-2 py-0.5 rounded uppercase">
                  Central Scrutiny Cell
                </span>
              </div>
              <p className="text-xs text-amber-200 mt-0.5">
                {MOCK_OFFICER.designation} • {MOCK_OFFICER.department}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
              Session: <strong>AY 2026-27 (Phase 1)</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-5 space-y-6">
        {/* Toast Alert */}
        {toastMessage && (
          <div className="p-4 rounded-xl bg-emerald-600 text-white shadow-xl flex items-center justify-between animate-in fade-in duration-200">
            <span className="text-xs font-bold">{toastMessage}</span>
            <button onClick={() => setToastMessage('')}><X className="w-4 h-4" /></button>
          </div>
        )}

        {/* Top KPIs Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Pending Applications</span>
              <p className="text-2xl font-black text-gov-navy-950 mt-0.5">24,190</p>
              <p className="text-[11px] text-amber-600 font-semibold mt-1">28 Assigned for Today</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-gov-navy-900 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">AI Anomaly Flags</span>
              <p className="text-2xl font-black text-amber-600 mt-0.5">1,840</p>
              <p className="text-[11px] text-slate-500 mt-1">Income & Seal Mismatch</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Quarterly DBT Sanctioned</span>
              <p className="text-2xl font-black text-gov-green-700 mt-0.5">₹612.4 Cr</p>
              <p className="text-[11px] text-slate-500 mt-1">Direct via PFMS APB</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <IndianRupee className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">AI Verification SLA</span>
              <p className="text-2xl font-black text-purple-700 mt-0.5">98.6%</p>
              <p className="text-[11px] text-slate-500 mt-1">Avg 1.8 mins / Dossier</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bar Chart: State distribution */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow-md border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-black text-gov-navy-950 uppercase tracking-wide">
                  State-Wise ST Applicants Inflow (AY 2026-27)
                </h3>
                <p className="text-xs text-slate-500">Live statistics from State Tribal Directorates</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border">
                Central Registry
              </span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stateDistributionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="state" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="applications" fill="#163B6B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart: Scheme-wise budget */}
          <div className="lg:col-span-4 bg-white rounded-xl shadow-md border border-slate-200 p-5">
            <h3 className="text-sm font-black text-gov-navy-950 uppercase tracking-wide mb-1">
              DBT Budget Allocation %
            </h3>
            <p className="text-xs text-slate-500 mb-4">Central vs Sponsored Breakdown</p>
            <div className="h-48 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={schemeBudgetData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    dataKey="value"
                    paddingAngle={3}
                  >
                    {schemeBudgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1.5 text-xs pt-2 border-t">
              {schemeBudgetData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Verification & Scrutiny Table */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-black text-gov-navy-950 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-gov-navy-900" />
                <span>AI Scrutiny & Approval Desk</span>
              </h2>
              <p className="text-xs text-slate-500">Applications pending Deputy Director / Nodal Officer digital sanction</p>
            </div>

            {/* Search Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter by applicant, tribe, state..."
                className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-gov-navy-900"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-600 font-bold uppercase border-b">
                <tr>
                  <th className="py-3 px-4">Applicant & Tribe</th>
                  <th className="py-3 px-4">Scheme Applied</th>
                  <th className="py-3 px-4">Income / Course</th>
                  <th className="py-3 px-4">AI Risk & OCR Confidence</th>
                  <th className="py-3 px-4">Current Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/80 transition">
                    {/* Applicant */}
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-slate-900">{app.applicantName}</p>
                      <p className="text-[11px] text-gov-saffron-600 font-medium">
                        {app.tribe} • {app.state}
                      </p>
                      <span className="font-mono text-[10px] text-slate-400">{app.id}</span>
                    </td>

                    {/* Scheme */}
                    <td className="py-3.5 px-4 max-w-[200px]">
                      <p className="font-semibold text-slate-900 line-clamp-1">{app.scheme}</p>
                      <p className="text-[10px] text-slate-500">Submitted: {app.submissionDate}</p>
                    </td>

                    {/* Income */}
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-slate-900">{app.income}</p>
                      <p className="text-[10px] text-slate-500 line-clamp-1">{app.course}</p>
                    </td>

                    {/* AI Score */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          app.aiRiskLevel.includes('Low')
                            ? 'bg-emerald-100 text-emerald-800'
                            : app.aiRiskLevel.includes('Fast')
                            ? 'bg-purple-100 text-purple-800'
                            : app.aiRiskLevel.includes('Approved')
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {app.aiRiskLevel}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {app.ocrConfidence} OCR
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                        {app.flags[0]}
                      </p>
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4">
                      <span className="text-[11px] font-semibold text-slate-800">
                        {app.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setSelectedApp(app)}
                          className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition"
                          title="View Extracted OCR Dossier"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleApprove(app.id, app.applicantName)}
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold transition flex items-center gap-1"
                          title="Direct Sanction Approval"
                        >
                          <Check className="w-3 h-3" />
                          <span>Approve</span>
                        </button>
                        <button
                          onClick={() => handleReject(app.id, app.applicantName)}
                          className="p-1 bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded transition"
                          title="Query Clarification"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* OCR Dossier Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-300 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b">
              <div>
                <h3 className="font-bold text-sm text-gov-navy-950">AI Verification Dossier</h3>
                <p className="text-xs text-slate-500">{selectedApp.id} • {selectedApp.applicantName}</p>
              </div>
              <button onClick={() => setSelectedApp(null)}><X className="w-4 h-4" /></button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p><strong>Candidate:</strong> {selectedApp.applicantName} ({selectedApp.tribe} Tribe)</p>
                <p><strong>Course:</strong> {selectedApp.course}</p>
                <p><strong>Income:</strong> {selectedApp.income}</p>
                <p><strong>AI Fitment Score:</strong> {selectedApp.aiMatchScore}%</p>
                <p><strong>OCR Accuracy:</strong> {selectedApp.ocrConfidence}</p>
              </div>

              <div>
                <p className="font-bold text-slate-800 mb-1">AI Audit Flags:</p>
                <ul className="space-y-1 text-slate-600">
                  {selectedApp.flags.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t flex justify-end gap-2">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-4 py-2 border rounded text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleApprove(selectedApp.id, selectedApp.applicantName);
                  setSelectedApp(null);
                }}
                className="px-4 py-2 bg-emerald-600 text-white rounded text-xs font-bold"
              >
                Approve & Sanction
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
