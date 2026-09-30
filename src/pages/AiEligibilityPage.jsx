import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SCHEMES_DATA, STATES_AND_UT, POPULAR_TRIBES } from '../data/schemesData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck
} from 'lucide-react';

export const AiEligibilityPage = () => {
  const { lang } = useLanguage();

  // Multi-step form state
  const [step, setStep] = useState(1);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationComplete, setEvaluationComplete] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    state: "Jharkhand",
    subTribe: "Santhal",
    isPVTG: false,
    gender: "Female",
    pwd: false,
    courseLevel: "M.Phil/Ph.D.",
    percentage: 72,
    institutionType: "Central / State University",
    familyIncome: 185000,
    hasForeignOffer: false
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const runAiEvaluation = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setEvaluationComplete(true);
    }, 1400);
  };

  const resetForm = () => {
    setStep(1);
    setEvaluationComplete(false);
  };

  // Rule-based AI Engine calculating match score for each scheme
  const schemeMatches = SCHEMES_DATA.map(scheme => {
    let score = 0;
    let reasons = [];
    let warnings = [];

    // 1. Tribe check
    score += 30;
    reasons.push("Verified Scheduled Tribe category");

    // 2. PVTG check
    if (formData.isPVTG && scheme.id === 'st-pvtg-special-grant') {
      score += 40;
      reasons.push("Qualifies under PM-JANMAN 75 Notified PVTG priority");
    }

    // 3. Income Check
    if (formData.familyIncome <= scheme.eligibility.incomeLimit || formData.isPVTG) {
      score += 30;
      reasons.push(`Annual income ₹${formData.familyIncome.toLocaleString('en-IN')} is within ₹${scheme.eligibility.incomeLimit.toLocaleString('en-IN')} ceiling`);
    } else {
      score -= 30;
      warnings.push(`Annual income ₹${formData.familyIncome.toLocaleString('en-IN')} exceeds ₹${scheme.eligibility.incomeLimit.toLocaleString('en-IN')} limit`);
    }

    // 4. Academic level match
    if (scheme.level === 'All Levels') {
      score += 25;
      reasons.push("Open to all education categories");
    } else if (scheme.level === formData.courseLevel) {
      score += 35;
      reasons.push(`Direct match with your enrollment level: ${formData.courseLevel}`);
    } else if (formData.courseLevel === 'M.Phil/Ph.D.' && scheme.id === 'st-national-fellowship') {
      score += 40;
      reasons.push("Eligible for Junior / Senior Research Fellowship tenure");
    } else if (formData.courseLevel === 'Overseas' && scheme.id === 'st-national-overseas') {
      score += 40;
      reasons.push("Eligible for Top 500 QS Foreign Study Grant");
    } else if (formData.courseLevel === 'Undergraduate' && (scheme.id === 'st-post-matric' || scheme.id === 'st-top-class-education')) {
      score += 25;
      reasons.push("Eligible for higher college degree assistance");
    } else if ((formData.courseLevel === 'Class 9' || formData.courseLevel === 'Class 10') && scheme.id === 'st-pre-matric') {
      score += 35;
      reasons.push("Direct match for Secondary School assistance");
    } else {
      score -= 20;
      warnings.push(`Scheme level (${scheme.level}) differs from your enrolled level (${formData.courseLevel})`);
    }

    // 5. Marks check
    if (formData.percentage >= scheme.eligibility.minMarks) {
      score += 15;
      reasons.push(`Score of ${formData.percentage}% satisfies minimum criteria (${scheme.eligibility.minMarks}%)`);
    } else {
      score -= 20;
      warnings.push(`Score of ${formData.percentage}% is below required ${scheme.eligibility.minMarks}%`);
    }

    // Normalize score 0 - 100
    const finalScore = Math.min(100, Math.max(10, score));

    return {
      ...scheme,
      matchScore: finalScore,
      reasons,
      warnings,
      isRecommended: finalScore >= 75
    };
  }).sort((a, b) => b.matchScore - a.matchScore);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16">
      {/* Banner */}
      <div className="bg-gov-navy-900 text-white py-10 px-4 border-b-4 border-gov-saffron-500">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-POWERED SCHOLARSHIP FITMENT ENGINE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            {lang === 'hi' ? 'एआई छात्रवृत्ति एवं अध्येतावृत्ति पात्रता जांच' : 'AI Scholarship & Fellowship Eligibility Checker'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            Eliminate uncertainty. Our machine learning recommendation engine checks caste criteria, income limits, course level, and marks to find your best-matching Government of India grants.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-6">
        {!evaluationComplete ? (
          /* Multi-Step Input Wizard */
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Step Progress Bar */}
            <div className="bg-slate-50 border-b border-slate-200 p-4 sm:p-5">
              <div className="flex items-center justify-between max-w-xl mx-auto">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    step >= 1 ? 'bg-gov-navy-900 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    1
                  </div>
                  <span className={`text-xs font-bold hidden sm:inline ${step >= 1 ? 'text-gov-navy-900' : 'text-slate-500'}`}>
                    Tribe & Domicile
                  </span>
                </div>
                <div className="w-12 sm:w-24 h-1 bg-slate-200">
                  <div className={`h-full bg-gov-saffron-500 transition-all ${step >= 2 ? 'w-full' : 'w-0'}`} />
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    step >= 2 ? 'bg-gov-navy-900 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    2
                  </div>
                  <span className={`text-xs font-bold hidden sm:inline ${step >= 2 ? 'text-gov-navy-900' : 'text-slate-500'}`}>
                    Academic Profile
                  </span>
                </div>
                <div className="w-12 sm:w-24 h-1 bg-slate-200">
                  <div className={`h-full bg-gov-saffron-500 transition-all ${step >= 3 ? 'w-full' : 'w-0'}`} />
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    step >= 3 ? 'bg-gov-navy-900 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    3
                  </div>
                  <span className={`text-xs font-bold hidden sm:inline ${step >= 3 ? 'text-gov-navy-900' : 'text-slate-500'}`}>
                    Income & Family
                  </span>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 sm:p-8">
              {/* Step 1: Tribe & Domicile */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-gov-navy-950 border-b pb-2">
                    Step 1: Tribe & Demographics
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        State / UT of Domicile *
                      </label>
                      <select
                        value={formData.state}
                        onChange={(e) => handleChange('state', e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-gov-navy-900"
                      >
                        {STATES_AND_UT.map((st) => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Recognized Scheduled Tribe *
                      </label>
                      <select
                        value={formData.subTribe}
                        onChange={(e) => handleChange('subTribe', e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-gov-navy-900"
                      >
                        {POPULAR_TRIBES.map((tr) => (
                          <option key={tr.name} value={tr.name}>
                            {tr.name} ({tr.state}) {tr.isPVTG ? '— [PVTG]' : ''}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Gender *
                      </label>
                      <div className="flex gap-3">
                        {['Female', 'Male', 'Transgender'].map((g) => (
                          <label key={g} className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                            <input
                              type="radio"
                              name="gender"
                              checked={formData.gender === g}
                              onChange={() => handleChange('gender', g)}
                              className="accent-gov-saffron-600"
                            />
                            <span>{g}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700">Special Categories</label>
                      <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.isPVTG}
                            onChange={(e) => handleChange('isPVTG', e.target.checked)}
                            className="accent-gov-saffron-600 rounded"
                          />
                          <span>Belong to Particularly Vulnerable Tribal Group (PVTG)</span>
                        </label>
                        <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.pwd}
                            onChange={(e) => handleChange('pwd', e.target.checked)}
                            className="accent-gov-saffron-600 rounded"
                          />
                          <span>Person with Benchmark Disability (PwD &ge; 40%)</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow"
                    >
                      <span>Next: Academic Profile</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Academic Profile */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-gov-navy-950 border-b pb-2">
                    Step 2: Educational Level & Academic Standing
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Current Education Level / Course Enrolled *
                      </label>
                      <select
                        value={formData.courseLevel}
                        onChange={(e) => handleChange('courseLevel', e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-gov-navy-900"
                      >
                        <option value="Class 9">Secondary School (Class IX)</option>
                        <option value="Class 10">Secondary School (Class X)</option>
                        <option value="Post-Matric">Class 11 / 12 / Polytechnic Diploma</option>
                        <option value="Undergraduate">Undergraduate (B.A., B.Sc., B.Tech, MBBS, LLB)</option>
                        <option value="M.Phil/Ph.D.">Doctoral / Post-Graduate (M.Phil / Ph.D. Research)</option>
                        <option value="Overseas">Study Abroad (Master's / Ph.D. in Foreign University)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Marks / CGPA in Qualifying Exam (%) *
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          min="35"
                          max="100"
                          value={formData.percentage}
                          onChange={(e) => handleChange('percentage', Number(e.target.value))}
                          className="w-28 p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm font-bold text-gov-navy-900"
                        />
                        <span className="text-xs text-slate-500">e.g. 72% or 7.2 CGPA</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Institution Category *
                      </label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) => handleChange('institutionType', e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-gov-navy-900"
                      >
                        <option value="Central / State University">Central / State University / UGC Recognized</option>
                        <option value="Premier (IIT/IIM/AIIMS/NIT)">Premier Institute (IIT, IIM, AIIMS, NIT, NLU)</option>
                        <option value="Government / Aided School">Government / Model Tribal / EMRS School</option>
                        <option value="Private College">Recognized Private College</option>
                        <option value="Foreign QS Top 500">Foreign University (QS Ranked Top 500)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700">Foreign Admission Offer</label>
                      <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer pt-2">
                        <input
                          type="checkbox"
                          checked={formData.hasForeignOffer}
                          onChange={(e) => handleChange('hasForeignOffer', e.target.checked)}
                          className="accent-gov-saffron-600 rounded"
                        />
                        <span>Have unconditional admission offer letter from overseas institution</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow"
                    >
                      <span>Next: Income Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Income & Family */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-gov-navy-950 border-b pb-2">
                    Step 3: Annual Parental / Family Income
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Gross Annual Family Income (From all sources) *
                        </label>
                        <span className="text-sm font-extrabold text-gov-navy-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          ₹{formData.familyIncome.toLocaleString('en-IN')} / year
                        </span>
                      </div>
                      <input
                        type="range"
                        min="50000"
                        max="800000"
                        step="25000"
                        value={formData.familyIncome}
                        onChange={(e) => handleChange('familyIncome', Number(e.target.value))}
                        className="w-full accent-gov-saffron-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                        <span>₹50,000 (BPL / Low Income)</span>
                        <span>₹2.5 Lakh (PMS-ST Slab)</span>
                        <span>₹6.0 Lakh (NFST / NOS Slab)</span>
                        <span>₹8.0 Lakh+</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-blue-900 leading-relaxed">
                        <p className="font-bold">Government Ceiling Slabs Notice:</p>
                        <p className="text-[11px] mt-0.5 text-blue-800">
                          - Post-Matric ST: Up to ₹2,50,000 / year.<br />
                          - National Fellowship & Top Class: Up to ₹6,000,000 / year.<br />
                          - Particularly Vulnerable Tribal Groups (PVTGs): Exempt from income caps under PM-JANMAN.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100"
                    >
                      Back
                    </button>
                    <button
                      onClick={runAiEvaluation}
                      disabled={isEvaluating}
                      className="px-7 py-3 bg-gradient-to-r from-gov-saffron-600 to-amber-500 hover:from-gov-saffron-500 hover:to-amber-600 text-white rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      {isEvaluating ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>AI Engine Processing Rules...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Generate AI Eligibility Match Report</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* AI Results Dashboard */
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Top Match Result Summary */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Evaluation Completed Successfully</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gov-navy-950">
                    AI Scheme Recommendation Report
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Profile Evaluated: {formData.subTribe} Tribe ({formData.state}) | Income: ₹{formData.familyIncome.toLocaleString('en-IN')}/yr | Level: {formData.courseLevel}
                  </p>
                </div>

                <button
                  onClick={resetForm}
                  className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg flex items-center gap-1.5 self-start sm:self-auto transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Modify Criteria</span>
                </button>
              </div>

              {/* Top Recommended Scheme Banner */}
              {schemeMatches[0] && (
                <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-black uppercase px-2 py-0.5 bg-gov-saffron-600 text-white rounded">
                          #1 Highest AI Fit
                        </span>
                        <span className="text-xs font-bold text-amber-900">
                          {schemeMatches[0].matchScore}% Match Probability
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-gov-navy-950 mt-1.5">
                        {schemeMatches[0].title}
                      </h3>
                      <p className="text-xs font-bold text-gov-green-700 mt-1">
                        Grant: {schemeMatches[0].stipend}
                      </p>
                    </div>

                    <Link
                      to={`/login?redirect=apply&scheme=${schemeMatches[0].id}`}
                      className="px-5 py-2.5 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded-lg text-xs font-bold shadow flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto"
                    >
                      <span>Apply with DigiLocker</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Detailed Scheme Match Cards */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                All Evaluated ST Scholarships & Fellowships ({schemeMatches.length})
              </h3>

              {schemeMatches.map((scheme) => (
                <div
                  key={scheme.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left: Scheme Info */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded border">
                          {scheme.code}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-800 rounded">
                          {scheme.level}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-gov-navy-950">
                        {scheme.title}
                      </h4>

                      <p className="text-xs font-extrabold text-gov-green-700">
                        {scheme.stipend}
                      </p>

                      {/* AI Reasons & Warnings */}
                      <div className="pt-2 space-y-1">
                        {scheme.reasons.map((r, rIdx) => (
                          <div key={rIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{r}</span>
                          </div>
                        ))}
                        {scheme.warnings.map((w, wIdx) => (
                          <div key={wIdx} className="flex items-center gap-1.5 text-xs text-amber-700">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                            <span>{w}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Score Gauge & Apply Action */}
                    <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-center border-t lg:border-t-0 lg:border-l border-slate-200 pt-3 lg:pt-0 lg:pl-6 min-w-[160px] gap-3">
                      <div className="text-center">
                        <div className={`text-2xl font-black ${
                          scheme.matchScore >= 80 ? 'text-emerald-600' : scheme.matchScore >= 60 ? 'text-amber-600' : 'text-slate-400'
                        }`}>
                          {scheme.matchScore}%
                        </div>
                        <div className="text-[10px] font-semibold text-slate-500 uppercase">
                          AI Fitment Score
                        </div>
                      </div>

                      <Link
                        to={`/login?redirect=apply&scheme=${scheme.id}`}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                          scheme.matchScore >= 70
                            ? 'bg-gov-navy-900 hover:bg-gov-navy-800 text-white'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
