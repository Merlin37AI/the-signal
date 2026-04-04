import Nav from '@/components/ui/Nav'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Gary Does Strategy',
  description: 'Information about how cookies are used on the Gary Does Strategy website.',
  robots: { index: false, follow: false },
}

const LAST_UPDATED = 'April 2026'
const CONTACT_EMAIL = 'gary@garydoesstrategy.com'

export default function CookiePolicy() {
  return (
    <>
      <Nav />
      <main className="pt-[110px] bg-bg min-h-screen">

        {/* Page header */}
        <div className="border-b-[3px] border-ink bg-ink">
          <div className="px-6 md:px-12 lg:px-20 py-16">
            <p className="font-sub font-700 text-[0.6rem] tracking-[0.22em] uppercase text-yellow mb-4">
              Legal
            </p>
            <h1 className="font-heading text-white leading-[0.92] tracking-wide" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
              COOKIE<br />POLICY
            </h1>
            <p className="font-sub font-semibold text-xs tracking-[0.14em] uppercase text-white/30 mt-4">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-3xl">
          <div className="space-y-12">

            <Section num="01" title="What Are Cookies">
              <p>
                Cookies are small text files stored on your device when you visit a website. They allow the site to remember information about your visit — such as your preferences or whether you&rsquo;ve accepted a notice — making your next visit easier and the site more useful.
              </p>
              <p>
                This Cookie Policy explains what cookies this site uses, why, and how you can control them.
              </p>
            </Section>

            <Section num="02" title="Cookies We Use">
              <p>We use the following categories of cookies on this website:</p>

              <CookieTable cookies={[
                {
                  name: 'gds-cookie-consent',
                  category: 'Essential',
                  purpose: 'Stores your cookie consent preference (accepted/essential only). Required to remember your choice.',
                  duration: '12 months',
                  provider: 'Gary Does Strategy',
                },
                {
                  name: 'gds-cookie-consent-date',
                  category: 'Essential',
                  purpose: 'Records the date and time you gave or updated cookie consent.',
                  duration: '12 months',
                  provider: 'Gary Does Strategy',
                },
                {
                  name: '__vercel_live_token',
                  category: 'Essential',
                  purpose: 'Used by Vercel hosting infrastructure for preview deployments and routing. Not present on production builds.',
                  duration: 'Session',
                  provider: 'Vercel Inc.',
                },
                {
                  name: 'Calendly session cookies',
                  category: 'Functional',
                  purpose: 'Set by the Calendly booking widget when you initiate or complete a booking. Enables the booking flow to work correctly.',
                  duration: 'Session / up to 30 days',
                  provider: 'Calendly Inc.',
                },
              ]} />
            </Section>

            <Section num="03" title="Essential Cookies">
              <p>
                Essential cookies are strictly necessary for this website to function. They enable core features such as remembering your cookie preferences. <strong>These cookies cannot be disabled</strong> as the site cannot function properly without them.
              </p>
              <p>
                We do not use essential cookies for tracking, advertising, or analytics purposes.
              </p>
            </Section>

            <Section num="04" title="Functional Cookies (Calendly)">
              <p>
                When you use the &ldquo;Book a Free Intro Call&rdquo; button, you are directed to Calendly, a third-party scheduling service operated by Calendly LLC. Calendly may set cookies on your device to manage the booking session.
              </p>
              <p>
                These cookies are only set if you interact with the Calendly booking flow. They are governed by{' '}
                <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Calendly&rsquo;s Privacy Notice
                </a>.
              </p>
              <p>
                If you have chosen &ldquo;Essential Only&rdquo; in the cookie banner, we recommend avoiding the Calendly booking widget and contacting us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">{CONTACT_EMAIL}</a> instead.
              </p>
            </Section>

            <Section num="05" title="Analytics Cookies">
              <p>
                This website does not currently use Google Analytics, Meta Pixel, or other third-party analytics tracking scripts. If this changes, this policy will be updated and the cookie banner updated accordingly.
              </p>
            </Section>

            <Section num="06" title="Advertising Cookies">
              <p>
                We do not use advertising cookies or behavioural tracking on this website. No data from this site is shared with advertising networks.
              </p>
            </Section>

            <Section num="07" title="How to Manage Cookies">
              <p>You have several options for managing or disabling cookies:</p>
              <ul>
                <li>
                  <strong>Cookie banner:</strong> Use the &ldquo;Essential Only&rdquo; option in the cookie notice that appears when you first visit the site.
                </li>
                <li>
                  <strong>Browser settings:</strong> Most browsers allow you to view, delete, and block cookies. Visit your browser&rsquo;s help documentation for instructions:
                  <ul className="mt-2 space-y-1">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Apple Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Opt-out tools:</strong> For Calendly specifically, refer to their privacy controls at <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">calendly.com</a>.
                </li>
              </ul>
              <p>
                Note: blocking or deleting cookies may affect website functionality. In particular, blocking essential cookies may prevent the cookie consent banner from remembering your preference.
              </p>
            </Section>

            <Section num="08" title="Changes to This Policy">
              <p>
                We may update this Cookie Policy when we change the cookies we use or when applicable law requires it. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision. We will display an updated cookie notice if we make material changes.
              </p>
            </Section>

            <Section num="09" title="Contact">
              <p>
                Questions about cookies or this policy:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">{CONTACT_EMAIL}</a>
              </p>
            </Section>

          </div>

          {/* Footer links */}
          <div className="mt-16 pt-8 border-t-[2px] border-ink/15 flex flex-wrap gap-6">
            <Link href="/" className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors">← Back to Home</Link>
            <Link href="/privacy" className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </main>
    </>
  )
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-[3px] border-ink pl-8">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-sub font-700 text-[0.55rem] tracking-[0.22em] uppercase text-muted/40 shrink-0">{num}</span>
        <h2 className="font-heading text-ink tracking-wide leading-none" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}>
          {title.toUpperCase()}
        </h2>
      </div>
      <div className="font-body text-muted text-base leading-relaxed space-y-3 [&_strong]:text-ink [&_strong]:font-semibold [&_a]:text-accent [&_ul]:space-y-2 [&_ul]:list-none [&_ul>li]:pl-4 [&_ul>li]:border-l-[2px] [&_ul>li]:border-ink/15">
        {children}
      </div>
    </div>
  )
}

