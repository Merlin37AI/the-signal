'use client'

const pains = [
  {
    number: '01',
    tag: 'Accountancy & Property',
    headline: 'Your highest-paid people are doing £12/hr work.',
    body: 'Partners manually chasing client documents. Property managers copy-pasting rent reminders into WhatsApp. Senior staff spending half their day on tasks a well-configured system could handle in seconds.',
    cost: 'Est. £30K–£60K in wasted senior time per year',
  },
  {
    number: '02',
    tag: 'Accountancy',
    headline: 'Tax season shouldn\'t be a capacity crisis every year.',
    body: 'You already know it\'s coming — the 14-hour days, the near-misses on deadlines, the staff burnout. Yet the same manual processes that caused it last year are still running unchanged. That\'s not a people problem. It\'s a systems problem.',
    cost: 'Est. £20K in overtime and staff attrition cost',
  },
  {
    number: '03',
    tag: 'Property Management',
    headline: 'Maintenance coordination via WhatsApp is a liability.',
    body: 'No audit trail. No accountability. Contractors missed, tenants escalating, landlords unhappy. The moment something goes wrong legally, you\'ll wish you had a system — not a chat thread.',
    cost: 'Est. £15K–£40K in disputes and lost contracts annually',
  },
]

export default function PainPoints() {
  return (
    <section id="pain" className="zone-dark-surface section-pad border-b border-dark-b">
      <div className="container-lg">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow eyebrow-dark mb-5 reveal">The Problem</p>
          <h2
            className="font-heading font-extrabold text-white leading-[1.05] reveal reveal-delay-1"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Every week you delay
            <br />
            <span className="text-accent">costs more than you think.</span>
          </h2>
          <p className="text-dark-m text-lg font-body mt-5 leading-relaxed reveal reveal-delay-2">
            These aren&apos;t edge cases. They&apos;re the daily reality of accountancy firms and property
            management companies across the UK and UAE — and every one of them has a measurable price tag.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <div
              key={p.number}
              className={`card-dark flex flex-col reveal reveal-delay-${i + 1}`}
            >
              {/* Number + tag */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-heading font-extrabold text-5xl text-white/10 leading-none select-none">
                  {p.number}
                </span>
                <span className="text-xs font-semibold font-body uppercase tracking-widest text-accent border border-accent/30 rounded-full px-3 py-1">
                  {p.tag}
                </span>
              </div>

              <h3 className="font-heading font-bold text-white text-xl mb-3 leading-snug flex-1">
                {p.headline}
              </h3>

              <p className="text-dark-m text-sm leading-relaxed font-body mb-6">{p.body}</p>

              {/* Cost line */}
              <div className="border-t border-dark-b pt-4 mt-auto">
                <p className="text-xs font-body font-semibold text-accent/80">{p.cost}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge statement */}
        <div className="mt-14 pt-10 border-t border-dark-b flex flex-col md:flex-row md:items-center md:justify-between gap-6 reveal">
          <p className="text-white text-lg font-body max-w-xl leading-relaxed">
            <strong className="font-semibold text-white">The average business we audit is losing £50K–£150K a year</strong>{' '}
            to processes they assume are unavoidable. They&apos;re not.
          </p>
          <a href="#diagnostic" className="btn-primary shrink-0 text-base px-8 py-4">
            See the PEAK13 Diagnostic →
          </a>
        </div>
      </div>
    </section>
  )
}
