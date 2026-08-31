import type { Metadata } from 'next'
import { dict, DEFAULT_LANG } from '../lib/i18n'
import { SITE_URL } from '../lib/site'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
