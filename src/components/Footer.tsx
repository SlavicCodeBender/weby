'use client'
import Link from 'next/link'
import { useSite } from './SiteProvider'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useSite()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <p className={styles.since}>{t.footer.since}</p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} ILAN. {t.footer.tagline}
        </p>
      </div>

      <nav className={styles.links}>
        <Link href="/faq">{t.footer.faqLink}</Link>
        <span aria-hidden="true">·</span>
        <Link href="/impressum">{t.footer.impressumLink}</Link>
        <span aria-hidden="true">·</span>
        <Link href="/privatnost">{t.footer.privacyLink}</Link>
      </nav>

      <p className={styles.legal}>{t.footer.legal}</p>
    </footer>
  )
}
