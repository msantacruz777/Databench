import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <img 
            src="/logodb.png" 
            alt="data bench" 
            className="h-12 w-auto object-contain transition-all group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
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
