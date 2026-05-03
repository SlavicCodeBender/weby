import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>ILAN</span>
      <p>© {new Date().getFullYear()} ILAN. Aluminium &amp; PVC Windows and Doors.</p>
      <p className={styles.location}>Zagreb, Croatia</p>
    </footer>
  )
}
