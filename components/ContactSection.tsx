import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Building2, Send, Instagram, Facebook, Linkedin } from 'lucide-react';
import { BackgroundMedia } from './BackgroundMedia';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="relative h-screen w-full snap-start flex flex-col px-6 pt-24 pb-4 overflow-hidden bg-earth-900">
      <BackgroundMedia 
        imageUrl="https://images.unsplash.com/photo-1472120435266-53113306c243?q=80&w=1920&auto=format&fit=crop" 
        alt="Evening fields"
        overlayOpacity={0.85}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col h-full">
        
        {/* Header - Fixed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-10 flex-shrink-0"
        >
          <span className="text-gold-400 uppercase tracking-widest text-xs mb-2 block">Partnership</span>
          <h2 className="font-serif text-3xl md:text-5xl text-cream">Connect With Us</h2>
        </motion.div>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
            
                {/* Left Column: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-6 md:gap-8"
                >
                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold-400 transition-colors">
                                <MapPin className="w-4 h-4 text-gold-400" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg text-cream mb-1">Address</h3>
                                <p className="font-sans text-white/60 text-sm leading-relaxed">
                                    Merapani<br/>
                                    Golaghat Assam, 785705
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold-400 transition-colors">
                                <Phone className="w-4 h-4 text-gold-400" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg text-cream mb-1">Inquiries</h3>
                                <p className="font-sans text-white/60 text-sm hover:text-white transition-colors cursor-pointer">abc@padmafarms.com</p>
                                <p className="font-sans text-white/60 text-sm hover:text-white transition-colors cursor-pointer">+91 8447166759</p>
                            </div>
                        </div>
                    </div>

                    {/* Office Hours - Hidden on small mobile to save space, visible on larger */}
                    <div className="hidden md:block p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="w-5 h-5 text-gold-400" />
                            <h3 className="font-serif text-lg text-cream">Hours</h3>
                        </div>
                        <div className="space-y-2 font-sans text-sm text-white/70">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Mon — Sun</span>
                                <span className="text-cream">9:00 AM — 10:00 PM</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-earth-900/60 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl mb-8"
                >
                    <h3 className="font-serif text-xl text-cream mb-4">Investment Inquiry</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] uppercase tracking-widest text-white/50 font-medium">Name</label>
                                <input type="text" className="bg-white/5 border-b border-white/20 px-3 py-2 focus:outline-none focus:border-gold-400 transition-colors text-cream placeholder-white/20 text-sm" placeholder="Name" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] uppercase tracking-widest text-white/50 font-medium">Email</label>
                                <input type="email" className="bg-white/5 border-b border-white/20 px-3 py-2 focus:outline-none focus:border-gold-400 transition-colors text-cream placeholder-white/20 text-sm" placeholder="Email" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[10px] uppercase tracking-widest text-white/50 font-medium">Topic</label>
                            <select className="bg-white/5 border-b border-white/20 px-3 py-2 focus:outline-none focus:border-gold-400 transition-colors text-cream text-sm">
                                <option className="bg-earth-900">Land Acquisition</option>
                                <option className="bg-earth-900">Plantation Investment</option>
                                <option className="bg-earth-900">General</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[10px] uppercase tracking-widest text-white/50 font-medium">Message</label>
                            <textarea rows={2} className="bg-white/5 border-b border-white/20 px-3 py-2 focus:outline-none focus:border-gold-400 transition-colors text-cream placeholder-white/20 text-sm resize-none" placeholder="Details..."></textarea>
                        </div>
                        
                        <div className="pt-2">
                            <button type="button" className="w-full md:w-auto flex justify-center items-center gap-2 bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 px-6 py-3 rounded-full border border-gold-500/50 hover:border-gold-500 transition-all duration-300">
                                <span className="uppercase tracking-widest text-xs font-medium">Send</span>
                                <Send className="w-3 h-3" />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>

            {/* Footer inside scroll area */}
            <div className="border-t border-white/10 pt-6 mt-4 flex flex-col md:flex-row justify-between items-center w-full pb-8">
                <p className="font-sans text-white/30 text-xs mb-4 md:mb-0">© {new Date().getFullYear()} PadmaFarms.</p>
                <div className="flex gap-6">
                    <a href="#" className="text-white/50 hover:text-gold-400 transition-colors"><Instagram className="w-4 h-4" /></a>
                    <a href="#" className="text-white/50 hover:text-gold-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" className="text-white/50 hover:text-gold-400 transition-colors"><Facebook className="w-4 h-4" /></a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};