'use client'
import { useEffect, useId, useState } from 'react'
import { useSite } from './SiteProvider'
import { SITE_URL, TVRTKA } from '../lib/site'
import { trackEvent } from '../lib/analytics'
import styles from './QuoteForm.module.css'

type Status = 'idle' | 'sending' | 'failed'
type Errors = Partial<Record<'name' | 'reach' | 'service' | 'consent', string>>

const FORMSUBMIT_URL = `https://formsubmit.co/${TVRTKA.email}`
const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${TVRTKA.email}`

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}

function isPhone(value: string): boolean {
  return /^\+?\d{6,15}$/.test(value.replace(/[\s\-/().]/g, ''))
}

/**
 * Brzi upit — ista forma se koristi u skočnom prozoru i u odjeljku Kontakt.
 *
 * Šalje se u pozadini na FormSubmitov AJAX endpoint i provjerava njegov
 * odgovor. Ako FormSubmit odbije upit (npr. obrazac treba ponovnu aktivaciju
 * nakon promjene domene), posjetitelj vidi poruku s telefonom i mailom umjesto
 * FormSubmitove stranice, a u Analytics ide događaj `upit_greska`.
 * Uspjeh vodi na /hvala. `action` ostaje samo kao rezerva bez JavaScripta.
 */
export default function QuoteForm() {
  const { t } = useSite()
  const uid = useId()

  const [name, setName] = useState('')
  const [reach, setReach] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  // Povratak tipkom "natrag" vraća stranicu iz cachea s gumbom u stanju "Šaljem…".
  useEffect(() => {
    function onPageShow(e: PageTransitionEvent) {
      if (e.persisted) setStatus('idle')
    }
    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [])

  const reachTrimmed = reach.trim()
  const reachIsEmail = isEmail(reachTrimmed)

  function validate(): Errors {
    const next: Errors = {}
    if (!name.trim()) next.name = t.form.errors.name
    if (!reachTrimmed) next.reach = t.form.errors.reach
    else if (!reachIsEmail && !isPhone(reachTrimmed)) next.reach = t.form.errors.reachInvalid
    if (!service) next.service = t.form.errors.service
    if (!consent) next.consent = t.form.errors.consent
    return next
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')
    const payload = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch(FORMSUBMIT_AJAX_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = (await res.json().catch(() => ({}))) as { success?: unknown; message?: unknown }

      if (res.ok && String(data.success) === 'true') {
        window.location.assign('/hvala')
        return
      }
      trackEvent('upit_greska', { razlog: String(data.message ?? `HTTP ${res.status}`).slice(0, 100) })
    } catch {
      trackEvent('upit_greska', { razlog: 'mreza' })
    }
    setStatus('failed')
  }

  return (
    <form className={styles.form} action={FORMSUBMIT_URL} method="POST" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="_next" value={`${SITE_URL}/hvala`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value={`Upit sa stranice — ${service || 'bez odabrane usluge'}`} />
      {reachIsEmail && <input type="hidden" name="_replyto" value={reachTrimmed} />}
      {/* Zamka za robote: ljudi ovo polje ne vide, a FormSubmit odbacuje upit ako je popunjeno. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

      <div className={styles.group}>
        <label htmlFor={`${uid}-name`}>{t.form.name}</label>
        <input
          id={`${uid}-name`}
          type="text"
          value={name}
          name="Ime i Prezime"
          placeholder={t.form.namePh}
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${uid}-name-err` : undefined}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && (
          <span className={styles.error} id={`${uid}-name-err`}>
            {errors.name}
          </span>
        )}
      </div>

      <div className={styles.group}>
        <label htmlFor={`${uid}-reach`}>{t.form.reach}</label>
        <input
          id={`${uid}-reach`}
          type="text"
          value={reach}
          name="Email ili broj telefona"
          placeholder={t.form.reachPh}
          autoComplete="tel"
          aria-invalid={!!errors.reach}
          aria-describedby={errors.reach ? `${uid}-reach-err` : undefined}
          onChange={(e) => setReach(e.target.value)}
          required
        />
        {errors.reach && (
          <span className={styles.error} id={`${uid}-reach-err`}>
            {errors.reach}
          </span>
        )}
      </div>

      <div className={styles.group}>
        <label htmlFor={`${uid}-service`}>{t.form.service}</label>
        <select
          id={`${uid}-service`}
          value={service}
          name="Trebaju"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? `${uid}-service-err` : undefined}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">{t.form.servicePh}</option>
          {t.form.serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service && (
          <span className={styles.error} id={`${uid}-service-err`}>
            {errors.service}
          </span>
        )}
      </div>

      <div className={styles.group}>
        <label htmlFor={`${uid}-message`}>
          {t.form.message} <span className={styles.optional}>({t.form.messageOptional})</span>
        </label>
        <textarea
          id={`${uid}-message`}
          value={message}
          name="Poruka"
          placeholder={t.form.messagePh}
          rows={3}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className={styles.consentRow}>
        <input
          id={`${uid}-consent`}
          type="checkbox"
          checked={consent}
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? `${uid}-consent-err` : undefined}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <label htmlFor={`${uid}-consent`}>{t.form.consent}</label>
      </div>
      {errors.consent && (
        <span className={styles.error} id={`${uid}-consent-err`}>
          {errors.consent}
        </span>
      )}

      {status === 'failed' && (
        <p className={styles.sendError} role="alert">
          {t.form.errorText}{' '}
          {t.contact.phone && (
            <>
              <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`}>{t.contact.phone}</a>
              {' · '}
            </>
          )}
          <a href={`mailto:${TVRTKA.email}`}>{TVRTKA.email}</a>
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? t.form.sending : t.form.submit}
      </button>
    </form>
  )
}
