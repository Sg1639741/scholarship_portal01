export const FAQ_DATA = [
  {
    q: "Who is eligible to apply under Ministry of Tribal Affairs (MoTA) Scholarship schemes?",
    qHi: "जनजातीय कार्य मंत्रालय (MoTA) छात्रवृत्ति योजनाओं के तहत आवेदन करने के लिए कौन पात्र है?",
    a: "Any candidate belonging to a Scheduled Tribe (ST) recognized under the Constitution Order for the respective State/UT, holding a valid ST Certificate issued by a competent revenue authority, and enrolled in a recognized institution with family income within the scheme ceiling limits.",
    aHi: "संबंधित राज्य/केंद्र शासित प्रदेश के संविधान आदेश के तहत मान्यता प्राप्त अनुसूचित जनजाति (ST) से संबंधित कोई भी उम्मीदवार, जिसके पास सक्षम राजस्व प्राधिकरण द्वारा जारी वैध एसटी प्रमाण पत्र हो और योजना की आय सीमा के भीतर हो।"
  },
  {
    q: "How does the AI Eligibility Checker assist Scheduled Tribe students?",
    qHi: "एआई पात्रता जांचकर्ता अनुसूचित जनजाति के छात्रों की कैसे सहायता करता है?",
    a: "Our AI engine analyzes your academic credentials, annual family income, sub-tribe/PVTG status, and course enrollment against all Central and State ST scholarship rules. It eliminates manual guesswork, calculates your percentage match score, and highlights missing documents or high-value fellowships you are qualified for.",
    aHi: "हमारा एआई इंजन सभी केंद्रीय और राज्य एसटी छात्रवृत्ति नियमों के विरुद्ध आपकी शैक्षणिक योग्यता, पारिवारिक आय, उप-जनजाति/पीवीटीजी स्थिति का विश्लेषण करता है और आपके लिए सबसे उपयुक्त योजनाओं की सिफारिश करता है।"
  },
  {
    q: "Is DigiLocker or Aadhaar integration mandatory for ST scholarship verification?",
    qHi: "क्या एसटी छात्रवृत्ति सत्यापन के लिए डिजिलॉकर या आधार एकीकरण अनिवार्य है?",
    a: "Yes. In line with Government of India DBT (Direct Benefit Transfer) guidelines, linking your Aadhaar and pulling your Caste & Income certificates via DigiLocker enables instantaneous AI verification without physical submission at government offices.",
    aHi: "हाँ। भारत सरकार के डीबीटी (प्रत्यक्ष लाभ अंतरण) दिशानिर्देशों के अनुसार, आधार को जोड़ना और डिजिलॉकर के माध्यम से जाति और आय प्रमाण पत्र प्राप्त करना त्वरित एआई सत्यापन सक्षम बनाता है।"
  },
  {
    q: "What is the monthly stipend and tenure for the National Fellowship (NFST)?",
    qHi: "राष्ट्रीय अध्येतावृत्ति (NFST) के लिए मासिक वजीफा और अवधि क्या है?",
    a: "ST scholars pursuing M.Phil/Ph.D. receive ₹37,000 per month for JRF (first 2 years) and ₹42,000 per month for SRF (remaining 3 years), plus admissible House Rent Allowance (HRA) and annual contingency grants.",
    aHi: "एम.फिल/पीएच.डी. करने वाले एसटी शोधार्थियों को पहले 2 वर्षों के लिए ₹37,000 प्रति माह (JRF) और शेष 3 वर्षों के लिए ₹42,000 प्रति माह (SRF) तथा नियमानुसार एचआरए और आकस्मिक अनुदान मिलता है।"
  },
  {
    q: "How are scholarship funds disbursed into the student's bank account?",
    qHi: "छात्रवृत्ति राशि छात्र के बैंक खाते में कैसे संवितरित की जाती है?",
    a: "All funds are transferred via the Public Financial Management System (PFMS) directly into your Aadhaar-seeded bank account through the Aadhaar Payment Bridge (APB), eliminating middlemen and delays.",
    aHi: "सभी धनराशि प्रत्यक्ष लाभ अंतरण (DBT) और सार्वजनिक वित्तीय प्रबंधन प्रणाली (PFMS) के माध्यम से सीधे आपके आधार से जुड़े बैंक खाते में बिना किसी बिचौलिए के भेजी जाती है।"
  }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    type: "dbt",
    title: "Sanction Order Approved: NFST Fellowship",
    message: "Sanction order No. MTA/NFST/2026/JH-44021 for ₹5,04,000 has been sanctioned by Ministry of Tribal Affairs. DBT batch queued.",
    time: "2 hours ago",
    unread: true,
    scheme: "National Fellowship (NFST)"
  },
  {
    id: "notif-2",
    type: "ai_doc",
    title: "AI Document Verification Passed (99.4%)",
    message: "Your Scheduled Tribe Certificate (JH/DMK/ST/2022/77189) has been digitally validated via State Revenue Registry with zero tamper flags.",
    time: "1 day ago",
    unread: true,
    scheme: "Document Center"
  },
  {
    id: "notif-3",
    type: "reminder",
    title: "Deadline Alert: Top Class Scholarship Closing Soon",
    message: "Applications for Premier Institutes (IITs/IIMs/AIIMS) Top Class Scheme close on 20 Oct 2026. Submit renewal if applicable.",
    time: "3 days ago",
    unread: false,
    scheme: "Top Class Scheme"
  },
  {
    id: "notif-4",
    type: "dbt",
    title: "Previous Stipend Disbursed: ₹2,86,000 Credited",
    message: "PFMS UTR: SBIN252981044721 successfully credited to SBI A/C *4109 under Top Class Scheme.",
    time: "25 Oct 2025",
    unread: false,
    scheme: "Payment Credit"
  }
];
