'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import Image from 'next/image'

type ModalType = 'audit' | 'talk' | 'call'

interface HeroProps {
  onCTA: (type: ModalType) => void
}

export default function Hero({ onCTA }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-name',
        { opacity: 0, y: 40, letterSpacing: '0.5em' },
        { opacity: 1, y: 0, letterSpacing: '0.12em', duration: 1.6, ease: 'expo.out', delay: 0.4 }
      )
      gsap.fromTo(
        '.hero-tagline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1 }
      )
      gsap.fromTo(
        '.hero-ctas',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 1.4 }
      )
      gsap.fromTo(
        '.hero-scroll-hint',
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 2.2 }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="section-full relative z-10 flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: '100vh' }}
    >
      {/* Headshot — subtle, positioned in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[340px] h-[340px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden opacity-[0.07]"
          style={{ filter: 'grayscale(100%) brightness(1.2)' }}
        >
          <Image
            src="/gary-headshot.jpg"
            alt="Gary Quigley"
            width={480}
            height={480}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="label-tag hero-tagline" style={{ opacity: 0 }}>
          PEAK13 Consulting · Dubai & UK
        </p>

        <h1
          className="hero-name font-heading text-6xl md:text-8xl lg:text-[108px] font-bold text-white leading-none mt-4 mb-6"
          style={{ opacity: 0, letterSpacing: '0.5em' }}
        >
          GARY
          <br />
          <span className="gradient-text">QUIGLEY</span>
        </h1>

        <p
          className="hero-tagline font-heading text-xl md:text-2xl text-teal-muted/80 mb-10 tracking-wide"
          style={{ opacity: 0 }}
        >
          Finding the signal.
        </p>

        <p
          className="hero-tagline text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed font-body"
          style={{ opacity: 0 }}
        >
          I show service businesses where AI makes sense for them. Structured AI audits, automation builds,
          and fractional strategy for UAE &amp; UK leaders ready to scale without the overwhelm.
        </p>

        {/* CTA Pills */}
        <div className="hero-ctas flex flex-wrap gap-4 justify-center" style={{ opacity: 0 }}>
          <button
            onClick={() => onCTA('audit')}
            className="group relative px-8 py-3.5 rounded-full bg-teal text-bg font-semibold text-sm tracking-wide hover:bg-teal-light transition-all duration-300 teal-glow"
            data-cursor-hover
          >
            Hire Me — AI Audit
            <span className="ml-2 opacity-60 group-hover:opacity-100 group-hover:ml-3 transition-all duration-200">→</span>
          </button>
          <button
            onClick={() => onCTA('talk')}
            className="px-8 py-3.5 rounded-full border border-teal/40 text-teal-muted text-sm font-semibold tracking-wide hover:bg-teal/10 hover:border-teal transition-all duration-300"
            data-cursor-hover
          >
            Book a Talk
          </button>
          <a
            href="#origin"
            className="px-8 py-3.5 rounded-full border border-white/10 text-white/50 text-sm font-semibold tracking-wide hover:text-white hover:border-white/30 transition-all duration-300"
            data-cursor-hover
          >
            My Story
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0 }}>
        <span className="text-xs text-teal-muted/40 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-teal/40 to-transparent animate-pulse-slow" />
      </div>
    </section>
  )
}
