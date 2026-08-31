/**
 * Strelica ulijevo za poveznice „natrag".
 * Boju i debljinu preuzima od teksta uz sebe, pa se ne mora nigdje podešavati.
 */
export default function Strelica({ velicina = 18 }: { velicina?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={velicina}
      height={velicina}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="M11 6 L5 12 L11 18" />
    </svg>
  )
}

/** Ista strelica, okrenuta prema gore — za povratak na vrh članka. */
export function StrelicaGore({ velicina = 15 }: { velicina?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={velicina}
      height={velicina}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5" />
      <path d="M6 11 L12 5 L18 11" />
    </svg>
  )
}
