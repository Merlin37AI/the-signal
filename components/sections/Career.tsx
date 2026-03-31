'use client'

import { useRef } from 'react'
import { BlurFade } from '@/components/ui/animations/blur-fade'
import { AnimatedBeam } from '@/components/ui/animations/animated-beam'
import dynamic from 'next/dynamic'

// Lazy-load the Remotion player (client only, heavy dependency)
const DiagnosticPlayer = dynamic(
  () => import('@/components/remotion/DiagnosticPlayer').then((m) => m.DiagnosticPlayer),
  { ssr: false, loading: () => <div className="w-full h-[200px] rounded-2xl bg-dark-s border border-dark-b animate-pulse" /> }
)

const steps = [
  {
    num: '1',
    label: 'Discovery',
    duration: 'Days 1–5',
    headline: 'We map your operation inside-out.',
    description:
      'We spend time inside your business — mapping workflows, interviewing your team, and identifying every manual process that is consuming capacity. No assumptions. No templates applied blindly.',
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
  const containerRef = useRef<HTMLDivElement>(null)
  const step1Ref = useRef<HTMLDivElement>(null)
  const step2Ref = useRef<HTMLDivElement>(null)
  const step3Ref = useRef<HTMLDivElement>(null)

  const stepRefs = [step1Ref, step2Ref, step3Ref]

  return (
    <section id="diagnostic" className="zone-light section-pad border-b border-border">
      <div className="container-lg">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <BlurFade delay={0.05}>
            <p className="eyebrow eyebrow-light mb-5">The PEAK13 Diagnostic</p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <h2
              className="font-heading font-extrabold text-ink leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              From operational chaos
              <br />
              to a clear roadmap — in 14 days.
            </h2>
          </BlurFade>
          <BlurFade delay={0.25}>
            <p className="text-muted text-lg font-body mt-5 leading-relaxed">
              Most consultants show up with a slide template and a theory. The PEAK13 Diagnostic is
              a structured, evidence-based process — built from Six Sigma DMAIC methodology — that
              gives you real numbers, not educated guesses.
            </p>
          </BlurFade>
        </div>

        {/* Remotion DataFlow animation */}
        <BlurFade delay={0.3} className="mb-16">
          <DiagnosticPlayer />
        </BlurFade>

        {/* Step cards with AnimatedBeam connector */}
        <div
          ref={containerRef}
          className="relative grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 items-start mb-16"
        >
          {/* Animated beam: step 1 → step 2 */}
          <AnimatedBeam
            containerRef={containerRef as React.RefObject<HTMLElement>}
            fromRef={step1Ref as React.RefObject<HTMLElement>}
            toRef={step2Ref as React.RefObject<HTMLElement>}
            curvature={-30}
            duration={3}
            delay={0.2}
            pathColor="#E0DCD4"
            gradientStartColor="#E8400C"
            gradientStopColor="#ff8c42"
            className="hidden md:block"
          />
          {/* Animated beam: step 2 → step 3 */}
          <AnimatedBeam
            containerRef={containerRef as React.RefObject<HTMLElement>}
            fromRef={step2Ref as React.RefObject<HTMLElement>}
            toRef={step3Ref as React.RefObject<HTMLElement>}
            curvature={-30}
            duration={3}
            delay={0.6}
            pathColor="#E0DCD4"
            gradientStartColor="#E8400C"
            gradientStopColor="#ff8c42"
            className="hidden md:block"
          />

          {steps.map((step, i) => (
            <>
              {/* Step */}
              <BlurFade key={step.num} delay={0.15 + i * 0.15} className="flex flex-col">
                <div ref={stepRefs[i]} className="flex items-center gap-4 mb-5">
                  <div className="diagnostic-circle border-accent text-accent w-14 h-14 rounded-full border-2 flex items-center justify-center font-heading font-extrabold text-lg mb-0">
                    {step.num}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-ink text-lg leading-none">{step.label}</p>
                    <p className="text-xs text-muted font-body mt-1">{step.duration}</p>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-ink text-base mb-2 leading-snug">
                  {step.headline}
                </h3>
                <p className="text-muted text-sm leading-relaxed font-body mb-4">
                  {step.description}
                </p>

                {/* Output */}
                <div className="bg-surface border border-border rounded-xl px-4 py-3">
                  <p className="text-xs text-accent font-semibold font-body uppercase tracking-widest mb-1">
                    Output
                  </p>
                  <p className="text-ink text-sm font-body leading-snug">{step.output}</p>
                </div>
              </BlurFade>

              {/* Connector spacer — only between steps */}
              {i < steps.length - 1 && (
                <div key={`spacer-${i}`} className="diagnostic-connector px-6 pt-7">
                  <svg width="32" height="2" viewBox="0 0 32 2" fill="none">
                    <line x1="0" y1="1" x2="32" y2="1" stroke="#E0DCD4" strokeWidth="1.5" strokeDasharray="4 3" />
                  </svg>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="-ml-1">
                    <path d="M1 1L7 6L1 11" stroke="#E8400C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </>
          ))}
        </div>

        {/* Guarantee strip */}
        <BlurFade delay={0.5}>
          <div className="bg-dark rounded-2xl px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="guarantee-badge inline-flex mb-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                5× ROI Guarantee
              </div>
              <p className="font-heading font-extrabold text-white text-2xl mb-2">
                If we don&apos;t find it, you don&apos;t pay.
              </p>
              <p className="text-dark-m text-sm font-body max-w-lg leading-relaxed">
                If the PEAK13 Diagnostic doesn&apos;t identify at least 5× its cost in annual savings,
                you receive a full refund. No small print. No caveats.
              </p>
            </div>
            <a href="#contact" className="btn-primary shrink-0 text-base px-8 py-4 whitespace-nowrap">
              Book a Free Snapshot Call →
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
