import React, { useState, useEffect } from 'react';
import KittyImage from './KittyImage';
import FloatingHearts from './FloatingHearts';
import CatPawPrints from './CatPawPrints';
import Sparkles from './Sparkles';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        onComplete();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const padNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden flex flex-col items-center justify-center">
      <FloatingHearts />
      <CatPawPrints />
      
      <div className="relative z-10 container mx-auto px-4 py-12 text-center">
        <Sparkles count={20} />
        
        {/* Decorative kitties */}
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
        
        {/* Main message */}
        <div className="mb-12 animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary mb-6 leading-tight">
            Hey Joud!
          </h1>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl text-accent leading-relaxed max-w-2xl mx-auto">
            It's not your birthday yet!
          </p>
          <p className="font-body text-xl md:text-2xl text-foreground/80 mt-4 font-medium">
            You must wait for the surprise! 🎀
          </p>
        </div>
        
        {/* Countdown boxes */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <div 
              key={item.label}
              className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-card border-4 border-kitty-light-pink p-4 md:p-6 min-w-[80px] md:min-w-[120px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-4xl md:text-6xl text-primary mb-2">
                {padNumber(item.value)}
              </div>
              <div className="font-body text-sm md:text-base text-foreground/70 font-semibold uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative hearts */}
        <div className="flex justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[...Array(7)].map((_, i) => (
            <svg
              key={i}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="hsl(350 90% 75%)"
              className="animate-pulse-soft"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ))}
        </div>
        
        {/* Bottom kitties */}
        <div className="mt-12 flex justify-center gap-6">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="animate-bounce-soft"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <KittyImage size="sm" variant={i % 2 === 0 ? 'bowtie' : 'face'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
