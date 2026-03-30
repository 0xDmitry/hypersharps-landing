import { AnimatePresence, motion } from "motion/react"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

const faqItems = [
  {
    question: "What is HyperSharps?",
    answer:
      "HyperSharps is the allocation and discovery layer for prediction market talent. It helps Sharps scale with aligned capital and lets allocators access real edge directly.",
  },
  {
    question: "Who is HyperSharps for?",
    answer:
      "HyperSharps is built for two groups: Sharps with real prediction market edge who want to scale, and allocators who want a better way to discover and back proven skill.",
  },
  {
    question: "Is this copy trading?",
    answer:
      "No. HyperSharps is not built around blindly mirroring wallets or chasing trades in real time. It is built around discovering skilled traders, understanding their edge, and delegating execution to them in a structured way.",
  },
  {
    question: "Is this a fund?",
    answer:
      "No. HyperSharps is not a fund or a fund wrapper. It is an onchain coordination layer for discovering, evaluating, and allocating to prediction market talent.",
  },
  {
    question: "How are Sharps selected?",
    answer:
      "Sharps are selected based on quality of judgment, consistency, and track record. The goal is not to surface the loudest accounts, but the most legible and repeatable edge.",
  },
  {
    question: "When does early access open?",
    answer:
      "HyperSharps is onboarding early participants now. Access will open in stages, with priority given to strong Sharps and early allocators.",
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
      className="bg-background group cursor-pointer border border-white/5 px-8 py-8 sm:py-10 md:px-10"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h3
          className={`font-headline pr-6 text-2xl font-bold tracking-tight uppercase transition-colors md:text-[2rem] ${isOpen ? "text-primary" : "group-hover:text-primary"}`}
        >
          {question}
        </h3>
        <span
          className={`text-primary faq-icon shrink-0 ${isOpen && "faq-item-opened"}`}
        >
          <span className="faq-icon-plus">
            <Plus />
          </span>
          <span className="faq-icon-minus">
            <Minus />
          </span>
        </span>
      </div>
      <AnimatePresence>
        <motion.div
          initial={false}
          animate={{ maxHeight: isOpen ? "300px" : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
          aria-hidden={!isOpen}
          style={{ willChange: "max-height, opacity" }}
        >
          <p className="text-on-surface-variant mt-5 pr-30 text-base leading-relaxed font-light uppercase md:mt-6 md:text-lg">
            {answer}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
