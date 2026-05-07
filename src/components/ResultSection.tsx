import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const ResultSection = () => {
  const { t } = useTranslation();
  
  const featureTitles = [
    'Graph Population',
    'Auditable Lineage',
    'Iterative Schema',
    'Automated Deduplication',
    'Transformation Registry',
    'Governance Enforced'
  ];

  const metrics = t('platform.metrics.items', { returnObjects: true }) as any[];

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header: Reverting typography style */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-[#0f172a] leading-none mb-3 tracking-tighter uppercase"
          >
            {t('platform.result.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-medium text-[#10b981] leading-tight tracking-tight mb-8"
          >
            {t('platform.result.subtitle')}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[17px] text-[#64748b] max-w-2xl mx-auto leading-[1.6]"
          >
            {t('platform.result.desc')}
          </motion.p>
        </div>

        {/* bullet points redesigned as elegant pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-20 max-w-5xl mx-auto">
          {featureTitles.map((title, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-50/80 border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-md transition-all group"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
              <span className="text-slate-900 font-bold text-[12px] leading-none tracking-tight uppercase">
                {title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Metrics Row: Slim Horizontal Row with Dividers */}
        <div className="max-w-5xl mx-auto border-t border-slate-100 pt-16">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-4">
            {metrics.map((metric, idx) => (
              <React.Fragment key={idx}>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="text-5xl md:text-6xl font-display font-black text-emerald-500 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-bold text-[#0f172a] uppercase tracking-widest max-w-[150px] leading-tight">
                    {metric.label}
                  </div>
                </motion.div>
                {idx < metrics.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-slate-100 mx-8" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
