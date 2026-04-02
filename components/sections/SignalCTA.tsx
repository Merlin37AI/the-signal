'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/ui/animations/blur-fade'

const testimonials = [
  {
    quote: "Gary doesn't just advise — he gets inside the operation and shows you exactly where AI creates genuine leverage. The thinking is operational, not theoretical. That's rare.",
    name: 'Sailesh Jani',
    company: 'Founder, The Argenis Advisory · Dubai & London',
  },
  {
    quote: "What sets Gary apart is that he actually understands how businesses run — not just what AI can do. He spoke our language, found problems we'd normalised, and built systems that the team actually uses.",
    name: 'Director',
    company: 'Property Services Business · Dubai UAE',
  },
  {
    quote: "I've worked with AI consultants who hand over a strategy and disappear. Gary stays embedded. He's in the sessions, he's in the implementation, he's accountable for what gets built.",
    name: 'Managing Director',
    company: 'Professional Services Firm · UK',
  },
]

const faqs = [
  {
    q: 'What does fractional actually mean in practice?',
    a: "It means I work inside your business — in your strategy sessions, your team conversations, your implementation reviews — without being on your payroll full time. Typically 1–2 days per week, depending on the engagement. You get senior AI leadership without the full-time cost or commitment.",
  },
  {
    q: 'How is this different from hiring an AI consultant?',
    a: "A traditional consultant diagnoses your business and hands you a document. I stay embedded for the duration of the engagement — attending your meetings, owning your AI roadmap, overseeing what gets built. The difference is accountability. I'm measured on what gets implemented, not what gets written.",
  },
  {
    q: 'What size of business do you work with?',
    a: "Growing businesses with 10–100 staff, typically in professional services, property, or operations-heavy sectors in the UK or UAE. Large enough to have complex workflows worth automating; at a stage where fractional advisory makes more financial sense than a full-time senior AI hire.",
  },
  {
    q: 'We\'ve tried AI tools before and they didn\'t stick — will this be different?',
    a: "Yes — because I start with diagnosis, not tools. Tool failure almost always comes from buying before understanding. My process maps your operation first, identifies where AI creates genuine value in your specific context, then recommends the right tools for that job — not the other way around.",
  },
  {
    q: 'Do we need to be technically advanced?',
    a: "Not at all. I bridge the gap between your business goals and the technology. You tell me what you want to achieve operationally — I design, build, and oversee the implementation. Your team doesn't need to understand the tech; they just need to use it.",
  },
  {
    q: 'How quickly can we get started?',
    a: "An AI Clarity Session can be booked within a week. For a retainer or build engagement, we typically align on scope within 2 weeks of an initial call, then kick off. I take a limited number of engagements at any one time — so availability can vary.",
  },
]

