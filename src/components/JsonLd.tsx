/**
 * Strukturirani podaci (schema.org) — nevidljivi blok koji tražilicama i AI
 * asistentima kaže što stranica sadrži. Bez njega moraju pogađati iz teksta.
 */
export default function JsonLd({ podaci }: { podaci: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(podaci) }}
    />
  )
}
