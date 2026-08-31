import SiteProvider from '../../components/SiteProvider'
import LegalPage from '../../components/LegalPage'
import { impressum } from '../../lib/legal'

export const metadata = {
  title: 'Impressum',
  description:
    'Podaci o društvu I. L. A. N. d. o. o. iz Rijeke — sjedište, registracija i kontakt.',
  alternates: { canonical: '/impressum' },
}

export default function Impressum() {
  return (
    <SiteProvider>
      <LegalPage dokument={impressum} />
    </SiteProvider>
  )
}
