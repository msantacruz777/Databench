import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-emerald-950 text-white py-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="/" className="flex items-center gap-2 group">
          {logoError ? (
            <div className="flex items-center gap-3">
              <span className="font-sans font-bold text-2xl tracking-tighter leading-none text-white">
                data bench
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#96e32d] flex-shrink-0 flex items-center justify-center p-1.5 shadow-sm transform rotate-[-2deg]">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1d4c6a]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="10" width="16" height="4" rx="1" />
                  <path d="M6 14v4M18 14v4M10 14V11M14 14V11" />
                </svg>
              </div>
            </div>
          ) : (
            <img 
              src="/logo.png" 
              alt="data bench" 
              className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              onError={() => setLogoError(true)}
              referrerPolicy="no-referrer"
            />
          )}
        </a>
        <div className="flex gap-8 text-sm text-emerald-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-xs text-emerald-500">
          © {new Date().getFullYear()} Data Bench. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
