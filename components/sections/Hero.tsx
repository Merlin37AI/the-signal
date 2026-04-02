'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/ui/animations/blur-fade'
import { NumberTicker } from '@/components/ui/animations/number-ticker'

const stats = [
  { n: 127,  prefix: '£', suffix: 'K', label: 'Annual savings per audit',           dark: false },
  { n: 14,   prefix: '',  suffix: '',   label: 'Days to roadmap delivery',            dark: true  },
  { n: 25,   prefix: '',  suffix: '×',  label: 'Peak ROI on diagnostic investment',   dark: false },
  { n: 8,    prefix: '',  suffix: '+',  label: 'Years enterprise background',         dark: false },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-[88px] grid md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_460px] border-b-[3px] border-ink bg-bg"
    >
      {/* LEFT: Typography */}
      <div className="px-6 md:px-10 lg:px-16 py-14 md:py-20 flex flex-col justify-between border-r-0 md:border-r-[3px] border-ink">
        <div>
          <BlurFade delay={0.05}>
            <p className="eyebrow eyebrow-light mb-8">
              PEAK13 Consulting · UK &amp; UAE · Accountancy &amp; Property Management
            </p>
          </BlurFade>

          {/* Big brutalist headline */}
          <div className="mb-10">
            <BlurFade delay={0.1}>
              <h1 className="font-heading leading-[0.92] tracking-wide" style={{ fontSize: 'clamp(5rem, 13vw, 12rem)' }}>
                <span className="block text-ink">THE</span>
                <span className="block" style={{
                  WebkitTextStroke: '3px #0F0F0F',
                  color: 'transparent',
                }}>COST</span>
                <span className="block">
                  <span className="bg-yellow text-ink px-3 inline-block">OF</span>
                </span>
                <span className="block text-accent">CHAOS</span>
              </h1>
            </BlurFade>
          </div>

          <BlurFade delay={0.35}>
            <p className="font-body text-muted text-lg leading-relaxed max-w-lg mb-10">
              I audit your operations, put a number on the waste, and build the AI systems
              to eliminate it. In two weeks. With a guarantee.
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                Book a Free Snapshot →
              </a>
              <a href="#diagnostic" className="btn-ghost-light">
                See the Diagnostic
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.65}>
            <div className="guarantee-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              5× ROI Guarantee — if we don&apos;t find it, you don&apos;t pay.
            </div>
          </BlurFade>
        </div>

        {/* Industry tags */}
        <BlurFade delay={0.8} className="mt-10 pt-8 border-t-[2px] border-ink/20">
          <div className="flex flex-wrap gap-3">
            {['Accountancy Firms', 'Property Management', 'United Kingdom', 'United Arab Emirates'].map((tag) => (
              <span key={tag} className="font-sub font-semibold text-xs tracking-[0.12em] uppercase text-muted border border-ink/30 px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </BlurFade>
      </div>

      {/* RIGHT: Stats panel + image */}
      <div className="hidden md:flex flex-col border-t-[3px] md:border-t-0 border-ink">
        {/* Pexels image header */}
        <div className="relative h-48 overflow-hidden border-b-[3px] border-ink shrink-0">
          <Image
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Business strategy team reviewing operational data"
            fill
            className="object-cover object-center"
            sizes="460px"
          />
          <div className="absolute inset-0 bg-ink/50" />
          <div className="absolute inset-0 flex items-end p-5">
            <p className="font-sub font-semibold text-xs tracking-[0.18em] uppercase text-white/70">
              Fractional AI Advisory · Evidence-first
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
              {/* Diamond accent */}
              <div
                className={`absolute top-3 right-3 w-3 h-3 border-2 rotate-45 ${
                  s.dark ? 'border-yellow' : 'border-accent'
                }`}
              />
              <p className={`font-heading leading-none`} style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
                <span className={s.dark ? 'text-yellow' : 'text-accent'}>
                  {s.prefix}
                  <NumberTicker
                    value={s.n}
                    delay={0.5 + i * 0.1}
                    className={`font-heading leading-none ${s.dark ? 'text-yellow' : 'text-accent'}`}
                  />
                  {s.suffix}
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
                <NumberTicker value={s.n} delay={0.4 + i * 0.1} className="font-heading text-3xl leading-none" />
                {s.suffix}
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
