'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useSite } from './SiteProvider'
import Lightbox from './Lightbox'
import styles from './Gallery.module.css'

/**
 * Plohe stoje umjesto fotografija dok ih ne bude.
 * Kad stignu prave slike, ovaj niz se briše, a <div className={styles.thumb}>
 * dobiva <Image> iz next/image.
 */

export default function Gallery() {
  const { t } = useSite()
  const [otvorena, setOtvorena] = useState<number | null>(null)

  return (
    <section className={styles.section} id="gallery">
      <p className={styles.eyebrow}>{t.gallery.eyebrow}</p>
      <h2>{t.gallery.title}</h2>

      <div className={styles.grid}>
        {t.gallery.items.map((item, i) => (
          <figure key={item.title} className={styles.item}>
            <button type="button" className={styles.thumb} onClick={() => setOtvorena(i)}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.grid_photo}
              />
            </button>
            <figcaption className={styles.caption}>
              <h3>{item.title}</h3>
              <p>{item.meta}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {otvorena !== null && (
        <Lightbox
          src={t.gallery.items[otvorena].image}
          alt={t.gallery.items[otvorena].title}
          onClose={() => setOtvorena(null)}
        />
      )}
    </section>
  )
}
