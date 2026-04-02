'use client'

import { BlurFade } from '@/components/ui/animations/blur-fade'

const steps = [
  {
    num: '1',
    label: 'Discovery',
    duration: 'Days 1–5',
    headline: 'We map your operation inside-out.',
    description:
      'We spend time inside your business — mapping workflows, interviewing your team, and identifying every manual process consuming capacity. No assumptions. No templates applied blindly.',
    output: 'Full workflow map with time-cost data attached to every process.',
  },
  {
    num: '2',
    label: 'Diagnosis',
    duration: 'Days 6–10',
    headline: 'Every finding gets a number.',
    description:
      'Each workflow is scored for automation potential, implementation risk, and financial impact. We calculate exact time savings, error reduction rates, and ROI estimates — grounded in data, not opinion.',
    output: 'Ranked use-case list with projected savings and implementation effort.',
  },
  {
    num: '3',
    label: 'Roadmap',
    duration: 'Days 11–14',
    headline: 'You leave with a plan you can act on.',
    description:
      'A prioritised 90-day roadmap: which automations to build first, which tools to use, what governance you need, and how to bring your team with you. Plain language — not a 60-slide deck that collects dust.',
    output: 'Written roadmap + live presentation to your leadership team.',
  },
]

export default function HowItWorks() {
  return (
    <section id="diagnostic" className="zone-light border-b-[3px] border-ink">
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="section-header-bar">
          <span className="section-num-tag">02</span>
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-ink leading-none">
            THE PEAK13 DIAGNOSTIC
          </h2>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-14 md:py-20">
        {/* Intro */}
        <div className="mb-14 max-w-2xl">
          <BlurFade delay={0.1}>
            <h3
              className="font-heading text-ink leading-[1.0] mb-5"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              FROM OPERATIONAL CHAOS TO A CLEAR ROADMAP — IN 14 DAYS.
            </h3>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="font-body text-muted text-lg leading-relaxed">
              Most consultants show up with a slide template and a theory. The PEAK13 Diagnostic is
              a structured, evidence-based process — built from Six Sigma DMAIC methodology — that
              gives you real numbers, not educated guesses.
            </p>
          </BlurFade>
        </div>

        {/* Step cards */}
        <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 items-start mb-14">
          {steps.map((step, i) => (
            <>
              <BlurFade key={step.num} delay={0.15 + i * 0.15} className="flex flex-col">
                <div className="border-[2px] border-ink p-6 mb-4">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 border-[3px] border-accent flex items-center justify-center shrink-0">
                      <span className="font-heading text-xl text-accent leading-none">{step.num}</span>
                    </div>
                    <div>
                      <p className="font-heading text-ink text-xl leading-none tracking-wide">{step.label.toUpperCase()}</p>
                      <p className="font-sub font-semibold text-xs tracking-[0.14em] uppercase text-muted mt-1">{step.duration}</p>
                    </div>
                  </div>

                  <h4 className="font-sub font-700 text-ink text-base uppercase tracking-wide mb-2 leading-snug">
                    {step.headline}
                  </h4>
                  <p className="font-body text-muted text-sm leading-relaxed mb-4">{step.description}</p>

                  <div className="bg-ink px-4 py-3">
                    <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-yellow mb-1">Output</p>
                    <p className="font-body text-white/70 text-xs leading-snug">{step.output}</p>
                  </div>
                </div>
              </BlurFade>

              {i < steps.length - 1 && (
                <div key={`spacer-${i}`} className="diagnostic-connector px-4 pt-7">
                  <svg width="28" height="2" viewBox="0 0 28 2" fill="none">
                    <line x1="0" y1="1" x2="28" y2="1" stroke="#0F0F0F" strokeWidth="2" strokeDasharray="4 3" />
                  </svg>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="-ml-1">
                    <path d="M1 1L7 6L1 11" stroke="#D90000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </>
          ))}
        </div>

        {/* Guarantee strip */}
        <BlurFade delay={0.5}>
          <div className="bg-ink px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-[3px] border-ink" style={{ boxShadow: '6px 6px 0 #D90000' }}>
            <div>
              <div className="guarantee-badge mb-4" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#FFD600' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                5× ROI Guarantee
              </div>
              <p className="font-heading text-white text-3xl md:text-4xl tracking-wide mb-2">
                IF WE DON&apos;T FIND IT, YOU DON&apos;T PAY.
              </p>
              <p className="font-body text-dark-m text-sm max-w-lg leading-relaxed">
                If the PEAK13 Diagnostic doesn&apos;t identify at least 5× its cost in annual savings,
                you receive a full refund. No small print. No caveats.
              </p>
            </div>
            <a href="#contact" className="btn-red shrink-0 whitespace-nowrap">
              Book a Free Snapshot →
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
