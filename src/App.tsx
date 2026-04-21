/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Shield, 
  Database, 
  Layers, 
  BarChart3, 
  Linkedin, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  RefreshCw,
  GitBranch,
  FileText,
  Users,
  Quote,
  Mail,
  Phone
} from 'lucide-react';
import { cn } from './lib/utils';
import './i18n';
import WorldMap from './components/WorldMap';

// --- Components ---

const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const Logo = ({ className, invert = false }: { className?: string, invert?: boolean }) => {
  const [error, setError] = useState(false);
  // Using the local logo asset from the public folder
  const logoUrl = "/logo.png";

  if (error) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <span className={cn(
          "font-sans font-bold text-2xl tracking-tighter leading-none transition-colors",
          invert ? "text-white" : "text-[#1d4c6a]"
        )}>
          data bench
        </span>
        <div className="w-8 h-8 rounded-lg bg-[#96e32d] flex-shrink-0 flex items-center justify-center p-1.5 shadow-sm transform rotate-[-2deg]">
           <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1d4c6a]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
             <rect x="4" y="10" width="16" height="4" rx="1" />
             <path d="M6 14v4M18 14v4M10 14V11M14 14V11" />
           </svg>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={logoUrl} 
      alt="data bench" 
      className={cn("object-contain transition-all h-14 w-auto", className, invert && "brightness-0 invert opacity-90")}
      onError={() => {
        console.warn("Logo image failed to load, falling back to styled SVG logo.");
        setError(true);
      }}
      referrerPolicy="no-referrer"
    />
  );
};

