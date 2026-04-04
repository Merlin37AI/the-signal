import Image from 'next/image'
import Nav from '@/components/ui/Nav'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Current Clients — Gary Does Strategy',
  description: 'Gary Quigley currently advises The Argenis Advisory and Upgraded Landscaping as a fractional AI advisor embedded inside their operations.',
}

const clients = [
  {
    num: '01',
    name: 'The Argenis Advisory',
    url: 'https://argenisadvisory.com',
    tagline: 'Business-First AI Consultancy for Modern Leaders',
    location: 'London & Dubai',
    sector: 'AI Consultancy',
    gary_role: 'AI Operations Lead',
    gary_role_detail:
      'Gary works inside the delivery team at Argenis, overseeing the operational implementation of AI strategies developed by the advisory\'s founders. He brings an operations-first lens to client engagements — translating high-level AI strategy into processes, systems, and workflows that businesses can actually execute.',
    about:
      'The Argenis Advisory is a senior AI consultancy built for C-suite decision-makers. Founded by Sailesh Jani — a former McCann Worldgroup and WPP leader with $20M+ in global revenue and 40+ Cannes Lions — the firm combines deep brand, business, and technology expertise to help organisations deploy AI with clarity, confidence, and measurable commercial impact.',
    notable_clients: ['Microsoft', 'Xbox', 'eBay', 'NEOM', 'Riyadh Air', 'Hugo Boss', 'M&C Saatchi', 'VCCP'],
    focus_areas: [
      { area: 'Process Automation', detail: 'Identifying and mapping high-friction workflows across client operations for AI-led resolution.' },
      { area: 'Implementation Oversight', detail: 'Managing the build and deployment of AI solutions from workflow automation to knowledge management.' },
      { area: 'Client Operations', detail: 'Structuring reporting, onboarding, and communication systems to reduce manual overhead at scale.' },
      { area: 'Knowledge Management', detail: 'AI-assisted knowledge frameworks that capture and surface institutional knowledge across organisations.' },
      { area: 'Tool & Vendor Evaluation', detail: 'Independent assessment of AI platforms, tools, and vendors against client-specific requirements.' },
      { area: 'Change Management', detail: 'Guiding teams through the operational and cultural changes required for successful AI adoption.' },
    ],
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Executive boardroom — The Argenis Advisory, business-first AI consultancy',
    contact: 'info@argenisadvisory.com',
    phone: '+971 58 508 6440',
    dark: false,
  },
  {
    num: '02',
    name: 'Upgraded Landscaping',
    url: 'https://upgradedlandscaping.ae',
    tagline: 'European Standards for Dubai\'s Premium Villas',
    location: 'Dubai, UAE',
    sector: 'Premium Landscaping · Property Services',
    gary_role: 'Fractional AI Advisor',
    gary_role_detail:
      'Gary advises Upgraded Landscaping on how AI and automation can strengthen the operational backbone of a high-growth service business. The focus is practical — reducing manual overhead in customer communications, job coordination, and reporting, without compromising the premium client experience the business has built its reputation on.',
    about:
      'Upgraded Landscaping delivers premium villa landscaping and garden maintenance across Dubai\'s most prestigious residential communities. Combining European craftsmanship standards with deep local expertise, the business serves private villa owners across Dubai Hills Estate, Arabian Ranches, Emirates Hills, Palm Jumeirah, Jumeirah Islands, and Jumeirah Golf Estates.',
    notable_clients: [],
    service_areas: ['Dubai Hills Estate', 'Arabian Ranches', 'Emirates Hills', 'Palm Jumeirah', 'Jumeirah Islands', 'Jumeirah Golf Estates'],
    focus_areas: [
      { area: 'Customer Communication', detail: 'Automating client updates, quote follow-ups, and project status notifications to reduce manual touchpoints.' },
      { area: 'Job & Project Orchestration', detail: 'AI-assisted task assignment, crew scheduling, and project milestone tracking across active sites.' },
      { area: 'Reporting & Visibility', detail: 'Dashboards surfacing job status, team performance, and client satisfaction data in real time.' },
      { area: 'Site & Asset Operations', detail: 'Managing site documentation, maintenance records, and compliance requirements across multiple locations.' },
      { area: 'Quote & Proposal Workflow', detail: 'Streamlining the quoting process from initial enquiry to signed proposal with AI-assisted drafting.' },
      { area: 'Supplier Coordination', detail: 'Automating supplier communications, order tracking, and procurement workflows across projects.' },
    ],
    image: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Luxury villa outdoor terrace — Upgraded Landscaping, premium Dubai landscaping',
    contact: 'info@upgradedlandscaping.ae',
    phone: '+971 52 349 2222',
    dark: true,
  },
]

