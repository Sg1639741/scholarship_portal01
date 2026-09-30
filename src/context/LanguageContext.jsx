/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // 'en' | 'hi'
  const [fontSize, setFontSize] = useState('md'); // 'sm' | 'md' | 'lg'
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Apply font size class to html
    const root = document.documentElement;
    root.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
    root.classList.add(`text-size-${fontSize}`);

    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [fontSize, highContrast]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (enText, hiText) => {
    return lang === 'hi' ? (hiText || enText) : enText;
  };

  return (
    <LanguageContext.Provider value={{
      lang,
      setLang,
      toggleLanguage,
      fontSize,
      setFontSize,
      highContrast,
      setHighContrast,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
