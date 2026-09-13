'use client'
import { useSite } from './SiteProvider'
import SubHeader from './SubHeader'
import Footer from './Footer'
import BackFooter from './BackFooter'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  const { lang, t } = useSite()
  const natrag = lang === 'hr' ? 'Natrag na stranicu' : 'Back to the site'
  const [uvod, ...ostalo] = t.about.paragraphs

  return (
    <>
      <SubHeader />

      <main className={styles.main}>
        <p className={styles.eyebrow}>{t.about.eyebrow}</p>
        <h1>{t.about.title}</h1>
        <p className={styles.uvod}>{uvod}</p>

        <div className={styles.tijelo}>
          {ostalo.map((odlomak) => (
            <p key={odlomak}>{odlomak}</p>
          ))}
        </div>

        <div className={styles.panel}>
          <p className={styles.quote}>{t.about.quote}</p>

          <h2>{t.about.areaTitle}</h2>
          <ul>
            {t.about.area.map((mjesto) => (
              <li key={mjesto}>{mjesto}</li>
            ))}
          </ul>
        </div>

        <BackFooter href="/" label={natrag} />
      </main>

      <Footer />
    </>
  )
}
