import { useState } from 'react';
import HowItWorks from './components/sections/HowItWorks';
import Solution from './components/sections/Solution';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import WaitlistForm from './components/sections/WaitlistForm';

export default function App() {
  const [activeWaitlistTab, setActiveWaitlistTab] = useState<'sharp' | 'allocator'>('sharp');

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary selection:text-on-primary">
      <Header />
      <Hero onSelectWaitlistTab={setActiveWaitlistTab} />
      <Problem />
      <HowItWorks />
      <Solution />
      <WaitlistForm activeTab={activeWaitlistTab} onSelectWaitlistTab={setActiveWaitlistTab} />
      <FAQ />
      <FinalCTA onSelectWaitlistTab={setActiveWaitlistTab} />
      <Footer />
    </div>
  );
}
