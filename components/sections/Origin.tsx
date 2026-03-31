'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const struggles = [
  { label: 'Reading Age', value: '6 at age 11', note: 'Three years behind' },
  { label: 'School reports', value: '"Could do better"', note: 'Every. Single. Year.' },
  { label: 'Diagnosed', value: 'Never', note: 'Just labelled "difficult"' },
  { label: 'Expected outcome', value: 'Limited', note: 'According to the system' },
]

export default function Origin() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger in the struggle cards
      gsap.fromTo(
        '.struggle-card',
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.struggle-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Red underline reveal on key phrases
      gsap.fromTo(
        '.red-underline',
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.origin-text',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        '.origin-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
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
      id="origin"
      ref={ref}
      className="section-full relative z-10 px-6 py-32"
    >
      <div className="max-w-5xl mx-auto origin-content" style={{ opacity: 0 }}>
        <p className="label-tag">Origin</p>

        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-8 max-w-3xl">
          The frequencies were{' '}
          <span className="relative inline-block">
            chaotic
            <span className="red-underline absolute bottom-0 left-0 right-0 h-[3px] bg-red-500 rounded" style={{ transform: 'scaleX(0)' }} />
          </span>{' '}
          from the start.
        </h2>

        <div className="origin-text grid md:grid-cols-2 gap-8 mb-16">
          <p className="text-teal-muted/70 text-lg leading-relaxed font-body">
            School was a{' '}
            <span className="relative inline-block text-white">
              constant battle
              <span className="red-underline absolute bottom-0 left-0 right-0 h-[2px] bg-red-500/70 rounded" style={{ transform: 'scaleX(0)' }} />
            </span>
            . The words wouldn&apos;t sit still on the page. Teachers called it laziness. The system called it{' '}
            <span className="relative inline-block text-white">
              underperformance
              <span className="red-underline absolute bottom-0 left-0 right-0 h-[2px] bg-red-500/70 rounded" style={{ transform: 'scaleX(0)' }} />
            </span>
            . Nobody called it what it actually was.
          </p>
          <p className="text-teal-muted/70 text-lg leading-relaxed font-body">
            The noise was everywhere. Too many signals, too much interference.
            From the Isle of Wight to Southampton — not a straight line in sight.
            But something underneath was always trying to break through.
          </p>
        </div>

        {/* Struggle cards */}
        <div className="struggle-grid grid grid-cols-2 md:grid-cols-4 gap-4">
          {struggles.map((item) => (
            <div
              key={item.label}
              className="struggle-card bg-[#0d1a14] border border-red-900/30 rounded-xl p-5"
              style={{ opacity: 0 }}
            >
              <p className="text-xs text-teal-muted/40 uppercase tracking-widest mb-2 font-body">{item.label}</p>
              <p className="font-heading font-bold text-white text-base leading-tight mb-1">{item.value}</p>
              <p className="text-xs text-red-400/60 font-body">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
