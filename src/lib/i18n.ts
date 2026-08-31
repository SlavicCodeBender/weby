export type Lang = 'hr' | 'en'

export interface Dict {
  nav: { services: string; gallery: string; contact: string; cta: string; call: string }
  hero: { eyebrow: string; title: string; sub: string; btn: string; badge: string; photoAlt: string }
  stats: { title: string; items: { num: string; label: string }[] }
  services: { eyebrow: string; title: string; items: { title: string; desc: string }[] }
  gallery: {
    eyebrow: string
    title: string
    items: { title: string; meta: string }[]
  }
  contact: {
    strip: string
    stripSub: string
    stripBtn: string
    eyebrow: string
    title: string
    intro: string
    phoneLabel: string
    emailLabel: string
    locationLabel: string
    phone: string
    email: string
    /** Predmet koji se upiše kad posjetitelj klikne na e-mail adresu. */
    emailSubject: string
    location: string
  }
  form: {
    title: string
    subtitle: string
    name: string
    namePh: string
    reach: string
    reachPh: string
    service: string
    servicePh: string
    serviceOptions: string[]
    message: string
    messageOptional: string
    messagePh: string
    consent: string
    submit: string
    sending: string
    successTitle: string
    successText: string
    hurry: string
    errorText: string
    close: string
    errors: { name: string; reach: string; service: string; consent: string }
  }
  faq: {
    eyebrow: string
    title: string
    intro: string
    readMore: string
    back: string
    toTop: string
  }
  footer: {
    faqLink: string
    since: string
    impressumLink: string
    privacyLink: string
    tagline: string
    /** Podaci o tvrtki u sitnom otisku na dnu */
    legal: string
    /** Opisi za čitače ekrana na ikonama */
    facebookLabel: string
    instagramLabel: string
    emailLabel: string
  }
  meta: { title: string; description: string }
}

