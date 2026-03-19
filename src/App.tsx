import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Banknote, 
  Lock, 
  EyeOff, 
  Network, 
  Activity, 
  Shield, 
  Zap, 
  Plus, 
  Minus,
  Twitter,
  Disc as Discord
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white font-headline">
          <LogoIcon className="h-8 w-8" />
          HYPERSHARPS
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <a href="#sharps" className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 uppercase text-sm tracking-widest">For Sharps</a>
          <a href="#allocators" className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 uppercase text-sm tracking-widest">For Allocators</a>
        </div>
        <button className="bg-primary text-on-primary px-5 py-2 font-headline font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all">
          Selective Early Access
        </button>
      </div>
    </nav>
  );
};

const LogoIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
    <rect width="800" height="800" style={{ strokeWidth: '0px', fill: 'rgb(214, 214, 214)', stroke: 'rgb(214, 214, 214)' }} id="object-0"></rect>
    <g transform="matrix(1.056339, 0.283045, -0.283045, 1.056339, 99.999962, 99.99987)" style={{ transformOrigin: '300px 300px' }}>
      <g style={{ transformOrigin: '300px 300px' }} transform="matrix(0.866025, 0.5, -0.5, 0.866025, 0.000019, 0.000027)">
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '318.485px 311.856px', strokeWidth: '1.82882px' }} d="M 308.404 -7.648 C 306.521 -8.084 325.307 217.629 345.39 229.53 L 308.405 292.346 L 308.404 -7.648 Z" transform="matrix(0.866026, -0.5, 0.5, 0.866026, 0.000088, 0.000078)"></path>
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '300px 300px', strokeWidth: '1.82882px' }} d="M 299.999 599.994 C 298.116 600.43 316.902 374.717 336.985 362.816 L 300 300 L 299.999 599.994 Z" transform="matrix(-0.866025, 0.500001, -0.500001, -0.866025, -0.000001, 0.000011)"></path>
      </g>
      <g style={{ transformOrigin: '300px 300px' }} transform="matrix(0, 1, -1, 0, -0.00002, 0.00001)">
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '318.485px 311.856px', strokeWidth: '1.82882px' }} d="M 308.404 -7.648 C 306.521 -8.084 325.307 217.629 345.39 229.53 L 308.405 292.346 L 308.404 -7.648 Z" transform="matrix(0.866026, -0.5, 0.5, 0.866026, 0.000088, 0.000078)"></path>
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '300px 300px', strokeWidth: '1.82882px' }} d="M 299.999 599.994 C 298.116 600.43 316.902 374.717 336.985 362.816 L 300 300 L 299.999 599.994 Z" transform="matrix(-0.866025, 0.500001, -0.500001, -0.866025, -0.000001, 0.000011)"></path>
      </g>
      <g style={{ transformOrigin: '300px 300px' }} transform="matrix(-0.866025, 0.5, -0.5, -0.866025, 0.000008, 0.000047)">
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '318.485px 311.856px', strokeWidth: '1.82882px' }} d="M 308.404 -7.648 C 306.521 -8.084 325.307 217.629 345.39 229.53 L 308.405 292.346 L 308.404 -7.648 Z" transform="matrix(0.866026, -0.5, 0.5, 0.866026, 0.000088, 0.000078)"></path>
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '300px 300px', strokeWidth: '1.82882px' }} d="M 299.999 599.994 C 298.116 600.43 316.902 374.717 336.985 362.816 L 300 300 L 299.999 599.994 Z" transform="matrix(-0.866025, 0.500001, -0.500001, -0.866025, -0.000001, 0.000011)"></path>
      </g>
      <g style={{ transformOrigin: '300px 300px' }} transform="matrix(0.866025, -0.5, 0.5, 0.866025, 0.0001, 0.000145)">
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '318.485px 311.856px', strokeWidth: '1.82882px' }} d="M 308.404 -7.648 C 306.521 -8.084 325.307 217.629 345.39 229.53 L 308.405 292.346 L 308.404 -7.648 Z" transform="matrix(0.866026, -0.5, 0.5, 0.866026, 0.000088, 0.000078)"></path>
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '300px 300px', strokeWidth: '1.82882px' }} d="M 299.999 599.994 C 298.116 600.43 316.902 374.717 336.985 362.816 L 300 300 L 299.999 599.994 Z" transform="matrix(-0.866025, 0.500001, -0.500001, -0.866025, -0.000001, 0.000011)"></path>
      </g>
      <g style={{ transformOrigin: '300px 300px' }} transform="matrix(0, -1, 1, 0, 0.000075, 0.000143)">
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '318.485px 311.856px', strokeWidth: '1.82882px' }} d="M 308.404 -7.648 C 306.521 -8.084 325.307 217.629 345.39 229.53 L 308.405 292.346 L 308.404 -7.648 Z" transform="matrix(0.866026, -0.5, 0.5, 0.866026, 0.000088, 0.000078)"></path>
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '300px 300px', strokeWidth: '1.82882px' }} d="M 299.999 599.994 C 298.116 600.43 316.902 374.717 336.985 362.816 L 300 300 L 299.999 599.994 Z" transform="matrix(-0.866025, 0.500001, -0.500001, -0.866025, -0.000001, 0.000011)"></path>
      </g>
      <g style={{ transformOrigin: '300px 300px' }} transform="matrix(-0.866025, -0.5, 0.5, -0.866025, 0.000106, 0.000145)">
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '318.485px 311.856px', strokeWidth: '1.82882px' }} d="M 308.404 -7.648 C 306.521 -8.084 325.307 217.629 345.39 229.53 L 308.405 292.346 L 308.404 -7.648 Z" transform="matrix(0.866026, -0.5, 0.5, 0.866026, 0.000088, 0.000078)"></path>
        <path style={{ stroke: 'rgb(0, 0, 0)', transformOrigin: '300px 300px', strokeWidth: '1.82882px' }} d="M 299.999 599.994 C 298.116 600.43 316.902 374.717 336.985 362.816 L 300 300 L 299.999 599.994 Z" transform="matrix(-0.866025, 0.500001, -0.500001, -0.866025, -0.000001, 0.000011)"></path>
      </g>
      <path style={{ fill: 'rgba(216, 216, 216, 0)', strokeLinecap: 'round', strokeWidth: '14.6305px', transformBox: 'fill-box', transformOrigin: '50% 50%', stroke: 'rgb(214, 214, 214)' }} d="M 250.261 359.153 C 246.094 359.187 299.734 356.042 348.491 385.346" transform="matrix(0.965926, -0.258819, 0.258819, 0.965926, -0.159069, 0.028088)"></path>
      <path style={{ fill: 'rgba(216, 216, 216, 0)', strokeLinecap: 'round', strokeWidth: '14.631', transformOrigin: '300px 300px', stroke: 'rgb(214, 214, 214)' }} d="M 231.437 356.487 C 227.27 356.521 280.91 353.376 329.667 382.68" transform="matrix(-0.707107, -0.707107, 0.707107, -0.707107, -0.000072, -0.000044)"></path>
      <path style={{ fill: 'rgba(216, 216, 216, 0)', strokeLinecap: 'round', strokeWidth: '14.631', transformOrigin: '300px 300px', stroke: 'rgb(214, 214, 214)' }} d="M 231.437 356.487 C 227.27 356.521 280.91 353.376 329.667 382.68" transform="matrix(-0.258819, 0.965926, -0.965926, -0.258819, -0.000064, 0.000034)"></path>
    </g>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 z-10"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-headline font-bold tracking-tighter mb-8 leading-[0.85] uppercase">
            Where <span className="text-primary italic">Sharps</span> Scale
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-12 leading-tight font-light uppercase">
            Sovereign infrastructure connecting elite prediction market traders with institutional-grade capital allocators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-primary text-on-primary px-10 py-5 font-headline font-bold text-lg uppercase tracking-tighter hover:brightness-110 transition-all kinetic-glow">
              Apply as a Sharp
            </button>
            <button className="border border-secondary/20 text-secondary px-10 py-5 font-headline font-bold text-lg uppercase tracking-tighter hover:bg-secondary/5 transition-all">
              Join as an Allocator
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <p className="text-[10px] font-label text-on-surface-variant tracking-[0.4em] uppercase">
              System Status: Initializing Early Access Protocol
            </p>
          </div>
        </motion.div>
        
        <div className="lg:col-span-5 relative">
          <div className="aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px]"></div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full relative"
            >
              <svg className="w-full h-full opacity-30" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="120" fill="none" stroke="#D6D6D6" strokeDasharray="1 10" strokeWidth="0.1" />
                <circle cx="200" cy="200" r="80" fill="none" stroke="#AEE63D" strokeDasharray="5 5" strokeWidth="0.1" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border border-primary/20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary shadow-[0_0_10px_#AEE63D]"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      icon: <Lock className="text-primary w-12 h-12 font-light" />,
      title: "Capital Constraint",
      desc: "Elite sharps possess edge but lack the massive liquidity needed to move markets and capture true alpha at scale."
    },
    {
      icon: <EyeOff className="text-primary w-12 h-12 font-light" />,
      title: "Discovery Friction",
      desc: "Allocators have capital but no reliable way to filter signal from noise. Finding verified winners is manual and broken."
    },
    {
      icon: <Network className="text-primary w-12 h-12 font-light" />,
      title: "Fragmented Systems",
      desc: "Infrastructure for backing traders is currently non-existent or high-trust, preventing institutional capital flows."
    }
  ];

  return (
    <section className="py-32 px-6 border-y border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-primary font-label text-xs tracking-[0.5em] uppercase mb-6 block">01. The Context</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter">The Prediction<br />Market Gap</h2>
          </div>
          <div className="max-w-md">
            <p className="text-on-surface-variant text-lg font-light leading-snug uppercase tracking-wide">Current market structures fail to aggregate intelligence at scale. We are the missing link.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(17, 17, 17, 1)" }}
              className="bg-background p-16 transition-colors duration-500"
            >
              <div className="mb-10">{p.icon}</div>
              <h3 className="text-2xl font-headline font-bold mb-6 uppercase tracking-tight">{p.title}</h3>
              <p className="text-on-surface-variant leading-relaxed font-light uppercase text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DualPathEngine = () => {
  const sharpSteps = [
    { num: "01", title: "Verify Performance", desc: "Connect exchange APIs to build a tamper-proof, cryptographic track record of your edge." },
    { num: "02", title: "Establish Profile", desc: "Define your strategy parameters, focus sectors, and capital capacity limits." },
    { num: "03", title: "Scale Alpha", desc: "Receive automated capital routing from global allocators while keeping your strategy private." }
  ];

  const allocatorSteps = [
    { num: "01", title: "Join Network", desc: "Complete institutional-grade onboarding and deposit liquidity into the obsidian vault." },
    { num: "02", title: "Discover Alpha", desc: "Filter sharps by Brier score, sharpe ratio, and historical drawdown metrics." },
    { num: "03", title: "Automate Allocation", desc: "Set risk rules and let the protocol route capital to verified top-tier talent automatically." }
  ];

  return (
    <section className="py-40 px-6 bg-background" id="sharps">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-8xl font-headline font-bold mb-8 uppercase tracking-tighter">Dual-Path Engine</h2>
          <div className="data-signal mx-auto mb-8"></div>
          <p className="text-on-surface-variant max-w-xl mx-auto text-xl font-light uppercase tracking-widest">Symmetrical Alpha Distribution</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="flex items-center gap-6 pb-8 border-b border-primary/20">
              <TrendingUp className="text-primary w-10 h-10" />
              <h3 className="text-4xl font-headline font-bold uppercase tracking-tight">For Sharps</h3>
            </div>
            <div className="space-y-16">
              {sharpSteps.map((s, i) => (
                <div key={i} className="flex gap-10 group">
                  <div className="flex-shrink-0 w-16 h-16 border border-primary/20 flex items-center justify-center font-headline font-bold text-primary text-xl">{s.num}</div>
                  <div>
                    <h4 className="text-2xl font-headline font-bold mb-3 uppercase">{s.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed font-light uppercase text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-16" id="allocators">
            <div className="flex items-center gap-6 pb-8 border-b border-primary/20">
              <Banknote className="text-primary w-10 h-10" />
              <h3 className="text-4xl font-headline font-bold uppercase tracking-tight">For Allocators</h3>
            </div>
            <div className="space-y-16">
              {allocatorSteps.map((s, i) => (
                <div key={i} className="flex gap-10 group">
                  <div className="flex-shrink-0 w-16 h-16 border border-primary/20 flex items-center justify-center font-headline font-bold text-primary text-xl">{s.num}</div>
                  <div>
                    <h4 className="text-2xl font-headline font-bold mb-3 uppercase">{s.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed font-light uppercase text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EdgeSection = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      label: "Advanced Metrics",
      title: "Precision Profiles",
      desc: "Moving beyond simple PnL. We track calibration, resolution speed, and market-impact scores for deeper insight."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      label: "Privacy First",
      title: "Blind Execution",
      desc: "Capital follows signals through our execution layer without exposing trade details to the public domain."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: "Smart Routing",
      title: "Intelligent Flow",
      desc: "Liquidity is dynamically balanced across sharps to ensure optimal execution and institutional risk parity."
    }
  ];

  return (
    <section className="py-32 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-primary font-label text-xs tracking-[0.5em] uppercase mb-6 block">02. The Edge</span>
          <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">Built for Judgment,<br />Not Noise.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ borderColor: "rgba(174, 230, 61, 0.5)" }}
              className="bg-background p-12 border border-white/5 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-10 text-primary">
                {f.icon}
                <span className="font-label text-[10px] uppercase tracking-[0.3em]">{f.label}</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 uppercase">{f.title}</h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-lg uppercase tracking-tight">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WaitlistForm = () => {
  const [activeTab, setActiveTab] = useState<'sharp' | 'allocator'>('sharp');

  return (
    <section className="py-40 px-6 bg-background" id="application">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter mb-8">Join the Vanguard</h2>
          <p className="text-on-surface-variant text-xl font-light uppercase">Requesting access to the Kinetic Edge infrastructure. Elite criteria apply.</p>
        </div>
        <div className="bg-surface border border-white/10">
          <div className="flex bg-background p-1 mb-8">
            <button 
              onClick={() => setActiveTab('sharp')}
              className={`flex-1 py-5 font-headline font-bold uppercase tracking-widest transition-all ${activeTab === 'sharp' ? 'text-primary border-b-2 border-primary bg-surface-container' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Sharp Waitlist
            </button>
            <button 
              onClick={() => setActiveTab('allocator')}
              className={`flex-1 py-5 font-headline font-bold uppercase tracking-widest transition-all ${activeTab === 'allocator' ? 'text-primary border-b-2 border-primary bg-surface-container' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Allocator Waitlist
            </button>
          </div>
          <form className="p-8 md:p-16 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="font-headline text-xs uppercase tracking-[0.3em] text-primary">Identity</label>
                <input className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none" placeholder="Full Name / Handle" type="text" />
              </div>
              <div className="space-y-4">
                <label className="font-headline text-xs uppercase tracking-[0.3em] text-primary">Contact</label>
                <input className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none" placeholder="Encrypted Email" type="email" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="font-headline text-xs uppercase tracking-[0.3em] text-primary">Professional Presence</label>
              <input className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none" placeholder="X, LinkedIn, or Research Hub" type="text" />
            </div>
            <div className="space-y-4">
              <label className="font-headline text-xs uppercase tracking-[0.3em] text-primary">Evidence of Edge</label>
              <input className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none" placeholder="Polymarket Link / Performance Report URL" type="text" />
            </div>
            <div className="space-y-4">
              <label className="font-headline text-xs uppercase tracking-[0.3em] text-primary">Strategy Brief</label>
              <textarea className="w-full bg-background border border-white/10 focus:border-primary focus:ring-0 transition-all px-6 py-4 text-on-surface placeholder:text-white/20 uppercase outline-none resize-none" placeholder="Describe your methodology and market focus..." rows={5}></textarea>
            </div>
            <button className="w-full bg-primary text-on-primary py-6 font-headline font-bold text-xl uppercase tracking-[0.2em] hover:brightness-110 transition-all kinetic-glow" type="button">
              Submit Credentials
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="bg-background py-8 px-8 group cursor-pointer border border-white/5"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className={`text-xl font-headline font-bold uppercase tracking-tight transition-colors ${isOpen ? 'text-primary' : 'group-hover:text-primary'}`}>{question}</h3>
        <span className="text-primary transition-transform">
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-on-surface-variant font-light mt-6 max-w-2xl uppercase text-xs leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-32 px-6 border-t border-white/5 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-headline font-bold mb-16 uppercase tracking-tight text-center">Protocol Specs & FAQ</h2>
        <div className="space-y-px bg-white/5">
          <FAQItem 
            question="How is capital security handled?" 
            answer="All capital is held in non-custodial smart contracts or regulated institutional vaults with hardened multi-sig control and audit trails." 
          />
          <FAQItem 
            question="What is the fee architecture?" 
            answer="We operate on a performance-first model. Our fees are strictly aligned with the success of both sharps and allocators." 
          />
          <FAQItem 
            question="Who qualifies as a Sharp?" 
            answer="We look for consistent edge demonstrated through verifiable on-chain or off-chain track records. Our verification engine analyzes Brier scores and risk-adjusted returns." 
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black w-full py-16 px-6 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white font-headline uppercase">
            <LogoIcon className="h-8 w-8" />
            HyperSharps
          </div>
          <p className="text-on-surface-variant text-sm max-w-sm uppercase">
            Sovereign prediction infrastructure for the next generation of truth-seekers. Kinetic Edge Precision.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-end gap-16">
          <div className="space-y-4">
            <h4 className="font-headline text-xs uppercase tracking-[0.3em] text-primary">Network</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm uppercase flex items-center gap-2">
                <Twitter size={14} /> Twitter (X)
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm uppercase flex items-center gap-2">
                <Discord size={14} /> Discord
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-xs uppercase tracking-[0.3em] text-primary">Legal</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm uppercase">Documentation</a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm uppercase">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-on-surface-variant font-headline text-[10px] uppercase tracking-[0.4em]">
          © 2024 HyperSharps. Kinetic Edge Precision.
        </div>
        <div className="text-on-surface-variant font-headline text-[10px] uppercase tracking-[0.4em]">
          System: Stable / Protocol: Active
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary selection:text-on-primary">
      <Navbar />
      <Hero />
      <ProblemSection />
      <DualPathEngine />
      <EdgeSection />
      <WaitlistForm />
      <FAQ />
      <section className="py-48 px-6 text-center relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary/5 blur-[150px]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-headline font-bold mb-16 uppercase tracking-tighter leading-[0.9]">
            The future of prediction is <span className="text-primary italic">capitalized intelligence</span>.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-primary text-on-primary px-12 py-6 font-headline font-bold text-2xl uppercase tracking-tighter hover:brightness-110 transition-all">
              Apply as a Sharp
            </button>
            <button className="border border-secondary/40 text-secondary px-12 py-6 font-headline font-bold text-2xl uppercase tracking-tighter hover:bg-secondary/5 transition-all">
              Request Access
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
