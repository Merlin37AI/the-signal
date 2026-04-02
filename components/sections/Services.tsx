'use client'

import { BlurFade } from '@/components/ui/animations/blur-fade'

const tiers = [
  {
    num: 'A',
    name: 'PEAK13\nSnapshot',
    tagline: 'Clarity before commitment.',
    price: '£5,000',
    priceNote: 'One-time · 2-week engagement',
    description:
      "The full PEAK13 Diagnostic. We audit your operations, quantify your waste, and deliver a prioritised roadmap. Backed by the 5× ROI Guarantee.",
    for: "Right for you if you want evidence before investing further in AI.",
    includes: [
      'Full operational workflow audit',
      'AI use-case scoring and prioritisation map',
      'Time-cost analysis on every process',
      'Governance and risk framework',
      'Written 90-day roadmap',
      'Live readout with your leadership team',
      '5× ROI Guarantee',
    ],
    cta: 'Book a Snapshot',
    dark: false,
  },
  {
    num: 'B',
    name: 'PEAK13\nBuild',
    tagline: 'From roadmap to running systems.',
    price: 'From £15,000',
    priceNote: 'One-time · 6–10 week delivery',
    description:
      "We take the top 3 use cases from your Diagnostic and build them. Real automations — in N8N, Claude API, Airtable, or your existing stack.",
    for: "Right for you if you're ready to implement.",
    includes: [
      'Everything in PEAK13 Snapshot',
      'Build of top 3 identified automations',
      'Integration with your existing tools',
      'Team onboarding and change management',
      'Documentation and runbooks',
      '90-day post-delivery support window',
    ],
    cta: 'Book a Build Call',
    dark: true,
  },
  {
    num: 'C',
    name: 'PEAK13\nEmbedded',
    tagline: 'Ongoing AI leadership.',
    price: 'From £6,000/mo',
    priceNote: 'Monthly · Minimum 3 months',
    description:
      "I become your embedded fractional AI advisor — attending strategy sessions, owning your AI roadmap, evaluating tools, managing builds.",
    for: "Right for you if you're scaling AI across your business.",
    includes: [
      'Weekly strategy and review sessions',
      'Use-case pipeline ownership',
      'Tool and vendor evaluation',
      'Ongoing automation builds',
      'Team training and change management',
      'Monthly progress reporting',
    ],
    cta: 'Book an Embedded Call',
    dark: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="border-b-[3px] border-ink">
      {/* Section header */}
      <div className={`px-6 md:px-12 lg:px-20 bg-bg`}>
        <div className="section-header-bar">
          <span className="section-num-tag">03</span>
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-ink leading-none">
            THREE WAYS TO ENGAGE
          </h2>
        </div>
      </div>

      {/* Tier grid */}
      <div className="grid md:grid-cols-3 border-t-0">
        {tiers.map((tier, i) => (
          <BlurFade key={tier.name} delay={0.1 + i * 0.12}>
            <div className={`flex flex-col h-full border-r-[3px] last:border-r-0 border-ink relative ${
              tier.dark ? 'bg-ink text-white' : 'bg-bg text-ink'
            }`}>

              {/* Most popular banner */}
              {tier.dark && (
                <div className="bg-yellow px-6 py-2 border-b-[3px] border-ink">
                  <p className="font-sub font-700 text-xs tracking-[0.2em] uppercase text-ink">
                    ★ Most Popular
                  </p>
                </div>
              )}

              <div className="p-8 md:p-10 flex flex-col flex-1">
                {/* Tier letter */}
                <div className="flex items-start justify-between mb-6">
                  <span className={`font-heading text-7xl leading-none ${tier.dark ? 'text-white/10' : 'text-ink/10'}`}>
                    {tier.num}
                  </span>
                  <span className={`font-sub font-700 text-xs tracking-[0.15em] uppercase px-3 py-1.5 border ${
                    tier.dark ? 'border-white/20 text-white/50' : 'border-ink/30 text-muted'
                  }`}>
                    {tier.priceNote}
                  </span>
                </div>

                {/* Name */}
                <h3 className={`font-heading text-4xl md:text-5xl tracking-wide leading-[1.0] mb-1 whitespace-pre-line ${
                  tier.dark ? 'text-yellow' : 'text-ink'
                }`}>
                  {tier.name}
                </h3>
                <p className={`font-sub font-semibold text-xs tracking-[0.12em] uppercase mb-6 ${
                  tier.dark ? 'text-white/40' : 'text-muted'
                }`}>
                  {tier.tagline}
                </p>

                {/* Price */}
                <div className={`mb-6 pb-6 border-b-[2px] ${tier.dark ? 'border-white/10' : 'border-ink/20'}`}>
                  <p className={`font-heading text-4xl tracking-wide leading-none ${tier.dark ? 'text-accent' : 'text-accent'}`}>
                    {tier.price}
                  </p>
                </div>

                <p className={`font-body text-sm leading-relaxed mb-6 ${tier.dark ? 'text-white/60' : 'text-muted'}`}>
                  {tier.description}
                </p>

                {/* Includes */}
                <div className="flex-1 mb-6">
                  <p className={`font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase mb-3 ${
                    tier.dark ? 'text-white/30' : 'text-ink/40'
                  }`}>
                    What&apos;s included
                  </p>
                  <ul className="space-y-2">
                    {tier.includes.map((item) => (
                      <li key={item} className={`flex items-start gap-2.5 font-body text-sm ${
                        tier.dark ? 'text-white/70' : 'text-ink/80'
                      }`}>
                        <span className="text-accent shrink-0 font-bold text-base leading-none mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal for */}
                <p className={`font-body text-xs leading-relaxed mb-6 border-t-[2px] pt-4 ${
                  tier.dark ? 'border-white/10 text-white/40' : 'border-ink/15 text-muted'
                }`}>
                  <span className={`font-sub font-700 uppercase tracking-[0.1em] ${tier.dark ? 'text-white/30' : 'text-ink/40'}`}>
                    Ideal for:{' '}
                  </span>
                  {tier.for}
                </p>

                <a
                  href="#contact"
                  className={tier.dark ? 'btn-red' : 'btn-primary'}
                  style={{ justifyContent: 'center', textAlign: 'center' }}
                >
                  {tier.cta} →
                </a>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Footnote */}
      <div className="bg-bg border-t-[3px] border-ink px-6 md:px-12 lg:px-20 py-5">
        <p className="font-sub font-semibold text-xs tracking-[0.12em] uppercase text-muted text-center">
          All engagements begin with a free 30-minute Snapshot Call — no commitment required.
        </p>
      </div>
    </section>
  )
}
