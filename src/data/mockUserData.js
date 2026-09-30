export const MOCK_STUDENT = {
  id: "ST-JH-2026-94812",
  name: "Sunita Soren",
  hindiName: "सुनीता सोरेन",
  email: "sunita.soren@centraluniv.ac.in",
  mobile: "+91 98765 43210",
  aadhaarLast4: "8842",
  digiLockerLinked: true,
  category: "Scheduled Tribe (ST)",
  subTribe: "Santhal",
  isPVTG: false,
  gender: "Female",
  dob: "2001-08-14",
  domicileState: "Jharkhand",
  district: "Dumka",
  institution: "Central University of Jharkhand, Ranchi",
  course: "Ph.D. in Tribal Environmental Studies",
  currentYear: "2nd Year",
  annualIncome: 185000,
  stCertificateNo: "JH/DMK/ST/2022/77189",
  issuingAuthority: "Sub-Divisional Magistrate (SDM), Dumka",
  dbtAccount: {
    bankName: "State Bank of India (SBI)",
    branch: "Dumka Main Branch",
    accountLast4: "4109",
    ifsc: "SBIN0000078",
    aadhaarSeeded: true,
    npciStatus: "ACTIVE"
  },
  applications: [
    {
      appId: "APP-NFST-2026-44021",
      schemeId: "st-national-fellowship",
      schemeName: "National Fellowship for Higher Education of ST Students (NFST)",
      appliedDate: "12 Jan 2026",
      sanctionAmount: 504000,
      annualStipend: "₹37,000 / month + HRA",
      currentStage: 5, // out of 6
      statusText: "Ministry Sanction Order Issued (PFMS Direct Benefit Transfer Processing)",
      statusBadge: "Approved - DBT In Progress",
      statusColor: "emerald",
      timeline: [
        {
          stage: 1,
          title: "Online Application & DigiLocker e-KYC",
          authority: "Portal AI Assistant Engine",
          date: "12 Jan 2026, 14:22",
          completed: true,
          remarks: "Aadhaar e-KYC authenticated. Caste certificate OCR verified with 99.1% match score."
        },
        {
          stage: 2,
          title: "Institutional Nodal Officer Verification",
          authority: "Registrar / Dean, Central Univ of Jharkhand",
          date: "18 Jan 2026, 11:05",
          completed: true,
          remarks: "Candidate regular attendance, Ph.D. registration validity, and Guide assignment confirmed."
        },
        {
          stage: 3,
          title: "District Tribal Welfare Officer Scrutiny",
          authority: "DWO, District Collectorate Dumka",
          date: "28 Jan 2026, 16:40",
          completed: true,
          remarks: "Revenue record check verified. Tribe Santhal confirmed under Presidential Order."
        },
        {
          stage: 4,
          title: "State Tribal Advisory Screening Committee",
          authority: "Jharkhand Tribal Development Directorate",
          date: "04 Feb 2026, 10:15",
          completed: true,
          remarks: "Dossier recommended for Central Sector slot allocation under NFST quota."
        },
        {
          stage: 5,
          title: "Ministry of Tribal Affairs Sanction",
          authority: "Joint Secretary (Scholarships), Govt of India",
          date: "15 Feb 2026, 17:30",
          completed: true,
          remarks: "Sanction Order No. MTA/NFST/2026/JH-44021 approved for 5-year tenure."
        },
        {
          stage: 6,
          title: "DBT Payment via PFMS / Aadhaar Bridge",
          authority: "Public Financial Management System (PFMS)",
          date: "Scheduled by 05 Mar 2026",
          completed: false,
          remarks: "Batch generation under progress. Funds to be credited directly to SBI A/C ending 4109."
        }
      ]
    },
    {
      appId: "APP-TCS-2025-11093",
      schemeId: "st-top-class-education",
      schemeName: "National Scholarship for Higher Education in Premier Institutes",
      appliedDate: "10 Aug 2025",
      sanctionAmount: 286000,
      annualStipend: "Full Institute Fee Waiver + IT Grant",
      currentStage: 6,
      statusText: "Completed & Disbursed (₹2,86,000 credited via DBT)",
      statusBadge: "Disbursed",
      statusColor: "blue",
      timeline: [
        {
          stage: 6,
          title: "DBT Fund Credited via PFMS",
          authority: "Reserve Bank of India (PFMS)",
          date: "25 Oct 2025, 11:20",
          completed: true,
          remarks: "UTR No. SBIN252981044721 credited ₹2,86,000 successfully."
        }
      ]
    }
  ],
  dbtHistory: [
    {
      id: "TXN-90184",
      utr: "SBIN252981044721",
      date: "25 Oct 2025",
      scheme: "Top Class Premier Institute Grant",
      amount: "₹2,86,000",
      status: "Success",
      mode: "Aadhaar Payment Bridge (APB)"
    },
    {
      id: "TXN-71822",
      utr: "SBIN251104821903",
      date: "14 Apr 2025",
      scheme: "Post-Matric ST Maintenance Allowance",
      amount: "₹14,400",
      status: "Success",
      mode: "Direct Benefit Transfer (DBT)"
    }
  ]
};

