import Logo from '@/components/ui/Logo'

export default function LogoPage() {
  return (
    <main className="min-h-screen bg-bg">

      {/* Hero */}
      <div className="px-8 md:px-16 pt-16 pb-12 border-b-[3px] border-ink">
        <p className="font-sub font-700 text-xs tracking-[0.22em] uppercase text-accent mb-6">
          GDS · Brand Mark · Offset Block
        </p>
        <h1 className="font-heading text-ink leading-none tracking-wide mb-2" style={{ fontSize: 'clamp(3rem,8vw,7rem)' }}>
          LOGO SYSTEM
        </h1>
        <p className="font-body text-muted text-base">Gary Does Strategy · All variants</p>
      </div>

      {/* ── Primary (light bg) ── */}
      <div className="px-8 md:px-16 py-16 border-b-[3px] border-ink">
        <p className="font-sub font-700 text-[0.6rem] tracking-[0.22em] uppercase text-muted/50 mb-8">01 — Primary · Light Background</p>
        <div className="flex flex-wrap items-end gap-16">
          {/* Full lockup */}
          <div className="flex flex-col gap-2">
            <Logo variant="primary" size={56} />
            <span className="font-sub text-[0.55rem] tracking-[0.15em] uppercase text-muted/40">Full lockup · 56px</span>
          </div>
          {/* Large */}
          <div className="flex flex-col gap-2">
            <Logo variant="primary" size={80} />
            <span className="font-sub text-[0.55rem] tracking-[0.15em] uppercase text-muted/40">Full lockup · 80px</span>
          </div>
          {/* Mark only */}
          <div className="flex flex-col gap-2">
            <Logo variant="primary" size={56} showWordmark={false} />
            <span className="font-sub text-[0.55rem] tracking-[0.15em] uppercase text-muted/40">Mark only · 56px</span>
          </div>
          {/* Stamp sizes */}
          <div className="flex items-end gap-6">
            {[40, 32, 24, 16].map(s => (
              <div key={s} className="flex flex-col items-center gap-2">
                <Logo variant="primary" size={s} showWordmark={false} />
                <span className="font-sub text-[0.5rem] tracking-[0.1em] uppercase text-muted/40">{s}px</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Reversed (dark bg) ── */}
      <div className="px-8 md:px-16 py-16 border-b-[3px] border-ink bg-ink">
        <p className="font-sub font-700 text-[0.6rem] tracking-[0.22em] uppercase text-white/25 mb-8">02 — Reversed · Dark Background</p>
        <div className="flex flex-wrap items-end gap-16">
          <div className="flex flex-col gap-2">
            <Logo variant="reversed" size={56} />
            <span className="font-sub text-[0.55rem] tracking-[0.15em] uppercase text-white/20">Full lockup · 56px</span>
          </div>
          <div className="flex flex-col gap-2">
            <Logo variant="reversed" size={80} />
            <span className="font-sub text-[0.55rem] tracking-[0.15em] uppercase text-white/20">Full lockup · 80px</span>
          </div>
          <div className="flex flex-col gap-2">
            <Logo variant="reversed" size={56} showWordmark={false} />
            <span className="font-sub text-[0.55rem] tracking-[0.15em] uppercase text-white/20">Mark only · 56px</span>
          </div>
        </div>
      </div>

      {/* ── Mono ── */}
      <div className="px-8 md:px-16 py-16 border-b-[3px] border-ink">
        <p className="font-sub font-700 text-[0.6rem] tracking-[0.22em] uppercase text-muted/50 mb-8">03 — Monochrome · Single Colour</p>
        <div className="flex flex-wrap items-end gap-16">
          <div className="flex flex-col gap-2">
            <Logo variant="mono" size={56} />
            <span className="font-sub text-[0.55rem] tracking-[0.15em] uppercase text-muted/40">Full lockup · no shadow</span>
          </div>
          <div className="flex flex-col gap-2">
            <Logo variant="mono" size={56} showWordmark={false} />
            <span className="font-sub text-[0.55rem] tracking-[0.15em] uppercase text-muted/40">Mark only</span>
          </div>
        </div>
      </div>

      {/* ── In-situ usage ── */}
      <div className="px-8 md:px-16 py-16 border-b-[3px] border-ink">
        <p className="font-sub font-700 text-[0.6rem] tracking-[0.22em] uppercase text-muted/50 mb-8">04 — In-Situ Usage</p>

        {/* Nav bar simulation */}
        <div className="bg-ink h-14 flex items-center px-6 gap-3 mb-6">
          <Logo variant="reversed" size={32} showWordmark={false} />
          <span className="font-sub font-700 text-xs tracking-[0.18em] text-white/40 uppercase">Gary Does Strategy</span>
        </div>

        {/* Business card simulation */}
        <div className="inline-block bg-bg border-[3px] border-ink p-8" style={{ boxShadow: '6px 6px 0 #FFD600', width: '340px' }}>
          <Logo variant="primary" size={44} showWordmark={false} />
          <div className="mt-6">
            <p className="font-heading text-ink text-xl tracking-wide leading-none">GARY QUIGLEY</p>
            <p className="font-sub font-700 text-[0.6rem] tracking-[0.22em] uppercase text-accent mt-1">Fractional AI Advisor</p>
          </div>
          <div className="mt-6 pt-4 border-t-[2px] border-ink/15 space-y-1">
            <p className="font-sub text-[0.6rem] tracking-[0.12em] uppercase text-muted">gary@garydoesstrategy.com</p>
            <p className="font-sub text-[0.6rem] tracking-[0.12em] uppercase text-muted">Dubai, UAE · United Kingdom</p>
          </div>
        </div>
      </div>

      {/* ── SVG download ── */}
      <div className="px-8 md:px-16 py-12">
        <p className="font-sub font-700 text-[0.6rem] tracking-[0.22em] uppercase text-muted/50 mb-4">05 — Assets</p>
        <a href="/gds-logo.svg" download className="btn-primary inline-flex">
          Download SVG →
        </a>
      </div>

    </main>
  )
}
