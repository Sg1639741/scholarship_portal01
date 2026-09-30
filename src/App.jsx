import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { GovTopBar } from './components/common/GovTopBar';
import { GovHeader } from './components/common/GovHeader';
import { GovNavbar } from './components/common/GovNavbar';
import { GovFooter } from './components/common/GovFooter';
import { FloatingAIBot } from './components/assistant/FloatingAIBot';

// Pages
import { HomePage } from './pages/HomePage';
import { SchemesPage } from './pages/SchemesPage';
import { SchemeDetailPage } from './pages/SchemeDetailPage';
import { AiEligibilityPage } from './pages/AiEligibilityPage';
import { DocumentVerificationPage } from './pages/DocumentVerificationPage';
import { ApplicationTrackingPage } from './pages/ApplicationTrackingPage';
import { DashboardPage } from './pages/DashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { AiAssistantPage } from './pages/AiAssistantPage';

export function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-[#F8FAFC]">
            {/* Accessibility & Government Identity Top Bar */}
            <GovTopBar />

            {/* Ministry Official Header */}
            <GovHeader />

            {/* Main Sticky Navigation Bar */}
            <GovNavbar />

            {/* Page Router Views */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/schemes" element={<SchemesPage />} />
                <Route path="/schemes/:id" element={<SchemeDetailPage />} />
                <Route path="/ai-checker" element={<AiEligibilityPage />} />
                <Route path="/document-verification" element={<DocumentVerificationPage />} />
                <Route path="/track" element={<ApplicationTrackingPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/admin" element={<AdminDashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/assistant" element={<AiAssistantPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Floating 24x7 JanJatiya AI Assistant Bot */}
            <FloatingAIBot />

            {/* Official GIGW Government Footer */}
            <GovFooter />
          </div>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
