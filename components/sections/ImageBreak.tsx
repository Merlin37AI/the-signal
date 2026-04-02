'use client'

import Image from 'next/image'

export default function ImageBreak() {
  return (
    <div className="relative w-full h-[360px] md:h-[480px] overflow-hidden border-b-[3px] border-ink">
      <Image
        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Fractional AI advisor embedded with leadership team"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

      {/* Left content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <p className="font-sub font-700 text-xs tracking-[0.22em] uppercase text-accent mb-5">
            The difference
          </p>
          <p
            className="font-heading text-white leading-[0.95] tracking-wide mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            MOST BUSINESSES DON&apos;T HAVE AN AI PROBLEM. THEY HAVE A TRANSLATION PROBLEM.
          </p>
          <p className="font-body text-white/55 text-base leading-relaxed max-w-xl">
            I bridge the gap between what AI can do and what your business actually needs.
            That starts with listening — not selling.
          </p>
        </div>
      </div>

      {/* Bottom-right stamp */}
      <div
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-yellow border-[3px] border-ink px-4 py-2"
        style={{ boxShadow: '4px 4px 0 #0F0F0F' }}
      >
        <p className="font-heading text-ink text-xl leading-none tracking-wide">GDS</p>
        <p className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-ink/60">Gary Does Strategy</p>
      </div>
    </div>
  )
}
