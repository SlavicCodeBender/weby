import type { Metadata } from 'next'
import { dict, DEFAULT_LANG } from '../lib/i18n'
import './globals.css'

export const metadata: Metadata = {
  title: dict[DEFAULT_LANG].meta.title,
  description: dict[DEFAULT_LANG].meta.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={DEFAULT_LANG}>
      <body>{children}</body>
    </html>
  )
}
