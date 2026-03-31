'use client'

import { useEffect, useState } from 'react'

interface NavProps {
  onCTA: () => void
}

const navLinks = [
  { label: 'Story', href: '#origin' },
  { label: 'Services', href: '#services' },
  { label: 'Proof', href: '#proof' },
  { label: 'Contact', href: '#signal' },
]

export default function Nav({ onCTA }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-teal/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading font-bold text-white tracking-widest text-sm uppercase"
        >
          PEAK<span className="text-teal">13</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-teal-muted/70 hover:text-white transition-colors duration-200 font-body tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={onCTA}
          className="hidden md:block text-sm font-semibold text-bg bg-teal hover:bg-teal-light px-5 py-2 rounded-full transition-colors duration-200 teal-glow"
        >
          Book a Signal Call
        </button>

        {/* Mobile CTA */}
        <button
          onClick={onCTA}
          className="md:hidden text-xs font-semibold text-bg bg-teal hover:bg-teal-light px-4 py-2 rounded-full transition-colors duration-200"
        >
          Book a Call
        </button>
      </nav>
    </header>
  )
}
