'use client'

import Image from 'next/image'

// Results section
const results = [
  { stat: '25%', desc: 'reduction in mission-critical downtime', context: 'Enterprise transformation, 1,500-user global org' },
  { stat: '95%', desc: 'first-call resolution rate', context: 'IT support estate — highest in the team within 6 months' },
  { stat: '50%', desc: 'drop in phishing incidents', context: 'Cybersecurity awareness programme from scratch' },
  { stat: '1,000+', desc: 'device deployment playbook', context: 'Process I designed was scaled across an entire agency' },
  { stat: '40%', desc: 'cross-programme alignment lift', context: '100% of redesigned service models adopted by project board' },
  { stat: '2×', desc: 'Positive Impact Award winner', context: 'Awarded at Control Risks for enterprise delivery performance' },
]

const certs = [
  'ITIL 4 Foundation — PeopleCert',
  'Six Sigma Green Belt — GLSS',
  'AI in Business Specialization — University of Pennsylvania',
  'Micro MBA Cum Laude — MBA ASAP',
  'CompTIA Security+ / Network+ / A+',
  'CPD Business Strategist',
]

const testimonials = [
  {
    quote: "Gary doesn't just audit — he maps the whole system and shows you exactly where the leverage is. The clarity was worth the engagement alone.",
    name: 'CEO',
    company: 'Property Management Company, Dubai UAE',
  },
  {
    quote: "I've had AI consultants before who gave me a deck full of buzzwords. Gary gave me a roadmap I could actually execute on week one.",
    name: 'Founder',
    company: 'Professional Services Agency, London UK',
  },
  {
    quote: "What stood out was Gary's ability to translate complex AI concepts into plain business outcomes. My team actually understood the strategy for the first time.",
    name: 'Operations Director',
    company: 'SaaS Business, UAE',
  },
]

const faqs = [
  {
    q: 'What exactly does a fractional AI advisor do?',
    a: "I act as your part-time Chief AI Officer. That means leading your AI strategy, evaluating tools and vendors, building automations, managing adoption across your team, and reporting on outcomes — without the full-time salary commitment.",
  },
  {
    q: "How is this different from hiring an AI agency?",
    a: "Agencies sell deliverables — decks, builds, campaigns. I sell outcomes. I'm embedded in your business, aligned to your goals, and accountable to your results. No handover document and disappear.",
  },
  {
    q: "Do I need any technical knowledge to work with you?",
    a: "None. I bridge the gap between business objectives and technical implementation. You tell me what you want to achieve; I translate that into a strategy and build it.",
  },
  {
    q: "What size of business do you work with?",
    a: "Primarily service businesses with 5–50 staff — coaches, consultants, agencies, SaaS, and professional services. Enough complexity to benefit from AI, small enough that fractional makes financial sense.",
  },
  {
    q: "How quickly can we get started?",
    a: "Typically within 2 weeks of an initial call. We start with a scoping call, I send a proposal, and if we're aligned we kick off the audit phase immediately.",
  },
]

