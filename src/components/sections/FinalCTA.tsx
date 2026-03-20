type FinalCTAProps = {
  onSelectWaitlistTab: (tab: 'sharp' | 'allocator') => void;
};

export default function FinalCTA({ onSelectWaitlistTab }: FinalCTAProps) {
  return (
    <section className="px-6 py-24 sm:py-32 md:py-40 lg:py-48 text-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-primary/5 blur-[150px]"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-headline font-bold mb-10 sm:mb-12 md:mb-16 uppercase tracking-tighter leading-[0.9]">
          The future of predictions is <span className="text-primary italic">capitalized intelligence</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#application"
            onClick={() => onSelectWaitlistTab('sharp')}
            className="bg-primary text-on-primary px-12 py-6 font-headline font-bold text-2xl uppercase tracking-tighter hover:brightness-110 transition-all text-center"
          >
            Apply as a Sharp
          </a>
          <a
            href="#application"
            onClick={() => onSelectWaitlistTab('allocator')}
            className="bg-surface border border-white/10 text-secondary px-12 py-6 font-headline font-bold text-2xl uppercase tracking-tighter hover:bg-secondary/5 transition-all text-center lg:bg-transparent lg:border-secondary/40"
          >
            Join as an Allocator
          </a>
        </div>
      </div>
    </section>
  );
}
