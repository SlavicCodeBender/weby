import styles from './Gallery.module.css'

// Replace these src values with your actual project photos
const items = [
  { label: 'Residential aluminium windows — 2023', span: true, bg: '#b8c5bd' },
  { label: 'Entrance door — PVC, 2024', span: false, bg: '#c8c2b5' },
  { label: 'Sliding terrace door — aluminium', span: false, bg: '#a8b5b0' },
  { label: 'Commercial facade glazing — 2024', span: false, bg: '#bfc4be' },
]

export default function Gallery() {
  return (
    <section className={styles.section} id="gallery">
      <p className={styles.eyebrow}>Our work</p>
      <h2>Selected Projects</h2>
      <div className={styles.grid}>
        {items.map((item) => (
          <div
            key={item.label}
            className={`${styles.item} ${item.span ? styles.span2 : ''}`}
            style={{ background: item.bg }}
          >
            {/* Replace the div below with <Image> from next/image once you have real photos */}
            <div className={styles.placeholder} />
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
