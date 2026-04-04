'use client'

import { BlurFade } from '@/components/ui/animations/blur-fade'

const steps = [
  {
    num: '1',
    label: 'Observe',
    duration: 'Week 1–2',
    headline: 'I learn how your business actually runs.',
    description:
      'Not from a questionnaire. I get inside your operations — talking to your team, mapping your workflows, understanding where time and money disappear. I bring no assumptions and no pre-built templates. Every business is different.',
    output: 'A clear map of your operation with every manual process documented and time-costed.',
  },
  {
    num: '2',
    label: 'Advise',
    duration: 'Week 2–3',
    headline: 'I tell you exactly where AI creates real value.',
    description:
      'I rank opportunities by impact, effort, and risk. I tell you what to build first, what to ignore, and what everyone else in your space is getting wrong. No buzzwords. A ranked list of AI applications grounded in your specific operation.',
    output: 'Prioritised AI roadmap — ranked by ROI, implementation effort, and business risk.',
  },
  {
    num: '3',
    label: 'Embed',
    duration: 'Ongoing',
    headline: 'I stay in the room while you build it.',
    description:
      'Most advisors disappear after the strategy session. I don\'t. On a fractional basis I attend your leadership meetings, own your AI roadmap, evaluate tools and vendors, manage implementations, and make sure what gets built actually sticks.',
    output: 'Working AI systems, trained teams, and a roadmap that evolves as your business does.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-i-work" className="zone-light border-b-[3px] border-ink overflow-hidden">
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="section-header-bar">
          <span className="section-num-tag">02</span>
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-ink leading-none">
            HOW I WORK
          </h2>
        </div>
      </div>

      {/* Intro */}
      <div className="px-6 md:px-12 lg:px-20 pt-14 pb-10 max-w-2xl">
        <BlurFade delay={0.1}>
          <h3 className="font-heading text-ink leading-[1.0] mb-5" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            EMBEDDED. NOT ARMS-LENGTH.
          </h3>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="font-body text-muted text-lg leading-relaxed">
            Fractional means I work inside your business — in your strategy sessions, your team
            conversations, your implementation reviews — without being on your payroll full time.
            You get the thinking of a senior AI leader at a fraction of the cost.
          </p>
        </BlurFade>
      </div>

      {/* Steps grid */}
      <div className="border-t-[3px] border-ink grid grid-cols-1 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative border-b-[3px] md:border-b-0 md:border-r-[3px] last:border-r-0 border-ink bg-bg flex flex-col justify-between"
            style={{ minHeight: '420px', padding: 'clamp(1.5rem, 4vw, 3rem)' }}
          >
            {/* Ghost step number watermark */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 font-heading text-ink/[0.05] leading-none select-none pointer-events-none"
              style={{ fontSize: 'clamp(8rem, 16vw, 14rem)', lineHeight: 0.85 }}
            >
              {step.num}
            </span>

            <div className="relative z-10">
              {/* Step badge */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 border-[3px] border-accent flex items-center justify-center shrink-0">
                  <span className="font-heading text-2xl text-accent leading-none">{step.num}</span>
                </div>
                <div>
                  <p className="font-heading text-ink text-2xl leading-none tracking-wide">{step.label.toUpperCase()}</p>
                  <p className="font-sub font-semibold text-xs tracking-[0.14em] uppercase text-muted mt-1">{step.duration}</p>
                </div>
              </div>

              <h4 className="font-sub font-700 text-ink text-xl uppercase tracking-wide mb-4 leading-snug">
                {step.headline}
              </h4>
              <p className="font-body text-muted text-sm leading-relaxed mb-8">{step.description}</p>
            </div>

            {/* Output strip */}
            <div className="relative z-10 bg-ink px-5 py-4">
              <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-yellow mb-1">Output</p>
              <p className="font-body text-white/70 text-xs leading-snug">{step.output}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Guarantee strip */}
      <div className="bg-ink px-6 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="guarantee-badge shrink-0" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#FFD600' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          No theory. No vanishing acts.
        </div>
        <p className="font-heading text-white tracking-wide leading-[0.95] flex-1" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
          I DON&apos;T HAND OVER A DECK AND DISAPPEAR.
        </p>
        <a href="#contact" className="btn-red shrink-0 whitespace-nowrap">
          Start a Conversation →
        </a>
      </div>
    </section>
  )
}
