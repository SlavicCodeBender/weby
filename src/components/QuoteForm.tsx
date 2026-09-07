'use client'
import { useId, useState } from 'react'
import { useSite } from './SiteProvider'
import { SITE_URL } from '../lib/site'
import styles from './QuoteForm.module.css'

type Status = 'idle' | 'sending' | 'error'
type Errors = Partial<Record<'name' | 'reach' | 'service' | 'consent', string>>

/**
 * Brzi upit — ista forma se koristi u skočnom prozoru i u odjeljku Kontakt.
 * `source` samo označava odakle je upit stigao, da se to vidi u mailu.
 *
 * Forma se šalje kao običan POST na formsubmit.co (bez AJAX-a), pa nakon
 * uspješnog slanja preglednik ode na `_next` adresu — stranicu /hvala na
 * ovoj domeni koja pokazuje potvrdu. Zato ovdje nema stanja 'success': do
 * njega se ionako nikad ne bi stiglo, jer stranica u međuvremenu napusti SPA.
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

  function validate(): Errors {
    const next: Errors = {}
    if (!name.trim()) next.name = t.form.errors.name
    if (!reach.trim()) next.reach = t.form.errors.reach
    if (!service) next.service = t.form.errors.service
    if (!consent) next.consent = t.form.errors.consent
    return next
  }

  async function handleSubmit(e: React.FormEvent) {
    const found = validate()

    if (Object.keys(found).length > 0) {
      e.preventDefault()
      setErrors(found)
      setStatus('error')
      return
    }

    setStatus('sending')

  }

  return (
    <form className={styles.form} action="https://formsubmit.co/ilan.leopold.ivesic@gmail.com" onSubmit={handleSubmit} method="POST">
      <input type="hidden" name="_next" value={`${SITE_URL}/hvala`} />
      <input type="hidden" name="_captcha" value="false" />
      <div className={styles.group}>
        <label htmlFor={`${uid}-name`}>{t.form.name}</label>
        <input
          id={`${uid}-name`}
          type="text"
          value={name}
          name='Ime i Prezime'
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
          name='Email ili broj telefona'
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
          name='Trebaju'
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
          name='Poruka'
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

      {status === 'error' && (
        <p className={styles.sendError} role="alert">
          {t.form.errorText}
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? t.form.sending : t.form.submit}
      </button>
    </form>
  )
}
