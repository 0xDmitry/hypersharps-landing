import { Activity, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    label: 'Trustless by Design',
    title: 'Capital can only follow execution',
    desc: 'Allocators don’t hand over control blindly. By design, Sharps can only deploy capital through onchain prediction market trades — not withdraw, redirect, or misuse it.',
  },
  {
    icon: <Activity className="w-8 h-8" />,
    label: 'Discover Real Talent',
    title: 'Delegate to the best',
    desc: 'HyperSharps is built to identify traders with real, repeatable edge — not just visible wins, lucky streaks, or attention.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    label: 'Move Beyond Noise',
    title: 'Better than blind following',
    desc: 'HyperSharps replaces wallet mirroring, scattered signals, and reactive behavior with a structured and direct access to high quality decision making.',
  },
];

export default function Solution() {
  return (
    <section className="px-6 py-20 sm:py-24 md:py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <span className="text-primary font-label text-xs tracking-[0.5em] uppercase mb-6 block">02. The Solution</span>
          <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter leading-[0.9]">
            Built for Performance
            <br />
            Not Noise
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background p-12 border border-white/5 transition-all duration-500 md:last:col-span-2 lg:last:col-span-1"
            >
              <div className="flex items-center gap-3 mb-10 text-primary">
                {feature.icon}
                <span className="font-label text-sm uppercase tracking-[0.3em]">{feature.label}</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 uppercase">{feature.title}</h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-lg uppercase tracking-tight">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
