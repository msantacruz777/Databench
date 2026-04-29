import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Layers, Shield, CheckCircle2 } from 'lucide-react';

export const PlatformVisualization = () => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-slate-50/50 rounded-3xl p-8 md:p-12 border border-slate-100 overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10">
        {/* Main: Enterprise Data Platform Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 p-8 md:p-12"
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">Enterprise Data Platform</h4>
              <p className="text-slate-500 text-sm">Centralized intelligence and governance across your data ecosystem</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Platform Active
            </div>
          </div>
          
          <div className="relative h-64 md:h-80 w-full">
            {/* Simple SVG Chart */}
            <svg viewBox="0 0 800 240" className="w-full h-full overflow-visible">
              <path 
                d="M0 180 Q 100 170 200 140 T 400 80 T 600 160 T 800 60" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="4"
                strokeLinecap="round"
                className="drop-shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
              />
              <path 
                d="M0 180 Q 100 170 200 140 T 400 80 T 600 160 T 800 60 V 240 H 0 Z" 
                fill="url(#chart-gradient)" 
                className="opacity-10"
              />
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Highlight Point */}
              <circle cx="450" cy="100" r="6" fill="#10b981" />
              <g className="translate-x-[420] -translate-y-[40]">
                <rect width="60" height="24" rx="12" fill="#10b981" />
                <text x="30" y="16" textAnchor="middle" fill="white" className="text-[10px] font-bold">1.78%</text>
              </g>
            </svg>
            
            {/* X-Axis Labels */}
            <div className="flex justify-between mt-8 text-[11px] font-bold text-slate-300 tracking-[0.2em] uppercase">
              <span>Metric Baseline</span>
              <span>Intelligent Ingestion</span>
              <span>Contextual Mapping</span>
              <span>Semantic Enrichment</span>
              <span>Platform Delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
