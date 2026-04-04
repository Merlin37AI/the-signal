import Nav from '@/components/ui/Nav'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Gary Does Strategy',
  description: 'Terms and conditions for use of the Gary Does Strategy website and advisory services.',
  robots: { index: false, follow: false },
}

const LAST_UPDATED = 'April 2026'
const CONTACT_EMAIL = 'gary@garydoesstrategy.com'
const SITE_URL = 'https://the-signal-lemon.vercel.app'

export default function Terms() {
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
              TERMS &amp;<br />CONDITIONS
            </h1>
            <p className="font-sub font-semibold text-xs tracking-[0.14em] uppercase text-white/30 mt-4">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-3xl">
          <div className="space-y-12">

            <div className="bg-ink px-6 py-5 border-l-[4px] border-yellow">
              <p className="font-body text-white/70 text-sm leading-relaxed">
                Please read these Terms and Conditions carefully before using this website. By accessing or using this site, you agree to be bound by these terms. If you do not agree, please do not use this site.
              </p>
            </div>

            <Section num="01" title="About These Terms">
              <p>
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the website located at{' '}
                <a href={SITE_URL} className="text-accent hover:underline">{SITE_URL}</a>{' '}
                (&ldquo;the Site&rdquo;), operated by <strong>Gary Quigley</strong>, trading as <strong>Gary Does Strategy</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
              </p>
              <p>
                These Terms apply to website use only. Separate written agreements govern any advisory, consulting, or implementation services engaged through Gary Does Strategy.
              </p>
            </Section>

            <Section num="02" title="Use of This Website">
              <p>You may use this website for lawful purposes only. You agree not to:</p>
              <ul>
                <li>Use the site in any way that violates applicable local, national, or international law or regulation.</li>
                <li>Transmit unsolicited commercial communications (spam).</li>
                <li>Attempt to gain unauthorised access to any part of the site, server, or related systems.</li>
                <li>Introduce viruses, trojans, or other malicious or harmful code.</li>
                <li>Reproduce, duplicate, copy, or resell any part of the site in contravention of these Terms.</li>
                <li>Scrape, harvest, or collect content or data from the site by automated means without prior written consent.</li>
              </ul>
              <p>
                We reserve the right to restrict or terminate your access to the site at any time, without notice, if we believe you have breached these Terms.
              </p>
            </Section>

            <Section num="03" title="Intellectual Property">
              <p>
                All content on this website — including but not limited to text, headings, structure, design, graphics, and code — is the intellectual property of Gary Quigley / Gary Does Strategy unless otherwise stated.
              </p>
              <p>
                You may view and print pages from this site for your own personal, non-commercial use. You may not reproduce, distribute, modify, transmit, or republish any content from this site without prior written permission.
              </p>
              <p>
                The name &ldquo;Gary Does Strategy&rdquo;, any associated marks, and the site&rsquo;s visual identity are proprietary to Gary Quigley. Nothing in these Terms grants you any rights to use them.
              </p>
            </Section>

            <Section num="04" title="Information and Accuracy">
              <p>
                The content on this site is provided for general informational purposes only. While we take care to keep information accurate and up to date, we make no representations or warranties of any kind — express or implied — about the completeness, accuracy, reliability, or suitability of the information on this site.
              </p>
              <p>
                Nothing on this site constitutes professional legal, financial, or regulated advice. If you require such advice, you should engage a qualified professional independently.
              </p>
              <p>
                Any reliance you place on information from this site is strictly at your own risk.
              </p>
            </Section>

            <Section num="05" title="Advisory Services">
              <p>
                Details of advisory services — including AI strategy, fractional consulting, and implementation work — are described on this site for indicative purposes only. Pricing, scope, and availability are subject to change.
              </p>
              <p>
                Entering into any engagement with Gary Does Strategy requires a separate, written service agreement. No binding contract for advisory services is formed by visiting this website, completing the contact form, or booking an introductory call.
              </p>
              <p>
                An introductory call is exploratory in nature and does not constitute the commencement of any advisory engagement or create any obligations on either party.
              </p>
            </Section>

            <Section num="06" title="Third-Party Links and Services">
              <p>
                This site contains links to third-party websites and services, including Calendly (for booking calls) and LinkedIn. These links are provided for convenience only.
              </p>
              <p>
                We have no control over the content, privacy practices, or terms of third-party sites. We are not responsible for any loss or damage arising from your use of any third-party site or service. You should review the applicable terms and policies of any third-party site before using it.
              </p>
            </Section>

            <Section num="07" title="Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, Gary Quigley / Gary Does Strategy shall not be liable for:
              </p>
              <ul>
                <li>Any direct, indirect, incidental, consequential, or special damages arising from your use of, or inability to use, this website.</li>
                <li>Any loss of business, profits, revenue, goodwill, data, or anticipated savings.</li>
                <li>Any damages resulting from reliance on information published on this site.</li>
                <li>Any interruption, suspension, or termination of access to this site.</li>
              </ul>
              <p>
                Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable law.
              </p>
            </Section>

            <Section num="08" title="Disclaimer of Warranties">
              <p>
                This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p>
                We do not warrant that this site will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </Section>

            <Section num="09" title="Privacy and Cookies">
              <p>
                Your use of this site is also governed by our{' '}
                <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>{' '}
                and{' '}
                <Link href="/cookies" className="text-accent hover:underline">Cookie Policy</Link>,
                which are incorporated into these Terms by reference.
              </p>
            </Section>

            <Section num="10" title="Governing Law and Jurisdiction">
              <p>
                These Terms are governed by and construed in accordance with the laws of <strong>England and Wales</strong>. Both parties submit to the exclusive jurisdiction of the courts of England and Wales to resolve any dispute or claim arising out of or in connection with these Terms.
              </p>
              <p>
                Where applicable, UAE law and the jurisdiction of the courts of the Dubai International Financial Centre (DIFC) may also apply to disputes arising in connection with activities carried out in the UAE.
              </p>
            </Section>

            <Section num="11" title="Changes to These Terms">
              <p>
                We may revise these Terms at any time by updating this page. The &ldquo;Last updated&rdquo; date at the top indicates the most recent revision. Your continued use of this site after any changes constitutes acceptance of the updated Terms.
              </p>
            </Section>

            <Section num="12" title="Contact">
              <p>
                Questions about these Terms:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">{CONTACT_EMAIL}</a>
              </p>
            </Section>

          </div>

          {/* Footer links */}
          <div className="mt-16 pt-8 border-t-[2px] border-ink/15 flex flex-wrap gap-6">
            <Link href="/" className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors">← Back to Home</Link>
            <Link href="/privacy" className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="font-sub font-700 text-xs tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors">Cookie Policy</Link>
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
