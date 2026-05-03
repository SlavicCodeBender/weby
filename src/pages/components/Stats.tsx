import styles from './Stats.module.css'

const stats = [
  { num: '10+', label: 'Years of experience' },
  { num: '500+', label: 'Projects completed' },
  { num: '100%', label: 'Custom made & installed' },
]

export default function Stats() {
  return (
    <div className={styles.stats}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <div className={styles.num}>{s.num}</div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
