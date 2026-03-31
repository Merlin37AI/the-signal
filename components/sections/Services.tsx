'use client'

const tiers = [
  {
    name: 'PEAK13 Snapshot',
    tagline: 'Clarity before commitment.',
    price: '£5,000',
    priceNote: 'One-time · 2-week engagement',
    description:
      'The full PEAK13 Diagnostic. We audit your operations, quantify your waste, and deliver a prioritised roadmap. You walk away knowing exactly where AI fits your business — and where it doesn\'t. Backed by the 5× ROI Guarantee.',
    for: 'Right for you if you want evidence before investing further in AI.',
    includes: [
      'Full operational workflow audit (accountancy or property)',
      'AI use-case scoring and prioritisation map',
      'Time-cost analysis on every identified process',
      'Governance and risk framework',
      'Written 90-day roadmap',
      'Live readout with your leadership team',
      '5× ROI Guarantee — full refund if we don\'t find 5× the cost in savings',
    ],
    cta: 'Book a Snapshot',
    highlight: false,
  },
  {
    name: 'PEAK13 Build',
    tagline: 'From roadmap to running systems.',
    price: 'From £15,000',
    priceNote: 'One-time · 6–10 week delivery',
    description:
      'We take the top 3 use cases from your Diagnostic and build them. Real automations — in N8N, Claude API, Airtable, or your existing stack. Delivered with documentation, team training, and a 90-day support window.',
    for: 'Right for you if you\'re ready to implement and want someone who builds it with you — not for you and then disappears.',
    includes: [
      'Everything in PEAK13 Snapshot',
      'Build of top 3 identified automations',
      'Integration with your existing tools and workflows',
      'Team onboarding and change management support',
      'Documentation and runbooks',
      '90-day post-delivery support window',
    ],
    cta: 'Book a Build Call',
    highlight: true,
  },
  {
    name: 'PEAK13 Embedded',
    tagline: 'Ongoing AI leadership without the full-time hire.',
    price: 'From £6,000/mo',
    priceNote: 'Monthly · Minimum 3 months',
    description:
      'I become your embedded fractional AI advisor — attending strategy sessions, owning your AI roadmap, evaluating tools, managing builds, and ensuring adoption actually sticks. Available 1–3 days per week.',
    for: 'Right for you if you\'re scaling AI across your business and need senior leadership to stay ahead of it.',
    includes: [
      'Weekly strategy and review sessions',
      'Use-case pipeline ownership and prioritisation',
      'Tool and vendor evaluation',
      'Ongoing automation builds and iteration',
      'Team training and change management',
      'Monthly progress reporting to leadership',
    ],
    cta: 'Book an Embedded Call',
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="zone-dark section-pad border-b border-dark-b">
      <div className="container-lg">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow eyebrow-dark mb-5 reveal">Investment</p>
          <h2
            className="font-heading font-extrabold text-white leading-[1.05] reveal reveal-delay-1"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Transparent pricing.
            <br />
            <span className="text-accent">No surprises. No sales deck.</span>
          </h2>
          <p className="text-dark-m text-lg font-body mt-5 max-w-2xl leading-relaxed reveal reveal-delay-2">
            Three ways to work together — from a single diagnostic to full embedded advisory.
            All engagements start with a free 30-minute Snapshot Call.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl p-8 border transition-all duration-200 reveal reveal-delay-${i + 1} ${
                tier.highlight
                  ? 'bg-accent/5 border-accent/40 ring-1 ring-accent/20'
                  : 'bg-dark-s border-dark-b hover:border-dark-m'
              }`}
            >
              {/* Tag */}
              {tier.highlight && (
                <span className="self-start text-xs font-semibold font-body uppercase tracking-widest text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-5">
                  Most popular
                </span>
              )}

              <p className="font-heading font-extrabold text-white text-2xl mb-1">{tier.name}</p>
              <p className={`text-sm font-body mb-5 ${tier.highlight ? 'text-white/70' : 'text-dark-m'}`}>
                {tier.tagline}
              </p>

              {/* Price */}
              <div className="mb-5 pb-5 border-b border-dark-b">
                <p className="font-heading font-extrabold text-white text-3xl">{tier.price}</p>
                <p className="text-xs font-body text-dark-m mt-1">{tier.priceNote}</p>
              </div>

              <p className={`text-sm leading-relaxed font-body mb-6 ${tier.highlight ? 'text-white/70' : 'text-dark-m'}`}>
                {tier.description}
              </p>

              {/* Includes */}
              <div className="mb-6 flex-1">
                <p className="text-xs uppercase tracking-widest font-semibold font-body text-dark-m mb-3">
                  What&apos;s included
                </p>
                <ul className="space-y-2.5">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-body text-white/80">
                      <span className="text-accent mt-0.5 shrink-0 font-bold text-base leading-none">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal for */}
              <p className="text-xs font-body text-dark-m leading-relaxed mb-6 border-t border-dark-b pt-4">
                <span className="font-semibold text-white/40">Ideal for: </span>
                {tier.for}
              </p>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 font-heading font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 ${
                  tier.highlight
                    ? 'bg-accent text-white hover:bg-[#c93209]'
                    : 'border border-dark-b text-white hover:border-white/40'
                }`}
              >
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-dark-m text-sm font-body mt-10 reveal">
          All engagements begin with a free 30-minute Snapshot Call — no commitment required.
          PEAK13 Build clients receive the Snapshot Diagnostic as part of delivery.
        </p>
      </div>
    </section>
  )
}
