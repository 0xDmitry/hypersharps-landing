import { Banknote, TrendingUp } from "lucide-react"

const sharpSteps = [
  {
    num: "01",
    title: "Apply with your track record",
    desc: "Share your profile, market focus, and specialization. We look for consistency, judgment, and repeatable edge — not just headline numbers.",
  },
  {
    num: "02",
    title: "Build a legible Sharp profile",
    desc: "Create a clear profile around your edge, style, and performance so allocators can understand how you win.",
  },
  {
    num: "03",
    title: "Scale with aligned capital",
    desc: "Get discovered by allocators looking for real prediction market talent and turn proven performance into scalable opportunity.",
  },
]

const allocatorSteps = [
  {
    num: "01",
    title: "Join early access",
    desc: "Apply as an individual, DAO, protocol, or treasury seeking exposure to proven prediction market talent.",
  },
  {
    num: "02",
    title: "Browse selected Sharps",
    desc: "Access curated trader profiles built around edge, market focus, and performance — not hype, noise, or random signals.",
  },
  {
    num: "03",
    title: "Allocate with clarity",
    desc: "Allocate to Sharps whose judgment, style, and risk profile match your goals and conviction.",
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
      className="bg-background py-10 sm:py-22 md:py-26 lg:py-32"
      id="sharps"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 px-6 text-center sm:mb-16 md:mb-20 lg:mb-32 lg:px-10">
          <h2 className="font-headline mb-6 text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:mb-8 sm:text-5xl md:text-6xl lg:text-8xl">
            How HyperSharps works
          </h2>
          <div className="data-signal mx-auto mb-6 sm:mb-8"></div>
          <p className="text-on-surface-variant mx-auto max-w-xl text-base font-light tracking-[0.2em] uppercase sm:text-lg sm:tracking-[0.3em] md:text-xl">
            A new layer for prediction markets
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 px-0 md:gap-8 lg:hidden">
          <div className="border border-white/5 bg-black p-6 sm:p-8 md:p-10">
            <div className="border-primary/20 flex items-center gap-4 border-b pb-6 pl-2 sm:gap-6 sm:pb-8 sm:pl-3">
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
            <div className="border-primary/20 flex items-center gap-4 border-b pb-6 pl-2 sm:gap-6 sm:pb-8 sm:pl-3">
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
        <div className="hidden gap-x-24 gap-y-16 px-10 lg:grid lg:grid-cols-2">
          <div className="space-y-16">
            <div className="border-primary/20 flex h-full items-center gap-6 border-b pb-8 pl-3">
              <TrendingUp className="text-primary h-10 w-10" />
              <h3 className="font-headline text-4xl font-bold tracking-tight uppercase">
                For Sharps
              </h3>
            </div>
          </div>
          <div className="space-y-16" id="allocators-desktop">
            <div className="border-primary/20 flex h-full items-center gap-6 border-b pb-8 pl-3">
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
