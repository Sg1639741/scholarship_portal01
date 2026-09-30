export const SCHEMES_DATA = [
  {
    id: "st-post-matric",
    title: "Post-Matric Scholarship for ST Students (PMS-ST)",
    titleHi: "अनुसूचित जनजाति के छात्रों के लिए मैट्रिक उपरांत छात्रवृत्ति",
    category: "Higher Secondary & College",
    code: "MTA-PMS-2026",
    level: "Post-Matric",
    ministry: "Ministry of Tribal Affairs (Centrally Sponsored Scheme)",
    stipend: "Up to ₹1,20,000 / year + Full Tuition Reimbursement",
    amountNumeric: 120000,
    deadline: "31 October 2026",
    eligibility: {
      caste: "Scheduled Tribe (ST)",
      incomeLimit: 250000,
      minMarks: 50,
      educationLevels: ["Class 11", "Class 12", "Undergraduate", "Postgraduate", "Diploma", "Professional"],
      description: "Must belong to Scheduled Tribe category with annual parental income not exceeding ₹2,50,000 per annum. Enrolled in recognized university or college."
    },
    benefits: [
      "Full compulsory tuition fees reimbursed directly to institution/student",
      "Monthly maintenance allowance up to ₹1,200/month for hostellers, ₹550/month for day scholars",
      "Additional disability allowance of ₹2,000 to ₹4,000/year for PwD students",
      "Book grant and thesis typing allowance for post-graduate students"
    ],
    documents: [
      "Valid ST Caste Certificate issued by competent revenue authority (Tahsildar/SDM)",
      "Income Certificate for FY 2025-26",
      "Previous Year Marksheet / Passing Certificate",
      "College Admission Fee Receipt & Bonafide Certificate",
      "Aadhaar-seeded Bank Account (NPCI mapped)"
    ],
    totalBeneficiaries: "35.2 Lakh ST Students",
    tags: ["Centrally Sponsored", "DBT Enabled", "DigiLocker Verified", "Most Popular"]
  },
  {
    id: "st-national-overseas",
    title: "National Overseas Scholarship for ST Candidates (NOS-ST)",
    titleHi: "अनुसूचित जनजाति के छात्रों के लिए राष्ट्रीय विदेशी छात्रवृत्ति",
    category: "Study Abroad",
    code: "MTA-NOS-2026",
    level: "Overseas",
    ministry: "Ministry of Tribal Affairs (100% Central Sector Scheme)",
    stipend: "Full Tuition + £9,900 / $15,400 Annual Allowance + Airfare",
    amountNumeric: 3500000,
    deadline: "15 November 2026",
    eligibility: {
      caste: "Scheduled Tribe (ST)",
      incomeLimit: 600000,
      minMarks: 55,
      educationLevels: ["Master's Degree Abroad", "Ph.D. Abroad", "Post-Doctoral Abroad"],
      description: "Must have unconditional admission offer in top 500 QS World Ranked universities abroad in fields of Engineering, Pure Sciences, Medicine, Social Sciences or Humanities."
    },
    benefits: [
      "100% Tuition fee paid directly to foreign university",
      "Annual maintenance allowance of US $15,400 (USA) or GBP £9,900 (UK) or equivalent",
      "Contingency allowance for books, study tours, and conference presentation",
      "Economy class air passage to and from host country",
      "Mandatory health and accident insurance covered"
    ],
    documents: [
      "Valid ST Certificate",
      "Unconditional Admission Letter from QS Top 500 University",
      "Family Income Certificate (below ₹6.0 Lakh/annum)",
      "Valid Indian Passport",
      "GRE / GMAT / IELTS / TOEFL scorecard if applicable",
      "Undergraduate / Master's degree marksheets"
    ],
    totalBeneficiaries: "100 Scholars annually",
    tags: ["100% Funded", "Foreign Study", "Prestigious", "Direct Ministry Review"]
  },
  {
    id: "st-national-fellowship",
    title: "National Fellowship for Higher Education of ST Students (NFST)",
    titleHi: "उच्च शिक्षा के लिए राष्ट्रीय अध्येतावृत्ति (एम.फिल / पीएच.डी)",
    category: "Doctoral Research",
    code: "MTA-NFST-2026",
    level: "M.Phil/Ph.D.",
    ministry: "Ministry of Tribal Affairs (Central Sector Scheme)",
    stipend: "₹37,000 / month (JRF) & ₹42,000 / month (SRF) + HRA",
    amountNumeric: 504000,
    deadline: "30 December 2026",
    eligibility: {
      caste: "Scheduled Tribe (ST)",
      incomeLimit: 600000,
      minMarks: 55,
      educationLevels: ["M.Phil", "Ph.D.", "Integrated Ph.D."],
      description: "ST students admitted to regular and full-time M.Phil / Ph.D. courses in Universities/Institutions recognized by UGC."
    },
    benefits: [
      "Junior Research Fellowship (JRF) @ ₹37,000/month for first 2 years",
      "Senior Research Fellowship (SRF) @ ₹42,000/month for remaining 3 years",
      "Contingency grant of ₹10,000/year (Humanities) and ₹12,000/year (Science/Engg)",
      "House Rent Allowance (HRA) as per Govt of India city categorization (8%, 16%, 27%)",
      "Escort/reader assistance of ₹2,000/month for visually handicapped ST scholars"
    ],
    documents: [
      "ST Certificate with digital verification",
      "Ph.D. / M.Phil Admission Letter from UGC recognized university",
      "Research Topic synopsis approved by Departmental Research Committee",
      "Post-Graduate degree certificate (min 55% marks)",
      "Guide / Supervisor joining report"
    ],
    totalBeneficiaries: "750 Fresh Slots every year",
    tags: ["Research Fellowship", "UGC Norms", "Monthly DBT", "5 Years Duration"]
  },
  {
    id: "st-top-class-education",
    title: "National Scholarship for Higher Education in Premier Institutes (Top Class)",
    titleHi: "शीर्ष शिक्षण संस्थानों में उच्च शिक्षा हेतु राष्ट्रीय छात्रवृत्ति",
    category: "Premier Institutions",
    code: "MTA-TCS-2026",
    level: "Undergraduate",
    ministry: "Ministry of Tribal Affairs",
    stipend: "Full Institute Fee (up to ₹2.5L) + ₹2,220/mo living + ₹86,000 IT grant",
    amountNumeric: 320000,
    deadline: "20 October 2026",
    eligibility: {
      caste: "Scheduled Tribe (ST)",
      incomeLimit: 600000,
      minMarks: 60,
      educationLevels: ["Undergraduate", "Postgraduate", "B.Tech", "MBBS", "MBA", "LLB"],
      description: "For ST students who secure admission in notified premier institutes like IITs, IIMs, AIIMS, NITs, National Law Universities, IISERs, and NID."
    },
    benefits: [
      "Full tuition fee and non-refundable charges paid directly to the institute (ceiling of ₹2.5L/year for private institutes)",
      "Living expenses stipend of ₹2,220 per month (₹26,640/year)",
      "Books and stationery allowance of ₹3,000 per annum",
      "One-time computer / laptop grant of ₹86,000 during first year"
    ],
    documents: [
      "ST Category Certificate",
      "JEE / NEET / CAT / CLAT Entrance Rank Card",
      "Premier Institute Allotment & ID Card",
      "Parental Income Certificate",
      "Bank Account details mapped with Aadhaar"
    ],
    totalBeneficiaries: "1,000 Scholars annually across 256 Premier Institutes",
    tags: ["IIT/IIM/AIIMS", "Laptop Grant", "Full Fee Waiver", "Premier Tier"]
  },
  {
    id: "st-pre-matric",
    title: "Pre-Matric Scholarship for Scheduled Tribe Students (Classes IX & X)",
    titleHi: "अनुसूचित जनजाति के छात्रों के लिए प्री-मैट्रिक छात्रवृत्ति (कक्षा 9 और 10)",
    category: "School Education",
    code: "MTA-PRE-2026",
    level: "Pre-Matric",
    ministry: "Ministry of Tribal Affairs (Centrally Sponsored Scheme)",
    stipend: "₹3,500/year (Day Scholar) & ₹7,000/year (Hosteller)",
    amountNumeric: 7000,
    deadline: "15 October 2026",
    eligibility: {
      caste: "Scheduled Tribe (ST)",
      incomeLimit: 250000,
      minMarks: 40,
      educationLevels: ["Class 9", "Class 10"],
      description: "ST students studying in classes IX or X in a recognized government or private school. Must not be receiving any other government scholarship."
    },
    benefits: [
      "Annual scholarship grant of ₹3,500 for day scholars",
      "Annual scholarship grant of ₹7,000 for hostellers (including EMRS students)",
      "Special disability allowance of ₹1,000/year for differently-abled students",
      "Reduction in tribal dropout rates before High School Board Examinations"
    ],
    documents: [
      "Tribe verification certificate",
      "Class 8th / 9th report card",
      "School enrollment certificate & Headmaster verification",
      "Family Income declaration"
    ],
    totalBeneficiaries: "18.5 Lakh Tribal Children",
    tags: ["School Level", "Zero Dropout Mission", "EMRS Covered", "Direct Bank Credit"]
  },
  {
    id: "st-pvtg-special-grant",
    title: "PM-JANMAN Special Educational Grant for PVTG Tribal Youth",
    titleHi: "पीएम-जनमन विशेष शैक्षिक अनुदान (विशेष रूप से कमजोर जनजातीय समूह)",
    category: "PVTG Special",
    code: "PM-JANMAN-2026",
    level: "All Levels",
    ministry: "Prime Minister Particularly Vulnerable Tribal Groups Mission",
    stipend: "₹15,000 to ₹1,80,000 / year + Comprehensive Hostel & Nutrition Support",
    amountNumeric: 180000,
    deadline: "Rolling / Open Throughout Year",
    eligibility: {
      caste: "Scheduled Tribe - Notified PVTG (75 Identified Groups)",
      incomeLimit: 800000,
      minMarks: 35,
      educationLevels: ["School", "College", "Vocational", "University"],
      description: "Exclusive to 75 Particularly Vulnerable Tribal Groups (PVTGs) across 18 States and UTs (e.g., Birhor, Baiga, Chenchu, Jarawa, Kamar, Sahariya, Toda)."
    },
    benefits: [
      "Zero income restriction for PVTG priority families",
      "100% residential hostel, nutritional and uniform allowance",
      "AI-driven proactive enrollment through mobile tribal seva kendras",
      "Guaranteed placement training & civil services coaching stipend"
    ],
    documents: [
      "PVTG Identification Certificate / Gram Sabha Resolution",
      "Aadhaar Card / Ration Card",
      "Educational Enrollment Certificate"
    ],
    totalBeneficiaries: "4.5 Lakh PVTG Youth Covered under PM-JANMAN",
    tags: ["PM-JANMAN", "PVTG Priority", "Relaxed Criteria", "100% Central"]
  }
];

export const STATES_AND_UT = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Andaman and Nicobar Islands", "Ladakh"
];

export const POPULAR_TRIBES = [
  { name: "Santhal", state: "Jharkhand / West Bengal / Odisha", isPVTG: false },
  { name: "Gond", state: "Madhya Pradesh / Chhattisgarh / Maharashtra", isPVTG: false },
  { name: "Bhil", state: "Rajasthan / Gujarat / MP", isPVTG: false },
  { name: "Munda", state: "Jharkhand / Odisha", isPVTG: false },
  { name: "Oraon (Kurukh)", state: "Jharkhand / Chhattisgarh", isPVTG: false },
  { name: "Bodo", state: "Assam", isPVTG: false },
  { name: "Khasi", state: "Meghalaya", isPVTG: false },
  { name: "Baiga", state: "Madhya Pradesh", isPVTG: true },
  { name: "Birhor", state: "Jharkhand", isPVTG: true },
  { name: "Chenchu", state: "Andhra Pradesh / Telangana", isPVTG: true },
  { name: "Kamar", state: "Chhattisgarh", isPVTG: true },
  { name: "Sahariya", state: "Rajasthan / MP", isPVTG: true }
];
