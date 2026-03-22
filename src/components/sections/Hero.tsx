import { motion } from "motion/react"

type HeroProps = {
  onSelectWaitlistTab: (tab: "sharp" | "allocator") => void
}

export default function Hero({ onSelectWaitlistTab }: HeroProps) {
  return (
    <section className="bg-background relative flex min-h-screen flex-col justify-start overflow-hidden px-6 pt-28 pb-12 sm:pt-32 md:pt-36 md:pb-16 lg:justify-center lg:pt-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="animate-appearance lg:col-span-7">
          <h1 className="font-headline mb-8 text-6xl leading-[0.85] font-bold tracking-tighter uppercase md:text-8xl lg:text-[100px]">
            Where <span className="text-primary italic">Sharps</span> Scale
          </h1>
          <p className="text-on-surface-variant mb-12 max-w-xl text-xl leading-tight font-light uppercase md:text-2xl">
            HyperSharps connects top prediction market traders with retail
            traders seeking proven edge
          </p>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#application"
              onClick={() => onSelectWaitlistTab("sharp")}
              className="bg-primary text-on-primary font-headline kinetic-glow px-10 py-5 text-center text-lg font-bold tracking-tighter uppercase transition-all hover:brightness-110"
            >
              Apply as a Sharp
            </a>
            <a
              href="#application"
              onClick={() => onSelectWaitlistTab("allocator")}
              className="bg-surface text-secondary font-headline hover:bg-secondary/5 lg:border-secondary/20 border border-white/10 px-10 py-5 text-center text-lg font-bold tracking-tighter uppercase transition-all lg:bg-transparent"
            >
              Join as an Allocator
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="bg-primary h-2 w-2 shrink-0 animate-pulse rounded-full"
            ></div>
            <p className="font-label text-on-surface-variant text-[10px] tracking-[0.4em] uppercase">
              System Status: Initializing Early Access Protocol
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="relative flex aspect-square items-center justify-center">
            <div className="bg-primary/5 absolute inset-0 rounded-full blur-[120px]"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative h-full w-full"
            >
              <svg className="h-full w-full opacity-30" viewBox="0 0 400 400">
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="#D6D6D6"
                  strokeDasharray="1 10"
                  strokeWidth="0.1"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="80"
                  fill="none"
                  stroke="#AEE63D"
                  strokeDasharray="5 5"
                  strokeWidth="0.1"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-primary/20 h-48 w-48 border">
                  <div className="bg-primary absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 shadow-[0_0_10px_#AEE63D]"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
