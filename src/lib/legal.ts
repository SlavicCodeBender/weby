import type { Lang } from './i18n'

/**
 * Sadržaj impressuma i pravila privatnosti.
 *
 * VAŽNO: mjesta označena s „(dopuniti)" moraju se ispuniti prije objave stranice.
 * To su podaci iz sudskog registra koje Zakon o trgovačkim društvima traži na
 * internetskoj stranici društva.
 */

export interface LegalRedak {
  oznaka: string
  vrijednost: string
}

export interface LegalOdjeljak {
  naslov: string
  odlomci?: string[]
  redci?: LegalRedak[]
  natuknice?: string[]
}

export interface LegalDokument {
  naslov: string
  uvod: string
  odjeljci: LegalOdjeljak[]
}

const impressumHr: LegalDokument = {
  naslov: 'Impressum',
  uvod: 'Podaci o pružatelju usluga sukladno Zakonu o trgovačkim društvima i Zakonu o zaštiti potrošača.',
  odjeljci: [
    {
      naslov: 'Podaci o društvu',
      redci: [
        {
          oznaka: 'Tvrtka',
          vrijednost:
            'I. L. A. N. društvo s ograničenom odgovornošću za proizvodnju aluminijske i PVC stolarije',
        },
        { oznaka: 'Skraćena tvrtka', vrijednost: 'I. L. A. N. d. o. o.' },
        { oznaka: 'Sjedište', vrijednost: 'Ivana Luppisa 7, 51000 Rijeka, Hrvatska' },
        { oznaka: 'Djelatnost', vrijednost: 'C25120 — Proizvodnja vrata i prozora od metala' },
        { oznaka: 'Datum osnutka', vrijednost: '23. ožujka 2006.' },
      ],
    },
    {
      naslov: 'Registracija',
      redci: [
        { oznaka: 'Registarski sud', vrijednost: 'Trgovački sud u Rijeci' },
        { oznaka: 'MBS', vrijednost: '040227565' },
        { oznaka: 'Matični broj', vrijednost: '02057131' },
        { oznaka: 'OIB', vrijednost: '96998412691' },
        { oznaka: 'Temeljni kapital', vrijednost: '2.654,46 EUR (20.000,00 HRK) — uplaćen u cijelosti' },
        { oznaka: 'Član uprave', vrijednost: 'Leopold Ivešić' },
        { oznaka: 'Vlasnik', vrijednost: 'Josip Ivešić' },
      ],
    },
    {
      naslov: 'Bankovni podaci',
      redci: [
        { oznaka: 'Banka', vrijednost: 'Addiko Bank d.d.' },
        { oznaka: 'IBAN', vrijednost: 'HR0725000091101222019' },
      ],
    },
    {
      naslov: 'Kontakt',
      redci: [
        { oznaka: 'Telefon', vrijednost: '091 949 1580' },
        { oznaka: 'E-mail', vrijednost: 'ilan.leopold.ivesic@gmail.com' },
      ],
    },
  ],
}

const impressumEn: LegalDokument = {
  naslov: 'Company details',
  uvod: 'Provider information pursuant to the Croatian Companies Act and Consumer Protection Act.',
  odjeljci: [
    {
      naslov: 'Company',
      redci: [
        {
          oznaka: 'Legal name',
          vrijednost:
            'I. L. A. N. društvo s ograničenom odgovornošću za proizvodnju aluminijske i PVC stolarije',
        },
        { oznaka: 'Short name', vrijednost: 'I. L. A. N. d. o. o.' },
        { oznaka: 'Registered office', vrijednost: 'Ivana Luppisa 7, 51000 Rijeka, Croatia' },
        { oznaka: 'Activity', vrijednost: 'C25120 — Manufacture of metal doors and windows' },
        { oznaka: 'Founded', vrijednost: '23 March 2006' },
      ],
    },
    {
      naslov: 'Registration',
      redci: [
        { oznaka: 'Registry court', vrijednost: 'Commercial Court in Rijeka' },
        { oznaka: 'Registration number (MBS)', vrijednost: '040227565' },
        { oznaka: 'Company number', vrijednost: '02057131' },
        { oznaka: 'VAT ID (OIB)', vrijednost: '96998412691' },
        { oznaka: 'Share capital', vrijednost: 'EUR 2,654.46 (HRK 20,000.00) — paid in full' },
        { oznaka: 'Board member', vrijednost: 'Leopold Ivešić' },
        { oznaka: 'Owner', vrijednost: 'Josip Ivešić' },
      ],
    },
    {
      naslov: 'Bank details',
      redci: [
        { oznaka: 'Bank', vrijednost: 'Addiko Bank d.d.' },
        { oznaka: 'IBAN', vrijednost: 'HR0725000091101222019' },
      ],
    },
    {
      naslov: 'Contact',
      redci: [
        { oznaka: 'Phone', vrijednost: '+385 91 949 1580' },
        { oznaka: 'Email', vrijednost: 'ilan.leopold.ivesic@gmail.com' },
      ],
    },
  ],
}

