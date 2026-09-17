'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSite } from './SiteProvider'
import SubHeader from './SubHeader'
import Footer from './Footer'
import BackFooter from './BackFooter'
import KalkulatorObavijest from './KalkulatorObavijest'
import { faqClanci } from '../lib/faq'
import styles from './FaqArticle.module.css'

/** Jedan članak. Tekst se bira po jeziku, adresa (slug) je za oba ista. */
export default function FaqArticle({ slug }: { slug: string }) {
  const { lang, t } = useSite()
  const clanak = faqClanci[lang].find((c) => c.slug === slug)

  if (!clanak) return null

  return (
    <>
      <SubHeader />

      <main className={styles.main} id="vrh">
        <p className={styles.eyebrow}>{t.faq.eyebrow}</p>
        <h1>{clanak.naslov}</h1>
        <p className={styles.uvod}>{clanak.sazetak}</p>

        {clanak.slika && (
          <div className={styles.slika}>
            <Image
              src={clanak.slika}
              alt={clanak.slikaOpis}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 62rem"
              className={styles.foto}
            />
          </div>
        )}

        <div className={styles.tijelo}>
          {clanak.sadrzaj.map((odjeljak, i) => (
            <section
              key={odjeljak.naslov ?? i}
              /* Prvi odjeljak je izravan odgovor na pitanje, pa je krupniji. */
              className={i === 0 ? styles.odgovor : styles.odjeljak}
            >
              {odjeljak.naslov && <h2>{odjeljak.naslov}</h2>}

              {odjeljak.odlomci?.map((tekst) => (
                <p key={tekst}>{tekst}</p>
              ))}

              {odjeljak.natuknice && (
                <ul className={styles.natuknice}>
                  {odjeljak.natuknice.map((tekst) => (
                    <li key={tekst}>{tekst}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Samo na članku o kalkulatoru — prijava za obavijest o lansiranju. */}
        {clanak.slug === 'cijena-prozora-i-vrata' && <KalkulatorObavijest />}

        {clanak.povezano && (
          <div className={styles.povezano}>
            <h2>{lang === 'hr' ? 'Povezano' : 'Related'}</h2>
            <ul>
              {clanak.povezano.map((veza) => (
                <li key={veza.slug}>
                  <Link href={`/faq/${veza.slug}`}>{veza.tekst}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Nakon dugog članka vraća na početak teksta; klizanje je glatko
            jer je scroll-behavior postavljen u globals.css. */}
        <BackFooter href="/faq" label={t.faq.back} toTopId="vrh" toTopLabel={t.faq.toTop} />
      </main>

      <Footer />
    </>
  )
}