export default function ClientsPage() {
  return (
    <>
      <Nav />
      <SectionLabel />
      <main className="pt-[110px] bg-bg min-h-screen">

        {/* Page header — matches homepage section headers */}
        <div className="bg-ink border-b-[3px] border-ink">
          <div className="px-6 md:px-12 lg:px-20">
            <div className="section-header-bar border-ink/20">
              <span className="section-num-tag section-num-tag-inv">04</span>
              <h1 className="font-heading text-2xl md:text-3xl tracking-wide text-white leading-none">
                CURRENT CLIENT WORK
              </h1>
            </div>
          </div>
          <div className="px-6 md:px-12 lg:px-20 pt-12 pb-14">
            <h2
              className="font-heading text-white leading-[0.92] tracking-wide mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              <span className="block">EMBEDDED.</span>
              <span className="block" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.25)', color: 'transparent' }}>INSIDE.</span>
              <span className="block text-yellow">BOTH.</span>
            </h2>
            <p className="font-body text-white/50 text-lg leading-relaxed max-w-2xl">
              Gary takes a small number of engagements at any one time to maintain the quality and depth
              of advisory work. These are the two businesses he currently works inside.
            </p>
          </div>
        </div>

        {/* Client profiles */}
        {clients.map((client) => (
          <article key={client.name} id={client.name.toLowerCase().replace(/\s+/g, '-')} className={`border-b-[3px] border-ink ${client.dark ? 'zone-dark' : 'zone-light'}`}>

            {/* Section header bar */}
            <div className="px-6 md:px-12 lg:px-20">
              <div className={`section-header-bar ${client.dark ? 'border-white/15' : ''}`}>
                <span className={`section-num-tag ${client.dark ? 'section-num-tag-inv' : ''}`}>{client.num}</span>
                <h2 className={`font-heading text-2xl md:text-3xl tracking-wide leading-none ${client.dark ? 'text-white' : 'text-ink'}`}>
                  {client.name.toUpperCase()}
                </h2>
                <div className="ml-auto flex items-center gap-3">
                  <span className={`font-sub font-700 text-xs tracking-[0.15em] uppercase px-3 py-1.5 border-[2px] ${
                    client.dark ? 'border-white/20 text-white/50' : 'border-ink/30 text-muted'
                  }`}>
                    {client.sector}
                  </span>
                  <span className={`font-sub font-semibold text-xs tracking-[0.1em] uppercase hidden md:block ${
                    client.dark ? 'text-white/30' : 'text-muted'
                  }`}>
                    {client.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Image + role stamp */}
            <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden border-b-[3px] border-ink">
              <Image
                src={client.image}
                alt={client.imageAlt}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

              {/* Tagline overlay */}
              <div className="absolute bottom-6 left-6 md:left-12 lg:left-20">
                <p className={`font-sub font-semibold text-sm tracking-[0.1em] uppercase text-white/50 mb-1`}>
                  {client.tagline}
                </p>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-white/30 hover:text-yellow transition-colors border-b border-white/20 pb-0.5"
                >
                  {client.url.replace('https://', '')} →
                </a>
              </div>

              {/* Gary's role stamp */}
              <div
                className="absolute top-6 right-6 md:top-6 md:right-12 lg:right-20 bg-yellow border-[3px] border-ink px-4 py-3"
                style={{ boxShadow: '4px 4px 0 #0F0F0F' }}
              >
                <p className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-ink/60 mb-0.5">Gary&apos;s role</p>
                <p className="font-heading text-ink text-xl leading-none tracking-wide">{client.gary_role.toUpperCase()}</p>
              </div>
            </div>

            {/* Content grid */}
            <div className="px-6 md:px-12 lg:px-20 py-14 md:py-20">
              <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-20 mb-14">
                {/* About + Gary's contribution */}
                <div>
                  <p className={`font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase mb-3 ${client.dark ? 'text-white/30' : 'text-muted/60'}`}>
                    About
                  </p>
                  <p className={`font-body text-lg leading-relaxed mb-8 ${client.dark ? 'text-white/60' : 'text-muted'}`}>
                    {client.about}
                  </p>
                  <div className="border-l-[4px] border-accent pl-6">
                    <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-3">
                      Gary&apos;s contribution
                    </p>
                    <p className={`font-body text-base leading-relaxed ${client.dark ? 'text-white/55' : 'text-muted'}`}>
                      {client.gary_role_detail}
                    </p>
                  </div>
                </div>

                {/* Meta sidebar */}
                <div className="space-y-5">
                  {/* Contact card */}
                  <div className={`border-[2px] p-6 ${client.dark ? 'border-white/15' : 'border-ink'}`} style={!client.dark ? { boxShadow: '4px 4px 0 #D90000' } : {}}>
                    <p className={`font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase mb-4 ${client.dark ? 'text-white/30' : 'text-muted/60'}`}>
                      Contact
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className={`font-sub font-700 text-[0.55rem] tracking-[0.14em] uppercase mb-0.5 ${client.dark ? 'text-white/25' : 'text-muted/40'}`}>Website</p>
                        <a href={client.url} target="_blank" rel="noopener noreferrer"
                          className={`font-body text-sm hover:text-accent transition-colors ${client.dark ? 'text-white/70' : 'text-ink'}`}>
                          {client.url.replace('https://', '')}
                        </a>
                      </div>
                      <div>
                        <p className={`font-sub font-700 text-[0.55rem] tracking-[0.14em] uppercase mb-0.5 ${client.dark ? 'text-white/25' : 'text-muted/40'}`}>Email</p>
                        <a href={`mailto:${client.contact}`}
                          className={`font-body text-sm hover:text-accent transition-colors ${client.dark ? 'text-white/70' : 'text-ink'}`}>
                          {client.contact}
                        </a>
                      </div>
                      <div>
                        <p className={`font-sub font-700 text-[0.55rem] tracking-[0.14em] uppercase mb-0.5 ${client.dark ? 'text-white/25' : 'text-muted/40'}`}>Phone</p>
                        <p className={`font-body text-sm ${client.dark ? 'text-white/70' : 'text-ink'}`}>{client.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Notable clients */}
                  {client.notable_clients && client.notable_clients.length > 0 && (
                    <div className={`border-[2px] p-6 ${client.dark ? 'border-white/15' : 'border-ink'}`}>
                      <p className={`font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase mb-4 ${client.dark ? 'text-white/30' : 'text-muted/60'}`}>
                        Notable Client Work
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {client.notable_clients.map((nc) => (
                          <span key={nc} className={`font-sub font-semibold text-xs tracking-[0.08em] uppercase px-2.5 py-1 border ${
                            client.dark ? 'border-white/15 text-white/50' : 'border-ink/20 text-muted'
                          }`}>
                            {nc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Service areas */}
                  {'service_areas' in client && client.service_areas && (
                    <div className={`border-[2px] p-6 ${client.dark ? 'border-white/15' : 'border-ink'}`}>
                      <p className={`font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase mb-4 ${client.dark ? 'text-white/30' : 'text-muted/60'}`}>
                        Service Areas
                      </p>
                      <div className="space-y-1.5">
                        {client.service_areas.map((area) => (
                          <div key={area} className="flex items-center gap-2">
                            <span className="text-accent text-xs font-bold shrink-0">→</span>
                            <span className={`font-sub font-semibold text-xs tracking-[0.06em] uppercase ${client.dark ? 'text-white/50' : 'text-muted'}`}>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Focus areas grid */}
              <div>
                <p className={`font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase mb-5 ${client.dark ? 'text-white/30' : 'text-muted/60'}`}>
                  Where Gary focuses
                </p>
                <div className={`grid md:grid-cols-3 border-[2px] ${client.dark ? 'border-white/15' : 'border-ink'}`}>
                  {client.focus_areas.map((f, fi) => (
                    <div
                      key={f.area}
                      className={`p-6 border-b-[2px] border-r-[2px] ${client.dark ? 'border-white/10' : 'border-ink'} ${
                        fi >= 3 ? 'md:border-b-0' : ''
                      } ${(fi + 1) % 3 === 0 ? 'border-r-0' : ''}`}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-accent font-bold text-base shrink-0 mt-0.5">→</span>
                        <p className={`font-sub font-700 text-sm uppercase tracking-wide leading-snug ${client.dark ? 'text-white' : 'text-ink'}`}>
                          {f.area}
                        </p>
                      </div>
                      <p className={`font-body text-xs leading-relaxed pl-6 ${client.dark ? 'text-white/45' : 'text-muted'}`}>{f.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Bottom CTA — matches homepage zone-dark CTA */}
        <section className="zone-dark noise-overlay border-t-[3px] border-accent">
          <div className="px-6 md:px-12 lg:px-20 py-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
              <div>
                <p className="font-sub font-700 text-xs tracking-[0.22em] uppercase text-accent mb-4">
                  New engagements
                </p>
                <h2
                  className="font-heading text-white leading-[0.95] tracking-wide mb-4"
                  style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                >
                  TAKING ON A LIMITED NUMBER<br className="hidden md:block" /> OF NEW CLIENTS.
                </h2>
                <p className="font-body text-white/40 text-base leading-relaxed max-w-lg">
                  Gary works with a small number of businesses at any one time to maintain the depth
                  and quality of advisory work. Book an intro call to discuss whether it&apos;s the right fit.
                </p>
              </div>
              <div className="flex flex-col gap-4 shrink-0">
                <a
                  href="https://calendly.com/quigleygary/signal-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red whitespace-nowrap"
                >
                  Book an Intro Call →
                </a>
                <Link href="/" className="btn-ghost-dark whitespace-nowrap text-center">
                  ← Back to Site
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t-[2px] border-white/10">
              {/* Social bar */}
              <div className="flex flex-wrap mb-6 gap-0">
                <a href="https://www.linkedin.com/in/gary-quigley" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 border-[2px] border-white/10 px-5 py-3 font-sub font-700 text-[0.6rem] tracking-[0.14em] uppercase text-white/40 hover:text-white hover:border-yellow hover:bg-yellow/10 transition-all duration-150">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/garydoesstrategy/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 border-[2px] border-l-0 border-white/10 px-5 py-3 font-sub font-700 text-[0.6rem] tracking-[0.14em] uppercase text-white/40 hover:text-white hover:border-yellow hover:bg-yellow/10 transition-all duration-150">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Instagram
                </a>
                <a href="https://www.facebook.com/garydoesstrategy/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 border-[2px] border-l-0 border-white/10 px-5 py-3 font-sub font-700 text-[0.6rem] tracking-[0.14em] uppercase text-white/40 hover:text-white hover:border-yellow hover:bg-yellow/10 transition-all duration-150">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Facebook
                </a>
                <a href="mailto:gary@garydoesstrategy.com"
                  className="flex items-center gap-2.5 border-[2px] border-l-0 border-white/10 px-5 py-3 font-sub font-700 text-[0.6rem] tracking-[0.14em] uppercase text-white/40 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-150">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Email
                </a>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <span className="font-heading text-white/20 leading-none" style={{ fontSize: '1.4rem', letterSpacing: '0.04em' }}>GDS</span>
                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                  <div className="flex gap-4">
                    <Link href="/privacy" className="font-sub font-700 text-[0.55rem] tracking-[0.14em] uppercase text-white/20 hover:text-white/50 transition-colors">Privacy Policy</Link>
                    <Link href="/cookies" className="font-sub font-700 text-[0.55rem] tracking-[0.14em] uppercase text-white/20 hover:text-white/50 transition-colors">Cookie Policy</Link>
                    <Link href="/terms" className="font-sub font-700 text-[0.55rem] tracking-[0.14em] uppercase text-white/20 hover:text-white/50 transition-colors">Terms</Link>
                  </div>
                  <p className="font-sub font-semibold text-[0.55rem] tracking-[0.1em] uppercase text-white/15">
                    © {new Date().getFullYear()} Gary Quigley · Gary Does Strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
