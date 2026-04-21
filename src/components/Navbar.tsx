import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.platform'), href: '#platform' },
    { name: t('nav.aiDataLayer'), href: '#ai-data-layer' },
    { name: t('nav.customer'), href: '#use-cases' },
    { name: t('nav.company'), href: '#company' },
    { name: t('nav.blog'), href: '#blog' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 h-16 flex items-center",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-100" : "bg-transparent"
    )}>
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 group -ml-2">
          {logoError ? (
            <div className="flex items-center gap-3 transition-transform group-hover:scale-105">
              <span className="font-sans font-bold text-2xl tracking-tighter leading-none text-[#1d4c6a]">
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
              className="h-14 w-auto object-contain transition-all group-hover:scale-105"
              onError={() => setLogoError(true)}
              referrerPolicy="no-referrer"
            />
          )}
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
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-emerald-200 mt-2">
              {t('nav.requestDemo')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
