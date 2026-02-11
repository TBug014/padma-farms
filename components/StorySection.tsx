import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundMedia } from './BackgroundMedia';

export const StorySection: React.FC = () => {
  return (
    <section id="story-section" className="relative h-screen w-full snap-start flex items-center justify-center px-6 pt-32 pb-12 overflow-hidden bg-earth-900">
      <BackgroundMedia 
        imageUrl="/images/story.jpg" 
        alt="Forest mist"
        overlayOpacity={0.7}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center h-full flex flex-col justify-center">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="border-y border-white/10 py-12 md:py-20 backdrop-blur-sm bg-earth-900/20"
        >
            <span className="uppercase tracking-[0.3em] text-xs text-gold-400 mb-6 block font-medium">
            The Padma Standard
            </span>
            
            <h2 className="font-serif text-4xl md:text-6xl text-cream mb-10 leading-tight">
            Cultivating Value.<br />
            <span className="italic font-light text-white/90">Stewarding Nature.</span>
            </h2>

            <p className="font-sans font-light text-base md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4">
            We operate at the intersection of <span className="text-gold-400">ecological sustainability</span> and <span className="text-gold-400">economic vitality</span>. 
            PadmaFarms was founded on the belief that true wealth grows from the ground up. By professionalizing land management and developing long-term biological assets, we protect the earth while securing the future.
            <br/><br/>
            From soil regeneration to market realization, our integrated approach ensures that every acre thrives—delivering returns for our partners and resilience for our planet.
            </p>
        </motion.div>
      </div>
    </section>
  );
};