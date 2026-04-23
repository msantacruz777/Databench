import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Database } from 'lucide-react';

export const ResultSection = () => {
  const { t } = useTranslation();
  const features = t('platform.result.features', { returnObjects: true }) as string[];

  return (
    <section className="pt-12 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Main Video Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 group"
          >
            <div className="absolute inset-0 bg-[#0f172a]/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600&h=1000" 
              alt="Advanced Technology Infrastructure"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent z-20" />
            
            {/* Abstract Tech Decorations */}
            <div className="absolute top-6 right-6 z-30 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-75" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col mb-8">
              <h3 className="text-3xl font-display font-bold text-[#0f172a] leading-tight">
                {t('platform.result.title')}
              </h3>
              <p className="text-lg font-medium text-[#10b981] leading-tight mt-1">
                {t('platform.result.subtitle')}
              </p>
            </div>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              {t('platform.result.desc')}
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                    <Database className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
