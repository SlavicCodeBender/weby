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
  /**
   * Vanjske poveznice na kraju odjeljka (npr. na službenu stranicu Fonda).
   * Link uvijek na stalnu, "trajnu" stranicu (npr. opći pregled programa),
   * nikad na stranicu jednog konkretnog natječaja koji istekne — inače link
   * s vremenom postane mrtav.
   */
  vanjskeVeze?: { url: string; tekst: string }[]
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
  /**
   * Poveznice na srodne članke na dnu stranice — pravi interni linkovi,
   * ne samo spomenuti naslovi. `tekst` je naziv onako kako stoji na jeziku
   * ovog članka (nije nužno identičan `naslov` polju ciljanog članka).
   */
  povezano?: { slug: string; tekst: string }[]
}

const hr: FaqClanak[] = [
  {
    slug: 'ugradnja-prozora',
    naslov: 'Koliko traje ugradnja prozora — od demontaže do čišćenja',
    seoNaslov: 'Koliko traje ugradnja prozora',
    sazetak:
      'Ugradnja jednog prozora traje otprilike 2-3 sata, a prosječan stan se u pravilu završi u 1-2 dana, uz uključivanje demontažei i čiščenja',
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
    sazetak: 'Trostruko staklo bolje izolira, no na Kvarneru se zbog blagih zima često više isplati dvostruko staklo koje nudi odličan omjer cijene i uštede.',
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
      'Dotrajale brtve stvaraju propuh i rošenje, što u Rijeci tjekom bure dolazi do izražaja; brza zamjena rješava problem u jednom danu.',
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
  {
    slug: 'izmjera-i-montaza-izvan-rijeke',
    naslov: 'Izmjera i montaža izvan Rijeke i Primorsko-goranske županije',
    seoNaslov: 'Izmjera i montaža izvan PGŽ',
    sazetak:
      'Izmjera i ponuda su besplatne u Rijeci i okolici, a montiramo i izvan Primorsko-goranske županije — na Krku i Cresu, u Istarskoj županiji i povremeno u Zadru, uz naplatu putnih troškova za izmjeru na udaljenijim lokacijama.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Da, radimo izmjere i montažu i izvan Rijeke i Primorsko-goranske županije. U Rijeci i bližoj okolici izmjera i ponuda su u potpunosti besplatne; za udaljenije lokacije, poput otoka, naplaćujemo putne troškove dolaska na izmjeru, dok samu izradu ponude ne naplaćujemo dodatno.',
          'Dugogodišnja nam je praksa montirati i po otocima, pa udaljenost sama po sebi rijetko bude razlog da se ne javite.',
        ],
      },
      {
        naslov: 'Gdje smo do sada montirali',
        natuknice: [
          'Cijela Primorsko-goranska županija.',
          'Otoci Krk i Cres.',
          'Cijela Istarska županija.',
          'Zadar i okolica.',
        ],
      },
      {
        naslov: 'Rab, Pag i Lošinj — na upit',
        odlomci: [
          'Osim Krka i Cresa, dolazimo i na otoke Rab, Pag i Lošinj, ovisno o dogovoru i opsegu posla. Javite nam se s lokacijom i opisom posla pa provjeravamo detalje zajedno.',
        ],
      },
      {
        naslov: 'Možete li nam sami poslati mjere',
        odlomci: [
          'Da. Možete nam poslati vlastite mjere i opis onoga što trebate, na temelju čega izradimo okvirnu ponudu. Ako vam ponuda odgovara, tek tada dolazimo na izmjeru radi potvrde mjera prije same izrade prozora ili vrata.',
          'Ta izmjera se naplaćuje, ali je dobar način da unaprijed znate okvirnu cijenu prije nego prihvatite trošak dolaska na teren — posebno korisno ako ste udaljeniji od Rijeke.',
        ],
      },
      {
        naslov: 'Kako se naplaćuje izmjera izvan Rijeke',
        odlomci: [
          'Za Rijeku i najbližu okolicu izmjera i ponuda ne koštaju ništa. Za lokacije koje traže dulji put ili trajekt naplaćujemo putni trošak za dolazak na samu izmjeru — to pokriva gorivo, vrijeme i, kod otoka, kartu za trajekt.',
          'Ponuda koju nakon izmjere dobijete ostaje besplatna bez obzira na udaljenost; naplaćuje se isključivo dolazak na teren.',
        ],
      },
      {
        naslov: 'Vrijedi li se javiti ako ste izvan županije',
        odlomci: [
          'Da. Kod većih projekata — cijele kuće, apartmana ili više otvora odjednom — putni trošak je zanemariv u odnosu na ukupnu vrijednost posla, pa se izmjera gotovo uvijek isplati organizirati.',
          'Najbolje je jednostavno nas kontaktirati s lokacijom i opisom posla; javit ćemo vam konkretno vrijedi li doći na izmjeru i koliki bi bio putni trošak.',
        ],
      },
    ],
  },
  {
    slug: 'cijena-prozora-i-vrata',
    naslov: 'Cijena PVC i ALU prozora i vrata — od čega stvarno ovisi',
    seoNaslov: 'Cijena PVC i ALU prozora — od čega ovisi',
    sazetak:
      'Cijena prozora i vrata ovisi o materijalu, profilu, staklu, boji i broju otvora, pa jedinstvena cijena ne postoji bez konkretnih mjera — radimo kalkulator koji će dati okvirnu procjenu prije nego se javite.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Cijena PVC ili ALU prozora ovisi o materijalu, profilu, staklu, boji i broju otvora, pa jedinstvena cijena ne postoji dok se ti podaci ne znaju. Zato ozbiljna ponuda uvijek dolazi tek nakon razgovora ili izmjere, ne unaprijed.',
          'Radimo kalkulator koji će vam dati okvirnu procjenu u par klikova, bez da prije toga trebate znati bilo što o PVC ili ALU stolariji.',
        ],
      },
      {
        naslov: 'Zašto cijena toliko varira',
        odlomci: [
          'Materijal je prvi faktor — PVC i aluminij imaju različitu cijenu proizvodnje i različite prednosti ovisno o veličini otvora. Profil dalje diže ili spušta cijenu: broj komora, dubina ugradnje i debljina ojačanja nisu isti kod jeftinijeg i kvalitetnijeg sustava.',
          'Staklo je sljedeći veliki faktor — dvostruko i trostruko staklo razlikuju se ne samo u izolaciji nego i u težini, pa trostruko staklo traži jači i skuplji okov. Boja (RAL folija ili plastifikacija) i dodaci poput komarnika, klupčica i praga dodaju na cijenu, a broj i veličina otvora određuju ukupan iznos više nego bilo koji pojedinačni izbor.',
        ],
      },
      {
        naslov: 'Zašto je okvirna cijena i dalje vrijedna',
        odlomci: [
          'Znamo da je većini ljudi jasno da okvirna procjena nije isto što i konačna ponuda. Izrazito je frustrirajuće kada samo želite znati u kakav trošak se upuštate, a cijene se nigdje ne navode. Upravo za to kalkulator i služi — ne zamjenjuje pravu ponudu, nego vam u par klikova da realan raspon prije nego što se javite za ponudu.',
          'Konačna cijena i dalje ovisi o izmjeri na terenu i vašim individualnim željama jer se prozori i vrata rade po mjeri konkretnog otvora — ali barem znate red veličine troška unaprijed, bez čekanja.',
        ],
      },
      {
        naslov: 'Kalkulator koji radimo',
        odlomci: [
          'Kalkulator je trenutno u izradi. Cilj nam je da bude jednostavan za korištenje — da ne trebate znati ništa o profilima, komorama ili vrstama stakla da biste dobili smislenu procjenu, i da radi jednako dobro na mobitelu kao i na računalu.',
          'Ne obećavamo točan datum lansiranja jer ga želimo objaviti tek kad stvarno radi kako treba, ne prije — okvirno računamo na jedan do tri mjeseca.',
        ],
      },
    ],
    povezano: [
      { slug: 'dvostruko-ili-trostruko-staklo', tekst: 'Dvostruko ili trostruko staklo — što se isplati' },
      { slug: 'alu-ili-pvc-prozori', tekst: 'Alu ili PVC prozori — što odabrati' },
      { slug: 'alu-ili-pvc-vrata', tekst: 'Alu ili PVC vrata — što odabrati' },
      { slug: 'vrste-komarnika', tekst: 'Vrste komarnika — koji odabrati' },
      { slug: 'ugradnja-prozora', tekst: 'Koliko traje ugradnja prozora' },
    ],
  },
  {
    slug: 'alu-ili-pvc-vrata',
    naslov: 'Alu ili PVC vrata — razlike, cijena i kad je bolja staklena stijena',
    seoNaslov: 'Alu ili PVC vrata — što odabrati',
    sazetak:
      'Koji je materijal bolji ovisi prije svega o tome kakva su vrata: za grijani prostor PVC i aluminij s prekinutim toplinskim mostom su ravnopravni izbori, a za podrum, garažu ili spremište isplativiji je aluminij bez toplinskog mosta jer se prostor ne grije. Kod velikih otvora s puno stakla staklena stijena od aluminija često je bolja od jednog velikog krila.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Ne postoji jedan odgovor za sva vrata — odluka prije svega ovisi o tome kakva su vrata u pitanju i kakav je prostor iza njih. Za standardna ulazna ili balkonska vrata u grijani prostor PVC daje bolju izolaciju po uloženom novcu, dok se aluminij bira kad je otvor velik, kad se traži puno stakla uz tanak okvir, ili kad vrata moraju izdržati veće opterećenje i češću upotrebu.',
          'Kod velikih otvora — terase, ulaza u dnevni boravak, poslovnog prostora — često se više isplati klizna ili fiksna staklena stijena od aluminija nego jedno veliko krilno vrata, jer stijena ima manje okvira i više stakla na istoj površini.',
        ],
      },
      {
        naslov: 'Prvo pitanje: grije li se prostor iza vrata',
        odlomci: [
          'Prije usporedbe materijala vrijedi razdvojiti dvije situacije. Ulazna vrata u stan ili kuću i balkonska vrata vode u grijani prostor, pa izolacija stvarno nešto znači — tu su PVC i aluminij s prekinutim toplinskim mostom podjednako dobar izbor, a između njih najčešće odlučuje cijena i izgled koji kupac želi.',
          'Podrumska, garažna i vrata prema spremištu vode u prostor koji se ne grije. Tamo nema smisla plaćati za izolaciju koju ništa ne koristi — logičniji i jeftiniji izbor je aluminij bez prekinutog toplinskog mosta, takozvani hladni profil, koji je čvrst i izdržljiv, a ne nosi cijenu toplinske izolacije koja se u tom prostoru ionako ne osjeti.',
          'Isto pravilo vrijedi i za pregrade unutar zgrade koje ne dijele grijani od negrijanog prostora, nego dva negrijana prostora, npr. spremište od stubišta — i tu je hladni aluminijski profil sasvim dovoljan.',
        ],
      },
      {
        naslov: 'Zašto je PVC ograničen kod vrata',
        odlomci: [
          'PVC krilo vrata gradi se isto kao prozorsko — šuplji profil s više komora i čeličnim ojačanjem unutra, s ispunom (izolacijskim panelom ili staklom) u donjem i gornjem dijelu krila. Za standardna ulazna vrata širine do stotinjak centimetara to je sasvim dovoljno čvrsto.',
          'Problem nastaje kod visokih ili širokih krila i kod vrata koja se otvaraju po nekoliko puta dnevno. Teško krilo se s vremenom objesi na šarkama, a veliko opterećenje na jednom PVC profilu bez dodatnog aluminijskog ojačanja dovodi do provjesa i otežanog zatvaranja.',
          'Zato se kod ulaznih vrata širih otvora ili s puno stakla PVC često kombinira s aluminijskim ojačanjem, ili se odmah prelazi na aluminijski profil.',
        ],
      },
      {
        naslov: 'Zašto aluminijska vrata trebaju prekinuti toplinski most',
        odlomci: [
          'Aluminij dobro provodi toplinu, što je za vrata jednako loše kao i za prozor. Kvalitetna ulazna vrata rade se iz dva odvojena profila, vanjskog i unutarnjeg, spojena poliamidnim trakama koje toplinu ne provode — to je prekinuti toplinski most.',
          'Aluminijska vrata bez prekinutog toplinskog mosta i dalje se rade i ugrađuju, ali za negrijane prostore: garaže, spremišta, pregrade prema stubištu. Na ulazu u stan ili kuću bez prekinutog mosta okvir se hladi i rosi iznutra.',
          'Aluminijski profil vrata u pravilu ostaje nešto lošiji izolator od dobrog PVC-a, ali podnosi puno veći i teži panel stakla uz tanji vidljivi okvir — pa ulazna vrata mogu imati veliku staklenu plohu, a da pritom ostanu čvrsta.',
        ],
      },
      {
        naslov: 'Kad je bolja staklena stijena od velikih aluminijskih vrata',
        odlomci: [
          'Vrata, i PVC i aluminijska, uvijek imaju barem donji dio krila pun ili poluprozirni — konstrukcija mora nositi bravu, šarke i zaključavanje, pa čistog stakla ima manje nego što izgleda na prvi pogled.',
          'Staklena stijena — klizna ili fiksna, s uskim aluminijskim profilima i prekinutim toplinskim mostom — nema to ograničenje. Kod ulaza na terasu, veće dnevne prostorije ili poslovnog prostora, gdje je prioritet svjetlo i pogled, a ne pojedinačno zaključavanje jednog krila, staklena stijena često daje više svjetla za sličnu cijenu kao veliko aluminijsko krilno vrata.',
          'Obrnuto vrijedi za ulaz kroz koji se prolazi svaki dan i gdje je važna sigurnost — tu klasična krilna vrata, PVC ili aluminijska, ostaju praktičnija od klizne stijene jer imaju jednostavnije i sigurnije zaključavanje.',
        ],
      },
      {
        naslov: 'Po čemu se prepoznaju bolja aluminijska vrata',
        natuknice: [
          'Prekinuti toplinski most — bez njega vrata nisu prava izolacija, samo aluminijska konstrukcija.',
          'Višetočkasto zaključavanje (tri do pet točaka) — poboljšava ravnomjeran pritisak na brtvu po cijelom opsegu krila, ali sigurnost ne dolazi od samog broja točaka. Loš cilindar brave provaljuje se za manje od minute bez obzira koliko zapornih točaka ima; dobar cilindar, otporan na bušenje i pikanje, tu razliku stvarno pravi.',
          'Debljina i ispuna krila — panel s pjenom ili izolacijskim slojem izolira bitno bolje od tankog, praznog aluminijskog panela.',
          'Sigurnosna klasa (RC2, RC3) — govori koliko dugo krilo i okov odolijevaju pokušaju provale, ne samo je li brava kvalitetna.',
          'Brtvljenje u dvije ili tri razine oko krila, ne samo jedna gumena brtva na rubu.',
        ],
      },
      {
        naslov: 'Vijek trajanja i održavanje',
        natuknice: [
          'Aluminijska vrata najbolje podnose vremenske utjecaje i praktički se ne mijenjaju s godinama.',
          'PVC vrata realno traju dvadesetak do tridesetak godina uz standardnu izloženost suncu i moru — nešto kraće od PVC prozora jer se vrata više koriste i nose teži panel.',
          'Okov kod oba materijala treba isto godišnje podmazivanje, a brtve se troše podjednako bez obzira na okvir.',
        ],
      },
      {
        naslov: 'Kako odlučiti',
        odlomci: [
          'Podrum, garaža, spremište ili druga negrijana prostorija — aluminij bez prekinutog toplinskog mosta. Izolacija se ondje ne osjeti, pa nema smisla platiti za nju.',
          'Ulazna ili balkonska vrata u grijani stan ili kuću, uobičajene širine, bez posebnih zahtjeva na sigurnost — PVC i aluminij s prekinutim toplinskim mostom podjednako dobro izoliraju. Ovdje izbor u pravilu ovisi o cijeni i o tome što kupcu izgleda elegantnije — tanji, moderniji profil aluminija ili klasičniji izgled PVC-a.',
          'Ulazna vrata s puno stakla, veća širina krila ili čest prolaz — aluminij s prekinutim toplinskim mostom i višetočkastim zaključavanjem.',
          'Velik otvor gdje je prioritet svjetlo, pogled ili pristup terasi — prije odluke o jednom velikom aluminijskom krilu, provjeri isplati li se klizna ili fiksna staklena stijena.',
        ],
      },
    ],
    povezano: [
      { slug: 'alu-ili-pvc-prozori', tekst: 'Alu ili PVC prozori — što odabrati' },
      { slug: 'cijena-prozora-i-vrata', tekst: 'Cijena PVC i ALU prozora i vrata' },
    ],
  },
  {
    slug: 'sufinanciranje-zamjene-prozora',
    naslov: 'Sufinanciranje zamjene prozora i vrata — kako funkcionira energetska obnova',
    seoNaslov: 'Sufinanciranje zamjene prozora — kako funkcionira',
    sazetak:
      'Poseban natječaj samo za prozore ne postoji — zamjena stolarije ulazi u širi Javni poziv Fonda za zaštitu okoliša i energetsku učinkovitost za energetsku obnovu obiteljskih kuća ili zgrada, koji sufinancira 60 do 80% troška, ali se otvara povremeno i traje ograničeno.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Ne postoji zaseban natječaj samo za prozore. Zamjena vanjske stolarije — prozora i vrata — jedna je od mjera unutar šireg Javnog poziva Fonda za zaštitu okoliša i energetsku učinkovitost (FZOEU) za energetsku obnovu obiteljskih kuća, odnosno višestambenih zgrada kroz poseban, paralelan program. Poziv nije stalno otvoren; kad se objavi, sufinancira 60% opravdanog troška, a 80% za kuće oštećene u potresu ili na područjima posebne državne skrbi.',
          'Prijava ide za cijeli paket mjera, ne za prozore odvojeno od svega ostalog — zamjena stolarije se prijavljuje ili kao dio cjelovite obnove, ili kao samostalna mjera toplinske zaštite ovojnice, o čemu više u nastavku.',
        ],
      },
      {
        naslov: 'Koje mjere pokriva poziv za obiteljske kuće',
        natuknice: [
          'A1 — cjelovita energetska obnova: toplinska zaštita vanjske ovojnice (fasada, krov, pod, stolarija) zajedno s ugradnjom sustava na obnovljive izvore energije.',
          'A2 — samo toplinska zaštita vanjske ovojnice, bez obnovljivih izvora. Ovdje spada zamjena prozora i vrata kao samostalna mjera, bez fasade ili grijanja.',
          'A3 — sustavi grijanja, hlađenja i pripreme potrošne tople vode na obnovljive izvore energije.',
          'A4 — fotonaponska elektrana za vlastitu potrošnju.',
        ],
      },
      {
        naslov: 'Koliko iznosi sufinanciranje',
        odlomci: [
          'Standardno se sufinancira 60% opravdanog troška, a 80% za kuće oštećene u potresu ili na područjima posebne državne skrbi. Na posljednjem provedenom pozivu maksimalni iznos poticaja išao je do otprilike 62.000 eura po prijavi, ovisno o odabranom paketu mjera — taj iznos vrijedi kao orijentir, a ne kao trajno pravilo, jer se uvjeti svakog poziva objavljuju posebno.',
          'Ako se prijavljuje samo zamjena stolarije (kategorija A2), maksimalni opravdani trošak je niži nego kod cjelovite obnove (A1), jer se odnosi na jednu mjeru, a ne na cijeli paket.',
        ],
      },
      {
        naslov: 'Uvjeti koje kuća i prozori moraju zadovoljiti',
        odlomci: [
          'Prijaviti se mogu vlasnici i suvlasnici obiteljskih kuća do 600 m² i najviše tri stambene jedinice, s više od polovice površine namijenjene stanovanju. Uvjet je i prijavljeno prebivalište u toj kući, uredno vlasništvo i dokaz da je kuća u potpunosti legalna.',
          'Ako se ne mijenja cijela stolarija nego samo dio, preostali prozori i vrata koji ostaju moraju već zadovoljavati važeći tehnički propis. Novi prozori i vrata moraju postići propisani koeficijent prolaska topline za cijeli sklop, ne samo za staklo — to je dodatan razlog zašto podatak "samo za staklo" iz ponude nije dovoljan za prijavu.',
        ],
      },
      {
        naslov: 'Kako izgleda prijava u praksi',
        odlomci: [
          'Prijava ide online, kroz sustav Fonda, u razdoblju dok je poziv otvoren. Potrebna dokumentacija uključuje energetski certifikat, dokaz legalnosti i vlasništva, te ponude izvođača s tehničkim podacima o proizvodima koji se ugrađuju.',
          'Tehnički podaci o proizvodima — koeficijent prolaska topline, sastav stakla — dio su dokumentacije koju uz svaki profil izdaje proizvođač, pa se to rješava zajedno s izvođačem u trenutku prijave. Nije nešto što kupac mora sam unaprijed tražiti ili razumjeti.',
        ],
      },
      {
        naslov: 'Gdje pratiti kad se poziv otvori',
        odlomci: [
          'Pozive objavljuje isključivo Fond za zaštitu okoliša i energetsku učinkovitost, na svojim službenim stranicama — to je jedini izvor na koji se isplati osloniti, jer se uvjeti i rokovi znaju mijenjati iz poziva u poziv.',
          'Za obiteljske kuće prati stranicu programa energetske obnove obiteljskih kuća, a za stanove u zgradama s više vlasnika postoji paralelan program za višestambene zgrade. Popis svih trenutno otvorenih poziva Fonda, iz svih područja, nalazi se na jednom mjestu.',
        ],
        vanjskeVeze: [
          { url: 'https://www.fzoeu.hr/hr/energetska-obnova-obiteljskih-kuca-7679/7679', tekst: 'Energetska obnova obiteljskih kuća — fzoeu.hr' },
          { url: 'https://www.fzoeu.hr/hr/energetska-obnova-visestambenih-zgrada/7683', tekst: 'Energetska obnova višestambenih zgrada — fzoeu.hr' },
          { url: 'https://www.fzoeu.hr/hr/nacionalni-javni-pozivi-i-natjecaji/1367', tekst: 'Svi trenutni pozivi i natječaji Fonda — fzoeu.hr' },
        ],
      },
      {
        naslov: 'Vrijedi li čekati poziv ili zamijeniti odmah',
        odlomci: [
          'Ako prozori propuštaju zrak, rose se iznutra ili je okov toliko dotrajao da vrata ne zatvaraju kako treba, ne isplati se čekati neizvjestan datum sljedećeg poziva — to je trošak koji se već sad osjeti na računu za grijanje. Sufinanciranje je dobar bonus kad je dostupno, ne razlog za odgađanje nužne zamjene.',
          'Za veće projekte, gdje se ionako planira cjelovita obnova fasade i grijanja, ima smisla provjeriti je li poziv u najavi prije nego se krene s radovima — prijava se odnosi na radove koji još nisu izvedeni, ne na već završenu obnovu.',
        ],
      },
    ],
    povezano: [
      { slug: 'cijena-prozora-i-vrata', tekst: 'Cijena PVC i ALU prozora i vrata' },
      { slug: 'alu-ili-pvc-prozori', tekst: 'Alu ili PVC prozori — što odabrati' },
      { slug: 'dvostruko-ili-trostruko-staklo', tekst: 'Dvostruko ili trostruko staklo — što se isplati' },
    ],
  },
  {
    slug: 'kondenzacija-na-prozorima',
    naslov: 'Kondenzacija i rošenje na prozorima — zašto se događa i kako se rješava',
    seoNaslov: 'Kondenzacija na prozorima — uzrok i rješenje',
    sazetak:
      'Rošenje s unutarnje strane prozora gotovo uvijek znači previše vlage u prostoriji, ne kvar na prozoru, i rješava se prozračivanjem i manje vlage u zraku. Rošenje s vanjske strane ujutro nije kvar, nego znak da prozor dobro izolira.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Rošenje s unutarnje strane stakla ili okvira gotovo uvijek znači da u prostoriji ima previše vlage, ne da je prozor loš ili loše ugrađen. Topao vlažan zrak dotakne hladnu površinu stakla ili okvira, ohladi se ispod točke rošenja i vlaga se izluči kao kapljice — isti proces kao rosa na travi ujutro.',
          'Rješenje je gotovo uvijek isto: manje vlage u zraku i redovito prozračivanje, ne zamjena prozora. Rošenje na vanjskoj strani stakla, ujutro prije sunca, sasvim je druga stvar i nije kvar — o tome niže.',
        ],
      },
      {
        naslov: 'Zašto se baš na prozoru prvo pojavi',
        odlomci: [
          'Staklo i okvir su najhladnija površina u prostoriji jer brže gube toplinu od zida, pa vlaga tu prva padne ispod točke rošenja, iako je zrak posvuda u sobi podjednako vlažan.',
          'Kvalitetan noviji prozor dobro brtvi i gotovo ne propušta zrak, što je odlično za grijanje, ali znači da se vlaga iz sobe više ne izmjenjuje sama kroz procjepe kao kod starih, netesnih prozora. Zato se često čini da je "novi prozor kriv" za rošenje, a zapravo je samo otkrio problem s vlagom koji je propuh stare stolarije do tada prikrivao.',
        ],
      },
      {
        naslov: 'Najčešći izvori vlage u stanu',
        natuknice: [
          'Kuhanje bez nape ili s napom koja ne izbacuje zrak van, nego samo kruži unutar prostorije.',
          'Tuširanje i kupanje bez otvorenog prozora ili ventilatora.',
          'Sušenje mokrog rublja u zatvorenom prostoru.',
          'Nova žbuka, estrih ili beton — u prvih godinu do dvije grijanja iz same gradnje isparava velika količina vlage.',
          'Puno sobnog bilja, akvarij ili veći broj ljudi u manjem, slabo prozračenom prostoru.',
        ],
      },
      {
        naslov: 'Kako se rješava',
        odlomci: [
          'Prozračuj kratko i naširoko, s potpuno otvorenim krilom, po nekoliko puta dnevno — umjesto dugo u nagibu. Zrak se izmijeni brzo, zid ostane topao, a vlaga ode van prije nego se stigne kondenzirati.',
          'Kuhinjska napa i ventilator u kupaonici neka rade dok traje izvor vlage i još desetak minuta poslije. Ako je stan useljen u novogradnju ili je sezona tek prva nakon radova, prozračuj češće nego inače cijelu prvu grijanu sezonu.',
          'Odvlaživač zraka ima smisla u prostorijama bez prirodne ventilacije, poput kupaonice bez prozora, ili dok traje sušenje nove gradnje.',
        ],
        natuknice: [
          'Ako rošenje ostane unatoč prozračivanju, provjeri nisu li odvodni otvori na donjem dijelu okvira začepljeni.',
          'Provjeri i jesu li brtve još elastične — stvrdnuta ili spljoštena brtva propušta hladan zrak baš na mjestu gdje se onda rosi.',
        ],
      },
      {
        naslov: 'Kad rošenje ukazuje na stvaran problem s prozorom',
        natuknice: [
          'Rosi se samo na jednom prozoru, dok su svi ostali suhi — provjeri brtvu i ugradnju na tom mjestu, moguć je propust u brtvljenju pjenom oko okvira.',
          'Rosi se stalno na okviru, ne na staklu, kod starijeg aluminijskog prozora — vjerojatno nema prekinuti toplinski most.',
          'Rosi se između dva stakla, unutar samog paketa stakla — to nije kondenzacija iz sobe nego kvar na brtvenom distanceru; rješava se zamjenom stakla, ne cijelog prozora.',
        ],
      },
      {
        naslov: 'Rošenje na vanjskoj strani nije kvar',
        odlomci: [
          'Ujutro, prije nego sunce zagrije okolinu, vanjsko staklo dobrog prozora zna biti rošno ili čak lagano zaleđeno. To je znak da prozor dobro izolira: toplina iz sobe ne dopire do vanjskog stakla, pa ono ostane hladno kao i okolni zrak, a vlaga iz atmosfere se na njemu kondenzira — isti proces kao rosa na travi ili na automobilu. Nestane samo čim se okolina zagrije.',
          'Ova pojava je češća kod trostrukog stakla i na vedrim, mirnim noćima, jer staklo tada dodatno gubi toplinu zračenjem prema otvorenom nebu.',
        ],
      },
      {
        naslov: 'Kad se javiti nama, a kad rješavati prozračivanjem',
        odlomci: [
          'Ako se rosi po cijelom stanu, na svim prozorima podjednako, gotovo sigurno je riječ o vlazi u prostoru — prvo pojačaj prozračivanje i smanji izvore vlage prije nego posumnjaš na prozore.',
          'Ako se rosi samo na jednom mjestu, na okviru umjesto na staklu, ili između stakala, javi nam se — to je znak koji vrijedi provjeriti na terenu, jer se najčešće rješava servisom brtve ili okova, ne cijelim novim prozorom.',
        ],
      },
    ],
    povezano: [
      { slug: 'dvostruko-ili-trostruko-staklo', tekst: 'Dvostruko ili trostruko staklo — što se isplati' },
      { slug: 'zamjena-brtvi-na-prozorima', tekst: 'Zamjena brtvi na prozorima' },
      { slug: 'odrzavanje-pvc-prozora', tekst: 'Održavanje PVC prozora' },
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
  {
    slug: 'izmjera-i-montaza-izvan-rijeke',
    naslov: 'Measuring and installation outside Rijeka and Primorje-Gorski Kotar County',
    seoNaslov: 'Installation outside the county',
    sazetak:
      'Measuring and quotes are free in Rijeka and the surrounding area, and we also install outside Primorje-Gorski Kotar County — on Krk and Cres, in Istria County, and occasionally in Zadar, with travel costs charged only for measuring at more distant locations.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Yes, we carry out measuring and installation outside Rijeka and Primorje-Gorski Kotar County as well. In Rijeka and the immediate area, measuring and the quote are completely free; for more distant locations, such as the islands, we charge travel costs for the visit to measure, while preparing the quote itself is never charged extra.',
          'We have long-standing experience installing on the islands too, so distance alone is rarely a reason not to get in touch.',
        ],
      },
      {
        naslov: 'Where we have installed so far',
        natuknice: [
          'The whole of Primorje-Gorski Kotar County.',
          'The islands of Krk and Cres.',
          'The whole of Istria County.',
          'Zadar and the surrounding area.',
        ],
      },
      {
        naslov: 'Rab, Pag and Lošinj — on request',
        odlomci: [
          'Besides Krk and Cres, we also come to the islands of Rab, Pag and Lošinj, depending on arrangement and the scope of the job. Get in touch with your location and a description of the job and we will work out the details together.',
        ],
      },
      {
        naslov: 'Can you send us your own measurements',
        odlomci: [
          'Yes. You can send us your own measurements and a description of what you need, and we prepare an indicative quote based on that. If the quote works for you, only then do we come out to measure and confirm everything before the windows or doors are made.',
          'That measuring visit is charged, but it is a good way to know the approximate price upfront before committing to the cost of a site visit — especially useful if you are further from Rijeka.',
        ],
      },
      {
        naslov: 'How measuring outside Rijeka is charged',
        odlomci: [
          'For Rijeka and the immediate area, measuring and the quote cost nothing. For locations that require a longer drive or a ferry crossing, we charge a travel fee for the visit itself — this covers fuel, time and, for the islands, the ferry ticket.',
          'The quote you receive after measuring stays free regardless of distance; only the site visit is charged.',
        ],
      },
      {
        naslov: 'Is it worth getting in touch if you are outside the county',
        odlomci: [
          'Yes. For larger projects — a whole house, an apartment building, or several openings at once — the travel cost is negligible against the total value of the job, so arranging a measuring visit is almost always worthwhile.',
          'The simplest approach is to contact us with your location and a description of the job; we will tell you specifically whether a visit makes sense and what the travel cost would be.',
        ],
      },
    ],
  },
  {
    slug: 'cijena-prozora-i-vrata',
    naslov: 'PVC and aluminium window and door prices — what actually determines them',
    seoNaslov: 'PVC and aluminium window prices — what determines them',
    sazetak:
      'The price of windows and doors depends on material, profile, glass, colour and the number of openings, so a single price doesn’t exist without exact measurements — we’re building a calculator that will give a ballpark estimate before you even get in touch.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'The price of a PVC or aluminium window depends on material, profile, glass, colour and the number of openings, so a single price doesn’t exist until those details are known. That’s why a proper quote always comes after a conversation or a site visit, never in advance.',
          'We’re building a calculator that will give you a ballpark estimate in a few clicks, without needing to know anything about PVC or aluminium joinery beforehand.',
        ],
      },
      {
        naslov: 'Why the price varies so much',
        odlomci: [
          'Material is the first factor — PVC and aluminium have different production costs and different strengths depending on the size of the opening. The profile shifts the price further: chamber count, installation depth and reinforcement thickness differ between a cheaper and a better system.',
          'Glass is the next big factor — double and triple glazing differ not just in insulation but in weight, so triple glazing needs stronger, pricier hardware. Colour (RAL foil or powder coating) and extras like insect screens, sills and thresholds add to the price, and the number and size of openings determine the total more than any single choice.',
        ],
      },
      {
        naslov: 'Why a ballpark price is still worth having',
        odlomci: [
          'We know most people already understand a ballpark estimate isn’t the same as a final quote. It’s genuinely frustrating when all you want is to know what kind of expense you’re looking at, and nowhere are prices listed. That’s exactly what the calculator is for — it doesn’t replace a proper quote, but gives you a realistic range in a few clicks before you even request one.',
          'The final price still depends on measuring the site and your individual preferences, because windows and doors are made to the exact opening — but at least you know the rough scale of the cost upfront, without waiting.',
        ],
      },
      {
        naslov: 'The calculator we’re building',
        odlomci: [
          'The calculator is currently in development. Our goal is to make it simple to use — you shouldn’t need to know anything about profiles, chambers or glass types to get a meaningful estimate, and it should work just as well on a phone as on a computer.',
          'We’re not promising an exact launch date, because we want to publish it only once it genuinely works the way it should, not before — roughly, we’re aiming for one to three months.',
        ],
      },
    ],
    povezano: [
      { slug: 'dvostruko-ili-trostruko-staklo', tekst: 'Double or triple glazing — which one pays off' },
      { slug: 'alu-ili-pvc-prozori', tekst: 'Aluminium or PVC windows — how to choose' },
      { slug: 'alu-ili-pvc-vrata', tekst: 'Aluminium or PVC doors — how to choose' },
      { slug: 'vrste-komarnika', tekst: 'Types of insect screens — which to choose' },
      { slug: 'ugradnja-prozora', tekst: 'How long a window installation takes' },
    ],
  },
  {
    slug: 'alu-ili-pvc-vrata',
    naslov: 'Aluminium or PVC doors — differences, cost and when a glass wall wins',
    seoNaslov: 'Aluminium or PVC doors — how to choose',
    sazetak:
      'Which material is better depends first on what kind of door it is: for a heated space, PVC and thermally broken aluminium are equally good choices, while a cellar, garage or storeroom is better served by aluminium without a thermal break, since the space is not heated anyway. For large openings with lots of glass, an aluminium glass wall is often better than one large door leaf.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'There is no single answer for every door — the decision starts with what kind of door it is and what space it leads into. For a standard entrance or balcony door into a heated space, PVC gives better insulation for the money, while aluminium is chosen when the opening is large, when a lot of glass is wanted with a slim frame, or when the door has to carry more load and heavier daily use.',
          'For large openings — a terrace, an entrance to a living room, or commercial premises — a sliding or fixed aluminium glass wall is often better value than one large door leaf, because a screen has less frame and more glass over the same area.',
        ],
      },
      {
        naslov: 'The first question: is the space behind the door heated',
        odlomci: [
          'Before comparing materials, it helps to separate two situations. An entrance door into a flat or house, and a balcony door, both lead into a heated space, so insulation genuinely matters — there, PVC and thermally broken aluminium are equally good choices, and the decision usually comes down to price and to which look the customer prefers.',
          'Cellar, garage and storeroom doors lead into a space that is not heated. There is no point paying for insulation nothing will ever use — the more sensible and cheaper choice is aluminium without a thermal break, a so-called cold profile, which is sturdy and durable without carrying the cost of thermal performance the space will never feel.',
          'The same rule applies to partitions inside a building that separate two unheated spaces rather than a heated one from an unheated one — a storeroom from a stairwell, for instance. A cold aluminium profile is entirely sufficient there too.',
        ],
      },
      {
        naslov: 'Why PVC has limits on a door',
        odlomci: [
          'A PVC door leaf is built the same way as a window — a hollow multi-chamber profile with steel reinforcement inside, with an infill panel or glass in the upper and lower sections of the leaf. For a standard entrance door up to around a metre wide, that is strong enough.',
          'Problems start with tall or wide leaves and with doors opened several times a day. A heavy leaf sags on its hinges over time, and a large load on a plain PVC profile without extra aluminium reinforcement leads to drooping and a leaf that no longer closes cleanly.',
          'That is why wide entrance doors, or ones with a lot of glass, are often built with PVC reinforced by aluminium, or move straight to an aluminium profile.',
        ],
      },
      {
        naslov: 'Why aluminium doors need a thermal break',
        odlomci: [
          'Aluminium conducts heat well, which is just as bad for a door as for a window. A quality entrance door is built from two separate profiles, outer and inner, joined by polyamide strips that do not conduct heat — the thermal break.',
          'Aluminium doors without a thermal break are still made and fitted, but for unheated spaces: garages, storerooms, partitions onto a stairwell. On the entrance to a flat or house, a frame without a thermal break turns cold and mists up on the inside.',
          'An aluminium door profile generally remains a slightly poorer insulator than good PVC, but it carries a much larger and heavier glass panel behind a slimmer visible frame — so an entrance door can carry a large glazed area and still stay rigid.',
        ],
      },
      {
        naslov: 'When a glass wall beats a large aluminium door',
        odlomci: [
          'A door leaf, PVC or aluminium, always keeps at least the lower section solid or semi-solid — the construction has to carry the lock, hinges and locking points, so there is less actual glass than it looks at first glance.',
          'A glass wall — sliding or fixed, in slim aluminium profiles with a thermal break — is not bound by that. For a terrace opening, a large living space, or commercial premises where the priority is light and view rather than a single lockable leaf, a glass wall often gives more daylight for a similar price to one large aluminium door leaf.',
          'The opposite holds for an entrance used daily where security matters — there a standard door leaf, PVC or aluminium, stays more practical than a glass wall, because it locks more simply and more securely.',
        ],
      },
      {
        naslov: 'What marks out a better aluminium door',
        natuknice: [
          'A thermal break — without it, the door is an aluminium structure, not real insulation.',
          'Multi-point locking (three to five points) — improves even seal pressure around the whole leaf, but security doesn’t come from the point count alone. A poor lock cylinder can be forced in under a minute regardless of how many locking points there are; a good cylinder, resistant to drilling and picking, is what actually makes that difference.',
          'Leaf thickness and infill — a foam-filled or insulated panel performs far better than a thin, empty aluminium panel.',
          'Security rating (RC2, RC3) — states how long the leaf and hardware resist a break-in attempt, not just whether the lock itself is good.',
          'Sealing in two or three stages around the leaf, not a single rubber gasket at the edge.',
        ],
      },
      {
        naslov: 'Lifespan and upkeep',
        natuknice: [
          'Aluminium doors handle weather best and are practically unaffected over the years.',
          'PVC doors realistically last twenty to thirty years under standard sun and sea exposure — somewhat less than PVC windows, because doors see more use and carry a heavier panel.',
          'Hardware on both materials needs the same annual oiling, and seals wear at the same rate regardless of the frame.',
        ],
      },
      {
        naslov: 'How to decide',
        odlomci: [
          'A cellar, garage, storeroom or any other unheated room — aluminium without a thermal break. Insulation is not felt there, so there is no point paying for it.',
          'An entrance or balcony door into a heated flat or house, ordinary width, with no special security requirements — PVC and thermally broken aluminium insulate equally well. Here the choice usually comes down to price and to which look the customer finds more elegant — the slimmer, more modern aluminium profile or the more classic look of PVC.',
          'An entrance door with a lot of glass, a wider leaf, or frequent daily use — aluminium with a thermal break and multi-point locking.',
          'A large opening where the priority is light, view or terrace access — before settling on one big aluminium leaf, check whether a sliding or fixed glass wall pays off instead.',
        ],
      },
    ],
    povezano: [
      { slug: 'alu-ili-pvc-prozori', tekst: 'Aluminium or PVC windows — how to choose' },
      { slug: 'cijena-prozora-i-vrata', tekst: 'PVC and aluminium window and door prices' },
    ],
  },
  {
    slug: 'sufinanciranje-zamjene-prozora',
    naslov: 'Grants for replacing windows and doors — how energy renovation funding works',
    seoNaslov: 'Grants for window replacement — how it works',
    sazetak:
      'There is no separate grant scheme just for windows — replacing joinery falls under the wider Public Call run by the Fund for Environmental Protection and Energy Efficiency for the energy renovation of family houses or buildings, co-financing 60 to 80% of the cost, but it only opens periodically and for a limited time.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'There is no separate grant scheme just for windows. Replacing external joinery — windows and doors — is one of the measures within the wider Public Call run by the Fund for Environmental Protection and Energy Efficiency (FZOEU) for the energy renovation of family houses, or of multi-apartment buildings through a separate, parallel programme. The call is not open all the time; when it is published, it co-finances 60% of the eligible cost, or 80% for houses damaged in the earthquake or in areas of special state concern.',
          'The application covers the whole package of measures, not windows on their own — replacing joinery is applied for either as part of a complete renovation, or as a standalone thermal-envelope measure, covered below.',
        ],
      },
      {
        naslov: 'Which measures the call for family houses covers',
        natuknice: [
          'A1 — complete energy renovation: thermal protection of the external envelope (facade, roof, floor, joinery) together with installing a renewable energy system.',
          'A2 — thermal protection of the external envelope only, without renewables. This is where replacing windows and doors as a standalone measure belongs, without facade work or heating.',
          'A3 — heating, cooling and hot water systems running on renewable energy sources.',
          'A4 — a photovoltaic system for your own consumption.',
        ],
      },
      {
        naslov: 'How much of the cost is covered',
        odlomci: [
          'The standard rate is 60% of the eligible cost, or 80% for houses damaged in the earthquake or in areas of special state concern. On the most recent call, the maximum grant ran up to roughly €62,000 per application, depending on the package of measures chosen — treat that figure as a rough guide rather than a fixed rule, since the terms of each call are published separately.',
          'If you are only applying to replace joinery (category A2), the maximum eligible cost is lower than for a complete renovation (A1), because it covers one measure rather than the whole package.',
        ],
      },
      {
        naslov: 'Conditions the house and the windows must meet',
        odlomci: [
          'Owners and co-owners of family houses up to 600 m² and no more than three residential units, with more than half the floor area used for living, can apply. You also need to be registered as resident at that address, hold clear title, and be able to show the house is fully legal.',
          'If you are not replacing all the joinery, whatever windows and doors stay in place already have to meet the current technical regulation. The new windows and doors have to reach the prescribed heat transfer coefficient for the whole unit, not just the glass — which is another reason a "glass only" figure in an offer is not enough on its own for an application.',
        ],
      },
      {
        naslov: 'What applying actually looks like',
        odlomci: [
          'The application is submitted online, through the Fund’s system, during the period the call is open. The paperwork includes an energy certificate, proof the property is legal and proof of ownership, plus contractor quotes with the technical data for the products being installed.',
          'The technical data for the products — heat transfer coefficient, glass build-up — is part of the documentation the profile manufacturer issues with every system, so it gets sorted out together with your installer at the point of applying. It is not something you need to chase down or understand yourself in advance.',
        ],
      },
      {
        naslov: 'Where to watch for the call opening',
        odlomci: [
          'Calls are published only by the Fund for Environmental Protection and Energy Efficiency, on its own official pages — that is the only source worth relying on, since terms and deadlines do change from one call to the next.',
          'For family houses, watch the page for the family house energy renovation programme; for flats in buildings with multiple owners there is a parallel programme for multi-apartment buildings. A list of every call the Fund currently has open, across all its areas, sits in one place.',
        ],
        vanjskeVeze: [
          { url: 'https://www.fzoeu.hr/hr/energetska-obnova-obiteljskih-kuca-7679/7679', tekst: 'Energy renovation of family houses — fzoeu.hr' },
          { url: 'https://www.fzoeu.hr/hr/energetska-obnova-visestambenih-zgrada/7683', tekst: 'Energy renovation of multi-apartment buildings — fzoeu.hr' },
          { url: 'https://www.fzoeu.hr/hr/nacionalni-javni-pozivi-i-natjecaji/1367', tekst: 'All current calls from the Fund — fzoeu.hr' },
        ],
      },
      {
        naslov: 'Is it worth waiting for a call, or replacing now',
        odlomci: [
          'If your windows let draughts through, mist up on the inside, or the hardware is so worn the doors no longer close properly, it is not worth waiting for an uncertain date for the next call — that is a cost you are already paying on your heating bill. A grant is a good bonus when it is available, not a reason to put off a replacement you actually need.',
          'For larger projects, where a full facade and heating renovation is planned anyway, it is worth checking whether a call is expected before starting the work — an application covers work that has not been carried out yet, not a renovation that is already finished.',
        ],
      },
    ],
    povezano: [
      { slug: 'cijena-prozora-i-vrata', tekst: 'PVC and aluminium window and door prices' },
      { slug: 'alu-ili-pvc-prozori', tekst: 'Aluminium or PVC windows — how to choose' },
      { slug: 'dvostruko-ili-trostruko-staklo', tekst: 'Double or triple glazing — which one pays off' },
    ],
  },
  {
    slug: 'kondenzacija-na-prozorima',
    naslov: 'Condensation and misting on windows — why it happens and how to fix it',
    seoNaslov: 'Window condensation — cause and fix',
    sazetak:
      'Misting on the inside of a window almost always means too much humidity in the room, not a fault with the window, and is fixed with ventilation and less moisture in the air. Misting on the outside in the morning is not a fault — it is a sign the window insulates well.',
    slika: '',
    slikaOpis: '',
    sadrzaj: [
      {
        odlomci: [
          'Misting on the inside of the glass or frame almost always means there is too much humidity in the room, not that the window is poor or badly fitted. Warm, moist air touches the cold surface of the glass or frame, cools below its dew point, and the moisture comes out as droplets — the same process as dew on grass in the morning.',
          'The fix is almost always the same: less moisture in the air and regular airing, not a new window. Misting on the outside of the glass, in the morning before the sun warms it up, is something else entirely and is not a fault — covered further down.',
        ],
      },
      {
        naslov: 'Why it shows up on the window first',
        odlomci: [
          'Glass and frame are the coldest surface in a room, because they lose heat faster than the wall, so moisture there is the first to drop below the dew point, even though the air throughout the room is equally humid.',
          'A good, newer window seals well and lets almost no air through, which is excellent for heating, but it also means moisture from the room no longer exchanges itself through gaps the way it did with an old, leaky window. That is why a new window often gets blamed for misting, when really it has just uncovered a moisture problem the draught from the old joinery used to hide.',
        ],
      },
      {
        naslov: 'The most common sources of moisture in a home',
        natuknice: [
          'Cooking without an extractor hood, or with one that just recirculates air instead of venting it outside.',
          'Showering or bathing without an open window or a fan running.',
          'Drying wet washing indoors.',
          'New plaster, screed or concrete — for the first year or two of heating, the building itself releases a large amount of moisture.',
          'Lots of houseplants, an aquarium, or more people than usual in a small, poorly ventilated room.',
        ],
      },
      {
        naslov: 'How to fix it',
        odlomci: [
          'Air the room briefly and fully, with the sash wide open, several times a day — rather than tilted for hours. The air changes quickly, the wall stays warm, and the moisture leaves before it has a chance to condense.',
          'Run the cooker hood and the bathroom fan for as long as the moisture source lasts, and for another ten minutes or so afterwards. If you have just moved into a new build, or this is the first season it is being heated, air the rooms more often than usual for the whole first heating season.',
          'A dehumidifier makes sense in rooms with no natural ventilation, such as a windowless bathroom, or while a new build is still drying out.',
        ],
        natuknice: [
          'If misting persists despite airing the room, check that the drainage holes at the bottom of the frame are not blocked.',
          'Also check that the seals are still supple — a hardened or flattened seal lets cold air through right at the spot where misting then appears.',
        ],
      },
      {
        naslov: 'When misting points to a real problem with the window',
        natuknice: [
          'It mists on only one window while all the others stay dry — check the seal and the installation at that spot; there may be a gap in the foam sealing around the frame.',
          'It mists constantly on the frame rather than the glass, on an older aluminium window — it probably has no thermal break.',
          'It mists between the two panes, inside the glass unit itself — that is not condensation from the room but a fault in the seal spacer; it is fixed by replacing the glass, not the whole window.',
        ],
      },
      {
        naslov: 'Misting on the outside is not a fault',
        odlomci: [
          'In the morning, before the sun warms the surroundings, the outer pane of a good window can mist up or even carry a light frost. That is a sign the window insulates well: heat from the room is not reaching the outer glass, so it stays as cold as the surrounding air, and moisture from the atmosphere condenses on it — the same process as dew on grass or on a car. It clears on its own as soon as the surroundings warm up.',
          'This shows up more often with triple glazing and on clear, still nights, because the glass then loses extra heat by radiating it out towards the open sky.',
        ],
      },
      {
        naslov: 'When to call us, and when airing the room is enough',
        odlomci: [
          'If misting appears throughout the flat, on every window about equally, it is almost certainly moisture in the space — step up the ventilation and cut the sources of moisture before suspecting the windows themselves.',
          'If it mists in one spot only, on the frame instead of the glass, or between the panes, get in touch — that is a sign worth checking on site, since it is usually fixed by servicing a seal or the hardware, not by a whole new window.',
        ],
      },
    ],
    povezano: [
      { slug: 'dvostruko-ili-trostruko-staklo', tekst: 'Double or triple glazing — which one pays off' },
      { slug: 'zamjena-brtvi-na-prozorima', tekst: 'Replacing window seals' },
      { slug: 'odrzavanje-pvc-prozora', tekst: 'Looking after PVC windows' },
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
