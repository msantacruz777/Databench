import React from 'react';

interface BenchLogoProps {
  className?: string;
  size?: number;
}

export const BenchLogo: React.FC<BenchLogoProps> = ({ className, size = 60 }) => {
  return (
    <svg 
      width={size} 
      height={(size * 0.8)} 
      viewBox="0 0 100 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Bench Surface */}
      <rect x="10" y="15" width="80" height="14" fill="currentColor" />
      
      {/* Left Leg (Brutalist Sharp) */}
      <path 
        d="M26 29L16 65H31L41 29H26Z" 
        fill="currentColor" 
      />
      
      {/* Right Leg (Brutalist Sharp) */}
      <path 
        d="M74 29L84 65H69L59 29H74Z" 
        fill="currentColor" 
      />
      
      {/* Crossbar */}
      <rect x="25" y="42" width="50" height="10" fill="currentColor" />
    </svg>
  );
};
