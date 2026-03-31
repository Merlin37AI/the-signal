'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const milestones = [
  {
    period: '2017–2021',
    role: 'IT Support Specialist',
    org: 'Maritime Coastguard Agency · Griffon Hoverwork',
    location: 'Southampton, UK',
    summary:
      'Built the operational instincts that underpin everything else. 95% first-call resolution. 1,500+ user estate. Patch management across 100+ systems. Named Most Improved by the Director of IT.',
    metrics: ['95% FCR', '50% phishing drop', '100+ systems patched'],
    color: '#1D9E75',
  },
  {
    period: '2021–2022',
    role: 'Service Transition & Readiness Analyst',
    org: 'Maritime Coastguard Agency',
    location: 'Southampton, UK',
    summary:
      'Designed a 90-device deployment playbook that was scaled to 1,000+ devices agency-wide. Redesigned service models adopted 100% by the project board. Improved cross-programme alignment by 40%.',
    metrics: ['1,000+ device playbook', '40% alignment improvement', '100% board adoption'],
    color: '#1D9E75',
  },
  {
    period: '2022–2025',
    role: 'Enterprise Transformation & Operations Manager',
    org: 'Control Risks',
    location: 'London, UK',
    summary:
      'Spearheaded transformation across a 1,500-user global organisation. Cut mission-critical downtime by 25% with ITIL-aligned service transition governance built from scratch. Delivered a Global Communication Centre and secure transport portal. Earned the Positive Impact Award — twice.',
    metrics: ['25% downtime reduction', 'Positive Impact Award ×2', 'ITIL governance from zero'],
    color: '#1D9E75',
  },
  {
    period: 'Apr 2025–Present',
    role: 'AI Transformation Consultant & Fractional AI Strategy Advisor',
    org: 'PEAK13 Consulting / Argenis Advisory',
    location: 'Dubai, UAE',
    summary:
      'Founded PEAK13 Consulting. Delivering AI transformation engagements for property management companies and UAE SMEs. Fractional AI advisor to C-suite clients. Building automation pipelines in N8N, Claude API, and Airtable. Architecting governance frameworks for responsible AI adoption.',
    metrics: ['DMAIC AI diagnostics', 'N8N + Claude API automation', 'C-suite AI governance'],
    color: '#1D9E75',
    current: true,
  },
]

export default function Career() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.career-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      )

      gsap.fromTo(
        '.milestone-card',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.timeline-container', start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="career"
      ref={ref}
      className="section-full relative z-10 px-6 py-32"
    >
      <div className="max-w-5xl mx-auto">
        <div className="career-header mb-16" style={{ opacity: 0 }}>
          <p className="label-tag">Career Signal</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mt-2 max-w-3xl">
            8 years. One clear{' '}
            <span className="gradient-text">trajectory.</span>
          </h2>
          <p className="text-teal-muted/60 mt-4 text-lg font-body max-w-xl">
            From IT support desk to enterprise transformation to AI strategy — every step
            built the framework I use today.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-teal/20 ml-3 md:ml-0" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="milestone-card relative pl-10 md:pl-24"
                style={{ opacity: 0 }}
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 md:left-8 top-5 w-3 h-3 rounded-full border-2 border-teal -translate-x-1/2 ${m.current ? 'bg-teal teal-glow' : 'bg-bg'}`}
                  style={{ marginLeft: '3px' }}
                />

                {/* Period */}
                <p className="absolute left-0 md:left-0 top-4 text-xs text-teal/50 font-body tracking-widest hidden md:block w-16 text-right pr-4"
                   style={{ left: '-64px' }}>
                  {/* Not shown on mobile */}
                </p>

                <div className={`bg-[#0d1a14] border rounded-xl p-6 transition-all duration-300 hover:border-teal/30 ${m.current ? 'border-teal/25' : 'border-teal/10'}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-xs text-teal/60 font-body tracking-widest uppercase mb-1">{m.period} · {m.location}</p>
                      <h3 className="font-heading font-bold text-white text-lg leading-tight">{m.role}</h3>
                      <p className="text-teal-muted/50 text-sm font-body mt-0.5">{m.org}</p>
                    </div>
                    {m.current && (
                      <span className="text-xs font-semibold text-teal bg-teal/10 border border-teal/20 px-3 py-1 rounded-full whitespace-nowrap">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed font-body mb-4">{m.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.metrics.map((metric) => (
                      <span key={metric} className="text-xs text-teal-muted font-semibold bg-teal/10 px-3 py-1 rounded-full font-body">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
