'use client'
import Image from 'next/image'
import { useSite } from './SiteProvider'
import styles from './Gallery.module.css'

/**
 * Plohe stoje umjesto fotografija dok ih ne bude.
 * Kad stignu prave slike, ovaj niz se briše, a <div className={styles.thumb}>
 * dobiva <Image> iz next/image.
 */

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
              <Image
                src={item.image}
                alt={item.image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.grid_photo}
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
