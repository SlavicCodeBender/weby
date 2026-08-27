'use client'
import { useSite } from './SiteProvider'
import styles from './Gallery.module.css'

/**
 * Plohe stoje umjesto fotografija dok ih ne bude.
 * Kad stignu prave slike, ovaj niz se briše, a <div className={styles.thumb}>
 * dobiva <Image> iz next/image.
 */
const plohe = [
  'linear-gradient(135deg, #7e97a6 0%, #bed0d8 100%)',
  'linear-gradient(140deg, #aba49a 0%, #d6d0c4 100%)',
  'linear-gradient(160deg, #6f8996 0%, #a9bcc4 100%)',
  'linear-gradient(135deg, #8fa096 0%, #c4cfc7 100%)',
  'linear-gradient(150deg, #8b93a3 0%, #c2c8d2 100%)',
  'linear-gradient(125deg, #9c948a 0%, #cdc6ba 100%)',
]

export default function Gallery() {
  const { t } = useSite()

  return (
    <section className={styles.section} id="gallery">
      <p className={styles.eyebrow}>{t.gallery.eyebrow}</p>
      <h2>{t.gallery.title}</h2>

      <div className={styles.grid}>
        {t.gallery.items.map((item, i) => (
          <figure key={item.title} className={styles.item}>
            <div className={styles.thumb}>
              <div
                className={styles.placeholder}
                style={{ background: plohe[i % plohe.length] }}
              />
            </div>
            <figcaption className={styles.caption}>
              <h3>{item.title}</h3>
              <p>{item.meta}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
