'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useSite } from './SiteProvider'
import Lightbox from './Lightbox'
import styles from './Gallery.module.css'

/** Koliko pločica stane u jedan red — uvijek točno jedan red, na svakoj širini. */
function itemsPerRowFor(width: number) {
  if (width <= 640) return 2
  if (width <= 1000) return 2
  return 3
}

export default function Gallery() {
  const { t } = useSite()
  const [page, setPage] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [itemsPerRow, setItemsPerRow] = useState(3)

  useEffect(() => {
    function update() {
      setItemsPerRow(itemsPerRowFor(window.innerWidth))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const visible = t.gallery.items
  const pages = useMemo(() => {
    const chunks: (typeof visible)[] = []
    for (let i = 0; i < visible.length; i += itemsPerRow) chunks.push(visible.slice(i, i + itemsPerRow))
    return chunks
  }, [visible, itemsPerRow])

  useEffect(() => {
    setPage(0)
  }, [itemsPerRow])

  const pageCount = pages.length
  const clampedPage = Math.min(page, Math.max(pageCount - 1, 0))

  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)
  const swiped = useRef(false)

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
    swiped.current = false
  }
  function onTouchMove(e: React.TouchEvent) {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
    if (Math.abs(touchDeltaX.current) > 10) swiped.current = true
  }
  function onTouchEnd() {
    if (Math.abs(touchDeltaX.current) > 40) {
      if (touchDeltaX.current < 0) setPage((p) => Math.min(pageCount - 1, p + 1))
      else setPage((p) => Math.max(0, p - 1))
    }
  }
  function onTileClick(i: number) {
    if (swiped.current) return
    setOpenIndex(i)
  }

  return (
    <section className={styles.section} id="gallery">
      <p className={styles.eyebrow}>{t.gallery.eyebrow}</p>
      <h2>{t.gallery.title}</h2>

      <div
        className={styles.trackWrap}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles.track} style={{ transform: `translateX(-${clampedPage * 100}%)` }}>
          {pages.map((pageItems, pi) => (
            <div className={styles.page} key={pi} style={{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }}>
              {pageItems.map((item) => {
                const i = visible.indexOf(item)
                return (
                  <button type="button" key={item.image} className={styles.tile} onClick={() => onTileClick(i)}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1000px) 50vw, 33vw"
                      className={styles.photo}
                    />
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {pageCount > 1 && (
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navBtn}
            disabled={clampedPage === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            aria-label={t.gallery.prevPage}
          >
            <svg viewBox="0 0 20 20" width={14} height={14} fill="none" aria-hidden="true">
              <path d="M12 4 L6 10 L12 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className={styles.dots}>
            {pages.map((_, pi) => (
              <button
                key={pi}
                type="button"
                className={`${styles.dot} ${pi === clampedPage ? styles.dotActive : ''}`}
                onClick={() => setPage(pi)}
                aria-label={`${t.gallery.pageWord} ${pi + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.navBtn}
            disabled={clampedPage >= pageCount - 1}
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            aria-label={t.gallery.nextPage}
          >
            <svg viewBox="0 0 20 20" width={14} height={14} fill="none" aria-hidden="true">
              <path d="M8 4 L14 10 L8 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {openIndex !== null && visible[openIndex] && (
        <Lightbox
          src={visible[openIndex].image}
          alt={visible[openIndex].alt}
          onClose={() => setOpenIndex(null)}
          onPrev={() => setOpenIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length))}
          onNext={() => setOpenIndex((i) => (i === null ? null : (i + 1) % visible.length))}
          prevLabel={t.gallery.prevPhoto}
          nextLabel={t.gallery.nextPhoto}
          counter={`${openIndex + 1} / ${visible.length}`}
        />
      )}
    </section>
  )
}
