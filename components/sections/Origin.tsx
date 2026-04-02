'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/ui/animations/blur-fade'
import { Marquee } from '@/components/ui/animations/marquee'

const orgs = [
  'The Argenis Advisory', 'Gary Does Strategy', 'Upgraded Landscaping',
  'Maritime & Coastguard Agency', 'Control Risks', 'Griffon Hoverwork',
  'The Argenis Advisory', 'Gary Does Strategy', 'Upgraded Landscaping',
  'Maritime & Coastguard Agency', 'Control Risks', 'Griffon Hoverwork',
]

const credentials = [
  'ITIL 4 Foundation',
  'Six Sigma Green Belt',
  'AI in Business — UPenn',
  'Micro MBA Cum Laude',
  'CompTIA Security+',
  'CPD Business Strategist',
]

export default function CredibilityBar() {
  return (
    <section id="about" className="zone-light border-b-[3px] border-ink overflow-hidden">
      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="section-header-bar">
          <span className="section-num-tag">00</span>
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-ink leading-none">
            WHO I AM
          </h2>
        </div>
      </div>

      {/* Org marquee */}
      <div className="py-6 border-b-[2px] border-ink/20">
        <p className="font-sub font-semibold text-[0.6rem] tracking-[0.22em] uppercase text-muted mb-4 px-6 md:px-12 lg:px-20">
          Organisations I&apos;ve worked with or inside
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

      {/* Two-col: story + credentials */}
      <div className="grid md:grid-cols-[1fr_340px] border-t-0">
        {/* Story */}
        <div className="p-8 md:p-12 lg:p-16 border-r-0 md:border-r-[3px] border-ink">
          <BlurFade delay={0.1}>
            <h3
              className="font-heading text-ink leading-[1.0] mb-6 tracking-wide"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              I SEE SYSTEMS DIFFERENTLY. THAT&apos;S NOT A METAPHOR.
            </h3>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="space-y-4 font-body text-muted text-base leading-relaxed">
              <p>
                I&apos;m neurodivergent. I was before it was a talking point. And in 8 years
                of enterprise IT and operational transformation — at the Maritime &amp; Coastguard
                Agency, Control Risks, and several high-growth businesses — that wiring gave me
                an edge: I spot broken patterns in systems that everyone else has learned to work around.
              </p>
              <p>
                I now work as a Fractional AI Advisor: embedded inside leadership teams, without
                the full-time cost. I don&apos;t sell AI tools. I don&apos;t produce 60-slide
                strategy decks. I identify where AI creates genuine advantage in your specific
                business — and I help you build it, deploy it, and own it.
              </p>
              <p>
                My background is operations first, technology second. That means I think about
                your people, your processes, and your risk tolerance before I recommend a single
                tool. Most AI projects fail because they start at the wrong end. I start from yours.
              </p>
              <p className="font-sub font-semibold text-xs tracking-[0.14em] uppercase text-muted/60">
                Based in Dubai, UAE · Works across the UAE and UK · Remote and in-person
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <a href="/clients" className="btn-primary">
              See Current Clients →
            </a>
            <a href="#contact" className="btn-ghost-light">
              Work with Gary
            </a>
          </BlurFade>
        </div>

        {/* Photo + credentials */}
        <div className="flex flex-col border-t-[3px] md:border-t-0 border-ink">
          {/* Photo */}
          <div className="relative h-64 overflow-hidden border-b-[3px] border-ink shrink-0">
            <Image
              src="/gary-headshot.jpg"
              alt="Gary Quigley — Fractional AI Advisor, Gary Does Strategy"
              fill
              className="object-cover object-top"
              sizes="340px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <div className="absolute bottom-0 left-0 bg-yellow border-t-[3px] border-r-[3px] border-ink px-4 py-2">
              <p className="font-heading text-ink text-lg leading-none tracking-wide">GARY QUIGLEY</p>
              <p className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-ink/60">Fractional AI Advisor · GDS</p>
            </div>
          </div>

          {/* Credentials */}
          <div className="p-7 flex-1">
            <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-muted/60 mb-4">
              Credentials
            </p>
            <div className="space-y-2.5">
              {credentials.map((c) => (
                <div key={c} className="flex items-center gap-3 border-b-[1px] border-ink/10 pb-2.5 last:border-b-0">
                  <span className="text-accent font-bold text-sm shrink-0">→</span>
                  <span className="font-sub font-semibold text-xs tracking-[0.06em] uppercase text-muted">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t-[2px] border-ink/10">
              <a
                href="https://www.linkedin.com/in/gary-quigley"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors"
              >
                LinkedIn Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
