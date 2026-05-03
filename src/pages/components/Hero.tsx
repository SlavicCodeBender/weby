import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>Aluminium &amp; PVC specialists</p>
        <h1>Precision<br />Windows<br />&amp; Doors</h1>
        <p className={styles.sub}>
          Custom-made aluminium and PVC windows, doors, and facades —
          designed, manufactured, and installed with care.
        </p>
        <a href="#contact" className={styles.btn}>Request a quote</a>
      </div>

      <div className={styles.visual}>
        <div className={styles.windowIllustration}>
          <div className={styles.frame} />
          <div className={styles.hBar} />
          <div className={styles.vBar} />
          <div className={`${styles.glass} ${styles.tl}`} />
          <div className={`${styles.glass} ${styles.tr}`} />
          <div className={`${styles.glass} ${styles.bl}`} />
          <div className={`${styles.glass} ${styles.br}`} />
          <div className={styles.handle} />
        </div>
        <span className={styles.label}>Est. ILAN Co.</span>
      </div>
    </section>
  )
}
