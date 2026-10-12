import { COOKIE_CONSENT_KEY } from '../components/CookieConsent'

/** Šalje događaj u Google Analytics, ali samo ako je posjetitelj prihvatio kolačiće. */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  try {
    if (window.localStorage.getItem(COOKIE_CONSENT_KEY) !== 'all') return
  } catch {
    return
  }

  const w = window as Window & { dataLayer?: unknown[] }
  w.dataLayer = w.dataLayer || []
  // gtag.js prepoznaje samo `arguments` objekt, ne običan niz.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments)
  }
  gtag('event', name, params)
}
