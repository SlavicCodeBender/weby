import type { Metadata } from 'next'
import SiteProvider from '../../components/SiteProvider'
import AboutPage from '../../components/AboutPage'

export const metadata: Metadata = {
  title: 'O nama',
  description:
    'ILAN je obiteljska proizvodnja i ugradnja aluminijske i PVC stolarije u Rijeci — od 2006., bez oglašavanja, preporukom zadovoljnih kupaca.',
  alternates: { canonical: '/o-nama' },
}

export default function ONama() {
  return (
    <SiteProvider>
      <AboutPage />
    </SiteProvider>
  )
}