const privatnostHr: LegalDokument = {
  naslov: 'Pravila privatnosti',
  uvod: 'Ovdje piše koje podatke prikupljamo preko ove stranice, zašto ih prikupljamo i koja su vaša prava.',
  odjeljci: [
    {
      naslov: 'Tko obrađuje vaše podatke',
      odlomci: [
        'Voditelj obrade je I. L. A. N. d. o. o., Ivana Luppisa 7, 51000 Rijeka, OIB 96998412691.',
        'Za sva pitanja o svojim podacima javite se na ilan.leopold.ivesic@gmail.com.',
      ],
    },
    {
      naslov: 'Koje podatke prikupljamo',
      odlomci: [
        'Samo ono što sami upišete u obrazac za upit: ime i prezime, telefon ili e-mail adresu, vrstu usluge koja vas zanima i poruku ako je napišete.',
        'Osim toga, u pozadini koristimo Google Analytics za anonimizirane statistike posjeta — pojedinosti su u odjeljku "Analitika i kolačići" niže.',
      ],
    },
    {
      naslov: 'Zašto ih prikupljamo',
      odlomci: [
        'Isključivo da bismo odgovorili na vaš upit i pripremili ponudu. Pravna osnova je vaša privola, koju dajete kvačicom u obrascu, sukladno članku 6. stavku 1. točki (a) Opće uredbe o zaštiti podataka.',
        'Privolu možete povući u svakom trenutku, bez posljedica.',
      ],
    },
    {
      naslov: 'Kako podaci putuju',
      odlomci: [
        'Kad pošaljete obrazac, otvara se vaš vlastiti program za e-poštu s već ispunjenom porukom. Poruku šaljete vi, izravno na našu adresu. Podaci pritom ne prolaze kroz ovu stranicu niti se na njoj pohranjuju.',
      ],
    },
    {
      naslov: 'Koliko dugo ih čuvamo',
      odlomci: [
        'Vaš upit čuvamo u e-pošti dok traje dogovor oko posla, a najdulje dvije godine od zadnjeg kontakta. Nakon toga ga brišemo, osim ako smo dužni čuvati dokumentaciju po drugom propisu, primjerice račun.',
      ],
    },
    {
      naslov: 'S kim dijelimo podatke',
      odlomci: [
        'Podatke iz obrasca za upit ne prodajemo, ne ustupamo i ne šaljemo nikome izvan Europskog gospodarskog prostora. Iznimka su anonimizirani statistički podaci o posjetima koje, ako na to pristanete, obrađuje Google u sklopu Google Analyticsa — vidi odjeljak "Analitika i kolačići".',
      ],
    },
    {
      naslov: 'Analitika i kolačići',
      odlomci: [
        'Osim jezika kojeg odaberete (hrvatski ili engleski), koji ostaje samo u vašem pregledniku, koristimo Google Analytics da vidimo koje stranice posjetiteljima najviše pomažu i time poboljšamo sadržaj.',
        'Google Analytics postavlja kolačiće tek ako kliknete "Prihvati" u traci za kolačiće pri prvom posjetu. Ako kliknete "Odbaci", ti se kolačići uopće ne postavljaju.',
        'Google Analytics prikuplja podatke o posjetu (npr. koje stranice gledate, tip uređaja, približnu regiju), ali ne vaše ime, telefon ili e-mail — ti podaci ostaju isključivo u obrascu za upit i ne dolaze do Googlea. Obrađuje ih Google Ireland Limited.',
        'Svoj izbor možete promijeniti u svakom trenutku preko poveznice "Postavke kolačića" u podnožju stranice.',
      ],
    },
    {
      naslov: 'Prijava za obavijest o kalkulatoru',
      odlomci: [
        'Na članku o cijeni PVC i ALU stolarije možete ostaviti svoj e-mail da vas obavijestimo čim kalkulator za okvirnu procjenu cijene bude gotov. Traži se samo e-mail adresa, ništa drugo. Rijetko, i samo kad procijenimo da je stvarno korisno, tu istu adresu možemo iskoristiti i za koji savjet ili ponudu vezanu uz PVC i ALU stolariju — ne šaljemo redovit newsletter ni čestu reklamnu poštu.',
        'Pravna osnova je vaša privola, koju dajete kvačicom izravno u toj formi. Formu i slanje obavijesti pokreće Mailchimp (The Rocket Science Group, LLC), koji podatke obrađuje u skladu s EU-SAD okvirom za zaštitu podataka (EU-U.S. Data Privacy Framework).',
        'Prijavu možete otkazati u svakom trenutku poveznicom za odjavu u samoj obavijesti, ili tako da nas izravno kontaktirate.',
      ],
    },
    {
      naslov: 'Vaša prava',
      odlomci: ['U svakom trenutku imate pravo:'],
      natuknice: [
        'saznati koje podatke o vama imamo i dobiti njihovu kopiju',
        'ispraviti netočne podatke',
        'zatražiti brisanje svojih podataka',
        'ograničiti ili prigovoriti obradi',
        'povući privolu koju ste dali',
      ],
    },
    {
      naslov: 'Pritužba',
      odlomci: [
        'Ako smatrate da s vašim podacima ne postupamo ispravno, javite se prvo nama. Imate i pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP), Selska cesta 136, 10000 Zagreb.',
      ],
    },
  ],
}

