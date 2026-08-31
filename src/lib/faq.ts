import type { Lang } from './i18n'

/**
 * Članci za stranicu „Česta pitanja".
 *
 * Kako dodati novi članak:
 *   1. dopiši objekt u `hr` niz i njegov prijevod u `en` niz,
 *   2. `slug` mora biti isti u oba jezika — to je zadnji dio adrese
 *      (npr. slug 'vrste-komarnika' daje /faq/vrste-komarnika),
 *   3. `sadrzaj` su odjeljci teksta. Prvi odjeljak nema naslov jer je to
 *      izravan odgovor na pitanje — tražilice i AI asistenti citiraju baš njega,
 *      pa neka odgovor stoji u prve dvije rečenice.
 *
 * Slika je neobavezna. Kad je nema, u popisu i na članku jednostavno
 * nema slike i tekst se razvuče preko cijele širine.
 * Kad je ima: datoteku spremi u `public/faq/`, a ovdje upiši putanju
 * s kosom crtom na početku, npr. slika: '/faq/brtve.jpg'.
 */

export interface FaqOdjeljak {
  /** Podnaslov odjeljka. Prvi odjeljak ga namjerno nema. */
  naslov?: string
  odlomci?: string[]
  natuknice?: string[]
}

export interface FaqClanak {
  slug: string
  naslov: string
  /**
   * Kratki naslov za karticu preglednika i za rezultate pretrage.
   * Google reže na otprilike 55 znakova, a `naslov` je često duži.
   * Ako se izostavi, koristi se `naslov`.
   */
  seoNaslov?: string
  /**
   * Jedna rečenica ispod naslova u popisu. Ista rečenica ide u opis stranice
   * i u strukturirane podatke — to je ono što se vidi u rezultatima pretrage
   * i što AI asistenti citiraju.
   */
  sazetak: string
  /** Putanja do slike u public/, npr. '/faq/brtve.jpg'. Prazno = bez slike. */
  slika: string
  /** Opis slike za čitače ekrana i za slučaj da se slika ne učita. */
  slikaOpis: string
  sadrzaj: FaqOdjeljak[]
}

