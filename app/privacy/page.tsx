import Nav from '@/components/ui/Nav'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Gary Does Strategy',
  description: 'How Gary Does Strategy collects, uses, and protects your personal data.',
  robots: { index: false, follow: false },
}

const LAST_UPDATED = 'April 2026'
const CONTACT_EMAIL = 'gary@garydoesstrategy.com'
const SITE_URL = 'https://the-signal-lemon.vercel.app'

export default function PrivacyPolicy() {
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
              PRIVACY<br />POLICY
            </h1>
            <p className="font-sub font-semibold text-xs tracking-[0.14em] uppercase text-white/30 mt-4">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-3xl">

          <div className="prose-gds space-y-12">

            <Section num="01" title="Who We Are">
              <p>
                This website is operated by <strong>Gary Quigley</strong>, trading as <strong>Gary Does Strategy</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). Gary Quigley is the data controller for personal information collected through this website.
              </p>
              <p>
                <strong>Contact:</strong>{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">{CONTACT_EMAIL}</a>
              </p>
              <p>
                <strong>Registered activities:</strong> Fractional AI Advisory, AI Strategy Consulting, Operational AI Implementation. Operating across the United Arab Emirates and United Kingdom.
              </p>
            </Section>

            <Section num="02" title="What Data We Collect">
              <p>We collect the following categories of personal data:</p>
              <ul>
                <li><strong>Contact form submissions:</strong> Your name and the message you submit via the contact form on this site.</li>
                <li><strong>Calendly bookings:</strong> When you book an intro call, Calendly collects your name, email address, and calendar availability. This is processed by Calendly Inc. under their own privacy policy.</li>
                <li><strong>Email correspondence:</strong> Any information you include in emails sent directly to us.</li>
                <li><strong>Usage data:</strong> Standard server logs including IP address, browser type, pages visited, and referring URL, collected automatically when you visit this site.</li>
                <li><strong>Cookie data:</strong> See our <Link href="/cookies" className="text-accent hover:underline">Cookie Policy</Link> for full details.</li>
              </ul>
              <p>
                We do <strong>not</strong> collect sensitive personal data (health information, financial data, identity documents) through this website.
              </p>
            </Section>

            <Section num="03" title="How We Use Your Data">
              <p>We use your personal data for the following purposes:</p>
              <ul>
                <li><strong>Responding to enquiries</strong> — to reply to messages submitted through the contact form or sent by email.</li>
                <li><strong>Booking management</strong> — to schedule and manage intro calls via Calendly.</li>
                <li><strong>Service delivery</strong> — if you become a client, to fulfil the advisory engagement as agreed.</li>
                <li><strong>Site improvement</strong> — to understand how visitors use this website and identify areas for improvement.</li>
                <li><strong>Legal obligations</strong> — where required to comply with applicable law.</li>
              </ul>
            </Section>

            <Section num="04" title="Legal Basis for Processing">
              <p>We process your personal data on the following legal grounds:</p>
              <ul>
                <li><strong>Legitimate interests</strong> — to respond to enquiries, improve the site, and conduct our business.</li>
                <li><strong>Contract performance</strong> — to deliver services where an engagement has been agreed.</li>
                <li><strong>Legal obligation</strong> — where required by applicable law (UK or UAE).</li>
                <li><strong>Consent</strong> — for non-essential cookies where you have given consent via the cookie banner.</li>
              </ul>
              <p>
                You may withdraw consent at any time. This does not affect the lawfulness of processing before withdrawal.
              </p>
            </Section>

            <Section num="05" title="Data Retention">
              <p>We retain personal data only for as long as necessary:</p>
              <ul>
                <li><strong>Enquiry and contact data:</strong> Up to 24 months from the date of last contact, unless a client engagement follows.</li>
                <li><strong>Client engagement data:</strong> For the duration of the engagement plus 6 years (in line with UK limitation periods for contract disputes).</li>
                <li><strong>Server logs:</strong> Up to 90 days.</li>
                <li><strong>Cookie consent records:</strong> 12 months.</li>
              </ul>
            </Section>

            <Section num="06" title="Who We Share Data With">
              <p>We do not sell personal data. We may share data with the following third-party processors:</p>
              <ul>
                <li><strong>Calendly Inc.</strong> — for booking management. Governed by Calendly&rsquo;s Privacy Policy.</li>
                <li><strong>Vercel Inc.</strong> — hosting provider for this website. Vercel may process server logs in its infrastructure.</li>
                <li><strong>Email providers</strong> — standard email infrastructure used to receive and send correspondence.</li>
              </ul>
              <p>
                All third-party processors are required to handle your data in accordance with applicable data protection law.
              </p>
            </Section>

            <Section num="07" title="International Transfers">
              <p>
                Gary Does Strategy operates from Dubai, UAE and the United Kingdom. If you are located in the UK or European Economic Area, your data may be processed in the UAE. We apply appropriate safeguards consistent with UK GDPR transfer requirements when transferring data internationally.
              </p>
            </Section>

            <Section num="08" title="Your Rights">
              <p>Under UK GDPR and UAE Federal Decree Law No. 45 of 2021 on Personal Data Protection, you have the following rights:</p>
              <ul>
                <li><strong>Right of access</strong> — to obtain a copy of your personal data.</li>
                <li><strong>Right to rectification</strong> — to correct inaccurate data.</li>
                <li><strong>Right to erasure</strong> — to request deletion of your data (&ldquo;right to be forgotten&rdquo;).</li>
                <li><strong>Right to restrict processing</strong> — to limit how we use your data.</li>
                <li><strong>Right to data portability</strong> — to receive your data in a structured, machine-readable format.</li>
                <li><strong>Right to object</strong> — to object to processing based on legitimate interests.</li>
                <li><strong>Right to withdraw consent</strong> — for any processing based on consent.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">{CONTACT_EMAIL}</a>.
                We will respond within 30 days.
              </p>
              <p>
                You also have the right to lodge a complaint with the UK Information Commissioner&rsquo;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ico.org.uk</a>.
              </p>
            </Section>

            <Section num="09" title="Security">
              <p>
                We take reasonable technical and organisational measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction. This site is served over HTTPS. However, no method of transmission over the internet is 100% secure.
              </p>
            </Section>

            <Section num="10" title="Children">
              <p>
                This website is not directed at children under the age of 16. We do not knowingly collect personal data from children. If you believe a child has submitted personal data to us, please contact us and we will delete it promptly.
              </p>
            </Section>

            <Section num="11" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the site following any changes constitutes acceptance of the updated policy.
              </p>
            </Section>

            <Section num="12" title="Contact">
              <p>
                For any questions about this Privacy Policy or how we handle your data:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">{CONTACT_EMAIL}</a></li>
                <li><strong>Website:</strong> <a href={SITE_URL} className="text-accent hover:underline">{SITE_URL}</a></li>
                <li><strong>Operating base:</strong> Dubai, UAE</li>
              </ul>
            </Section>

          </div>

          {/* Footer links */}
          <div className="mt-16 pt-8 border-t-[2px] border-ink/15 flex flex-wrap gap-6">
            <Link href="/home" className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors">← Back to Home</Link>
            <Link href="/cookies" className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors">Cookie Policy</Link>
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
      <div className="font-body text-muted text-base leading-relaxed space-y-3 [&_strong]:text-ink [&_strong]:font-semibold [&_a]:text-accent [&_ul]:space-y-2 [&_ul]:list-none [&_ul>li]:pl-4 [&_ul>li]:border-l-[2px] [&_ul>li]:border-ink/15 [&_ul>li]:ml-0">
        {children}
      </div>
    </div>
  )
}
