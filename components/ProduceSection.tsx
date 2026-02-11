import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundMedia } from './BackgroundMedia';
import { Sprout, Trees, HandCoins, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Land & Managed Farming",
    subtitle: "Asset Acquisition",
    icon: <Sprout className="w-5 h-5 md:w-8 md:h-8 text-gold-400" />,
    description: "We identify, acquire, and professionally manage agricultural land. Our focus is on long-term asset appreciation and operational efficiency.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Plantation Assets",
    subtitle: "5–10 Year Horizon",
    icon: <Trees className="w-5 h-5 md:w-8 md:h-8 text-gold-400" />,
    description: "Developing high-value assets like agarwood and timber. Designed for long-term capital growth and sustainable harvesting.",
    image: "/images/agar.jpg"
  },
  {
    id: 3,
    title: "Trading & Value",
    subtitle: "Market Realisation",
    icon: <HandCoins className="w-5 h-5 md:w-8 md:h-8 text-gold-400" />,
    description: "Structured trading of agricultural produce ensuring price discovery and timely value realisation for all stakeholders.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1200&auto=format&fit=crop"
  }
];

export const WhatWeDoSection: React.FC = () => {
  return (
    <section id="produce-section" className="relative h-screen w-full snap-start px-6 md:px-16 overflow-hidden flex flex-col pt-24 pb-4 md:pt-28 md:pb-12 bg-earth-900">
      <BackgroundMedia 
        imageUrl="/images/Rice.jpg" 
        alt="Agricultural Landscape"
        overlayOpacity={0.9}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col h-full">
        
        {/* Header - Fixed Height */}
        <div className="mb-4 md:mb-10 flex-shrink-0 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                <span className="inline-block py-1 px-3 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-gold-400 mb-2 md:mb-4 bg-white/5 backdrop-blur-md">
                    Core Operations
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-cream leading-tight">
                    What We <span className="text-gold-400 italic">Do</span>
                </h2>
                <div className="w-24 h-[1px] bg-gold-500 hidden md:block opacity-50 mt-4"></div>
            </motion.div>
        </div>

        {/* Content Area - Fills remaining space */}
        <div className="flex-1 min-h-0 w-full relative">
            {/* 
               Mobile: Horizontal Scroll Snap
               Desktop: Grid
            */}
            <div className="h-full w-full overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar flex md:grid md:grid-cols-3 gap-4 md:gap-6 pb-4 md:pb-0">
                
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="snap-center shrink-0 w-[85vw] md:w-auto h-full group relative flex flex-col justify-between overflow-hidden rounded-xl bg-earth-800 border border-white/5 hover:border-gold-500/50 transition-all duration-500"
                    >
                        {/* Background Image on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale" />
                        </div>

                        {/* Card Content */}
                        <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                            
                            {/* Top Part */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <span className="text-earth-600 font-serif text-4xl opacity-20 font-bold">0{service.id}</span>
                            </div>

                            {/* Middle Part (Scrollable text if needed) */}
                            <div className="flex-1 overflow-y-auto no-scrollbar pr-2">
                                <h3 className="font-serif text-2xl text-cream mb-2 group-hover:text-gold-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                {service.subtitle && (
                                    <span className="inline-block text-[10px] uppercase tracking-wider text-gold-400/80 mb-4 bg-black/20 px-2 py-1 rounded">
                                        {service.subtitle}
                                    </span>
                                )}
                                <p className="font-sans font-light text-white/70 text-sm leading-relaxed border-t border-white/10 pt-4 group-hover:border-gold-500/30 transition-colors">
                                    {service.description}
                                </p>
                            </div>

                            {/* Bottom Part */}
                            <div className="mt-4 pt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity">
                                <span>Learn More</span>
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Mobile Spacer to allow scrolling to the end */}
                <div className="md:hidden shrink-0 w-4"></div>
            </div>
        </div>

        {/* Mobile Page Indicator */}
        <div className="md:hidden flex justify-center gap-2 mt-2 h-4 shrink-0">
            {services.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
            ))}
        </div>
        
      </div>
    </section>
  );
};