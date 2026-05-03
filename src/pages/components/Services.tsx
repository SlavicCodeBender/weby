import styles from './Services.module.css'

const services = [
  {
    title: 'Windows',
    desc: 'Single, double, and triple-glazed windows in aluminium or PVC profiles. Casement, tilt-and-turn, fixed, and more.',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
        <rect x="4" y="4" width="28" height="28" stroke="#2a5c45" strokeWidth="2.5" />
        <line x1="18" y1="4" x2="18" y2="32" stroke="#2a5c45" strokeWidth="2" />
        <line x1="4" y1="18" x2="32" y2="18" stroke="#2a5c45" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Doors',
    desc: 'Entrance, balcony, and interior doors — sliding, swing, and bi-fold options with a variety of glass and frame finishes.',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
        <rect x="6" y="2" width="24" height="32" stroke="#2a5c45" strokeWidth="2.5" />
        <circle cx="25" cy="18" r="2" fill="#2a5c45" />
        <line x1="6" y1="10" x2="30" y2="10" stroke="#2a5c45" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Facades & Glazing',
    desc: 'Curtain walls, shop fronts, winter gardens, and custom architectural glazing solutions for residential and commercial spaces.',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
        <rect x="2" y="8" width="32" height="20" stroke="#2a5c45" strokeWidth="2.5" />
        <line x1="2" y1="18" x2="34" y2="18" stroke="#2a5c45" strokeWidth="1.5" />
        <line x1="12" y1="8" x2="12" y2="28" stroke="#2a5c45" strokeWidth="1.5" />
        <line x1="24" y1="8" x2="24" y2="28" stroke="#2a5c45" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Roller Shutters & Blinds',
    desc: 'Interior and exterior roller shutters, venetian blinds, and sun protection systems integrated into your frames.',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
        <rect x="4" y="4" width="28" height="5" stroke="#2a5c45" strokeWidth="2" />
        <rect x="4" y="12" width="28" height="5" stroke="#2a5c45" strokeWidth="2" />
        <rect x="4" y="20" width="28" height="5" stroke="#2a5c45" strokeWidth="2" />
        <line x1="18" y1="28" x2="18" y2="34" stroke="#2a5c45" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Installation',
    desc: 'Professional on-site installation by experienced technicians. We handle everything from measurements to final sealing.',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
        <circle cx="18" cy="18" r="13" stroke="#2a5c45" strokeWidth="2.5" />
        <path d="M14 18 L17 21 L22 15" stroke="#2a5c45" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Repairs & Renovation',
    desc: 'Replacement of old wooden or steel frames, weatherstripping, hardware repairs, and energy efficiency upgrades.',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
        <path d="M6 30 L6 16 L18 6 L30 16 L30 30" stroke="#2a5c45" strokeWidth="2.5" fill="none" />
        <rect x="13" y="20" width="10" height="10" stroke="#2a5c45" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <p className={styles.eyebrow}>What we offer</p>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
