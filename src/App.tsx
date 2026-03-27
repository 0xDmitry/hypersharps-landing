import { useState } from "react"
import HowItWorks from "./components/sections/HowItWorks"
import Solution from "./components/sections/Solution"
import FAQ from "./components/sections/FAQ"
import FinalCTA from "./components/sections/FinalCTA"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/sections/Hero"
import Problem from "./components/sections/Problem"
import Waitlist from "./components/sections/Waitlist"

export default function App() {
  const [activeWaitlistTab, setActiveWaitlistTab] = useState<
    "sharp" | "allocator"
  >("sharp")

  const [isApplicationSubmitted, setIsApplicationSubmitted] =
    useState<boolean>(false)

  return (
    <div className="bg-background text-on-surface selection:bg-primary selection:text-on-primary min-h-screen">
      <Header isApplicationSubmitted={isApplicationSubmitted} />
      <Hero
        onSelectWaitlistTab={setActiveWaitlistTab}
        isApplicationSubmitted={isApplicationSubmitted}
      />
      <Problem />
      <Solution />
      <HowItWorks />
      <Waitlist
        activeTab={activeWaitlistTab}
        onSelectWaitlistTab={setActiveWaitlistTab}
        isApplicationSubmitted={isApplicationSubmitted}
        onApplicationSubmit={() => setIsApplicationSubmitted(true)}
      />
      <FAQ />
      <FinalCTA
        onSelectWaitlistTab={setActiveWaitlistTab}
        isApplicationSubmitted={isApplicationSubmitted}
      />
      <Footer isApplicationSubmitted={isApplicationSubmitted} />
    </div>
  )
}
