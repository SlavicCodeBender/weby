'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: wire up to your email service (e.g. Resend, Nodemailer, Formspree)
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="contact">
      {/* CTA strip */}
      <div className={styles.strip}>
        <h3>Ready to upgrade your windows or doors?</h3>
        <a href="#contact-form" className={styles.stripBtn}>Get a free quote</a>
      </div>

      {/* Contact content */}
      <div className={styles.inner} id="contact-form">
        <div className={styles.info}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2>Let&apos;s talk about your project</h2>
          <p className={styles.intro}>
            We&apos;d love to hear about your project. Reach out and we&apos;ll
            get back to you with a free consultation and quote.
          </p>

          <div className={styles.detail}>
            <span>Phone</span>
            {/* TODO: replace with your real phone number */}
            <span>+385 XX XXX XXXX</span>
          </div>
          <div className={styles.detail}>
            <span>Email</span>
            {/* TODO: replace with your real email */}
            <span>info@ilan.hr</span>
          </div>
          <div className={styles.detail}>
            <span>Location</span>
            <span>Zagreb, Croatia</span>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {submitted ? (
            <div className={styles.success}>
              <p>Thanks! We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label htmlFor="fname">First name</label>
                  <input id="fname" type="text" placeholder="Ivan" required />
                </div>
                <div className={styles.group}>
                  <label htmlFor="lname">Last name</label>
                  <input id="lname" type="text" placeholder="Horvat" required />
                </div>
              </div>
              <div className={styles.group}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="ivan@example.com" required />
              </div>
              <div className={styles.group}>
                <label htmlFor="service">Service</label>
                <select id="service" required>
                  <option value="">Select a service…</option>
                  <option>Windows</option>
                  <option>Doors</option>
                  <option>Facade / Glazing</option>
                  <option>Roller Shutters</option>
                  <option>Installation</option>
                  <option>Repair / Renovation</option>
                </select>
              </div>
              <div className={styles.group}>
                <label htmlFor="msg">Message</label>
                <textarea id="msg" placeholder="Tell us about your project…" required />
              </div>
              <button type="submit" className={styles.submit}>Send message →</button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
