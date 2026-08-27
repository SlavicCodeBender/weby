'use client'
import Link from 'next/link'
import { useSite } from './SiteProvider'
import Footer from './Footer'
import type { LegalDokument } from '../lib/legal'
import type { Lang } from '../lib/i18n'
import styles from './LegalPage.module.css'

export default function LegalPage({ dokument }: { dokument: Record<Lang, LegalDokument> }) {
  const { lang, setLang } = useSite()
  const d = dokument[lang]

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
          <Link href="/" className={styles.back}>
            {lang === 'hr' ? 'Natrag na stranicu' : 'Back to the site'}
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <h1>{d.naslov}</h1>
        <p className={styles.uvod}>{d.uvod}</p>

        {d.odjeljci.map((odjeljak) => (
          <section key={odjeljak.naslov} className={styles.odjeljak}>
            <h2>{odjeljak.naslov}</h2>

            {odjeljak.odlomci?.map((tekst) => (
              <p key={tekst}>{tekst}</p>
            ))}

            {odjeljak.redci && (
              <dl className={styles.redci}>
                {odjeljak.redci.map((r) => (
                  <div key={r.oznaka} className={styles.redak}>
                    <dt>{r.oznaka}</dt>
                    <dd className={r.vrijednost.startsWith('(') ? styles.dopuniti : undefined}>
                      {r.vrijednost}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {odjeljak.natuknice && (
              <ul className={styles.natuknice}>
                {odjeljak.natuknice.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>

      <Footer />
    </>
  )
}
