import type { Metadata } from 'next'
import SiteProvider from '../../components/SiteProvider'
import FaqList from '../../components/FaqList'
import JsonLd from '../../components/JsonLd'
import { faqClanci } from '../../lib/faq'
import { dict, DEFAULT_LANG } from '../../lib/i18n'
import { SITE_URL } from '../../lib/site'

export const metadata: Metadata = {
  title: 'Česta pitanja o prozorima i vratima',
  description: dict[DEFAULT_LANG].faq.intro,
  alternates: { canonical: '/faq' },
}

/**
 * Pitanje i kratki odgovor u obliku koji tražilice i AI asistenti mogu
 * citirati. Odgovor je polje `sazetak` iz faq.ts — zato ga piši kao pravu
 * rečenicu odgovora, ne kao najavu.
 */
const pitanja = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/faq#pitanja`,
  inLanguage: 'hr',
  mainEntity: faqClanci.hr.map((clanak) => ({
    '@type': 'Question',
    name: clanak.naslov,
    url: `${SITE_URL}/faq/${clanak.slug}`,
    acceptedAnswer: { '@type': 'Answer', text: clanak.sazetak },
  })),
}

export default function Faq() {
  return (
    <>
      <JsonLd podaci={pitanja} />
      <SiteProvider>
        <FaqList />
      </SiteProvider>
    </>
  )
}
