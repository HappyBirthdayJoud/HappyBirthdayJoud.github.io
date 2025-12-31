import React from 'react';

const BirthdayCake: React.FC = () => {
  return (
    <svg width="120" height="140" viewBox="0 0 120 140" fill="none" className="mx-auto">
      {/* Candle flames */}
      <ellipse cx="40" cy="15" rx="5" ry="10" fill="hsl(45 100% 60%)" className="animate-pulse-soft" />
      <ellipse cx="60" cy="15" rx="5" ry="10" fill="hsl(45 100% 60%)" className="animate-pulse-soft" style={{ animationDelay: '0.2s' }} />
      <ellipse cx="80" cy="15" rx="5" ry="10" fill="hsl(45 100% 60%)" className="animate-pulse-soft" style={{ animationDelay: '0.4s' }} />
      
      {/* Candles */}
      <rect x="37" y="20" width="6" height="25" rx="2" fill="hsl(350 80% 75%)" />
      <rect x="57" y="20" width="6" height="25" rx="2" fill="hsl(200 80% 75%)" />
      <rect x="77" y="20" width="6" height="25" rx="2" fill="hsl(350 80% 75%)" />
      
      {/* Cake top layer */}
      <rect x="20" y="45" width="80" height="30" rx="5" fill="hsl(350 60% 92%)" />
      <rect x="20" y="45" width="80" height="10" rx="5" fill="hsl(0 0% 100%)" />
      
      {/* Cake middle layer */}
      <rect x="10" y="75" width="100" height="30" rx="5" fill="hsl(350 80% 85%)" />
      <rect x="10" y="75" width="100" height="10" rx="5" fill="hsl(350 60% 92%)" />
      
      {/* Cake bottom layer */}
      <rect x="5" y="105" width="110" height="30" rx="5" fill="hsl(350 80% 75%)" />
      <rect x="5" y="105" width="110" height="10" rx="5" fill="hsl(350 80% 85%)" />
      
      {/* Decorations - hearts */}
      <path d="M35 90 l-3-3 a2.5 2.5 0 0 1 3-4 a2.5 2.5 0 0 1 3 4 l-3 3z" fill="hsl(0 85% 60%)" />
      <path d="M60 90 l-3-3 a2.5 2.5 0 0 1 3-4 a2.5 2.5 0 0 1 3 4 l-3 3z" fill="hsl(0 85% 60%)" />
      <path d="M85 90 l-3-3 a2.5 2.5 0 0 1 3-4 a2.5 2.5 0 0 1 3 4 l-3 3z" fill="hsl(0 85% 60%)" />
      
      {/* Decorations on bottom layer */}
      <circle cx="25" cy="120" r="4" fill="hsl(0 0% 100%)" />
      <circle cx="45" cy="120" r="4" fill="hsl(0 0% 100%)" />
      <circle cx="65" cy="120" r="4" fill="hsl(0 0% 100%)" />
      <circle cx="85" cy="120" r="4" fill="hsl(0 0% 100%)" />
      <circle cx="100" cy="120" r="4" fill="hsl(0 0% 100%)" />
    </svg>
  );
};

export default BirthdayCake;
