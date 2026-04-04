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

export default function Home() {
  return (
    <>
      <Nav />
      <SectionLabel />
      <main>
        <Hero />
        <CredibilityBar />
        <PainPoints />
        <HowItWorks />
        <StatsBreak />
        <Services />
        <ImageBreak />
        <Comparison />
        <ResultsAboutTestimonialsPage />
      </main>
    </>
  )
}
