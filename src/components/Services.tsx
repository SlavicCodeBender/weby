'use client'
import { useSite } from './SiteProvider'
import styles from './Services.module.css'

/** Ikone su vezane uz redoslijed usluga u rječniku (src/lib/i18n.ts). */
const icons = [
  <svg key="windows" viewBox="0 0 36 36" fill="none" width={36} height={36} aria-hidden="true">
    <rect x="4" y="4" width="28" height="28" stroke="currentColor" strokeWidth="2.5" />
    <line x1="18" y1="4" x2="18" y2="32" stroke="currentColor" strokeWidth="2" />
    <line x1="4" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="2" />
  </svg>,
  <svg key="doors" viewBox="0 0 36 36" fill="none" width={36} height={36} aria-hidden="true">
    <rect x="6" y="2" width="24" height="32" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="25" cy="18" r="2" fill="currentColor" />
    <line x1="6" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  /* Nadstrešnica prislonjena uz kuću: krov, zidovi, pa kosi pokrov sa stupom. */
  <svg
    key="canopies"
    viewBox="0 0 36 36"
    fill="none"
    width={36}
    height={36}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 17 L13 8 L23 17" strokeWidth="2.5" />
    <path d="M5 17 L5 31 L21 31 L21 17" strokeWidth="2.5" />
    <path d="M21 21 L33 25" strokeWidth="2.2" />
    <line x1="32" y1="25" x2="32" y2="31" strokeWidth="1.8" />
  </svg>,
  <svg key="shutters" viewBox="0 0 36 36" fill="none" width={36} height={36} aria-hidden="true">
    <rect x="4" y="4" width="28" height="5" stroke="currentColor" strokeWidth="2" />
    <rect x="4" y="12" width="28" height="5" stroke="currentColor" strokeWidth="2" />
    <rect x="4" y="20" width="28" height="5" stroke="currentColor" strokeWidth="2" />
    <line x1="18" y1="28" x2="18" y2="34" stroke="currentColor" strokeWidth="2" />
  </svg>,
  <svg key="screens" viewBox="0 0 36 36" fill="none" width={36} height={36} aria-hidden="true">
    <rect x="5" y="5" width="26" height="26" stroke="currentColor" strokeWidth="2.5" />
    <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.7">
      <line x1="11.5" y1="5" x2="11.5" y2="31" />
      <line x1="18" y1="5" x2="18" y2="31" />
      <line x1="24.5" y1="5" x2="24.5" y2="31" />
      <line x1="5" y1="11.5" x2="31" y2="11.5" />
      <line x1="5" y1="18" x2="31" y2="18" />
      <line x1="5" y1="24.5" x2="31" y2="24.5" />
    </g>
  </svg>,
  <svg key="installation" viewBox="0 0 36 36" fill="none" width={36} height={36} aria-hidden="true">
    <rect x="5" y="6" width="26" height="24" stroke="currentColor" strokeWidth="2.5" />
    <path
      d="M11 18 L16 23 L25 13"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
]

export default function Services() {
  const { t } = useSite()

  return (
    <section className={styles.section} id="services">
      <p className={styles.eyebrow}>{t.services.eyebrow}</p>
      <h2>{t.services.title}</h2>
      <div className={styles.grid}>
        {t.services.items.map((s, i) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.icon}>{icons[i]}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
