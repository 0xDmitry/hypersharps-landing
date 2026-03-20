import { Banknote, TrendingUp } from 'lucide-react';

const sharpSteps = [
  { num: '01', title: 'Apply and prove your edge', desc: 'Submit your profile, trading background, and track record. We review performance, market focus, and consistency to identify high-signal traders.' },
  { num: '02', title: 'Build your Sharp profile', desc: 'Create a clear profile around your edge — including specialty, style, and performance history — so allocators can understand how you win.' },
  { num: '03', title: 'Scale with aligned capital', desc: 'Get discovered by selected allocators looking for proven talent. HyperSharps helps strong traders turn performance into access to capital.' },
];

const allocatorSteps = [
  { num: '01', title: 'Join the allocator waitlist', desc: 'Apply for early access as an individual, DAO, or protocol seeking exposure to top prediction market talent.' },
  { num: '02', title: 'Discover curated Sharps', desc: 'Access selected trader profiles built around performance, style, and market focus — not noise, hype, or random wallet following.' },
  { num: '03', title: 'Back proven judgment', desc: 'Evaluate traders with greater clarity and allocate to Sharps whose edge fits your goals, risk appetite, and conviction.' },
];

function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 sm:gap-6 lg:gap-10 h-full">
      <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 border border-primary/20 flex items-center justify-center font-headline font-bold text-primary text-lg sm:text-xl">
        {num}
      </div>
      <div>
        <h4 className="text-xl sm:text-2xl font-headline font-bold mb-3 uppercase">{title}</h4>
        <p className="text-on-surface-variant leading-relaxed font-light uppercase text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 sm:py-24 md:py-32 lg:py-40 bg-background" id="sharps">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-headline font-bold mb-8 uppercase tracking-tighter leading-[0.92]">How HyperSharps works</h2>
          <div className="data-signal mx-auto mb-8"></div>
          <p className="text-on-surface-variant max-w-xl mx-auto text-base sm:text-lg md:text-xl font-light uppercase tracking-[0.2em] sm:tracking-[0.3em]">A new layer for prediction markets — connecting proven traders with capital seeking real edge</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:hidden">
          <div className="border border-white/5 bg-black p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-primary/20">
              <TrendingUp className="text-primary w-10 h-10" />
              <h3 className="text-3xl sm:text-4xl font-headline font-bold uppercase tracking-tight">For Sharps</h3>
            </div>
            <div className="pt-6 sm:pt-8">
              {sharpSteps.map((step, index) => (
                <div
                  key={`sharp-${step.num}`}
                  className={index === 0 ? '' : 'mt-6 border-t border-white/10 pt-6'}
                >
                  <StepCard {...step} />
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/5 bg-black p-6 sm:p-8 md:p-10" id="allocators">
            <div className="flex items-center gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-primary/20">
              <Banknote className="text-primary w-10 h-10" />
              <h3 className="text-3xl sm:text-4xl font-headline font-bold uppercase tracking-tight">For Allocators</h3>
            </div>
            <div className="pt-6 sm:pt-8">
              {allocatorSteps.map((step, index) => (
                <div
                  key={`allocator-${step.num}`}
                  className={index === 0 ? '' : 'mt-6 border-t border-white/10 pt-6'}
                >
                  <StepCard {...step} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-2 gap-x-24 gap-y-16">
          <div className="space-y-16">
            <div className="flex items-center gap-6 pb-8 border-b border-primary/20 h-full">
              <TrendingUp className="text-primary w-10 h-10" />
              <h3 className="text-4xl font-headline font-bold uppercase tracking-tight">For Sharps</h3>
            </div>
          </div>
          <div className="space-y-16" id="allocators-desktop">
            <div className="flex items-center gap-6 pb-8 border-b border-primary/20 h-full">
              <Banknote className="text-primary w-10 h-10" />
              <h3 className="text-4xl font-headline font-bold uppercase tracking-tight">For Allocators</h3>
            </div>
          </div>
          {sharpSteps.map((step, index) => (
            <div key={step.num} className="contents">
              <StepCard {...step} />
              <StepCard {...allocatorSteps[index]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