type Cookie = {
  name: string
  category: string
  purpose: string
  duration: string
  provider: string
}

function CookieTable({ cookies }: { cookies: Cookie[] }) {
  return (
    <div className="border-[2px] border-ink overflow-x-auto mt-4">
      <table className="w-full min-w-[560px]">
        <thead>
          <tr className="bg-ink">
            <th className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-white/50 text-left px-4 py-3 border-r-[2px] border-dark-border">Name</th>
            <th className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-white/50 text-left px-4 py-3 border-r-[2px] border-dark-border">Category</th>
            <th className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-white/50 text-left px-4 py-3 border-r-[2px] border-dark-border">Purpose</th>
            <th className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-white/50 text-left px-4 py-3 border-r-[2px] border-dark-border">Duration</th>
            <th className="font-sub font-700 text-[0.55rem] tracking-[0.2em] uppercase text-white/50 text-left px-4 py-3">Provider</th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((c, i) => (
            <tr key={c.name} className={`border-t-[2px] border-ink/15 ${i % 2 === 0 ? 'bg-bg' : 'bg-surface'}`}>
              <td className="font-body text-ink text-xs px-4 py-3 border-r-[2px] border-ink/10 font-mono">{c.name}</td>
              <td className="px-4 py-3 border-r-[2px] border-ink/10">
                <span className={`font-sub font-700 text-[0.55rem] tracking-[0.15em] uppercase px-2 py-1 ${
                  c.category === 'Essential' ? 'bg-ink/10 text-ink' : 'bg-yellow/20 text-ink'
                }`}>
                  {c.category}
                </span>
              </td>
              <td className="font-body text-muted text-xs px-4 py-3 border-r-[2px] border-ink/10">{c.purpose}</td>
              <td className="font-body text-muted text-xs px-4 py-3 border-r-[2px] border-ink/10 whitespace-nowrap">{c.duration}</td>
              <td className="font-body text-muted text-xs px-4 py-3">{c.provider}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
