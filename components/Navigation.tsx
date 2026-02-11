import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavigationProps {
  containerRef: React.RefObject<HTMLElement>;
}

export const Navigation: React.FC<NavigationProps> = ({ containerRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Use the containerRef to track scroll inside the <main> tag instead of the window
  const { scrollY } = useScroll({ container: containerRef });
  
  // Transform logo visibility based on scroll (values adjusted for container scroll)
  const logoTextOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const logoTextX = useTransform(scrollY, [0, 100], [0, -20]);
  const navBackgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    // Small delay to allow menu closing animation to start
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 500);
  };

  const menuItems = [
    { title: "Home", id: "hero-section", subtitle: "01" },
    { title: "What We Do", id: "produce-section", subtitle: "02" },
    { title: "Our Story", id: "story-section", subtitle: "03" },
    { title: "Contact", id: "contact-section", subtitle: "04" },
  ];

  return (
    <>
      {/* Fixed Header with adaptive styling */}
      <motion.nav 
        className="fixed top-0 left-0 w-full z-40 px-6 py-4 md:px-12 md:py-6 flex justify-between items-start pointer-events-none transition-colors duration-500 h-24"
      >
        {/* Gradient backdrop for readability when scrolled */}
        <motion.div 
            style={{ opacity: navBackgroundOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-earth-900/90 to-transparent pointer-events-none"
        />

        {/* Logo Container */}
        <div 
            className="relative z-10 flex items-center gap-4 cursor-pointer pointer-events-auto text-cream mix-blend-difference" 
            onClick={() => scrollToSection('hero-section')}
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-cream/30 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-gold-400">
             <span className="font-serif italic font-bold text-lg pt-1 text-gold-400">P</span>
          </div>
          
          {/* Text that fades out on scroll to prevent overlap */}
          <motion.div 
            style={{ opacity: logoTextOpacity, x: logoTextX }}
            className="hidden md:flex flex-col"
          >
            <span className="font-serif text-lg tracking-widest text-cream leading-none">PADMAFARMS</span>
            <span className="font-sans text-[10px] tracking-[0.3em] text-gold-400/80 uppercase mt-1">Pure Earth</span>
          </motion.div>
        </div>

        {/* Menu Button */}
        <div className="relative z-10 pointer-events-auto">
          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 text-cream mix-blend-difference focus:outline-none"
            aria-label="Open Menu"
          >
            <span className="hidden md:block text-xs uppercase tracking-[0.2em] font-medium group-hover:text-gold-400 transition-colors">Menu</span>
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-cream/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-cream group-hover:text-earth-900 transition-all duration-300">
               <Menu className="w-5 h-5" />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-earth-900 flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 md:top-8 md:right-12 z-[70] group flex items-center gap-3 text-cream"
            >
                <span className="hidden md:block text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Close</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-earth-900 transition-all duration-300">
                    <X className="w-5 h-5" />
                </div>
            </button>

            {/* Left Image Side (Desktop) */}
            <div className="hidden md:block w-1/2 h-full relative overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop" 
                        alt="Menu Atmosphere" 
                        className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-earth-900/40 mix-blend-multiply" />
                </motion.div>
                
                <div className="absolute bottom-12 left-12 z-20">
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="font-serif text-4xl text-cream mb-2"
                    >
                        The Earth Awaits.
                    </motion.p>
                </div>
            </div>

            {/* Right Content Side */}
            <div className="flex-1 h-full flex flex-col justify-center px-8 md:px-24 relative bg-earth-900">
                <nav className="flex flex-col gap-6 md:gap-8">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + (index * 0.1), duration: 0.6, ease: "easeOut" }}
                            className="group cursor-pointer relative"
                            onClick={() => scrollToSection(item.id)}
                        >
                            <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-xs text-gold-500 font-sans tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                {item.subtitle}
                            </span>
                            <div className="flex items-center justify-between border-b border-white/10 pb-4 group-hover:border-gold-500/50 transition-colors duration-500">
                                <span className="font-serif text-3xl md:text-5xl text-white/40 group-hover:text-cream transition-colors duration-300">
                                    {item.title}
                                </span>
                                <ArrowRight className="w-5 h-5 text-gold-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </nav>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-12 flex justify-between text-white/40 text-xs tracking-widest uppercase font-sans"
                >
                   <a href="#" className="hover:text-gold-400 transition-colors">Instagram</a>
                   <a href="#" className="hover:text-gold-400 transition-colors">Facebook</a>
                   <a href="#" className="hover:text-gold-400 transition-colors">Email Us</a>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};