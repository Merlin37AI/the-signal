'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '#contact' },
]

const tickerItems = [
  'Fractional AI Advisory · Dubai & UK',
  '✦',
  'Embedded. Not Arms-Length.',
  '✦',
  '8+ Years Enterprise IT & Operations',
  '✦',
  'AI Strategy · Operations · Implementation',
  '✦',
  'Currently Advising: Argenis Advisory · Upgraded Landscaping',
  '✦',
  'Fractional AI Advisory · Dubai & UK',
  '✦',
  'Embedded. Not Arms-Length.',
  '✦',
  '8+ Years Enterprise IT & Operations',
  '✦',
  'AI Strategy · Operations · Implementation',
  '✦',
  'Currently Advising: Argenis Advisory · Upgraded Landscaping',
  '✦',
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Main nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink border-b-[3px] border-ink">
        <div className="h-14 flex items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-0">
            <span className="font-heading text-xl tracking-wide text-yellow leading-none">
              GDS
            </span>
            <span className="font-sub font-700 text-xs tracking-[0.18em] text-white/40 uppercase ml-3 hidden md:block">
              Gary Does Strategy
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-sub font-semibold text-xs tracking-[0.14em] uppercase text-white/60 hover:text-white transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex btn-red text-xs px-5 py-2.5"
          >
            Work With Gary
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-ink border-t-[2px] border-dark-b px-6 pb-6 pt-4 flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-sub font-semibold text-sm tracking-[0.12em] uppercase text-white/70 py-1 border-b border-dark-b"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-red mt-2 justify-center text-center"
            >
              Work With Gary
            </a>
          </div>
        )}
      </header>

      {/* Ticker strip */}
      <div className="fixed top-14 left-0 right-0 z-40 bg-accent overflow-hidden border-b-[3px] border-ink">
        <div className="py-2 flex overflow-hidden whitespace-nowrap">
          <div className="animate-ticker inline-flex gap-16 shrink-0">
            {tickerItems.map((item, i) => (
              <span
                key={i}
                className="font-sub font-700 text-xs tracking-[0.2em] uppercase text-white shrink-0"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
