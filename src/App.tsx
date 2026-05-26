/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft, 
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
  Phone,
  Plus
} from 'lucide-react';
import { cn } from './lib/utils';
import './i18n';
import WorldMap from './components/WorldMap';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IntelligentDataPlatform } from './components/IntelligentDataPlatform';
import { ResultSection } from './components/ResultSection';
import { SecuritySection } from './components/SecuritySection';
import { BenchLogo } from './components/BenchLogo';


// --- Components ---

const UseCasesSection = () => {
  const { t } = useTranslation();
  const items = t('useCases.items', { returnObjects: true }) as Array<{
    badge: string;
    title: string;
    desc: string;
  }>;

  return (
    <section id="use-cases" className="pt-12 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[14px] font-bold tracking-[0.15em] text-[#10b981] uppercase mb-3 block">
            {t('useCases.label')}
          </span>
          <h3 className="text-3xl md:text-4xl font-sans font-bold text-[#0f172a] mb-2 tracking-[-0.01em] leading-tight">
            {t('useCases.title')}
          </h3>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const titleColors = [
              'text-[#1d4c6a]',
              'text-[#1d4c6a]',
              'text-[#1d4c6a]',
              'text-[#1d4c6a]',
              'text-[#1d4c6a]',
              'text-[#1d4c6a]'
            ];
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white pt-8 pb-8 pl-8 pr-10 md:pt-10 md:pb-10 md:pl-10 md:pr-12 rounded-[2.5rem] border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col h-full text-left group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <span className="px-5 py-2 bg-slate-50 text-[#10b981] text-[13px] font-black tracking-[0.1em] uppercase rounded-lg border border-slate-100/50 inline-block group-hover:bg-[#10b981] group-hover:text-white group-hover:border-[#10b981] transition-all duration-300">
                      {item.badge}
                    </span>
                  </div>
                  <h3 
                    className={cn("text-xl md:text-2xl font-sans font-bold mb-6 tracking-tight leading-[1.2] min-h-[5.5rem] flex items-start", titleColors[i] || "text-[#0f172a]")}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <div className="w-12 h-[2px] bg-slate-100 mb-6 group-hover:w-20 group-hover:bg-[#10b981] transition-all duration-500" />
                  <p className="text-slate-500 leading-[1.65] text-[15px] md:text-[16px] font-medium flex-grow text-left tracking-normal normal-case break-words">
                    {item.desc}
                  </p>
                </div>
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
  
  const layers = [
    {
      title: 'Semantic Layer',
      icon: <Layers className="w-6 h-6 text-emerald-600" />,
      bullets: ['Automated Graph Assembly', 'Hyper Relations'],
      color: 'emerald'
    },
    {
      title: 'Rules Engine',
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      bullets: ['Embedded Inference', 'Ontology Creation'],
      color: 'blue'
    },
    {
      title: 'Knowledge Graph',
      icon: <GitBranch className="w-6 h-6 text-indigo-600" />,
      bullets: ['Contextualization', 'Governance'],
      color: 'indigo'
    }
  ];

  return (
    <section id="ai-data-layer" className="pt-8 pb-8 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[14px] font-bold tracking-[0.15em] text-[#10b981] uppercase mb-3 block">
              Cognitive Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0f172a] mb-6 tracking-[-0.01em] leading-tight flex flex-col items-center">
              <span>Semantic Layer + Rules Engine + Graph</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 uppercase mt-2">= AI Data Layer</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
              Data Bench Hyper Graph activates context, embeds inference, reduces hallucinations and optimizes agentic outcomes
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative max-w-5xl mx-auto">
          {layers.map((layer, i) => (
            <React.Fragment key={i}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={cn(
                  "relative group p-8 rounded-[2rem] border border-slate-100 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.02)] transition-all duration-500",
                  "hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col items-center text-center"
                )}
              >
                <div className="relative z-10 w-full flex flex-col items-center h-full">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110",
                    layer.color === 'emerald' ? "bg-emerald-50 text-emerald-600" : 
                    layer.color === 'blue' ? "bg-blue-50 text-blue-600" : 
                    "bg-indigo-50 text-indigo-600"
                  )}>
                    {layer.icon}
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-4 tracking-tight">
                    {layer.title}
                  </h3>
                  
                  <div className="flex flex-col gap-2.5 w-full">
                    {layer.bullets.map((bullet, j) => (
                      <div 
                        key={j} 
                        className="px-6 py-3.5 rounded-full border border-slate-100 bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] text-slate-600 text-[13px] font-black tracking-[0.15em] uppercase flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-slate-200 group-hover:-translate-y-0.5"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative accent for the background on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
              </motion.div>

              {/* Plus Sign - Desktop Only */}
              {i < layers.length - 1 && (
                <div className="hidden md:flex absolute items-center justify-center top-1/2 -translate-y-1/2 z-20 pointer-events-none" 
                     style={{ left: `${(i + 1) * 33.33}%`, transform: 'translate(-50%, -50%)' }}>
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center">
                    <Plus className="w-6 h-6 text-slate-300" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-50/40 blur-[120px] rounded-full -z-10 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-50/40 blur-[120px] rounded-full -z-10 translate-y-1/2 -translate-x-1/4" />
    </section>
  );
};

const LinkedInSection = () => {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const posts = [
    { 
      id: 0, 
      badge: "Today",
      title: "The Invisible Cost of Manual Data Handling",
      text: "Manual deduplication is often an invisible cost in many organizations. When teams rely on manual processes to clean and deduplicate their data sets, they lose valuable time and increase risk.",
      image: "/Knowledge.jpeg",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7444774375997800448"
    },
    { 
      id: 1, 
      badge: "4 days ago",
      title: "Data Lineage: The Story Behind Trusted AI",
      text: "AI initiatives rely on more than just models, they rely on trusted data. Data lineage preserves the full story behind every data point: where it originated and who modified it.",
      image: "/Graph.png",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7430294102388277248"
    },
    { 
      id: 2, 
      badge: "2 weeks ago",
      title: "The High Price of Unmanaged Data",
      text: "Unmanaged data costs more than money. It costs time to value. Fragmented, ungoverned data slows decisions, erodes trust, and keeps teams trapped in manual cycles.",
      image: "/image7.png",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7420144528793399296"
    },
    { 
      id: 3, 
      badge: "3 weeks ago",
      title: "Unifying Disparate Data Sources with Precision",
      text: "Breaking down organizational silos requires sophisticated entity resolution. Standardizing terminology and mapping relationships automatically creates a single, trusted source of truth.",
      image: "/databenchotra.jpg",
      url: "https://www.linkedin.com/company/data-bench/"
    },
    { 
      id: 4, 
      badge: "1 month ago",
      title: "The Role of Knowledge Graphs in ERP Migrations",
      text: "Migrating to a modern ERP platform shouldn't be a trust-fall. Transforming source systems into an interactive knowledge validation graph ensures clean, risk-free transitions.",
      image: "/Knowledge.jpeg",
      url: "https://www.linkedin.com/company/data-bench/"
    },
    { 
      id: 5, 
      badge: "1 month ago",
      title: "Supervised ML for Smart Enterprise Mapping",
      text: "Continuous learning loops enable pattern matching that evolves with your business logic. Supervised ML paired with reinforcement learning delivers automated, highly precise mapping.",
      image: "/Graph.png",
      url: "https://www.linkedin.com/company/data-bench/"
    },
    { 
      id: 6, 
      badge: "2 months ago",
      title: "Securing Sensitive Data at Rest and in Motion",
      text: "Modern data platforms must balance complete visibility with rigorous security protocols. Learn how end-to-end auditability and rule enforcement keep enterprises fully compliant.",
      image: "/image7.png",
      url: "https://www.linkedin.com/company/data-bench/"
    },
    { 
      id: 7, 
      badge: "2 months ago",
      title: "Beyond Spreadsheets: Automating Complex KPIs",
      text: "Centralized semantic modeling encodes complex, nested business definitions directly. Say goodbye to fragmented manual spreadsheets and inconsistent reporting logic.",
      image: "/databenchotra.jpg",
      url: "https://www.linkedin.com/company/data-bench/"
    },
    { 
      id: 8, 
      badge: "3 months ago",
      title: "Post-Merger Risk & System Harmonization",
      text: "Unifying millions of customer accounts from disparate, newly-acquired banking networks with 100% accuracy requires scalable patterns. Explore our integration blueprints.",
      image: "/Knowledge.jpeg",
      url: "https://www.linkedin.com/company/data-bench/"
    },
    { 
      id: 9, 
      badge: "4 months ago",
      title: "Architecting Governance for AI Readiness",
      text: "An enterprise is only as ready for AI as its underlying data infrastructure. Comprehensive data governance ensures models draw from contextually accurate, safe datasets.",
      image: "/Graph.png",
      url: "https://www.linkedin.com/company/data-bench/"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const isMobile = window.innerWidth < 768;
      const amount = isMobile ? container.clientWidth : (container.clientWidth / 3);
      container.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="blog" className="pt-16 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              {t('linkedin.title')}
            </h2>
            <a 
              href="https://www.linkedin.com/company/data-bench/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#0a66c2] font-semibold hover:opacity-80 transition-opacity"
            >
              <svg className="w-5 h-5 text-[#0a66c2] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg> Follow Us
            </a>
          </div>
        </div>

        <div className="relative px-2">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-2 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/70 shadow-md hover:shadow-lg flex items-center justify-center hover:bg-slate-50 text-slate-600 hover:text-emerald-600 active:scale-95 transition-all focus:outline-none"
            aria-label="Previous posts"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-8 pb-6 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {posts.map((post, idx) => (
              <div 
                key={post.id} 
                className="w-full md:w-[calc((100%-4rem)/3)] shrink-0 snap-start h-auto flex flex-col"
              >
                <motion.a 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col h-full bg-[#f8f9fa] border border-slate-100 border-l-4 border-l-emerald-400 rounded-xl p-8 transition-all hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-100"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {post.badge}
                    </span>
                    <div className="opacity-20 group-hover:opacity-40 transition-opacity">
                      <Linkedin className="w-5 h-5 text-[#0077b5]" />
                    </div>
                  </div>

                  {/* Small Thumbnail Image */}
                  <div className="mb-6 rounded-lg overflow-hidden h-32 bg-slate-200 border border-slate-100 shadow-sm relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-display font-bold text-[#1d4c6a] leading-tight mb-4 group-hover:text-emerald-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-[14px] leading-relaxed line-clamp-2">
                      {post.text}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/50 flex items-center gap-2 text-emerald-600 text-sm font-bold transition-all opacity-100 translate-y-0 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0">
                    <span>Read on LinkedIn</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.a>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-2 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/70 shadow-md hover:shadow-lg flex items-center justify-center hover:bg-slate-50 text-slate-600 hover:text-emerald-600 active:scale-95 transition-all focus:outline-none"
            aria-label="Next posts"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const FinalSection = () => {
  const { t } = useTranslation();
  
  const team = [
    { name: 'Matthew Linton', linkedin: 'https://www.linkedin.com/in/matthew-linton-1b6a453/?skipRedirect=true' },
    { name: 'Tucker Grant', linkedin: 'https://www.linkedin.com/in/tuckerkgrant/' },
    { name: 'Mark McLellan', linkedin: 'https://www.linkedin.com/in/markmclellan/' },
    { name: 'John Flett', linkedin: 'https://www.linkedin.com/in/john-flett-05a2a393/' },
    { name: 'Reza Babaee', linkedin: 'https://www.linkedin.com/in/reza-babaee/' }
  ];

  return (
    <section id="company" className="pt-12 pb-24 bg-white border-t border-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Company Overview & Reach Section */}
        <div className="mb-10">
          <div className="mb-6 flex flex-col items-start px-4">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">Company</h3>
          </div>
          <div className="bg-slate-50/50 rounded-[4rem] p-8 md:p-16 border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10 grid lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-1">
                <div className="mb-6 flex flex-col items-start">
                  <h4 className="text-2xl font-display font-bold text-slate-800 tracking-tight">Global Presence</h4>
                </div>
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  Our teams are strategically located to serve global enterprises across multiple time zones.
                </p>
                <div className="mt-12 grid grid-cols-2 gap-6">
                  {['Toronto', 'Waterloo', 'London', 'Dubai'].map(loc => (
                    <div key={loc} className="flex items-center gap-3 text-sm text-slate-900 font-bold uppercase tracking-widest group/loc">
                      <div className="w-2 h-2 rounded-full bg-slate-400 group-hover/loc:bg-emerald-500 group-hover/loc:scale-125 transition-all" />
                      {loc}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 aspect-video sm:aspect-auto min-h-0 sm:min-h-[400px] relative overflow-hidden rounded-[3rem] shadow-xl shadow-slate-200/50">
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
                    className="text-slate-400 hover:text-[#0a66c2] transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
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
                <a href="mailto:contact@databench.co" className="text-lg font-display font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                  contact@databench.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <SecuritySection />
        <UseCasesSection />
        <LinkedInSection />
        <FinalSection />
      </main>

      <Footer />
    </div>
  );
}
