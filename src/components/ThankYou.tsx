'use client'
import { useSite } from './SiteProvider'
import SubHeader from './SubHeader'
import Footer from './Footer'
import styles from './ThankYou.module.css'

/**
 * Stranica na koju QuoteForm preusmjeri (`_next`) nakon uspješnog slanja.
 * Tekst i kvačica su isti oni koje je forma nekad prikazivala u sebi — samo
 * to stanje nikad nije bilo dohvatljivo jer POST na formsubmit.co uvijek
 * napusti stranicu prije nego se JS stanje stigne promijeniti.
 */
export default function ThankYou() {
  const { t } = useSite()

  return (
    <>
      <SubHeader />

      <main className={styles.main}>
        <div className={styles.tick} aria-hidden="true">
          <svg
            viewBox="0 0 64 64"
            width={58}
            height={58}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle className={styles.krug} cx="32" cy="32" r="29" />
            <path className={styles.kvacica} d="M20 33 L28.5 41.5 L44 24" />
          </svg>
        </div>

        <h1>{t.form.successTitle}</h1>
        <p className={styles.text}>{t.form.successText}</p>

        {t.contact.phone && (
          <p className={styles.hurry}>
            {t.form.hurry}{' '}
            <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`}>{t.contact.phone}</a>
          </p>
        )}
      </main>

      <Footer />
    </>
  )
}
