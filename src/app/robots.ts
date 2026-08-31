import type { MetadataRoute } from 'next'
import { SITE_URL } from '../lib/site'

export const dynamic = "force-static"

/** Govori tražilicama i AI čitačima da smiju pročitati cijelu stranicu. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
