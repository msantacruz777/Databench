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
    <section id="use-cases" className="pt-24 pb-12 bg-white">
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
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              Cognitive Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#0f172a] mb-8 leading-tight tracking-tight">
              Semantic Layer + Rules Engine + Graph = <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">AI Data Layer</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic">
              "Data in Context"
            </p>
            
            <div className="space-y-4 text-left">
              {[
                { title: 'Neural Semantic Mapping', desc: 'Automatically bridge disparate data models using AI.' },
                { title: 'Predictive Lineage', desc: 'Anticipate downstream impacts of data changes.' },
                { title: 'Autonomous Quality Guard', desc: 'Self-healing data pipelines powered by machine learning.' }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{feature.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
      badge: "Today",
      text: "Manual deduplication is often an invisible cost in many organizations. When teams rely on manual processes to clean and deduplicate their data sets, they lose valuable...",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7444774375997800448"
    },
    { 
      id: 1, 
      badge: "4 days ago",
      text: "AI initiatives rely on more than just models, they rely on trusted data. Data lineage preserves the full story behind every data point: where it originated, who modified it...",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7430294102388277248"
    },
    { 
      id: 2, 
      badge: "2 weeks ago",
      text: "Unmanaged data costs more than money. It costs time to value. Fragmented, ungoverned data slows decisions, erodes trust, and keeps teams trapped in manual cycles...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7420144528793399296",
      isGreen: true
    }
  ];

  return (
    <section id="blog" className="pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-4 gap-6">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-3">Community</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">{t('linkedin.title')}</h2>
            </div>
            <a 
              href="https://www.linkedin.com/company/data-bench/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-600 font-bold hover:opacity-80 transition-opacity"
            >
              <Linkedin className="w-5 h-5" /> Follow Us
            </a>
          </div>
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
                  alt="LinkedIn Content" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white rounded-lg p-1.5 shadow-sm border border-slate-100/50">
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                </div>
              </div>
              <div className="mb-4">
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest rounded">
                  {post.badge}
                </span>
              </div>
              <p className={cn(
                "font-bold text-lg leading-snug transition-colors line-clamp-3",
                post.isGreen ? "text-emerald-600 group-hover:text-emerald-700" : "text-slate-900 group-hover:text-emerald-600"
              )}>
                {post.text}
              </p>
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
    { name: 'Mark McLellan', linkedin: 'https://linkedin.com/in/markmclellan' },
    { name: 'John Flett', linkedin: 'https://linkedin.com/in/johnflett' },
    { name: 'Reza Babaee', linkedin: 'https://linkedin.com/in/rezababaee' }
  ];

  return (
    <section id="company" className="py-24 bg-white border-t border-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Company Overview & Reach Section */}
        <div className="mb-10">
          <div className="mb-6 flex flex-col items-start px-4">
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
                  {['Toronto', 'Waterloo', 'London', 'UAE'].map(loc => (
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

      {/* Floating Logo for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <div className="bg-white p-4 rounded-full shadow-2xl border border-slate-100 flex items-center justify-center">
          <BenchLogo className="w-10 h-10 text-[#a3e635]" />
        </div>
      </div>
    </div>
  );
}
