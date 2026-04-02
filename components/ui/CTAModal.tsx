'use client'

import { useEffect } from 'react'

type ModalType = 'audit' | 'talk' | 'call'

interface CTAModalProps {
  type: ModalType
  onClose: () => void
}

const config: Record<ModalType, { title: string; subtitle: string; calendlyUrl: string }> = {
  audit: {
    title: 'Request an AI Audit',
    subtitle: 'Let\'s map where your business is losing time, money, and opportunity — and where AI changes that.',
    calendlyUrl: 'https://calendly.com/quigleygary/ai-audit',
  },
  talk: {
    title: 'Book Gary to Speak',
    subtitle: 'AI, neurodivergence, and performance — keynotes for leadership events, conferences, and corporate off-sites.',
    calendlyUrl: 'https://calendly.com/quigleygary/speaking',
  },
  call: {
    title: 'Book a Signal Call',
    subtitle: 'A 30-minute call to find your signal. No pitch, no fluff — just clarity on where AI fits your business.',
    calendlyUrl: 'https://calendly.com/quigleygary/signal-call',
  },
}

export default function CTAModal({ type, onClose }: CTAModalProps) {
  const { title, subtitle, calendlyUrl } = config[type]

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bg/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl bg-[#0d1a14] border border-teal/20 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-teal/10">
          <div className="flex items-start justify-between">
            <div>
              <p className="label-tag">Gary Does Strategy</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-2">{title}</h2>
              <p className="text-teal-muted/70 mt-2 text-sm leading-relaxed">{subtitle}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-teal-muted/50 hover:text-white transition-colors ml-4 mt-1 text-xl"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Calendly embed */}
        <div className="px-8 py-6">
          <div className="w-full h-[400px] rounded-xl overflow-hidden border border-teal/10">
            <iframe
              src={`${calendlyUrl}?embed_type=Inline&hide_gdpr_banner=1&background_color=0d1a14&text_color=ffffff&primary_color=1D9E75`}
              width="100%"
              height="100%"
              frameBorder="0"
              title={title}
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-xs text-teal-muted/40 mt-3">
            Powered by Calendly · quigleygary@hotmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
