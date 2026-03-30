type FinalCTAProps = {
  onSelectWaitlistTab: (tab: "sharp" | "allocator") => void
  isApplicationSubmitted: boolean
}

export default function FinalCTA({
  onSelectWaitlistTab,
  isApplicationSubmitted,
}: FinalCTAProps) {
  return (
    <section className="bg-background relative overflow-hidden px-6 py-12 text-center sm:py-32 md:py-40 lg:py-48">
      <div className="bg-primary/5 absolute inset-0 blur-[150px]"></div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="font-headline mb-10 text-4xl leading-[0.9] font-bold tracking-tight uppercase sm:mb-12 sm:text-5xl md:mb-16 md:text-8xl">
          <span className="text-primary italic">Sharps</span> trade
          <br />
          Capital follows
        </h2>
        {!isApplicationSubmitted && (
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <a
              href="#get-early-access"
              onClick={() => onSelectWaitlistTab("sharp")}
              className="bg-primary text-on-primary font-headline px-12 py-6 text-center text-2xl font-bold tracking-tight uppercase transition-all hover:brightness-110"
            >
              Apply as a Sharp
            </a>
            <a
              href="#get-early-access"
              onClick={() => onSelectWaitlistTab("allocator")}
              className="bg-surface text-secondary font-headline hover:bg-surface px-12 py-6 text-center text-2xl font-bold tracking-tight uppercase transition-all lg:bg-transparent"
            >
              Join as an Allocator
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
