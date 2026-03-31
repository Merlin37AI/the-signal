import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import CursorDot from '@/components/ui/CursorDot'
import ScrollProgress from '@/components/ui/ScrollProgress'
import LenisProvider from '@/components/ui/LenisProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gary Quigley — AI & Automation Consultant | PEAK13 Consulting',
  description:
    'Fractional AI Strategy Advisor and PEAK13 Consulting founder. I show businesses where AI makes sense for them — structured audits, automation builds, and adoption programmes for UAE & UK service businesses.',
  keywords: [
    'AI consultant',
    'fractional AI strategy',
    'PEAK13 Consulting',
    'AI audit',
    'automation consultant',
    'Dubai AI consultant',
    'Gary Quigley',
  ],
  authors: [{ name: 'Gary Quigley', url: 'https://www.linkedin.com/in/gary-quigley' }],
  openGraph: {
    title: 'Gary Quigley — AI & Automation Consultant',
    description: 'Finding the signal. Fractional AI Strategy for UAE & UK businesses.',
    url: 'https://the-signal.vercel.app',
    siteName: 'Gary Quigley — The Signal',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gary Quigley — The Signal',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gary Quigley — AI & Automation Consultant',
    description: 'Finding the signal. Fractional AI Strategy for UAE & UK businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Gary Quigley',
              jobTitle: 'AI & Automation Consultant',
              description:
                'Fractional AI Strategy Advisor and Founder of PEAK13 Consulting. ITIL 4 & Six Sigma certified. Helping UAE & UK service businesses transform with AI.',
              url: 'https://the-signal.vercel.app',
              sameAs: ['https://www.linkedin.com/in/gary-quigley'],
              worksFor: {
                '@type': 'Organization',
                name: 'PEAK13 Consulting Ltd',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressCountry: 'UAE',
              },
              knowsAbout: [
                'AI Strategy',
                'Business Automation',
                'ITIL 4',
                'Six Sigma',
                'Change Management',
                'N8N',
                'Claude API',
              ],
            }),
          }}
        />
      </head>
      <body>
        <LenisProvider>
          <CursorDot />
          <ScrollProgress />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