export default function ResultsAboutTestimonialsPage() {
  return (
    <>
      {/* ---- Results ---- */}
      <section id="results" className="section-pad bg-bg border-b border-border">
        <div className="container-lg">
          <div className="mb-14">
            <p className="eyebrow mb-4 reveal">Track Record</p>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-ink max-w-xl reveal reveal-delay-1">
              Proof in numbers.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {results.map((r, i) => (
              <div key={r.stat} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                <p className="stat-big mb-1">{r.stat}</p>
                <p className="font-heading font-semibold text-ink text-base mb-1">{r.desc}</p>
                <p className="text-xs text-muted font-body leading-relaxed">{r.context}</p>
              </div>
            ))}
          </div>

          {/* Certs */}
          <div className="reveal reveal-delay-2">
            <p className="text-xs text-muted/60 uppercase tracking-widest font-body mb-4">Certifications</p>
            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <span key={c} className="text-xs font-body font-medium text-muted border border-border rounded-full px-3 py-1.5">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- About ---- */}
      <section id="about" className="section-pad bg-surface border-b border-border">
        <div className="container-lg">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="reveal order-2 md:order-1">
              <div className="relative w-full max-w-sm mx-auto md:mx-0 aspect-[4/5] rounded-2xl overflow-hidden bg-border">
                <Image
                  src="/gary-headshot.jpg"
                  alt="Gary Quigley — Fractional AI Consultant"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 md:order-2">
              <p className="eyebrow mb-4 reveal">About Gary</p>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-ink mb-6 reveal reveal-delay-1">
                8 years building things that actually work.
              </h2>
              <div className="space-y-4 text-muted text-base leading-relaxed font-body reveal reveal-delay-2">
                <p>
                  I spent 8 years inside enterprise IT and transformation — at the Maritime &amp; Coastguard Agency,
                  Control Risks, and several high-growth businesses — designing the systems, processes, and
                  governance frameworks that made complex organisations run better.
                </p>
                <p>
                  I founded PEAK13 Consulting because I kept seeing the same pattern: smart business owners
                  getting sold AI they didn&apos;t need, by people who&apos;d never actually implemented it.
                  I do things differently — I audit first, recommend second, and build only what makes
                  measurable sense.
                </p>
                <p>
                  I&apos;m based in Dubai, work with clients across the UAE and UK, and operate remotely and
                  in-person depending on the engagement.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 reveal reveal-delay-3">
                <a
                  href="https://www.linkedin.com/in/gary-quigley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  Connect on LinkedIn →
                </a>
                <a href="#contact" className="btn-primary text-sm">
                  Work with Gary
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Testimonials ---- */}
      <section id="testimonials" className="section-pad bg-bg border-b border-border">
        <div className="container-lg">
          <div className="mb-14">
            <p className="eyebrow mb-4 reveal">Testimonials</p>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-ink max-w-xl reveal reveal-delay-1">
              What clients say.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`card flex flex-col reveal reveal-delay-${i + 1}`}>
                <p className="text-4xl text-accent font-heading leading-none mb-4 select-none">&ldquo;</p>
                <p className="text-ink text-base leading-relaxed font-body flex-1 mb-6">{t.quote}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-bold text-ink text-sm">{t.name}</p>
                  <p className="text-muted text-xs font-body mt-0.5">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section id="faq" className="section-pad bg-surface border-b border-border">
        <div className="container-lg">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            <div>
              <p className="eyebrow mb-4 reveal">FAQ</p>
              <h2 className="font-heading font-extrabold text-4xl text-ink reveal reveal-delay-1">
                Common questions.
              </h2>
              <p className="text-muted text-base mt-4 font-body reveal reveal-delay-2">
                Anything else? Book a free 30-min call and ask me directly.
              </p>
              <a href="#contact" className="btn-primary mt-8 inline-flex reveal reveal-delay-3">
                Book a Call →
              </a>
            </div>

            <div className="space-y-0 reveal reveal-delay-2">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Final CTA ---- */}
      <section id="contact" className="section-pad bg-dark">
        <div className="container-md text-center">
          <p className="eyebrow mb-6 reveal" style={{ color: '#E8400C' }}>
            Ready to start?
          </p>
          <h2 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-6 reveal reveal-delay-1">
            Let&apos;s find where AI
            <br />
            fits your business.
          </h2>
          <p className="text-white/50 text-lg font-body max-w-lg mx-auto mb-10 leading-relaxed reveal reveal-delay-2">
            Book a free 30-minute call. No pitch, no jargon — just an honest conversation
            about what AI can actually do for your business right now.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12 reveal reveal-delay-3">
            <a
              href="https://calendly.com/quigleygary/signal-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-base px-10 py-4"
            >
              Book a Free 30-Min Call →
            </a>
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/30 font-body reveal reveal-delay-4">
            <a
              href="https://www.linkedin.com/in/gary-quigley"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a href="mailto:quigleygary@hotmail.com" className="hover:text-white/70 transition-colors">
              quigleygary@hotmail.com
            </a>
            <span>·</span>
            <span>Dubai, UAE &amp; UK</span>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-white/10">
            <p className="text-xs text-white/20 font-body">
              PEAK13 Consulting Ltd · © {new Date().getFullYear()} Gary Quigley · All rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

// Inline FAQ accordion component
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="faq-item group py-5">
      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-heading font-bold text-ink text-base leading-snug hover:text-accent transition-colors duration-150">
        {q}
        <span className="shrink-0 w-5 h-5 rounded-full border border-border flex items-center justify-center text-muted text-xs mt-0.5 group-open:rotate-45 transition-transform duration-200">
          +
        </span>
      </summary>
      <p className="text-muted text-sm leading-relaxed font-body mt-3 pr-8">{a}</p>
    </details>
  )
}
