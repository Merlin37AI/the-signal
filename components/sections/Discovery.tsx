'use client'

import { BlurFade } from '@/components/ui/animations/blur-fade'

const pains = [
  {
    number: '01',
    tag: 'Capacity Drain',
    headline: 'Your highest-paid people are doing £12/hr work.',
    body: 'Partners manually chasing client documents. Property managers copy-pasting rent reminders into WhatsApp. Senior staff spending half their day on tasks a well-configured system could handle in seconds.',
    cost: '£45K',
    costLabel: 'Est. annual capacity waste',
  },
  {
    number: '02',
    tag: 'Seasonal Crisis',
    headline: "Tax season shouldn't be a capacity crisis every year.",
    body: "You already know it's coming — the 14-hour days, the near-misses on deadlines, the staff burnout. Yet the same manual processes that caused it last year are still running unchanged. That's not a people problem. It's a systems problem.",
    cost: '£20K',
    costLabel: 'Est. annual overtime & attrition cost',
  },
  {
    number: '03',
    tag: 'Legal Exposure',
    headline: 'Maintenance coordination via WhatsApp is a liability.',
    body: "No audit trail. No accountability. Contractors missed, tenants escalating, landlords unhappy. The moment something goes wrong legally, you'll wish you had a system — not a chat thread.",
    cost: '£30K',
    costLabel: 'Est. annual disputes & lost contracts',
  },
]

export default function PainPoints() {
  return (
    <section id="pain" className="zone-dark border-b-[3px] border-ink">
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="section-header-bar border-ink/20">
          <span className="section-num-tag section-num-tag-inv">01</span>
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-white leading-none">
            WHERE THE MONEY ACTUALLY GOES
          </h2>
        </div>
      </div>

      {/* Pain columns */}
      <div className="grid md:grid-cols-3 border-t-0">
        {pains.map((p, i) => (
          <BlurFade key={p.number} delay={0.1 + i * 0.12}>
            <div className={`relative p-8 md:p-10 flex flex-col border-b-[2px] md:border-b-0 md:border-r-[2px] border-dark-b last:border-r-0 last:border-b-0`}>
              {/* Ghost number */}
              <span className="absolute top-2 right-4 font-heading text-[7rem] text-white/[0.04] leading-none select-none pointer-events-none">
                {p.number}
              </span>

              {/* Tag */}
              <span className="font-sub font-700 text-xs tracking-[0.2em] uppercase text-white inline-block bg-ink border border-dark-b px-3 py-1.5 mb-6 self-start">
                {p.tag}
              </span>

              {/* Cost */}
              <p className="font-heading text-accent leading-none mb-5" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                {p.cost}
              </p>

              <h3 className="font-sub font-700 text-white text-lg md:text-xl uppercase tracking-wide leading-tight mb-4">
                {p.headline}
              </h3>

              <p className="font-body text-dark-m text-sm leading-relaxed mb-6 flex-1">{p.body}</p>

              {/* Cost line */}
              <div className="border-t border-dark-b pt-4 mt-auto">
                <p className="font-sub font-semibold text-xs tracking-[0.12em] uppercase text-accent/70">
                  {p.costLabel}
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
            <strong className="font-semibold text-white">The average business we audit is losing £50K–£150K a year</strong>{' '}
            to processes they assume are unavoidable. They&apos;re not.
          </p>
          <a href="#diagnostic" className="btn-red shrink-0">
            See the PEAK13 Diagnostic →
          </a>
        </div>
      </div>
    </section>
  )
}
