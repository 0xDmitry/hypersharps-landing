import { useEffect, useRef } from "react"
import ApplicationForm from "./ApplicationForm"
import ApplicationSubmitted from "./ApplicationSubmitted"

type WaitlistProps = {
  activeTab: "sharp" | "allocator"
  onSelectWaitlistTab: (tab: "sharp" | "allocator") => void
  isApplicationSubmitted: boolean
  onApplicationSubmit: () => void
}

export default function Waitlist({
  activeTab,
  onSelectWaitlistTab,
  isApplicationSubmitted,
  onApplicationSubmit,
}: WaitlistProps) {
  const successFeedbackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (successFeedbackRef.current && isApplicationSubmitted) {
      successFeedbackRef.current.scrollIntoView({
        behavior: "instant",
        block: "center",
      })
    }
  }, [isApplicationSubmitted])

  return (
    <section
      className="bg-background mx-auto px-0 py-10 sm:py-22 md:px-6 md:py-26 lg:px-10 lg:py-32"
      id="get-early-access"
      ref={successFeedbackRef}
    >
      {isApplicationSubmitted ? (
        <ApplicationSubmitted activeTab={activeTab} />
      ) : (
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 px-6 text-center sm:mb-16 md:mb-20">
            <h2 className="font-headline mb-6 text-4xl font-bold tracking-tight uppercase sm:mb-8 sm:text-5xl md:text-7xl">
              Get Early Access
            </h2>
            <p className="text-on-surface-variant mx-auto max-w-3xl text-base font-light tracking-[0.12em] uppercase sm:text-lg sm:tracking-[0.18em] md:text-xl">
              Apply as a Sharp to scale your edge or Join as an allocator to
              back proven prediction market talent
            </p>
          </div>
          <div className="bg-surface border border-white/10">
            <div className="bg-surface border-b border-white/10 p-8 pb-0 md:p-16 md:pb-0">
              <div className="bg-background flex p-1">
                <button
                  onClick={() => onSelectWaitlistTab("sharp")}
                  className={`font-headline flex-1 px-2 py-5 font-bold tracking-wide uppercase transition-all select-none sm:tracking-widest ${activeTab === "sharp" ? "text-primary border-primary bg-surface border-b-2" : "text-on-surface-variant hover:text-on-surface"} cursor-pointer`}
                >
                  For Sharps
                </button>
                <button
                  onClick={() => onSelectWaitlistTab("allocator")}
                  className={`font-headline flex-1 px-2 py-5 font-bold tracking-wide uppercase transition-all select-none sm:tracking-widest ${activeTab === "allocator" ? "text-primary border-primary bg-surface border-b-2" : "text-on-surface-variant hover:text-on-surface"} cursor-pointer`}
                >
                  For Allocators
                </button>
              </div>
            </div>
            {activeTab === "sharp" ? (
              <ApplicationForm
                kind="sharp"
                onSuccessfullSubmit={onApplicationSubmit}
              />
            ) : (
              <ApplicationForm
                kind="allocator"
                onSuccessfullSubmit={onApplicationSubmit}
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}