const privatnostEn: LegalDokument = {
  naslov: 'Privacy policy',
  uvod: 'What data we collect through this website, why we collect it, and what your rights are.',
  odjeljci: [
    {
      naslov: 'Who processes your data',
      odlomci: [
        'The controller is I. L. A. N. d. o. o., Ivana Luppisa 7, 51000 Rijeka, Croatia, VAT ID 96998412691.',
        'For any question about your data, write to ilan.leopold.ivesic@gmail.com.',
      ],
    },
    {
      naslov: 'What we collect',
      odlomci: [
        'Only what you type into the enquiry form: your name, a phone number or email address, the service you are interested in, and a message if you write one.',
        'In the background we also use Google Analytics for anonymised visit statistics — details are in the "Analytics and cookies" section below.',
      ],
    },
    {
      naslov: 'Why we collect it',
      odlomci: [
        'Solely to answer your enquiry and prepare a quote. The legal basis is your consent, given by ticking the box in the form, under Article 6(1)(a) of the General Data Protection Regulation.',
        'You may withdraw your consent at any time, with no consequences.',
      ],
    },
    {
      naslov: 'How the data travels',
      odlomci: [
        'When you submit the form, your own email program opens with the message already filled in. You send it yourself, directly to our address. The data does not pass through this website and is not stored on it.',
      ],
    },
    {
      naslov: 'How long we keep it',
      odlomci: [
        'We keep your enquiry in our mailbox while the job is being discussed, and at most two years after the last contact. After that we delete it, unless another law requires us to keep the document, an invoice for example.',
      ],
    },
    {
      naslov: 'Who we share it with',
      odlomci: [
        'We do not sell, pass on, or transfer your enquiry-form data outside the European Economic Area. The exception is anonymised visit statistics which, if you consent, are processed by Google as part of Google Analytics — see "Analytics and cookies".',
      ],
    },
    {
      naslov: 'Analytics and cookies',
      odlomci: [
        'Besides the language you choose (Croatian or English), which stays only in your browser, we use Google Analytics to see which pages are most useful to visitors and improve the site accordingly.',
        'Google Analytics only sets cookies if you click "Accept" in the cookie banner on your first visit. If you click "Reject", those cookies are never set.',
        'Google Analytics collects visit data (e.g. which pages you view, device type, approximate region), but not your name, phone or email — that stays solely in the enquiry form and never reaches Google. It is processed by Google Ireland Limited.',
        'You can change your choice at any time via the "Cookie settings" link in the site footer.',
      ],
    },
    {
      naslov: 'Calculator launch notification',
      odlomci: [
        'On the article about PVC and aluminium joinery prices, you can leave your email so we notify you once the price-estimate calculator is ready. Only an email address is asked for, nothing else. Rarely, and only when we think it’s genuinely useful, we may use that same address for a tip or offer about PVC and aluminium joinery — we don’t send a regular newsletter or frequent promotional email.',
        'The legal basis is your consent, given by ticking the box directly in that form. The form and the notification are run by Mailchimp (The Rocket Science Group, LLC), which processes the data under the EU-U.S. Data Privacy Framework.',
        'You can unsubscribe at any time via the link in the notification email, or by contacting us directly.',
      ],
    },
    {
      naslov: 'Your rights',
      odlomci: ['At any time you have the right to:'],
      natuknice: [
        'find out what data we hold about you and receive a copy',
        'have inaccurate data corrected',
        'request deletion of your data',
        'restrict or object to processing',
        'withdraw the consent you gave',
      ],
    },
    {
      naslov: 'Complaints',
      odlomci: [
        'If you believe we are not handling your data properly, please contact us first. You also have the right to lodge a complaint with the Croatian Personal Data Protection Agency (AZOP), Selska cesta 136, 10000 Zagreb.',
      ],
    },
  ],
}

export const impressum: Record<Lang, LegalDokument> = { hr: impressumHr, en: impressumEn }
export const privatnost: Record<Lang, LegalDokument> = { hr: privatnostHr, en: privatnostEn }
