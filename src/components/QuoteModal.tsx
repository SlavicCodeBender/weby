'use client'
import { useEffect, useId, useRef } from 'react'
import { useSite } from './SiteProvider'
import QuoteForm from './QuoteForm'
import styles from './QuoteModal.module.css'

export default function QuoteModal() {
  const { t, quoteOpen, closeQuote } = useSite()
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!quoteOpen) return

    lastFocused.current = document.activeElement as HTMLElement | null
    panelRef.current?.focus()

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeQuote()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      lastFocused.current?.focus()
    }
  }, [quoteOpen, closeQuote])

  if (!quoteOpen) return null

  return (
    <div className={styles.backdrop} onClick={closeQuote}>
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={closeQuote} aria-label={t.form.close}>
          <svg viewBox="0 0 20 20" width={20} height={20} fill="none" aria-hidden="true">
            <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <p className={styles.eyebrow}>{t.nav.cta}</p>
        <h2 className={styles.title} id={titleId}>
          {t.form.title}
        </h2>
        <p className={styles.subtitle}>{t.form.subtitle}</p>

        <QuoteForm />
      </div>
    </div>
  )
}