const hr: Dict = {
  nav: {
    services: 'Usluge',
    gallery: 'Galerija',
    contact: 'Kontakt',
    cta: 'Zatraži ponudu',
    call: 'Nazovite nas',
  },
  hero: {
    eyebrow: 'Od 2006. u Rijeci · Vlastita proizvodnja i ugradnja',
    title: 'PVC i ALU stolarija po mjeri',
    sub: 'Izmjera i ponuda su besplatne.',
    btn: 'Zatraži izmjeru',
    badge: 'Est. ILAN Co.',
    photoAlt: 'Montažeri ugrađuju kliznu terasnu stijenu',
  },
  stats: {
    title: 'ILAN u brojkama',
    items: [
      { num: '20+', label: 'Godina iskustva' },
      { num: '500+', label: 'Završenih projekata' },
      { num: '100%', label: 'Po mjeri i s ugradnjom' },
    ],
  },
  services: {
    eyebrow: 'Što nudimo',
    title: 'Naše usluge',
    items: [
      {
        title: 'Prozori',
        desc: 'Alu i PVC profili, dvostruko ili trostruko staklo. Zaokretno-nagibni, klizni i fiksni.',
      },
      {
        title: 'Vrata',
        desc: 'Ulazna, balkonska i sobna. Klizna, zaokretna i harmonika, po mjeri.',
      },
      {
        title: 'Nadstrešnice',
        desc: 'Za ulazna vrata, balkone i vrtove. Aluminijska konstrukcija sa staklom ili polikarbonatom.',
      },
      {
        title: 'Rolete i sjenila',
        desc: 'Vanjske i unutarnje rolete, venecijaneri i sustavi zaštite od sunca.',
      },
      {
        title: 'Komarnici',
        desc: 'Mreže na fiksnom okviru, roleti ili kliznim vodilicama — za prozore i vrata.',
      },
      {
        title: 'Ugradnja i održavanje',
        desc: 'Od izmjere do brtvljenja. Zamjena starih okvira, popravak okova i servis.',
      },
    ],
  },
  gallery: {
    eyebrow: 'Naši radovi',
    title: 'Odabrani projekti',
    items: [
      { title: 'Obiteljska kuća, Rijeka', meta: 'Aluminijski prozori · 2023.' },
      { title: 'Ulazna vrata', meta: 'PVC · 2024.' },
      { title: 'Klizna terasna vrata', meta: 'Aluminij · 2024.' },
      { title: 'Poslovna fasada', meta: 'Ostakljenje izloga · 2024.' },
      { title: 'Stambena zgrada', meta: 'Vanjske rolete' },
      { title: 'Klizni komarnici', meta: 'Prozori i balkonska vrata' },
    ],
  },
  contact: {
    strip: 'Zapinje prozor, popustila kvaka? Dolazimo i za sitnice.',
    stripSub:
      'Popravci i zamjene prozora, kvaka, komarnika i ostale PVC i ALU stolarije — javite nam se!',
    stripBtn: 'Opiši kvar',
    eyebrow: 'Kontakt',
    title: 'Razgovarajmo o vašem projektu',
    intro:
      'Rado ćemo čuti više o vašem projektu. Javite nam se i vraćamo vam se s besplatnim savjetom i ponudom.',
    phoneLabel: 'Telefon',
    emailLabel: 'E-mail',
    locationLabel: 'Lokacija',
    phone: '091 949 1580',
    email: 'leopold.ivesic.ilan@gmail.com',
    emailSubject: 'Upit sa stranice',
    location: 'Rijeka, Hrvatska',
  },
  form: {
    title: 'Brzi upit',
    subtitle: 'Ispuni u pola minute — javljamo se s ponudom.',
    name: 'Ime i prezime',
    namePh: 'Ivan Horvat',
    reach: 'Telefon ili e-mail',
    reachPh: '091 234 5678 ili ivan@primjer.hr',
    service: 'Što trebate',
    servicePh: 'Odaberite…',
    serviceOptions: [
      'Prozori',
      'Vrata',
      'Nadstrešnice',
      'Rolete i sjenila',
      'Komarnici',
      'Ugradnja i održavanje',
      'Sitni popravak',
      'Ostalo',
    ],
    message: 'Poruka',
    messageOptional: 'neobavezno',
    messagePh: 'Ukratko o projektu — npr. 5 prozora, zamjena stare stolarije…',
    consent: 'Slažem se da ILAN obradi moje podatke radi odgovora na ovaj upit.',
    submit: 'Pošalji upit',
    sending: 'Šaljem…',
    successTitle: 'Hvala na upitu!',
    successText: 'Javljamo se u najkraćem mogućem roku.',
    hurry: 'Ako vam se žuri, nazovite',
    errorText: 'Slanje nije uspjelo. Pokušajte ponovno ili nas nazovite.',
    close: 'Zatvori',
    errors: {
      name: 'Upišite ime i prezime.',
      reach: 'Upišite telefon ili e-mail.',
      service: 'Odaberite uslugu.',
      consent: 'Potrebna je vaša privola.',
    },
  },
  faq: {
    eyebrow: 'Česta pitanja',
    title: 'Pitanja koja najčešće čujemo',
    intro:
      'Kratki odgovori na ono što nas ljudi pitaju prije izmjere. Ako vaše pitanje nije ovdje, slobodno nazovite.',
    readMore: 'Pročitaj',
    back: 'Natrag na česta pitanja',
    toTop: 'Na vrh',
  },
  footer: {
    faqLink: 'FAQ',
    since: 'Od 2006.',
    impressumLink: 'Impressum',
    privacyLink: 'Pravila privatnosti',
    tagline: 'Aluminijska i PVC stolarija.',
    legal:
      'I. L. A. N. d. o. o.\u00A0· Proizvodnja vrata i prozora od metala\u00A0· Ivana Luppisa 7, 51000 Rijeka\u00A0· OIB:\u00A096998412691',
    facebookLabel: 'ILAN na Facebooku',
    instagramLabel: 'ILAN na Instagramu',
    emailLabel: 'Pošalji e-mail',
  },
  meta: {
    title: 'ILAN — Prozori i vrata',
    description:
      'Aluminijski i PVC prozori, vrata i fasade po mjeri — osmišljeni, izrađeni i ugrađeni.',
  },
}

