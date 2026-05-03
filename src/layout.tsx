import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ILAN – Windows & Doors',
  description: 'Custom aluminium and PVC windows, doors, and facades — designed, manufactured and installed.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
