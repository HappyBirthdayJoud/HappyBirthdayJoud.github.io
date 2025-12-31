import React, { useState } from 'react';
import KittyImage from '@/components/KittyImage';
import FloatingHearts from '@/components/FloatingHearts';
import Sparkles from '@/components/Sparkles';
import BirthdayMessage from '@/components/BirthdayMessage';
import CatPawPrints from '@/components/CatPawPrints';
import BirthdayCake from '@/components/BirthdayCake';
import CountdownTimer from '@/components/CountdownTimer';

const Index: React.FC = () => {
  // Target date: January 1, 2026
  const targetDate = new Date('2026-01-01T00:00:00');
  const [showBirthday, setShowBirthday] = useState(new Date() >= targetDate);

  const handleCountdownComplete = () => {
    setShowBirthday(true);
  };

  // Show countdown if birthday hasn't arrived yet
  if (!showBirthday) {
    return <CountdownTimer targetDate={targetDate} onComplete={handleCountdownComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <FloatingHearts />
      <CatPawPrints />
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-12 md:mb-16 relative">
          <Sparkles count={30} />
          
          {/* Decorative kitties row */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <KittyImage size="lg" variant="face" />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <KittyImage size="xl" variant="bowtie" />
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <KittyImage size="lg" variant="face" />
            </div>
          </div>
          
          {/* Main greeting */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary mb-4 animate-fade-in">
            Hello Joud!!!
          </h1>
          
          <div className="flex justify-center items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="text-3xl">🎀</span>
            <h2 className="font-display text-3xl md:text-4xl text-accent">
              Happy Birthday!
            </h2>
            <span className="text-3xl">🎀</span>
          </div>
          
          {/* Cake */}
          <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <BirthdayCake />
          </div>
        </header>
        
        {/* Message Section */}
        <main className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <BirthdayMessage />
        </main>
        
        {/* Bottom decoration */}
        <footer className="mt-16 flex justify-center gap-6">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="animate-bounce-soft"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <KittyImage size="sm" variant={i % 2 === 0 ? 'bowtie' : 'face'} />
            </div>
          ))}
        </footer>
        
        {/* Extra cute hearts row */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(7)].map((_, i) => (
            <svg
              key={i}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="hsl(350 90% 75%)"
              className="animate-pulse-soft"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
