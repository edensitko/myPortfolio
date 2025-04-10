'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type OptimizedImageProps = Omit<ImageProps, 'src'> & {
  src: string | { src: string };
};

export default function OptimizedImage({ src, alt, width, height, className, ...props }: OptimizedImageProps) {
  const [isError, setIsError] = useState(false);
  
  // Handle both string paths and imported image objects
  const imageSrc = typeof src === 'string' ? src : src.src;
  
  // For Firebase hosting, ensure the path is correct by removing the leading slash
  // This is critical for static exports to Firebase
  const adjustedSrc = imageSrc.startsWith('/') 
    ? imageSrc.substring(1) // Remove the leading slash for Firebase hosting
    : imageSrc;
  
  if (isError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className || ''}`}
        style={{ width, height }}
      >
        <span className="text-gray-500">Image not found</span>
      </div>
    );
  }

  return (
    <Image
      src={adjustedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
      onError={() => setIsError(true)}
    />
  );
}
