import { EyeOff, Landmark, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: <EyeOff className="h-8 w-8" />,
    label: "Hidden Talent",
    title: "Great traders are hard to identify",
    desc: "Performance is fragmented across wallets, markets, and timelines. Signal is buried in noise, making it difficult to separate true skill from luck.",
  },
  {
    icon: <TrendingDown className="h-8 w-8" />,
    label: "Inefficient Allocation",
    title: "Capital follows misleading signals",
    desc: "Copy trading bots, Discord alpha, and wallet tracking are crude and reactive. There’s no structured way to allocate capital to proven edge.",
  },
  {
    icon: <Landmark className="h-8 w-8" />,
    label: "Funds Don’t Fit",
    title: "Existing models are rigid and opaque",
    desc: "Fixed timelines and fund structures move capital, but don’t surface skill. The system optimizes for vehicles and fees — not for discovering real edge.",
  },
]

export default function Problem() {
  return (
    <section className="border-y border-white/5 bg-black px-6 py-10 sm:py-22 md:py-26 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 sm:mb-16 md:mb-20">
          <span className="text-primary font-label mb-6 block text-xs tracking-[0.5em] uppercase">
            01. The Problem
          </span>
          <h2 className="font-headline text-5xl leading-[0.9] font-bold tracking-tight uppercase md:text-7xl">
            Sharps Have Edge
            <br />
            Retail Don&apos;t
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-background border border-white/5 p-6 transition-all duration-500 sm:p-12 md:last:col-span-2 lg:last:col-span-1"
            >
              <div className="text-primary mb-10 flex items-center gap-3">
                {problem.icon}
                <span className="font-label text-sm tracking-[0.3em] uppercase">
                  {problem.label}
                </span>
              </div>
              <h3 className="font-headline mb-6 text-3xl font-bold uppercase">
                {problem.title}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light tracking-tight uppercase">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
