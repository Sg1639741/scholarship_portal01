export const SAMPLE_OCR_DOCUMENTS = [
  {
    id: "doc-st-cert",
    name: "Scheduled Tribe Certificate (जाति प्रमाण पत्र)",
    type: "ST Caste Certificate",
    filename: "JH_ST_Certificate_Dumka_77189.pdf",
    fileSize: "1.4 MB",
    uploadedDate: "12 Jan 2026",
    status: "Verified Authenticated",
    confidenceScore: 99.4,
    qrStatus: "Valid (Cryptographically Signed by CCA India)",
    tamperDetection: "Clean (No digital manipulation or pixel distortion detected)",
    issuingGovt: "Government of Jharkhand / Revenue Department",
    extractedData: {
      "Certificate Number": "JH/DMK/ST/2022/77189",
      "Applicant Full Name": "Sunita Soren",
      "Father's Name": "Shri Mangal Soren",
      "Mother's Name": "Smt. Shanti Murmu",
      "Community / Sub-Tribe": "Santhal",
      "Constitutional Schedule": "The Constitution (Scheduled Tribes) Order, 1950",
      "Village / Town": "Kathikund, Dumka",
      "District & State": "Dumka, Jharkhand",
      "Issuing Authority": "Sub-Divisional Magistrate (SDM), Dumka",
      "Issue Date": "14 July 2022",
      "Validity": "Permanent / Lifetime (Unless Revoked)"
    },
    aiAnalysis: [
      { field: "Caste Name Verification", result: "Match Found in Presidential ST List for Jharkhand (Serial No. 24)", status: "pass" },
      { field: "Digital Seal & Barcode", result: "State e-Pramaan Gateway SHA-256 Hash Verified", status: "pass" },
      { field: "Name Match with Aadhaar", result: "100% Levenshtein Text Match with UIDAI Database", status: "pass" },
      { field: "Expiry / Renewal Requirement", result: "Lifetime validity applicable for Central ST schemes", status: "pass" }
    ]
  },
  {
    id: "doc-income-cert",
    name: "Annual Family Income Certificate (आय प्रमाण पत्र)",
    type: "Income Certificate",
    filename: "Income_Cert_FY2526_Dumka_185K.pdf",
    fileSize: "890 KB",
    uploadedDate: "12 Jan 2026",
    status: "Verified Authenticated",
    confidenceScore: 97.8,
    qrStatus: "Valid (e-District Portal QR Decoded)",
    tamperDetection: "Clean (Font metric & baseline alignment consistent)",
    issuingGovt: "Office of the Tahsildar, Kathikund Circle, Dumka",
    extractedData: {
      "Certificate Number": "INC/JH/2025/99812",
      "Head of Family": "Mangal Soren",
      "Applicant Name": "Sunita Soren",
      "Total Annual Income": "₹1,85,000 (Rupees One Lakh Eighty Five Thousand Only)",
      "Income Sources": "Agriculture (₹1,20,000) + Allied Rural Labour (₹65,000)",
      "Financial Year": "2025-2026",
      "Issuing Authority": "Circle Officer / Tahsildar",
      "Issue Date": "04 May 2025",
      "Valid Until": "31 March 2026"
    },
    aiAnalysis: [
      { field: "Income Slab Check", result: "Income ₹1,85,000 is well within ₹2,50,000 PMS-ST ceiling limit", status: "pass" },
      { field: "Financial Year Validity", result: "Active for current academic assessment cycle (2025-26)", status: "pass" },
      { field: "Authorized Signatory", result: "Digitally signed with valid class 2 officer certificate", status: "pass" }
    ]
  },
  {
    id: "doc-bonafide",
    name: "Bonafide Student & Fee Structure Certificate",
    type: "Institutional Proof",
    filename: "CUJ_Dean_Bonafide_PhD_Soren.pdf",
    fileSize: "1.1 MB",
    uploadedDate: "15 Jan 2026",
    status: "Verified Authenticated",
    confidenceScore: 98.2,
    qrStatus: "Valid (CUJ Academic ERP Linkage Verified)",
    tamperDetection: "Clean",
    issuingGovt: "Central University of Jharkhand, Brambe Campus, Ranchi",
    extractedData: {
      "Enrollment / Roll No.": "CUJ/PhD/ENV/2024/09",
      "Student Name": "Sunita Soren",
      "Department": "Department of Environmental Sciences",
      "Degree Program": "Doctor of Philosophy (Ph.D.) - Regular Full-Time",
      "Supervisor / Guide": "Prof. (Dr.) A. K. Mahato",
      "Date of Registration": "01 August 2024",
      "Annual Course Fee": "₹32,400 (Paid for Current Session)"
    },
    aiAnalysis: [
      { field: "UGC Affiliation Code", result: "AISHE Code: U-0205 verified against MoE database", status: "pass" },
      { field: "Full-Time Status", result: "Regular Scholar confirmed (No concurrent full-time employment)", status: "pass" },
      { field: "Doctoral Standing", result: "Topic registered with DRC, qualifying for NFST Junior Research Fellowship", status: "pass" }
    ]
  }
];

export const OCR_PROCESS_STEPS = [
  "Pre-processing document: De-skewing, noise reduction & contrast optimization...",
  "Applying Tesseract 5.0 neural LSTM engine with bilingual Hindi-English model...",
  "Extracting bounding box entities: Name, Category, Certificate ID, Date...",
  "Cross-verifying with National DigiLocker API & State Revenue database...",
  "Running Tamper Detection model: Checking clone-stamp, metadata and font baselines...",
  "Document Verified Successfully! Generated cryptographic audit receipt."
];
