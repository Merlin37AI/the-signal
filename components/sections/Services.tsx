'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

type ModalType = 'audit' | 'talk' | 'call'

interface ServicesProps {
  onCTA: (type: ModalType) => void
}

const services = [
  {
    band: '01',
    title: 'AI Audit',
    tagline: 'Where is AI making sense for your business right now?',
    description:
      'A structured DMAIC diagnostic that maps where your business is losing time, money, and opportunity — and identifies exactly where AI intervention will create measurable impact. No hype. No generic recommendations.',
    outcomes: [
      'Full operational audit across your workflows',
      'Prioritised AI use case map',
      'Governance and risk framework',
      'Roadmap from pilot to embedded practice',
    ],
    ideal: 'Service businesses with 5–50 staff. Coaches, agencies, SaaS, professional services.',
    cta: 'audit' as ModalType,
    ctaLabel: 'Request an AI Audit',
  },
  {
    band: '02',
    title: 'Fractional AI Strategy',
    tagline: 'C-suite AI leadership without the full-time hire.',
    description:
      'Ongoing fractional advisory for founders and executives who need an AI strategy partner embedded in their decision-making — without the cost of a full-time role. I work across Argenis Advisory and direct engagements.',
    outcomes: [
      'Monthly AI strategy sessions',
      'Use case pipeline management',
      'Vendor and tool selection support',
      'AI governance and adoption accountability',
    ],
    ideal: 'Founders and C-suite leaders in UAE & UK scaling with AI for the first time.',
    cta: 'call' as ModalType,
    ctaLabel: 'Book a Signal Call',
  },
  {
    band: '03',
    title: 'Speaking',
    tagline: 'AI, neurodivergence, and the human signal.',
    description:
      'Keynote and panel speaker on AI adoption, operational transformation, and how neurodivergent thinking is actually a competitive advantage in the age of AI. Available for leadership events, conferences, and corporate off-sites.',
    outcomes: [
      'Keynote: "Finding the Signal — AI as a Business Tool, Not a Threat"',
      'Panel: AI Adoption & Change Management',
      'Workshop: Practical AI for Leadership Teams',
      'Fireside: The Neurodivergent Advantage in AI',
    ],
    ideal: 'Event organisers, HR leaders, innovation teams, and conference programmers.',
    cta: 'talk' as ModalType,
    ctaLabel: 'Book Gary to Speak',
  },
]

export default function Services({ onCTA }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      )
      gsap.fromTo(
        '.service-band',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={ref}
      className="section-full relative z-10 px-6 py-32"
    >
      <div className="max-w-5xl mx-auto">
        <div className="services-header mb-16" style={{ opacity: 0 }}>
          <p className="label-tag">Services</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mt-2">
            Three clean{' '}
            <span className="gradient-text">signal bands.</span>
          </h2>
          <p className="text-teal-muted/60 mt-4 text-lg font-body max-w-xl">
            No vague retainers. No generic AI workshops. Just structured engagements
            that deliver a specific outcome.
          </p>
        </div>

        <div className="services-grid space-y-4">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-band border rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                expanded === i
                  ? 'border-teal/40 bg-[#0d1a14]'
                  : 'border-teal/10 bg-[#0d1a14]/60 hover:border-teal/25'
              }`}
              style={{ opacity: 0 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              data-cursor-hover
            >
              {/* Band header */}
              <div className="flex items-center justify-between px-6 md:px-8 py-6">
                <div className="flex items-center gap-6">
                  <span className="font-heading text-5xl font-bold text-teal/20 select-none">{service.band}</span>
                  <div>
                    <h3 className="font-heading font-bold text-white text-xl md:text-2xl">{service.title}</h3>
                    <p className="text-teal-muted/60 text-sm font-body mt-0.5">{service.tagline}</p>
                  </div>
                </div>
                <div
                  className={`w-8 h-8 rounded-full border border-teal/30 flex items-center justify-center text-teal transition-transform duration-300 ${
                    expanded === i ? 'rotate-45 bg-teal/10' : ''
                  }`}
                >
                  +
                </div>
              </div>

              {/* Expandable content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded === i ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-8 pt-0 grid md:grid-cols-2 gap-8 border-t border-teal/10">
                  <div>
                    <p className="text-white/70 text-sm leading-relaxed font-body mb-6 mt-6">{service.description}</p>
                    <p className="text-xs text-teal/50 uppercase tracking-widest mb-3 font-body">Ideal for</p>
                    <p className="text-teal-muted/60 text-sm font-body">{service.ideal}</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs text-teal/50 uppercase tracking-widest mb-4 font-body">What you get</p>
                    <ul className="space-y-2 mb-8">
                      {service.outcomes.map((outcome, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-white/70 font-body">
                          <span className="text-teal mt-0.5 shrink-0">→</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={(e) => { e.stopPropagation(); onCTA(service.cta) }}
                      className="w-full md:w-auto px-6 py-3 bg-teal text-bg font-semibold text-sm rounded-full hover:bg-teal-light transition-colors duration-200 teal-glow"
                      data-cursor-hover
                    >
                      {service.ctaLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
