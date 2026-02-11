import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundMedia } from './BackgroundMedia';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="relative h-screen w-full snap-start flex items-center justify-center text-center px-4 overflow-hidden">
      <BackgroundMedia 
        imageUrl="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
        alt="Expansive managed farmland at golden hour"
        overlayOpacity={0.5}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-10 md:pt-20">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
        >
            <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-400 mb-8 backdrop-blur-sm bg-black/20">
            Est. 2026 • Managed Agriculture
            </span>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] mb-8 text-cream drop-shadow-2xl">
            From our soil<br />
            <span className="italic text-gold-400 font-light">to your soul.</span>
            </h1>

            <p className="font-sans font-light text-base md:text-lg text-white/90 tracking-wide max-w-xl leading-relaxed mix-blend-screen px-6">
            Bridging the gap between nature and capital. We identify, acquire, and manage high-value agricultural assets for long-term appreciation and sustainable growth.
            </p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => {
          const nextSection = document.getElementById('produce-section');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400/80 animate-pulse">Explore Operations</span>
        <div className="w-[1px] h-.5 bg-gradient-to-b from-transparent via-gold-400 to-transparent opacity-80" />
      </motion.div>
    </section>
  );
};