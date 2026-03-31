'use client'

import { useEffect } from 'react'
import { createLenis, destroyLenis, getLenis } from '@/lib/lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = createLenis()

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      destroyLenis()
    }
  }, [])

  return <>{children}</>
}
