import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CinematicDataAnimation } from './CinematicDataAnimation';
import { BenchLogo } from './BenchLogo';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const words = ['ACTIVATION', 'AI', 'MIGRATION', 'CONTEXT', 'KNOWLEDGE', 'SEMANTIC'];
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
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <h1 className="text-[clamp(1.25rem,6vw,4rem)] font-display font-black text-[#0f172a] leading-none mb-6 tracking-tighter uppercase whitespace-nowrap flex items-center justify-center gap-[0.3em]">
              {isRtl ? (
                t('hero.quote')
              ) : (
                <>
                  <span>THE</span>
                  <div className="h-[1.2em] flex items-center overflow-hidden min-w-fit flex-shrink-0">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={index}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 inline-flex items-center whitespace-nowrap py-1 px-2"
                      >
                        DATA&nbsp;&nbsp;{words[index]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span>LAYER</span>
                </>
              )}
            </h1>

            <p className="text-xl md:text-2xl text-[#1d4c6a] font-normal leading-tight mb-8 max-w-3xl mx-auto whitespace-pre-line">
              {t('hero.subheading')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <div className="w-full max-w-[280px] sm:max-w-[420px]">
                <BenchLogo className="text-[#99E866] w-full h-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
