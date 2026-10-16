'use client'
import { useEffect } from 'react'
import { trackEvent } from '../lib/analytics'

/** Gdje na stranici je link kliknut — da se u Analyticsu vidi koji gumb ljudi koriste. */
function mjestoKlika(link: Element): string {
  if (link.closest('nav, header')) return 'zaglavlje'
  if (link.closest('form')) return 'obrazac'
  const sekcija = link.closest('[id]')
  return sekcija ? sekcija.id : 'stranica'
}

/**
 * Bilježi klikove na broj telefona (`klik_telefon`) i e-mail adresu (`klik_email`).
 * Jedan slušač na cijelom dokumentu hvata sve takve linkove, i one koji se
 * dodaju kasnije. trackEvent sam provjerava pristanak na kolačiće.
 */
export default function ClickTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"], a[href^="mailto:"]')
      if (!link) return
      const naziv = link.getAttribute('href')!.startsWith('tel:') ? 'klik_telefon' : 'klik_email'
      trackEvent(naziv, { mjesto: mjestoKlika(link) })
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
