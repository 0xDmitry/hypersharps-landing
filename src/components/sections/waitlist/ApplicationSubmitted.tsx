import { useEffect, useRef } from "react"

type ApplicationSubmittedProps = {
  isApplicationSubmitted: boolean
  activeTab: "sharp" | "allocator"
}

export default function ApplicationSubmitted({
  isApplicationSubmitted,
  activeTab,
}: ApplicationSubmittedProps) {
  const successFeedbackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (successFeedbackRef.current && isApplicationSubmitted) {
      successFeedbackRef.current.scrollIntoView({
        behavior: "instant",
        block: "start",
      })
    }
  }, [isApplicationSubmitted])

  return (
    <div className="mx-auto max-w-7xl" ref={successFeedbackRef}>
      <div className="text-center">
        <h2 className="font-headline text-primary mb-6 text-4xl leading-[0.92] font-bold tracking-tight uppercase sm:mb-8 sm:text-5xl md:text-6xl lg:text-8xl">
          {activeTab === "sharp"
            ? "Application received"
            : "You’re on the list"}
        </h2>
        <p className="text-on-surface-variant mx-auto mb-8 max-w-2xl text-base font-light tracking-[0.12em] uppercase sm:text-lg sm:tracking-[0.18em] md:text-xl">
          {activeTab === "sharp"
            ? "We’ll review it and reach out if there’s a fit"
            : "We’ll let you know when access opens"}
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
