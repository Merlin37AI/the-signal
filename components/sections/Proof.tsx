'use client'

import { BlurFade } from '@/components/ui/animations/blur-fade'
import { NumberTicker } from '@/components/ui/animations/number-ticker'

const cases = [
  {
    industry: 'Accountancy',
    location: 'UK · 18-partner firm',
    headline: '£125,000 in recoverable annual cost — found in two weeks.',
    summary:
      'A mid-sized UK accountancy firm came to PEAK13 after two consecutive years of tax season capacity crises. Partners were routinely working 70-hour weeks from January to April. Staff were burning out. A junior hire every year was patching the problem without solving it.',
    findings: [
      { area: 'Client document chasing',   detail: 'Partners spent avg. 6 hrs/week manually requesting, logging, and chasing documents by email.',                           savingNum: 34, saving: '£34,000/yr' },
      { area: 'Compliance report assembly', detail: 'Statutory accounts and compliance packs assembled manually from multiple sources. 3–4 hrs per client per quarter.',        savingNum: 41, saving: '£41,000/yr' },
      { area: 'Onboarding new clients',    detail: 'No standardised process. Every new client took 3–6 hours of partner time to onboard across systems.',                     savingNum: 22, saving: '£22,000/yr' },
      { area: 'Internal time reporting',   detail: 'Fee earner time logs submitted and compiled manually. Monthly reconciliation consumed 8+ hours of admin.',                 savingNum: 28, saving: '£28,000/yr' },
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
    findings: [
      { area: 'Tenant maintenance coordination', detail: 'Maintenance requests received via WhatsApp, manually logged, assigned, and followed up. No SLA tracking.',        savingNum: 29, saving: '£29,000/yr' },
      { area: 'Rent collection follow-up',       detail: 'Office staff manually called and messaged tenants 3–5 days before due date. 30% of units required follow-up every month.', savingNum: 21, saving: '£21,000/yr' },
      { area: 'Lease renewal processing',        detail: 'Renewals triggered by calendar reminders, drafted from templates manually, sent and tracked in email.',                     savingNum: 19, saving: '£19,000/yr' },
      { area: 'Landlord reporting',              detail: 'Monthly reports compiled manually per landlord from multiple spreadsheets. 2 hrs per landlord per month.',                   savingNum: 18, saving: '£18,000/yr' },
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
        <div className="space-y-10">
          {cases.map((c, ci) => (
            <BlurFade key={c.industry} delay={0.1 + ci * 0.15}>
              <div className="card-light">
                {/* Card header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 pb-8 border-b border-border">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold font-body uppercase tracking-widest text-accent border border-accent/30 rounded-full px-3 py-1">
                        {c.industry}
                      </span>
                      <span className="text-xs font-body text-muted">{c.location}</span>
                    </div>
                    <h3 className="font-heading font-bold text-ink text-2xl md:text-3xl leading-snug max-w-xl">
                      {c.headline}
                    </h3>
                  </div>
                  {/* NumberTicker on total */}
                  <div className="shrink-0 text-right">
                    <p className="font-heading font-extrabold text-accent text-4xl">
                      £<NumberTicker
                        value={c.totalNum}
                        delay={0.3 + ci * 0.2}
                        className="font-heading font-extrabold text-accent text-4xl"
                      />K
                    </p>
                    <p className="text-xs font-body text-muted mt-1">{c.label}</p>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-muted text-base leading-relaxed font-body mb-8">{c.summary}</p>

                {/* Findings grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {c.findings.map((f, fi) => (
                    <BlurFade key={f.area} delay={0.15 + fi * 0.1}>
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
