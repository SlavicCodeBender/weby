'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useSite } from './SiteProvider'
import type { Lang } from '../lib/i18n'
import styles from './Navbar.module.css'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'hr', label: 'HR' },
  { code: 'en', label: 'EN' },
]

export default function Navbar() {
  const { t, lang, setLang, openQuote } = useSite()
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  /* Isti obrazac kao QuoteModal: zaključa scroll iza sebe, zatvara na Escape
     i vraća fokus na gumb koji ga je otvorio. */
  useEffect(() => {
    if (!open) return

    lastFocused.current = document.activeElement as HTMLElement | null
    panelRef.current?.focus()

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      lastFocused.current?.focus()
    }
  }, [open])

  const izbornik = lang === 'hr' ? 'Izbornik' : 'Menu'
  const zatvoriIzbornik = lang === 'hr' ? 'Zatvori izbornik' : 'Close menu'

  return (
    <>
      <nav className={styles.nav}>
        <button
          type="button"
          className={styles.burger}
          aria-label={izbornik}
          aria-expanded={open}
          aria-controls="mobilni-izbornik"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>

        <a href="#top" className={styles.logo}>
          ILAN
        </a>

        <ul className={styles.links}>
          <li>
            <a href="#services">{t.nav.services}</a>
          </li>
          <li>
            <a href="#gallery">{t.nav.gallery}</a>
          </li>
          <li>
            <a href="#contact">{t.nav.contact}</a>
          </li>
          <li>
            <Link href="/o-nama">{t.nav.about}</Link>
          </li>
        </ul>

        <div className={styles.right}>
          <div className={styles.langs} role="group" aria-label="Jezik / Language">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                className={`${styles.lang} ${lang === code ? styles.langActive : ''}`}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {label}
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
      </nav>

      {/* Mobilni izbornik: uvijek u DOM-u (radi klizne animacije), samo se
          pomiče izvan ekrana kad je zatvoren. Iznad njega isti overlay obrazac
          kao kod QuoteModala. */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobilni-izbornik"
        ref={panelRef}
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={izbornik}
        aria-hidden={!open}
        tabIndex={-1}
      >
        <button
          type="button"
          className={styles.close}
          onClick={() => setOpen(false)}
          aria-label={zatvoriIzbornik}
        >
          <svg viewBox="0 0 20 20" width={22} height={22} fill="none" aria-hidden="true">
            <path
              d="M5 5 L15 15 M15 5 L5 15"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <ul className={styles.drawerLinks}>
          <li>
            <a href="#services" onClick={() => setOpen(false)}>
              {t.nav.services}
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setOpen(false)}>
              {t.nav.gallery}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              {t.nav.contact}
            </a>
          </li>
          <li>
            <Link href="/o-nama" onClick={() => setOpen(false)}>
              {t.nav.about}
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
