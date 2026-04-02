'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/ui/animations/blur-fade'

const work = [
  {
    client: 'The Argenis Advisory',
    location: 'London & Dubai',
    role: 'AI Operations Lead',
    headline: 'Embedding operational AI inside a business-first consultancy.',
    summary:
      'The Argenis Advisory is a business-first AI consultancy serving some of the world\'s most recognised brands — including Microsoft, NEOM, Riyadh Air, and eBay. As AI Operations Lead, Gary sits inside the delivery team, overseeing the operational implementation of AI strategies developed by the advisory\'s founders.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Strategy team in a modern office environment',
    focus: [
      { area: 'Process Automation', detail: 'Identifying and mapping high-friction manual processes across client operations for AI-led resolution.' },
      { area: 'Implementation Oversight', detail: 'Managing the build and deployment of AI solutions across client businesses, from workflow automation to knowledge management systems.' },
      { area: 'Client Operations', detail: 'Structuring client-facing reporting, onboarding, and communication systems to reduce manual coordination overhead.' },
      { area: 'Knowledge Management', detail: 'Building AI-assisted knowledge frameworks that allow businesses to capture and surface institutional knowledge at scale.' },
    ],
    tag: 'AI Consultancy',
    website: 'https://argenisadvisory.com',
  },
  {
    client: 'Upgraded Landscaping',
    location: 'Dubai, UAE',
    role: 'Fractional AI Advisor',
    headline: 'Bringing operational intelligence to Dubai\'s premium landscaping market.',
    summary:
      'Upgraded Landscaping delivers premium villa landscaping across Dubai\'s most prestigious communities — Dubai Hills Estate, Arabian Ranches, Emirates Hills, and Palm Jumeirah. Gary advises on how AI and automation can improve the operational backbone of a high-growth service business managing multiple active sites across the city.',
    image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Premium landscaped garden with luxury villa',
    focus: [
      { area: 'Customer Communication', detail: 'Automating client updates, quote follow-ups, and project status notifications — reducing manual touchpoints without losing the premium service feel.' },
      { area: 'Job & Project Orchestration', detail: 'Structuring task assignment, crew scheduling, and project milestone tracking with AI-assisted workflow tools.' },
      { area: 'Reporting & Visibility', detail: 'Building dashboards that surface job status, team performance, and client satisfaction data in real time for leadership.' },
      { area: 'Site & Asset Operations', detail: 'Using AI to manage site documentation, maintenance records, and compliance requirements across multiple active project locations.' },
    ],
    tag: 'Premium Landscaping · Dubai',
    website: 'https://upgradedlandscaping.ae',
  },
]

export default function Comparison() {
  return (
    <section id="results" className="zone-light border-b-[3px] border-ink">
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="section-header-bar">
          <span className="section-num-tag">04</span>
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-ink leading-none">
            CURRENT CLIENT WORK
          </h2>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <BlurFade delay={0.05} className="mb-12">
          <p className="font-body text-muted text-lg leading-relaxed max-w-2xl">
            Gary currently advises two growing businesses — one in AI consultancy, one in premium property
            services. Both engagements are fractional and embedded.
          </p>
        </BlurFade>

        <div className="space-y-14">
          {work.map((c, ci) => (
            <BlurFade key={c.client} delay={0.1 + ci * 0.15}>
              <div className="border-[3px] border-ink overflow-hidden" style={{ boxShadow: '6px 6px 0 #D90000' }}>
                {/* Image banner */}
                <div className="relative w-full h-52 md:h-64 overflow-hidden border-b-[3px] border-ink">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
                  {/* Labels */}
                  <div className="absolute bottom-5 left-6 flex items-center gap-3">
                    <span className="font-sub font-700 text-xs tracking-[0.15em] uppercase text-white bg-accent border-[2px] border-accent px-3 py-1.5">
                      {c.tag}
                    </span>
                    <span className="font-sub font-semibold text-xs tracking-[0.1em] uppercase text-white/70 border border-white/20 px-3 py-1.5">
                      {c.location}
                    </span>
                  </div>
                  {/* Role in corner */}
                  <div className="absolute bottom-4 right-6 text-right">
                    <p className="font-sub font-700 text-[0.6rem] tracking-[0.14em] uppercase text-yellow/70 mb-0.5">
                      Gary&apos;s role
                    </p>
                    <p className="font-heading text-yellow leading-tight" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}>
                      {c.role.toUpperCase()}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 md:p-10 bg-bg">
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <h3 className="font-heading text-ink leading-[1.0] tracking-wide" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                      {c.client.toUpperCase()}
                    </h3>
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-muted border-[2px] border-ink/20 px-3 py-2 hover:border-accent hover:text-accent transition-colors shrink-0"
                    >
                      Visit Site →
                    </a>
                  </div>
                  <p className="font-body text-muted text-base leading-relaxed mb-8">{c.summary}</p>

                  {/* Focus grid */}
                  <div className="grid md:grid-cols-2 gap-0 border-[2px] border-ink mb-6">
                    {c.focus.map((f, fi) => (
                      <BlurFade key={f.area} delay={0.15 + fi * 0.08}>
                        <div className={`p-5 border-b-[2px] border-r-[2px] last:border-r-0 border-ink ${fi >= 2 ? 'border-b-0' : ''}`}>
                          <p className="font-sub font-700 text-ink text-sm uppercase tracking-wide leading-snug mb-2">
                            {f.area}
                          </p>
                          <p className="font-body text-muted text-xs leading-relaxed">{f.detail}</p>
                        </div>
                      </BlurFade>
                    ))}
                  </div>

                  {/* Headline strip */}
                  <div className="bg-ink px-5 py-4">
                    <p className="font-sub font-semibold text-sm tracking-[0.08em] uppercase text-white/50">
                      {c.headline}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={0.4} className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 border-t-[2px] border-ink pt-10">
          <p className="font-body text-muted text-base max-w-xl leading-relaxed">
            Gary takes a small number of engagements at any one time to maintain quality of advisory work.
            Current availability varies — book an intro call to discuss your business.
          </p>
          <a href="#contact" className="btn-primary shrink-0">
            Check Availability →
          </a>
        </BlurFade>
      </div>
    </section>
  )
}