const Navbar = () => {
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
          <Logo className="group-hover:scale-105" />
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

const PlatformVisualization = () => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-slate-50/50 rounded-3xl p-8 md:p-12 border border-slate-100 overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 grid gap-8">
        {/* Top: Enterprise Data Platform Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-bold text-slate-800">Enterprise Data Platform</h4>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active
            </div>
          </div>
          
          <div className="relative h-48 w-full">
            {/* Simple SVG Chart */}
            <svg viewBox="0 0 800 200" className="w-full h-full overflow-visible">
              <path 
                d="M0 160 Q 100 150 200 120 T 400 60 T 600 140 T 800 40" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="4"
                strokeLinecap="round"
                className="drop-shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
              />
              <path 
                d="M0 160 Q 100 150 200 120 T 400 60 T 600 140 T 800 40 V 200 H 0 Z" 
                fill="url(#chart-gradient)" 
                className="opacity-10"
              />
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Highlight Point */}
              <circle cx="450" cy="75" r="5" fill="#10b981" />
              <g className="translate-x-[420] -translate-y-[20]">
                <rect width="60" height="24" rx="12" fill="#10b981" />
                <text x="30" y="16" textAnchor="middle" fill="white" className="text-[10px] font-bold">1.78%</text>
              </g>
            </svg>
            
            {/* X-Axis Labels */}
            <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-300 tracking-wider">
              <span>1004</span>
              <span>1005</span>
              <span>1006</span>
              <span>1007</span>
              <span>1008</span>
              <span>1009</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom: Split Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Semantic Ontology */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-slate-800">Semantic Ontology</h4>
              <Layers className="w-4 h-4 text-slate-300" />
            </div>
            <div className="relative h-48 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center">
              {/* Simple Node Graph Mockup */}
              <div className="absolute inset-0 p-4 opacity-40">
                <svg width="100%" height="100%" viewBox="0 0 200 100">
                  <line x1="40" y1="30" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="160" y1="30" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="40" y1="70" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="160" y1="70" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                  <circle cx="40" cy="30" r="4" fill="#10b981" />
                  <circle cx="160" cy="30" r="4" fill="#3b82f6" />
                  <circle cx="100" cy="50" r="6" fill="#0f172a" />
                  <circle cx="40" cy="70" r="4" fill="#3b82f6" />
                  <circle cx="160" cy="70" r="4" fill="#10b981" />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100 text-[10px] font-bold text-slate-600">
                  Use Case
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-white rounded-lg shadow-sm border border-slate-100 text-[10px] font-bold text-slate-600">Product</div>
                  <div className="px-3 py-1 bg-white rounded-lg shadow-sm border border-slate-100 text-[10px] font-bold text-slate-600">Order</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Data Governance */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-slate-800">Data Governance</h4>
              <Shield className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="space-y-4">
              {[
                { name: 'Use Case', status: 'Compliant', icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> },
                { name: 'Product', status: '34 Sources', icon: <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /></div> },
                { name: 'Order', status: '12 Active', icon: <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /></div> },
                { name: 'Retention', status: 'Review', icon: <div className="w-3.5 h-3.5 rounded-full bg-red-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /></div> },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between text-[11px] font-medium p-2 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50 last:border-0">
                  <span className="text-slate-600 font-bold">{row.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">{row.status}</span>
                    {row.icon}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const words = ['ACTIVATION', 'AI', 'MIGRATION', 'CONTEXT', 'AUTOMATIZATION', 'KNOWLEDGE', 'SEMANTIC'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <h1 className="text-[clamp(1.25rem,6vw,4rem)] font-display font-black text-[#0f172a] leading-none mb-8 tracking-tighter uppercase whitespace-nowrap flex items-center justify-center gap-[0.3em]">
              {isRtl ? (
                t('hero.quote')
              ) : (
                <>
                  <span>THE</span>
                  <div className="h-[1.2em] flex items-center overflow-hidden min-w-fit flex-shrink-0">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={words[index]}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 inline-flex items-center whitespace-nowrap py-1 px-2"
                      >
                        {words[index]}&nbsp;DATA
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span>LAYER</span>
                </>
              )}
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-normal leading-tight mb-12 max-w-3xl mx-auto opacity-80">
              {t('hero.subheading')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-[#10a37f] hover:bg-[#0e8c6d] text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-[0_20px_40px_rgba(16,163,127,0.25)] flex items-center justify-center gap-3 group">
                Request a Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Platform Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <PlatformVisualization />
        </motion.div>
      </div>
    </section>
  );
};

const IntelligentDataPlatform = () => {
  const { t } = useTranslation();
  
  const cards = [
    { 
      icon: <Database className="w-5 h-5" />, 
      title: t('platform.ingest.title'), 
      subtitle: t('platform.ingest.subtitle'), 
      desc: t('platform.ingest.desc'),
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    { 
      icon: <Shield className="w-5 h-5" />, 
      title: t('platform.governance.title'), 
      subtitle: t('platform.governance.subtitle'), 
      desc: t('platform.governance.desc'),
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    { 
      icon: <GitBranch className="w-5 h-5" />, 
      title: t('platform.lineage.title'), 
      subtitle: t('platform.lineage.subtitle'), 
      desc: t('platform.lineage.desc'),
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    { 
      icon: <Layers className="w-5 h-5" />, 
      title: t('platform.dedupe.title'), 
      subtitle: t('platform.dedupe.subtitle'), 
      desc: t('platform.dedupe.desc'),
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
  ];

  return (
    <section id="platform" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[14px] font-bold tracking-[0.15em] text-[#10b981] uppercase mb-4 block">
            {t('platform.label')}
          </span>
          <h2 className="text-4xl md:text-[52px] font-sans font-bold text-[#0f172a] mb-6 tracking-[-0.01em] leading-tight">
            {t('platform.title')}
          </h2>
          <p className="text-[17px] text-[#64748b] max-w-2xl mx-auto leading-[1.6]">
            {t('platform.description')}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group flex flex-col h-full"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 transition-transform group-hover:scale-110", card.iconBg, card.iconColor)}>
                {card.icon}
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className={cn("text-xl font-display font-bold mb-2 transition-colors min-h-[4.5rem] flex items-center leading-tight", card.iconColor)}>
                  {card.title}
                </h3>
                <div className="min-h-[2.5rem] flex items-start">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-4">
                    {card.subtitle}
                  </p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Section Redesign */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="security" 
          className="bg-white rounded-[1rem] border border-slate-100 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
        >
          {/* Header */}
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#0f172a] rounded-[1rem] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <Shield className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl font-display font-bold text-[#0f172a] leading-tight">
                  {t('platform.security.title')}
                </h3>
                <p className="text-lg font-medium text-[#10b981] leading-tight mt-1">
                  {t('platform.security.subtitle')}
                </p>
              </div>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-slate-100">
            {(t('platform.security.features', { returnObjects: true }) as {title: string, desc: string}[]).map((feature, i) => (
              <div 
                key={i} 
                className={cn(
                  "p-8 md:p-10 flex flex-col gap-3",
                  i < 3 ? "lg:border-r border-slate-100" : "",
                  i % 2 === 0 ? "md:border-r lg:md:border-r" : "md:border-r-0 lg:md:border-r"
                )}
              >
                <h4 className="text-[#10b981] font-bold text-lg">
                  {feature.title}
                </h4>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Dark Bar */}
          <div className="bg-[#0f172a] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl font-medium opacity-90">
              {t('platform.security.desc')}
            </p>
            <div className="flex-shrink-0">
              <div className="px-6 py-2 rounded-lg border border-slate-700 bg-[#161e31] text-white text-sm font-bold tracking-tight">
                {t('platform.security.badge')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const ResultSection = () => {
  const { t } = useTranslation();
  const features = t('platform.result.features', { returnObjects: true }) as string[];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Main Video Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 group"
          >
            <div className="absolute inset-0 bg-[#0f172a]/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600&h=1000" 
              alt="Advanced Technology Infrastructure"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent z-20" />
            
            {/* Abstract Tech Decorations */}
            <div className="absolute top-6 right-6 z-30 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-75" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col mb-8">
              <h3 className="text-3xl font-display font-bold text-[#0f172a] leading-tight">
                {t('platform.result.title')}
              </h3>
              <p className="text-lg font-medium text-[#10b981] leading-tight mt-1">
                {t('platform.result.subtitle')}
              </p>
            </div>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              {t('platform.result.desc')}
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                    <Database className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const UseCasesSection = () => {
  const { t } = useTranslation();
  const items = t('useCases.items', { returnObjects: true }) as Array<{
    badge: string;
    title: string;
    desc: string;
  }>;

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col">
            <h3 className="text-3xl font-display font-bold text-[#0f172a] leading-tight">
              {t('useCases.title')}
            </h3>
            <p className="text-lg font-medium text-[#10b981] leading-tight mt-1">
              {t('useCases.subtitle')}
            </p>
          </div>
          <button className="px-8 py-3 bg-[#10a37f] hover:bg-[#0e8c6d] text-white rounded-full font-bold transition-all shadow-[0_10px_25px_rgba(16,163,127,0.2)] flex items-center gap-2 group whitespace-nowrap">
            {t('useCases.viewAll')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const titleColors = [
              'text-emerald-600', // Banking: Data Migration
              'text-blue-600',    // Insurance: Governance & Archiving
              'text-blue-600',    // Manufacturing: Integration & Deduplication
              'text-emerald-600', // Finance: Portfolio Visibility
              'text-blue-600',    // M&A: Migration
              'text-emerald-600'  // Insurance: Rules Enforcement
            ];
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all flex flex-col items-start"
              >
                <span className="px-6 py-2.5 bg-slate-50 text-slate-500 text-[15px] font-bold rounded-full mb-6 border border-slate-100/50">
                  {item.badge}
                </span>
                <h3 
                  className={cn("text-2xl font-display font-bold mb-4 tracking-tight leading-tight", titleColors[i] || "text-[#0f172a]")}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="text-slate-500 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AIDataLayerSection = () => {
  const { t } = useTranslation();
  return (
    <section id="ai-data-layer" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              Cognitive Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#0f172a] mb-8 leading-tight tracking-tight">
              Semantic Layer + Rules Engine + Graph = <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">AI Data Layer</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium italic">
              "Data in Context"
            </p>
            
            <div className="space-y-4">
              {[
                { title: 'Neural Semantic Mapping', desc: 'Automatically bridge disparate data models using AI.' },
                { title: 'Predictive Lineage', desc: 'Anticipate downstream impacts of data changes.' },
                { title: 'Autonomous Quality Guard', desc: 'Self-healing data pipelines powered by machine learning.' }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1600&h=1600" 
                alt="AI Data Layer Technology Architecture" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[24px] border-white rounded-[3rem]" />
            </div>
            
            {/* Floating Stats */}
          </motion.div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none" />
    </section>
  );
};

const LinkedInSection = () => {
  const { t } = useTranslation();
  
  const posts = [
    { 
      id: 0, 
      text: "Unlock the power of Knowledge Graphs and Semantic Layers. Discover how connecting data through meaningful relationships creates a more intuitive and automated organizational infrastructure.",
      date: "Featured",
      image: "https://picsum.photos/seed/neural-graph-blue/800/600",
      url: "https://www.linkedin.com/posts/data-bench_knowledgegraph-semanticlayer-ontology-activity-7444774375997800448-3BKh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAfTR_wBBByb0C7UERxOLxKheF6sLNa6Wx4"
    },
    { 
      id: 1, 
      text: "AI initiatives rely on more than just models, they rely on trusted data. Data lineage preserves the full story behind every data point: where it originated, who modified it, and how transformations changed its meaning.",
      date: "4 days ago",
      image: "https://picsum.photos/seed/ai-brain-circuit-glow/800/600",
      url: "https://www.linkedin.com/posts/data-bench_datagovernance-datamanagement-ai-activity-7430294102388277248-_bf-"
    },
    { 
      id: 2, 
      text: "Unmanaged data costs more than money. It costs time to value. Fragmented, ungoverned data slows decisions, erodes trust, and keeps teams focused on fixing issues instead of driving growth.",
      date: "2 weeks ago",
      image: "https://picsum.photos/seed/cyber-network-nodes/800/600",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7420144528793399296"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-display font-bold text-emerald-950 tracking-tight">{t('linkedin.title')}</h2>
          <a 
            href="https://www.linkedin.com/company/data-bench/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-600 font-bold hover:underline"
          >
            <Linkedin className="w-5 h-5" /> Follow Us
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a 
              key={post.id} 
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block"
            >
              <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/10] bg-slate-100 relative shadow-sm border border-slate-100">
                <img 
                  src={post.image} 
                  alt="Data Modernization" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-lg shadow-sm border border-white/20">
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] bg-emerald-50 px-2 py-1 rounded">
                  {post.date}
                </span>
                <div className="h-px flex-grow bg-slate-100" />
              </div>
              <p className="text-slate-900 font-bold text-lg leading-tight mb-3 group-hover:text-emerald-600 transition-colors line-clamp-3">
                {post.text}
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                Read on LinkedIn <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalSection = () => {
  const { t } = useTranslation();
  
  const team = [
    { name: 'Mathew Linton', linkedin: 'https://linkedin.com/in/mathewlinton' },
    { name: 'Tucker Grant', linkedin: 'https://linkedin.com/in/tuckergrant' },
    { name: 'Mark Mclellan', linkedin: 'https://linkedin.com/in/markmclellan' },
    { name: 'John Flett', linkedin: 'https://linkedin.com/in/johnflett' }
  ];

  return (
    <section id="contact" className="py-24 bg-white border-t border-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Company Overview & Reach Section */}
        <div className="mb-16">
          <div className="mb-12 flex flex-col items-start px-4">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-3">Organization</span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">Company</h3>
          </div>
          <div className="bg-slate-50/50 rounded-[4rem] p-8 md:p-16 border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10 grid lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-1">
                <div className="mb-6 flex flex-col items-start">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-2">Our Reach</span>
                  <h4 className="text-2xl font-display font-bold text-slate-800 tracking-tight">Global Presence</h4>
                </div>
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  Our teams are strategically located to serve global enterprises across multiple time zones, providing dedicated support and local expertise where it matters most.
                </p>
                <div className="mt-12 grid grid-cols-2 gap-6">
                  {['Toronto', 'Kitchener', 'London', 'UAE'].map(loc => (
                    <div key={loc} className="flex items-center gap-3 text-sm text-slate-900 font-bold uppercase tracking-widest group/loc">
                      <div className="w-2 h-2 rounded-full bg-slate-400 group-hover/loc:bg-emerald-500 group-hover/loc:scale-125 transition-all" />
                      {loc}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 min-h-[400px] relative bg-white rounded-[3rem] border border-slate-100/50 p-8 shadow-2xl shadow-slate-500/5">
                <WorldMap />
              </div>
            </div>
            
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/30 rounded-full blur-[120px] pointer-events-none" />
          </div>
        </div>

        {/* 3-Column Info Footer Row (Matching Image) */}
        <div className="grid md:grid-cols-3 gap-16 pt-12 border-t border-slate-100">
          {/* Mission Column */}
          <div className="flex flex-col">
            <span className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em] mb-6">Mission</span>
            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
              To empower organizations to transition from data chaos to structural clarity through flexible, intelligent data layers.
            </p>
          </div>

          {/* Executive Team Column */}
          <div className="flex flex-col">
            <span className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em] mb-6">Executive Team</span>
            <ul className="flex flex-col gap-4">
              {team.map(member => (
                <li key={member.name} className="flex items-center gap-3 group">
                  <span className="text-lg font-display font-medium text-slate-600 group-hover:text-emerald-600 transition-colors">
                    {member.name}
                  </span>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-[#0077b5] opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="flex flex-col">
            <span className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em] mb-6">Contact Us</span>
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Main</span>
                <a href="mailto:contact@databench.co" className="text-lg font-display font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                  contact@databench.co
                </a>
              </div>
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Partnerships</span>
                <a href="mailto:partnership@databench.co" className="text-lg font-display font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                  partnership@databench.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
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

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-emerald-950 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      
      <main>
        <Hero />
        <IntelligentDataPlatform />
        <ResultSection />
        <AIDataLayerSection />
        <UseCasesSection />
        <LinkedInSection />
        <FinalSection />
      </main>

      <Footer />

      {/* Floating Request Demo Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <button className="bg-emerald-600 text-white p-4 rounded-full shadow-2xl shadow-emerald-400">
          <Zap className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
