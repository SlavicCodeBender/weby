'use client'
import Link from 'next/link'
import { useSite } from './SiteProvider'
import Strelica from './Strelica'
import type { Lang } from '../lib/i18n'
import styles from './SubHeader.module.css'

/**
 * Traka na vrhu podstranica (impressum, privatnost, česta pitanja).
 * Naslovnica ima svoju punu navigaciju u <Navbar>, ovo je njezina tiša inačica.
 */
export default function SubHeader({
  natragHref = '/',
  natragHr = 'Natrag na stranicu',
  natragEn = 'Back to the site',
}: {
  natragHref?: string
  natragHr?: string
  natragEn?: string
}) {
  const { lang, setLang } = useSite()
  const natrag = lang === 'hr' ? natragHr : natragEn

  return (
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
        <Link href={natragHref} className={styles.back} aria-label={natrag}>
          <Strelica />
          <span className={styles.backTekst}>{natrag}</span>
        </Link>
      </div>
    </header>
  )
}
