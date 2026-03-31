'use client'

const services = [
  {
    tag: 'One-time engagement',
    title: 'AI Audit',
    pitch: 'Find exactly where AI fits — and where it doesn\'t.',
    description:
      'A structured 2-week diagnostic using DMAIC methodology. I audit your workflows, tools, and team processes to surface the highest-value AI opportunities in your business. You get a prioritised use-case map, a governance framework, and a clear 90-day roadmap.',
    ideal: 'Any service business that wants clarity before spending another pound on AI tools.',
    includes: [
      'Full operational workflow audit',
      'AI use-case prioritisation map',
      'Governance & risk framework',
      'Written 90-day adoption roadmap',
      '2 review calls included',
    ],
    cta: 'Book an AI Audit',
    href: '#contact',
    highlight: false,
  },
  {
    tag: 'Ongoing — most popular',
    title: 'Fractional AI Advisor',
    pitch: 'Senior AI leadership without the full-time cost.',
    description:
      'I become your embedded AI advisor — attending strategy sessions, managing your AI roadmap, evaluating tools, overseeing builds, and ensuring your team actually adopts what we put in place. Available for 1–3 days per week.',
    ideal: 'Founders and ops leaders ready to scale AI but without in-house expertise to lead it.',
    includes: [
      'Weekly strategy & review sessions',
      'Use-case pipeline ownership',
      'Tool & vendor evaluation',
      'Automation builds (N8N, Claude API, Airtable)',
      'Team training & change management',
      'Monthly progress reporting',
    ],
    cta: 'Book a Signal Call',
    href: '#contact',
    highlight: true,
  },
  {
    tag: 'Events & conferences',
    title: 'Speaking',
    pitch: 'Keynotes that give audiences something to act on.',
    description:
      'I speak on AI adoption, operational transformation, and the human side of change — including how neurodivergent thinking is a genuine advantage in the age of AI. Available for leadership events, conferences, and corporate programmes.',
    ideal: 'Event organisers, HR leaders, and innovation teams looking for a grounded, practical AI voice.',
    includes: [
      '"Finding the Signal" — AI as a business tool, not a threat',
      '"The Human Edge" — neurodivergence & AI advantage',
      'Panel: AI Adoption & Change Management',
      'Workshop: Practical AI for Leadership Teams',
    ],
    cta: 'Enquire About Speaking',
    href: '#contact',
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad bg-bg border-b border-border">
      <div className="container-lg">
        <div className="mb-14">
          <p className="eyebrow mb-4 reveal">Services</p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-ink max-w-2xl reveal reveal-delay-1">
            Three ways to work together.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col rounded-2xl border p-8 transition-all duration-200 reveal reveal-delay-${i + 1} ${
                s.highlight
                  ? 'bg-dark border-dark text-white'
                  : 'bg-surface border-border hover:border-ink/20'
              }`}
            >
              <div className="mb-6">
                <span
                  className={`text-xs font-semibold uppercase tracking-widest font-body ${
                    s.highlight ? 'text-accent' : 'text-accent'
                  }`}
                >
                  {s.tag}
                </span>
                <h3 className={`font-heading font-extrabold text-2xl mt-2 mb-2 ${s.highlight ? 'text-white' : 'text-ink'}`}>
                  {s.title}
                </h3>
                <p className={`font-heading font-semibold text-base ${s.highlight ? 'text-white/70' : 'text-muted'}`}>
                  {s.pitch}
                </p>
              </div>

              <p className={`text-sm leading-relaxed font-body mb-6 ${s.highlight ? 'text-white/60' : 'text-muted'}`}>
                {s.description}
              </p>

              <div className="mb-6">
                <p className={`text-xs uppercase tracking-widest font-semibold font-body mb-3 ${s.highlight ? 'text-white/40' : 'text-muted/60'}`}>
                  What&apos;s included
                </p>
                <ul className="space-y-2">
                  {s.includes.map((item) => (
                    <li key={item} className={`flex items-start gap-2.5 text-sm font-body ${s.highlight ? 'text-white/80' : 'text-ink/80'}`}>
                      <span className="text-accent mt-0.5 shrink-0 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-2">
                <p className={`text-xs font-body mb-4 leading-relaxed ${s.highlight ? 'text-white/40' : 'text-muted/60'}`}>
                  <span className="font-semibold">Ideal for: </span>{s.ideal}
                </p>
                <a
                  href={s.href}
                  className={`inline-flex items-center gap-2 font-heading font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200 ${
                    s.highlight
                      ? 'bg-accent text-white hover:bg-[#c93209]'
                      : 'border border-ink text-ink hover:bg-ink hover:text-bg'
                  }`}
                >
                  {s.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
