import React from 'react';
import KittyImage from './KittyImage';

const BirthdayMessage: React.FC = () => {
  return (
    <div className="relative bg-card rounded-3xl shadow-card p-8 md:p-12 max-w-3xl mx-auto border-4 border-kitty-light-pink">
      {/* Decorative kitties */}
      <div className="absolute -top-8 -left-4 animate-wiggle">
        <KittyImage size="md" variant="face" />
      </div>
      <div className="absolute -top-8 -right-4 animate-wiggle" style={{ animationDelay: '0.5s' }}>
        <KittyImage size="md" variant="face" />
      </div>
      
      {/* Message content */}
      <div className="text-center space-y-6 pt-6">
        <p className="text-lg md:text-xl leading-relaxed text-foreground font-body font-medium">
          I just wanna say, <span className="text-primary font-bold">happy birthday!!!!</span> You're really one of the best people I've met this year. I can't express how grateful I am to have you in my life.
        </p>
        
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-gradient-pink rounded-full" />
        </div>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground font-body font-medium">
          You've been there for me when no one remembered my birthday, even though I only met you for a few months. We made such <span className="text-primary font-bold">unforgettable memories</span> that I will keep remembering for the rest of my life.
        </p>
        
        <div className="flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <svg
              key={i}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="hsl(350 90% 70%)"
              className="animate-pulse-soft"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ))}
        </div>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground font-body font-medium">
          You sometimes think you're annoying me, but in reality, <span className="text-primary font-bold">I like it</span> because you're very fun and caring.
        </p>
        
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-gradient-pink rounded-full" />
        </div>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground font-body font-medium">
          On this special day, your birthday, I wish you all <span className="text-accent font-bold">love</span>, <span className="text-kitty-nose font-bold">joy</span>, and <span className="text-primary font-bold">happiness</span> in this world. You deserve it for being such a wonderful friend.
        </p>
        
        {/* Signature */}
        <div className="pt-6 flex flex-col items-center gap-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="hsl(350 90% 70%)"
                className="animate-bounce-soft"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ))}
          </div>
          <p className="font-display text-2xl text-primary">With love, forever</p>
        </div>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <KittyImage size="lg" variant="bowtie" />
      </div>
    </div>
  );
};

export default BirthdayMessage;
