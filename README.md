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
| Članci na stranici „Česta pitanja" | `src/lib/faq.ts` |
| Adresa stranice i podaci za tražilice | `src/lib/site.ts` |
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

### Česta pitanja (FAQ)

Poveznica stoji u podnožju, stranica je na `/faq`, a svaki članak ima svoju
adresu — npr. `/faq/zamjena-brtvi-na-prozorima`.

Svi članci su u `src/lib/faq.ts`, hrvatski i engleski jedan ispod drugoga.
Novi članak se doda u oba niza, a `slug` (zadnji dio adrese) mora biti isti
u oba jezika.

Tekst članka je u polju `sadrzaj`, podijeljen na odjeljke. Svaki odjeljak može
imati podnaslov (`naslov`), odlomke (`odlomci`) i nabrajanje (`natuknice`).
**Prvi odjeljak namjerno nema podnaslov** — to je izravan odgovor na pitanje iz
naslova i na stranici je ispisan krupnije. Tražilice i AI asistenti citiraju
baš njega, pa odgovor mora stati u prve dvije rečenice.

Slika uz članak nije obavezna. Kad je nema, redak u popisu i sam članak
izgledaju isto, samo bez slike. Kad se dodaje: datoteku spremi u `public/faq/`,
a u `faq.ts` upiši `slika: '/faq/ime-datoteke.jpg'` i kratki `slikaOpis`.

### Vidljivost u tražilicama

**Prvo se mora upisati domena.** U `src/lib/site.ts` stoji `SITE_URL` — dok je
tamo pretpostavljena adresa, sitemap i canonical poveznice pokazuju na krivo
mjesto. Kad se domena zna, mijenja se samo taj jedan redak (ili se postavi
varijabla okoline `NEXT_PUBLIC_SITE_URL`).

Ostalo se radi samo:

- `sitemap.xml` i `robots.txt` nastaju iz koda — novi članak se u sitemapu
  pojavi čim se doda u `faq.ts`,
- svaka stranica ima svoj naslov, opis i canonical adresu,
- naslovnica nosi podatke o tvrtki (`LocalBusiness`), stranica s pitanjima
  nosi pitanja i odgovore (`FAQPage`), a svaki članak je `Article`. To je ono
  što tražilice i AI asistenti čitaju umjesto da pogađaju iz teksta.

Dva polja u `faq.ts` rade više nego što izgleda:

- `sazetak` je odgovor koji se vidi u rezultatima pretrage i koji AI asistenti
  citiraju — piši ga kao pravu rečenicu odgovora, ne kao najavu,
- `seoNaslov` je kratki naslov za karticu preglednika (do ~55 znakova), jer
  Google duge naslove reže. `naslov` ostaje dug i opisan, on je naslov na stranici.

**Što još nije riješeno:** engleska verzija nema svoju adresu. Jezik se pamti u
pregledniku, pa `/faq/alu-ili-pvc-prozori` uvijek ima isti URL, a poslužitelj
uvijek šalje hrvatski. Engleski se zato ne može indeksirati. Za to bi trebalo
prebaciti stranice na `/en/...` adrese.
