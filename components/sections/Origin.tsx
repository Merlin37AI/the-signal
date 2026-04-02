'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/ui/animations/blur-fade'
import { Marquee } from '@/components/ui/animations/marquee'

const orgs = [
  'Control Risks', 'Maritime & Coastguard Agency', 'Argenis Advisory',
  'PEAK13 Consulting', 'Griffon Hoverwork', 'Control Risks',
  'Maritime & Coastguard Agency', 'Argenis Advisory', 'PEAK13 Consulting', 'Griffon Hoverwork',
]

const industries = [
  {
    num: '01',
    icon: '📊',
    industry: 'Accountancy Firms',
    sub: '5–35 partners & staff · UK & UAE',
    image: 'https://images.pexels.com/photos/6863254/pexels-photo-6863254.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Financial spreadsheets and accounting data',
    pains: [
      'Manual data entry consuming partner time',
      'Tax season capacity crises every year',
      'Client communication delays damaging retention',
      'Compliance reporting assembled by hand',
    ],
  },
  {
    num: '02',
    icon: '🏢',
    industry: 'Property Management',
    sub: '10–50 staff · UK & UAE',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Modern commercial building exterior',
    pains: [
      'Tenant enquiries handled manually across email and phone',
      'Maintenance coordination via WhatsApp and spreadsheets',
      'Rent collection follow-up consuming office time',
      'Lease and contract processing creating bottlenecks',
    ],
  },
]

export default function CredibilityBar() {
  return (
    <section className="zone-light border-b-[3px] border-ink overflow-hidden">
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="section-header-bar">
          <span className="section-num-tag">00</span>
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-ink leading-none">
            WHO THIS IS FOR
          </h2>
        </div>
      </div>

      {/* Org marquee */}
      <div className="py-6 border-b-[2px] border-ink/20 -mx-0">
        <p className="font-sub font-semibold text-[0.6rem] tracking-[0.22em] uppercase text-muted mb-4 px-6 md:px-12 lg:px-20">
          Background built inside
        </p>
        <Marquee speed="slow" pauseOnHover gap={0}>
          {orgs.map((o, i) => (
            <span
              key={`${o}-${i}`}
              className="shrink-0 font-sub font-semibold text-sm tracking-[0.1em] uppercase text-muted border-r-2 border-ink/20 px-8 py-1"
            >
              {o}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Industry cards */}
      <div className="grid md:grid-cols-2 border-t-[2px] border-ink/10">
        {industries.map((ind, i) => (
          <BlurFade key={ind.industry} delay={0.1 + i * 0.15}>
            <div className={`flex flex-col h-full border-r-[3px] last:border-r-0 border-ink ${i === 0 ? '' : 'border-r-0'}`}>
              {/* Image header */}
              <div className="relative h-44 overflow-hidden border-b-[3px] border-ink">
                <Image
                  src={ind.image}
                  alt={ind.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-ink/60" />
                {/* Industry badge */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <p className="font-heading text-2xl text-white tracking-wide leading-none">{ind.industry}</p>
                    <p className="font-sub text-xs tracking-[0.14em] uppercase text-white/50 mt-1">{ind.sub}</p>
                  </div>
                  <span className="font-heading text-5xl text-white/10 leading-none">{ind.num}</span>
                </div>
              </div>

              {/* Pain list */}
              <div className="p-7 md:p-10 flex-1">
                <ul className="space-y-3">
                  {ind.pains.map((p) => (
                    <li key={p} className="flex items-start gap-3 font-body text-sm text-muted">
                      <span className="text-accent font-bold mt-0.5 shrink-0 font-sub">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