export default function ResultsAboutTestimonialsPage() {
  return (
    <>
      {/* ── About Gary ── */}
      <section id="gary" className="zone-light border-b-[3px] border-ink">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="section-header-bar">
            <span className="section-num-tag">05</span>
            <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-ink leading-none">
              ABOUT GARY
            </h2>
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-20 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Photo */}
            <BlurFade delay={0.1} className="order-2 md:order-1">
              <div
                className="relative w-full max-w-sm mx-auto md:mx-0 aspect-[4/5] overflow-hidden border-[3px] border-ink"
                style={{ boxShadow: '8px 8px 0 #D90000' }}
              >
                <Image
                  src="/gary-headshot.jpg"
                  alt="Gary Quigley — Fractional AI Advisor, PEAK13 Consulting"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
                {/* Yellow corner stamp */}
                <div className="absolute bottom-0 left-0 bg-yellow border-t-[3px] border-r-[3px] border-ink px-4 py-3">
                  <p className="font-heading text-ink text-xl leading-none tracking-wide">GARY QUIGLEY</p>
                  <p className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-ink/60">Fractional AI Advisor · GDS</p>
                </div>
              </div>

              {/* Credentials below photo */}
              <div className="mt-6 max-w-sm mx-auto md:mx-0">
                <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-muted/60 mb-3">Credentials</p>
                <div className="flex flex-wrap gap-2">
                  {['ITIL 4 Foundation', 'Six Sigma Green Belt', 'AI in Business — UPenn', 'Micro MBA Cum Laude', 'CompTIA Security+', 'CPD Business Strategist'].map((c) => (
                    <span key={c} className="font-sub font-semibold text-xs tracking-[0.08em] uppercase text-muted border-[2px] border-ink/20 px-3 py-1.5">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Bio */}
            <div className="order-1 md:order-2">
              <BlurFade delay={0.15}>
                <h3
                  className="font-heading text-ink leading-[1.0] mb-6 tracking-wide"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  8 YEARS BUILDING SYSTEMS. NOW HELPING OTHERS DO THE SAME WITH AI.
                </h3>
              </BlurFade>
              <BlurFade delay={0.25}>
                <div className="space-y-4 font-body text-muted text-base leading-relaxed">
                  <p>
                    I spent 8 years inside enterprise IT and operational transformation — at the
                    Maritime &amp; Coastguard Agency, Control Risks, and several high-growth
                    businesses — designing the processes, governance frameworks, and systems
                    that made complex organisations run more reliably.
                  </p>
                  <p>
                    I&apos;m neurodivergent, and I&apos;ve found that this shapes how I approach
                    complex systems. I see the patterns in broken processes quickly. I find
                    inefficiencies that people have normalised because they&apos;ve been there
                    too long to see them as problems.
                  </p>
                  <p>
                    I&apos;m currently AI Operations Lead at The Argenis Advisory — a business-first
                    AI consultancy serving global brands including Microsoft, NEOM, and Riyadh Air —
                    and Fractional AI Advisor to Upgraded Landscaping in Dubai. I founded Gary Does Strategy
                    to bring the same embedded, operations-first advisory to growing businesses.
                  </p>
                  <p className="font-sub font-semibold text-xs tracking-[0.14em] uppercase text-muted/60">
                    Based in Dubai · Works across UAE and UK · Remote and in-person
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={0.35} className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/gary-quigley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light text-sm"
                >
                  Connect on LinkedIn →
                </a>
                <a href="#contact" className="btn-primary text-sm">
                  Work with Gary
                </a>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="zone-dark noise-overlay border-b-[3px] border-ink">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="section-header-bar border-dark-b">
            <span className="section-num-tag section-num-tag-inv">06</span>
            <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-white leading-none">
              WHAT CLIENTS SAY
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 border-t-0">
          {testimonials.map((t, i) => (
            <BlurFade key={i} delay={0.1 + i * 0.12}>
              <div className="p-8 md:p-10 flex flex-col h-full border-r-[2px] border-dark-b last:border-r-0">
                <p className="font-heading text-7xl text-accent leading-none mb-4 select-none">&ldquo;</p>
                <p className="font-body text-white/65 text-base leading-relaxed flex-1 mb-6">{t.quote}</p>
                <div className="border-t-[2px] border-dark-b pt-4">
                  <p className="font-sub font-700 text-white text-sm tracking-wide uppercase">{t.name}</p>
                  <p className="font-body text-dark-m text-xs mt-1">{t.company}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="zone-light border-b-[3px] border-ink">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="section-header-bar">
            <span className="section-num-tag">07</span>
            <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-ink leading-none">
              COMMON QUESTIONS
            </h2>
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-20 py-14 md:py-20">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            <div>
              <BlurFade delay={0.05}>
                <p className="font-body text-muted text-base leading-relaxed mb-8">
                  Anything else? Book a free 20-minute intro call and ask me directly.
                </p>
              </BlurFade>
              <BlurFade delay={0.15}>
                <a href="#contact" className="btn-primary">
                  Book an Intro Call →
                </a>
              </BlurFade>
            </div>

            <BlurFade delay={0.2} className="space-y-0">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section id="contact" className="zone-dark noise-overlay border-t-[3px] border-accent">
        <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
          {/* Big brutalist CTA headline */}
          <div className="mb-10">
            <BlurFade delay={0.05}>
              <p className="font-sub font-700 text-xs tracking-[0.22em] uppercase text-accent mb-6">
                Ready to start?
              </p>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h2 className="font-heading text-white leading-[0.92] tracking-wide mb-0" style={{ fontSize: 'clamp(4rem, 10vw, 10rem)' }}>
                <span className="block">LET&apos;S</span>
                <span className="block bg-yellow text-ink px-4 inline-block">THINK</span>
                <span className="block text-accent">DIFFER-</span>
                <span className="block" style={{ WebkitTextStroke: '3px rgba(255,255,255,0.3)', color: 'transparent' }}>ENTLY.</span>
              </h2>
            </BlurFade>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mt-14 pt-10 border-t-[2px] border-dark-b">
            <BlurFade delay={0.3}>
              <p className="font-body text-dark-m text-lg leading-relaxed mb-8">
                Book a free 20-minute intro call. No pitch, no jargon — just an honest conversation
                about your business and where AI can create real value for you.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://calendly.com/quigleygary/signal-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red"
                >
                  Book a Free Intro Call →
                </a>
                <a href="mailto:gary@garydoesstrategy.com" className="btn-ghost-dark">
                  Send an Email
                </a>
              </div>
              <div className="guarantee-badge" style={{ borderColor: 'rgba(255,255,255,0.15)', color: '#FFD600' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Senior AI judgment. No junior handoffs. No disappearing acts.
              </div>
            </BlurFade>

            {/* Contact details box */}
            <BlurFade delay={0.4}>
              <div className="border-[3px] border-dark-b p-8" style={{ boxShadow: '6px 6px 0 #D90000' }}>
                <p className="font-sub font-700 text-xs tracking-[0.2em] uppercase text-accent mb-6">Contact</p>
                <div className="space-y-4">
                  <div className="border-b-[1px] border-dark-b pb-4">
                    <p className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-dark-m mb-1">Email</p>
                    <a href="mailto:quigleygary@hotmail.com" className="font-body text-white hover:text-accent transition-colors text-base">
                      quigleygary@hotmail.com
                    </a>
                  </div>
                  <div className="border-b-[1px] border-dark-b pb-4">
                    <p className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-dark-m mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/gary-quigley" target="_blank" rel="noopener noreferrer" className="font-body text-white hover:text-accent transition-colors text-base">
                      linkedin.com/in/gary-quigley
                    </a>
                  </div>
                  <div className="border-b-[1px] border-dark-b pb-4">
                    <p className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-dark-m mb-1">Also At</p>
                    <a href="https://argenisadvisory.com" target="_blank" rel="noopener noreferrer" className="font-body text-white hover:text-accent transition-colors text-base block">
                      The Argenis Advisory
                    </a>
                  </div>
                  <div>
                    <p className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-dark-m mb-1">Location</p>
                    <p className="font-body text-white/70 text-base">Dubai, UAE &amp; United Kingdom</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Footer */}
          <BlurFade delay={0.6} className="mt-20 pt-8 border-t-[2px] border-dark-b flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-heading text-xl text-yellow tracking-wide">GDS</p>
            <p className="font-sub font-semibold text-xs tracking-[0.1em] uppercase text-white/20">
              © {new Date().getFullYear()} Gary Quigley · Gary Does Strategy · All rights reserved
            </p>
          </BlurFade>
        </div>
      </section>
    </>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b-[2px] border-ink py-5 last:border-b-0">
      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-sub font-700 text-ink text-base uppercase tracking-wide leading-snug hover:text-accent transition-colors duration-150">
        {q}
        <span className="shrink-0 w-6 h-6 border-[2px] border-ink flex items-center justify-center text-ink text-sm mt-0.5 group-open:rotate-45 transition-transform duration-200 font-bold">
          +
        </span>
      </summary>
      <p className="font-body text-muted text-sm leading-relaxed mt-3 pr-8">{a}</p>
    </details>
  )
}
