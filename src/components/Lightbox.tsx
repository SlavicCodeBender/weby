'use client'
import { useEffect, useRef } from 'react'
import { useSite } from './SiteProvider'
import styles from './Lightbox.module.css'

export default function Lightbox({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  counter,
}: {
  src: string
  alt: string
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
  prevLabel?: string
  nextLabel?: string
  counter?: string
}) {
  const { t } = useSite()
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }
  function onTouchMove(e: React.TouchEvent) {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  function onTouchEnd() {
    if (Math.abs(touchDeltaX.current) > 40) {
      if (touchDeltaX.current < 0) onNext?.()
      else onPrev?.()
    }
  }

  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      lastFocused.current?.focus()
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button type="button" ref={closeRef} className={styles.close} onClick={onClose} aria-label={t.form.close}>
        <svg viewBox="0 0 20 20" width={22} height={22} fill="none" aria-hidden="true">
          <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {onPrev && (
        <button
          type="button"
          className={`${styles.nav} ${styles.prev}`}
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label={prevLabel}
        >
          <svg viewBox="0 0 20 20" width={20} height={20} fill="none" aria-hidden="true">
            <path d="M12 4 L6 10 L12 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element -- prirodna veličina umjesto next/image "fill" jer klik izvan stvarnih piksela slike mora zatvoriti lightbox, a "fill" bi razvukao klikabilnu površinu preko cijelog okvira. */}
      <img src={src} alt={alt} className={styles.photo} onClick={(e) => e.stopPropagation()} />

      {onNext && (
        <button
          type="button"
          className={`${styles.nav} ${styles.next}`}
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label={nextLabel}
        >
          <svg viewBox="0 0 20 20" width={20} height={20} fill="none" aria-hidden="true">
            <path d="M8 4 L14 10 L8 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {counter && <div className={styles.counter}>{counter}</div>}
    </div>
  )
}
