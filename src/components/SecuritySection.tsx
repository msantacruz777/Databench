import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { cn } from '../lib/utils';

export const SecuritySection = () => {
  const { t } = useTranslation();

  return (
    <section id="security" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
                  "p-8 md:p-10 flex flex-col gap-3 border-slate-100",
                  i % 2 === 0 ? "md:border-r" : "md:border-r-0",
                  i < 3 ? "lg:border-r" : "lg:border-r-0"
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
          <div className="bg-[#0f172a] p-8 md:p-12">
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-4xl font-medium opacity-90 mx-auto text-center">
              {t('platform.security.desc')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
