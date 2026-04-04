'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type ConsentState = 'accepted' | 'essential' | null

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [deciding, setDeciding] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('gds-cookie-consent')
    if (!stored) {
      // Small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const handleAccept = (type: ConsentState) => {
    setDeciding(true)
    localStorage.setItem('gds-cookie-consent', type as string)
    localStorage.setItem('gds-cookie-consent-date', new Date().toISOString())
    setTimeout(() => setVisible(false), 300)
  }

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[200] bg-ink border-t-[3px] border-accent transition-transform duration-400 ${
        deciding ? 'translate-y-full' : 'translate-y-0'
      }`}
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      {/* Yellow top rule */}
      <div className="h-[3px] bg-yellow w-full" />

      <div className="px-6 md:px-10 lg:px-16 py-5 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-sub font-700 text-[0.6rem] tracking-[0.2em] uppercase text-yellow mb-1">
            Cookie Notice
          </p>
          <p className="font-body text-white/70 text-sm leading-snug">
            This site uses cookies to understand how visitors use it and to make the Calendly booking experience work.
            No data is sold or shared with advertisers.{' '}
            <Link href="/cookies" className="text-white underline underline-offset-2 hover:text-yellow transition-colors">
              Cookie Policy
            </Link>
            {' · '}
            <Link href="/privacy" className="text-white underline underline-offset-2 hover:text-yellow transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-0 shrink-0">
          <button
            onClick={() => handleAccept('essential')}
            className="font-sub font-700 text-[0.6rem] tracking-[0.18em] uppercase text-white/40 border-[2px] border-white/15 px-5 py-3 hover:border-white/40 hover:text-white/70 transition-all duration-150"
          >
            Essential Only
          </button>
          <button
            onClick={() => handleAccept('accepted')}
            className="font-sub font-700 text-[0.6rem] tracking-[0.18em] uppercase text-ink bg-yellow border-[2px] border-yellow px-6 py-3 hover:bg-white hover:border-white transition-all duration-150 ml-[-2px]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
