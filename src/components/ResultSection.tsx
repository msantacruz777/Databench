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
    'governance enforcement'
  ];

  return (
    <section className="pt-4 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#fafafa] rounded-[1.5rem] border border-emerald-100 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.03)]"
        >
          <div className="p-8 md:p-12">
            {/* Header: Top left layout */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-900/10 flex-shrink-0">
                <CheckCircle2 className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl font-display font-bold text-[#0f172a] uppercase tracking-normal leading-tight">
                  {t('platform.result.title')}
                </h3>
                <p className="text-xl font-medium text-[#10b981] tracking-tight mt-1">
                  {t('platform.result.subtitle')}
                </p>
              </div>
            </div>
            
            {/* Description: Single line */}
            <div className="mb-12">
              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                {t('platform.result.desc')}
              </p>
            </div>

            {/* Features: 3x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureTitles.map((title, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white border border-emerald-50/50 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-[#1d4c6a] font-bold text-[15px] uppercase tracking-wide group-hover:text-emerald-700 transition-colors">
                    {title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
