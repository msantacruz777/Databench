import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { BenchLogo } from './BenchLogo';

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
          <BenchLogo 
            className="text-[#a3e635] group-hover:text-[#10b981] transition-colors" 
            size={32} 
          />
          <span className="font-sans font-bold text-2xl tracking-tighter leading-none text-[#1d4c6a] group-hover:text-emerald-600 transition-colors">
            data bench
          </span>
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[15px] font-semibold text-[#1d4c6a] hover:text-[#a3e635] transition-colors"
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
                className="text-lg font-medium text-[#1d4c6a] border-b border-emerald-50 pb-2"
              >
                {item.name}
              </a>
            ))}
            <div className="flex justify-center py-4">
              <BenchLogo className="text-[#a3e635]" size={80} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
