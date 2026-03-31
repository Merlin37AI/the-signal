'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/ui/animations/blur-fade'
import { MagicCard } from '@/components/ui/animations/magic-card'
import { TextAnimate } from '@/components/ui/animations/text-animate'

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
      <section id="about" className="zone-surface section-pad border-b border-border">
        <div className="container-lg">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <BlurFade delay={0.1} className="order-2 md:order-1">
              <div className="relative w-full max-w-sm mx-auto md:mx-0 aspect-[4/5] rounded-2xl overflow-hidden bg-border">
                <Image
                  src="/gary-headshot.jpg"
                  alt="Gary Quigley — Fractional AI Consultant, PEAK13 Consulting"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>
            </BlurFade>

            {/* Bio */}
            <div className="order-1 md:order-2">
              <BlurFade delay={0.05}>
                <p className="eyebrow eyebrow-light mb-5">About Gary</p>
              </BlurFade>
              <BlurFade delay={0.15}>
                <h2
                  className="font-heading font-extrabold text-ink leading-[1.05] mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
                >
                  8 years building systems
                  <br />
                  that actually work.
                </h2>
              </BlurFade>
              <BlurFade delay={0.25}>
                <div className="space-y-4 text-muted text-base leading-relaxed font-body">
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
                    problems are people and process problems wearing a technology mask — and I
                    bring that lens to every engagement.
                  </p>
                  <p>Based in Dubai. Work across the UAE and UK. Remote and in-person.</p>
                </div>
              </BlurFade>

              {/* Certs */}
              <BlurFade delay={0.35}>
                <div className="mt-8">
                  <p className="text-xs text-muted/60 uppercase tracking-widest font-body mb-3">Credentials</p>
                  <div className="flex flex-wrap gap-2">
                    {['ITIL 4 Foundation', 'Six Sigma Green Belt', 'AI in Business — UPenn', 'Micro MBA Cum Laude', 'CompTIA Security+', 'CPD Business Strategist'].map((c) => (
                      <span key={c} className="text-xs font-body font-medium text-muted border border-border rounded-full px-3 py-1.5">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={0.45}>
                <div className="mt-8 flex flex-wrap gap-4">
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
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="zone-dark section-pad border-b border-dark-b">
        <div className="container-lg">
          <div className="mb-14">
            <BlurFade delay={0.05}>
              <p className="eyebrow eyebrow-dark mb-5">Testimonials</p>
            </BlurFade>
            <BlurFade delay={0.15}>
              <h2
                className="font-heading font-extrabold text-white leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                What clients say.
              </h2>
            </BlurFade>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.15} className="flex flex-col">
                <div className="relative card-dark flex flex-col h-full group/magic">
                  <MagicCard
                    className="absolute inset-0 rounded-[inherit]"
                    gradientColor="#1e1e1e"
                    gradientOpacity={0.75}
                    gradientSize={180}
                  />
                  <div className="relative z-10 flex flex-col flex-1">
                    <p className="text-4xl text-accent font-heading leading-none mb-4 select-none">&ldquo;</p>
                    <p className="text-white/70 text-base leading-relaxed font-body flex-1 mb-6">{t.quote}</p>
                    <div className="border-t border-dark-b pt-4">
                      <p className="font-heading font-bold text-white text-sm">{t.name}</p>
                      <p className="text-dark-m text-xs font-body mt-0.5">{t.company}</p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="zone-light section-pad border-b border-border">
        <div className="container-lg">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            <div>
              <BlurFade delay={0.05}>
                <p className="eyebrow eyebrow-light mb-5">FAQ</p>
              </BlurFade>
              <BlurFade delay={0.15}>
                <h2
                  className="font-heading font-extrabold text-ink leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
                >
                  Common questions.
                </h2>
              </BlurFade>
              <BlurFade delay={0.25}>
                <p className="text-muted text-base mt-4 font-body leading-relaxed">
                  Anything else? Book a free Snapshot Call and ask me directly.
                </p>
              </BlurFade>
              <BlurFade delay={0.35}>
                <a href="#contact" className="btn-primary mt-8 inline-flex">
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
      <section id="contact" className="zone-dark noise-overlay section-pad">
        <div className="container-md text-center">
          <BlurFade delay={0.05}>
            <p className="eyebrow eyebrow-dark mb-6">Ready to start?</p>
          </BlurFade>

          <div className="mb-6">
            <TextAnimate
              as="h2"
              by="word"
              animation="blurInUp"
              delay={0.1}
              duration={0.55}
              className="font-heading font-extrabold text-white leading-[1.0] block"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' } as React.CSSProperties}
            >
              Find out what
            </TextAnimate>
            <TextAnimate
              as="h2"
              by="word"
              animation="blurInUp"
              delay={0.3}
              duration={0.55}
              className="font-heading font-extrabold text-accent leading-[1.0] block"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' } as React.CSSProperties}
            >
              your operations are costing you.
            </TextAnimate>
          </div>

          <BlurFade delay={0.5}>
            <p className="text-dark-m text-lg font-body max-w-lg mx-auto mb-10 leading-relaxed">
              Book a free 30-minute Snapshot Call. No pitch, no jargon — just an honest conversation
              about where AI can create real value in your accountancy firm or property management business.
            </p>
          </BlurFade>

          <BlurFade delay={0.6} className="mb-14">
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://calendly.com/quigleygary/signal-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-10 py-4"
              >
                Book a Free Snapshot Call →
              </a>
              <a href="mailto:quigleygary@hotmail.com" className="btn-ghost-dark text-base px-10 py-4">
                Send an Email
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.7} className="mb-14">
            <div className="guarantee-badge inline-flex">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              5× ROI Guarantee — if we don&apos;t identify at least 5× your investment in savings, you don&apos;t pay.
            </div>
          </BlurFade>

          <BlurFade delay={0.75}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/30 font-body">
              <a href="https://www.linkedin.com/in/gary-quigley" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">LinkedIn</a>
              <span>·</span>
              <a href="mailto:quigleygary@hotmail.com" className="hover:text-white/70 transition-colors">quigleygary@hotmail.com</a>
              <span>·</span>
              <span>Dubai, UAE &amp; UK</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.85}>
            <div className="mt-20 pt-8 border-t border-white/10">
              <p className="text-xs text-white/20 font-body">
                PEAK13 Consulting · © {new Date().getFullYear()} Gary Quigley · All rights reserved
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-border py-5 last:border-0">
      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-heading font-bold text-ink text-base leading-snug hover:text-accent transition-colors duration-150">
        {q}
        <span className="shrink-0 w-5 h-5 rounded-full border border-border flex items-center justify-center text-muted text-xs mt-0.5 group-open:rotate-45 transition-transform duration-200">
          +
        </span>
      </summary>
      <p className="text-muted text-sm leading-relaxed font-body mt-3 pr-8">{a}</p>
    </details>
  )
}