const hr: FaqClanak[] = [
  {
    slug: 'ugradnja-prozora',
    naslov: 'Koliko traje ugradnja prozora — od demontaže do čišćenja',
    seoNaslov: 'Koliko traje ugradnja prozora',
    sazetak:
      'Ugradnja jednog prozora traje otprilike dva do tri sata, a prosječan stan se u pravilu završi u jednom do dva radna dana.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Za jedan prozor standardne veličine računa se otprilike dva do tri sata, od vađenja starog okvira do zabrtvljene ugradnje novog. Prosječan stan s pet do osam otvora ekipa u pravilu završi u jednom do dva radna dana. Obrada špaleta i ličenje nisu u tom vremenu — to je zasebna faza koja dolazi poslije.',
          'Točno vrijeme ovisi o tome kako je stari prozor ugrađen. Okvir koji se može izvaditi cijeli ide brzo; okvir zaliven u beton ili ozidan zajedno s parapetom traži rezanje i produžuje posao.',
        ],
      },
      {
        naslov: 'Što se događa prije dolaska ekipe',
        odlomci: [
          'Izmjera se radi puno prije ugradnje jer se prozori izrađuju po mjeri. Između potvrde ponude i dolaska na teren obično prođe nekoliko tjedana proizvodnje. Mjeri se otvor u zidu, provjerava se je li okomit i ravan, i dogovara se smjer otvaranja svakog krila.',
          'Što možete uraditi prije ugradnje: obično se skidaju zavjese i garniže, namještaj se odmiče od zida barem metar, a ono što ostaje pokriva se folijom. Prašine od demontaže ima uvijek, pogotovo kod starih drvenih okvira zalivenih u žbuku.',
        ],
      },
      {
        naslov: 'Demontaža starih prozora',
        odlomci: [
          'Prvo se skidaju krila, pa se okvir reže i vadi u dijelovima. Rezanje je gotovo uvijek brže i urednije od čupanja jer manje razbija špalete oko otvora. Stara klupčica se skida zajedno s okvirom ako se mijenja.',
          'U toj fazi otvor ostaje otvoren, pa se u pravilu ne radi više prostorija odjednom. Ako pada kiša ili puše jak vjetar, radi se otvor po otvor i svaki se zatvori prije nego se otvori sljedeći.',
        ],
      },
      {
        naslov: 'Ugradnja i brtvljenje',
        odlomci: [
          'Novi okvir se postavlja na podmetače, poravnava vodoravno i okomito, i mehanički pričvršćuje vijcima kroz okvir. Tek kad je okvir učvršćen i provjeren, ide brtvljenje.',
          'Brtvljenje se radi sa pur pjenom koja služi kao izolacija',
        ],
      },
      {
        naslov: 'Što ostaje nakon ugradnje',
        odlomci: [
          'Nakon ugradnje ostaju špalete koje treba zagletati i oličiti, i spoj okvira i zida koji nekad potrebno silikonirati. Taj dio radi zidar ili se dogovori kao dodatna usluga, obično dan ili dva kasnije, kad se pjena stegne.',
          'Prije nego ekipa ode, provjeri se otvara li se i zatvara li se svako krilo bez zapinjanja, drži li nagib i jesu li odvodni otvori na donjem dijelu okvira prohodni.',
        ],
        natuknice: [
          'Zaštitnu foliju s profila skini u roku od nekoliko dana — na suncu se zapeče i teško se skida.',
          'Prvo čišćenje radi mekom krpom i vodom sa sapunicom, bez otapala.',
          'Ako se ugrađuje zimi, prozračuj prostoriju češće idućih tjedan dana — u pjeni i žbuci ima puno vlage.',
        ],
      },
    ],
  },
  {
    slug: 'dvostruko-ili-trostruko-staklo',
    naslov: 'Dvostruko ili trostruko staklo na prozorima — što se isplati',
    seoNaslov: 'Dvostruko ili trostruko staklo',
    sazetak:
      'Trostruko staklo izolira otprilike dvostruko bolje od dvostrukog, ali se na primorju često ne isplati jer su zime blage, a staklo je skuplje i teže.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Dobro dvostruko izolacijsko staklo s niskoemisijskim premazom i argonom ima koeficijent prolaska topline oko 1,0 do 1,1 W/m²K. Trostruko, s dva premaza i dvije komore, spušta ga na otprilike 0,5 do 0,7 W/m²K. To je grubo dvostruka razlika u gubitku topline kroz samo staklo.',
          'Isplati li se ta razlika ovisi manje o staklu, a više o zgradi. U dobro izoliranoj kući s velikim staklenim plohama i podnim grijanjem trostruko staklo se osjeti i u udobnosti i na računu. U stanu na Kvarneru, s blagim zimama i manjim prozorima, razlika je često premala da bi se vratila kroz uštedu.',
        ],
      },
      {
        naslov: 'Što zapravo radi izolaciju',
        odlomci: [
          'Broj stakala je samo jedan dio. Niskoemisijski premaz je tanak metalni sloj koji propušta svjetlo, a odbija toplinsko zračenje natrag u prostoriju. On nosi najveći dio razlike u odnosu na obično staklo bez premaza, koje ima oko 2,7 W/m²K.',
          'Međuprostor se puni argonom jer plin slabije prenosi toplinu od zraka. Optimalna širina komore je oko 14 do 16 milimetara. Šire ne pomaže jer se plin unutar komore počne gibati i toplinu prenositi strujanjem.',
          'Rub stakla je mjesto gdje se najviše gubi. Klasični aluminijski distancer između stakala je toplinski most i na njemu se prvo javlja kondenzacija. Distancer s toplim rubom, od plastike ili nehrđajućeg čelika, poboljša cijeli prozor i smanji rošenje po obodu.',
        ],
      },
      {
        naslov: 'Staklo nije prozor',
        odlomci: [
          'Podatak koji se najčešće navodi u ponudama odnosi se samo na staklo. Za usporedbu je važniji podatak za cijeli prozor, koji uključuje okvir i rub stakla, i uvijek je lošiji od podatka za samo staklo.',
          'Trostruko staklo u slabom okviru ne daje ono što obećava. Ako se uz isti novac bira između boljeg stakla i boljeg okvira, u pravilu se više dobije ulaganjem u profil i u kvalitetnu ugradnju.',
        ],
      },
      {
        naslov: 'Što trostruko staklo donosi uz izolaciju',
        natuknice: [
          'Teže je za otprilike polovicu, pa krilo, okov i šarke nose veće opterećenje. Kod velikih krila to znači jači okov, a ponekad i ograničenje veličine.',
          'Propušta manje sunčeve topline, što zimi na južnoj strani djelomično poništava dobitak, a ljeti pomaže protiv pregrijavanja.',
          'Nije automatski tiše. Za zvučnu izolaciju je važnija nejednaka debljina stakala i laminirano staklo s folijom nego broj komora. Tri jednaka stakla mogu biti lošija od dva različita.',
          'Rošenje s vanjske strane ujutro nije kvar. Znak je da vanjsko staklo ostaje hladno jer toplina iz stana ne prolazi do njega.',
        ],
      },
      {
        naslov: 'Kad se isplati, a kad ne',
        odlomci: [
          'Trostruko staklo ima smisla kod velikih ostakljenih ploha, kod sjevernih prostorija, u kontinentalnoj klimi i u kućama koje se cijelu sezonu griju na nisku temperaturu. Ima smisla i kad se cijela kuća energetski obnavlja, jer se tada isplati podići razinu svega odjednom.',
          'Kod zamjene nekoliko prozora u starijem stanu bez izolirane fasade gubitak kroz zidove je toliko veći od gubitka kroz staklo da razlika između dvostrukog i trostrukog gotovo nestane u ukupnom računu.',
        ],
      },
    ],
  },
  {
    slug: 'zamjena-brtvi-na-prozorima',
    naslov: 'Zamjena brtvi na prozorima — kad se prepozna i koliko traje',
    seoNaslov: 'Zamjena brtvi na prozorima',
    sazetak:
      'Brtve na prozorima traju otprilike deset do petnaest godina. Kad otvrdnu, javlja se propuh uz rub krila, zvižduk na vjetru i rošenje po okviru.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Brtva je gumeni profil u utoru krila i okvira koji pritiskom zatvara spoj. Traje otprilike deset do petnaest godina, kraće na južnoj i zapadnoj strani gdje je više sunca, i kraće uz more gdje se sol i UV zbrajaju.',
          'Zamjena na jednom prozoru traje petnaestak do tridesetak minuta i ne zahtijeva vađenje krila. Cijeli stan se u pravilu riješi u jednom dolasku.',
        ],
      },
      {
        naslov: 'Po čemu se prepozna da brtva više ne drži',
        natuknice: [
          'Osjeti se strujanje hladnog zraka uz rub zatvorenog krila, najčešće pri dnu.',
          'Na jačem vjetru se čuje zvižduk ili šum koji prije nije postojao.',
          'Rosi se okvir, a ne staklo. Rošenje po sredini stakla je druga priča i najčešće znači previše vlage u prostoriji.',
          'Guma je tvrda na dodir, ispucala u kutovima ili je ostala trajno spljoštena i ne vraća se u oblik.',
          'Brtva je iskočila iz utora ili se skupila pa u kutu zjapi rupa.',
        ],
      },
      {
        naslov: 'Provjera listom papira',
        odlomci: [
          'Stavi list papira preko okvira, zatvori i zaključaj krilo, pa povuci papir. Ako izlazi bez ikakvog otpora, na tom mjestu nema pritiska. Ponovi to na nekoliko mjesta oko cijelog krila, gore, dolje i sa strane šarki.',
          'Ako papir lako izlazi samo na jednom mjestu, češće je problem u okovu nego u brtvi. Ako izlazi svugdje jednako lako, brtva je gotova.',
        ],
      },
      {
        naslov: 'Nije uvijek brtva',
        odlomci: [
          'Čest uzrok propuha je smanjen pritisak zatvaranja. Zaporne točke na krilu su ekscentri koji se mogu zakrenuti i tako pojačati ili smanjiti pritisak na brtvu. Mnogi prozori imaju ljetni i zimski položaj upravo zbog toga.',
          'Drugi čest uzrok je spušteno krilo. Krilo s godinama sjedne na donjoj šarki, pa u suprotnom kutu prestane pritiskati. To se rješava podešavanjem šarki, a ne novom brtvom.',
          'Zato ima smisla prvo pozvati servis na provjeru. Podešavanje okova je jeftinije od zamjene brtvi, a često riješi cijeli problem.',
        ],
      },
      {
        naslov: 'Materijali i kako se ugrađuje',
        odlomci: [
          'Najčešća je EPDM guma, otporna na UV i na temperaturne razlike, i danas standard na PVC prozorima. TPE se može zavariti u kutovima pa nema spoja koji propušta. Silikonske brtve podnose najširi raspon temperatura, ali su skuplje i rjeđe.',
          'Brtva se bira prema sustavu profila jer utor nije isti kod svih proizvođača. Zato se pri narudžbi nosi uzorak stare brtve ili se zna oznaka sustava.',
          'Pri ugradnji se brtva ne smije rastezati. Ako se navuče napeto, s vremenom se vrati u svoju duljinu i u kutu ostane praznina. Postavlja se opušteno, s malim viškom u kutovima.',
        ],
      },
      {
        naslov: 'Kako produžiti vijek brtvi',
        natuknice: [
          'Jednom godišnje obriši brtve vlažnom krpom i premaži sredstvom na bazi silikona ili glicerina.',
          'Nikad ne koristi otapala, razrjeđivače ni ulja na naftnoj bazi — guma od njih nabubri i propadne.',
          'Ne liči brtve. Boja ih ukruti i popuca pri prvom otvaranju.',
          'Zimi ne ostavljaj krilo dugo u nagibu. Hladan zrak stalno struji preko brtve i skraćuje joj vijek.',
        ],
      },
    ],
  },
  {
    slug: 'alu-ili-pvc-prozori',
    naslov: 'Alu ili PVC prozori — razlike, cijena i što odabrati',
    seoNaslov: 'Alu ili PVC prozori — što odabrati',
    sazetak:
      'PVC bolje izolira po uloženom novcu, a aluminij je načelno povoljniji, nosi velike otvore i tanje je na pogled. Za stan su PVC i aluminij, za velike stijene i izloge aluminij.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Za standardni stan ili kuću PVC prozor daje bolju izolaciju po uloženom novcu od aluminijskog iste veličine. Aluminij je jeftiniji i koristi se kada je otvor velik, kad se traže tanki okviri i puno stakla, ili kad je riječ o izlogu i poslovnom prostoru.',
          'Oba materijala mogu biti vrlo dobra i oba mogu biti loša. Razlika između jeftinog i kvalitetnog sustava unutar istog materijala često je veća od razlike između materijala.',
        ],
      },
      {
        naslov: 'Kako je građen PVC profil',
        odlomci: [
          'PVC profil je šupalj i podijeljen na komore. Više komora znači više pregrada koje usporavaju prolaz topline, pa se danas najčešće ugrađuju peterokomorni i šesterokomorni profili. Uz broj komora jednako je važna ugradbena dubina profila — dublji profil ima više mjesta za izolaciju i za deblje staklo.',
          'Unutar profila je čelično ojačanje jer sam PVC nije dovoljno krut. Kutevi se zavaruju, pa je okvir jedan komad bez spojeva koji propuštaju.',
          'Slabost PVC-a je krutost. Velika krila i široke stijene traže sve više čelika i profil postaje težak i debeo, pa se u nekom trenutku aluminij isplati konstrukcijski.',
        ],
      },
      {
        naslov: 'Zašto aluminij mora imati prekinuti toplinski most',
        odlomci: [
          'Aluminij provodi toplinu, što je za prozor loše. Zato se skuplji i kvalitetniji aluminijski profil radi iz dva odvojena dijela, vanjskog i unutarnjeg, spojena poliamidnim trakama koje ne provode toplinu. To je prekinuti toplinski most.',
          'Unatoč tome aluminijski profil bez prekinutog toplinskog mosta danas se još uvijek ugrađuje — u grijane i negrijane prostore, na garažna i podrumska vrata, na pregrade, u stanu ili kući.',
          'Aluminijski okvir u pravilu ostaje nešto lošiji izolator od dobrog PVC profila, ali zato podnosi puno veća krila uz tanji vidljivi okvir, pa u prostoriju ulazi više svjetla.',
        ],
      },
      {
        naslov: 'Izgled, boja i primorska klima',
        odlomci: [
          'Aluminij se plastificira u bilo koji ton po RAL karti i boja je dio površine, pa je postojana i lako se obnavlja. Za objekte uz more preporuča se plastifikacija predviđena za priobalje, jer sol ubrzava propadanje slabijih premaza.',
          'PVC se boji folijom. Izbor dekora je isti kao kod aluminija, uključujući imitacije drva, ali tamne folije se na jakom suncu znatno zagriju, pa takvi profili traže dodatno ojačanje i pažljiviji odabir sustava.',
          'Postoji i kombinacija drvo-aluminij, gdje je iznutra drvo, a izvana aluminijska ljuska koja štiti od kiše i sunca. To je najskuplja, ali i najizdržljivija kombinacija za kuće.',
        ],
      },
      {
        naslov: 'Vijek trajanja i održavanje',
        natuknice: [
          'Aluminijski okvir traje najduže i praktički se ne mijenja od vremenskih utjecaja.',
          'PVC okvir realno traje dvadesetak do četrdesetak godina, ovisno o kvaliteti profila i izloženosti suncu.',
          'Okov je kod oba materijala isti tip mehanizma i traži isto godišnje održavanje.',
          'Brtve se troše jednako, bez obzira na materijal okvira.',
          'Oba materijala se recikliraju; aluminij ima najveću vrijednost pri otkupu.',
        ],
      },
      {
        naslov: 'Kako odlučiti',
        odlomci: [
          'Ako se mijenjaju prozori u stanu ili obiteljskoj kući standardnih dimenzija, PVC ili aluminij su ok izbori. Koji izabarti? Odgovor ovisi o prisutnosti soli, sunca i temperaturnim razlikama',
          'Ako se radi klizna terasna stijena, veliki fiksni otvor, izlog ili ulazna vrata poslovnog prostora, aluminij je pravi izbor jer PVC na tim dimenzijama traži previše ojačanja.',
        ],
      },
    ],
  },
  {
    slug: 'odrzavanje-pvc-prozora',
    naslov: 'Održavanje PVC prozora — podmazivanje okova, brtve i čišćenje',
    seoNaslov: 'Održavanje PVC prozora',
    sazetak:
      'PVC prozori traže održavanje jednom godišnje: podmazivanje okova, njegu brtvi, čišćenje profila i provjeru odvodnih otvora u donjem dijelu okvira.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Jednom godišnje dovoljno je za većinu stanova. Uz prometnu ulicu, uz more ili na jako izloženoj strani radi to dvaput godišnje, jer se sol, prašina i pijesak brže nakupe u okovu i na brtvama.',
          'Cijeli obilazak jednog prozora traje nekoliko minuta i traži samo ulje bez kiseline i smole, sredstvo za njegu gume i meku krpu.',
        ],
      },
      {
        naslov: 'Okov',
        odlomci: [
          'Okov je mehanizam skriven u utoru krila: škare gore, prijenosne poluge sa strane i zaporne točke po obodu. Sve pokretne dijelove treba nauljiti, a zaporne točke premazati mašću.',
          'Koristi ulje bez kiseline i bez smole ili sprej koji je proizvođač okova predvidio. Univerzalni sprej za odvijanje zahrđalih vijaka nije mazivo — on istiskuje vlagu i ispari, pa nakon nekoliko tjedana okov ostane suh.',
          'Prije podmazivanja obriši utor krila od prašine, inače se mast pomiješa s prljavštinom i radi obrnuto.',
        ],
      },
      {
        naslov: 'Brtve',
        odlomci: [
          'Brtve obriši vlažnom krpom, a zatim premaži sredstvom na bazi silikona ili glicerina. Time guma ostaje elastična i ne puca na hladnoći.',
          'Ne koristi otapala ni sredstva na naftnoj bazi i ne liči brtve. Oboje ih trajno ošteti.',
        ],
      },
      {
        naslov: 'Odvodni otvori',
        odlomci: [
          'Na donjoj strani okvira, s vanjske strane, nalaze se mali otvori kroz koje istječe voda koja uđe u profil. To je dio koji se najčešće zaboravi, a najviše smeta kad se začepi.',
          'Ako se ti otvori zapune prašinom, lišćem ili ostacima žbuke, voda ostaje u profilu, zimi se ledi i s vremenom razdvaja spojeve. Provjeri ih jednom godišnje i po potrebi pročisti tankom žicom ili usisavačem, bez oštrih predmeta.',
        ],
      },
      {
        naslov: 'Čišćenje profila i stakla',
        natuknice: [
          'Profile peri mlakom vodom sa sapunicom i mekom krpom.',
          'Nikad ne koristi abrazivna sredstva, spužve s grubom stranom, aceton, nitro razrjeđivač ni sredstva za čišćenje pećnice — površina PVC-a se trajno zamuti.',
          'Zaštitnu foliju s novih profila skini u roku od nekoliko tjedana; na suncu se zapeče i ostavlja ljepilo.',
          'Za staklo je dovoljna voda i guma za brisanje; sredstva s alkoholom ostavljaju tragove na brtvama.',
        ],
      },
      {
        naslov: 'Podešavanje i pravilno rukovanje',
        odlomci: [
          'Krilo koje pri zatvaranju zapinje donjim kutom najčešće je sjelo i treba ga podići na donjoj šarki. Vijci za podešavanje su ispod plastične kapice na šarki. Ako nisi sigurna koji vijak radi što, bolje je pozvati servis nego nasumice okretati — krivim podešavanjem se lako izgubi pritisak na brtvu.',
          'Mnogi okovi imaju ljetni i zimski položaj zapornih točaka, kojim se pojačava ili smanjuje pritisak na brtvu. Ako se prebacuje, radi to jednom u jesen i jednom u proljeće, i to na svim točkama jednako.',
          'Kvaka se okreće samo kad je krilo zatvoreno. Ako se okrene dok je krilo otvoreno, mehanizam može ostati u međupoložaju i krilo visi na jednoj šarki. Noviji okovi imaju blokadu koja to sprječava, ali stariji je nemaju.',
        ],
        natuknice: [
          'Ne vješaj ništa na otvoreno krilo.',
          'Zimi ne ostavljaj krilo dugo u nagibu — oko otvora se hladi zid i javlja se kondenzacija.',
          'Prozračuj kratko i naširoko, s potpuno otvorenim krilom, umjesto dugo u nagibu. Zrak se izmijeni brže, a zid ostane topao.',
        ],
      },
    ],
  },
  {
    slug: 'vrste-komarnika',
    naslov: 'Vrste komarnika za prozore i vrata — koji odabrati',
    seoNaslov: 'Vrste komarnika za prozore i vrata',
    sazetak:
      'Za prozore se najčešće rade komarnici na fiksnom okviru, rolo komarnici, ili plise komarnici, a za balkonska i terasna vrata klizni, plise ili komarnici na šarke.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Izbor ovisi o tome prolazi li se kroz otvor. Na prozoru kroz koji se ne prolazi najjeftiniji i najbolje je komarnik na fiksnom okviru. Na balkonskim i terasnim vratima treba nešto što se otvara: klizni komarnik, plise ili komarnik na šarke.',
          'Svi se rade po mjeri jer se mjeri konkretan otvor. Kod PVC prozora se kod nekih izvedbi montira kukicama na okvir, bez bušenja profila.',
        ],
      },
      {
        naslov: 'Komarnik na fiksnom okviru',
        odlomci: [
          'Aluminijski okvir s razapetom mrežicom koji se kukicama objesi s vanjske strane prozora. Najjeftinija izvedba, najbolje brtvi jer nema pokretnih dijelova.',
          'Nedostatak je što se za otvaranje krila mora skinuti, pa nije za otvore kroz koje se prolazi ni za prozore koji se često otvaraju širom.',
        ],
      },
      {
        naslov: 'Rolo komarnik',
        odlomci: [
          'Mrežica je namotana na oprugu u kazeti i izvlači se po potrebi, kao roleta. Ostaje na prozoru cijele godine, a kad je namotana mrežica je zaštićena od sunca i prljavštine, pa duže traje.',
          'Radi se u okomitoj izvedbi za prozore i u bočnoj za vrata. Skuplji je od fiksnog i ima mehanizam koji se s vremenom troši.',
        ],
      },
      {
        naslov: 'Za vrata: klizni, plise i na šarke',
        natuknice: [
          'Klizni komarnik ide po vodilicama uz kliznu stijenu i prati logiku samih vrata. Prirodan izbor uz klizna terasna vrata.',
          'Plise komarnik se skuplja u harmoniku sa strane. Donja vodilica je vrlo niska pa se lako prelazi, dobro podnosi široke otvore i može se raditi obostrano otvaranje.',
          'Komarnik na šarke otvara se kao vrata i zatvara magnetom ili oprugom. Najjednostavniji je i najotporniji, ali traži prostor za otvaranje.',
        ],
      },
      {
        naslov: 'Vrsta mrežice za fiksne komarnike',
        odlomci: [
          'Standardna je mrežica od staklenih vlakana. Elastična je, ne ostaje ulubljena i dobro podnosi vjetar. Aluminijska mrežica je čvršća i trajnija, ali se od udarca ulubi i ostane tako.',
          'Za kućne ljubimce postoji ojačana mrežica koja podnosi kandže. Postoji i finija protupeludna mrežica, ali njezino gušće tkanje smanjuje protok zraka i propušta manje svjetla, pa se stavlja samo tamo gdje je alergija razlog.',
          'Nijedna standardna mrežica ne zaustavlja najsitnije mušice. Gušće tkanje ih zadrži, ali istovremeno osjetno smanji propuh, pa se dobiva jedno na račun drugoga.',
        ],
      },
      {
        naslov: 'Na što paziti pri naručivanju',
        natuknice: [
          'Reci mjeri li se otvor u svjetlu ili vanjski gabarit okvira — po tome se razlikuje gotova mjera.',
          'Provjeri ima li prostora za kazetu rolo komarnika ako je vani roleta ili nadstrešnica.',
          'Za vrata kroz koja se često prolazi biraj izvedbu s nižom donjom vodilicom.',
          'Boju okvira uskladi s prozorom; kod aluminija se radi po RAL karti.',
        ],
      },
    ],
  },
  /*{
    slug: 'termalni-zid',
    naslov: 'Što je termalni zid i zašto je dobra investicija',
    seoNaslov: 'Što je termalni zid',
    sazetak:
      'Termalni zid je velika ostakljena stijena s aluminijskim profilima koji imaju prekinuti toplinski most, pa se dobiva puno svjetla bez hladnog zida zimi.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Pod termalnim zidom se u stolariji najčešće misli na veliku ostakljenu stijenu izvedenu u aluminijskim profilima s prekinutim toplinskim mostom. Umjesto zida s prozorom dobiva se ploha stakla koja propušta svjetlo, a zbog prekinutog toplinskog mosta ne postaje hladna površina zimi.',
          'Investicija se opravdava na dva načina: prostorija dobiva bitno više dnevnog svjetla i pogled, a moderno ostakljenje gubi znatno manje topline od stare stijene s tankim profilima i običnim staklom koju najčešće zamjenjuje.',
        ],
      },
      {
        naslov: 'Zašto je prekinuti toplinski most ključan',
        odlomci: [
          'Aluminij vrlo dobro provodi toplinu. Ako je profil jedan komad metala od vanjske do unutarnje strane, hladnoća prolazi ravno kroz njega, okvir se iznutra rosi i oko stijene se osjeti hladan zrak.',
          'Kod profila s prekinutim toplinskim mostom vanjski i unutarnji dio su odvojeni i spojeni poliamidnim trakama koje ne provode toplinu. Time se prekida put hladnoći kroz metal. To je razlika između stijene koja radi i stijene koja zimi stvara kondenzaciju.',
        ],
      },
      {
        naslov: 'Što određuje koliko će stvarno izolirati',
        natuknice: [
          'Podatak za cijelu stijenu, ne za samo staklo. Okvir i rub stakla uvijek pokvare vrijednost koja piše za staklo.',
          'Omjer stakla i profila. Što je više stakla, a manje okvira, to je ukupna vrijednost bolja, jer je dobro staklo danas bolji izolator od profila.',
          'Distancer s toplim rubom umjesto aluminijskog, jer je rub stakla mjesto gdje se rosi.',
          'Strana svijeta. Na jugu i zapadu treba računati na pregrijavanje ljeti i predvidjeti sjenilo, jer velika staklena ploha bez zaštite pretvara prostoriju u staklenik.',
          'Ugradnja. Velika stijena traži pravilan oslonac i brtvljenje u tri sloja; kod te veličine greška u ugradnji poništi kvalitetu profila.',
        ],
      },
      {
        naslov: 'Gdje ima najviše smisla',
        odlomci: [
          'Najviše se dobiva ondje gdje se zamjenjuje stara ostakljena stijena bez prekinutog toplinskog mosta — na terasama, zimskim vrtovima, poslovnim prostorima i izlozima. Tu je razlika u udobnosti odmah očita, a stara stijena je često i najhladnija ploha u prostoru.',
          'Kod novogradnje se odluka donosi zajedno s projektantom, jer velika ostakljena ploha utječe i na grijanje i na hlađenje, a nosivi dio zida ne smije se smanjivati bez proračuna.',
        ],
      },
      {
        naslov: 'Prije nego se naruči',
        odlomci: [
          'Traži da u ponudi piše vrijednost za cijelu stijenu, oznaka profilnog sustava i sastav stakla. To su tri podatka po kojima se ponude uopće mogu usporediti; sve ostalo je opis.',
          'Za velike plohe provjeri i način otvaranja. Klizna izvedba štedi prostor, ali brtvi slabije od zaokretno-nagibne, pa se kod izloženih pozicija bira sustav koji je ispitan na propuštanje zraka i kiše.',
        ],
      },
    ],
  },*/
]

