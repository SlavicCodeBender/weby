import SiteProvider from '../../components/SiteProvider'
import LegalPage from '../../components/LegalPage'
import { privatnost } from '../../lib/legal'

export const metadata = {
  title: 'Pravila privatnosti',
  description:
    'Kako ILAN postupa s podacima koje pošaljete kroz obrazac za upit.',
  alternates: { canonical: '/privatnost' },
}

export default function Privatnost() {
  return (
    <SiteProvider>
      <LegalPage dokument={privatnost} />
    </SiteProvider>
  )
}
