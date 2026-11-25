/* Kolibri Fitness – tartalom.
   Az árak, címek és óraleírások a kolibri.fitness jelenlegi oldaláról származnak (2026. 11.).
   A foglalás jelenleg a meglévő Wix-oldalakon fut – ha új foglalórendszer lesz, csak a `booking` linkeket kell cserélni. */

const LOCATIONS = [
  {
    id: 'szeged',
    name: 'Szeged',
    zip: '6724',
    street: 'Pulz utca 46',
    img: 'img/hot-iron.webp',
    booking: 'https://www.kolibri.fitness/szeged',
    tagline: 'Csoportos órák – és itt személyi edzés is.',
    extras: ['Személyi edzés', 'HOT IRON', 'Spinning'],
  },
  {
    id: 'sandorfalva',
    name: 'Sándorfalva',
    zip: '6762',
    street: 'Szabadság tér 3',
    img: 'img/step.webp',
    booking: 'https://www.kolibri.fitness/sandorfalva',
    tagline: 'Step, jumping és zumba családias hangulatban.',
    extras: ['Step alakformálás', 'Jumping', 'Zumba'],
  },
  {
    id: 'algyo',
    name: 'Algyő',
    zip: '6750',
    street: 'Búvár u. 2',
    img: 'img/kangoo.webp',
    booking: 'https://www.kolibri.fitness/algyo',
    tagline: 'Kangoo és zsákos Kick-Fit is vár.',
    extras: ['Kangoo', 'Zsákos Kick-Fit', 'TRX'],
  },
];

const CATEGORIES = {
  kardio: 'Kardió & tánc',
  alak: 'Alakformálás',
  ero: 'Erő & funkcionális',
  lelek: 'Test & lélek',
};

const ALL = ['szeged', 'sandorfalva', 'algyo'];
const ALAK_DESC = 'Az alakformálás egy alap aerobic óra, a legnépszerűbb óratípusok egyike. Az órák során az egész testet átmozgatjuk, izmainkat tónusba hozzuk, fejlesztjük, de nem növeljük a tömegüket. Szökkenésmentes, koreográfiamentes óra, bárkinek ajánlható.\nEgyszerű, jól követhető óra, ahol a bemelegítés után a fő izomcsoportokat megcélozva az erősítő gyakorlatokon van a hangsúly. Hatásai: javulnak a test kontúrjai, tónusos izomzat alakítható ki a különböző izomcsoportok erősítésével (comb, has, popsi, csípő). Kezdőtől a haladóig, fiataltól az idősig mindenki számára ajánlott mozgásforma.';
const LABDA_DESC = 'A nagy fitness labda különleges instabil és ruganyos adottságait kihasználva, sok rugó- és támaszgyakorlat mellett kihívást jelenthet a préselés, a gurítás, a pattintás és a forgatás is. Ezek mind együttesen fontos szerepet játszanak – a zsírégetés mellett – a koordináció fejlesztésében is!';
const CFH_DESC = 'Könnyen követhető óra, hatékony és változatos gyakorlatokkal, minden korosztálynak ajánlott. A fontosabb izomcsoportokat dolgoztatjuk meg, általában nagy ismétlésszámmal, és nagyobb hangsúlyt fektetünk a gyengülésre hajlamos „kritikus pontjainkra” (farizom, has, comb).\nTöbb segédeszközt használunk, például soft-ballt, fitt ballt, kézisúlyzót, gumiszalagot, illetve a saját testsúlyt. Az óra elengedhetetlen része a bemelegítés, az óra végi nyújtás és levezetés – valamint a jó hangulat, a dinamikus zene és a garantált izomláz.';
const PILATES_DESC = 'A Pilates módszert a német Joseph Pilates dolgozta ki a XX. század elején. Komplex mozgásforma, amely ötvözi a „nyugati” világ anatómiai ismereteit a „keleti” mozgáskultúra egyes eszközeivel. Gyakorlásában nagy szerepet kapnak a gerinc stabilizáló izmai (mélyizmok) és a speciális légzéstechnika.\nA módszer alapja, hogy minden mozdulat az úgynevezett erőközpontból (powerhouse) indul: a has – alsó hát – csípő – fenék központi területéből. Minden gyakorlatnak saját üteme és légzésritmusa van, így a gyakorlatok „áramló” mozgással állnak össze egésszé.\nA helyes kivitelezés a legfontosabb: inkább kevesebb ismétlés, de a lehető legtökéletesebben végrehajtva.';

