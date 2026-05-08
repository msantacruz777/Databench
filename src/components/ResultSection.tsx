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
        {/* Header: Matched to SecuritySection style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[1rem] border border-slate-100 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)] mb-16"
        >
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#0f172a] rounded-[1rem] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <CheckCircle2 className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl font-display font-bold text-[#0f172a] leading-tight">
                  {t('platform.result.title')}
                </h3>
                <p className="text-lg font-medium text-[#10b981] leading-tight mt-1">
                  {t('platform.result.subtitle')}
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-[17px] text-[#64748b] max-w-none leading-[1.6]">
                {t('platform.result.desc')}
              </p>
            </div>

            {/* Structured grid of prominent pills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {featureTitles.map((title, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all group"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-slate-900 font-bold text-[14px] uppercase tracking-tight group-hover:text-emerald-600 transition-colors">
                    {title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Metrics Row: Now inside the box */}
            <div className="mt-16 pt-16 border-t border-slate-100 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h4 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2 leading-relaxed">
                  Transform Your Business With Data Bench
                </h4>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 relative">
                {metrics.map((metric, idx) => {
                  const themeColor = 'emerald';
                  const glowColor = 'rgba(16, 185, 129, 0.05)';
                  const glowColorHover = 'rgba(16, 185, 129, 0.1)';

                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + (idx * 0.15) }}
                      viewport={{ once: true }}
                      className="relative group px-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="relative mb-6">
                          <motion.div 
                            animate={{ 
                              boxShadow: [`0 10px 40px -10px ${glowColor}`, `0 20px 50px -10px ${glowColorHover}`, `0 10px 40px -10px ${glowColor}`]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className={`w-28 h-28 md:w-32 md:h-32 rounded-full bg-slate-50/50 border border-white shadow-xl shadow-emerald-500/5 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-105`}
                          >
                            <div className={`absolute inset-2 rounded-full border border-dashed border-slate-200 group-hover:border-${themeColor}-200 group-hover:rotate-45 transition-all duration-700`} />
                            <div className="text-3xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 tracking-tight transition-all pb-1">
                              {metric.value}
                            </div>
                          </motion.div>
                        </div>

                        <div className="space-y-2 text-center">
                          <p className={`text-[12px] md:text-[13px] font-bold text-slate-900 uppercase tracking-widest max-w-[180px] leading-tight transition-colors group-hover:text-emerald-700`}>
                            {metric.label}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
