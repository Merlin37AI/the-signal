'use client'

import { NumberTicker } from '@/components/ui/animations/number-ticker'

const stats = [
  { n: 8,  suffix: '+', label: 'Years in enterprise IT & operations',  accent: 'text-accent', barColor: '#D90000', barWidth: 80 },
  { n: 2,  suffix: '',  label: 'Active fractional clients right now',   accent: 'text-yellow', barColor: '#FFD600', barWidth: 40 },
  { n: 14, suffix: '',  label: 'Days average to first recommendations', accent: 'text-white',  barColor: '#ffffff', barWidth: 60 },
  { n: 3,  suffix: '',  label: 'Engagement models to choose from',      accent: 'text-accent', barColor: '#D90000', barWidth: 30 },
]

export default function StatsBreak() {
  return (
    <section className="bg-ink border-b-[3px] border-ink grid md:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="relative p-10 md:p-10 lg:p-14 border-b-[2px] md:border-b-0 md:border-r-[2px] border-dark-b last:border-r-0 flex flex-col justify-between overflow-hidden"
          style={{ minHeight: '180px' }}
        >
          {/* Ghost number watermark */}
          <span
            aria-hidden="true"
            className="absolute -top-2 -right-2 font-heading text-white/[0.04] leading-none select-none pointer-events-none"
            style={{ fontSize: 'clamp(7rem, 18vw, 15rem)' }}
          >
            {s.n}{s.suffix}
          </span>

          {/* Live counter */}
          <div
            className={`font-heading leading-none relative z-10 ${s.accent}`}
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
          >
            <NumberTicker
              value={s.n}
              suffix={s.suffix}
              delay={0.1 + i * 0.12}
              className={`font-heading leading-none ${s.accent}`}
            />
          </div>

          {/* Label */}
          <p className="font-sub font-700 text-[0.58rem] tracking-[0.22em] uppercase text-white/35 relative z-10 mt-4 leading-snug max-w-[12ch]">
            {s.label}
          </p>

          {/* Progress bar */}
          <div className="relative z-10 mt-4 h-[2px] w-full bg-white/[0.06] overflow-hidden">
            <div
              className="stat-bar h-full"
              style={{
                width: `${s.barWidth}%`,
                background: s.barColor,
                '--bar-delay': `${0.3 + i * 0.15}s`,
              } as React.CSSProperties}
            />
          </div>
        </div>
      ))}
    </section>
  )
}
