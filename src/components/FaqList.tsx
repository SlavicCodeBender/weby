'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useSite } from './SiteProvider'
import SubHeader from './SubHeader'
import Footer from './Footer'
import { faqClanci } from '../lib/faq'
import styles from './FaqList.module.css'

/** Popis svih članaka. Redak bez slike izgleda isto, samo bez sličice. */
export default function FaqList() {
  const { lang, t } = useSite()
  const clanci = faqClanci[lang]

  return (
    <>
      <SubHeader />

      <main className={styles.main}>
        <p className={styles.eyebrow}>{t.faq.eyebrow}</p>
        <h1>{t.faq.title}</h1>
        <p className={styles.uvod}>{t.faq.intro}</p>

        <ul className={styles.popis}>
          {clanci.map((clanak) => (
            <li key={clanak.slug}>
              <Link href={`/faq/${clanak.slug}`} className={styles.veza}>
                {clanak.slika && (
                  <span className={styles.slika}>
                    <Image
                      src={clanak.slika}
                      alt={clanak.slikaOpis}
                      fill
                      sizes="200px"
                      className={styles.foto}
                    />
                  </span>
                )}

                <span className={styles.tekst}>
                  <span className={styles.naslov}>{clanak.naslov}</span>
                  <span className={styles.sazetak}>{clanak.sazetak}</span>
                  <span className={styles.vise}>{t.faq.readMore}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  )
}
