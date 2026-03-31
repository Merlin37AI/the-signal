'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import WaveformScene from './WaveformScene'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export type WaveformState = {
  chaos: number      // 0 = clean, 1 = full chaos
  bands: number      // 1-12 visible frequency bands
  cameraZ: number    // camera zoom distance
  brightness: number // overall emissive brightness
}

export default function WaveformCanvas() {
  const [waveState, setWaveState] = useState<WaveformState>({
    chaos: 1,
    bands: 12,
    cameraZ: 5,
    brightness: 0.6,
  })

  useEffect(() => {
    // Scroll-driven waveform: map scroll progress to wave state
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        onUpdate: (self) => {
          const p = self.progress // 0→1

          // Chaos: starts high (1), drops to 0 by S3, stays clean
          const chaos = p < 0.25 ? 1 - p * 4 * 0.8 : p < 0.45 ? 0.2 - (p - 0.25) * 1 : 0

          // Bands: starts cluttered (12), reduces to 1 by final section
          const bands = Math.max(1, Math.round(12 - p * 11))

          // Camera Z: pull back slightly through middle, return for CTA
          const cameraZ = p < 0.5 ? 5 + p * 2 : 7 - (p - 0.5) * 4

          // Brightness: pulses at key story beats
          const brightness = p > 0.85 ? 0.8 + (p - 0.85) * 1.4 : 0.5 + Math.sin(p * Math.PI) * 0.3

          setWaveState({
            chaos: Math.max(0, Math.min(1, chaos)),
            bands: Math.max(1, Math.min(12, bands)),
            cameraZ: Math.max(3, Math.min(10, cameraZ)),
            brightness: Math.max(0.3, Math.min(1.2, brightness)),
          })
        },
      },
    })

    return () => { tl.kill() }
  }, [])

  return (
    <div
      id="waveform-canvas"
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        dpr={typeof window !== 'undefined' && window.innerWidth < 768 ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 0, waveState.cameraZ], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#0A0F0A' }}
      >
        <WaveformScene waveState={waveState} />
        <EffectComposer>
          <Bloom
            intensity={waveState.brightness * 0.8}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.4}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
