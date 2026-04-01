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
      { area: 'Client document chasing',    detail: 'Partners spent avg. 6 hrs/week manually requesting, logging, and chasing documents by email.',                          savingNum: 34, saving: '£34,000/yr' },
      { area: 'Compliance report assembly', detail: 'Statutory accounts and compliance packs assembled manually from multiple sources. 3–4 hrs per client per quarter.',       savingNum: 41, saving: '£41,000/yr' },
      { area: 'Onboarding new clients',     detail: 'No standardised process. Every new client took 3–6 hours of partner time to onboard across systems.',                    savingNum: 22, saving: '£22,000/yr' },
      { area: 'Internal time reporting',    detail: 'Fee earner time logs submitted and compiled manually. Monthly reconciliation consumed 8+ hours of admin.',                savingNum: 28, saving: '£28,000/yr' },
    ],
    totalNum: 125,
    total: '£125,000',
    label: 'Total annual savings identified',
    note: 'Diagnostic cost: £5,000. ROI on the diagnostic alone: 25×.',
  },
  {
    industry: 'Property Management',
    location: 'UAE · 340-unit portfolio',
    headline: '£87,000 in operational waste — discovered in 11 days.',
    summary:
      "A Dubai-based property management company managing 340 residential units was handling tenant communications, maintenance coordination, and rent collection almost entirely via WhatsApp groups and shared spreadsheets. The team of 12 was at capacity. The director was fielding tenant escalations personally.",
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Modern office building interior representing property management',
    findings: [
      { area: 'Tenant maintenance coordination', detail: 'Maintenance requests received via WhatsApp, manually logged, assigned, and followed up. No SLA tracking.',         savingNum: 29, saving: '£29,000/yr' },
      { area: 'Rent collection follow-up',       detail: 'Office staff manually called and messaged tenants 3–5 days before due date. 30% of units required follow-up.',    savingNum: 21, saving: '£21,000/yr' },
      { area: 'Lease renewal processing',        detail: 'Renewals triggered by calendar reminders, drafted from templates manually, sent and tracked in email.',            savingNum: 19, saving: '£19,000/yr' },
      { area: 'Landlord reporting',              detail: 'Monthly reports compiled manually per landlord from multiple spreadsheets. 2 hrs per landlord per month.',          savingNum: 18, saving: '£18,000/yr' },
    ],
    totalNum: 87,
    total: '£87,000',
    label: 'Total annual savings identified',
    note: 'Diagnostic cost: £5,000. ROI on the diagnostic alone: 17.4×.',
  },
]

export default function Comparison() {
  return (
    <section id="results" className="zone-light section-pad border-b border-border">
      <div className="container-lg">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <BlurFade delay={0.05}>
            <p className="eyebrow eyebrow-light mb-5">Case Studies</p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <h2
              className="font-heading font-extrabold text-ink leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Real businesses.
              <br />
              Real numbers.
            </h2>
          </BlurFade>
          <BlurFade delay={0.25}>
            <p className="text-muted text-lg font-body mt-5 leading-relaxed">
              Every engagement starts with the PEAK13 Diagnostic. Here&apos;s what it found for
              two of our clients — with the exact breakdown.
            </p>
          </BlurFade>
        </div>

        {/* Case study cards */}
        <div className="space-y-12">
          {cases.map((c, ci) => (
            <BlurFade key={c.industry} delay={0.1 + ci * 0.15}>
              <div className="card-light overflow-hidden !p-0">
                {/* Image banner */}
                <div className="relative w-full h-52 md:h-64 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                  {/* Dark gradient overlay so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  {/* Overlay labels */}
                  <div className="absolute bottom-5 left-6 flex items-center gap-3">
                    <span className="text-xs font-semibold font-body uppercase tracking-widest text-accent bg-black/60 border border-accent/40 rounded-full px-3 py-1 backdrop-blur-sm">
                      {c.industry}
                    </span>
                    <span className="text-xs font-body text-white/70 bg-black/40 rounded-full px-3 py-1 backdrop-blur-sm">
                      {c.location}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-6 text-right">
                    <p className="font-heading font-extrabold text-accent text-3xl drop-shadow-lg">
                      £<NumberTicker
                        value={c.totalNum}
                        delay={0.3 + ci * 0.2}
                        className="font-heading font-extrabold text-accent text-3xl"
                      />K
                    </p>
                    <p className="text-xs font-body text-white/60 mt-0.5">{c.label}</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7 md:p-10">
                  <h3 className="font-heading font-bold text-ink text-2xl md:text-3xl leading-snug mb-5">
                    {c.headline}
                  </h3>
                  <p className="text-muted text-base leading-relaxed font-body mb-8">{c.summary}</p>

                  {/* Findings grid */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {c.findings.map((f, fi) => (
                      <BlurFade key={f.area} delay={0.15 + fi * 0.08}>
                        <div className="bg-bg border border-border rounded-xl p-5">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <p className="font-heading font-bold text-ink text-sm leading-snug">{f.area}</p>
                            <p className="font-heading font-extrabold text-accent text-lg shrink-0 whitespace-nowrap">
                              £<NumberTicker
                                value={f.savingNum}
                                delay={0.4 + fi * 0.1}
                                className="font-heading font-extrabold text-accent text-lg"
                              />K
                            </p>
                          </div>
                          <p className="text-muted text-xs leading-relaxed font-body">{f.detail}</p>
                        </div>
                      </BlurFade>
                    ))}
                  </div>

                  {/* Footer note */}
                  <div className="bg-dark rounded-xl px-5 py-4">
                    <p className="text-white/60 text-sm font-body">{c.note}</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={0.4} className="mt-14 text-center">
          <p className="text-muted text-base font-body mb-6">
            These numbers are typical. The exact figure for your business depends on size, complexity,
            and current processes — which is exactly what the Diagnostic is designed to find.
          </p>
          <a href="#contact" className="btn-primary text-base px-10 py-4">
            Book a Free Snapshot Call →
          </a>
        </BlurFade>
      </div>
    </section>
  )
}