const en: FaqClanak[] = [
  {
    slug: 'ugradnja-prozora',
    naslov: 'How long a window installation takes — from removal to clean-up',
    seoNaslov: 'How long a window installation takes',
    sazetak:
      'Fitting a single window takes roughly two to three hours, and an average flat is usually finished in one to two working days.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Allow roughly two to three hours for one standard window, from pulling out the old frame to a fully sealed new one. An average flat with five to eight openings is usually done in one to two working days. Plastering and painting the reveals are not included in that time — they are a separate stage that follows.',
          'The exact time depends on how the old window was built in. A frame that lifts out whole goes quickly; a frame cast into concrete or built in together with the sill has to be cut out, which takes longer.',
        ],
      },
      {
        naslov: 'Before the crew arrives',
        odlomci: [
          'Measuring happens well before installation, because windows are made to size. Several weeks of production usually pass between accepting the quote and the crew arriving. The opening is measured, checked for plumb and level, and the opening direction of every sash is agreed.',
          'The day before, the room is prepared: curtains and rails come down, furniture is moved at least a metre from the wall, and whatever stays is covered. Removal always makes dust, especially with old timber frames set in plaster.',
        ],
      },
      {
        naslov: 'Removing the old windows',
        odlomci: [
          'The sashes come off first, then the frame is cut and taken out in pieces. Cutting is almost always faster and tidier than levering the frame out, because it damages the reveals less. The old sill comes off with the frame if it is being replaced.',
          'During this stage the opening stands open, so several rooms are not normally done at once. In rain or strong wind the crew works opening by opening and closes each one before opening the next.',
        ],
      },
      {
        naslov: 'Fitting and sealing',
        odlomci: [
          'The new frame is set on packers, levelled and plumbed, and fixed mechanically with anchor plates or screws through the frame. Sealing only starts once the frame is fixed and checked.',
          'Sealing is done with foam which acts as an insulator.',
        ],
      },
      {
        naslov: 'What is left afterwards',
        odlomci: [
          'What remains is the reveals, which need filling and painting, and the frame-to-wall joint, which is sometimes siliconed. That work is done by a plasterer or arranged as an extra service, usually a day or two later once the foam has cured.',
          'Before the crew leaves, every sash is checked for smooth opening and closing, the tilt position is tested, and the drainage holes along the bottom of the frame are checked to be clear.',
        ],
        natuknice: [
          'Peel the protective film off the profiles within a few days — in the sun it bakes on and becomes hard to remove.',
          'Clean for the first time with a soft cloth and soapy water, no solvents.',
          'After a winter installation, air the room more often for the first week — the foam and plaster hold a lot of moisture.',
        ],
      },
    ],
  },
  {
    slug: 'dvostruko-ili-trostruko-staklo',
    naslov: 'Double or triple glazing — which one pays off',
    seoNaslov: 'Double or triple glazing',
    sazetak:
      'Triple glazing insulates about twice as well as double, but on the coast it often does not pay off, because winters are mild and the glass is heavier and dearer.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Good double glazing with a low-emissivity coating and argon has a heat transfer coefficient of about 1.0 to 1.1 W/m²K. Triple glazing, with two coatings and two cavities, brings that down to roughly 0.5 to 0.7 W/m²K. That is broadly a twofold difference in heat lost through the glass itself.',
          'Whether that difference pays off depends less on the glass and more on the building. In a well-insulated house with large glazed areas and underfloor heating, triple glazing shows up in both comfort and running costs. In a flat on the Kvarner coast, with mild winters and smaller windows, the difference is often too small to earn itself back.',
        ],
      },
      {
        naslov: 'What actually does the insulating',
        odlomci: [
          'The number of panes is only part of it. A low-emissivity coating is a thin metallic layer that lets light through but reflects heat radiation back into the room. It accounts for most of the difference against plain uncoated glass, which sits around 2.7 W/m²K.',
          'The cavity is filled with argon because the gas conducts heat less readily than air. The optimum cavity is about 14 to 16 millimetres. Wider does not help, because the gas starts to circulate inside the cavity and carries heat by convection.',
          'The edge of the glass is where most is lost. A conventional aluminium spacer between the panes is a thermal bridge, and condensation appears there first. A warm-edge spacer, in plastic or stainless steel, improves the whole window and reduces misting around the perimeter.',
        ],
      },
      {
        naslov: 'The glass is not the window',
        odlomci: [
          'The figure usually quoted in an offer refers to the glass alone. What matters for comparison is the figure for the whole window, which includes the frame and the glass edge, and it is always worse than the glass figure.',
          'Triple glazing in a weak frame does not deliver what it promises. Given the same budget and a choice between better glass and a better frame, you generally gain more by investing in the profile and in a proper installation.',
        ],
      },
      {
        naslov: 'What else triple glazing brings',
        natuknice: [
          'It is roughly half as heavy again, so the sash, hardware and hinges carry more load. On large sashes that means stronger hardware and sometimes a size limit.',
          'It lets less solar heat through, which partly cancels the winter gain on a south elevation but helps against overheating in summer.',
          'It is not automatically quieter. For sound insulation, unequal pane thicknesses and laminated glass matter more than the number of cavities. Three identical panes can perform worse than two different ones.',
          'Condensation on the outer face on a cold morning is not a fault. It shows the outer pane stays cold because heat from the room is not reaching it.',
        ],
      },
      {
        naslov: 'When it is worth it, and when it is not',
        odlomci: [
          'Triple glazing makes sense with large glazed areas, north-facing rooms, a continental climate, and houses heated at a low temperature through the season. It also makes sense as part of a full energy retrofit, when it is worth raising the standard of everything at once.',
          'When replacing a few windows in an older flat with an uninsulated facade, the loss through the walls is so much greater than the loss through the glass that the difference between double and triple all but disappears from the bill.',
        ],
      },
    ],
  },
  {
    slug: 'zamjena-brtvi-na-prozorima',
    naslov: 'Replacing window seals — the signs and the job itself',
    seoNaslov: 'Replacing window seals',
    sazetak:
      'Window seals last roughly ten to fifteen years. Once they harden you get draughts along the sash, whistling in the wind, and condensation on the frame.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'A seal is the rubber profile in the groove of the sash and frame that closes the joint under pressure. It lasts roughly ten to fifteen years, less on south and west elevations where there is more sun, and less near the sea where salt and UV add up.',
          'Replacing the seal on one window takes fifteen to thirty minutes and does not require taking the sash out. A whole flat is usually done in a single visit.',
        ],
      },
      {
        naslov: 'How to tell a seal has given up',
        natuknice: [
          'You feel cold air moving along the edge of the closed sash, most often at the bottom.',
          'In stronger wind there is a whistle or hiss that was not there before.',
          'The frame mists up rather than the glass. Condensation in the middle of the pane is a different matter and usually means too much humidity in the room.',
          'The rubber feels hard, is cracked at the corners, or has stayed permanently flattened and no longer springs back.',
          'The seal has come out of its groove or shrunk, leaving a gap in the corner.',
        ],
      },
      {
        naslov: 'The paper test',
        odlomci: [
          'Lay a sheet of paper across the frame, close and lock the sash, then pull the paper. If it comes out with no resistance at all, there is no pressure at that point. Repeat at several points around the sash — top, bottom, and on the hinge side.',
          'If the paper slides out easily at only one point, the problem is more often the hardware than the seal. If it slides out easily everywhere, the seal is finished.',
        ],
      },
      {
        naslov: 'It is not always the seal',
        odlomci: [
          'A common cause of draughts is reduced closing pressure. The locking points on the sash are cams that can be turned to increase or reduce pressure on the seal. Many windows have a summer and winter setting for exactly this reason.',
          'The other common cause is a dropped sash. Over the years the sash settles on the lower hinge and stops pressing in the opposite corner. That is fixed by adjusting the hinges, not by a new seal.',
          'So it is worth calling out a service visit first. Adjusting the hardware costs less than replacing seals and often solves the whole problem.',
        ],
      },
      {
        naslov: 'Materials and fitting',
        odlomci: [
          'EPDM rubber is the most common, resistant to UV and to temperature swings, and today the standard on PVC windows. TPE can be welded at the corners so there is no joint to leak. Silicone seals cope with the widest temperature range but cost more and are less common.',
          'The seal is chosen to match the profile system, because the groove differs between manufacturers. That is why you bring a sample of the old seal, or know the system reference, when ordering.',
          'The seal must not be stretched during fitting. Pulled in tight, it returns to its own length over time and leaves a gap in the corner. It is fitted relaxed, with a small surplus at the corners.',
        ],
      },
      {
        naslov: 'Making seals last',
        natuknice: [
          'Once a year, wipe the seals with a damp cloth and treat them with a silicone or glycerine based product.',
          'Never use solvents, thinners or petroleum-based oils — rubber swells and breaks down.',
          'Do not paint the seals. Paint stiffens them and they crack the first time the window opens.',
          'In winter, do not leave a sash tilted for long. Cold air passing over the seal constantly shortens its life.',
        ],
      },
    ],
  },
  {
    slug: 'alu-ili-pvc-prozori',
    naslov: 'Aluminium or PVC windows — differences, cost and how to choose',
    seoNaslov: 'Aluminium or PVC windows',
    sazetak:
      'PVC insulates better per euro spent, while aluminium costs less, carries large openings with slimmer sightlines. Flats suit both PVC and alumunium, large screens and shopfronts suit aluminium more.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'For a standard flat or house, a PVC window gives better insulation for the money and is generally noticeably cheaper than an aluminium one of the same size. Aluminium is chosen when the opening is large, when slim frames and maximum glass are wanted, or for shopfronts and commercial premises.',
          'Both materials can be excellent and both can be poor. The gap between a cheap and a good system within the same material is often wider than the gap between the materials.',
        ],
      },
      {
        naslov: 'How a PVC profile is built',
        odlomci: [
          'A PVC profile is hollow and divided into chambers. More chambers means more partitions slowing the passage of heat, which is why five and six chamber profiles are the norm today. Alongside the chamber count, the installation depth of the profile matters just as much — a deeper profile has more room for insulation and for thicker glass.',
          'Inside the profile is a steel reinforcement, because PVC on its own is not rigid enough. The corners are welded, so the frame is one piece with no joints to leak.',
          'The weakness of PVC is stiffness. Large sashes and wide screens need more and more steel, and the profile becomes heavy and bulky, so at some point aluminium becomes the better answer both structurally and on price.',
        ],
      },
      {
        naslov: 'Why aluminium needs a thermal break',
        odlomci: [
          'Aluminium conducts heat , which is bad for a window. A quality aluminium profile is therefore made from two separate halves, outer and inner, joined by polyamide strips that do not conduct heat. That is the thermal break.',
          'An aluminium profile without a thermal break is still used today where insulation does not matter — heated and unheated spaces, garage and cellar doors, partitions.',
          'An aluminium frame generally remains a slightly poorer insulator than a good PVC profile, but it carries far larger sashes with a slimmer visible frame, so more daylight reaches the room.',
        ],
      },
      {
        naslov: 'Looks, colour and coastal air',
        odlomci: [
          'Aluminium is powder coated in any RAL shade and the colour is part of the surface, so it holds up and can be renewed. For buildings near the sea, ask for a coating rated for coastal exposure, because salt accelerates the failure of weaker finishes.',
          'PVC is coloured with foil. The choice of decors is wide, but dark foils heat up considerably in strong sun, so those profiles need extra reinforcement and a more careful choice of system.',
          'There is also a timber-aluminium combination, with wood inside and an aluminium shell outside protecting against rain and sun. It is the most expensive but also the most durable option for houses.',
        ],
      },
      {
        naslov: 'Lifespan and upkeep',
        natuknice: [
          'An aluminium frame lasts longest and is practically unaffected by weather.',
          'A PVC frame realistically lasts twenty to forty years, depending on profile quality and sun exposure.',
          'The hardware is the same kind of mechanism in both and needs the same annual care.',
          'Seals wear at the same rate regardless of frame material.',
          'Both materials are recyclable; aluminium has the highest scrap value.',
        ],
      },
      {
        naslov: 'How to decide',
        odlomci: [
          'If you are replacing windows of standard size in a flat or family house, PVC or aluminium an ok choice. What to choose? The answer lies in the presence of salt, sun, and temperature differences.',
          'For a sliding terrace screen, a large fixed opening, a shopfront or the entrance doors of commercial premises, aluminium is the right call, because PVC at those dimensions needs too much reinforcement.',
        ],
      },
    ],
  },
  {
    slug: 'odrzavanje-pvc-prozora',
    naslov: 'Looking after PVC windows — hardware, seals and cleaning',
    seoNaslov: 'Looking after PVC windows',
    sazetak:
      'PVC windows need attention once a year: oiling the hardware, treating the seals, cleaning the profiles and checking the drainage holes at the bottom of the frame.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Once a year is enough for most homes. On a busy road, near the sea, or on a very exposed elevation, do it twice a year, because salt, dust and grit build up faster in the hardware and on the seals.',
          'Going over one window takes a few minutes and needs only acid-free and resin-free oil, a rubber care product and a soft cloth.',
        ],
      },
      {
        naslov: 'Hardware',
        odlomci: [
          'The hardware is the mechanism hidden in the sash groove: the stay at the top, the drive bars along the sides, and the locking cams around the perimeter. All moving parts need oil, and the locking cams need grease.',
          'Use an acid-free and resin-free oil, or the spray specified by the hardware manufacturer. A general-purpose spray for freeing seized bolts is not a lubricant — it displaces moisture and evaporates, leaving the hardware dry after a few weeks.',
          'Wipe the dust out of the sash groove before oiling, otherwise the grease mixes with dirt and does the opposite of what it should.',
        ],
      },
      {
        naslov: 'Seals',
        odlomci: [
          'Wipe the seals with a damp cloth, then treat them with a silicone or glycerine based product. That keeps the rubber elastic so it does not crack in the cold.',
          'Do not use solvents or petroleum-based products, and do not paint the seals. Both cause permanent damage.',
        ],
      },
      {
        naslov: 'Drainage holes',
        odlomci: [
          'Along the bottom of the frame, on the outside, are small openings that let out any water that gets into the profile. This is the part most often forgotten, and the one that causes the most trouble when it blocks.',
          'If those openings fill with dust, leaves or plaster debris, water stays in the profile, freezes in winter and gradually forces the joints apart. Check them once a year and clear them with thin wire or a vacuum if needed, never with anything sharp.',
        ],
      },
      {
        naslov: 'Cleaning profiles and glass',
        natuknice: [
          'Wash the profiles with lukewarm soapy water and a soft cloth.',
          'Never use abrasives, scouring pads, acetone, cellulose thinners or oven cleaner — the PVC surface dulls permanently.',
          'Peel the protective film off new profiles within a few weeks; in the sun it bakes on and leaves adhesive behind.',
          'Water and a squeegee are enough for the glass; alcohol-based products leave marks on the seals.',
        ],
      },
      {
        naslov: 'Adjustment and correct use',
        odlomci: [
          'A sash that catches at the bottom corner when closing has usually dropped and needs lifting at the lower hinge. The adjusting screws sit under a plastic cap on the hinge. If you are not sure which screw does what, call a service technician rather than turning screws at random — the wrong adjustment easily loses pressure on the seal.',
          'Many hardware sets have a summer and winter position for the locking cams, which increases or reduces pressure on the seal. If you use it, change it once in autumn and once in spring, and set every cam the same way.',
          'The handle should only be turned with the sash closed. Turned while the sash is open, the mechanism can end up in an intermediate position and the sash hangs from one hinge. Newer hardware has a blocker that prevents this, but older sets do not.',
        ],
        natuknice: [
          'Do not hang anything on an open sash.',
          'In winter, do not leave a sash tilted for long — the wall around the opening cools and condensation forms.',
          'Air the room briefly with the sash fully open rather than for hours on tilt. The air changes faster and the wall stays warm.',
        ],
      },
    ],
  },
  {
    slug: 'vrste-komarnika',
    naslov: 'Types of insect screens for windows and doors — which to choose',
    seoNaslov: 'Types of insect screens',
    sazetak:
      'Windows usually take a fixed-frame or roller screen, while balcony and terrace doors take a sliding, pleated or hinged screen.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'The choice comes down to whether people walk through the opening. On a window nobody passes through, a fixed-frame screen is the cheapest and seals best. Balcony and terrace doors need something that opens: a sliding screen, a pleated one, or one on hinges.',
          'All of them are made to size, because the actual opening is measured. On PVC windows some versions clip onto the frame with hooks, without drilling the profile.',
        ],
      },
      {
        naslov: 'Fixed-frame screen',
        odlomci: [
          'An aluminium frame with the mesh stretched across it, hooked onto the outside of the window. It is the cheapest version, seals best because there are no moving parts, and can be taken down and stored for winter.',
          'The drawback is that it has to come off to open the sash fully, so it is not for openings people pass through or for windows opened wide often.',
        ],
      },
      {
        naslov: 'Roller screen',
        odlomci: [
          'The mesh is wound onto a spring inside a cassette and pulled out as needed, like a blind. It stays on the window all year, and while rolled up the mesh is protected from sun and dirt, so it lasts longer.',
          'It comes in a vertical version for windows and a side-drawing version for doors. It costs more than a fixed frame and has a mechanism that wears, but it is the most practical option for windows that are opened constantly.',
        ],
      },
      {
        naslov: 'For doors: sliding, pleated and hinged',
        natuknice: [
          'A sliding screen runs on tracks beside a sliding door and follows the logic of the door itself. The natural choice alongside sliding terrace doors.',
          'A pleated screen folds to one side. Its bottom track is very low and easy to step over, it handles wide openings well, and it can be made to open from both sides.',
          'A hinged screen opens like a door and closes on a magnet or spring. It is the simplest and most robust, but needs room to swing.',
        ],
      },
      {
        naslov: 'Mesh types for fixed-frame screens',
        odlomci: [
          'The standard mesh is fibreglass. It is flexible, does not stay dented and copes well with wind. Aluminium mesh is stiffer and more durable, but a knock leaves a dent that stays.',
          'For households with pets there is a reinforced mesh that stands up to claws. There is also a finer pollen mesh, but its tighter weave reduces airflow and lets in less light, so it is fitted only where allergy is the reason.',
          'No standard mesh stops the smallest midges. A tighter weave holds them back but noticeably cuts the draught through the window, so one is gained at the cost of the other.',
        ],
      },
      {
        naslov: 'What to check when ordering',
        natuknice: [
          'Say whether the clear opening or the outer frame dimension was measured — the finished size differs accordingly.',
          'Check there is room for a roller cassette if there is already a shutter or canopy outside.',
          'For doors in constant use, choose a version with a lower bottom track.',
          'Match the frame colour to the window; aluminium is finished to the RAL chart.',
        ],
      },
    ],
  },
  /*{
    slug: 'termalni-zid',
    naslov: 'What a thermal wall is, and why it pays off',
    seoNaslov: 'What a thermal wall is',
    sazetak:
      'A thermal wall is a large glazed screen in aluminium profiles with a thermal break, giving a room far more daylight without a cold surface in winter.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'In joinery, a thermal wall usually means a large glazed screen built in aluminium profiles with a thermal break. Instead of a wall with a window in it, you get a plane of glass that lets light through and, thanks to the thermal break, does not turn into a cold surface in winter.',
          'The investment justifies itself in two ways: the room gains far more daylight and a view, and modern glazing loses considerably less heat than the old screen with thin profiles and plain glass that it usually replaces.',
        ],
      },
      {
        naslov: 'Why the thermal break is the key part',
        odlomci: [
          'Aluminium conducts heat very well. If the profile is one piece of metal from outside to inside, cold passes straight through it, the frame mists up indoors, and cold air is felt around the screen.',
          'In a profile with a thermal break, the outer and inner halves are separate and joined by polyamide strips that do not conduct heat. That interrupts the path for cold through the metal. It is the difference between a screen that works and one that produces condensation in winter.',
        ],
      },
      {
        naslov: 'What determines how well it really insulates',
        natuknice: [
          'The figure for the whole screen, not for the glass alone. The frame and the glass edge always spoil the value quoted for glass.',
          'The ratio of glass to profile. More glass and less frame gives a better overall value, because good glass today insulates better than the profile.',
          'A warm-edge spacer instead of an aluminium one, since the edge of the glass is where misting starts.',
          'Orientation. On south and west elevations, allow for summer overheating and plan shading, because a large unshaded glass plane turns a room into a greenhouse.',
          'Installation. A large screen needs proper support and three-layer sealing; at that size an installation error cancels out the quality of the profile.',
        ],
      },
      {
        naslov: 'Where it makes most sense',
        odlomci: [
          'The biggest gain comes from replacing an old glazed screen without a thermal break — on terraces, conservatories, commercial premises and shopfronts. There the difference in comfort is immediate, and the old screen is often the coldest surface in the space.',
          'In new build, the decision is taken with the designer, because a large glazed plane affects both heating and cooling, and the load-bearing part of the wall must not be reduced without calculation.',
        ],
      },
      {
        naslov: 'Before you order',
        odlomci: [
          'Ask for the offer to state the value for the whole screen, the profile system reference and the glass build-up. Those are the three figures that make offers comparable at all; everything else is description.',
          'For large planes, check the opening method too. A sliding version saves space but seals less well than a tilt-and-turn, so on exposed positions choose a system tested for air and water tightness.',
        ],
      },
    ],
  },*/
]

export const faqClanci: Record<Lang, FaqClanak[]> = { hr, en }

/** Redoslijed adresa je isti u oba jezika, pa se slugovi čitaju iz hrvatskog niza. */
export const faqSlugovi = hr.map((c) => c.slug)
