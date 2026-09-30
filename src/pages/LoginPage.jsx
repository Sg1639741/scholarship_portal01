import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  User, 
  ArrowRight, 
  Smartphone
} from 'lucide-react';

export const LoginPage = () => {
  const { lang } = useLanguage();
  const { loginAsStudent, loginAsAdmin } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');

  const [authMethod, setAuthMethod] = useState('aadhaar'); // 'aadhaar' | 'appid'
  const [aadhaarInput, setAadhaarInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (aadhaarInput.length >= 4) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    loginAsStudent();
    if (redirect === 'apply') {
      navigate('/schemes');
    } else {
      navigate('/dashboard');
    }
  };

  const handleDemoStudent = () => {
    loginAsStudent();
    navigate(redirect === 'apply' ? '/schemes' : '/dashboard');
  };

  const handleDemoAdmin = () => {
    loginAsAdmin();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] py-12 px-4 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        {/* Ministry Top Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gov-navy-900 text-amber-300 font-bold flex items-center justify-center mx-auto mb-2 shadow">
            ST
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gov-navy-950">
            {lang === 'hi' ? 'जनजातीय छात्रवृत्ति लॉगिन' : 'Student & Beneficiary Portal'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Ministry of Tribal Affairs | Government of India
          </p>
        </div>

        {/* Quick Demo Switcher Card */}
        <div className="mb-5 p-3.5 rounded-xl bg-amber-50 border-2 border-amber-300 shadow-sm">
          <p className="text-xs font-bold text-amber-900 mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gov-saffron-600 animate-pulse"></span>
            <span>One-Click Demonstration Logins:</span>
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleDemoStudent}
              className="px-3 py-2 bg-gov-navy-900 hover:bg-gov-navy-850 text-white rounded text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
            >
              <User className="w-3.5 h-3.5" />
              <span>Student (Sunita)</span>
            </button>
            <button
              onClick={handleDemoAdmin}
              className="px-3 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Officer (Dr. Meena)</span>
            </button>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Method Tabs */}
          <div className="grid grid-cols-2 text-center text-xs font-bold border-b border-slate-200">
            <button
              onClick={() => setAuthMethod('aadhaar')}
              className={`py-3 transition border-b-2 ${
                authMethod === 'aadhaar'
                  ? 'border-gov-saffron-600 text-gov-navy-950 bg-slate-50'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Aadhaar / DigiLocker OTP
            </button>
            <button
              onClick={() => setAuthMethod('appid')}
              className={`py-3 transition border-b-2 ${
                authMethod === 'appid'
                  ? 'border-gov-saffron-600 text-gov-navy-950 bg-slate-50'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Student ID / Password
            </button>
          </div>

          <div className="p-6">
            {authMethod === 'aadhaar' ? (
              !otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      12-Digit Aadhaar / Virtual ID (VID)
                    </label>
                    <div className="relative">
                      <Smartphone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        maxLength="12"
                        value={aadhaarInput}
                        onChange={(e) => setAadhaarInput(e.target.value)}
                        placeholder="•••• •••• 8842"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-gov-navy-900"
                        required
                      />
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">
                      An OTP will be sent to your Aadhaar-registered mobile number.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded-lg text-xs font-bold shadow transition flex items-center justify-center gap-1.5"
                  >
                    <span>Get Aadhaar OTP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="relative py-2 text-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <span className="relative bg-white px-3 text-[10px] text-slate-400 font-bold uppercase">
                      Or Sign in with
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleDemoStudent}
                    className="w-full py-2 border border-slate-300 hover:bg-slate-50 rounded-lg text-xs font-bold text-slate-700 transition flex items-center justify-center gap-2"
                  >
                    <span className="w-4 h-4 rounded bg-blue-600 text-white font-black text-[9px] flex items-center justify-center">
                      DL
                    </span>
                    <span>Sign in with DigiLocker</span>
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-800">
                    <p className="font-bold">OTP Sent Successfully!</p>
                    <p className="text-[11px] mt-0.5">Enter code sent to mobile linked with Aadhaar (Mock: 123456)</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Enter 6-Digit OTP
                    </label>
                    <input
                      type="text"
                      maxLength="6"
                      value={otpInput}
                      onChange={(e) => setOtpInput(e.target.value)}
                      placeholder="123456"
                      className="w-full py-2.5 text-center bg-slate-50 border border-slate-300 rounded-lg text-lg font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-gov-navy-900"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gov-saffron-600 hover:bg-gov-saffron-500 text-white rounded-lg text-xs font-bold shadow transition"
                  >
                    Verify & Access Dashboard
                  </button>

                  <button
                    type="button"
                    onClick={() => setOtpSent(false)}
                    className="w-full text-center text-xs text-slate-500 hover:underline"
                  >
                    Change Aadhaar Number
                  </button>
                </form>
              )
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Application ID / Student Registration No.
                  </label>
                  <input
                    type="text"
                    defaultValue="ST-JH-2026-94812"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-gov-navy-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    defaultValue="password123"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gov-navy-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded-lg text-xs font-bold shadow transition"
                >
                  Sign In
                </button>
              </form>
            )}
          </div>

          {/* Registration Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-600">
            <span>New ST Student? </span>
            <Link to="/register" className="font-bold text-gov-saffron-600 hover:underline">
              Register for Scholarship
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
