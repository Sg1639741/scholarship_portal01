import React, { useState } from 'react';
import { SAMPLE_OCR_DOCUMENTS, OCR_PROCESS_STEPS } from '../data/sampleOcrDocs';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  CheckCircle2, 
  QrCode, 
  Scan, 
  Eye, 
  FileText, 
  RefreshCw
} from 'lucide-react';

export const DocumentVerificationPage = () => {
  const { lang } = useLanguage();
  const [selectedDocId, setSelectedDocId] = useState(SAMPLE_OCR_DOCUMENTS[0].id);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepIndex, setScanStepIndex] = useState(-1);

  const currentDoc = SAMPLE_OCR_DOCUMENTS.find(d => d.id === selectedDocId) || SAMPLE_OCR_DOCUMENTS[0];

  const handleStartScan = (docId) => {
    setSelectedDocId(docId);
    setIsScanning(true);
    setScanComplete(false);
    setScanStepIndex(0);

    // Step through OCR phases
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < OCR_PROCESS_STEPS.length) {
        setScanStepIndex(currentStep);
      } else {
        clearInterval(interval);
        setIsScanning(false);
        setScanComplete(true);
      }
    }, 550);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16">
      {/* Header Banner */}
      <div className="bg-gov-navy-900 text-white py-10 px-4 border-b-4 border-gov-saffron-500">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-2">
            <Scan className="w-3.5 h-3.5" />
            <span>AI-POWERED TRIBAL DOCUMENT OCR & AUTHENTICATION</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            {lang === 'hi' ? 'दस्तावेज़ सत्यापन एवं एआई ओसीआर स्कैनर' : 'AI Document Verification & Tamper Detection'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            Instant machine extraction and cross-verification of Scheduled Tribe (ST) certificates, income proofs, and bonafide student documents against State e-District registries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-6">
        {/* Document Selection Strip */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-gov-navy-800" />
              <span>Select Document for AI OCR Inspection:</span>
            </span>
            <span className="text-[11px] text-slate-500">
              Supported: Digital ST Certificate, Income Proof, College Bonafide
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SAMPLE_OCR_DOCUMENTS.map((doc) => (
              <button
                key={doc.id}
                onClick={() => handleStartScan(doc.id)}
                className={`p-3 rounded-lg border text-left transition flex items-center justify-between ${
                  selectedDocId === doc.id
                    ? 'border-gov-navy-900 bg-blue-50/60 ring-2 ring-gov-navy-900/10'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div>
                  <p className="text-xs font-bold text-gov-navy-950">{doc.name}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{doc.type} • {doc.fileSize}</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-emerald-100 text-emerald-800">
                  {doc.confidenceScore}%
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Scan In Progress Banner */}
        {isScanning && (
          <div className="mb-6 p-5 rounded-xl bg-gov-navy-900 text-white shadow-xl border-2 border-amber-400">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-amber-400 border-t-transparent animate-spin flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Neural OCR Processing (Tesseract 5.0 + OpenCV)
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    Step {scanStepIndex + 1} of {OCR_PROCESS_STEPS.length}
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {OCR_PROCESS_STEPS[scanStepIndex]}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Side-by-side Inspection Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Scanned Document Simulation */}
          <div className="lg:col-span-5 bg-white rounded-xl shadow-lg border border-slate-200 p-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <span className="text-xs font-bold text-gov-navy-900 flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-gov-navy-800" />
                <span>Simulated Scanned Document Preview</span>
              </span>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                {currentDoc.filename}
              </span>
            </div>

            {/* Simulated Official Document Canvas */}
            <div className="relative bg-[#FFFDF8] border-2 border-slate-300 rounded-lg p-5 font-serif text-slate-900 shadow-inner overflow-hidden min-h-[440px]">
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <span className="text-7xl font-bold uppercase rotate-45 select-none">
                  VERIFIED ST
                </span>
              </div>

              {/* Document Header */}
              <div className="text-center pb-4 border-b-2 border-slate-400">
                <p className="text-[10px] tracking-widest uppercase font-bold text-slate-700">
                  {currentDoc.issuingGovt}
                </p>
                <h3 className="text-sm font-bold text-gov-navy-950 mt-1 uppercase">
                  {currentDoc.name}
                </h3>
                <p className="text-[10px] text-slate-600 italic">
                  Issued under the provisions of the Scheduled Castes & Scheduled Tribes Orders Act
                </p>
              </div>

              {/* Document Body Fields */}
              <div className="py-4 space-y-2.5 text-[11px] leading-relaxed">
                <div className="p-1.5 rounded border border-dashed border-amber-400/80 bg-amber-50/50">
                  <span className="font-sans font-bold text-[9px] uppercase text-gov-saffron-700 block">
                    [AI Bounding Box #1 - Unique Identifier]
                  </span>
                  <strong>Certificate No:</strong> {currentDoc.extractedData["Certificate Number"] || currentDoc.extractedData["Enrollment / Roll No."]}
                </div>

                <div className="p-1.5 rounded border border-dashed border-blue-400/80 bg-blue-50/50">
                  <span className="font-sans font-bold text-[9px] uppercase text-blue-700 block">
                    [AI Bounding Box #2 - Candidate Identity]
                  </span>
                  <strong>Certified That:</strong> {currentDoc.extractedData["Applicant Full Name"] || currentDoc.extractedData["Student Name"]}
                </div>

                {currentDoc.extractedData["Community / Sub-Tribe"] && (
                  <div className="p-1.5 rounded border border-dashed border-emerald-400/80 bg-emerald-50/50">
                    <span className="font-sans font-bold text-[9px] uppercase text-emerald-700 block">
                      [AI Bounding Box #3 - Constitutional Tribe Group]
                    </span>
                    <strong>Tribe Sub-Group:</strong> {currentDoc.extractedData["Community / Sub-Tribe"]}
                  </div>
                )}

                {currentDoc.extractedData["Total Annual Income"] && (
                  <div className="p-1.5 rounded border border-dashed border-emerald-400/80 bg-emerald-50/50">
                    <span className="font-sans font-bold text-[9px] uppercase text-emerald-700 block">
                      [AI Bounding Box #3 - Assessed Income Slab]
                    </span>
                    <strong>Annual Income:</strong> {currentDoc.extractedData["Total Annual Income"]}
                  </div>
                )}

                <div className="pt-2 text-[10px] text-slate-600">
                  <p><strong>Issuing Officer:</strong> {currentDoc.extractedData["Issuing Authority"] || currentDoc.extractedData["Supervisor / Guide"]}</p>
                  <p><strong>Issued On:</strong> {currentDoc.extractedData["Issue Date"] || currentDoc.extractedData["Date of Registration"]}</p>
                </div>
              </div>

              {/* Digital Seal & QR Code Footer */}
              <div className="pt-4 border-t-2 border-slate-300 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <QrCode className="w-10 h-10 text-slate-800" />
                  <div className="text-[8px] font-sans text-slate-600">
                    <p className="font-bold">CCA India</p>
                    <p>Digital Signature</p>
                  </div>
                </div>

                <div className="w-14 h-14 rounded-full border-2 border-blue-900/60 flex items-center justify-center p-1 text-center rotate-[-12deg]">
                  <span className="text-[7px] font-sans font-black text-blue-950 uppercase leading-none">
                    Govt of India<br />Verified Seal
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>SHA-256 Checksum Verified</span>
              </span>
              <button
                onClick={() => handleStartScan(selectedDocId)}
                className="text-gov-navy-900 hover:text-gov-saffron-600 font-bold flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Re-scan</span>
              </button>
            </div>
          </div>

          {/* Right Column: AI Extraction Results & Tamper Analysis */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Score Card */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase">
                    AI Scrutiny Verdict
                  </span>
                  <h3 className="text-lg font-black text-gov-navy-950 mt-1">
                    Authentic Verified ST Document
                  </h3>
                  <p className="text-xs text-slate-500">Cross-verified with Jharkhand State e-Pramaan Gateway</p>
                </div>

                <div className="text-right flex items-center sm:block gap-2">
                  <div className="text-2xl font-black text-emerald-600">
                    {currentDoc.confidenceScore}%
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase">
                    AI OCR Confidence
                  </div>
                </div>
              </div>

              {/* Security Checks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Digital QR Cryptography</span>
                  <p className="text-xs font-bold text-emerald-700 mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{currentDoc.qrStatus}</span>
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Tamper & Forgery Check</span>
                  <p className="text-xs font-bold text-emerald-700 mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{currentDoc.tamperDetection}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Extracted Key-Value Table */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
                <h4 className="text-xs font-bold text-gov-navy-950 uppercase tracking-wider">
                  Extracted Metadata & Revenue Fields
                </h4>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">
                  Structured JSON
                </span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {Object.entries(currentDoc.extractedData).map(([key, val]) => (
                  <div key={key} className="px-5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-slate-600 sm:w-2/5">{key}:</span>
                    <span className="font-bold text-slate-900 sm:w-3/5 text-left sm:text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Automated Validation Rules Check */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-5">
              <h4 className="text-xs font-bold text-gov-navy-950 uppercase tracking-wider mb-3">
                Government Compliance Rule Verifications
              </h4>

              <div className="space-y-2.5">
                {currentDoc.aiAnalysis.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900">{item.field}: </span>
                      <span className="text-slate-700">{item.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
