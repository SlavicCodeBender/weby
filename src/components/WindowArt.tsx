/**
 * Ilustracija prozora za naslovni dio.
 *
 * Nacrtana od nule za ovu stranicu — nije preuzeta fotografija ni tuđi crtež,
 * pa nema nikakvih pitanja oko autorskih prava. Sve su to obični SVG oblici
 * i prijelazi boja, tako da ostaje oštra na svakom zaslonu i teži par kilobajta.
 *
 * Prikazuje tipičnu alu/PVC stijenu: nadsvjetlo gore, dolje fiksno krilo lijevo
 * i otklopno-zaokretno krilo desno s ručkom.
 */
export default function WindowArt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 470"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Aluminijski profil — svjetlo prelazi preko zaobljenja */}
        <linearGradient id="wa-alu" x1="0" y1="0" x2="1" y2="0.2">
          <stop offset="0%" stopColor="#6d757a" />
          <stop offset="16%" stopColor="#aeb6bb" />
          <stop offset="40%" stopColor="#e2e7ea" />
          <stop offset="68%" stopColor="#98a0a5" />
          <stop offset="100%" stopColor="#6a7276" />
        </linearGradient>

        {/* Staklo — svjetlije pri vrhu, hladnije prema dnu */}
        <linearGradient id="wa-glass" x1="0.1" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#eaf4f9" />
          <stop offset="48%" stopColor="#cfe2ec" />
          <stop offset="100%" stopColor="#adc8d8" />
        </linearGradient>

        {/* Kosi odsjaj preko stakla */}
        <linearGradient id="wa-sheen" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="34%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="41%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.42" />
          <stop offset="62%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Nagovještaj obzora iza stakla — dojam pogleda van, bez ikakvog motiva */}
        <linearGradient id="wa-view" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.34" />
          <stop offset="58%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="62%" stopColor="#5d7f8f" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#4d6d7c" stopOpacity="0.2" />
        </linearGradient>

        {/* Ručka — tamniji brušeni metal */}
        <linearGradient id="wa-handle" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor="#2f3437" />
          <stop offset="45%" stopColor="#5a6266" />
          <stop offset="100%" stopColor="#33383b" />
        </linearGradient>

        <filter id="wa-shadow" x="-25%" y="-15%" width="150%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#1a1a18" floodOpacity="0.16" />
        </filter>
      </defs>

      <g filter="url(#wa-shadow)">
        {/* Vanjski okvir */}
        <rect x="10" y="10" width="340" height="430" rx="3" fill="url(#wa-alu)" />
        {/* Tanka tamna linija koja okviru daje dubinu */}
        <rect
          x="10.5"
          y="10.5"
          width="339"
          height="429"
          rx="3"
          fill="none"
          stroke="#5c6367"
          strokeWidth="1"
        />

        {/* Nadsvjetlo */}
        <g>
          <rect x="24" y="24" width="312" height="96" fill="url(#wa-glass)" />
          <rect x="24" y="24" width="312" height="96" fill="url(#wa-view)" />
          <rect x="24" y="24" width="312" height="96" fill="url(#wa-sheen)" />
          <rect
            x="24.5"
            y="24.5"
            width="311"
            height="95"
            fill="none"
            stroke="#7d8b93"
            strokeWidth="1"
            strokeOpacity="0.55"
          />
        </g>

        {/* Lijevo fiksno krilo */}
        <g>
          <rect x="24" y="132" width="150" height="284" fill="url(#wa-glass)" />
          <rect x="24" y="132" width="150" height="284" fill="url(#wa-view)" />
          <rect x="24" y="132" width="150" height="284" fill="url(#wa-sheen)" />
          <rect
            x="24.5"
            y="132.5"
            width="149"
            height="283"
            fill="none"
            stroke="#7d8b93"
            strokeWidth="1"
            strokeOpacity="0.55"
          />
        </g>

        {/* Desno otklopno-zaokretno krilo */}
        <g>
          <rect x="186" y="132" width="150" height="284" fill="url(#wa-glass)" />
          <rect x="186" y="132" width="150" height="284" fill="url(#wa-view)" />
          <rect x="186" y="132" width="150" height="284" fill="url(#wa-sheen)" />
          <rect
            x="186.5"
            y="132.5"
            width="149"
            height="283"
            fill="none"
            stroke="#7d8b93"
            strokeWidth="1"
            strokeOpacity="0.55"
          />
        </g>

        {/* Ručka na krilu koje se otvara */}
        <g>
          <rect x="174" y="248" width="12" height="54" rx="6" fill="url(#wa-handle)" />
          <rect x="146" y="269" width="32" height="10" rx="5" fill="url(#wa-handle)" />
          <rect
            x="149"
            y="271"
            width="26"
            height="2.5"
            rx="1.25"
            fill="#ffffff"
            fillOpacity="0.28"
          />
        </g>
      </g>
    </svg>
  )
}
