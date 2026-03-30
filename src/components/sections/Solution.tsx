import { Activity, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    label: "Trustless Execution",
    title: "Capital stays on rails",
    desc: "By design, Sharps can use capital only for prediction market trading — not withdraw it, redirect it, or repurpose it.",
  },
  {
    icon: <Activity className="h-8 w-8" />,
    label: "Legible Talent",
    title: "Profiles built around real edge",
    desc: "HyperSharps is built to discover traders with repeatable judgment, clear specialization, and legible performance.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    label: "Clean Allocation",
    title: "A better way to access Sharps",
    desc: "No wallet mirroring. No alpha chasing. No conflicting signals. Just structured access to proven judgment in prediction markets.",
  },
]

export default function Solution() {
  return (
    <section className="border-y border-white/5 bg-black px-6 py-10 sm:py-22 md:py-26 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 sm:mb-16 md:mb-20">
          <span className="text-primary font-label mb-6 block text-xs tracking-[0.5em] uppercase">
            02. The Solution
          </span>
          <h2 className="font-headline text-5xl leading-[0.9] font-bold tracking-tight uppercase md:text-7xl">
            Access Sharps
            <br />
            Not Noise
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background border border-white/5 p-6 transition-all duration-500 sm:p-12 md:last:col-span-2 lg:last:col-span-1"
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
