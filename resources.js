// Päivitä tätä tiedostoa lisätäksesi uusia resursseja
// Muista päivittää myös lastUpdated-päivämäärä!

const lastUpdated = "24.12.2024";

const resources = [
    // Videot ja podcastit
    {
        title: "Kuonovideo – Noutajan koulutus",
        description: "Videoartikkeli näyttää noutajan perusharjoituksia: noutoa, hakuruutua ja jälkeä.",
        category: "video",
        language: "Suomi",
        url: "https://kuono.fi"
    },
    {
        title: "Retrievers: Marking Enhancement Part III",
        description: "Ducks Unlimited -artikkeli opastaa muistimerkkien (sight & trailing) harjoittelua ja keskittymistä.",
        category: "article",
        language: "Englanti",
        url: "https://www.ducks.org/hunting/retriever-training/marking-enhancement-part-iii"
    },
    {
        title: "Contrasting Marks – Miss Skeeter",
        description: "Podcastjakso selittää, miksi kontrastimerkit ovat vaikeita kokemattomille noutajille ja miten niihin voi harjoitella.",
        category: "podcast",
        language: "Englanti",
        url: "https://missskeeter.podbean.com/e/contrasting-marks/"
    },

    // Blogiartikkelit ja oppaat (suomi)
    {
        title: "Harri Siven: Noutajan koulutuksesta",
        description: "Painottaa johdonmukaisuutta, kärsivällisyyttä ja yhteistyön rakentamista.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/noutajan-koulutuksesta"
    },
    {
        title: "Riitta Jeramo: Markkeeraus",
        description: "Selittää oikean markkeerauksen ja kertoo harjoitusvinkkejä useilla dameilla.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/markkeeraus"
    },
    {
        title: "Jyry Tuominen: Linjan alkeiden opettaminen (Wagon wheel)",
        description: "Kuvaa wagon wheel -tekniikan ja korostaa toistoja ja tarkkoja käännöksiä.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/linjan-alkeet"
    },
    {
        title: "Jyry Tuominen: Aseen käyttö noutajan koulutuksessa",
        description: "Neuvoo opettamaan koiraa seuraamaan ampumasuuntaa ja totuttamaan laukauksiin.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/aseen-kaytto"
    },
    {
        title: "Sanna Sierilä: Vesityökoulutus",
        description: "Raportoi vesityökurssin harjoituksista: luottamuksen rakentamisesta veteen, dameista, ohjaajan käden seuraamisesta ja toistojen tärkeydestä.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/vesityotyoskentely"
    },
    {
        title: "Keski-Suomen noutajayhdistys: UKK",
        description: "Neuvoo aloittamaan koulutuksen jo 8-viikkoisena, tekemään leikkimielisiä nouto- ja hajuharjoituksia ja aloittamaan hakuruudun 6–8 kuukauden iässä.",
        category: "article",
        language: "Suomi",
        url: "https://ksnoutaja.fi/ukk"
    },
    {
        title: "Floki & Freya – blogisarja",
        description: "Kolmiosainen sarja: 1. osa pohtii ruokapalkkojen vs. kehujen käyttöä, 2. osa korostaa luottamusta ja hajutyötä, 3. osa neuvoo rauhallista ensikosketusta veteen.",
        category: "article",
        language: "Suomi",
        url: "https://flokifreya.blogspot.com"
    },
    {
        title: "Villilä Luonto: Onnistumisen kautta huipputassuksi",
        description: "Korostaa nykyaikaisia, positiivisia koulutusmenetelmiä ja kritisoi kovia otteita.",
        category: "article",
        language: "Suomi",
        url: "https://villila.net/blogi/onnistumisen-kautta"
    },
    {
        title: "Elämäntapana noutajat: Treenaanko oikeita asioita ja tarpeeksi?",
        description: "Pohdiskelee treenisuunnittelua, harjoituspäiväkirjoja ja treenin mielekkyyttä.",
        category: "article",
        language: "Suomi",
        url: "https://elamantapananoutajat.com"
    },
    {
        title: "Lintukoiran koulutus – Ollaan Koiriksi",
        description: "Kuvaa noutavan lintukoiran koulutuksen haasteita; korostaa lyhyitä, positiivisia harjoituksia ja listaa vuoden 2025 kurssit.",
        category: "article",
        language: "Suomi",
        url: "https://ollaankoiriksi.fi/lintukoirankoulutus"
    },

    // Blogiartikkelit ja oppaat (englanti)
    {
        title: "Ducks Unlimited: Basic Retriever Training for Duck Hunting",
        description: "Robert Milnerin artikkeli painottaa palkitsemispohjaista koulutusta ja viittä peruskäytöstä.",
        category: "article",
        language: "Englanti",
        url: "https://www.ducks.org/hunting/retriever-training/basic-retriever-training"
    },
    {
        title: "Full Throttle Kennel: Jumpstarting Your Retriever's Training",
        description: "Rohkaisee aloittamaan treenin aikaisin, pitämään sessiot lyhyinä ja käyttämään varhaisissa merkkausharjoituksissa apulaisia.",
        category: "article",
        language: "Englanti",
        url: "https://fullthrottleretriever.com/blogs/news/jumpstarting-your-retrievers-training"
    },
    {
        title: "SportDOG: Transition to Water",
        description: "Neuvoo siirtymään maalta veteen pienin askelin; varmista perusnouto ja käytä check cordia tarvittaessa.",
        category: "article",
        language: "Englanti",
        url: "https://www.sportdog.com/transitions-to-water"
    },
    {
        title: "Evan Graham: Cause and Effect – Trouble Shooting Training Problems",
        description: "Käsittelee, miten kouluttajan virheet vaikuttavat koiran käytökseen ja miten tasapainoinen harjoittelu pitää perustaidoista kiinni.",
        category: "article",
        language: "Englanti",
        url: "https://www.gundogsupply.com/smartarticles.html"
    },

    // Verkkokurssit (suomi)
    {
        title: "Katin Koirakoulu: Noutajan pennun peruskoulutus",
        description: "Maksullinen opas, joka sisältää harjoitusten suunnittelua ja perustaitojen oppimista.",
        category: "course",
        language: "Suomi",
        url: "https://katinkoirakoulu.fi/pentu"
    },
    {
        title: "Villilä Luonto: Vesityökurssi verkossa",
        description: "Viiden etäluennon kurssi, jossa harjoitellaan veteenlähetyksiä, vesiohjauksia ja maa- ja vesityöskentelyn yhdistämistä.",
        category: "course",
        language: "Suomi",
        url: "https://villila.net/kurssi/vesityokurssi-verkossa-alk-4-5-ja-11-5/"
    },
    {
        title: "Tinttimaisterin noutajakurssit",
        description: "Alkeiskurssi kattaa hallinnan, palautukset, luoksetulon, pillinkäytön ja linjat; jatkokurssi syventää näitä taitoja ja valmistaa taipumuskokeeseen.",
        category: "course",
        language: "Suomi",
        url: "https://www.tinttimaisterin.fi/koirakoulu/kurssit/noutajakurssit/"
    },
    {
        title: "Ollaan Koiriksi: Noutajakurssit 2025",
        description: "Kurssitarjonta sisältää noutamisen peruskurssin, jatkokurssin, vesityöskentelyn, ohjatun noudon ja NOU-taipumuskokeen. Koulutus on koiralähtöistä ja positiivista.",
        category: "course",
        language: "Suomi",
        url: "https://ollaankoiriksi.fi/lintukoirankoulutus"
    },

    // Verkkokurssit (englanti)
    {
        title: "Cornerstone Gundog Academy",
        description: "Englanninkielinen verkkovalmennus, joka auttaa omistajaa kouluttamaan itsevarman retrieverin.",
        category: "course",
        language: "Englanti",
        url: "https://www.cornerstonegundogacademy.com"
    },

    // Rodunomaiset tiedot
    {
        title: "SNJ: Labradorinnoutaja",
        description: "Korostaa, että peruskoulutus on aloitettava pentuna, jotta aktiivinen ja iso koira pysyy hallinnassa.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/labradorinnoutaja"
    },
    {
        title: "SNJ: Kultainennoutaja",
        description: "Kuvaa goldenin ystävälliseksi ja helposti koulutettavaksi; pysyy omistajan lähellä.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/kultainennoutaja"
    },
    {
        title: "SNJ: Nova Scotia Duck Tolling Retriever (toller)",
        description: "Energinen, itsepäinen ja leikkisä; tarvitsee määrätietoista koulutusta ja selkeät rajat.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/nova-scotia-duck-tolling-retriever"
    },
    {
        title: "SNJ: Chesapeakelahden noutaja",
        description: "Älykäs ja sinnikäs mutta herkkä; jämäkkä mutta ystävällinen koulutus toimii.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/chesapeakelahden-noutaja"
    },
    {
        title: "SNJ: Curly-coated noutaja",
        description: "Itsenäinen, hyvä uimari ja erinomainen muisti; koulutus pitää sovittaa sen omatoimisuuteen.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/rodut"
    },
    {
        title: "Zoomalia: Flatcoated retriever",
        description: "Aktiivinen ja älykäs; tarvitsee henkistä ja fyysistä aktivointia, esim. tottelevaisuuskoulutus, noutopelit, flyball ja agility.",
        category: "article",
        language: "Englanti",
        url: "https://www.zoomalia.com/magazine/flat-coated-retriever"
    },
    {
        title: "Zooplus: Sileäkarvainen noutaja",
        description: "Helposti koulutettava, mutta herkkä; tarvitsee lempeää ja johdonmukaista koulutusta.",
        category: "article",
        language: "Saksa",
        url: "https://www.zooplus.de/magazin/hund/hunderassen/smooth-coated-retriever"
    },
    {
        title: "Petspa: Labrador ja golden retriever",
        description: "Labradorit ovat älykkäitä ja energisiä (agility, vesipelastus); goldenit ovat ystävällisiä ja miellyttämisenhaluisia (positiivinen koulutus, varhainen sosiaalistaminen).",
        category: "article",
        language: "Englanti",
        url: "https://www.petspa.com"
    },
];
