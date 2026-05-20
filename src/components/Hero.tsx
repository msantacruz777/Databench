import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CinematicDataAnimation } from './CinematicDataAnimation';
import { BenchLogo } from './BenchLogo';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const words = ['AI\u00A0DATA', 'DATA\u00A0ACTIVATION', 'SEMANTIC', 'DATA\u00A0CONTEXT', 'DATA\u00A0MIGRATION', 'KNOWLEDGE'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-40 pb-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <h1 className="text-[clamp(1rem,8vw,2.5rem)] md:text-[clamp(1.25rem,6vw,4rem)] font-display font-black text-[#0f172a] leading-[1.1] md:leading-none mb-6 md:tracking-tighter uppercase flex flex-col md:flex-row items-center justify-center md:gap-[0.25em] px-2 w-full mx-auto overflow-visible">
              {isRtl ? (
                t('hero.quote')
              ) : (
                <>
                  <div className="flex flex-wrap items-center gap-[0.15em] md:gap-[0.25em] justify-center mb-1 md:mb-0 max-w-full overflow-visible">
                    <span className="flex-shrink-0">THE</span>
                    <div className="h-[1.2em] flex items-center overflow-visible min-w-0 relative">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={index}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 inline-flex items-center py-1 px-0 whitespace-nowrap"
                        >
                          {words[index]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                  <span className="flex-shrink-0">LAYER</span>
                </>
              )}
            </h1>

            <div className="text-center text-xl md:text-2xl text-[#1d4c6a] font-normal leading-tight mb-8 max-w-3xl mx-auto px-5 md:px-0 flex flex-col gap-2">
              {t('hero.subheading').split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

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
