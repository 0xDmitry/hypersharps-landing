import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
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
    <section className="border-t border-white/5 bg-black px-6 py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-headline mb-10 text-center text-4xl font-bold tracking-tight uppercase sm:mb-12 sm:text-5xl md:mb-14 md:text-6xl">
          FAQ
        </h2>
        <div className="space-y-px bg-white/5">
          {faqItems.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type FAQItemProps = {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="bg-background group cursor-pointer border border-white/5 px-8 py-10 md:px-10"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h3
          className={`font-headline pr-6 text-2xl font-bold tracking-tight uppercase transition-colors md:text-[2rem] ${isOpen ? "text-primary" : "group-hover:text-primary"}`}
        >
          {question}
        </h3>
        <span className="text-primary transition-transform">
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-on-surface-variant mt-5 max-w-3xl text-base leading-relaxed font-light uppercase md:mt-6 md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
