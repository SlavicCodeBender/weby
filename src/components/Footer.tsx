'use client'
import Link from 'next/link'
import { useSite } from './SiteProvider'
import styles from './Footer.module.css'

/**
 * Poveznice na društvene mreže.
 * Dok je vrijednost prazna, ikona se prikazuje ali nije klikabilna — da na
 * stranici ne stoji gumb koji nikamo ne vodi. Upiši adresu među navodnike
 * i ikona odmah postane prava poveznica.
 */
const FACEBOOK_URL = ''
const INSTAGRAM_URL = ''

const FacebookIkona = () => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.89 3.77-3.89 1.1 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
)

const InstagramIkona = () => (
  <svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" stroke="none" />
  </svg>
)

const MailIkona = () => (
  <svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    aria-hidden="true"
  >
    <rect x="2.75" y="5" width="18.5" height="14" rx="1.5" />
    <path d="M3.4 6.2 L12 12.6 L20.6 6.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/** Ikona koja postane poveznica tek kad adresa postoji. */
function Mreza({
  url,
  labela,
  children,
}: {
  url: string
  labela: string
  children: React.ReactNode
}) {
  if (!url) {
    return (
      <span className={`${styles.icon} ${styles.iconOff}`} aria-hidden="true">
        {children}
      </span>
    )
  }
  return (
    <a
      href={url}
      className={styles.icon}
      aria-label={labela}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  const { t } = useSite()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <p className={styles.since}>{t.footer.since}</p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} ILAN. {t.footer.tagline}
        </p>

        <div className={styles.social}>
          <Mreza url={FACEBOOK_URL} labela={t.footer.facebookLabel}>
            <FacebookIkona />
          </Mreza>

          <Mreza url={INSTAGRAM_URL} labela={t.footer.instagramLabel}>
            <InstagramIkona />
          </Mreza>

          <a
            href={`mailto:${t.contact.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`}
            className={styles.icon}
            aria-label={t.footer.emailLabel}
          >
            <MailIkona />
          </a>
        </div>
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
