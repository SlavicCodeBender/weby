/**
 * Podaci koje traže tražilice i AI asistenti kad čitaju stranicu.
 *
 * VAŽNO: `SITE_URL` je adresa na kojoj stranica živi (https://www.ilanprozori.com) —
 * iz nje se računaju sitemap.xml, robots.txt i canonical adrese. Ako se domena
 * ikad promijeni, mijenja se SAMO ovdje. Može se preskočiti i bez diranja koda,
 * varijablom NEXT_PUBLIC_SITE_URL na hostingu (za lokalni razvoj i sl.).
 *
 * Mora biti ista adresa koju koristi GitHub Pages (Custom domain). FormSubmit
 * aktivaciju obrasca veže uz tu adresu, pa promjena domene traži novu aktivaciju.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ilanprozori.com').replace(
  /\/$/,
  '',
)

/** Podaci o tvrtki iz sudskog registra — isti kao u impressumu. */
export const TVRTKA = {
  naziv: 'ILAN',
  puniNaziv: 'I. L. A. N. d. o. o.',
  ulica: 'Ivana Luppisa 7',
  posta: '51000',
  grad: 'Rijeka',
  drzava: 'HR',
  oib: '96998412691',
  telefon: '+385919491580',
  email: 'ilan.leopold.ivesic@gmail.com',
  osnovano: '2006',
  djelatnost: 'Proizvodnja i ugradnja aluminijske i PVC stolarije',
} as const

/** Područje na kojem ILAN radi — tražilicama govori za koje mjesto je stranica. */
export const PODRUCJE = ['Rijeka', 'Primorsko-goranska županija', 'Kvarner', 'Istra']
