import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-emerald-950 text-white py-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="/" className="flex items-center gap-2 group">
          <Logo className="h-10 w-auto" invert />
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
