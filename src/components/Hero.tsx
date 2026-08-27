'use client'
import Image from 'next/image'
import { useSite } from './SiteProvider'
import styles from './Hero.module.css'

export default function Hero() {
  const { t, openQuote } = useSite()

  return (
    <section className={styles.hero} id="top">
      <div className={styles.text}>
        <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p className={styles.sub}>{t.hero.sub}</p>
        <button type="button" className={styles.btn} onClick={openQuote}>
          {t.hero.btn}
        </button>
      </div>

      <div className={styles.visual}>
        <Image
          src="/naslovna.jpg"
          alt={t.hero.photoAlt}
          fill
          priority
          /* Uspravan izrez iz vodoravne slike traži puno širu datoteku nego što
             je sam okvir, inače je Next pošalje premalu i slika je mutna. */
          sizes="100vw"
          className={styles.photo}
        />
      </div>
    </section>
  )
}
