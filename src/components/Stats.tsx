'use client'
import { useSite } from './SiteProvider'
import styles from './Stats.module.css'

/** Razdvaja broj od znaka iza njega ('500+' → ['500', '+']), da znak može biti u boji. */
function split(num: string): [string, string] {
  const match = num.match(/^([\d\s.,]*)(.*)$/)
  return match ? [match[1], match[2]] : [num, '']
}

export default function Stats() {
  const { t } = useSite()

  return (
    <section className={styles.stats}>
      <h2 className={styles.title}>{t.stats.title}</h2>

      <div className={styles.row}>
        {t.stats.items.map((s) => {
          const [broj, znak] = split(s.num)
          return (
            <div key={s.label} className={styles.stat}>
              <div className={styles.num}>
                {broj}
                {znak && <span className={styles.accent}>{znak}</span>}
              </div>
              <div className={styles.label}>{s.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
