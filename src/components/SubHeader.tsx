'use client'
import Link from 'next/link'
import { useSite } from './SiteProvider'
import QuoteModal from './QuoteModal'
import type { Lang } from '../lib/i18n'
import styles from './SubHeader.module.css'

/**
 * Traka na vrhu podstranica (impressum, privatnost, česta pitanja).
 * Ima iste pozive na akciju kao glavna navigacija (poziv, zatraži ponudu) —
 * bez obzira gdje je posjetitelj u sadržaju, mora moći nazvati ili ispuniti
 * formu. Modal za ponudu je ovdje jer ga homepage inače ne montira na
 * podstranicama.
 */
export default function SubHeader() {
  const { lang, setLang, t, openQuote } = useSite()

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          ILAN
        </Link>

        <div className={styles.right}>
          <div className={styles.langs} role="group" aria-label="Jezik / Language">
            {(['hr', 'en'] as Lang[]).map((code) => (
              <button
                key={code}
                type="button"
                className={`${styles.lang} ${lang === code ? styles.langActive : ''}`}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button type="button" className={styles.cta} onClick={openQuote}>
            {t.nav.cta}
          </button>

          <a
            href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
            className={styles.phone}
            aria-label={`${t.nav.call} — ${t.contact.phone}`}
          >
            {/* Puna silueta slušalice, ista koju koriste telefonski programi na
                mobitelima. Obrisna se na 20 px raspadne u tanke crte. */}
            <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
              <g className={styles.zvoni}>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </g>
            </svg>
          </a>
        </div>
      </header>

      <QuoteModal />
    </>
  )
}
