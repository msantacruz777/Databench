import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

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
        {/* Header: Centered Workbench Style */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[14px] font-bold tracking-[0.15em] text-[#10b981] uppercase mb-3 block"
          >
            {t('platform.result.title')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[52px] font-sans font-bold text-[#0f172a] mb-6 tracking-[-0.01em] leading-tight"
          >
            {t('platform.result.subtitle')}
          </motion.h2>
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

        {/* Feature Cards Grid: Simplified and Compact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {featureTitles.map((title, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100/80 hover:bg-white hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all group flex items-center justify-center text-center h-full min-h-[100px]"
            >
              <span className="text-slate-900 font-bold text-[13px] leading-tight tracking-tight uppercase group-hover:text-emerald-600 transition-colors">
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
