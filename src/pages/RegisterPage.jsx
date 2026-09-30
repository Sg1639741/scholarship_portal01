import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { STATES_AND_UT, POPULAR_TRIBES } from '../data/schemesData';
import { 
  UserCheck, 
  ShieldCheck, 
  ArrowRight, 
  CreditCard, 
  CheckCircle2, 
  FileCheck2
} from 'lucide-react';

export const RegisterPage = () => {
  const { loginAsStudent } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "Sunita Soren",
    aadhaarNo: "884291048842",
    mobile: "9876543210",
    dob: "2001-08-14",
    gender: "Female",
    state: "Jharkhand",
    district: "Dumka",
    tribe: "Santhal",
    certNo: "JH/DMK/ST/2022/77189",
    bankName: "State Bank of India",
    accountNo: "309811424109",
    ifsc: "SBIN0000078"
  });

  const handleComplete = (e) => {
    e.preventDefault();
    loginAsStudent();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] py-12 px-4 flex flex-col justify-center">
      <div className="max-w-xl w-full mx-auto">
        {/* Title */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gov-navy-900 text-amber-300 font-bold flex items-center justify-center mx-auto mb-2 shadow">
            ST
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gov-navy-950">
            {lang === 'hi' ? 'अनुसूचित जनजाति विद्यार्थी नया पंजीकरण' : 'ST Student One-Time Registration (OTR)'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Direct Benefit Transfer (DBT) Single Sign-On Account
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Stepper Header */}
          <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600">
            <span className={step >= 1 ? 'text-gov-navy-900' : 'text-slate-400'}>
              1. Aadhaar e-KYC
            </span>
            <span>&rarr;</span>
            <span className={step >= 2 ? 'text-gov-navy-900' : 'text-slate-400'}>
              2. Tribe Certificate
            </span>
            <span>&rarr;</span>
            <span className={step >= 3 ? 'text-gov-navy-900' : 'text-slate-400'}>
              3. DBT Bank Account
            </span>
          </div>

          <div className="p-6">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gov-navy-950 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-gov-navy-900" />
                  <span>Aadhaar e-KYC Authentication</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name (As per Aadhaar) *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">12-Digit Aadhaar Number *</label>
                    <input
                      type="text"
                      value={formData.aadhaarNo}
                      onChange={(e) => setFormData({ ...formData, aadhaarNo: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Mobile (Linked to Aadhaar) *</label>
                      <input
                        type="text"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Date of Birth *</label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow"
                  >
                    <span>Proceed to Tribe Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gov-navy-950 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-gov-saffron-600" />
                  <span>Scheduled Tribe Community Profile</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">State of Domicile *</label>
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                      >
                        {STATES_AND_UT.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Sub-Tribe Community *</label>
                      <select
                        value={formData.tribe}
                        onChange={(e) => setFormData({ ...formData, tribe: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                      >
                        {POPULAR_TRIBES.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">ST Caste Certificate Number *</label>
                    <input
                      type="text"
                      value={formData.certNo}
                      onChange={(e) => setFormData({ ...formData, certNo: e.target.value })}
                      placeholder="e.g. JH/DMK/ST/2022/77189"
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono font-bold"
                    />
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Instant OCR Verification will automatically match your revenue seal.</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow"
                  >
                    <span>Proceed to Bank Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleComplete} className="space-y-4">
                <h3 className="text-sm font-bold text-gov-navy-950 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-emerald-600" />
                  <span>Aadhaar-Seeded DBT Bank Account</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Bank Name *</label>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Account Number *</label>
                      <input
                        type="text"
                        value={formData.accountNo}
                        onChange={(e) => setFormData({ ...formData, accountNo: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono font-bold"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">IFSC Code *</label>
                      <input
                        type="text"
                        value={formData.ifsc}
                        onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono font-bold"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-blue-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-700 flex-shrink-0" />
                    <span>NPCI Aadhaar Mapping Active. Funds will disburse via PFMS.</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gov-saffron-600 hover:bg-gov-saffron-500 text-white rounded-lg text-xs font-bold shadow flex items-center gap-1.5"
                  >
                    <span>Complete Registration</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-600">
            <span>Already have an OTR Account? </span>
            <Link to="/login" className="font-bold text-gov-navy-900 hover:underline">
              Sign In Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
