'use client'

// Repurposed as CredibilityBar — logos + key metrics
const orgs = [
  'Control Risks',
  'Maritime & Coastguard Agency',
  'Argenis Advisory',
  'PEAK13 Consulting',
  'Griffon Hoverwork',
  'No Human Is Useless',
]

const metrics = [
  { value: '95%', label: 'First-call resolution rate' },
  { value: '50%', label: 'Reduction in phishing incidents' },
  { value: '40%', label: 'Cross-programme alignment improvement' },
  { value: '£127K+', label: 'Documented client value created' },
]

export default function CredibilityBar() {
  return (
    <section className="section-pad py-14 bg-surface border-b border-border">
      <div className="container-lg">
        {/* Org logos row */}
        <p className="text-xs text-muted/60 uppercase tracking-widest font-body mb-6 reveal">
          Organisations Gary has transformed
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-14 reveal reveal-delay-1">
          {orgs.map((org) => (
            <span key={org} className="text-sm font-heading font-semibold text-muted/70 border border-border rounded-full px-4 py-1.5">
              {org}
            </span>
          ))}
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={m.label} className={`reveal reveal-delay-${i + 1}`}>
              <p className="font-heading font-extrabold text-4xl text-accent mb-1">{m.value}</p>
              <p className="text-sm text-muted font-body leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
