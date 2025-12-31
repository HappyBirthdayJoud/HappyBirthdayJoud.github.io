import React from 'react';

const CatPawPrints: React.FC = () => {
  const paws = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    top: 10 + Math.random() * 80,
    left: Math.random() * 100,
    rotation: Math.random() * 360,
    size: 20 + Math.random() * 15,
    opacity: 0.1 + Math.random() * 0.15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {paws.map((paw) => (
        <svg
          key={paw.id}
          width={paw.size}
          height={paw.size}
          viewBox="0 0 100 100"
          className="absolute"
          style={{
            top: `${paw.top}%`,
            left: `${paw.left}%`,
            transform: `rotate(${paw.rotation}deg)`,
            opacity: paw.opacity,
          }}
          fill="hsl(350 80% 70%)"
        >
          {/* Main pad */}
          <ellipse cx="50" cy="65" rx="22" ry="20" />
          {/* Toe pads */}
          <ellipse cx="30" cy="35" rx="12" ry="14" />
          <ellipse cx="50" cy="28" rx="12" ry="14" />
          <ellipse cx="70" cy="35" rx="12" ry="14" />
        </svg>
      ))}
    </div>
  );
};

export default CatPawPrints;
