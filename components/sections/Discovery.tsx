'use client'

// Repurposed as PainPoints section
const pains = [
  {
    number: '01',
    headline: 'You\'ve bought AI tools nobody actually uses.',
    body: 'ChatGPT subscriptions, automation platforms, AI writing tools — the licences stack up, the adoption doesn\'t. Without a clear use case, every tool becomes shelf-ware.',
  },
  {
    number: '02',
    headline: 'You can\'t separate the signal from the noise.',
    body: 'Every vendor promises a 10x productivity boost. Every LinkedIn post says AI will transform your industry. You\'re overwhelmed — and no closer to knowing what actually applies to your business.',
  },
  {
    number: '03',
    headline: 'You need AI leadership but can\'t justify a full-time hire.',
    body: 'A Chief AI Officer costs £150K–£250K a year. A strategy agency charges £50K for a deck. You need someone embedded in your business — not a salesperson with a slide template.',
  },
]

export default function PainPoints() {
  return (
    <section id="pain" className="section-pad bg-bg border-b border-border">
      <div className="container-lg">
        <div className="mb-14">
          <p className="eyebrow mb-4 reveal">Sound familiar?</p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-ink max-w-2xl reveal reveal-delay-1">
            Most businesses aren&apos;t failing at AI.
            <br />
            They&apos;re failing at the strategy before it.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <div
              key={p.number}
              className={`card hover:border-accent/30 transition-colors duration-200 reveal reveal-delay-${i + 1}`}
            >
              <p className="font-heading font-extrabold text-5xl text-border leading-none mb-6 select-none">
                {p.number}
              </p>
              <h3 className="font-heading font-bold text-xl text-ink mb-3 leading-snug">{p.headline}</h3>
              <p className="text-muted text-sm leading-relaxed font-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
