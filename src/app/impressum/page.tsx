import SiteProvider from '../../components/SiteProvider'
import LegalPage from '../../components/LegalPage'
import { impressum } from '../../lib/legal'

export const metadata = { title: 'Impressum — ILAN' }

export default function Impressum() {
  return (
    <SiteProvider>
      <LegalPage dokument={impressum} />
    </SiteProvider>
  )
}
