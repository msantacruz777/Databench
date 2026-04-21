import React, { useState } from 'react';
import { cn } from '../lib/utils';

export const Logo = ({ className, invert = false }: { className?: string; invert?: boolean }) => {
  const [error, setError] = useState(false);
  // Using the local logo asset from the public folder
  const logoUrl = "/logo.png";

  if (error) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <span className={cn(
          "font-sans font-bold text-2xl tracking-tighter leading-none transition-colors",
          invert ? "text-white" : "text-[#1d4c6a]"
        )}>
          data bench
        </span>
        <div className="w-8 h-8 rounded-lg bg-[#96e32d] flex-shrink-0 flex items-center justify-center p-1.5 shadow-sm transform rotate-[-2deg]">
           <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1d4c6a]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
             <rect x="4" y="10" width="16" height="4" rx="1" />
             <path d="M6 14v4M18 14v4M10 14V11M14 14V11" />
           </svg>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={logoUrl} 
      alt="data bench" 
      className={cn("object-contain transition-all h-14 w-auto", className, invert && "brightness-0 invert opacity-90")}
      onError={() => {
        console.warn("Logo image failed to load, falling back to styled SVG logo.");
        setError(true);
      }}
      referrerPolicy="no-referrer"
    />
  );
};
