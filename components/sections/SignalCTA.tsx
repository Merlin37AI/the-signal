'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/ui/animations/blur-fade'

const testimonials = [
  {
    quote: "Gary doesn't just audit — he maps the whole system and shows you exactly where the leverage is. We found £110K in the first two weeks. The clarity alone was worth the engagement.",
    name: 'Managing Partner',
    company: 'Accountancy Firm, London UK',
  },
  {
    quote: "I've had AI consultants before who gave me a deck full of buzzwords. Gary gave me a roadmap I could actually execute on in week one. No theory. No jargon. Just a clear plan.",
    name: 'Director',
    company: 'Property Management Company, Dubai UAE',
  },
  {
    quote: "What set Gary apart was that he actually understands operations — not just AI. He spoke our language, found things we hadn't seen in years of running the business, and built systems that stuck.",
    name: 'Founder',
    company: 'Professional Services Firm, UAE',
  },
]

const faqs = [
  {
    q: 'What does the Snapshot Call involve?',
    a: "It's a free 30-minute call where I ask you about your business, your team, and your current processes. No pitch. No slide deck. I use it to understand whether the PEAK13 Diagnostic is right for you — and I'll tell you honestly if it isn't.",
  },
  {
    q: 'How does the 5× ROI Guarantee work?',
    a: "If the Diagnostic doesn't identify at least 5× its cost in quantifiable annual savings, you receive a full refund. No caveats, no small print. The guarantee applies to the PEAK13 Snapshot engagement.",
  },
  {
    q: "We've already tried AI tools and they didn't stick — will this be different?",
    a: "Yes — because we start with diagnosis, not tools. The Diagnostic finds where AI creates genuine value in your specific business before we recommend a single piece of software. Tool failure almost always comes from buying before understanding.",
  },
  {
    q: 'Do we need to be technically advanced?',
    a: "Not at all. I bridge the gap between your business goals and the technology. You tell me what you want to achieve operationally — I design, build, and implement the systems. Your team doesn't need to understand the tech; they just need to use it.",
  },
  {
    q: 'What size of business do you work with?',
    a: "Primarily accountancy firms with 5–35 partners and staff, and property management companies with 10–50 staff, based in the UK or UAE. Large enough to have complex workflows, small enough that fractional advisory makes financial sense.",
  },
  {
    q: 'How quickly can we get started?',
    a: "Typically within 2 weeks of your Snapshot Call. We align on scope, I send a short proposal, and if we're ready to go the Diagnostic kicks off that week.",
  },
]

export default function ResultsAboutTestimonialsPage() {
  return (
    <>
      {/* ── About Gary ── */}
      <section id="about" className="zone-light border-b-[3px] border-ink">
        {/* Section header */}
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
              <div className="relative w-full max-w-sm mx-auto md:mx-0 aspect-[4/5] overflow-hidden border-[3px] border-ink" style={{ boxShadow: '8px 8px 0 #D90000' }}>
                <Image
                  src="/gary-headshot.jpg"
                  alt="Gary Quigley — Fractional AI Consultant, PEAK13 Consulting"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
                {/* Yellow corner stamp */}
                <div className="absolute bottom-0 left-0 bg-yellow border-t-[3px] border-r-[3px] border-ink px-4 py-3">
                  <p className="font-heading text-ink text-xl leading-none tracking-wide">GARY QUIGLEY</p>
                  <p className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-ink/60">Fractional AI Advisor</p>
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
                  8 YEARS BUILDING SYSTEMS THAT ACTUALLY WORK.
                </h3>
              </BlurFade>
              <BlurFade delay={0.25}>
                <div className="space-y-4 font-body text-muted text-base leading-relaxed">
                  <p>
                    I spent 8 years inside enterprise IT and operational transformation — at the
                    Maritime &amp; Coastguard Agency, Control Risks, and several high-growth
                    businesses — designing the systems, processes, and governance frameworks
                    that made complex organisations run better.
                  </p>
                  <p>
                    I founded PEAK13 Consulting because I kept seeing the same pattern: smart
                    business owners getting sold AI they didn&apos;t need, by people who&apos;d
                    never actually implemented it. I do things differently — diagnose first,
                    recommend second, build only what makes measurable sense.
                  </p>
                  <p>
                    I&apos;m a systems thinker with a coaching background. I believe most operational
                    problems are people and process problems wearing a technology mask.
                  </p>
                  <p className="font-sub font-semibold text-xs tracking-[0.14em] uppercase text-muted/60">
                    Based in Dubai. Work across the UAE and UK. Remote and in-person.
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
      <section id="testimonials" className="zone-dark border-b-[3px] border-ink">
        {/* Section header */}
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
              <div className={`p-8 md:p-10 flex flex-col h-full border-r-[2px] border-dark-b last:border-r-0 relative`}>
                {/* Quote mark */}
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
        {/* Section header */}
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
                  Anything else? Book a free Snapshot Call and ask me directly.
                </p>
              </BlurFade>
              <BlurFade delay={0.15}>
                <a href="#contact" className="btn-primary">
                  Book a Snapshot Call →
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
                <span className="block">FIND OUT</span>
                <span className="block bg-yellow text-ink px-4 inline-block">WHAT IT&apos;S</span>
                <span className="block text-accent">COSTING</span>
                <span className="block" style={{ WebkitTextStroke: '3px rgba(255,255,255,0.3)', color: 'transparent' }}>YOU.</span>
              </h2>
            </BlurFade>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mt-14 pt-10 border-t-[2px] border-dark-b">
            <BlurFade delay={0.3}>
              <p className="font-body text-dark-m text-lg leading-relaxed mb-8">
                Book a free 30-minute Snapshot Call. No pitch, no jargon — just an honest conversation
                about where AI can create real value in your accountancy firm or property management business.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://calendly.com/quigleygary/signal-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red"
                >
                  Book a Free Snapshot Call →
                </a>
                <a href="mailto:quigleygary@hotmail.com" className="btn-ghost-dark">
                  Send an Email
                </a>
              </div>
              <div className="guarantee-badge" style={{ borderColor: 'rgba(255,255,255,0.15)', color: '#FFD600' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                5× ROI Guarantee — if we don&apos;t find it, you don&apos;t pay.
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
            <p className="font-heading text-xl text-yellow tracking-wide">PEAK13</p>
            <p className="font-sub font-semibold text-xs tracking-[0.1em] uppercase text-white/20">
              © {new Date().getFullYear()} Gary Quigley · PEAK13 Consulting · All rights reserved
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