export const MOCK_OFFICER = {
  id: "OFF-MTA-6710",
  name: "Dr. Rajesh Meena, IAS",
  designation: "Deputy Secretary & Central Nodal Officer",
  department: "Division of Scholarships & Higher Education, Ministry of Tribal Affairs",
  officeLocation: "Shastri Bhawan, New Delhi",
  pendingReviewsCount: 28,
  todayApprovedCount: 142,
  highRiskCount: 3,
  assignedState: "National Overarching (Focus: Central & Eastern Tribal Belts)"
};

export const MOCK_ADMIN_APPLICATIONS = [
  {
    id: "APP-2026-88192",
    applicantName: "Birsa Munda Jr.",
    tribe: "Munda",
    state: "Jharkhand",
    scheme: "National Overseas Scholarship (NOS-ST)",
    course: "M.S. in Renewable Energy, Imperial College London",
    income: "₹3,40,000/yr",
    aiMatchScore: 98,
    aiRiskLevel: "Low Risk",
    ocrConfidence: "99.4%",
    status: "Pending Officer Approval",
    submissionDate: "28 Feb 2026",
    flags: ["All Documents Verified", "Offer letter verified via UK Enic"]
  },
  {
    id: "APP-2026-88193",
    applicantName: "Anjali Kispotta",
    tribe: "Oraon",
    state: "Chhattisgarh",
    scheme: "National Fellowship (NFST - Ph.D.)",
    course: "Ph.D. in Botany, Guru Ghasidas Central University",
    income: "₹1,80,000/yr",
    aiMatchScore: 94,
    aiRiskLevel: "Low Risk",
    ocrConfidence: "97.8%",
    status: "Pending Officer Approval",
    submissionDate: "01 Mar 2026",
    flags: ["UGC Registration Active", "Valid Tahsildar Digital Signature"]
  },
  {
    id: "APP-2026-88194",
    applicantName: "Rameshwar Baiga",
    tribe: "Baiga (PVTG)",
    state: "Madhya Pradesh",
    scheme: "PM-JANMAN Special Educational Grant",
    course: "B.Sc. Agriculture, IGKV Raipur",
    income: "₹65,000/yr",
    aiMatchScore: 100,
    aiRiskLevel: "Fast Track Priority",
    ocrConfidence: "96.2%",
    status: "Auto-Recommended for Fast Track Sanction",
    submissionDate: "02 Mar 2026",
    flags: ["PVTG Priority Candidate", "Zero Fee Exemption Applied"]
  },
  {
    id: "APP-2026-88195",
    applicantName: "Vijay Bhil",
    tribe: "Bhil",
    state: "Rajasthan",
    scheme: "Post-Matric Scholarship for ST",
    course: "Diploma in Electrical Engg, Govt Polytechnic Udaipur",
    income: "₹2,65,000/yr",
    aiMatchScore: 68,
    aiRiskLevel: "Medium Risk",
    ocrConfidence: "91.2%",
    status: "Under Manual Scrutiny",
    submissionDate: "02 Mar 2026",
    flags: ["Income slightly exceeds ₹2.50L slab limit by ₹15,000", "Affidavit re-check required"]
  },
  {
    id: "APP-2026-88196",
    applicantName: "Kavita Maravi",
    tribe: "Gond",
    state: "Madhya Pradesh",
    scheme: "National Scholarship in Premier Institutes (Top Class)",
    course: "B.Tech Computer Science, IIT Bombay",
    income: "₹4,10,000/yr",
    aiMatchScore: 97,
    aiRiskLevel: "Low Risk",
    ocrConfidence: "99.1%",
    status: "Pending Officer Approval",
    submissionDate: "03 Mar 2026",
    flags: ["IIT Bombay Seat Acceptance Letter Verified", "JEE Advanced Rank 142 (ST)"]
  }
];
