'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const reframes = [
  { old: 'Can\'t focus', new: 'Pattern recognition at speed' },
  { old: 'Too intense', new: 'Deep systems thinking' },
  { old: 'Easily distracted', new: 'Multi-threaded awareness' },
  { old: 'Breaks the rules', new: 'Questions every assumption' },
]

export default function Discovery() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.discovery-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        '.reframe-row',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.reframes-container',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="discovery"
      ref={ref}
      className="section-full relative z-10 px-6 py-32"
    >
      <div className="max-w-5xl mx-auto">
        <div className="discovery-content" style={{ opacity: 0 }}>
          <p className="label-tag">Discovery</p>

          <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-8 max-w-3xl">
            <span className="text-white">I wasn&apos;t failing.</span>
            <br />
            <span className="gradient-text">I was wired differently.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <p className="text-teal-muted/70 text-lg leading-relaxed font-body">
              The same brain that struggled in a classroom built a process that scaled a
              government rollout to 1,000+ devices. The same instinct that got me in trouble
              for questioning things led me to redesign service models an entire project board adopted.
            </p>
            <p className="text-teal-muted/70 text-lg leading-relaxed font-body">
              Neurodivergence isn&apos;t noise. It&apos;s signal. When you learn to tune it — to find
              the frequency where your natural wiring becomes an asset — everything changes.
              That&apos;s what I help businesses do with AI.
            </p>
          </div>

          {/* Reframe table */}
          <div className="reframes-container bg-[#0d1a14] border border-teal/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 bg-teal/5 border-b border-teal/10 px-6 py-3">
              <p className="text-xs uppercase tracking-widest text-teal-muted/40 font-body">The Label</p>
              <p className="text-xs uppercase tracking-widest text-teal/70 font-body">The Signal</p>
            </div>
            {reframes.map((item, i) => (
              <div
                key={i}
                className="reframe-row grid grid-cols-2 px-6 py-4 border-b border-teal/5 last:border-0"
                style={{ opacity: 0 }}
              >
                <p className="text-white/40 text-sm font-body line-through">{item.old}</p>
                <p className="text-teal-muted text-sm font-semibold font-body">{item.new}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
