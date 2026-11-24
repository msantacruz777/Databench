import React from 'react';
import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  const partners = [
    {
      id: 0,
      name: 'TypeDB',
      url: 'https://typedb.com',
      renderLogo: () => (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="2" y="13" width="3" height="6" rx="1.5" fill="#0f172a" />
            <rect x="27" y="13" width="3" height="6" rx="1.5" fill="#0f172a" />
            <rect x="4" y="6" width="24" height="20" rx="10" fill="#0f172a" />
            <circle cx="11.5" cy="15" r="3.5" fill="white" />
            <circle cx="11.5" cy="15" r="1.5" fill="#0f172a" />
            <circle cx="20.5" cy="15" r="3.5" fill="white" />
            <circle cx="20.5" cy="15" r="1.5" fill="#0f172a" />
            <path d="M13 20.5 Q16 22.5 19 20.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-lg font-bold tracking-tight text-slate-900 font-sans">
            TypeDB
          </span>
        </div>
      )
    },
    {
      id: 1,
      name: 'FarmOp CAPITAL',
      url: 'https://www.farmopcapital.com',
      renderLogo: () => (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-7 shrink-0" viewBox="0 0 32 36" fill="none" aria-hidden="true">
            <path d="M6 32 C6 18, 16 6, 28 4 C28 18, 20 32, 6 32 Z" fill="#15803d" />
            <path d="M7 32 C12 24, 20 18, 27 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 26 C16 23, 22 22, 26 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 20 C18 18, 22 17, 25 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 33 L3 35" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col leading-none text-left">
            <span className="text-base font-bold tracking-tight text-[#166534] font-serif">
              FarmOp
            </span>
            <span className="text-[8px] font-bold tracking-[0.2em] text-[#15803d] uppercase mt-0.5">
              CAPITAL.
            </span>
          </div>
        </div>
      )
    },
    {
      id: 2,
      name: 'PEMECO CONSULTING',
      url: 'https://www.pemeco.com',
      renderLogo: () => (
        <div className="flex items-center justify-center">
          <img
            src="/assets/aistudio/Pemeco_Logo_7fa4fad3.webp"
            alt="PEMECO Consulting"
            referrerPolicy="no-referrer"
            className="h-8 sm:h-9 w-auto max-w-[140px] object-contain"
          />
        </div>
      )
    },
    {
      id: 3,
      name: 'NetFoundry',
      url: 'https://netfoundry.io',
      renderLogo: () => (
        <div className="flex items-center justify-center">
          <img
            src="/assets/aistudio/Screenshot_2026-09-01_101132_b4768aaa.png"
            alt="NetFoundry"
            referrerPolicy="no-referrer"
            className="h-11 sm:h-12 w-auto max-w-[135px] object-contain"
          />
        </div>
      )
    },
    {
      id: 4,
      name: 'Sylphina Solutions',
      url: 'https://sylphinasolutions.com',
      renderLogo: () => (
        <div className="flex items-center justify-center">
          <img
            src="/assets/aistudio/Screenshot_2026-11-16_125146_cda034ab.png"
            alt="Sylphina Solutions"
            referrerPolicy="no-referrer"
            className="h-10 sm:h-11 w-auto max-w-[155px] object-contain mix-blend-multiply brightness-[1.04] contrast-[1.06]"
          />
        </div>
      )
    },
    {
      id: 5,
      name: 'Multilateral Accountability Associates',
      url: 'https://multilateralaccountability.com',
      renderLogo: () => (
        <div className="flex items-center justify-center">
          <img
            src="/assets/aistudio/logo_good_resolution_67b36604.png"
            alt="Multilateral Accountability Associates"
            referrerPolicy="no-referrer"
            className="w-[174px] sm:w-[192px] max-w-none h-auto max-h-20 object-contain shrink-0"
          />
        </div>
      )
    },
    {
      id: 6,
      name: 'Settlement Infrastructure',
      url: 'https://settlementinfrastructure.com',
      renderLogo: () => (
        <div className="flex items-center justify-center">
          <img
            src="/assets/aistudio/0_LOGO_SETTLEMENT-web_00f93c12.png"
            alt="Settlement Infrastructure"
            referrerPolicy="no-referrer"
            className="h-9 sm:h-10 w-auto max-w-[165px] object-contain"
          />
        </div>
      )
    },
    {
      id: 7,
      name: 'CAN Health Network',
      url: 'https://canhealthnetwork.ca',
      renderLogo: () => (
        <div className="flex items-center justify-center">
          <img
            src="/assets/aistudio/CAN-Health_Logo_10bf5fdd.png"
            alt="CAN Health Network"
            referrerPolicy="no-referrer"
            className="h-12 sm:h-14 w-auto max-w-[120px] object-contain"
          />
        </div>
      )
    }
  ];

  return (
    <section
      id="partnership"
      className="py-16 bg-white relative overflow-hidden border-t border-slate-100"
    >
      {/* Signature Site Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[45%] h-[55%] bg-emerald-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[45%] h-[55%] bg-blue-50/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title & Subtitle Matching Media / Company Sections */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Partners
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed w-full">
            Our growing partner ecosystem brings together technology providers, implementation experts, and strategic organizations to help enterprises turn fragmented data into connected, trusted intelligence.
          </p>
        </motion.div>

        {/* Smooth Continuous Moving Partner Logo Carousel — Pure Logos Only */}
        <div
          className="partner-marquee-viewport relative overflow-hidden py-3 mb-10"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)'
          }}
        >
          <div className="flex w-max animate-partner-marquee">
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                aria-hidden={copyIndex === 1 ? true : undefined}
                className="flex items-center gap-5 pr-5 shrink-0"
              >
                {partners.map((partner) => (
                  <div
                    key={`${copyIndex}-${partner.id}`}
                    className="relative w-[200px] sm:w-[220px] shrink-0 p-[1.5px] rounded-2xl bg-gradient-to-br from-slate-200/80 via-slate-100 to-slate-200/80 shadow-[0_6px_20px_rgba(15,23,42,0.03)] select-none"
                  >
                    <div className="bg-white rounded-[calc(1rem-1.5px)] h-24 px-5 flex items-center justify-center relative overflow-hidden">
                      <div>
                        {partner.renderLogo()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* High-Contrast Gradient CTA Banner with Signature Lime Accent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-gradient-to-r from-[#0f172a] via-[#1d4c6a] to-[#0f172a] p-7 sm:p-9 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -top-24 right-1/4 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                <Handshake className="w-6 h-6 text-[#99E866]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                  Want to partner with Data Bench?
                </h3>
                <p className="text-blue-100/80 text-sm sm:text-base mt-0.5">
                  Let&apos;s build the future of enterprise data together.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#99E866] text-[#0f172a] font-bold text-sm sm:text-base shadow-md whitespace-nowrap shrink-0">
              partnership@databench.co
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
