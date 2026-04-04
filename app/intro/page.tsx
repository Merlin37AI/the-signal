'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { Metadata } from 'next'

// Note: metadata export is handled in a separate layout or via generateMetadata
// This page is 'use client' so we set the title via useEffect

export default function IntroPage() {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)
  const enteringRef = useRef(false)

  useEffect(() => {
    document.title = 'Gary Does Strategy — Fractional AI Advisory'
  }, [])

  /* ── Entrance animation ── */
  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    const init = async () => {
      const { gsap } = await import('@/lib/gsap')
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.15 })

        /* 1 — divider line draws down */
        tl.fromTo('.intro-divider',
          { scaleY: 0, transformOrigin: 'top center' },
          { scaleY: 1, duration: 0.7, ease: 'power3.inOut' }
        )

        /* 2 — each logo word stamps up */
        ;['.word-gary', '.word-does', '.word-strategy'].forEach((sel, i) => {
          tl.fromTo(sel,
            { yPercent: 105, skewX: -3 },
            { yPercent: 0, skewX: 0, duration: 0.65, ease: 'power3.out' },
            i === 0 ? '-=0.25' : '-=0.48'
          )
        })

        /* 3 — yellow accent stripe enters */
        tl.fromTo('.intro-stripe',
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.5, ease: 'expo.out' },
          '-=0.3'
        )

        /* 4 — right panel items stagger in */
        tl.fromTo('.intro-right-item',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power2.out' },
          '-=0.2'
        )

        /* 5 — CTA arrow pulses once */
        tl.fromTo('.cta-arrow',
          { x: 0 },
          { x: 8, duration: 0.3, ease: 'power2.out', yoyo: true, repeat: 1 },
          '+=0.1'
        )
      }, containerRef)
    }
    init()
    return () => ctx.revert?.()
  }, [])

  /* ── Exit transition ── */
  const handleEnter = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (enteringRef.current) return
    enteringRef.current = true

    const { gsap } = await import('@/lib/gsap')
    const curtain = curtainRef.current
    if (!curtain) return

    /* Get click origin for radial expand */
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    const ox = rect.left + rect.width / 2
    const oy = rect.top + rect.height / 2
    const vw = window.innerWidth
    const vh = window.innerHeight
    /* Diagonal to furthest corner */
    const maxR = Math.sqrt(
      Math.pow(Math.max(ox, vw - ox), 2) + Math.pow(Math.max(oy, vh - oy), 2)
    ) * 2.2

    /* Position curtain as a circle at click origin */
    gsap.set(curtain, {
      display: 'block',
      width: 0,
      height: 0,
      left: ox,
      top: oy,
      xPercent: -50,
      yPercent: -50,
      borderRadius: '50%',
      background: '#FFD600',
      opacity: 1,
    })

    const tl = gsap.timeline({
      onComplete: () => router.push('/'),
    })

    /* Yellow circle expands to fill screen */
    tl.to(curtain, {
      width: maxR,
      height: maxR,
      duration: 0.55,
      ease: 'power3.in',
    })
    /* Flash to ink */
    .to(curtain, {
      background: '#0F0F0F',
      duration: 0.18,
      ease: 'none',
    }, '-=0.05')
    /* Hold briefly then navigate (onComplete fires) */
    .to(curtain, { opacity: 1, duration: 0.12 })
  }, [router])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden"
      style={{ background: '#0F0F0F' }}
    >
      {/* ── Transition curtain ── */}
      <div
        ref={curtainRef}
        className="fixed z-[100] pointer-events-none"
        style={{ display: 'none', position: 'fixed' }}
      />

      {/* ── Noise texture overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '160px',
          opacity: 0.6,
          mixBlendMode: 'overlay',
        }}
      />

      {/* ── Subtle crosshatch background on left panel ── */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none z-[1]"
        style={{
          width: '66.666%',
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 32px, rgba(255,255,255,0.012) 32px, rgba(255,255,255,0.012) 34px)',
        }}
      />

      <div className="relative z-[2] h-full flex flex-col md:flex-row">

        {/* ══════════════ LEFT: Logo 2/3 ══════════════ */}
        <div className="relative flex-none w-full md:w-[66.666%] flex flex-col justify-between px-8 py-8 md:px-14 md:py-12 lg:px-20 lg:py-16 border-b-[3px] md:border-b-0 md:border-r-[3px] border-white/8">

          {/* Top bar */}
          <div className="flex items-center justify-between">
            <span
              className="font-sub font-700 tracking-[0.3em] uppercase"
              style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.18)' }}
            >
              Gary Does Strategy
            </span>
            <span
              className="font-sub font-700 tracking-[0.22em] uppercase"
              style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.1)' }}
            >
              Est. 2023
            </span>
          </div>

          {/* ── Logo words — each in overflow container so stamp works ── */}
          <div className="flex-1 flex flex-col justify-center py-6 md:py-0">
            {/* GARY */}
            <div className="overflow-hidden leading-none">
              <span
                className="word-gary font-heading block leading-[0.85] text-white"
                style={{ fontSize: 'clamp(5.5rem, 14vw, 17rem)', letterSpacing: '-0.01em' }}
              >
                GARY
              </span>
            </div>

            {/* DOES — outline */}
            <div className="overflow-hidden leading-none">
              <span
                className="word-does font-heading block leading-[0.85]"
                style={{
                  fontSize: 'clamp(5.5rem, 14vw, 17rem)',
                  letterSpacing: '-0.01em',
                  WebkitTextStroke: 'clamp(1px, 0.2vw, 3px) rgba(255,255,255,0.18)',
                  color: 'transparent',
                }}
              >
                DOES
              </span>
            </div>

            {/* STRATEGY — yellow accent */}
            <div className="overflow-hidden leading-none">
              <span
                className="word-strategy font-heading block leading-[0.85]"
                style={{
                  fontSize: 'clamp(5.5rem, 14vw, 17rem)',
                  letterSpacing: '-0.01em',
                  color: '#FFD600',
                }}
              >
                STRATEGY
              </span>
            </div>

            {/* Accent stripe under logo */}
            <div
              className="intro-stripe mt-6 md:mt-8 h-[3px] bg-accent"
              style={{ width: 'clamp(60px, 12vw, 160px)' }}
            />
          </div>

          {/* Bottom: location tags */}
          <div className="flex flex-wrap items-center gap-6">
            {['Dubai, UAE', 'United Kingdom', 'Remote'].map((loc, i) => (
              <span
                key={loc}
                className="font-sub font-700 tracking-[0.2em] uppercase flex items-center gap-3"
                style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.18)' }}
              >
                {i > 0 && <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />}
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* ── Vertical divider (positioned absolutely so it draws over both panels) ── */}
        <div
          className="intro-divider hidden md:block absolute top-0 bottom-0 w-[3px] z-[3]"
          style={{ left: '66.666%', background: 'rgba(255,214,0,0.15)' }}
        />

        {/* ══════════════ RIGHT: Content 1/3 ══════════════ */}
        <div className="flex-1 flex flex-col justify-between px-8 py-8 md:px-12 md:py-12 lg:px-14 lg:py-16">

          {/* Top: GDS monogram */}
          <div className="intro-right-item">
            <p
              className="font-heading leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'rgba(255,255,255,0.07)', letterSpacing: '0.04em' }}
            >
              GDS
            </p>
          </div>

          {/* Middle: description block */}
          <div className="space-y-8 md:space-y-10">

            <div className="intro-right-item">
              <p
                className="font-sub font-700 tracking-[0.25em] uppercase mb-5"
                style={{ fontSize: '0.58rem', color: '#FFD600' }}
              >
                Fractional AI Advisory
              </p>
              <h2
                className="font-heading text-white leading-[0.95] tracking-wide mb-5"
                style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2.2rem)' }}
              >
                SENIOR AI JUDGMENT.<br />EMBEDDED INSIDE<br />YOUR TEAM.
              </h2>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.38)' }}
              >
                Gary Quigley translates what AI can actually do into operational
                systems your business can run — without the full-time cost of a
                senior AI hire.
              </p>
            </div>

            {/* ── CTA ── */}
            <div className="intro-right-item">
              <button
                ref={ctaRef}
                onClick={handleEnter}
                className="group flex items-center gap-5 cursor-pointer"
                aria-label="Enter the Gary Does Strategy site"
              >
                <span
                  className="font-heading text-white group-hover:text-yellow transition-colors duration-200 leading-none"
                  style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '0.02em' }}
                >
                  ENTER
                </span>
                <span className="flex items-center gap-2">
                  <span
                    className="block h-[2px] bg-yellow/40 group-hover:bg-yellow transition-all duration-300 group-hover:w-14"
                    style={{ width: '2rem' }}
                  />
                  <span
                    className="cta-arrow font-heading leading-none text-yellow/40 group-hover:text-yellow transition-colors duration-200"
                    style={{ fontSize: '1.8rem' }}
                  >
                    →
                  </span>
                </span>
              </button>
              <p
                className="font-sub font-700 tracking-[0.18em] uppercase mt-3"
                style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.15)' }}
              >
                thesite.garydoesstrategy.com
              </p>
            </div>
          </div>

          {/* Bottom: credentials strip */}
          <div className="intro-right-item space-y-4">
            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
            <div className="space-y-2">
              {[
                'ITIL 4 Foundation',
                'Six Sigma Green Belt',
                'AI in Business — UPenn',
                'Micro MBA Cum Laude',
              ].map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <span style={{ width: 4, height: 4, background: '#D90000', display: 'inline-block', flexShrink: 0 }} />
                  <span
                    className="font-sub font-700 tracking-[0.12em] uppercase"
                    style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.18)' }}
                  >
                    {c}
                  </span>
                </div>
              ))}
            </div>
            <p
              className="font-sub font-semibold tracking-[0.1em] uppercase"
              style={{ fontSize: '0.48rem', color: 'rgba(255,255,255,0.1)' }}
            >
              © {new Date().getFullYear()} Gary Quigley · Gary Does Strategy · All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
