'use client'

import { useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'

export default function IntroPage() {
  const router = useRouter()
  const curtainRef = useRef<HTMLDivElement>(null)
  const enteringRef = useRef(false)

  /* ── Exit transition — clip-path radial reveal ── */
  const handleEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (enteringRef.current) return
    enteringRef.current = true

    const curtain = curtainRef.current
    if (!curtain) { router.push('/home'); return }

    /* Get click origin as % of viewport */
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const ox = rect.left + rect.width / 2
    const oy = rect.top + rect.height / 2
    const oxPct = ((ox / window.innerWidth) * 100).toFixed(2)
    const oyPct = ((oy / window.innerHeight) * 100).toFixed(2)

    /* Show curtain collapsed at click origin */
    curtain.style.display = 'block'
    curtain.style.background = '#FFD600'
    curtain.style.clipPath = `circle(0% at ${oxPct}% ${oyPct}%)`
    curtain.style.transition = 'none'

    /* Force paint, then animate */
    curtain.getBoundingClientRect()

    /* Phase 1: yellow circle expands from click point */
    curtain.style.transition = 'clip-path 0.55s cubic-bezier(0.76,0,0.24,1)'
    curtain.style.clipPath = `circle(150% at ${oxPct}% ${oyPct}%)`

    curtain.addEventListener('transitionend', () => {
      /* Phase 2: snap to ink */
      curtain.style.transition = 'background 0.12s ease'
      curtain.style.background = '#0F0F0F'

      /* Phase 3: navigate to main site */
      setTimeout(() => router.push('/home'), 140)
    }, { once: true })
  }, [router])

  return (
    <>
      {/* ── Transition curtain — covers full screen ── */}
      <div
        ref={curtainRef}
        style={{
          display: 'none',
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          pointerEvents: 'none',
        }}
      />

      <div
        className="fixed inset-0 overflow-hidden"
        style={{ background: '#0F0F0F' }}
      >
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

        {/* ── Crosshatch background on left panel ── */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none z-[1]"
          style={{
            width: '66.666%',
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 32px, rgba(255,255,255,0.012) 32px, rgba(255,255,255,0.012) 34px)',
          }}
        />

        <div className="relative z-[2] h-full flex flex-col md:flex-row">

          {/* ══════════════ LEFT: Logo 2/3 ══════════════ */}
          <div
            className="relative flex-none w-full md:w-[66.666%] flex flex-col justify-between px-8 py-8 md:px-14 md:py-12 lg:px-20 lg:py-16 border-b-[3px] md:border-b-0 md:border-r-[3px] border-white/8"
            style={{ animation: 'intro-panel-in 0.6s cubic-bezier(0.22,1,0.36,1) both' }}
          >

            {/* Top bar */}
            <div className="flex items-center justify-between" style={{ animation: 'intro-fade-up 0.5s 0.1s both' }}>
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

            {/* ── Logo words ── */}
            <div className="flex-1 flex flex-col justify-center py-6 md:py-0">

              {/* GARY */}
              <div className="overflow-hidden leading-none">
                <span
                  className="font-heading block leading-[0.85] text-white"
                  style={{
                    fontSize: 'clamp(5.5rem, 14vw, 17rem)',
                    letterSpacing: '-0.01em',
                    animation: 'intro-word-up 0.7s 0.15s cubic-bezier(0.22,1,0.36,1) both',
                  }}
                >
                  GARY
                </span>
              </div>

              {/* DOES — outline */}
              <div className="overflow-hidden leading-none">
                <span
                  className="font-heading block leading-[0.85]"
                  style={{
                    fontSize: 'clamp(5.5rem, 14vw, 17rem)',
                    letterSpacing: '-0.01em',
                    WebkitTextStroke: 'clamp(1px, 0.2vw, 3px) rgba(255,255,255,0.18)',
                    color: 'transparent',
                    animation: 'intro-word-up 0.7s 0.28s cubic-bezier(0.22,1,0.36,1) both',
                  }}
                >
                  DOES
                </span>
              </div>

              {/* STRATEGY — yellow */}
              <div className="overflow-hidden leading-none">
                <span
                  className="font-heading block leading-[0.85]"
                  style={{
                    fontSize: 'clamp(5.5rem, 14vw, 17rem)',
                    letterSpacing: '-0.01em',
                    color: '#FFD600',
                    animation: 'intro-word-up 0.7s 0.41s cubic-bezier(0.22,1,0.36,1) both',
                  }}
                >
                  STRATEGY
                </span>
              </div>

              {/* Accent stripe */}
              <div
                className="mt-6 md:mt-8 h-[3px] bg-accent"
                style={{
                  width: 'clamp(60px, 12vw, 160px)',
                  animation: 'intro-stripe-in 0.5s 0.6s cubic-bezier(0.22,1,0.36,1) both',
                  transformOrigin: 'left center',
                }}
              />
            </div>

            {/* Bottom: location tags */}
            <div className="flex flex-wrap items-center gap-6" style={{ animation: 'intro-fade-up 0.5s 0.55s both' }}>
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

          {/* ── Vertical divider ── */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-[3px] z-[3]"
            style={{
              left: '66.666%',
              background: 'rgba(255,214,0,0.15)',
              animation: 'intro-divider-in 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both',
              transformOrigin: 'top center',
            }}
          />

          {/* ══════════════ RIGHT: Content 1/3 ══════════════ */}
          <div className="flex-1 flex flex-col justify-between px-8 py-8 md:px-12 md:py-12 lg:px-14 lg:py-16">

            {/* Top: GDS monogram */}
            <div style={{ animation: 'intro-fade-up 0.5s 0.45s both' }}>
              <p
                className="font-heading leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'rgba(255,255,255,0.07)', letterSpacing: '0.04em' }}
              >
                GDS
              </p>
            </div>

            {/* Middle: description + CTA */}
            <div className="space-y-8 md:space-y-10">

              <div style={{ animation: 'intro-fade-up 0.5s 0.55s both' }}>
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
              <div style={{ animation: 'intro-fade-up 0.5s 0.68s both' }}>
                <button
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
                      className="font-heading leading-none text-yellow/60 group-hover:text-yellow transition-colors duration-200"
                      style={{ fontSize: '1.8rem', display: 'inline-block', animation: 'intro-arrow-pulse 1.8s 1.2s ease-in-out infinite' }}
                    >
                      →
                    </span>
                  </span>
                </button>
                <p
                  className="font-sub font-700 tracking-[0.18em] uppercase mt-3"
                  style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.15)' }}
                >
                  garydoesstrategy.com
                </p>
              </div>
            </div>

            {/* Bottom: credentials strip */}
            <div style={{ animation: 'intro-fade-up 0.5s 0.72s both' }} className="space-y-4">
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

      <style>{`
        @keyframes intro-word-up {
          from { transform: translateY(110%) skewX(-3deg); }
          to   { transform: translateY(0)    skewX(0deg);  }
        }
        @keyframes intro-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes intro-panel-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes intro-divider-in {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes intro-stripe-in {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes intro-arrow-pulse {
          0%, 100% { transform: translateX(0);  }
          50%       { transform: translateX(8px); }
        }
      `}</style>
    </>
  )
}
