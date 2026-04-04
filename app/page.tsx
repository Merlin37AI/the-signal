import Nav from '@/components/ui/Nav'
import SectionLabel from '@/components/ui/SectionLabel'
import Hero from '@/components/sections/Hero'
import CredibilityBar from '@/components/sections/Origin'
import PainPoints from '@/components/sections/Discovery'
import HowItWorks from '@/components/sections/Career'
import StatsBreak from '@/components/sections/StatsBreak'
import Services from '@/components/sections/Services'
import ImageBreak from '@/components/sections/ImageBreak'
import Comparison from '@/components/sections/Proof'
import ResultsAboutTestimonialsPage from '@/components/sections/SignalCTA'

const RULE_TEXT = Array(12).fill('✦ GARY DOES STRATEGY ✦ FRACTIONAL AI ADVISORY ✦ EMBEDDED NOT ARMS-LENGTH').join(' ')

function InkRule() {
  return (
    <div className="ink-rule">
      <div className="ink-rule-inner">
        <span className="ink-rule-item">{RULE_TEXT}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="ink-rule-item" aria-hidden="true">{RULE_TEXT}&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Nav />
      <SectionLabel />
      <main>
        <Hero />
        <InkRule />
        <CredibilityBar />
        <InkRule />
        <PainPoints />
        <HowItWorks />
        <StatsBreak />
        <InkRule />
        <Services />
        <ImageBreak />
        <InkRule />
        <Comparison />
        <ResultsAboutTestimonialsPage />
      </main>
    </>
  )
}
