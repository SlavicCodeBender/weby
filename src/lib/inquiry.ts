import type { Lang } from './i18n'

/**
 * ============================================================
 *  SLANJE UPITA SA STRANICE
 * ============================================================
 *
 * Trenutno je uključen način 'mailto'. Forma tada otvori mail program
 * posjetitelja s već ispunjenom porukom, a on pritisne pošalji.
 * To radi svugdje — i kad je stranica otvorena s USB-a — bez servera
 * i bez ikakve registracije.
 *
 * ------------------------------------------------------------
 *  KAKO PREBACITI DA MAIL STIŽE SAM
 * ------------------------------------------------------------
 *
 * 1. Otvorite račun kod nekog servisa za forme. Dvije uobičajene
 *    besplatne mogućnosti:
 *
 *      FormSubmit  — https://formsubmit.co
 *        Adresa za slanje: https://formsubmit.co/ajax/VAŠ-KLJUČ
 *        (Prvi upit stigne kao mail s poveznicom za potvrdu adrese.
 *         Nakon potvrde dobijete ključ koji se koristi umjesto adrese,
 *         da e-mail ne stoji otvoreno u kodu stranice.)
 *
 *      Formspree   — https://formspree.io
 *        Adresa za slanje: https://formspree.io/f/VAŠ-ID
 *
 * 2. Ovdje dolje promijenite dvije vrijednosti:
 *
 *      INQUIRY_MODE     = 'endpoint'
 *      INQUIRY_ENDPOINT = 'adresa koju ste dobili'
 *
 * 3. Pošaljite jedan probni upit kroz formu i provjerite je li stigao.
 *
 * Ništa drugo ne treba dirati — forma, provjere i poruke o uspjehu
 * i grešci rade jednako u oba načina.
 *
 * NAPOMENA: u načinu 'endpoint' upiti prolaze kroz server tog servisa.
 * U načinu 'mailto' ne prolaze nigdje — idu ravno iz mail programa
 * posjetitelja.
 */

/** Adresa na koju stižu upiti kad je uključen način 'mailto'. */
export const INQUIRY_EMAIL = 'leopold.ivesic.ilan@gmail.com'

export const INQUIRY_MODE: 'mailto' | 'endpoint' = 'mailto'
export const INQUIRY_ENDPOINT = ''

export interface Inquiry {
  name: string
  reach: string
  service: string
  message: string
  /** Odakle je upit poslan — da se u mailu vidi je li iz skočnog prozora ili s dna stranice. */
  source: string
  lang: Lang
}

const LABELS = {
  hr: {
    subject: 'Upit sa stranice',
    name: 'Ime i prezime',
    reach: 'Kontakt',
    service: 'Usluga',
    message: 'Poruka',
    source: 'Poslano s',
  },
  en: {
    subject: 'Website enquiry',
    name: 'Name',
    reach: 'Contact',
    service: 'Service',
    message: 'Message',
    source: 'Sent from',
  },
} as const

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function subjectFor(i: Inquiry): string {
  return `${LABELS[i.lang].subject} — ${i.service}`
}

function bodyFor(i: Inquiry): string {
  const L = LABELS[i.lang]
  return [
    `${L.name}: ${i.name}`,
    `${L.reach}: ${i.reach}`,
    `${L.service}: ${i.service}`,
    `${L.message}: ${i.message || '-'}`,
    '',
    `${L.source}: ${i.source}`,
  ].join('\n')
}

/**
 * Šalje upit. Baca iznimku ako slanje ne uspije, da forma prikaže poruku o grešci.
 * Ključevi u payloadu su namjerno čitljivi jer ih servisi za forme koriste
 * kao nazive redaka u mailu koji vam stigne.
 */
export async function sendInquiry(inquiry: Inquiry): Promise<void> {
  if (INQUIRY_MODE === 'endpoint' && INQUIRY_ENDPOINT) {
    const L = LABELS[inquiry.lang]

    const payload: Record<string, string> = {
      [L.name]: inquiry.name,
      [L.reach]: inquiry.reach,
      [L.service]: inquiry.service,
      [L.message]: inquiry.message || '-',
      [L.source]: inquiry.source,
      _subject: subjectFor(inquiry),
      // FormSubmit šalje mail u obliku tablice; Formspree ovo polje zanemaruje.
      _template: 'table',
    }

    // Ako je posjetitelj ostavio e-mail, namjesti da odgovor ide ravno njemu.
    if (looksLikeEmail(inquiry.reach)) payload._replyto = inquiry.reach.trim()

    const res = await fetch(INQUIRY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) throw new Error(`Slanje nije uspjelo (${res.status})`)
    return
  }

  const href =
    `mailto:${INQUIRY_EMAIL}` +
    `?subject=${encodeURIComponent(subjectFor(inquiry))}` +
    `&body=${encodeURIComponent(bodyFor(inquiry))}`

  window.location.href = href
}
