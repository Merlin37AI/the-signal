import Nav from '@/components/ui/Nav'
import Hero from '@/components/sections/Hero'
import CredibilityBar from '@/components/sections/Origin'
import PainPoints from '@/components/sections/Discovery'
import HowItWorks from '@/components/sections/Career'
import Services from '@/components/sections/Services'
import Comparison from '@/components/sections/Proof'
import ResultsAboutTestimonialsPage from '@/components/sections/SignalCTA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityBar />
        <PainPoints />
        <HowItWorks />
        <Services />
        <Comparison />
        <ResultsAboutTestimonialsPage />
      </main>
    </>
  )
}
