import { Banknote, TrendingUp } from "lucide-react"

const sharpSteps = [
  {
    num: "01",
    title: "Apply and prove your edge",
    desc: "Submit your profile, trading background, and track record. We review performance, market focus, and consistency to identify high-signal traders.",
  },
  {
    num: "02",
    title: "Build your Sharp profile",
    desc: "Create a clear profile around your edge — including specialty, style, and performance history — so allocators can understand how you win.",
  },
  {
    num: "03",
    title: "Scale with aligned capital",
    desc: "Get discovered by selected allocators looking for proven talent. HyperSharps helps strong traders turn performance into access to capital.",
  },
]

const allocatorSteps = [
  {
    num: "01",
    title: "Join the allocator waitlist",
    desc: "Apply for early access as an individual, DAO, or protocol seeking exposure to top prediction market talent.",
  },
  {
    num: "02",
    title: "Discover curated Sharps",
    desc: "Access selected trader profiles built around performance, style, and market focus — not noise, hype, or random wallet following.",
  },
  {
    num: "03",
    title: "Back proven judgment",
    desc: "Evaluate traders with greater clarity and allocate to Sharps whose edge fits your goals, risk appetite, and conviction.",
  },
]

function StepCard({
  num,
  title,
  desc,
}: {
  num: string
  title: string
  desc: string
}) {
  return (
    <div className="flex h-full items-start gap-4 sm:gap-6 lg:gap-10">
      <div className="border-primary/50 font-headline text-primary flex h-14 w-14 shrink-0 items-center justify-center border border-solid text-lg font-bold sm:h-16 sm:w-16 sm:text-xl">
        {num}
      </div>
      <div>
        <h4 className="font-headline mb-3 text-xl font-bold uppercase sm:text-2xl">
          {title}
        </h4>
        <p className="text-on-surface-variant leading-relaxed font-light uppercase">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section
      className="bg-background px-6 py-10 sm:py-22 md:py-26 lg:py-32"
      id="sharps"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center sm:mb-16 md:mb-20 lg:mb-32">
          <h2 className="font-headline mb-6 text-4xl leading-[0.92] font-bold tracking-tighter uppercase sm:mb-8 sm:text-5xl md:text-6xl lg:text-8xl">
            How HyperSharps works
          </h2>
          <div className="data-signal mx-auto mb-6 sm:mb-8"></div>
          <p className="text-on-surface-variant mx-auto max-w-xl text-base font-light tracking-[0.2em] uppercase sm:text-lg sm:tracking-[0.3em] md:text-xl">
            A new layer for prediction markets
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:hidden">
          <div className="border border-white/5 bg-black p-6 sm:p-8 md:p-10">
            <div className="border-primary/20 flex items-center gap-4 border-b pb-6 sm:gap-6 sm:pb-8">
              <TrendingUp className="text-primary h-10 w-10" />
              <h3 className="font-headline text-3xl font-bold tracking-tight uppercase sm:text-4xl">
                For Sharps
              </h3>
            </div>
            <div className="pt-6 sm:pt-8">
              {sharpSteps.map((step, index) => (
                <div
                  key={`sharp-${step.num}`}
                  className={
                    index === 0 ? "" : "mt-6 border-t border-white/10 pt-6"
                  }
                >
                  <StepCard {...step} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="border border-white/5 bg-black p-6 sm:p-8 md:p-10"
            id="allocators"
          >
            <div className="border-primary/20 flex items-center gap-4 border-b pb-6 sm:gap-6 sm:pb-8">
              <Banknote className="text-primary h-10 w-10" />
              <h3 className="font-headline text-3xl font-bold tracking-tight uppercase sm:text-4xl">
                For Allocators
              </h3>
            </div>
            <div className="pt-6 sm:pt-8">
              {allocatorSteps.map((step, index) => (
                <div
                  key={`allocator-${step.num}`}
                  className={
                    index === 0 ? "" : "mt-6 border-t border-white/10 pt-6"
                  }
                >
                  <StepCard {...step} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden gap-x-24 gap-y-16 lg:grid lg:grid-cols-2">
          <div className="space-y-16">
            <div className="border-primary/20 flex h-full items-center gap-6 border-b pb-8">
              <TrendingUp className="text-primary h-10 w-10" />
              <h3 className="font-headline text-4xl font-bold tracking-tight uppercase">
                For Sharps
              </h3>
            </div>
          </div>
          <div className="space-y-16" id="allocators-desktop">
            <div className="border-primary/20 flex h-full items-center gap-6 border-b pb-8">
              <Banknote className="text-primary h-10 w-10" />
              <h3 className="font-headline text-4xl font-bold tracking-tight uppercase">
                For Allocators
              </h3>
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
  )
}
