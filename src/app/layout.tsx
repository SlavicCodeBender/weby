import type { Metadata } from 'next'
import { dict, DEFAULT_LANG } from '../lib/i18n'
import { SITE_URL } from '../lib/site'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'
import MailchimpConnect from '@/components/MailchimpConnect'

const meta = dict[DEFAULT_LANG].meta

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: meta.title,
    /** Podstranice upisuju samo svoj naslov, „— ILAN" se dodaje samo. */
    template: '%s — ILAN',
  },
  description: meta.description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  /* Kod za Google Search Console (Settings → Ownership verification → HTML tag)
     ide u GOOGLE_SITE_VERIFICATION u .env.local — dok nije upisan, ovaj meta tag
     se jednostavno ne ispisuje. */
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    siteName: 'ILAN',
    title: meta.title,
    description: meta.description,
    url: SITE_URL,
    images: [{ url: '/naslovna.jpg', width: 1200, height: 630, alt: 'ILAN — prozori i vrata' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={DEFAULT_LANG}>
      <body>
        <MailchimpConnect />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
