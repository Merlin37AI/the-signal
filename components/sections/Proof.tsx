'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const stats = [
  { value: '95%', label: 'First-call resolution rate', context: 'Maritime Coastguard Agency — highest in team' },
  { value: '25%', label: 'Downtime reduction', context: 'Control Risks — ITIL governance from zero' },
  { value: '50%', label: 'Phishing incidents cut', context: 'Griffon Hoverwork — cybersecurity programme' },
  { value: '1,000+', label: 'Device deployment playbook', context: 'MCA rollout — process adopted at scale' },
  { value: '40%', label: 'Cross-programme alignment', context: 'MCA — 100% of service models adopted' },
  { value: '8+', label: 'Years enterprise transformation', context: 'ITIL 4 · Six Sigma · AI Strategy' },
]

const certifications = [
  { name: 'ITIL 4 Foundation', issuer: 'PeopleCert', year: '2022' },
  { name: 'Six Sigma Green Belt', issuer: 'GLSS', year: '2022' },
  { name: 'AI in Business Specialization', issuer: 'University of Pennsylvania', year: '2025' },
  { name: 'Micro MBA, Cum Laude', issuer: 'MBA ASAP', year: '2025' },
  { name: 'CPD Business Strategist', issuer: 'ThatStrategyco', year: '2024' },
  { name: 'CompTIA Security+, Network+, A+', issuer: 'CompTIA', year: '' },
]

const testimonials = [
  {
    quote: 'Gary doesn\'t just audit — he maps the whole system and shows you exactly where the leverage is. The clarity was worth the engagement alone.',
    name: 'Property Management CEO',
    location: 'Dubai, UAE',
  },
  {
    quote: 'I\'ve had AI consultants before who gave me a deck full of buzzwords. Gary gave me a roadmap I could actually execute on week one.',
    name: 'Founder, Professional Services Agency',
    location: 'London, UK',
  },
]

export default function Proof() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.proof-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      )
      gsap.fromTo(
        '.stat-card',
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1, scale: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: '.stats-grid', start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      )
      gsap.fromTo(
        '.cert-pill',
        { opacity: 0, y: 10 },
        {
          opacity: 1, y: 0, stagger: 0.06, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { trigger: '.certs-row', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      )
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.testimonials-row', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="proof"
      ref={ref}
      className="section-full relative z-10 px-6 py-32"
    >
      <div className="max-w-5xl mx-auto">
        <div className="proof-header mb-16" style={{ opacity: 0 }}>
          <p className="label-tag">Proof</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mt-2">
            The signal{' '}
            <span className="gradient-text">stabilises.</span>
          </h2>
          <p className="text-teal-muted/60 mt-4 text-lg font-body max-w-xl">
            8 years of measurable outcomes across government, enterprise, and now AI consulting.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card bg-[#0d1a14] border border-teal/10 rounded-xl p-6 hover:border-teal/25 transition-colors duration-300"
              style={{ opacity: 0 }}
            >
              <p className="font-heading font-bold text-teal text-3xl md:text-4xl mb-1">{stat.value}</p>
              <p className="text-white text-sm font-semibold mb-1 font-body">{stat.label}</p>
              <p className="text-teal-muted/40 text-xs font-body leading-relaxed">{stat.context}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <p className="text-xs text-teal/50 uppercase tracking-widest mb-5 font-body">Certifications & Credentials</p>
          <div className="certs-row flex flex-wrap gap-2">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="cert-pill flex items-center gap-2 bg-[#0d1a14] border border-teal/10 rounded-full px-4 py-2"
                style={{ opacity: 0 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span className="text-xs text-white/70 font-body">{cert.name}</span>
                {cert.issuer && <span className="text-xs text-teal/40 font-body hidden md:inline">· {cert.issuer}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-row grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-[#0d1a14] border border-teal/10 rounded-2xl p-7 hover:border-teal/20 transition-colors duration-300"
              style={{ opacity: 0 }}
            >
              <div className="text-teal text-3xl font-heading mb-4 leading-none">"</div>
              <p className="text-white/80 text-base leading-relaxed font-body mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center text-teal text-xs font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold font-body">{t.name}</p>
                  <p className="text-teal-muted/40 text-xs font-body">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
