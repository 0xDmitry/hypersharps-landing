import AnimatedLogo from "../svg/AnimatedLogo"

type HeroProps = {
  onSelectWaitlistTab: (tab: "sharp" | "allocator") => void
  isApplicationSubmitted: boolean
}

export default function Hero({
  onSelectWaitlistTab,
  isApplicationSubmitted,
}: HeroProps) {
  return (
    <section className="bg-background relative flex flex-col justify-start overflow-hidden px-6 pt-28 pb-12 sm:pt-32 md:pt-36 md:pb-16 lg:min-h-screen lg:justify-center lg:pt-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="animate-appearance lg:col-span-7">
          <h1 className="font-headline mb-8 text-6xl leading-[0.85] font-bold tracking-tight uppercase md:text-8xl lg:text-[100px]">
            Where <span className="text-primary italic">Sharps</span> Scale
          </h1>
          <p className="text-on-surface-variant mb-12 max-w-xl text-xl leading-tight font-light uppercase md:text-2xl">
            HyperSharps connects top prediction market traders with retail
            traders seeking proven edge
          </p>
          {isApplicationSubmitted && (
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="bg-primary animate-blink h-2 w-2 shrink-0 rounded-full opacity-0"
              ></div>
              <p className="font-label text-on-surface-variant text-[10px] tracking-[0.4em] uppercase">
                System Status: Early Access Protocol Activated
              </p>
            </div>
          )}
          <div
            className={`mb-8 flex flex-col gap-4 sm:flex-row ${isApplicationSubmitted && "pointer-events-none hidden md:flex md:opacity-0"}`}
          >
            <a
              href="#application"
              onClick={() => onSelectWaitlistTab("sharp")}
              className="bg-primary text-on-primary font-headline kinetic-glow px-10 py-5 text-center text-lg font-bold tracking-tight uppercase transition-all hover:brightness-110"
            >
              Apply as a Sharp
            </a>
            <a
              href="#application"
              onClick={() => onSelectWaitlistTab("allocator")}
              className="bg-surface text-secondary font-headline hover:bg-secondary/5 lg:border-secondary/20 border border-white/10 px-10 py-5 text-center text-lg font-bold tracking-tight uppercase transition-all lg:bg-transparent"
            >
              Join as an Allocator
            </a>
          </div>
          {!isApplicationSubmitted && (
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="bg-primary animate-blink h-2 w-2 shrink-0 rounded-full opacity-0"
              ></div>
              <p className="font-label text-on-surface-variant text-[10px] tracking-[0.4em] uppercase">
                System Status: Initializing Early Access Protocol
              </p>
            </div>
          )}
        </div>
        <div className="relative hidden md:block lg:col-span-5">
          <div className="relative flex aspect-square items-center justify-center">
            <AnimatedLogo />
          </div>
        </div>
      </div>
    </section>
  )
}
