import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Database } from 'lucide-react';
import { cn } from '../lib/utils';

export const ResultSection = () => {
  const { t } = useTranslation();
  const features = t('platform.result.features', { returnObjects: true }) as string[];

  const titleStyle = "text-4xl md:text-[52px] font-sans font-bold text-[#0f172a] mb-6 tracking-[-0.01em] leading-tight";
  const cardStyle = "rounded-[2.5rem] p-8 bg-slate-50/50 border border-slate-100/80 hover:bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 group";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h3 className="text-4xl font-display font-black text-[#0f172a] leading-none mb-3 tracking-tighter uppercase">
              {t('platform.result.title')}
            </h3>
            <p className="text-xl font-medium text-[#10b981] leading-tight tracking-tight">
              {t('platform.result.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              {t('platform.result.desc')}
            </p>
          </motion.div>
        </div>

        {/* Feature Items List: Now Full Width below Header */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-12 border-t border-slate-100 mb-24">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + (idx * 0.05) }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                <Database className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-slate-700 font-bold text-xs leading-tight tracking-tight uppercase">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Transform Your Business Title */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-sans font-bold text-[#0f172a] mb-4 tracking-[-0.01em] leading-tight"
          >
            {t('platform.metrics.title')}
          </motion.h3>
        </div>

        {/* Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {(t('platform.metrics.items', { returnObjects: true }) as any[]).map((metric: any, idx: number) => {
            const styles = [
              { border: 'border-emerald-100', text: 'text-emerald-600' },
              { border: 'border-blue-100', text: 'text-blue-600' },
              { border: 'border-emerald-100', text: 'text-emerald-600' },
            ];
            const style = styles[idx % styles.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group bg-slate-50/50 border hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 min-h-[260px]",
                  style.border
                )}
              >
                <div className={cn("text-4xl md:text-5xl font-display font-black mb-4 group-hover:scale-110 transition-transform duration-500", style.text)}>
                  {metric.value}
                </div>
                <h4 className="text-lg font-bold text-[#0f172a] mb-2 leading-tight tracking-tight uppercase">
                  {metric.label}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
                  {metric.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
