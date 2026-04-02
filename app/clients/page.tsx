import Image from 'next/image'
import Nav from '@/components/ui/Nav'

const clients = [
  {
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
      {
        area: 'Process Automation',
        detail: 'Identifying and mapping high-friction workflows across client operations for AI-led resolution.',
      },
      {
        area: 'Implementation Oversight',
        detail: 'Managing the build and deployment of AI solutions from workflow automation to knowledge management.',
      },
      {
        area: 'Client Operations',
        detail: 'Structuring reporting, onboarding, and communication systems to reduce manual overhead at scale.',
      },
      {
        area: 'Knowledge Management',
        detail: 'AI-assisted knowledge frameworks that capture and surface institutional knowledge across organisations.',
      },
      {
        area: 'Tool & Vendor Evaluation',
        detail: 'Independent assessment of AI platforms, tools, and vendors against client-specific requirements.',
      },
      {
        area: 'Change Management',
        detail: 'Guiding teams through the operational and cultural changes required for successful AI adoption.',
      },
    ],
    image: '/argenis-screenshot.jpg',
    imageAlt: 'The Argenis Advisory website — business-first AI consultancy',
    contact: 'info@argenisadvisory.com',
    phone: '+971 58 508 6440',
  },
  {
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
    services: ['Complete Landscaping', 'Garden Maintenance', 'Tree Surgery', 'Irrigation Systems', 'Lawn Care', 'Garden Lighting', 'Hardscaping', 'Outdoor Living Areas'],
    focus_areas: [
      {
        area: 'Customer Communication',
        detail: 'Automating client updates, quote follow-ups, and project status notifications to reduce manual touchpoints.',
      },
      {
        area: 'Job & Project Orchestration',
        detail: 'AI-assisted task assignment, crew scheduling, and project milestone tracking across active sites.',
      },
      {
        area: 'Reporting & Visibility',
        detail: 'Dashboards surfacing job status, team performance, and client satisfaction data in real time.',
      },
      {
        area: 'Site & Asset Operations',
        detail: 'Managing site documentation, maintenance records, and compliance requirements across multiple locations.',
      },
      {
        area: 'Quote & Proposal Workflow',
        detail: 'Streamlining the quoting process from initial enquiry to signed proposal with AI-assisted drafting.',
      },
      {
        area: 'Supplier Coordination',
        detail: 'Automating supplier communications, order tracking, and procurement workflows across projects.',
      },
    ],
    image: '/upgraded-screenshot.jpg',
    imageAlt: 'Upgraded Landscaping website — premium villa landscaping in Dubai',
    contact: 'info@upgradedlandscaping.ae',
    phone: '+971 52 349 2222',
  },
]

