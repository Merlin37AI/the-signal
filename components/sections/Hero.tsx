'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { BlurFade } from '@/components/ui/animations/blur-fade'
import { NumberTicker } from '@/components/ui/animations/number-ticker'
import MagneticButton from '@/components/ui/MagneticButton'

const stats = [
  { n: 8,  prefix: '', suffix: '+', label: 'Years in enterprise IT & operations',  dark: false },
  { n: 2,  prefix: '', suffix: '',  label: 'Active fractional clients',             dark: true  },
  { n: 14, prefix: '', suffix: '',  label: 'Days average to first recommendations', dark: false },
  { n: 3,  prefix: '', suffix: '',  label: 'Engagement models available',           dark: false },
]

export default function Hero() {
  const heroRef  = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    const init = async () => {
      const { gsap, ScrollTrigger } = await import('@/lib/gsap')
      ctx = gsap.context(() => {
        gsap.to(panelRef.current, {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
      }, heroRef)
    }
    init()
    return () => ctx.revert?.()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen pt-[110px] grid md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_460px] border-b-[3px] border-ink bg-bg"
    >
      {/* LEFT: Typography */}
      <div className="px-6 md:px-10 lg:px-16 py-14 md:py-20 flex flex-col justify-between border-r-0 md:border-r-[3px] border-ink">
        <div>
          <BlurFade delay={0.05}>
            <p className="eyebrow eyebrow-light mb-8">
              Gary Quigley · Fractional AI Advisor · Gary Does Strategy · Dubai &amp; UK
            </p>
          </BlurFade>

          {/* Big brutalist headline — staggered word stamp reveal */}
          <div className="mb-10">
            <h1 className="font-heading leading-[0.92] tracking-wide" style={{ fontSize: 'clamp(4.5rem, 12vw, 11rem)' }}>
              <span className="block overflow-hidden">
                <span className="word-stamp text-ink" style={{ animationDelay: '0.08s' }}>DIFFERENT</span>
              </span>
              <span className="block overflow-hidden">
                <span className="word-stamp" style={{ WebkitTextStroke: '3px #0F0F0F', color: 'transparent', animationDelay: '0.22s' }}>THINKING.</span>
              </span>
              <span className="block overflow-hidden">
                <span className="word-stamp" style={{ animationDelay: '0.36s' }}>
                  <span className="bg-yellow text-ink px-3 inline-block">BETTER</span>
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="word-stamp text-accent" style={{ animationDelay: '0.50s' }}>SYSTEMS.</span>
              </span>
            </h1>
          </div>

          <BlurFade delay={0.35}>
            <p className="font-body text-muted text-lg leading-relaxed max-w-lg mb-10">
              I&apos;m a Fractional AI Advisor embedded inside leadership teams. I translate what
              AI can actually do into a plan your business can execute — without the full-time cost
              of a senior AI hire.
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="flex flex-wrap gap-4 mb-8">
              <MagneticButton href="#contact" className="btn-primary">
                Work With Gary →
              </MagneticButton>
              <MagneticButton href="#how-i-work" className="btn-ghost-light">
                How it works
              </MagneticButton>
            </div>
          </BlurFade>

          <BlurFade delay={0.65}>
            <div className="guarantee-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Senior AI judgment. Fractional cost. Real implementation.
            </div>
          </BlurFade>
        </div>

        {/* Tags */}
        <BlurFade delay={0.8} className="mt-10 pt-8 border-t-[2px] border-ink/20">
          <div className="flex flex-wrap gap-3">
            {['Fractional Advisory', 'AI Strategy', 'Operations', 'United Arab Emirates', 'United Kingdom'].map((tag) => (
              <span key={tag} className="font-sub font-semibold text-xs tracking-[0.12em] uppercase text-muted border border-ink/30 px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </BlurFade>
      </div>

      {/* Rotated availability stamp — anchors the two columns */}
      <div
        className="hidden md:flex absolute items-center justify-center z-20"
        style={{
          left: 'calc(100% / 12 * 7 - 64px)',
          top: '160px',
          width: '128px',
          height: '128px',
          transform: 'rotate(-12deg)',
        }}
      >
        <div
          className="w-full h-full rounded-full bg-accent border-[3px] border-ink flex items-center justify-center text-center"
          style={{ boxShadow: '4px 4px 0 #0F0F0F' }}
        >
          <span className="font-heading text-white leading-tight tracking-[0.1em]" style={{ fontSize: '0.72rem' }}>
            TAKING<br />NEW<br />CLIENTS
          </span>
        </div>
      </div>

      {/* RIGHT: Stats panel + image — parallax target */}
      <div ref={panelRef} className="hidden md:flex flex-col border-t-[3px] md:border-t-0 border-ink will-change-transform">
        {/* Image */}
        <div className="relative h-48 overflow-hidden border-b-[3px] border-ink shrink-0">
          <Image
            src="/upload_2.jpg"
            alt="AI advisor working with leadership team"
            fill
            className="object-cover object-center"
            sizes="460px"
          />
          <div className="absolute inset-0 bg-ink/55" />
          <div className="absolute inset-0 flex items-end p-5">
            <p className="font-sub font-semibold text-xs tracking-[0.18em] uppercase text-white/70">
              Fractional AI Advisory · Dubai &amp; UK
            </p>
          </div>
        </div>

        {/* Stats */}
        {stats.map((s, i) => (
          <BlurFade key={s.label} delay={0.2 + i * 0.1} className="flex-1">
            <div
              className={`relative h-full flex flex-col justify-between p-7 border-b-[2px] border-ink ${
                s.dark ? 'bg-ink text-white' : 'bg-bg'
              }`}
              style={{ minHeight: '90px' }}
            >
              <div className={`absolute top-3 right-3 w-3 h-3 border-2 rotate-45 ${s.dark ? 'border-yellow' : 'border-accent'}`} />
              <p className="font-heading leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
                <span className={s.dark ? 'text-yellow' : 'text-accent'}>
                  {s.prefix}
                  <NumberTicker
                    value={s.n}
                    suffix={s.suffix}
                    delay={0.5 + i * 0.1}
                    className={`font-heading leading-none ${s.dark ? 'text-yellow' : 'text-accent'}`}
                  />
                </span>
              </p>
              <p className={`font-sub font-semibold text-xs tracking-[0.12em] uppercase mt-1 ${
                s.dark ? 'text-white/50' : 'text-muted'
              }`}>
                {s.label}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Mobile stats strip */}
      <div className="md:hidden border-t-[3px] border-ink grid grid-cols-2">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`p-5 border-b-[2px] border-r-[2px] border-ink last:border-r-0 ${
              s.dark ? 'bg-ink text-white' : 'bg-bg'
            }`}
          >
            <p className="font-heading text-3xl leading-none">
              <span className={s.dark ? 'text-yellow' : 'text-accent'}>
                {s.prefix}
                <NumberTicker value={s.n} suffix={s.suffix} delay={0.4 + i * 0.1} className="font-heading text-3xl leading-none" />
              </span>
            </p>
            <p className={`font-sub font-semibold text-[0.6rem] tracking-[0.12em] uppercase mt-1 ${
              s.dark ? 'text-white/50' : 'text-muted'
            }`}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
