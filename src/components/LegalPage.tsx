'use client'
import { useSite } from './SiteProvider'
import SubHeader from './SubHeader'
import Footer from './Footer'
import type { LegalDokument } from '../lib/legal'
import type { Lang } from '../lib/i18n'
import styles from './LegalPage.module.css'

export default function LegalPage({ dokument }: { dokument: Record<Lang, LegalDokument> }) {
  const { lang } = useSite()
  const d = dokument[lang]

  return (
    <>
      <SubHeader />

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
