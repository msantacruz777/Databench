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
    <section id="platform" className="pt-16 pb-12 bg-white">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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

        {/* Metrics Section */}
        <div className="mt-16 pt-16 border-t border-slate-100">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-sans font-bold text-[#0f172a] mb-4 tracking-[-0.01em] leading-tight">
              {t('platform.metrics.title')}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {(t('platform.metrics.items', { returnObjects: true }) as any[]).map((metric: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-md hover:bg-slate-100/50 transition-all duration-300 min-h-[260px]"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {metric.value}
                </div>
                <h4 className="text-lg font-bold text-[#0f172a] mb-2 leading-tight">
                  {metric.label}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
