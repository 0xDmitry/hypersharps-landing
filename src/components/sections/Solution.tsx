import { Activity, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    label: "Trustless by Design",
    title: "Capital can only follow execution",
    desc: "Allocators don’t hand over control blindly. By design, Sharps can only deploy capital through onchain prediction market trades — not withdraw, redirect, or misuse it.",
  },
  {
    icon: <Activity className="h-8 w-8" />,
    label: "Discover Real Talent",
    title: "Delegate to the best",
    desc: "HyperSharps is built to identify traders with real, repeatable edge — not just visible wins, lucky streaks, or attention.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    label: "Move Beyond Noise",
    title: "Better than blind following",
    desc: "HyperSharps replaces wallet mirroring, scattered signals, and reactive behavior with a structured and direct access to high quality decision making.",
  },
]

export default function Solution() {
  return (
    <section className="border-y border-white/5 bg-black px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <span className="text-primary font-label mb-6 block text-xs tracking-[0.5em] uppercase">
            02. The Solution
          </span>
          <h2 className="font-headline text-5xl leading-[0.9] font-bold tracking-tighter uppercase md:text-7xl">
            Built for Performance
            <br />
            Not Noise
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background border border-white/5 p-12 transition-all duration-500 md:last:col-span-2 lg:last:col-span-1"
            >
              <div className="text-primary mb-10 flex items-center gap-3">
                {feature.icon}
                <span className="font-label text-sm tracking-[0.3em] uppercase">
                  {feature.label}
                </span>
              </div>
              <h3 className="font-headline mb-6 text-3xl font-bold uppercase">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light tracking-tight uppercase">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
