# 🇮🇳 JanJatiya Shiksha & Fellowship Portal (MTA-AI)
### AI-Enabled Scholarship & Fellowship Management System for Scheduled Tribes
**Ministry of Tribal Affairs | Government of India**  
*Aligned with PM-JANMAN Vision & Viksit Bharat @2047*

---

## 🏛️ Overview & PM Internship Portal Styling
This portal is designed matching the official aesthetics and accessibility standards of premier Indian Government portals, specifically inspired by the **PM Internship Portal (`pminternship.mca.gov.in`)**, **National Scholarship Portal (NSP)**, and **DigiLocker**.

### Visual & Government Design System
- **National Tricolor Accent Strip**: Saffron (`#E86326`), White (`#FFFFFF`), and Green (`#169343`).
- **Official Typography**: *Plus Jakarta Sans* & *Noto Sans Devanagari* with Hindi/English bilingual toggles.
- **Accessibility Toolbar (GIGW 3.0 Compliant)**:
  - Font Resizing: `A-`, `A`, `A+`
  - High Contrast Mode toggle
  - Screen Reader and Ministry identity header
- **National Ashoka Emblem Vector**: Incorporating the Lion Capital of Ashoka with *"सत्यमेव जयते"*.
- **Government Navy & Gold Palette**: Authoritative deep navy (`#0B2341`, `#163B6B`), saffron badges, and emerald DBT confirmation badges.

---

## 🚀 Included Features & Pages

| # | Feature / Page | Route | Description |
|---|---|---|---|
| 1 | **🏠 Government-Style Landing Page** | `/` | PM Internship Portal look with live announcement ticker, key national statistics counters (₹3,840+ Cr DBT disbursed, 42.8 Lakh+ ST scholars), flagship scheme explorer, 4-step seamless journey, scholar testimonials, and GIGW footer. |
| 2 | **🎓 Scholarship & Fellowship Listing** | `/schemes` | Filter by Education Level (Pre-Matric, Post-Matric, Undergraduate, Ph.D./M.Phil, Overseas), annual income ceiling slider, category chips, and detailed scheme modal guidelines. |
| 3 | **🤖 AI Eligibility Checker** | `/ai-checker` | 3-Step smart wizard (Tribe Demographics -> Academic Profile -> Income Slab) that computes real-time Match % scores, displays approval rationale, and flags eligibility gaps. |
| 4 | **🔐 Student Authentication** | `/login` | Triple sign-in options: Aadhaar OTP simulation, Student ID/Password, or DigiLocker single-sign-on. One-click demo role switches. |
| 5 | **📝 Student Registration (OTR)** | `/register` | One-Time Registration workflow with Aadhaar e-KYC, Tribe community selection, and NPCI Aadhaar bank seeding. |
| 6 | **📊 Student Dashboard** | `/dashboard` | Beneficiary overview showing active applications, DBT credit history, sanction status, DigiLocker verified badge, and quick action cards. |
| 7 | **📄 Application Tracking UI** | `/track` | Real-time multi-level scrutiny timeline: Institute Nodal Officer &rarr; District Welfare Officer &rarr; State Screening &rarr; Ministry Sanction &rarr; PFMS DBT Disbursement. |
| 8 | **📁 AI Document OCR Verifier** | `/document-verification` | Interactive OCR scanner simulation with Tesseract 5.0 pipeline: extracts certificate numbers, checks digital QR signatures, runs tamper detection, and outputs a 99.4% confidence audit. |
| 9 | **🔔 Notifications & Alerts UI** | `/notifications` | Live dispatch center for DBT credit confirmations, AI verification approvals, and deadline alerts. |
| 10 | **🤖 AI Assistant ("JanJatiya Sahayak")** | `/assistant` | Bilingual conversational assistant (English/हिन्दी) + persistent floating bot with preset prompt suggestions and scheme recommendation routing. |
| 11 | **🛡️ Officer / Admin Scrutiny Portal** | `/admin` | Ministry Central Scrutiny Cell view with Recharts analytics (State-wise applicants & budget share), AI risk flags, and one-click sanction approval actions. |

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS + Custom Government Palette + CSS Design Tokens
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Navigation**: React Router DOM (v7)
- **Data Visualizations**: Recharts (Bar Charts, Pie Charts)
- **State Management**: React Context (`AuthContext` & `LanguageContext`)

---

## 🏃 Running the Application Locally

```bash
# 1. Clone repository or navigate to folder
cd c:\Users\sg163\OneDrive\Desktop\SIH

# 2. Install dependencies (already installed)
npm install

# 3. Start local development server
npm run dev

# The portal will be available at: http://localhost:5173/
```

### Build for Production
```bash
npm run build
npm run preview
```

---

## 🔑 One-Click Demo Accounts

Use the **Demo Role** switcher in the top accessibility bar or on the login page:
- **Student Account**: Sunita Soren (Santhal Tribe, Jharkhand - Ph.D. Scholar, Central University)
- **Officer Account**: Dr. Rajesh Meena, IAS (Deputy Secretary & Central Nodal Officer, Ministry of Tribal Affairs)
