'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import Origin from '@/components/sections/Origin'
import Discovery from '@/components/sections/Discovery'
import Career from '@/components/sections/Career'
import Services from '@/components/sections/Services'
import Proof from '@/components/sections/Proof'
import SignalCTA from '@/components/sections/SignalCTA'
import Nav from '@/components/ui/Nav'
import CTAModal from '@/components/ui/CTAModal'
import { useState } from 'react'

// Lazy-load 3D canvas — never SSR, only client
const WaveformCanvas = dynamic(() => import('@/components/canvas/WaveformCanvas'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  const [modal, setModal] = useState<'audit' | 'talk' | 'call' | null>(null)

  return (
    <>
      {/* Fixed 3D waveform canvas — sits behind all sections */}
      <WaveformCanvas />
      {/* Static fallback for prefers-reduced-motion */}
      <div className="static-waveform" aria-hidden="true" />

      <Nav onCTA={() => setModal('call')} />

      <main>
        <Hero onCTA={setModal} />
        <Origin />
        <Discovery />
        <Career />
        <Services onCTA={setModal} />
        <Proof />
        <SignalCTA onCTA={setModal} />
      </main>

      {modal && <CTAModal type={modal} onClose={() => setModal(null)} />}
    </>
  )
}
