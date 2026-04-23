import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t('nav.platform'), href: '#platform' },
    { name: t('nav.aiDataLayer'), href: '#ai-data-layer' },
    { name: t('nav.customer'), href: '#use-cases' },
    { name: t('nav.company'), href: '#company' },
    { name: t('nav.blog'), href: '#blog' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 h-16 flex items-center bg-transparent">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 group -ml-2 flex items-center gap-3">
          <img 
            src="/bench-logo.png" 
            alt="Data Bench Logo" 
            className="w-10 h-10 object-contain group-hover:opacity-80 transition-opacity"
            referrerPolicy="no-referrer"
          />
          <span className="font-sans font-bold text-2xl tracking-tighter leading-none text-[#1d4c6a] group-hover:text-emerald-600 transition-colors">
            data bench
          </span>
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[15px] font-semibold text-slate-500 hover:text-emerald-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-emerald-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-emerald-100 p-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-emerald-900 border-b border-emerald-50 pb-2"
              >
                {item.name}
              </a>
            ))}
            <div className="flex justify-center py-4 bg-emerald-50/50 rounded-2xl">
              <img 
                src="/bench-logo.png" 
                alt="Data Bench Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
