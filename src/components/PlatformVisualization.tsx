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
      
      <div className="relative z-10 grid gap-8">
        {/* Top: Enterprise Data Platform Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-bold text-slate-800">Enterprise Data Platform</h4>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active
            </div>
          </div>
          
          <div className="relative h-48 w-full">
            {/* Simple SVG Chart */}
            <svg viewBox="0 0 800 200" className="w-full h-full overflow-visible">
              <path 
                d="M0 160 Q 100 150 200 120 T 400 60 T 600 140 T 800 40" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="4"
                strokeLinecap="round"
                className="drop-shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
              />
              <path 
                d="M0 160 Q 100 150 200 120 T 400 60 T 600 140 T 800 40 V 200 H 0 Z" 
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
              <circle cx="450" cy="75" r="5" fill="#10b981" />
              <g className="translate-x-[420] -translate-y-[20]">
                <rect width="60" height="24" rx="12" fill="#10b981" />
                <text x="30" y="16" textAnchor="middle" fill="white" className="text-[10px] font-bold">1.78%</text>
              </g>
            </svg>
            
            {/* X-Axis Labels */}
            <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-300 tracking-wider">
              <span>1004</span>
              <span>1005</span>
              <span>1006</span>
              <span>1007</span>
              <span>1008</span>
              <span>1009</span>
            </div>
          </div>
        </motion.div>
 
        {/* Bottom: Split Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Semantic Ontology */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-slate-800">Semantic Ontology</h4>
              <Layers className="w-4 h-4 text-slate-300" />
            </div>
            <div className="relative h-48 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center">
              {/* Simple Node Graph Mockup */}
              <div className="absolute inset-0 p-4 opacity-40">
                <svg width="100%" height="100%" viewBox="0 0 200 100">
                  <line x1="40" y1="30" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="160" y1="30" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="40" y1="70" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="160" y1="70" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                  <circle cx="40" cy="30" r="4" fill="#10b981" />
                  <circle cx="160" cy="30" r="4" fill="#3b82f6" />
                  <circle cx="100" cy="50" r="6" fill="#0f172a" />
                  <circle cx="40" cy="70" r="4" fill="#3b82f6" />
                  <circle cx="160" cy="70" r="4" fill="#10b981" />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100 text-[10px] font-bold text-slate-600">
                  Use Case
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-white rounded-lg shadow-sm border border-slate-100 text-[10px] font-bold text-slate-600">Product</div>
                  <div className="px-3 py-1 bg-white rounded-lg shadow-sm border border-slate-100 text-[10px] font-bold text-slate-600">Order</div>
                </div>
              </div>
            </div>
          </motion.div>
 
          {/* Right: Data Governance */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-slate-800">Data Governance</h4>
              <Shield className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="space-y-4">
              {[
                { name: 'Use Case', status: 'Compliant', icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> },
                { name: 'Product', status: '34 Sources', icon: <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /></div> },
                { name: 'Order', status: '12 Active', icon: <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /></div> },
                { name: 'Retention', status: 'Review', icon: <div className="w-3.5 h-3.5 rounded-full bg-red-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /></div> },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between text-[11px] font-medium p-2 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50 last:border-0">
                  <span className="text-slate-600 font-bold">{row.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">{row.status}</span>
                    {row.icon}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
