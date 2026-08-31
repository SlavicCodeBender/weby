import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteProvider from '../../../components/SiteProvider'
import FaqArticle from '../../../components/FaqArticle'
import JsonLd from '../../../components/JsonLd'
import { faqClanci, faqSlugovi } from '../../../lib/faq'
import { SITE_URL, TVRTKA } from '../../../lib/site'

/** Bez ovoga Next ne zna koje adrese postoje kad se stranica gradi unaprijed. */
export function generateStaticParams() {
  return faqSlugovi.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const clanak = faqClanci.hr.find((c) => c.slug === slug)
  if (!clanak) return { title: 'Česta pitanja' }

  return {
    title: clanak.seoNaslov ?? clanak.naslov,
    description: clanak.sazetak,
    alternates: { canonical: `/faq/${clanak.slug}` },
    openGraph: {
      type: 'article',
      title: clanak.naslov,
      description: clanak.sazetak,
      url: `${SITE_URL}/faq/${clanak.slug}`,
      ...(clanak.slika ? { images: [{ url: clanak.slika, alt: clanak.slikaOpis }] } : {}),
    },
  }
}

export default async function FaqClanakStranica({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!faqSlugovi.includes(slug)) notFound()

  const clanak = faqClanci.hr.find((c) => c.slug === slug)!

  /** Cijeli tekst članka u jednom nizu — AI alati ga čitaju izravno odavde. */
  const tijelo = clanak.sadrzaj
    .flatMap((odjeljak) => [
      ...(odjeljak.naslov ? [odjeljak.naslov] : []),
      ...(odjeljak.odlomci ?? []),
      ...(odjeljak.natuknice ?? []),
    ])
    .join(' ')

  const podaci = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: clanak.naslov,
    description: clanak.sazetak,
    inLanguage: 'hr',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/faq/${clanak.slug}` },
    author: { '@type': 'Organization', name: TVRTKA.naziv, '@id': `${SITE_URL}/#tvrtka` },
    publisher: { '@type': 'Organization', name: TVRTKA.naziv, '@id': `${SITE_URL}/#tvrtka` },
    articleBody: tijelo,
    wordCount: tijelo.split(/\s+/).length,
    ...(clanak.slika ? { image: `${SITE_URL}${clanak.slika}` } : {}),
  }

  return (
    <>
      <JsonLd podaci={podaci} />
      <SiteProvider>
        <FaqArticle slug={slug} />
      </SiteProvider>
    </>
  )
}
