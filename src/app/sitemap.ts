import type { MetadataRoute } from 'next'
import { SITE_URL } from '../lib/site'
import { faqSlugovi } from '../lib/faq'

export const dynamic = "force-static"

/** Popis svih adresa. Novi članak se ovdje pojavi sam, čim se doda u faq.ts. */
export default function sitemap(): MetadataRoute.Sitemap {
  const stalne = [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/faq`, priority: 0.8 },
    { url: `${SITE_URL}/impressum`, priority: 0.3 },
    { url: `${SITE_URL}/privatnost`, priority: 0.3 },
  ]

  const clanci = faqSlugovi.map((slug) => ({
    url: `${SITE_URL}/faq/${slug}`,
    priority: 0.6,
  }))

  return [...stalne, ...clanci]
}
