import React, { useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { WhatWeDoSection } from './components/ProduceSection';
import { StorySection } from './components/StorySection';
import { ContactSection } from './components/ContactSection';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  return (
    <main ref={containerRef} className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar relative">
      <Navigation containerRef={containerRef} />
      <HeroSection />
      <WhatWeDoSection />
      <StorySection />
      <ContactSection />
    </main>
  );
};

export default App;