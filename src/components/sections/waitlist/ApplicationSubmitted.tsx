type ApplicationSubmittedProps = {
  activeTab: "sharp" | "allocator"
}

export default function ApplicationSubmitted({
  activeTab,
}: ApplicationSubmittedProps) {
  return (
    <div className="flex flex-col items-center px-6 text-center align-middle">
      <h2 className="font-headline text-primary mb-6 max-w-7xl text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:mb-8 sm:text-5xl md:text-6xl lg:text-8xl">
        {activeTab === "sharp" ? "Application Received" : "You’re on the List"}
      </h2>
      <p className="text-on-surface-variant mx-auto mb-16 max-w-2xl text-base font-light tracking-[0.12em] uppercase sm:text-lg sm:tracking-[0.18em] md:text-xl">
        {activeTab === "sharp"
          ? "We’ll review your application and reach out"
          : "We’ll let you know when early access opens"}
      </p>
      <a
        href="https://x.com/hypersharps"
        target="_blank"
        rel="noreferrer"
        className="bg-primary text-on-primary font-headline kinetic-glow px-10 py-5 text-center text-lg font-bold tracking-tight uppercase transition-all select-none hover:brightness-110"
      >
        Follow HyperSharps on X
      </a>
    </div>
  )
}
