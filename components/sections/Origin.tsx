'use client'

// Credibility bar + industry intro
const orgs = ['Control Risks', 'Maritime & Coastguard Agency', 'Argenis Advisory', 'PEAK13 Consulting', 'Griffon Hoverwork']

export default function CredibilityBar() {
  return (
    <section className="zone-light section-pad-sm border-b border-border">
      <div className="container-lg">
        <p className="text-xs text-muted/50 uppercase tracking-widest font-body mb-5 reveal">
          Background built inside
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-12 reveal reveal-delay-1">
          {orgs.map((o) => (
            <span key={o} className="text-sm font-body font-medium text-muted border border-border rounded-full px-4 py-1.5">
              {o}
            </span>
          ))}
        </div>

        {/* Who this is for */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: '📊',
              industry: 'Accountancy Firms',
              sub: '5–35 partners & staff, UK & UAE',
              pains: ['Manual data entry consuming partner time', 'Tax season capacity crises every year', 'Client communication delays damaging retention', 'Compliance reporting assembled by hand'],
            },
            {
              icon: '🏢',
              industry: 'Property Management',
              sub: '10–50 staff, UK & UAE',
              pains: ['Tenant enquiries handled manually across email and phone', 'Maintenance coordination via WhatsApp and spreadsheets', 'Rent collection follow-up consuming office time', 'Lease and contract processing creating bottlenecks'],
            },
          ].map((ind, i) => (
            <div key={ind.industry} className={`card-light reveal reveal-delay-${i + 1}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{ind.icon}</span>
                <div>
                  <p className="font-heading font-bold text-ink text-lg">{ind.industry}</p>
                  <p className="text-muted text-xs font-body">{ind.sub}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {ind.pains.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-muted font-body">
                    <span className="text-accent mt-0.5 shrink-0">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
