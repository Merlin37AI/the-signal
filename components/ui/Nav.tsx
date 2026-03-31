'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'How It Works', href: '#diagnostic' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#results' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-lg section-pad py-0 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span
            className={`font-heading font-extrabold text-lg tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            Gary <span className="text-accent">Quigley</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`text-sm transition-colors duration-150 font-body ${
                scrolled
                  ? 'text-muted hover:text-ink'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5">
          Book a Free Call
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-ink' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg border-t border-border px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base text-ink font-body py-1"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 justify-center text-center"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  )
}