const en: Dict = {
  nav: {
    services: 'Services',
    gallery: 'Gallery',
    contact: 'Contact',
    cta: 'Request a quote',
    call: 'Call us',
  },
  hero: {
    eyebrow: 'Since 2006 in Rijeka · Our own production and installation',
    title: 'PVC & aluminium joinery',
    sub: 'Made to measure. Measuring and quotation are free.',
    btn: 'Request a measurement',
    badge: 'Est. ILAN Co.',
    photoAlt: 'Fitters installing a sliding terrace door',
  },
  stats: {
    title: 'ILAN in numbers',
    items: [
      { num: '20+', label: 'Years of experience' },
      { num: '500+', label: 'Projects completed' },
      { num: '100%', label: 'Custom made & installed' },
    ],
  },
  services: {
    eyebrow: 'What we offer',
    title: 'Our Services',
    items: [
      {
        title: 'Windows',
        desc: 'Aluminium and PVC profiles, double or triple glazing. Tilt-and-turn, sliding and fixed.',
      },
      {
        title: 'Doors',
        desc: 'Entrance, balcony and interior. Sliding, swing and bi-fold, made to measure.',
      },
      {
        title: 'Canopies',
        desc: 'For entrance doors, balconies and gardens. Aluminium frame with glass or polycarbonate.',
      },
      {
        title: 'Roller Shutters & Blinds',
        desc: 'Exterior and interior shutters, venetian blinds and sun protection systems.',
      },
      {
        title: 'Insect Screens',
        desc: 'Fixed-frame, roller or sliding screens — for windows and doors.',
      },
      {
        title: 'Installation & Servicing',
        desc: 'From measuring to sealing. Frame replacement, hardware repairs and servicing.',
      },
    ],
  },
  gallery: {
    eyebrow: 'Our work',
    title: 'Selected Projects',
    items: [
      { title: 'Family house, Rijeka', meta: 'Aluminium windows · 2023' },
      { title: 'Entrance door', meta: 'PVC · 2024' },
      { title: 'Sliding terrace door', meta: 'Aluminium · 2024' },
      { title: 'Commercial facade', meta: 'Shop front glazing · 2024' },
      { title: 'Apartment building', meta: 'Exterior roller shutters' },
      { title: 'Sliding insect screens', meta: 'Windows and balcony doors' },
    ],
  },
  contact: {
    strip: 'Sticking window, loose handle? We come out for those too.',
    stripSub:
      'Repairs and replacement of windows, handles, insect screens and all other PVC and aluminium joinery — get in touch!',
    stripBtn: 'Describe the problem',
    eyebrow: 'Get in touch',
    title: 'Let’s talk about your project',
    intro:
      'We’d love to hear about your project. Reach out and we’ll get back to you with a free consultation and quote.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    locationLabel: 'Location',
    // Međunarodni zapis, jer engleska verzija cilja i strane posjetitelje.
    phone: '+385 91 949 1580',
    email: 'leopold.ivesic.ilan@gmail.com',
    emailSubject: 'Website enquiry',
    location: 'Rijeka, Croatia',
  },
  form: {
    title: 'Quick enquiry',
    subtitle: 'Takes half a minute — we reply with a quote.',
    name: 'Full name',
    namePh: 'Ivan Horvat',
    reach: 'Phone or email',
    reachPh: '+385 91 234 5678 or ivan@example.com',
    service: 'What do you need',
    servicePh: 'Select…',
    serviceOptions: [
      'Windows',
      'Doors',
      'Canopies',
      'Roller Shutters & Blinds',
      'Insect Screens',
      'Installation & Servicing',
      'Small repair',
      'Other',
    ],
    message: 'Message',
    messageOptional: 'optional',
    messagePh: 'Briefly about the project — e.g. 5 windows, replacing old frames…',
    consent: 'I agree that ILAN may process my data in order to answer this enquiry.',
    submit: 'Send enquiry',
    sending: 'Sending…',
    successTitle: 'Thanks for your enquiry!',
    successText: 'We get back to you as soon as we can.',
    hurry: 'In a hurry? Call us',
    errorText: 'Sending failed. Please try again or give us a call.',
    close: 'Close',
    errors: {
      name: 'Please enter your full name.',
      reach: 'Please enter a phone number or email.',
      service: 'Please select a service.',
      consent: 'Your consent is required.',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'The questions we hear most',
    intro:
      'Short answers to what people ask us before the measuring visit. If your question is not here, just give us a call.',
    readMore: 'Read',
    back: 'Back to the questions',
    toTop: 'Back to top',
  },
  footer: {
    faqLink: 'FAQ',
    since: 'Since 2006',
    impressumLink: 'Company details',
    privacyLink: 'Privacy policy',
    tagline: 'Aluminium and PVC joinery.',
    legal:
      'I. L. A. N. d. o. o.\u00A0· Manufacture of metal doors and windows\u00A0· Ivana Luppisa 7, 51000 Rijeka, Croatia\u00A0· OIB:\u00A096998412691',
    facebookLabel: 'ILAN on Facebook',
    instagramLabel: 'ILAN on Instagram',
    emailLabel: 'Send an email',
  },
  meta: {
    title: 'ILAN — Windows & Doors',
    description:
      'Custom aluminium and PVC windows, doors, and facades — designed, manufactured and installed.',
  },
}

export const dict: Record<Lang, Dict> = { hr, en }
export const DEFAULT_LANG: Lang = 'hr'
