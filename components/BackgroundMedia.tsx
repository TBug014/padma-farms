import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundMediaProps {
  imageUrl?: string;
  videoUrl?: string;
  alt: string;
  overlayOpacity?: number;
}

// Simulates a slow cinematic pan/zoom since we are using images instead of heavy video files for the demo
export const BackgroundMedia: React.FC<BackgroundMediaProps> = ({ 
  imageUrl, 
  videoUrl,
  alt, 
  overlayOpacity = 0.4 
}) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        {videoUrl ? (
          <video 
            src={videoUrl} 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          imageUrl && (
            <img 
              src={imageUrl} 
              alt={alt}
              className="w-full h-full object-cover"
            />
          )
        )}
      </motion.div>
      <div 
        className="absolute inset-0 bg-earth-900" 
        style={{ opacity: overlayOpacity }} 
      />
      {/* Texture Overlay for organic feel */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }}>
      </div>
    </div>
  );
};