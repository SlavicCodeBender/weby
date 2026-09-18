'use client'
import { useEffect, useRef, useState } from 'react'
import { useSite } from './SiteProvider'
import styles from './KalkulatorObavijest.module.css'

/**
 * Prijava za obavijest o kalkulatoru cijena — vlastiti prozorčić (isti
 * obrazac kao QuoteModal), ne Mailchimpov "Popup Forms" alat. Taj alat nema
 * opciju "pokreni na klik", samo automatske okidače (vrijeme, exit intent),
 * pa smo umjesto toga napravili vlastitu formu koja šalje izravno na
 * Mailchimpov "classic" endpoint — isti Audience, samo bez njihovog
 * automatskog prikaza.
 *
 * VAŽNO: forma i poruka zahvale oboje ostaju u DOM-u cijelo vrijeme, samo se
 * sakriva jedno ili drugo (`hidden`). Ako se forma ukloni iz DOM-a unutar
 * `onSubmit` (npr. uvjetnim renderiranjem), preglednik zna otkazati stvarno
 * slanje jer forma "nije više spojena" prije nego stigne poslati zahtjev —
 * to se stvarno dogodilo i tiho pokvarilo prijavu bez ikakve greške na oko.
 */
export default function KalkulatorObavijest() {
  const { lang } = useSite()
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return

    lastFocused.current = document.activeElement as HTMLElement | null
    panelRef.current?.focus()

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      lastFocused.current?.focus()
    }
  }, [open])

  function closeAndReset() {
    setOpen(false)
    setSent(false)
  }

  const t =
    lang === 'hr'
      ? {
          boxNaslov: 'Obavijest kad kalkulator bude gotov',
          boxTekst: 'Prijavite se i javit ćemo vam se čim kalkulator bude gotov.',
          gumb: 'Javite mi kad bude gotovo',
          naslov: 'Prijava za obavijest',
          emailLabel: 'E-mail adresa',
          emailPh: 'ime@example.com',
          gdpr:
            'Vašu e-mail adresu koristimo prvenstveno da vas obavijestimo kada kalkulator bude online. Rijetko, i samo kad procijenimo da je stvarno korisno, možemo vam poslati i koji savjet ili ponudu vezanu uz PVC i ALU stolariju — ne šaljemo redovit newsletter ni čestu reklamnu poštu. Klikom na gumb pristajete na to. Odjaviti se možete besplatno u bilo kojem trenutku.',
          posalji: 'Prijavi me',
          zatvori: 'Zatvori',
          hvalaNaslov: 'Hvala!',
          hvalaTekst:
            'Vaša prijava je zaprimljena. Poslali smo vam mail s potvrdom — kliknite poveznicu u njemu da dovršite prijavu. Ako ga ne vidite odmah, provjerite i mapu neželjene pošte (spam). Odjaviti se možete u svakom trenutku istim mailom.',
        }
      : {
          boxNaslov: "Get notified when it's ready",
          boxTekst: "Sign up and we'll let you know as soon as the calculator is ready.",
          gumb: "Notify me when it's ready",
          naslov: 'Launch notification signup',
          emailLabel: 'Email address',
          emailPh: 'name@example.com',
          gdpr:
            "We use your email address mainly to let you know when the calculator is online. Rarely, and only when we think it's genuinely useful, we might also send a tip or offer about PVC and aluminium joinery — we don't send a regular newsletter or frequent promotional email. By clicking the button you agree to this. You can unsubscribe for free at any time.",
          posalji: 'Sign me up',
          zatvori: 'Close',
          hvalaNaslov: 'Thanks!',
          hvalaTekst:
            "Your signup has been received. We've sent you a confirmation email — click the link in it to complete your signup. If you don't see it right away, check your spam/junk folder too. You can unsubscribe at any time using that same email.",
        }

  return (
    <>
      <div className={styles.box}>
        <p className={styles.boxNaslov}>{t.boxNaslov}</p>
        <p className={styles.boxTekst}>{t.boxTekst}</p>
        <button type="button" className={styles.otvoriGumb} onClick={() => setOpen(true)}>
          {t.gumb}
        </button>
      </div>

      {open && (
        <div className={styles.backdrop} onClick={closeAndReset}>
          <div
            ref={panelRef}
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label={sent ? t.hvalaNaslov : t.naslov}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className={styles.close} onClick={closeAndReset} aria-label={t.zatvori}>
              <svg viewBox="0 0 20 20" width={20} height={20} fill="none" aria-hidden="true">
                <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <div className={styles.hvala} hidden={!sent}>
              <h2 className={styles.naslov}>{t.hvalaNaslov}</h2>
              <p>{t.hvalaTekst}</p>
            </div>

            <div hidden={sent}>
              <h2 className={styles.naslov}>{t.naslov}</h2>

              <form
                className={styles.form}
                action="https://ilanprozori.us15.list-manage.com/subscribe/post?u=27618132505d7ef241008a067&id=e66b261cd1&f_id=0049a7e1f0"
                method="post"
                target="_blank"
                onSubmit={() => {
                  // Odgoda je namjerna — vidi napomenu na vrhu datoteke.
                  // Bez nje preglednik zna otkazati stvarno slanje jer bi
                  // React sakrio formu prebrzo, prije nego zahtjev krene.
                  setTimeout(() => setSent(true), 300)
                }}
              >
                <div className={styles.group}>
                  <label htmlFor="mce-EMAIL">{t.emailLabel}</label>
                  <input type="email" name="EMAIL" id="mce-EMAIL" placeholder={t.emailPh} required />
                </div>

                {/* Zamka za robote — Mailchimpov honeypot, mora ostati prazan. */}
                <div aria-hidden="true" className={styles.trap}>
                  <input
                    type="text"
                    name="b_27618132505d7ef241008a067_e66b261cd1"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>

                <div className={styles.consentRow}>
                  <input type="checkbox" id="gdpr_85778" name="gdpr[85778]" value="Y" required />
                  <label htmlFor="gdpr_85778">{t.gdpr}</label>
                </div>

                <button type="submit" className={styles.submit}>
                  {t.posalji}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
