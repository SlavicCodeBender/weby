import SiteProvider from '../../components/SiteProvider'
import ThankYou from '../../components/ThankYou'

/**
 * Odredište za `_next` iz QuoteForm-a nakon uspješnog slanja upita.
 * Namjerno nema u sitemap.ts i ima noindex — to je potvrda slanja, ne
 * sadržajna stranica koju bi tražilice trebale indeksirati.
 */
export const metadata = {
  title: 'Upit poslan',
  description: 'Vaš upit je uspješno poslan. Javit ćemo vam se u najkraćem roku.',
  alternates: { canonical: '/hvala' },
  robots: { index: false, follow: true },
}

export default function Hvala() {
  return (
    <SiteProvider>
      <ThankYou />
    </SiteProvider>
  )
}
