import Link from 'next/link'
import Strelica, { StrelicaGore } from './Strelica'
import styles from './BackFooter.module.css'

/**
 * Poveznica "natrag" na dnu sadržaja podstranice (i "na vrh" kad je zadan
 * toTopId). Ne ide u header — poziv i ponuda ostaju uvijek dostupni u
 * <SubHeader>, pa se ovo brine samo za povratak kroz stranicu.
 */
export default function BackFooter({
  href,
  label,
  toTopId,
  toTopLabel,
}: {
  href: string
  label: string
  toTopId?: string
  toTopLabel?: string
}) {
  return (
    <div className={styles.podnozje}>
      <Link href={href} className={styles.natrag}>
        <Strelica velicina={16} />
        <span>{label}</span>
      </Link>

      {toTopId && toTopLabel && (
        <a href={`#${toTopId}`} className={styles.naVrh}>
          <StrelicaGore />
          <span>{toTopLabel}</span>
        </a>
      )}
    </div>
  )
}
