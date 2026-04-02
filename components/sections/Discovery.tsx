'use client'

import { BlurFade } from '@/components/ui/animations/blur-fade'

const problems = [
  {
    number: '01',
    tag: 'The Tools-First Trap',
    headline: 'Most AI projects start with the technology. That\'s why they fail.',
    body: 'Businesses buy ChatGPT Enterprise, Copilot, or the latest automation platform — then try to find a use for it. Adoption stalls, ROI disappears, and the technology gets blamed. The technology isn\'t the problem. The order is.',
    metric: '73%',
    metricLabel: 'of enterprise AI pilots fail to scale past proof-of-concept',
  },
  {
    number: '02',
    tag: 'The Consultant Problem',
    headline: 'You get a deck. You needed a decision.',
    body: 'Traditional AI consultancies diagnose your business, produce a strategy document, and hand it over. Then it\'s your problem. What you actually need is someone who can translate strategy into executed systems — and stay embedded while you build it.',
    metric: '£0',
    metricLabel: 'Value of an AI strategy that never gets implemented',
  },
  {
    number: '03',
    tag: 'The Full-Time Gap',
    headline: 'You\'re not ready for a £150K Chief AI Officer. But you need the thinking.',
    body: 'Hiring a full-time senior AI lead is a commitment most growing businesses can\'t justify. Fractional advisory gives you that senior judgment — the strategic direction, implementation oversight, and vendor evaluation — at a fraction of the cost, for exactly as long as you need it.',
    metric: '÷10',
    metricLabel: 'Fractional cost vs full-time senior AI hire',
  },
]

export default function PainPoints() {
  return (
    <section id="pain" className="zone-dark noise-overlay border-b-[3px] border-ink">
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="section-header-bar border-ink/20">
          <span className="section-num-tag section-num-tag-inv">01</span>
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-white leading-none">
            WHY MOST AI PROJECTS FAIL
          </h2>
        </div>
      </div>

      {/* Problem columns */}
      <div className="grid md:grid-cols-3 border-t-0">
        {problems.map((p, i) => (
          <BlurFade key={p.number} delay={0.1 + i * 0.12}>
            <div className="relative p-8 md:p-10 flex flex-col border-b-[2px] md:border-b-0 md:border-r-[2px] border-dark-b last:border-r-0 last:border-b-0">
              {/* Ghost number */}
              <span className="absolute top-2 right-4 font-heading text-[7rem] text-white/[0.04] leading-none select-none pointer-events-none">
                {p.number}
              </span>

              {/* Tag */}
              <span className="font-sub font-700 text-xs tracking-[0.2em] uppercase text-white inline-block bg-ink border border-dark-b px-3 py-1.5 mb-6 self-start">
                {p.tag}
              </span>

              {/* Metric */}
              <p className="font-heading text-accent leading-none mb-5" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                {p.metric}
              </p>

              <h3 className="font-sub font-700 text-white text-lg md:text-xl uppercase tracking-wide leading-tight mb-4">
                {p.headline}
              </h3>

              <p className="font-body text-dark-m text-sm leading-relaxed mb-6 flex-1">{p.body}</p>

              {/* Metric line */}
              <div className="border-t border-dark-b pt-4 mt-auto">
                <p className="font-sub font-semibold text-xs tracking-[0.12em] uppercase text-accent/70">
                  {p.metricLabel}
                </p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Bridge */}
      <div className="px-6 md:px-12 lg:px-20 py-10 border-t-[2px] border-dark-b">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-body text-white text-lg max-w-xl leading-relaxed">
            <strong className="font-semibold text-white">A fractional AI advisor fixes all three.</strong>{' '}
            Strategy and implementation in the same engagement. Senior judgment without the full-time cost.
            Starting from your problem, not the technology.
          </p>
          <a href="#how-i-work" className="btn-red shrink-0">
            See how it works →
          </a>
        </div>
      </div>
    </section>
  )
}