const CLASSES = [
  // ---- Kardió & tánc
  { name: 'Jumping fitness', cat: 'kardio', img: 'img/jumping.webp', locs: ALL,
    short: 'Dinamikus aerob edzés speciális trambulinokon – szuper kardió, ízületkímélő módon.',
    desc: 'A jumping egy dinamikus aerob mozgásforma, erre speciálisan kialakított trambulinokon. A gyorsabb és lassabb mozdulatok követik egymást, a dinamikusabb lépéseket erőt és egyensúlyt igénylő gyakorlatokkal kombináljuk – így válik szuper kardióedzéssé.\nHatékonyan égeti a zsírt, közben kíméli az ízületeket. Kedvező hatással van a szív- és érrendszerre, növeli a tüdőkapacitást és az állóképességet. Mivel nem tartalmaz bonyolult koreográfiát, kezdőknek is javasolt – és mindenkinek, aki felszabadultan szeretne mozogni.' },
  { name: 'Zumba', cat: 'kardio', img: 'img/kozosseg.webp', locs: ALL,
    short: 'Latin ritmusokra épülő, könnyen elsajátítható táncos fitness program.',
    desc: 'A Zumba Kolumbiából származó, könnyen elsajátítható, latin ritmusokra épülő tánc, amely egyben fitness program is. A mozdulatok aerobik és különböző táncok lépéseiből állnak össze: latin táncok alapjait, egyszerű lépéseit ötvözzük fitness elemekkel.\nAz óra során átmozgatjuk az összes nagyobb izomcsoportot, és intenzitástól függően akár 600 vagy még több kalóriát is elégethetünk, miközben fejlődik az állóképesség és formásodnak az idomok.' },
  { name: 'Kangoo', cat: 'kardio', img: 'img/kangoo.webp', locs: ['algyo'],
    short: 'Rugós ugrócipős kardióedzés – sok nevetés, kevesebb terhelés az ízületeken.',
    desc: 'Kardióedzés speciális, rugós talpú ugrócipőben. A cipő elnyeli az érkezés erejét, így az ugrások és futólépések kevésbé terhelik az ízületeket, miközben a pulzus szépen megemelkedik. Kiváló zsírégető és állóképesség-fejlesztő óra – a cipőt a teremben biztosítjuk.' },
  { name: 'Spinning', cat: 'kardio', img: 'img/spinning.webp', locs: ALL,
    short: 'Magas intenzitású, zenés kerékpáros óra – akár 700–800 kalória egy edzésen.',
    desc: 'A spinning edzőteremben végzett, magas intenzitású, zenés kerékpáros aerobikóra – az egyik legkiválóbb kardióedzés, amely egyszerre fejleszti a testet, a mentális képességeket és az állóképességet. Egy óra alatt akár 700–800 kalóriát is elégethetünk.\nElőnyei: erősíti a szívet és a keringési rendszert, javítja az állóképességet és a tüdő hatékonyságát, mozgás közben kíméli és erősíti a térdízületeket és a szalagokat. A dinamikus tekeréssel a felgyűlt feszültség és a stressz is jól levezethető – és megtanít küzdeni.' },
  { name: 'Zsákos Kick-Fit', cat: 'kardio', img: 'img/kickfit.webp', locs: ['algyo'],
    short: 'Nagy intenzitású kardió thai box elemekkel – monoklimentesen.',
    desc: 'Nagy intenzitású, kardió jellegű edzéstípus thai box technikai elemekkel, a küzdősport alapjainak elsajátításával – monoklimentesen.\nKinek ajánljuk? Kortól és nemtől függetlenül mindenkinek. Az egyik leghatásosabb módja a kalóriaégetésnek és a stressz levezetésének.' },
  { name: 'Step alakformálás', cat: 'kardio', img: 'img/step.webp', locs: ['sandorfalva'],
    short: 'Alakformáló óra steppaddal – a láb és a fenék kedvenc edzése.',
    desc: ALAK_DESC },

  // ---- Alakformálás
  { name: 'Alakformálás', cat: 'alak', img: 'img/terem-matrac.webp', locs: ALL,
    short: 'Szökkenés- és koreográfiamentes, jól követhető óra – kezdőknek is.',
    desc: ALAK_DESC },
  { name: 'Karcsúsító alakformálás', ph: 'Karcsú', cat: 'alak', img: null, locs: ALL,
    short: 'Egész testes tónusosítás zsírégetésre hangolva.',
    desc: ALAK_DESC },
  { name: 'Erősítő alakformálás', ph: 'Erő', cat: 'alak', img: null, locs: ALL,
    short: 'Erősítő gyakorlatok fókuszban, feszes izmokért.',
    desc: LABDA_DESC },
  { name: 'Eszközös alakformálás', ph: 'Eszköz', cat: 'alak', img: null, locs: ALL,
    short: 'Labdák, súlyzók, szalagok – változatos, eszközös óra.',
    desc: LABDA_DESC },
  { name: 'Nagylabdás alakformálás', cat: 'alak', img: 'img/nagylabda.webp', locs: ALL,
    short: 'Az instabil fitness labda a koordinációt is fejleszti.',
    desc: LABDA_DESC },
  { name: 'Comb-fenék-has', cat: 'alak', img: 'img/nyujtas.webp', locs: ALL,
    short: 'A „kritikus pontok” célzott edzése – garantált izomlázzal.',
    desc: CFH_DESC },
  { name: 'Has+fenék', ph: 'Has + fenék', cat: 'alak', img: null, locs: ['szeged'],
    short: 'Rövid fókusz, nagy hatás: has és farizom.',
    desc: CFH_DESC },
  { name: 'Kritikus részek tornája', ph: 'Kritikus', cat: 'alak', img: null, locs: ALL,
    short: 'Célzott torna a gyengülésre hajlamos területekre.',
    desc: CFH_DESC },
  { name: '100% Has Erősítés', ph: '100%', cat: 'alak', img: null, locs: ALL,
    short: 'Felső, alsó, ferde és mély hasizmok – erős testközép.',
    desc: 'A 100%-os haserősítő edzés célja, hogy a hasizmok minden részét megdolgoztassa: a felső, alsó és ferde hasizmokat, valamint a mély törzsizmokat is. Nemcsak esztétikai szempontból fontos – kulcsszerepet játszik a helyes testtartásban, az egyensúlyban és a sérülések megelőzésében.\nAz óra tartalmazhat plankot a törzs stabilizálására, felüléseket és lábemeléseket, valamint orosz csavarást a ferde hasizmokra. A lassú, kontrollált végrehajtás és a tudatos izomfeszítés a kulcs: az eredmény laposabb has és erősebb, stabilabb testközép.' },

  // ---- Erő & funkcionális
  { name: 'Kondi edzés', cat: 'ero', img: 'img/kondi.webp', locs: ALL,
    short: 'Kardió és erőedzés egyben – állóképesség és erőnlét.',
    desc: 'A kondi edzés célzottan fejleszti az állóképességet, az erőnlétet és a test összes fontos izomcsoportját. Egyesíti az aerob és anaerob edzésformákat, vagyis kombinálja a kardió- és az erőedzést. Kiválóan alkalmas az egészség megőrzésére, a fogyásra és az izomtömeg növelésére is.' },
  { name: 'Kettlebell alakformálás', cat: 'ero', img: 'img/kettlebell.webp', locs: ALL,
    short: 'Gömbsúlyzós edzés – zsírégetésben verhetetlen.',
    desc: 'A kettlebell egy tradicionális orosz gömbsúlyzó – mintha egy ágyúgolyónak fogója lenne. A kettlebell-edzés teljes körű: erősíti az izmokat, fejleszti az egyensúlyt, és megdolgoztatja a szív- és érrendszert is.\nA gyakorlatok ötvözik a kardióedzést a súlyemeléssel, így a befektetett időből a legtöbbet hozzák ki. Felviszik a pulzust, segítik a zsírégetést és közben erősítenek – így fogysz és formásodsz is. Gyors eredményeket várhatsz tőle.' },
  { name: 'TRX alakformálás', cat: 'ero', img: 'img/trx.webp', locs: ALL,
    short: 'Hevederes edzés saját testsúllyal – a mélyizmok is bekapcsolnak.',
    desc: 'A TRX a Total Resistance eXercises rövidítése: olyan edzésforma, ahol az izmok ellenállással szemben dolgoznak – jelen esetben a saját testsúllyal. Az instabil alátámasztás megnöveli az izmok terhelését, a törzs és a stabilizáló izmok folyamatosan dolgoznak.\nA TRX heveder a funkcionális edzés egyik alapeszköze: az egymásba kapcsolódó izomláncokat erősíti, ízületkímélő módon. A teljes testet formálja, hozzájárul a helyes testtartáshoz, javítja a testtudatosságot, és változatossá teszi a heti edzésprogramot.' },
  { name: 'CrossFit', cat: 'ero', img: 'img/hot-iron.webp', locs: ALL,
    short: 'Funkcionális edzés magas intenzitáson, állandó változatossággal.',
    desc: 'A CrossFit egy önálló, saját rendszer által meghatározott fitneszirányzat, amelyet Greg Glassman hozott létre 2000-ben. A funkcionális edzés alapjaira épül és annak eszköztárát alkalmazza.\nEgy mondatban: funkcionális edzés magas intenzitáson végrehajtva, állandó változatosság mellett. Elsődleges célja a minél jobb fittség – hogy bármilyen feladat elé állítanak, a lehető legmagasabb fokon tudd végrehajtani.' },
  { name: 'Köredzés', cat: 'ero', img: 'img/trx-2.webp', locs: ALL,
    short: 'Állomásról állomásra – az egész test egy órában.',
    desc: 'Állomásokból felépülő, intenzív edzés: rövid időközönként váltjuk a gyakorlatokat és az eszközöket, így az egész test dolgozik, a pulzus pedig végig magasan marad. Változatos, gyorsan telik, és egyszerre fejleszti az erőt és az állóképességet.' },
  { name: 'HOT IRON', cat: 'ero', img: 'img/hot-iron-2.webp', locs: ALL,
    short: 'Tudományos alapú súlyzórudas csoportos edzés – szép, definiált testért.',
    desc: 'A HOT IRON egy magával ragadó súlyzórudas csoportos edzésforma: izgalmas, dinamikus, biztonságos, tudományos alapú, és extrém hatékony, ha szép, definiált test a cél.\nNémetországban fejlesztette ki egy szakemberekből – sportpszichológusokból, testépítőkből, atlétákból, orvosokból és gyógytornászokból – álló csoport, azzal a céllal, hogy biztonságos, folyamatosan fejlesztett, mégis élvezetes csoportos súlyzós edzést hozzanak létre.' },
  { name: 'Gymstick edzés', ph: 'Gymstick', cat: 'ero', img: null, locs: ALL,
    short: 'Rúd + gumiszalag: modern, teljes testes erőfejlesztés.',
    desc: 'A Gymstick edzés egy dinamikus, modern mozgásforma, amely egy speciális, rúdból és gumiszalagokból álló eszköz segítségével fejleszti a teljes testet, az erőt és az állóképességet. Az eszköz állandó, változó erőtérrel biztosítja a komplex edzéshatást.' },

  // ---- Test & lélek
  { name: 'Pilates', cat: 'lelek', img: 'img/pilates.webp', locs: ALL,
    short: 'Tudatos mozgás az erőközpontból, a légzésre és a mélyizmokra figyelve.',
    desc: PILATES_DESC },
  { name: 'Eszközös Pilates', ph: 'Pilates +', cat: 'lelek', img: null, locs: ALL,
    short: 'Pilates kiegészítő eszközökkel a még pontosabb munkáért.',
    desc: PILATES_DESC },
  { name: 'Hatha jóga', cat: 'lelek', img: 'img/joga.webp', locs: ALL,
    short: 'Ászanák, légzés, relaxáció – a test és lélek harmóniája.',
    desc: 'A Hatha jóga a jóga egyik legismertebb irányzata, amely statikus testhelyzetek (ászanák), légzőgyakorlatok és relaxáció segítségével segíti a testi-lelki kiegyensúlyozottságot. Nyugodt tempójú, jól követhető – kezdőknek és haladóknak egyaránt ideális.\nKinek ajánlott? Kezdőknek és újrakezdőknek, akik javítanának testtartásukon és mozgékonyságukon, stresszoldásra vágyóknak, idősebbeknek vagy kevésbé sportosaknak – és mindenkinek, aki tudatosabban szeretne jelen lenni a mindennapokban.\nHatásai: növeli a hajlékonyságot és az izomerőt, javítja a koncentrációt és a légzést, segít a stressz kezelésében és az alvás minőségében.' },
  { name: 'Yogalates', ph: 'Yogalates', cat: 'lelek', img: null, locs: ALL,
    short: 'Jóga és Pilates fúziója – ahol Kelet és Nyugat találkozik.',
    desc: 'A Yogalates modern, átfogó gyakorlatrendszer, amelyet a jóga és a Pilates ihletett: jógapózokat és Pilates-gyakorlatokat egyaránt tartalmaz, hasznosítva mindkét rendszer fizikai és mentális előnyeit. Az irányzatot Jonathan Urla alkotta meg 1997-ben az Egyesült Államokban.\nRendszeres gyakorlásával javul az állóképesség, az egyensúlyérzék, a testtartás, a koncentrálóképesség és a testtudat; fokozódik az immunrendszer működése, a vérkeringés és az emésztés.' },
  { name: 'Stretching', cat: 'lelek', img: 'img/streching.webp', locs: ALL,
    short: 'Nyújtás és lazítás – rugalmasabb izmok, könnyebb mozgás.',
    desc: 'Nyugodt tempójú nyújtó óra, amely növeli az izmok rugalmasságát és az ízületek mozgásterjedelmét, oldja a feszültséget, és segíti a regenerációt. Remek kiegészítője az intenzívebb edzéseknek – és jól esik egy hosszú, ülőmunkás nap után is.' },
  { name: 'Mélyizom erősítő edzés', cat: 'lelek', img: 'img/melyizom.webp', locs: ALL,
    short: 'Stabil törzs, helyes testtartás, kevesebb hátfájás.',
    desc: 'A mélyizom-erősítés a törzs stabilitását növeli, helyes testtartást biztosít, javítja a rugalmasságot, és a core izmok (has, hát, far) erősítésével csökkenti a sérülésveszélyt – különösen hasznos sportolóknak és ülőmunkát végzőknek.\nTesttartás: a stabil törzs segít a gerincet helyes pozícióban tartani, csökkentve a hátfájást. Sérülésmegelőzés: erősíti a gerinc melletti kis izmokat. Teljesítmény: javítja az erőkifejtést. Esztétika: feszesebb has-, comb- és farizmok.' },
];

const GALLERY = [
  { src: 'img/kozosseg.webp', alt: 'Jelmezes közös edzés a Kolibriban' },
  { src: 'img/jumping-2.webp', alt: 'Jumping fitness óra trambulinokon' },
  { src: 'img/hot-iron.webp', alt: 'Súlyzós óra matracokon' },
  { src: 'img/spinning.webp', alt: 'Spinning óra' },
  { src: 'img/trx-2.webp', alt: 'TRX edzés a teremben' },
  { src: 'img/kangoo.webp', alt: 'Kangoo óra ugrócipőkben' },
  { src: 'img/hot-iron-2.webp', alt: 'HOT IRON súlyzórudas óra' },
  { src: 'img/terem-matrac.webp', alt: 'Alakformáló óra a teremben' },
];
