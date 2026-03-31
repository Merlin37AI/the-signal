import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/ui/ScrollReveal'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://the-signal-lemon.vercel.app'),
  title: 'Gary Quigley — Fractional AI Consultant | PEAK13 Consulting',
  description:
    'Gary Quigley helps UAE & UK service businesses cut through AI noise and implement what actually works. Structured AI audits, fractional strategy, and automation builds for businesses with 5–50 staff.',
  keywords: [
    'fractional AI consultant',
    'AI strategy consultant Dubai',
    'AI audit for small business',
    'PEAK13 Consulting',
    'AI automation consultant UK',
    'Gary Quigley AI',
    'business AI strategy',
  ],
  authors: [{ name: 'Gary Quigley', url: 'https://www.linkedin.com/in/gary-quigley' }],
  openGraph: {
    title: 'Gary Quigley — Fractional AI Consultant',
    description: 'AI strategy that actually fits your business. Audits, fractional advisory, and automation builds for UAE & UK service businesses.',
    url: 'https://the-signal-lemon.vercel.app',
    siteName: 'Gary Quigley | PEAK13 Consulting',
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
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Gary Quigley',
              jobTitle: 'Fractional AI Consultant',
              description: 'Fractional AI Strategy Advisor and Founder of PEAK13 Consulting. ITIL 4 & Six Sigma certified. Helping UAE & UK service businesses implement AI that actually works.',
              url: 'https://the-signal-lemon.vercel.app',
              sameAs: ['https://www.linkedin.com/in/gary-quigley'],
              worksFor: { '@type': 'Organization', name: 'PEAK13 Consulting Ltd' },
              address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
              knowsAbout: ['AI Strategy', 'Business Automation', 'ITIL 4', 'Six Sigma', 'N8N', 'Claude API', 'Change Management'],
            }),
          }}
        />
      </head>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
