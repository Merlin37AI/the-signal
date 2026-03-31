'use client'

const trustStats = [
  { value: '8+', label: 'years enterprise transformation' },
  { value: '1,500+', label: 'user organisations managed' },
  { value: '25%', label: 'avg. downtime reduction' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-pad pt-36 md:pt-44 bg-bg border-b border-border"
    >
      <div className="container-lg">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="eyebrow mb-6 reveal">
            Fractional AI Consultant — Dubai &amp; UK
          </p>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-ink leading-[1.0] mb-8 reveal reveal-delay-1">
            Your business is ready for AI.
            <br />
            <span className="text-accent">Your strategy isn&apos;t.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed font-body mb-10 reveal reveal-delay-2">
            I help service businesses with 5–50 staff cut through the AI noise,
            find exactly where automation creates real value, and build it — without
            expensive consultancies, wasted tool subscriptions, or full-time AI hires.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 reveal reveal-delay-3">
            <a href="#contact" className="btn-accent text-base px-8 py-4">
              Book a Free 30-Min Call →
            </a>
            <a href="#how-it-works" className="btn-outline text-base px-8 py-4">
              See How It Works
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-10 reveal reveal-delay-4">
            {trustStats.map((s) => (
              <div key={s.label}>
                <p className="font-heading font-extrabold text-3xl text-ink">{s.value}</p>
                <p className="text-sm text-muted font-body mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
