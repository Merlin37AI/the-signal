'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-lg section-pad py-0 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="font-heading font-extrabold text-ink text-lg tracking-tight">
            Gary <span className="text-accent">Quigley</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted hover:text-ink transition-colors duration-150 font-body"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden md:inline-flex btn-accent text-sm">
          Book a Free Call
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-ink"
          aria-label="Menu"
        >
          <div className={`w-5 h-0.5 bg-ink mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-0.5 bg-ink mb-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-ink transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
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
          <a href="#contact" onClick={() => setOpen(false)} className="btn-accent mt-2 justify-center">
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  )
}
