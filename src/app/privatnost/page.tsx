import SiteProvider from '../../components/SiteProvider'
import LegalPage from '../../components/LegalPage'
import { privatnost } from '../../lib/legal'

export const metadata = { title: 'Pravila privatnosti — ILAN' }

export default function Privatnost() {
  return (
    <SiteProvider>
      <LegalPage dokument={privatnost} />
    </SiteProvider>
  )
}
