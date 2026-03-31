'use client'

import { BlurFade } from '@/components/ui/animations/blur-fade'
import { TextAnimate } from '@/components/ui/animations/text-animate'
import { NumberTicker } from '@/components/ui/animations/number-ticker'

const stats = [
  { n: 127,   prefix: '£', suffix: 'K+', l: 'Avg. savings identified per audit' },
  { n: 2,     prefix: '',  suffix: ' wks', l: 'Discovery to roadmap'              },
  { n: 10,    prefix: '',  suffix: '×',   l: 'Typical ROI on audit investment'    },
  { n: 8,     prefix: '',  suffix: '+ yrs', l: 'Enterprise transformation background' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="zone-dark noise-overlay min-h-screen flex flex-col justify-center section-pad pt-32 pb-20 border-b border-dark-b"
    >
      <div className="container-lg">
        {/* Eyebrow */}
        <BlurFade delay={0.1} className="mb-8">
          <p className="eyebrow eyebrow-dark">
            PEAK13 Consulting · UK &amp; UAE · Accountancy &amp; Property Management
          </p>
        </BlurFade>

        {/* Headline — word-by-word reveal */}
        <div className="mb-8">
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            delay={0.2}
            duration={0.55}
            className="font-heading font-extrabold text-white leading-[1.0]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' } as React.CSSProperties}
          >
            Operational chaos is
          </TextAnimate>
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            delay={0.45}
            duration={0.55}
            className="font-heading font-extrabold text-accent leading-[1.0]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' } as React.CSSProperties}
          >
            costing you more
          </TextAnimate>
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            delay={0.65}
            duration={0.55}
            className="font-heading font-extrabold text-white leading-[1.0]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' } as React.CSSProperties}
          >
            than you know.
          </TextAnimate>
        </div>

        {/* Sub */}
        <BlurFade delay={0.85} className="mb-10">
          <p className="text-dark-m text-lg md:text-xl max-w-2xl leading-relaxed font-body">
            I help accountancy firms and property management companies in the UK &amp; UAE
            find <strong className="text-white font-semibold">£50K–£150K in annual operational waste</strong> — and build
            the AI systems to eliminate it. In two weeks. With a guarantee.
          </p>
        </BlurFade>

        {/* CTAs */}
        <BlurFade delay={1.0} className="mb-12">
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary text-base px-8 py-4">
              Book a Free Snapshot Call →
            </a>
            <a href="#diagnostic" className="btn-ghost-dark text-base px-8 py-4">
              See the PEAK13 Diagnostic
            </a>
          </div>
        </BlurFade>

        {/* Guarantee badge */}
        <BlurFade delay={1.15} className="mb-0">
          <div className="guarantee-badge inline-flex">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            5× ROI Guarantee — if we don&apos;t identify at least 5× your investment in savings, you don&apos;t pay.
          </div>
        </BlurFade>

        {/* Stats strip — NumberTicker on each figure */}
        <BlurFade delay={1.3} className="mt-16 pt-10 border-t border-dark-b">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="font-heading font-extrabold text-white text-2xl md:text-3xl mb-1">
                  {s.prefix}
                  <NumberTicker
                    value={s.n}
                    delay={1.4}
                    className="font-heading font-extrabold text-white text-2xl md:text-3xl"
                  />
                  {s.suffix}
                </p>
                <p className="text-dark-m text-sm font-body leading-snug">{s.l}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
