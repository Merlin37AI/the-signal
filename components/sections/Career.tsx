'use client'

// Repurposed as HowItWorks section
const steps = [
  {
    number: '01',
    title: 'AI Audit',
    duration: 'Week 1–2',
    description:
      'We map your entire operation using a structured DMAIC diagnostic. Every workflow, every tool, every manual bottleneck. The output is a clear, prioritised list of where AI creates measurable value — and where it doesn\'t.',
    outcome: 'You know exactly where to invest and where to ignore the hype.',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    duration: 'Week 2–4',
    description:
      'I design your AI adoption roadmap: which use cases to pilot first, which tools to evaluate, what governance you need, and how to bring your team with you. Built for your resources, not a Fortune 500 budget.',
    outcome: 'A 90-day plan your team can actually execute.',
  },
  {
    number: '03',
    title: 'Build & Embed',
    duration: 'Ongoing',
    description:
      'I build the automations myself — in N8N, Claude API, Airtable, or whatever fits your stack. And I stay embedded to course-correct, iterate, and ensure adoption actually sticks across your team.',
    outcome: 'Working automations and a team that uses them.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-surface border-b border-border">
      <div className="container-lg">
        <div className="mb-14">
          <p className="eyebrow mb-4 reveal">The Process</p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-ink max-w-xl reveal reveal-delay-1">
            How it works.
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl font-body reveal reveal-delay-2">
            Three phases. Clear outcomes at each stage. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <div key={step.number} className={`reveal reveal-delay-${i + 1}`}>
              {/* Step header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 rounded-full bg-accent text-white font-heading font-bold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-heading font-bold text-ink">{step.title}</p>
                  <p className="text-xs text-muted font-body">{step.duration}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border mb-5" />

              <p className="text-muted text-sm leading-relaxed font-body mb-5">{step.description}</p>

              {/* Outcome */}
              <div className="bg-bg border border-border rounded-xl px-4 py-3">
                <p className="text-xs text-accent font-semibold font-body uppercase tracking-widest mb-1">Outcome</p>
                <p className="text-ink text-sm font-semibold font-body">{step.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <a href="#contact" className="btn-primary">
            Start with a free 30-min call →
          </a>
        </div>
      </div>
    </section>
  )
}
