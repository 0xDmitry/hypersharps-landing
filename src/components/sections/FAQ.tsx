import { Minus, Plus } from "lucide-react"

const faqItems = [
  {
    question: "What is HyperSharps?",
    answer:
      "HyperSharps is the allocation layer for prediction markets - built to help capital discover and access real edge.",
  },
  {
    question: "Who is HyperSharps for?",
    answer:
      "HyperSharps is built for two groups: traders with exceptional skill who want to scale their edge and allocators who want a better way to discover and back proven talent.",
  },
  {
    question: "Is this copy trading?",
    answer:
      "No. HyperSharps is not built around blindly mirroring wallets or following trades in real time. Allocators discover traders based on their demonstrated edge, style, and performance. Then they delegate decision making to them.",
  },
  {
    question: "Is this a fund?",
    answer:
      "No. HyperSharps is not a fund. It is a permissionless platform for discovering, evaluating, and scaling forecasting talent.",
  },
  {
    question: "How are Sharps selected?",
    answer:
      "Sharps are selected based on the quality and consistency of their track record. Our goal is not to surface the loudest traders, but to identify those with clear, repeatable edge.",
  },
  {
    question: "When does access open?",
    answer:
      "HyperSharps is currently onboarding early participants through the waitlist. Access will open in phases, with priority given to the strongest Sharps and earliest allocators.",
  },
]

export default function FAQ() {
  return (
    <section className="border-t border-white/5 bg-black px-6 py-10 sm:py-22 md:py-26 lg:py-30">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-headline mb-6 text-center text-4xl font-bold tracking-tight uppercase sm:mb-12 sm:text-5xl md:mb-14 md:text-6xl">
          FAQ
        </h2>

        <div className="space-y-px bg-white/5">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="faq-item bg-background border border-white/5"
            >
              <summary className="faq-summary flex items-center justify-between px-8 py-8 sm:py-10 md:px-10">
                <h3 className="faq-question font-headline pr-6 text-2xl font-bold tracking-tight uppercase md:text-[2rem]">
                  {item.question}
                </h3>

                <span
                  className="faq-icon text-primary shrink-0"
                  aria-hidden="true"
                >
                  <span className="faq-icon-plus">
                    <Plus />
                  </span>
                  <span className="faq-icon-minus">
                    <Minus />
                  </span>
                </span>
              </summary>

              <div className="faq-panel px-8 pb-8 sm:pb-10 md:px-10">
                <p className="faq-panel-text text-on-surface-variant max-w-3xl text-base leading-relaxed font-light uppercase md:text-lg">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
