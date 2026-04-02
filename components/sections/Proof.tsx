'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/ui/animations/blur-fade'
import { NumberTicker } from '@/components/ui/animations/number-ticker'

const cases = [
  {
    industry: 'Accountancy',
    location: 'UK · 18-partner firm',
    headline: '£125,000 in recoverable annual cost — found in two weeks.',
    summary:
      'A mid-sized UK accountancy firm came to PEAK13 after two consecutive years of tax season capacity crises. Partners were routinely working 70-hour weeks from January to April. Staff were burning out. A junior hire every year was patching the problem without solving it.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Accountant working with financial documents and spreadsheets',
    findings: [
      { area: 'Client document chasing',    detail: 'Partners spent avg. 6 hrs/week manually requesting, logging, and chasing documents by email.',                    savingNum: 34, saving: '£34K' },
      { area: 'Compliance report assembly', detail: 'Statutory accounts and compliance packs assembled manually from multiple sources. 3–4 hrs per client per quarter.', savingNum: 41, saving: '£41K' },
      { area: 'Onboarding new clients',     detail: 'No standardised process. Every new client took 3–6 hours of partner time across systems.',                         savingNum: 22, saving: '£22K' },
      { area: 'Internal time reporting',    detail: 'Fee earner time logs submitted and compiled manually. Monthly reconciliation consumed 8+ hours of admin.',           savingNum: 28, saving: '£28K' },
    ],
    totalNum: 125,
    note: 'Diagnostic cost: £5,000. ROI on the diagnostic alone: 25×.',
  },
  {
    industry: 'Property Management',
    location: 'UAE · 340-unit portfolio',
    headline: '£87,000 in operational waste — discovered in 11 days.',
    summary:
      "A Dubai-based property management company managing 340 residential units was handling tenant communications, maintenance coordination, and rent collection almost entirely via WhatsApp groups and shared spreadsheets. The team of 12 was at capacity.",
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Modern office building interior representing property management',
    findings: [
      { area: 'Tenant maintenance coordination', detail: 'Maintenance requests received via WhatsApp, manually logged, assigned, and followed up. No SLA tracking.',    savingNum: 29, saving: '£29K' },
      { area: 'Rent collection follow-up',       detail: 'Office staff manually called and messaged tenants 3–5 days before due date. 30% of units required follow-up.', savingNum: 21, saving: '£21K' },
      { area: 'Lease renewal processing',        detail: 'Renewals triggered by calendar reminders, drafted from templates manually, sent and tracked in email.',         savingNum: 19, saving: '£19K' },
      { area: 'Landlord reporting',              detail: 'Monthly reports compiled manually per landlord from multiple spreadsheets. 2 hrs per landlord per month.',       savingNum: 18, saving: '£18K' },
    ],
    totalNum: 87,
    note: 'Diagnostic cost: £5,000. ROI on the diagnostic alone: 17.4×.',
  },
]

export default function Comparison() {
  return (
    <section id="results" className="zone-light border-b-[3px] border-ink">
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="section-header-bar">
          <span className="section-num-tag">04</span>
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-ink leading-none">
            REAL BUSINESSES. REAL NUMBERS.
          </h2>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <BlurFade delay={0.05} className="mb-12">
          <p className="font-body text-muted text-lg leading-relaxed max-w-2xl">
            Every engagement starts with the PEAK13 Diagnostic. Here&apos;s what it found for
            two of our clients — with the exact breakdown.
          </p>
        </BlurFade>

        <div className="space-y-14">
          {cases.map((c, ci) => (
            <BlurFade key={c.industry} delay={0.1 + ci * 0.15}>
              <div className="border-[3px] border-ink overflow-hidden" style={{ boxShadow: '6px 6px 0 #D90000' }}>
                {/* Image banner */}
                <div className="relative w-full h-52 md:h-64 overflow-hidden border-b-[3px] border-ink">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
                  {/* Labels */}
                  <div className="absolute bottom-5 left-6 flex items-center gap-3">
                    <span className="font-sub font-700 text-xs tracking-[0.15em] uppercase text-white bg-accent border-[2px] border-accent px-3 py-1.5">
                      {c.industry}
                    </span>
                    <span className="font-sub font-semibold text-xs tracking-[0.1em] uppercase text-white/70 border border-white/20 px-3 py-1.5">
                      {c.location}
                    </span>
                  </div>
                  {/* Total in corner */}
                  <div className="absolute bottom-4 right-6 text-right">
                    <p className="font-heading text-yellow leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                      £<NumberTicker
                        value={c.totalNum}
                        delay={0.3 + ci * 0.2}
                        className="font-heading text-yellow leading-none"
                      />K
                    </p>
                    <p className="font-sub font-semibold text-[0.6rem] tracking-[0.14em] uppercase text-white/50 mt-1">
                      Total savings identified
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 md:p-10 bg-bg">
                  <h3 className="font-heading text-ink leading-[1.0] mb-4 tracking-wide" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                    {c.headline.toUpperCase()}
                  </h3>
                  <p className="font-body text-muted text-base leading-relaxed mb-8">{c.summary}</p>

                  {/* Findings grid */}
                  <div className="grid md:grid-cols-2 gap-0 border-[2px] border-ink mb-6">
                    {c.findings.map((f, fi) => (
                      <BlurFade key={f.area} delay={0.15 + fi * 0.08}>
                        <div className={`p-5 border-b-[2px] border-r-[2px] last:border-r-0 border-ink ${fi >= 2 ? 'border-b-0' : ''}`}>
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <p className="font-sub font-700 text-ink text-sm uppercase tracking-wide leading-snug">{f.area}</p>
                            <p className="font-heading text-accent text-2xl shrink-0 whitespace-nowrap leading-none">
                              £<NumberTicker
                                value={f.savingNum}
                                delay={0.4 + fi * 0.1}
                                className="font-heading text-accent text-2xl leading-none"
                              />K
                            </p>
                          </div>
                          <p className="font-body text-muted text-xs leading-relaxed">{f.detail}</p>
                        </div>
                      </BlurFade>
                    ))}
                  </div>

                  {/* Note */}
                  <div className="bg-ink px-5 py-4">
                    <p className="font-sub font-semibold text-sm tracking-[0.08em] uppercase text-white/50">{c.note}</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={0.4} className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 border-t-[2px] border-ink pt-10">
          <p className="font-body text-muted text-base max-w-xl leading-relaxed">
            These numbers are typical. The exact figure for your business depends on size, complexity,
            and current processes — which is exactly what the Diagnostic is designed to find.
          </p>
          <a href="#contact" className="btn-primary shrink-0">
            Book a Free Snapshot →
          </a>
        </BlurFade>
      </div>
    </section>
  )
}
