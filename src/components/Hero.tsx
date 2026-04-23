import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PlatformVisualization } from './PlatformVisualization';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const words = ['ACTIVATION', 'AI', 'MIGRATION', 'CONTEXT', 'AUTOMATIZATION', 'KNOWLEDGE', 'SEMANTIC'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <h1 className="text-[clamp(1.25rem,6vw,4rem)] font-display font-black text-[#0f172a] leading-none mb-8 tracking-tighter uppercase whitespace-nowrap flex items-center justify-center gap-[0.3em]">
              {isRtl ? (
                t('hero.quote')
              ) : (
                <>
                  <span>THE</span>
                  <div className="h-[1.2em] flex items-center overflow-hidden min-w-fit flex-shrink-0">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={words[index]}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 inline-flex items-center whitespace-nowrap py-1 px-2"
                      >
                        {words[index]}&nbsp;&nbsp;DATA
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span>LAYER</span>
                </>
              )}
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-normal leading-tight mb-12 max-w-3xl mx-auto opacity-80">
              {t('hero.subheading')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-[#10a37f] hover:bg-[#0e8c6d] text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-[0_20px_40px_rgba(16,163,127,0.25)] flex items-center justify-center gap-3 group">
                Request a Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Platform Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <PlatformVisualization />
        </motion.div>
      </div>
    </section>
  );
};