export default function ClientsPage() {
  return (
    <>
      <Nav />
      <main className="pt-[88px]">
        {/* Page header */}
        <div className="bg-ink border-b-[3px] border-ink px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <p className="font-sub font-700 text-xs tracking-[0.22em] uppercase text-accent mb-6">
            PEAK13 Consulting · Current Engagements
          </p>
          <h1
            className="font-heading text-white leading-[0.92] tracking-wide mb-8"
            style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
          >
            <span className="block">CURRENT</span>
            <span className="block" style={{ WebkitTextStroke: '3px rgba(255,255,255,0.3)', color: 'transparent' }}>CLIENTS.</span>
          </h1>
          <p className="font-body text-dark-m text-lg leading-relaxed max-w-2xl">
            Gary takes a small number of engagements at any one time to maintain the quality and depth
            of advisory work. These are the two businesses he currently works inside.
          </p>
        </div>

        {/* Client profiles */}
        {clients.map((client, ci) => (
          <article key={client.name} className={`border-b-[3px] border-ink ${ci % 2 === 0 ? 'bg-bg' : 'bg-surface'}`}>
            {/* Hero image */}
            <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden border-b-[3px] border-ink">
              <Image
                src={client.image}
                alt={client.imageAlt}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-end px-6 md:px-12 lg:px-20 pb-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-sub font-700 text-xs tracking-[0.2em] uppercase text-white bg-accent border-[2px] border-accent px-3 py-1.5">
                      {client.sector}
                    </span>
                    <span className="font-sub font-semibold text-xs tracking-[0.1em] uppercase text-white/60 border border-white/20 px-3 py-1.5">
                      {client.location}
                    </span>
                  </div>
                  <h2
                    className="font-heading text-white leading-[0.95] tracking-wide mb-2"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
                  >
                    {client.name.toUpperCase()}
                  </h2>
                  <p className="font-sub font-semibold text-sm tracking-[0.1em] uppercase text-white/50">
                    {client.tagline}
                  </p>
                </div>
              </div>

              {/* Gary's role stamp */}
              <div
                className="absolute top-6 right-6 md:top-8 md:right-8 bg-yellow border-[3px] border-ink px-4 py-3"
                style={{ boxShadow: '4px 4px 0 #0F0F0F' }}
              >
                <p className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-ink/60 mb-0.5">Gary&apos;s role</p>
                <p className="font-heading text-ink text-xl leading-none tracking-wide">{client.gary_role.toUpperCase()}</p>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 md:px-12 lg:px-20 py-14 md:py-20">
              <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-20 mb-16">
                {/* About */}
                <div>
                  <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-muted/60 mb-4">
                    About
                  </p>
                  <p className="font-body text-muted text-lg leading-relaxed mb-8">
                    {client.about}
                  </p>

                  {/* Gary's role detail */}
                  <div className="border-l-[4px] border-accent pl-6">
                    <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-3">
                      Gary&apos;s contribution
                    </p>
                    <p className="font-body text-muted text-base leading-relaxed">
                      {client.gary_role_detail}
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <div className="space-y-6">
                  {/* Contact */}
                  <div className="border-[2px] border-ink p-6">
                    <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-muted/60 mb-4">Contact</p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-sub font-700 text-[0.55rem] tracking-[0.14em] uppercase text-muted/40 mb-0.5">Website</p>
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-ink hover:text-accent transition-colors text-sm"
                        >
                          {client.url.replace('https://', '')}
                        </a>
                      </div>
                      <div>
                        <p className="font-sub font-700 text-[0.55rem] tracking-[0.14em] uppercase text-muted/40 mb-0.5">Email</p>
                        <a
                          href={`mailto:${client.contact}`}
                          className="font-body text-ink hover:text-accent transition-colors text-sm"
                        >
                          {client.contact}
                        </a>
                      </div>
                      <div>
                        <p className="font-sub font-700 text-[0.55rem] tracking-[0.14em] uppercase text-muted/40 mb-0.5">Phone</p>
                        <p className="font-body text-ink text-sm">{client.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Notable clients or service areas */}
                  {client.notable_clients && client.notable_clients.length > 0 && (
                    <div className="border-[2px] border-ink p-6">
                      <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-muted/60 mb-4">
                        Notable Client Work
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {client.notable_clients.map((nc) => (
                          <span key={nc} className="font-sub font-semibold text-xs tracking-[0.08em] uppercase text-muted border border-ink/20 px-2.5 py-1">
                            {nc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {'service_areas' in client && client.service_areas && (
                    <div className="border-[2px] border-ink p-6">
                      <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-muted/60 mb-4">
                        Service Areas
                      </p>
                      <div className="space-y-1.5">
                        {client.service_areas.map((area) => (
                          <div key={area} className="flex items-center gap-2">
                            <span className="text-accent text-xs font-bold shrink-0">→</span>
                            <span className="font-sub font-semibold text-xs tracking-[0.06em] uppercase text-muted">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Focus areas grid */}
              <div>
                <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-muted/60 mb-6">
                  Where Gary focuses
                </p>
                <div className="grid md:grid-cols-3 border-[2px] border-ink">
                  {client.focus_areas.map((f, fi) => (
                    <div
                      key={f.area}
                      className={`p-6 border-b-[2px] border-r-[2px] border-ink ${
                        fi >= client.focus_areas.length - (client.focus_areas.length % 3 || 3)
                          ? 'md:border-b-0'
                          : ''
                      } ${(fi + 1) % 3 === 0 ? 'border-r-0' : ''}`}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-accent font-bold text-base shrink-0 mt-0.5">→</span>
                        <p className="font-sub font-700 text-ink text-sm uppercase tracking-wide leading-snug">
                          {f.area}
                        </p>
                      </div>
                      <p className="font-body text-muted text-xs leading-relaxed pl-6">{f.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Bottom CTA */}
        <section className="zone-dark border-t-[3px] border-accent px-6 md:px-12 lg:px-20 py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="font-sub font-700 text-xs tracking-[0.22em] uppercase text-accent mb-4">
                New engagements
              </p>
              <h2
                className="font-heading text-white leading-[0.95] tracking-wide mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              >
                TAKING ON A LIMITED NUMBER OF NEW CLIENTS.
              </h2>
              <p className="font-body text-dark-m text-base leading-relaxed max-w-lg">
                Gary works with a small number of businesses at any one time to maintain the depth
                and quality of advisory work. If you&apos;re interested in working together, book
                an intro call to discuss whether it&apos;s the right fit.
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
              <a href="/" className="btn-ghost-dark whitespace-nowrap text-center">
                ← Back to Site
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
