import React from 'react';
import helloKittyFace from '@/assets/hello-kitty-face.png';
import helloKittyBowtie from '@/assets/hello-kitty-bowtie.png';

interface KittyImageProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'face' | 'bowtie';
  className?: string;
}

const sizeMap = {
  sm: 40,
  md: 60,
  lg: 100,
  xl: 150,
};

const KittyImage: React.FC<KittyImageProps> = ({ 
  size = 'md', 
  variant = 'face',
  className = '' 
}) => {
  const s = sizeMap[size];
  const imageSrc = variant === 'face' ? helloKittyFace : helloKittyBowtie;
  
  return (
    <img 
      src={imageSrc} 
      alt="Hello Kitty"
      width={s}
      height={s}
      className={`object-contain ${className}`}
      style={{ width: s, height: s }}
    />
  );
};

export default KittyImage;
