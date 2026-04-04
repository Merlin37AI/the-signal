'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'About',      href: '#about'     },
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'Services',   href: '#services'   },
  { label: 'Clients',    href: '/clients'    },
  { label: 'Contact',    href: '#contact'    },
]

const tickerItems = [
  'Fractional AI Advisory · Dubai & UK', '✦',
  'Embedded. Not Arms-Length.', '✦',
  '8+ Years Enterprise IT & Operations', '✦',
  'AI Strategy · Operations · Implementation', '✦',
  'Currently Advising: Argenis Advisory · Upgraded Landscaping', '✦',
  'Fractional AI Advisory · Dubai & UK', '✦',
  'Embedded. Not Arms-Length.', '✦',
  '8+ Years Enterprise IT & Operations', '✦',
  'AI Strategy · Operations · Implementation', '✦',
  'Currently Advising: Argenis Advisory · Upgraded Landscaping', '✦',
]

const credentialItems = [
  'ITIL 4 Foundation', '·',
  'Six Sigma Green Belt', '·',
  'AI in Business — UPenn', '·',
  'Micro MBA Cum Laude', '·',
  'CompTIA Security+', '·',
  'CPD Business Strategist', '·',
  'ITIL 4 Foundation', '·',
  'Six Sigma Green Belt', '·',
  'AI in Business — UPenn', '·',
  'Micro MBA Cum Laude', '·',
  'CompTIA Security+', '·',
  'CPD Business Strategist', '·',
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const resolveHref = (href: string) => {
    if (href.startsWith('#') && !isHome) return `/${href}`
    return href
  }

  const contactHref = isHome ? '#contact' : '/#contact'

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Main nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink border-b-[3px] border-ink">
        <div className="h-14 flex items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-0 relative z-[70]">
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
                href={resolveHref(href)}
                className="font-sub font-semibold text-xs tracking-[0.14em] uppercase text-white/60 hover:text-white transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href={contactHref} className="btn-red text-xs px-5 py-2.5">
              Work With Gary
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white relative z-[70]"
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-250 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-250 ${open ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all duration-250 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Dual ticker strip */}
        <div className="fixed top-14 left-0 right-0 z-40 bg-accent overflow-hidden border-b-[3px] border-ink">
          {/* Row 1 — left */}
          <div className="py-[3px] flex overflow-hidden whitespace-nowrap border-b border-accent/40">
            <div className="animate-ticker inline-flex gap-12 shrink-0">
              {tickerItems.map((item, i) => (
                <span
                  key={i}
                  className="font-sub font-700 text-[0.6rem] tracking-[0.18em] uppercase text-white shrink-0"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Row 2 — right (credentials) */}
          <div className="py-[3px] flex overflow-hidden whitespace-nowrap">
            <div className="animate-ticker-reverse inline-flex gap-10 shrink-0">
              {credentialItems.map((item, i) => (
                <span
                  key={i}
                  className={`font-sub font-700 text-[0.6rem] tracking-[0.18em] uppercase shrink-0 ${
                    item === '·' ? 'text-white/30' : 'text-white/70'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-ink flex flex-col justify-between px-8 pt-[72px] pb-10 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Nav links */}
        <nav className="flex flex-col mt-6">
          {links.map(({ label, href }, i) => (
            <a
              key={href}
              href={resolveHref(href)}
              onClick={() => setOpen(false)}
              className={`mobile-menu-link font-heading text-white border-b border-white/10 py-5 leading-none tracking-wide hover:text-accent transition-colors`}
              style={{
                fontSize: 'clamp(3rem, 13vw, 5.5rem)',
                animationDelay: open ? `${i * 0.07}s` : '0s',
              }}
            >
              {label.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Footer row */}
        <div className="flex flex-col gap-4 mt-8">
          <a
            href={contactHref}
            onClick={() => setOpen(false)}
            className="btn-red justify-center text-center"
          >
            Work With Gary →
          </a>
          <p className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-white/20 text-center">
            Gary Does Strategy · Dubai & UK
          </p>
        </div>
      </div>
    </>
  )
}
