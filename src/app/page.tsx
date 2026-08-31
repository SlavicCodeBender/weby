import SiteProvider from '../components/SiteProvider'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import JsonLd from '../components/JsonLd'
import { dict, DEFAULT_LANG } from '../lib/i18n'
import { PODRUCJE, SITE_URL, TVRTKA } from '../lib/site'

const t = dict[DEFAULT_LANG]

/** Tko smo, gdje smo i što radimo — u obliku koji tražilice čitaju izravno. */
const tvrtkaPodaci = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#tvrtka`,
  name: TVRTKA.naziv,
  legalName: TVRTKA.puniNaziv,
  description: TVRTKA.djelatnost,
  url: SITE_URL,
  image: `${SITE_URL}/naslovna.jpg`,
  telephone: TVRTKA.telefon,
  email: TVRTKA.email,
  foundingDate: TVRTKA.osnovano,
  taxID: TVRTKA.oib,
  address: {
    '@type': 'PostalAddress',
    streetAddress: TVRTKA.ulica,
    postalCode: TVRTKA.posta,
    addressLocality: TVRTKA.grad,
    addressCountry: TVRTKA.drzava,
  },
  areaServed: PODRUCJE.map((ime) => ({ '@type': 'Place', name: ime })),
  makesOffer: t.services.items.map((usluga) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: usluga.title, description: usluga.desc },
  })),
}

export default function Home() {
  return (
    <>
      <JsonLd podaci={tvrtkaPodaci} />
      <SiteProvider>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <QuoteModal />
      </SiteProvider>
    </>
  )
}
