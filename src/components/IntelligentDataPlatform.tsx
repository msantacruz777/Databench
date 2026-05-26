import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Database, Shield, GitBranch, Layers } from 'lucide-react';
import { cn } from '../lib/utils';

export const IntelligentDataPlatform = () => {
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
      icon: <Layers className="w-5 h-5" />, 
      title: t('platform.dedupe.title'), 
      subtitle: t('platform.dedupe.subtitle'), 
      desc: t('platform.dedupe.desc'),
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
      icon: <Shield className="w-5 h-5" />, 
      title: t('platform.governance.title'), 
      subtitle: t('platform.governance.subtitle'), 
      desc: t('platform.governance.desc'),
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
  ];

  return (
    <section id="platform" className="pt-8 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[14px] font-bold tracking-[0.15em] text-[#10b981] uppercase mb-3 block">
            {t('platform.label')}
          </span>
          <h2 
            className="text-4xl md:text-[52px] font-sans font-bold text-[#0f172a] mb-6 tracking-[-0.01em] leading-tight"
            dangerouslySetInnerHTML={{ __html: t('platform.title') }}
          />
          <p className="text-[17px] text-[#64748b] max-w-2xl mx-auto leading-[1.6]">
            {t('platform.description')}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-8 flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm", card.iconBg, card.iconColor)}>
                {card.icon}
              </div>
              
              <div className="flex flex-col flex-grow">
                {/* Fixed height label container to align titles */}
                <div className="min-h-[3rem] mb-2 flex items-start">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] leading-tight">
                    {card.subtitle}
                  </p>
                </div>

                {/* Fixed height title container to align descriptions */}
                <div className="min-h-[3.75rem] flex items-start">
                  <h3 className="text-xl font-display font-bold leading-snug text-[#1d4c6a]">
                    {card.title}
                  </h3>
                </div>

                {/* Description starts at the same line across all cards */}
                <p className="text-[14px] text-slate-500 leading-[1.6]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
