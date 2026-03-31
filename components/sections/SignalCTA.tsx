'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

type ModalType = 'audit' | 'talk' | 'call'

interface SignalCTAProps {
  onCTA: (type: ModalType) => void
}

export default function SignalCTA({ onCTA }: SignalCTAProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.signal-pulse',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.4, ease: 'elastic.out(1, 0.5)',
          scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      )
      gsap.fromTo(
        '.signal-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.3,
          scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="signal"
      ref={ref}
      className="section-full relative z-10 px-6 py-32 flex items-center justify-center text-center"
    >
      {/* Pulse rings */}
      <div className="signal-pulse absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ opacity: 0 }}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-teal/10 animate-pulse-slow"
            style={{
              width: `${i * 200}px`,
              height: `${i * 200}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-teal teal-glow" />
      </div>

      {/* Content */}
      <div className="signal-content max-w-2xl mx-auto relative z-10" style={{ opacity: 0 }}>
        <p className="label-tag">Ready?</p>

        <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
          Book a{' '}
          <span className="gradient-text">Signal Call.</span>
        </h2>

        <p className="text-teal-muted/70 text-lg leading-relaxed font-body mb-10 max-w-lg mx-auto">
          30 minutes. No pitch. No fluff. Just a clear conversation about where AI
          fits your business — and what the next step looks like.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => onCTA('call')}
            className="px-10 py-4 bg-teal text-bg font-bold text-base rounded-full hover:bg-teal-light transition-all duration-300 teal-glow font-heading tracking-wide"
            data-cursor-hover
          >
            Book a Signal Call →
          </button>
          <button
            onClick={() => onCTA('audit')}
            className="px-10 py-4 border border-teal/30 text-teal-muted text-base font-semibold rounded-full hover:bg-teal/10 hover:border-teal transition-all duration-300 font-body"
            data-cursor-hover
          >
            Request an AI Audit
          </button>
        </div>

        {/* Contact strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-teal-muted/50">
          <a
            href="https://www.linkedin.com/in/gary-quigley"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-muted transition-colors duration-200 flex items-center gap-2"
            data-cursor-hover
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <span className="text-teal/20">·</span>
          <a
            href="mailto:quigleygary@hotmail.com"
            className="hover:text-teal-muted transition-colors duration-200"
            data-cursor-hover
          >
            quigleygary@hotmail.com
          </a>
          <span className="text-teal/20">·</span>
          <span>Dubai, UAE &amp; UK</span>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-teal/10">
          <p className="text-xs text-teal/30 font-body tracking-widest uppercase">
            PEAK13 Consulting Ltd · © {new Date().getFullYear()} Gary Quigley
          </p>
        </div>
      </div>
    </section>
  )
}
