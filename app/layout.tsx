import type { Metadata } from 'next'
import { Bebas_Neue, Barlow_Condensed, Barlow } from 'next/font/google'
import './globals.css'
import PageTransition from '@/components/ui/PageTransition'
import CookieConsent from '@/components/ui/CookieConsent'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://the-signal-lemon.vercel.app'),
  title: 'Gary Quigley — Fractional AI Consultant | Gary Does Strategy',
  description:
    'Gary Quigley helps UAE & UK service businesses cut through AI noise and implement what actually works. Structured AI audits, fractional strategy, and automation builds for businesses with 5–50 staff.',
  keywords: [
    'fractional AI consultant',
    'AI strategy consultant Dubai',
    'AI audit for small business',
    'Gary Does Strategy',
    'AI automation consultant UK',
    'Gary Quigley AI',
    'business AI strategy',
  ],
  authors: [{ name: 'Gary Quigley', url: 'https://www.linkedin.com/in/gary-quigley' }],
  openGraph: {
    title: 'Gary Quigley — Fractional AI Consultant',
    description: 'AI strategy that actually fits your business. Audits, fractional advisory, and automation builds for UAE & UK service businesses.',
    url: 'https://the-signal-lemon.vercel.app',
    siteName: 'Gary Quigley | Gary Does Strategy',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Gary Quigley — Fractional AI Consultant' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gary Quigley — Fractional AI Consultant',
    description: 'AI strategy that actually fits your business.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Gary Quigley',
              jobTitle: 'Fractional AI Consultant',
              description: 'Fractional AI Strategy Advisor and Founder of Gary Does Strategy. ITIL 4 & Six Sigma certified. Helping UAE & UK service businesses implement AI that actually works.',
              url: 'https://the-signal-lemon.vercel.app',
              sameAs: ['https://www.linkedin.com/in/gary-quigley'],
              worksFor: { '@type': 'Organization', name: 'Gary Does Strategy Ltd' },
              address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
              knowsAbout: ['AI Strategy', 'Business Automation', 'ITIL 4', 'Six Sigma', 'N8N', 'Claude API', 'Change Management'],
            }),
          }}
        />
      </head>
      <body>
        <PageTransition />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
