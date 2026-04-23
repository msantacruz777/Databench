import React from 'react';

interface BenchLogoProps {
  className?: string;
  size?: number;
}

export const BenchLogo: React.FC<BenchLogoProps> = ({ className, size = 40 }) => {
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
      <rect x="10" y="15" width="80" height="14" rx="7" fill="currentColor" />
      
      {/* Left Leg (Slanted) */}
      <path 
        d="M26 29L16 68C15.5 70 17 72 19 72H31C33 72 34.5 71 35 69L41 29H26Z" 
        fill="currentColor" 
      />
      
      {/* Right Leg (Slanted) */}
      <path 
        d="M74 29L84 68C84.5 70 83 72 81 72H69C67 72 65.5 71 65 69L59 29H74Z" 
        fill="currentColor" 
      />
      
      {/* Crossbar */}
      <rect x="25" y="44" width="50" height="10" rx="5" fill="currentColor" />
    </svg>
  );
};
