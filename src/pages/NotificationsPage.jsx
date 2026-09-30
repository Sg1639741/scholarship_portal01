import React, { useState } from 'react';
import { INITIAL_NOTIFICATIONS } from '../data/faqData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Bell, 
  CreditCard, 
  FileCheck2, 
  Clock,
  Trash2, 
  CheckCheck, 
  ExternalLink 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotificationsPage = () => {
  const { lang } = useLanguage();
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [activeTab, setActiveTab] = useState('all');

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filteredNotifs = notifications.filter(n => {
    if (activeTab === 'all') return true;
    if (activeTab === 'dbt') return n.type === 'dbt';
    if (activeTab === 'ai_doc') return n.type === 'ai_doc';
    if (activeTab === 'reminder') return n.type === 'reminder';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16">
      {/* Header */}
      <div className="bg-gov-navy-900 text-white py-10 px-4 border-b-4 border-gov-saffron-500">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-2">
            <Bell className="w-3.5 h-3.5" />
            <span>CENTRAL NOTIFICATION DISPATCH</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {lang === 'hi' ? 'सूचनाएं एवं डीबीटी अलर्ट' : 'Notifications & DBT Alerts'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
            Real-time updates regarding your scholarship sanctions, AI document verification, PFMS bank credits, and deadline reminders.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-5">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Action Strip */}
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-semibold">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  activeTab === 'all' ? 'bg-gov-navy-900 text-white font-bold' : 'bg-slate-200/70 text-slate-700 hover:bg-slate-300'
                }`}
              >
                All Alerts ({notifications.length})
              </button>
              <button
                onClick={() => setActiveTab('dbt')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  activeTab === 'dbt' ? 'bg-gov-navy-900 text-white font-bold' : 'bg-slate-200/70 text-slate-700 hover:bg-slate-300'
                }`}
              >
                DBT Credits
              </button>
              <button
                onClick={() => setActiveTab('ai_doc')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  activeTab === 'ai_doc' ? 'bg-gov-navy-900 text-white font-bold' : 'bg-slate-200/70 text-slate-700 hover:bg-slate-300'
                }`}
              >
                AI Document OCR
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={markAllRead}
                className="px-2.5 py-1 text-slate-700 hover:text-gov-navy-900 font-bold flex items-center gap-1"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                <span>Mark All Read</span>
              </button>
              <button
                onClick={clearAll}
                className="px-2.5 py-1 text-slate-500 hover:text-red-600 flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="divide-y divide-slate-100">
            {filteredNotifs.length === 0 ? (
              <div className="p-12 text-center text-slate-400 text-xs">
                <Bell className="w-8 h-8 mx-auto mb-2 opacity-30" />
                <p>No notifications in this category.</p>
              </div>
            ) : (
              filteredNotifs.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-5 flex items-start gap-4 transition ${
                    notif.unread ? 'bg-blue-50/40' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    notif.type === 'dbt'
                      ? 'bg-emerald-100 text-emerald-700'
                      : notif.type === 'ai_doc'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {notif.type === 'dbt' ? <CreditCard className="w-4 h-4" /> : notif.type === 'ai_doc' ? <FileCheck2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-gov-navy-950">
                          {notif.title}
                        </h4>
                        {notif.unread && (
                          <span className="w-2 h-2 rounded-full bg-gov-saffron-600"></span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400">{notif.time}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {notif.message}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {notif.scheme}
                      </span>

                      {notif.type === 'dbt' ? (
                        <Link to="/dashboard" className="text-xs font-bold text-gov-saffron-600 hover:underline flex items-center gap-1">
                          <span>View DBT Passbook</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      ) : (
                        <Link to="/document-verification" className="text-xs font-bold text-gov-navy-900 hover:underline flex items-center gap-1">
                          <span>Inspect Document Report</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
