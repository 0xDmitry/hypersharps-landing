import { motion } from 'motion/react';

type HeroProps = {
  onSelectWaitlistTab: (tab: 'sharp' | 'allocator') => void;
};

export default function Hero({ onSelectWaitlistTab }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-start px-6 pt-28 pb-12 overflow-hidden bg-background sm:pt-32 md:pt-36 md:pb-16 lg:justify-center lg:pt-28">
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
            HyperSharps connects top prediction market traders with retail traders seeking proven edge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#application"
              onClick={() => onSelectWaitlistTab('sharp')}
              className="bg-primary text-on-primary px-10 py-5 font-headline font-bold text-lg uppercase tracking-tighter hover:brightness-110 transition-all kinetic-glow text-center"
            >
              Apply as a Sharp
            </a>
            <a
              href="#application"
              onClick={() => onSelectWaitlistTab('allocator')}
              className="bg-surface border border-white/10 text-secondary px-10 py-5 font-headline font-bold text-lg uppercase tracking-tighter hover:bg-secondary/5 transition-all text-center lg:bg-transparent lg:border-secondary/20"
            >
              Join as an Allocator
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div aria-hidden="true" className="w-2 h-2 shrink-0 rounded-full bg-primary animate-pulse"></div>
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
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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
}
