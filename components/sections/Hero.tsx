'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      className="zone-dark noise-overlay min-h-screen flex flex-col justify-center section-pad pt-32 pb-20 border-b border-dark-b"
    >
      <div className="container-lg">
        {/* Eyebrow */}
        <p className="eyebrow eyebrow-dark mb-8 reveal">
          PEAK13 Consulting · UK &amp; UAE · Accountancy &amp; Property Management
        </p>

        {/* Headline */}
        <h1 className="font-heading font-extrabold text-white leading-[1.0] mb-8 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
          Operational chaos is
          <br />
          <span className="text-accent">costing you more</span>
          <br />
          than you know.
        </h1>

        {/* Sub */}
        <p className="text-dark-m text-lg md:text-xl max-w-2xl leading-relaxed font-body mb-10 reveal reveal-delay-2">
          I help accountancy firms and property management companies in the UK &amp; UAE
          find <strong className="text-white font-semibold">£50K–£150K in annual operational waste</strong> — and build
          the AI systems to eliminate it. In two weeks. With a guarantee.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-12 reveal reveal-delay-3">
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Book a Free Snapshot Call →
          </a>
          <a href="#diagnostic" className="btn-ghost-dark text-base px-8 py-4">
            See the PEAK13 Diagnostic
          </a>
        </div>

        {/* Guarantee badge */}
        <div className="reveal reveal-delay-4">
          <div className="guarantee-badge inline-flex">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            5× ROI Guarantee — if we don&apos;t identify at least 5× your investment in savings, you don&apos;t pay.
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 pt-10 border-t border-dark-b grid grid-cols-2 md:grid-cols-4 gap-8 reveal reveal-delay-5">
          {[
            { n: '£127K+', l: 'Avg. savings identified per audit' },
            { n: '2 weeks', l: 'Discovery to roadmap' },
            { n: '5–10×', l: 'Typical ROI on audit investment' },
            { n: '8+ yrs', l: 'Enterprise transformation background' },
          ].map((s) => (
            <div key={s.n}>
              <p className="font-heading font-extrabold text-white text-2xl md:text-3xl mb-1">{s.n}</p>
              <p className="text-dark-m text-sm font-body leading-snug">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
