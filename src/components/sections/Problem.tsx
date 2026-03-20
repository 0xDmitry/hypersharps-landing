import { EyeOff, Landmark, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: <EyeOff className="w-8 h-8" />,
    label: 'Hidden Talent',
    title: 'Great traders are hard to identify',
    desc: 'Performance is fragmented across wallets, markets, and timelines. Signal is buried in noise, making it difficult to separate true skill from luck.',
  },
  {
    icon: <TrendingDown className="w-8 h-8" />,
    label: 'Inefficient Allocation',
    title: 'Capital follows misleading signals',
    desc: 'Copy trading bots, Discord alpha, and wallet tracking are crude and reactive. There’s no structured way to allocate capital to proven edge.',
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    label: 'Funds Don’t Fit',
    title: 'Existing models are rigid and opaque',
    desc: 'Fixed timelines and fund structures move capital, but don’t surface skill. The system optimizes for vehicles and fees — not for discovering real edge.',
  },
];

export default function Problem() {
  return (
    <section className="px-6 py-20 sm:py-24 md:py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <span className="text-primary font-label text-xs tracking-[0.5em] uppercase mb-6 block">01. The Problem</span>
          <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">
            Sharps Have Edge
            <br />
            Retail Don&apos;t
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-background p-12 border border-white/5 transition-all duration-500 md:last:col-span-2 lg:last:col-span-1"
            >
              <div className="flex items-center gap-3 mb-10 text-primary">
                {problem.icon}
                <span className="font-label text-sm uppercase tracking-[0.3em]">{problem.label}</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 uppercase">{problem.title}</h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-lg uppercase tracking-tight">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
