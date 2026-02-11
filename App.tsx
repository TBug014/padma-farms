import React from 'react';
import { HeroSection } from './components/HeroSection';
import { WhatWeDoSection } from './components/ProduceSection';
import { StorySection } from './components/StorySection';
import { ContactSection } from './components/ContactSection';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar relative">
      <Navigation />
      <HeroSection />
      <WhatWeDoSection />
      <StorySection />
      <ContactSection />
    </main>
  );
};

export default App;