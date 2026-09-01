'use client'
import { useSite } from './SiteProvider'
import QuoteForm from './QuoteForm'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useSite()

  return (
    <section className={styles.section} id="contact">
      {/* Traka s pozivom na akciju */}
      <div className={styles.strip}>
        <div className={styles.stripText}>
          <h3>{t.contact.strip}</h3>
          <p className={styles.stripSub}>{t.contact.stripSub}</p>
        </div>
        <a href="#contact-form" className={styles.stripBtn}>
          {t.contact.stripBtn}
        </a>
      </div>

      <div className={styles.inner} id="contact-form">
        <div className={styles.info}>
          <p className={styles.eyebrow}>{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p className={styles.intro}>{t.contact.intro}</p>

          {/* Telefon se prikazuje tek kad je broj upisan u src/lib/i18n.ts */}
          {t.contact.phone && (
            <div className={styles.detail}>
              <span>{t.contact.phoneLabel}</span>
              <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`}>{t.contact.phone}</a>
            </div>
          )}
          <div className={styles.detail}>
            <span>{t.contact.emailLabel}</span>
            <a
              href={`mailto:${t.contact.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`}
            >
              {t.contact.email}
            </a>
          </div>
          <div className={styles.detail}>
            <span>{t.contact.locationLabel}</span>
            <span>{t.contact.location}</span>
          </div>
        </div>

        <div className={styles.formWrap}>
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
