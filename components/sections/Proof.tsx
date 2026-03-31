'use client'

// Repurposed as Comparison table
const rows = [
  {
    label: 'Annual cost',
    fractional: 'From £2,500/mo',
    fulltime: '£120K–£250K salary + benefits',
    diy: 'Unpredictable (tool costs + time)',
  },
  {
    label: 'Time to value',
    fractional: '2–4 weeks',
    fulltime: '3–6 months to hire & onboard',
    diy: 'Months of trial and error',
  },
  {
    label: 'Depth of expertise',
    fractional: 'Enterprise-proven, hands-on',
    fulltime: 'High — but costly for early stage',
    diy: 'Limited to internal knowledge',
  },
  {
    label: 'Flexibility',
    fractional: 'Scale up or down monthly',
    fulltime: 'Fixed commitment',
    diy: 'Fully flexible but no accountability',
  },
  {
    label: 'Execution',
    fractional: 'Strategy + hands-on builds',
    fulltime: 'Strategy only (usually)',
    diy: 'Depends on team capacity',
  },
  {
    label: 'Risk',
    fractional: 'Low — no long-term commitment',
    fulltime: 'High — wrong hire is expensive',
    diy: 'Medium — opportunity cost is real',
  },
]

export default function Comparison() {
  return (
    <section id="comparison" className="section-pad bg-surface border-b border-border">
      <div className="container-lg">
        <div className="mb-12">
          <p className="eyebrow mb-4 reveal">The Case for Fractional</p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-ink max-w-2xl reveal reveal-delay-1">
            Senior AI expertise,
            <br />
            without the senior AI salary.
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto reveal reveal-delay-2">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-6 font-body text-xs uppercase tracking-widest text-muted/60 w-[22%]" />
                <th className="text-left py-4 pr-6 font-heading font-bold text-base text-ink w-[26%]">
                  <span className="text-accent">✦</span> Fractional AI Advisor
                </th>
                <th className="text-left py-4 pr-6 font-heading font-bold text-base text-muted w-[26%]">
                  Full-Time AI Director
                </th>
                <th className="text-left py-4 font-heading font-bold text-base text-muted w-[26%]">
                  DIY / Internal
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="py-4 pr-6 font-body text-sm font-semibold text-muted">{row.label}</td>
                  <td className="py-4 pr-6 font-body text-sm text-ink font-semibold">{row.fractional}</td>
                  <td className="py-4 pr-6 font-body text-sm text-muted">{row.fulltime}</td>
                  <td className="py-4 font-body text-sm text-muted">{row.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 reveal">
          <a href="#contact" className="btn-accent">
            Book a Free Call — No Commitment →
          </a>
        </div>
      </div>
    </section>
  )
}
