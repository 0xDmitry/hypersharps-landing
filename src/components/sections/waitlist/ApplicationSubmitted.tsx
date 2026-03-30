type ApplicationSubmittedProps = {
  activeTab: "sharp" | "allocator"
}

export default function ApplicationSubmitted({
  activeTab,
}: ApplicationSubmittedProps) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="font-headline text-primary mb-6 text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:mb-8 sm:text-5xl md:text-6xl lg:text-8xl">
          {activeTab === "sharp"
            ? "Application Received"
            : "You’re on the List"}
        </h2>
        <p className="text-on-surface-variant mx-auto mb-8 max-w-2xl text-base font-light tracking-[0.12em] uppercase sm:text-lg sm:tracking-[0.18em] md:text-xl">
          {activeTab === "sharp"
            ? "We’ll review your application and reach out"
            : "We’ll let you know when early access opens"}
        </p>
        <a
          href="https://x.com/hypersharps"
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-on-primary font-headline hidden px-6 py-2.5 text-sm font-bold tracking-wider uppercase transition-all hover:brightness-110 md:inline-block"
        >
          Follow HyperSharps on X
        </a>
      </div>
    </div>
  )
}
