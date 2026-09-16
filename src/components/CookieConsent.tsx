'use client'
import { useEffect, useState, useSyncExternalStore } from 'react'
import GoogleAnalytics from './GoogleAnalytics'
import { getServerSnapshot, getSnapshot, subscribe } from '../lib/langStore'
import styles from './CookieConsent.module.css'

export const COOKIE_CONSENT_KEY = 'ilan-kolacici'
type Consent = 'all' | 'rejected'

/** Klik na "Postavke kolačića" u podnožju zove ovo pa reloada stranicu —
    najjednostavniji način da i traka i Analytics krenu ispočetka. */
export function resetCookieConsent() {
  window.localStorage.removeItem(COOKIE_CONSENT_KEY)
  window.location.reload()
}

/**
 * Analytics se učitava SAMO nakon izričitog pristanka — do tada ova
 * komponenta samo prikazuje traku s izborom. Jezik čita izravno iz
 * langStorea jer ova komponenta živi u root layoutu, izvan <SiteProvider>
 * koji svaka stranica zasebno podiže.
 */
export default function CookieConsent() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [consent, setConsent] = useState<Consent | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY)
    setConsent(saved === 'all' || saved === 'rejected' ? saved : null)
    setReady(true)
  }, [])

  function choose(next: Consent) {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, next)
    setConsent(next)
  }

  const tekst =
    lang === 'hr'
      ? 'Koristimo Google Analytics da vidimo koje stranice posjetiteljima najviše pomažu i time poboljšamo sadržaj. Ne koristimo kolačiće za oglašavanje.'
      : 'We use Google Analytics to see which pages are most useful to visitors, so we can keep improving the site. We don’t use advertising cookies.'
  const odbaci = lang === 'hr' ? 'Odbaci' : 'Reject'
  const sve = lang === 'hr' ? 'Prihvati' : 'Accept'

  return (
    <>
      {consent === 'all' && <GoogleAnalytics />}

      {ready && consent === null && (
        <div className={styles.banner} role="dialog" aria-label="Kolačići">
          <p className={styles.text}>{tekst}</p>

          <div className={styles.actions}>
            <button type="button" className={styles.reject} onClick={() => choose('rejected')}>
              {odbaci}
            </button>
            <button type="button" className={styles.all} onClick={() => choose('all')}>
              {sve}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
