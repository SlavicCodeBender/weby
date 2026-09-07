'use client'
import { useEffect, useRef } from 'react'
import { useSite } from './SiteProvider'
import styles from './Lightbox.module.css'

export default function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string
  alt: string
  onClose: () => void
}) {
  const { t } = useSite()
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      lastFocused.current?.focus()
    }
  }, [onClose])

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <button type="button" ref={closeRef} className={styles.close} onClick={onClose} aria-label={t.form.close}>
        <svg viewBox="0 0 20 20" width={22} height={22} fill="none" aria-hidden="true">
          <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element -- prirodna veličina umjesto next/image "fill" jer klik izvan stvarnih piksela slike mora zatvoriti lightbox, a "fill" bi razvukao klikabilnu površinu preko cijelog okvira. */}
      <img src={src} alt={alt} className={styles.photo} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
