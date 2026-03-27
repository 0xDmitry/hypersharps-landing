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
  return (
    <section
      className="bg-background px-6 py-10 sm:py-22 md:py-26 lg:py-32"
      id="application"
    >
      {isApplicationSubmitted ? (
        <ApplicationSubmitted isApplicationSubmitted />
      ) : (
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center sm:mb-16 md:mb-20">
            <h2 className="font-headline mb-6 text-4xl font-bold tracking-tight uppercase sm:mb-8 sm:text-5xl md:text-7xl">
              Join the Vanguard
            </h2>
          </div>
          <div className="bg-surface border border-white/10">
            <div className="bg-surface border-b border-white/10 px-6 pt-6 md:px-16 md:pt-10">
              <div className="bg-background flex p-1">
                <button
                  onClick={() => onSelectWaitlistTab("sharp")}
                  className={`font-headline flex-1 px-2 py-5 font-bold tracking-widest uppercase transition-all ${activeTab === "sharp" ? "text-primary border-primary bg-surface border-b-2" : "text-on-surface-variant hover:text-on-surface"} cursor-pointer`}
                >
                  Sharp Application
                </button>
                <button
                  onClick={() => onSelectWaitlistTab("allocator")}
                  className={`font-headline flex-1 px-2 py-5 font-bold tracking-widest uppercase transition-all ${activeTab === "allocator" ? "text-primary border-primary bg-surface border-b-2" : "text-on-surface-variant hover:text-on-surface"} cursor-pointer`}
                >
                  Allocators Waitlist
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
