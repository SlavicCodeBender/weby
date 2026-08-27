# ILAN — web stranica

Jednostranična web stranica za ILAN (aluminijski i PVC prozori, vrata i fasade).
Izrađena u Next.js-u 16, hrvatski je zadani jezik, engleski se bira prekidačem u navigaciji.

## Pokretanje na drugom računalu

Treba samo Node.js (verzija 20 ili novija). U mapi projekta:

```bash
npm install
```

```bash
npm run dev
```

Stranica se zatim otvara na `http://localhost:3000`.

> `node_modules` se namjerno **ne** nosi na USB — to je nekoliko tisuća sitnih
> datoteka i kopiranje traje satima. `npm install` ih na disku napravi za dvadesetak sekundi.

## Objava na internetu

```bash
npm run build
```

Rezultat je statična stranica koju može poslužiti bilo koji hosting.

## Gdje se što mijenja

| Što | Datoteka |
| --- | --- |
| Svi tekstovi, hrvatski i engleski | `src/lib/i18n.ts` |
| Broj telefona, e-mail, lokacija | `src/lib/i18n.ts` → `contact` |
| Način slanja upita | `src/lib/inquiry.ts` |
| Boje i fontovi | `src/app/globals.css` |
| Fotografije projekata | `src/components/Gallery.tsx` |
| Slike koje stranica koristi | `public/` |
| Izvorne slike u punoj veličini | `originali/` — čuva se, ali ne ide na web |

### Broj telefona

Broj stoji u `src/lib/i18n.ts` → `contact.phone`, odvojeno za svaki jezik
(`091 949 1580` na hrvatskom, `+385 91 949 1580` na engleskom). Na stranici je
klikabilan za pozivanje. Ako se polje ostavi prazno, cijeli red s telefonom se sakrije.

### Forma za upite

Obrazac „Brzi upit" stoji na dva mjesta — u skočnom prozoru (gumb *Zatraži ponudu*)
i na dnu stranice. Oba koriste istu komponentu, pa se izmjena radi samo jednom.

Trenutno je namješteno da forma otvori mail program posjetitelja s ispunjenom porukom.
Upute kako prebaciti da mail stiže sam, preko servisa za forme, stoje na vrhu
datoteke `src/lib/inquiry.ts`.
