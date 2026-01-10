// Päivitä tätä tiedostoa lisätäksesi uusia resursseja
// Muista päivittää myös lastUpdated-päivämäärä!

const lastUpdated = "10.1.2026";

const resources = [
    {
        id: "67858758",
        title: "Ålands Retrieverförening",
        description: "Ålands Retrieverförening tarjoaa tietoa ja resursseja noutajakoirien koulutuksesta sekä mahdollisuuden liittyä jäseneksi ja osallistua erilaisiin tapahtumiin ja kursseihin.",
        category: "other",
        language: "Ruotsi",
        url: "http://www.retriever.ax/?firstRef",
        image: "https://az729104.cdn.laget.se/emblem_5669271.png;width=1170;height=600;paddingWidth=15;bgColor=041c01;mode=pad;scale=both;anchor=middlecenter"
    },
    {
        id: "4655d0ec",
        title: "Perusasento – Podcast",
        description: "Perusasento-podcastissa keskustellaan koirien kanssa harrastamisesta, kisaamisesta ja kouluttamisesta. Ohjelmassa käsitellään myös koiraperheen arkea sekä haasteita koiraharrastuksessa.",
        category: "podcast",
        language: "Suomi",
        url: "https://podtail.com/en/podcast/perusasento/",
        image: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/cf/20/72/cf20724c-d22e-53a6-9579-9440ef9243c1/mza_1668989270933827713.jpg/1200x1200bb.jpg"
    },
    {
        id: "bdcf89bf",
        title: "Pennun koulutus",
        description: "Artikkelissa käsitellään pennun koulutuksen aloittamista ja perusasioita, kuten kontaktin opettamista ja häiriöttömiä harjoitusympäristöjä.",
        category: "article",
        language: "Suomi",
        url: "https://www.middlerivers.fi/pennun-koulutus",
        image: "https://www.google.com/s2/favicons?domain=www.middlerivers.fi&sz=128"
    },
    {
        id: "03171b02",
        title: "Kultaisennoutajan koulutus",
        description: "Artikkelissa käsitellään kultaisennoutajien metsästysominaisuuksia ja koulutusta, sekä rodun historiaa ja kehitystä Suomessa.",
        category: "article",
        language: "Suomi",
        url: "https://jahtimedia.fi/metsastyskoirat/kultaisestanoutajasta-metsastyskoiraksi",
        image: "https://jahtimedia.fi/sites/default/files/styles/meta_image/public/2019-02/kuva1_6.%20pentu%20ja%20fasaani_0.JPG?h=ce81e654&itok=5T15awwR"
    },
    {
        id: "7e1461c9",
        title: "Luennot ja verkko-ohjaukset",
        description: "Labradorinnoutajakerho järjestää luentoja ja verkko-ohjauksia eri aiheista, kuten koirankoulutus ja aktivointi. Tarjolla on myös jäsenalennuksia.",
        category: "course",
        language: "Suomi",
        url: "https://labradori.doggso.com/fi/koulutus/luennot",
        image: "https://labradori.doggso.com/fi/tiedostot/5577?variant=medium"
    },
    {
        id: "1e493146",
        title: "Pennun koulutus",
        description: "Räätälöity perusopetus pennunomistajille, joka auttaa kouluttamaan noutajasta hyvin käyttäytyvän ja yhteiskuntakelpoisen koiran.",
        category: "course",
        language: "Suomi",
        url: "https://www.karvingoldens.com/fi/pennut/pennun-koulutus",
        image: "https://www.google.com/s2/favicons?domain=www.karvingoldens.com&sz=128"
    },
    {
        id: "6880159c",
        title: "Peruskoulutus - Labradorinnoutajakerho ry",
        description: "Labradorinnoutajakerho tarjoaa peruskoulutus- ja harrastuskursseja koiraharrastajille, keskittyen mukavaan yhdessäoloon ja koirakkojen yksilölliseen ohjaukseen.",
        category: "course",
        language: "Suomi",
        url: "https://www.labradori.fi/harrastusmuodot/peruskoulutus/",
        image: "https://bin.yhdistysavain.fi/1584146/ZYZYElhl99ImNK6fxuq70_ylj0/Luna.jpg"
    },
    {
        id: "8f9839a1",
        title: "TassuTie",
        description: "Koiran harjoitusten suunnittelu- ja seurantasovellus, joka auttaa omistajia seuraamaan koiransa edistymistä ja harjoituksia.",
        category: "other",
        language: "Suomi",
        url: "https://www.muikea.fi/tassupolku/",
        image: "https://www.muikea.fi/tassupolku/apple-touch-icon.png",
        featured: true
    },
    {
        id: "8e0fcc6d",
        title: "Svenska Kennelklubben - Kurser för dig och din hund",
        description: "Ruotsin Kennelliiton kurssiportaali jossa läänien ja paikalliskerhojen järjestämät kurssit. Valikoima kattaa kaiken pennukursseista apportering-, agility- ja rallylydnadkursseihin. SKK ja Svenska Brukshundklubben (SBK) kouluttavat kaikkia koiranomistajia ja kaikentyyppisiä koiria.",
        category: "course",
        language: "Ruotsi",
        url: "https://www.skk.se/aga-hund/hundens-vardag/kurser-for-dig-och-din-hund/",
        image: "https://www.skk.se/contentassets/012a80193a5e4a45b986ce54a859de29/mediaflow-lagotto-rallylydnad_maen_05.jpg"
    },
    {
        id: "cf8cff35",
        title: "Metsästysnoutajat ry",
        description: "Suomalainen yhdistys metsästysnoutajien harrastajille. Harri Sivenin artikkeli noutajan koulutuksesta tarjoaa kattavan katsauksen koulutuksen perusteisiin. Sivusto sisältää tietoa metsästysnoutajan ominaisuuksista, koulutuksesta ja yhdistyksen toiminnasta.",
        category: "other",
        language: "Suomi",
        url: "https://www.metsastysnoutajat.com/",
        image: "https://bin.yhdistysavain.fi/1590628/X2IaPk42nqNsLW4AZNRg0c1Zkf/Rovio.jpg"
    },
    {
        id: "54f70ca7",
        title: "NettiNoutaja",
        description: "Suomalainen 3 kuukauden mittainen verkkokurssi noutajan perustaitojen opettamiseen. Opit hyödyntämään palkitsemiseen perustuvaa koulutusideologiaa. Sopii kaikille noutajaroduille ja tasosta riippumatta. Joustavasti omaan tahtiin suoritettava kurssi verkossa.",
        category: "course",
        language: "Suomi",
        url: "https://www.nettinoutaja.fi/",
        image: "https://www.google.com/s2/favicons?domain=www.nettinoutaja.fi&sz=128"
    },
    {
        id: "381e650b",
        title: "KR Koulutus",
        description: "Suomalainen koirakoulutuspalvelu joka tarjoaa kannustavaa koulutusta kaikenkokoisille ja -rotuisille koirille. Kurssitarjonnassa mm. Noutava noutaja -kursseja yhteistyössä Ulla Alhavan ja Petri Kuosmasen kanssa. Positiiviseen vahvistamiseen perustuva lähestymistapa sopii kaikille koirille.",
        category: "trainer",
        language: "Suomi",
        url: "https://www.krkoulutus.com/",
        image: "https://www.google.com/s2/favicons?domain=www.krkoulutus.com&sz=128",
        location: "Hyvinkää"
    },
    {
        id: "da220955",
        title: "Gundog Training Online (UK)",
        description: "Brittiläinen verkkokoulutuspalvelu jossa voit oppia omaan tahtiisi. Ilmoittautuessasi saat pääsyn video-oppitunneille, säännöllistä sähköpostitukea ja pääsyn eksklusiiviseen Facebook-ryhmään muiden kurssilaisten ja koulutustiimin kanssa. Tarjolla kolme eri kurssia eri tasoille ja ikäryhmille sopiviksi.",
        category: "course",
        language: "Englanti",
        url: "https://www.gundogtrainingonline.co.uk/",
        image: "http://static1.squarespace.com/static/6113b0ffec63322fbda7cc3f/t/6113b69d4dac2d6345a4df3e/1628681885928/FDS+Test+Logo+1.png?format=1500w"
    },
    {
        id: "2a690592",
        title: "Justamere: Retriever Hunt Tests Ultimate Guide",
        description: "Perusteellinen opas noutajien metsästyskokeisiin. Käsittelee merkkausta, tyyliä ja sinnikkyyttä arviointikriteereinä. Koiran tulee näyttää innokkaalta ja onnelliselta, mutta tottelevaiselta. Vinkkejä tapahtumien löytämiseen ja osallistumiseen.",
        category: "article",
        language: "Englanti",
        url: "https://justamere.com/retriever-hunt-tests-ultimate-guide/",
        image: "https://justamere.com/wp-content/uploads/2024/05/Justamere_logo_150x150-e1719121307763.png"
    },
    {
        id: "feda4f8f",
        title: "Bill Hillmann's Hawkeye Media",
        description: "Bill Hillmannin filosofia on kehittää suhde koiraan joka perustuu luottamukseen, ystävällisyyteen ja kunnioitukseen. YouTube-kanavalla ilmaisia videoita jotka kattavat laajan kirjon hänen koulutusfilosofiaansa ja menetelmiään. Lähestymistapa toimii erityisen hyvin herkille tai aroille koirille koska se esitetään hauskuuden ja innostuksen kautta.",
        category: "course",
        language: "Englanti",
        url: "https://www.hawkeyemedia.net/",
        image: "https://www.google.com/s2/favicons?domain=www.hawkeyemedia.net&sz=128"
    },
    {
        id: "eb0e7a03",
        title: "AKC Retriever Hunting Tests",
        description: "Amerikan kennelklubin virallinen sivu noutajien metsästyskokeista. Kolme tasoa: Junior, Senior ja Master. Sisältää säännöt, tapahtumahakemiston ja aloittelijan oppaan. Junior-tasolla 4 noutoa (2 maalta, 2 vedestä) enintään 100 jaardin etäisyydeltä.",
        category: "other",
        language: "Englanti",
        url: "https://www.akc.org/sports/retrievers/hunting-tests/",
        image: "https://www.akc.org/wp-content/uploads/2017/10/LowerALHRC_200702_LabradorRetriever_IMG_6464_detail.jpg"
    },
    {
        id: "7765c7ab",
        title: "The Retriever Trainer: Hunt Test FAQ",
        description: "Kattava UKK metsästyskokeista aloittelijoille. Käytännön vinkkejä: pysy rauhallisena linjalla, koira aistii hermostuneisuutesi. Koira on valmis Junior-tasolle kun se suoriutuu Senior-tason harjoituksista. Odota saavasi 70% harjoitustasosta kokeessa.",
        category: "article",
        language: "Englanti",
        url: "https://www.theretrievertrainer.com/hunt-tests-frequently-asked-questions-and-tips/",
        image: "https://www.google.com/s2/favicons?domain=www.theretrievertrainer.com&sz=128"
    },
    {
        id: "f6170791",
        title: "Gunner: Ultimate Guide to AKC Hunt Tests",
        description: "Kattava opas AKC-metsästyskokeisiin. Selittää tasot, arviointikriteerit ja valmistautumisen. Korostaa linjakäytöksen tärkeyttä - huono tottelevaisuus linjalle tultaessa on yleisin ongelma uusilla ohjaajilla.",
        category: "article",
        language: "Englanti",
        url: "https://gunner.com/blogs/pack/the-ultimate-guide-to-akc-hunt-tests",
        image: "http://gunner.com/cdn/shop/articles/RBRsunsetwork-817553.jpg?v=1625947133&width=2048"
    },
    {
        id: "10378534",
        title: "Golden Ring ry: Noutajien taipumuskoe NOU",
        description: "Kultainen Rengas -yhdistyksen selkeä esittely taipumuskokeesta. Taipparit vaaditaan NOME-B ja NOWT kokeisiin sekä muotovalion arvon saavuttamiseksi. Arvostellaan mm. uimahalu, hakuinto, riistankäsittely ja yhteistyö ohjaajan kanssa.",
        category: "article",
        language: "Suomi",
        url: "https://www.goldenring.fi/harrastuskoira/metsastys-ja-metsastyskokeet/noutajien-taipumuskoe-nou/",
        image: "https://www.google.com/s2/favicons?domain=www.goldenring.fi&sz=128"
    },
    {
        id: "dc4351c8",
        title: "Suomen sileäkarvaiset noutajat: Taipumuskoe",
        description: "SSKN:n kattava esittely noutajien taipumuskokeesta. Taipumusten ja niiden kehittämismahdollisuuksien arvioiminen riistatyössä. Selkeä kuvaus kokeen kulusta ja arviointikriteereistä. Tärkeä ensimmäinen askel koeuralla.",
        category: "article",
        language: "Suomi",
        url: "https://www.flatti.net/toiminta/nou-nome/taipumuskoe/",
        image: "https://bin.yhdistysavain.fi/1591588/QprCfIOyaCMJoxD3Lm1c0_2mw1/KouvolaNOU%20003X.jpeg"
    },
    {
        id: "edde97a3",
        title: "Suomen sileäkarvaiset noutajat: NOME-B koe",
        description: "Kylmän riistan metsästyskokeen (NOME-B) kattava esittely. Koe koostuu kolmesta tehtäväkokonaisuudesta: hakutehtävä, ohjaustehtävä ja markkeeraustehtävä. Sisältää tietoa kokeeseen valmistautumisesta ja vaatimuksista.",
        category: "article",
        language: "Suomi",
        url: "https://www.flatti.net/toiminta/metsastyskoe/nome-b/",
        image: ""
    },
    {
        id: "fdf65b8b",
        title: "SNJ: Rodunomaiset kokeet",
        description: "Suomen Noutajakoirajärjestön virallinen sivu rodunomaisista kokeista. Kattaa kaikki koetyypit: NOU (taipumuskoe), NOME-A, NOME-B ja WT (working test). Selittää koetyyppien erot ja vaatimukset. Virallinen tietolähde suomalaisille harrastajille.",
        category: "other",
        language: "Suomi",
        url: "https://www.snj.fi/harrastukset/rodunomaisetkokeet/",
        image: "https://bin.yhdistysavain.fi/1560643/jEdu54GtiKvfUtl2bKvJ0Xij6E/SannaSieril%C3%A4_2.jpg"
    },
    {
        id: "17b9b053",
        title: "Pipap.net: NOME-koulutus",
        description: "Käytännöllinen opas NOME-koulutukseen. Korostaa pillistä pysähtymisen tärkeyttä ja maltin merkitystä. Neuvoo välttämään paukkunoutoja alusta asti. Hakutyöskentelyn ja ohjauksen perusteet selkeästi selitettynä.",
        category: "article",
        language: "Suomi",
        url: "https://www.pipap.net/koulutus/nome.htm",
        image: "https://www.google.com/s2/favicons?domain=www.pipap.net&sz=128"
    },
    {
        id: "67b2a0f3",
        title: "Retriever Journal: Perfecting the Hunt Test",
        description: "Retriever Journal -lehden artikkeli metsästyskokeiden täydellistämisestä. Ammattikouluttajien vinkkejä menestymiseen. Käsittelee yleisiä virheitä ja niiden välttämistä. Korostaa harjoittelun laatua määrän sijaan.",
        category: "article",
        language: "Englanti",
        url: "https://retrieverjournal.com/perfecting-the-hunt-test/",
        image: "https://retrieverjournal.com/wp-content/uploads/2019/04/hunt-test-judging-2-1024x576.jpg"
    },
    {
        id: "cf9f6099",
        title: "Positive Gun Dogs: Clicker Training for Sporting Breeds",
        description: "Jim Barryn ja Mary Emmenin kirja klikkerikoultuksesta metsästyskoirille. Karen Pryor Clicker Books -sarjasta. Opettaa käyttämään positiivista vahvistamista noutajien, spanielien ja seisovien koulutuksessa. Tieteellisesti todistettu menetelmä korkean vietti koirille.",
        category: "book",
        language: "Englanti",
        url: "https://www.amazon.com/Positive-Gun-Dogs-Training-Sporting/dp/1890948330",
        image: "https://www.google.com/s2/favicons?domain=www.amazon.com&sz=128"
    },
    {
        id: "f707d80a",
        title: "Completely Gundogs: Clicker Training",
        description: "Brittiläisen Completely Gundogs -sivuston artikkeli klikkerin lisäämisestä metsästyskoiran koulutustyökaluihin. Käsittelee klikkerin hyötyjä nopeassa ja tarkassa käytöksen merkitsemisessä. Sovelluksia peruslydnadista edistyneisiin hakutaitoihin.",
        category: "article",
        language: "Englanti",
        url: "https://www.completelygundogs.co.uk/blog/clicker-training-gundogs-adding-to-the-toolbox",
        image: "https://s3.amazonaws.com/contents.newzenler.com/15722/library/642bc547349c4_1680590151_clicker-training.png"
    },
    {
        id: "d4ee5a1d",
        title: "Gun Dog Magazine: Clicker Training",
        description: "Gun Dog -lehden artikkeli klikkerin käytöstä metsästyskoiran koulutuksessa. Käytännön ohjeet klikkerin esittelyyn ja vahvistamiseen. Klikkaa/palkkaa 20 kertaa, 2-3 kertaa päivässä 3 päivän ajan klikkerin vahvistamiseksi.",
        category: "article",
        language: "Englanti",
        url: "https://www.gundogmag.com/editorial/training_gd_clicker_0810/175764",
        image: "https://www.gundogmag.com/files/2010/09/gd_click_0810a.jpg"
    },
    {
        id: "02bdae59",
        title: "Whole Dog Journal: Force-Free Gundog Training",
        description: "Artikkeli pakottomasta metsästyskoirakoulutuksesta. Robert Milner raportoi positiivisen koulutuksen vähentäneen koulutusajan 18 kuukaudesta 6 kuukauteen. Vuoteen 2015 mennessä testattu yli 200 koiralla. Sisältää kirjasuosituksia.",
        category: "article",
        language: "Englanti",
        url: "https://www.whole-dog-journal.com/training/lessons-from-force-free-gundog-trainers/",
        image: "https://cdn.whole-dog-journal.com/wp-content/uploads/2022/02/DSC_0413.jpg.optimal.jpg"
    },
    {
        id: "07ded83b",
        title: "Patricia McConnell: Positive Training for Hunting Dogs",
        description: "Tunnetun eläinkäyttäytymisasiantuntijan Patricia McConnellin blogi positiivisesta metsästyskoirakoulutuksesta. Sisältää kirjasuosituksia ja linkkejä resursseihin. McConnell on kirjoittanut useita bestseller-kirjoja koiran käyttäytymisestä.",
        category: "article",
        language: "Englanti",
        url: "https://www.patriciamcconnell.com/theotherendoftheleash/positive-training-for-hunting-dogs/",
        image: "https://www.google.com/s2/favicons?domain=www.patriciamcconnell.com&sz=128"
    },
    {
        id: "dcb6c00a",
        title: "Labradorinnoutajakerho: Kasvattajalista",
        description: "Suomen Labradorinnoutajakerhon virallinen kasvattajalista maakunnittain järjestettynä. Kasvattajat ovat sitoutuneet kerhon sääntöihin ja liittämään ostajat pentuejäseniksi. Lista sisältää sekä näyttely- että käyttölinjaiset kasvattajat.",
        category: "other",
        language: "Suomi",
        url: "https://www.labradori.fi/linkit/labradorikasvattajia-suomessa-br/",
        image: "",
        location: "Uusimaa"
    },
    {
        id: "f5181e30",
        title: "AKC: Clicker Training Your Dog",
        description: "Amerikan kennelklubin virallinen opas klikkerin käyttöön koirakoulutuksessa. Selittää mark & reward -menetelmän perusteet. Tieteellisesti tutkittu ja tehokas tapa opettaa uusia käytöksiä positiivisella vahvistamisella.",
        category: "article",
        language: "Englanti",
        url: "https://www.akc.org/expert-advice/training/clicker-training-your-dog-mark-and-reward/",
        image: "https://www.akc.org/wp-content/uploads/2019/12/Husky-Getting-a-Treat.jpg"
    },
    {
        id: "28739ac4",
        title: "Hankikoira: Labradorinnoutaja",
        description: "Suomen Kennelliiton Hankikoira-sivuston rotuprofiili labradorinnoutajasta. Kattaa rodun historian, luonteen, terveyden ja koulutustarpeet. Virallinen ja luotettava tietolähde rotuun tutustumiseen.",
        category: "article",
        language: "Suomi",
        url: "https://www.hankikoira.fi/koirarodut/labradorinnoutaja",
        image: "https://www.hankikoira.fi/sites/default/files/media/rotukuvat/126--KukaEkaMeress%C3%A4.jpg"
    },
    {
        id: "c068c594",
        title: "Auran Nuuskut ry",
        description: "Varsinais-Suomen alueen noutajakoirayhdistys. Järjestää koulutusta, kokeita ja tapahtumia noutajaharrastajille Turun seudulla ja ympäristössä.",
        category: "other",
        language: "Suomi",
        url: "https://www.aurannuuskut.org/",
        image: "https://bin.yhdistysavain.fi/1569738/LtnvCr0dELDekNfOr1Ku0dJFtf/tilap%C3%A4inen%20vuoden%20koirat.jpg",
        location: "Aura"
    },
    {
        id: "31575c9c",
        title: "Etelä-Savon Noutajakoirayhdistys ry",
        description: "Etelä-Savon alueen noutajakoirayhdistys. Järjestää koulutusta ja kokeita Mikkelin seudulla ja ympäristössä.",
        category: "other",
        language: "Suomi",
        url: "https://esnoutajat.net/",
        image: "https://www.google.com/s2/favicons?domain=esnoutajat.net&sz=128",
        location: "Mikkeli"
    },
    {
        id: "45b2ba0c",
        title: "Kaakon Noutajakoirayhdistys ry",
        description: "Kaakkois-Suomen alueen noutajakoirayhdistys. Toimii Kymenlaakson ja Etelä-Karjalan alueella.",
        category: "other",
        language: "Suomi",
        url: "https://www.kaakonnoutajat.net/",
        image: "https://www.google.com/s2/favicons?domain=www.kaakonnoutajat.net&sz=128",
        location: "Lappeenranta"
    },
    {
        id: "d7a5495e",
        title: "Kainuun Noutajat ry",
        description: "Kainuun alueen noutajakoirayhdistys. Järjestää toimintaa Kajaanin seudulla ja ympäristössä.",
        category: "other",
        language: "Suomi",
        url: "https://www.kainuunnoutajat.fi/",
        image: "https://d0c86f9e51.clvaw-cdnwnd.com/642aed3f7074a73a5d6826ea8f183dad/200000016-38d0a39cb0/700/019.JPG?ph=d0c86f9e51",
        location: "Kainuu"
    },
    {
        id: "c5ba9623",
        title: "Kanta-Hämeen Noutajakoirayhdistys ry",
        description: "Kanta-Hämeen alueen noutajakoirayhdistys. Toimii Hämeenlinnan seudulla.",
        category: "other",
        language: "Suomi",
        url: "http://khn.fi/",
        image: "https://www.google.com/s2/favicons?domain=khn.fi&sz=128",
        location: "Hausjärvi"
    },
    {
        id: "64d75bae",
        title: "Keski-Suomen Noutajakoirayhdistys ry",
        description: "Keski-Suomen alueen noutajakoirayhdistys. Järjestää koulutusta ja kokeita Jyväskylän seudulla. Sivustolla kattava UKK noutajien koulutuksesta.",
        category: "other",
        language: "Suomi",
        url: "https://www.ksnoutajakoirayhdistys.net/",
        image: "https://www.google.com/s2/favicons?domain=www.ksnoutajakoirayhdistys.net&sz=128",
        location: "Keski-Suomi"
    },
    {
        id: "cc7696a2",
        title: "Lakeuden Noutajakoirayhdistys ry",
        description: "Etelä-Pohjanmaan alueen noutajakoirayhdistys. Toimii Seinäjoen seudulla ja ympäristössä.",
        category: "other",
        language: "Suomi",
        url: "https://www.lakeudennoutajat.fi/",
        image: "https://www.google.com/s2/favicons?domain=www.lakeudennoutajat.fi&sz=128",
        location: "Seinäjoki"
    },
    {
        id: "1e8e4fba",
        title: "Lapin Nuuskut ry",
        description: "Lapin alueen noutajakoirayhdistys. Pohjoisin SNJ:n jäsenyhdistys.",
        category: "other",
        language: "Suomi",
        url: "https://www.lapinnuuskut.fi/",
        image: "https://bin.yhdistysavain.fi/1588453/dccqIq0VWZ3BniAhG5Oa0bvMf-@1200=KF9JR1r7A5/Beige%20Modern%20Esthetician%20Salon%20Flyer_20250202_174822_0000.png",
        location: "Rovaniemi"
    },
    {
        id: "08ae72be",
        title: "Länsi-Pohjan Noutajakoirayhdistys ry",
        description: "Länsi-Pohjan alueen noutajakoirayhdistys. Toimii Kemin ja Tornion seudulla.",
        category: "other",
        language: "Suomi",
        url: "https://lpny.yhdistysavain.fi/",
        image: "https://bin.yhdistysavain.fi/1591349/N36FqJCBRJCfx7GleorK0TH3zL/Noutajayhdistys_logo.png"
    },
    {
        id: "05778255",
        title: "Merenkurkun Noutajat ry",
        description: "Pohjanmaan rannikon noutajakoirayhdistys. Toimii Vaasan seudulla.",
        category: "other",
        language: "Suomi",
        url: "https://www.merenkurkunnoutajat.com/",
        image: "https://bin.yhdistysavain.fi/1597558/ECb2lqMuspuJD2JJsfVb0UITq1@1200=Jrfxxo7SKF/DSC_2275.jpg",
        location: "Vaasa"
    },
    {
        id: "c7feb3dd",
        title: "Mäntän Seudun Nuuskut ry",
        description: "Mäntän seudun noutajakoirayhdistys. Toimii Ylä-Pirkanmaalla.",
        category: "other",
        language: "Suomi",
        url: "http://www.mantannuuskut.com/",
        image: "https://www.google.com/s2/favicons?domain=www.mantannuuskut.com&sz=128",
        location: "Mänttä-Vilppula"
    },
    {
        id: "f294fc16",
        title: "Oulun Seudun Noutajakoirayhdistys ry",
        description: "Pohjois-Pohjanmaan noutajakoirayhdistys. Järjestää aktiivisesti koulutusta ja kokeita Oulun seudulla.",
        category: "other",
        language: "Suomi",
        url: "https://www.osn.fi/",
        image: "https://www.google.com/s2/favicons?domain=www.osn.fi&sz=128",
        location: "Oulu"
    },
    {
        id: "0b3c8947",
        title: "Pirkanmaan Noutajakoirayhdistys ry",
        description: "Pirkanmaan alueen noutajakoirayhdistys. Aktiivinen yhdistys joka järjestää runsaasti koulutusta ja kokeita Tampereen seudulla.",
        category: "other",
        language: "Suomi",
        url: "https://www.pirkannuusku.net/",
        image: "https://www.google.com/s2/favicons?domain=www.pirkannuusku.net&sz=128",
        location: "Tampere"
    },
    {
        id: "0ea2a72a",
        title: "Pohjois-Karjalan Noutajakoirayhdistys ry",
        description: "Pohjois-Karjalan alueen noutajakoirayhdistys. Toimii Joensuun seudulla.",
        category: "other",
        language: "Suomi",
        url: "https://www.pknoutajat.net/",
        image: "https://www.google.com/s2/favicons?domain=www.pknoutajat.net&sz=128",
        location: "Joensuu"
    },
    {
        id: "a88cf10c",
        title: "Päijät-Hämeen Noutajakoirayhdistys ry",
        description: "Päijät-Hämeen alueen noutajakoirayhdistys. Toimii Lahden seudulla.",
        category: "other",
        language: "Suomi",
        url: "https://phnuuskut.yhdistysavain.fi/",
        image: "https://bin.yhdistysavain.fi/1596116/TziX61IhCvQHZ2Cwfxc60TGHv4/17814494_777795305711923_4293742302731047677_o.jpg",
        location: "Lahti"
    },
    {
        id: "77ca238b",
        title: "Salon Seudun Noutajat ry",
        description: "Salon seudun noutajakoirayhdistys. Toimii Varsinais-Suomessa.",
        category: "other",
        language: "Suomi",
        url: "https://www.salonseudunnoutajat.fi/",
        image: "https://www.google.com/s2/favicons?domain=www.salonseudunnoutajat.fi&sz=128",
        location: "Salo"
    },
    {
        id: "b545af61",
        title: "Satakunnan Noutajakoirayhdistys ry",
        description: "Satakunnan alueen noutajakoirayhdistys. Toimii Porin seudulla ja ympäristössä.",
        category: "other",
        language: "Suomi",
        url: "https://www.satakunnannoutajat.fi/",
        image: "https://www.google.com/s2/favicons?domain=www.satakunnannoutajat.fi&sz=128",
        location: "Satakunta"
    },
    {
        id: "cadb58ee",
        title: "Uudenmaan Noutajakoirayhdistys ry",
        description: "Uudenmaan alueen noutajakoirayhdistys. Suurin SNJ:n jäsenyhdistys, toimii pääkaupunkiseudulla ja ympäristössä.",
        category: "other",
        language: "Suomi",
        url: "http://www.umn.fi/",
        image: "https://www.google.com/s2/favicons?domain=www.umn.fi&sz=128",
        location: "Vantaa"
    },
    {
        id: "e7d263a6",
        title: "Ålands Retrieverförening r.f.",
        description: "Ahvenanmaan noutajakoirayhdistys. Ainoa ruotsinkielinen alueellinen jäsenyhdistys.",
        category: "other",
        language: "Ruotsi",
        url: "http://www.retriever.ax/",
        image: "https://az729104.cdn.laget.se/emblem_5669271.png;width=1170;height=600;paddingWidth=15;bgColor=041c01;mode=pad;scale=both;anchor=middlecenter",
        location: "Åland"
    },
    {
        id: "a4e76e7f",
        title: "Kiharakerho ry",
        description: "Kiharakarvaisten noutajien (curly-coated retriever) rotuyhdistys Suomessa. Harvinaisen rodun puolestapuhuja ja edistäjä.",
        category: "other",
        language: "Suomi",
        url: "https://www.kiharakerho.net/",
        image: "https://www.google.com/s2/favicons?domain=www.kiharakerho.net&sz=128",
        location: "Hyvinkää"
    },
    {
        id: "46a4a859",
        title: "Chesapeakekerho ry",
        description: "Chesapeakelahdennoutajien rotuyhdistys Suomessa. Edistää rodun tuntemusta, jalostusta ja käyttöominaisuuksia. Järjestää rotunäyttelyitä ja koulutusta.",
        category: "other",
        language: "Suomi",
        url: "https://www.chesapeakekerho.fi/",
        image: "https://www.google.com/s2/favicons?domain=www.chesapeakekerho.fi&sz=128",
        location: "Kouvola"
    },
    {
        id: "55c823c0",
        title: "Keski-Pohjanmaan Koirakilta ry",
        description: "Keski-Pohjanmaan alueen monipuolinen koirayhdistys joka järjestää myös noutajatoimintaa.",
        category: "other",
        language: "Suomi",
        url: "https://kpkk.net/",
        image: "https://www.google.com/s2/favicons?domain=kpkk.net&sz=128",
        location: "Kokkola"
    },
    {
        id: "661693fd",
        title: "Pietarsaaren seudun Kennelseura ry",
        description: "Pietarsaaren seudun kennelseura joka järjestää noutajatoimintaa. Kaksikielinen yhdistys.",
        category: "other",
        language: "Suomi",
        url: "https://www.jkf-pks.fi/",
        image: "https://bin.yhdistysavain.fi/1592245/aDxrRpl4VUGX64VCwF1O0WfqaG@1200=Son0LqR9dx/toko.jpg",
        location: "Pietarsaari"
    },
    {
        id: "0422af02",
        title: "Vakka-Suomen Noutajat ry",
        description: "Vakka-Suomen alueen noutajakoirayhdistys. Toimii Uudenkaupungin ja Rauman välisellä alueella.",
        category: "other",
        language: "Suomi",
        url: "https://vakkasuomennoutajat.yhdistysavain.fi/",
        image: "https://bin.yhdistysavain.fi/1602630/ZmzxTkOH1RhGYGP3MU4I0YmFXN/7D2_6426_L800px.jpg",
        location: "Mynämäki"
    },
    {
        id: "ba625785",
        title: "Jyry Tuominen: Noutajan pennusta metsästyskoiraksi",
        description: "Suomenkielinen erikoisteos noutajan koulutuksesta pennusta valmiiksi metsästyskoiraksi. Kokonaisvaltainen opas joka kattaa koulutuksen eri vaiheet. Erityisen hyödyllinen suomalaisille harrastajille jotka haluavat kouluttaa noutajansa metsästykseen.",
        category: "book",
        language: "Suomi",
        url: "https://www.metsastysnoutajat.com/artikkelit/harri-siven-noutajan-koulutukses/",
        image: "https://www.google.com/s2/favicons?domain=www.metsastysnoutajat.com&sz=128"
    },
    {
        id: "9937a9ee",
        title: "Suomen Kennelliitto - Digitassu-kurssit",
        description: "Suomen Kennelliiton verkkokurssialusta kasvattajille ja koiraharrastajille. Digitassu-oppimisympäristössä on tarjolla laaja valikoima perus- ja jatkokoulutusta. Kursseja voi suorittaa omaan tahtiin verkossa. Virallinen ja luotettava tietolähde koiraharrastukseen Suomessa.",
        category: "course",
        language: "Suomi",
        url: "https://www.kennelliitto.fi/en/about-us/courses-and-trainings",
        image: "https://www.kennelliitto.fi/sites/default/files/images/mudi_12.jpg",
        location: "Helsinki"
    },
    {
        id: "1d77b984",
        title: "Savon Nuuskut ry",
        description: "Pohjois-Savon alueen noutajakoirayhdistys. Toimii Kuopion seudulla.",
        category: "other",
        language: "Suomi",
        url: "https://savon-nuuskut.webnode.fi/",
        image: "https://13575517d8.cbaul-cdnwnd.com/511281e4eccd1de76975cfc2ce468f39/200000033-a2f33a2f35/700/hein%C3%A4.png?ph=13575517d8",
        featured: true
    },
    {
        id: "f7bbaf1e",
        title: "SNJ Koekalenteri",
        description: "Suomen Noutajakoirajärjestön tarjoama koekalenteri, joka sisältää tietoa noutajakoirien kokeista.",
        category: "other",
        language: "Suomi",
        url: "https://koekalenteri.snj.fi/",
        image: "https://www.google.com/s2/favicons?domain=koekalenteri.snj.fi&sz=128"
    },
    {
        id: "cd47c3b4",
        title: "Koetutka - Noutajakokeet lähellä sinua",
        description: "Koetutka-sivusto tarjoaa tietoa noutajakokeista ja niiden sijainneista Suomessa. Käyttäjät voivat etsiä kokeita sijainnin mukaan.",
        category: "other",
        language: "Suomi",
        url: "https://trotor.github.io/koetutka/",
        image: "https://www.google.com/s2/favicons?domain=trotor.github.io&sz=128",
        location: "Kuopio",
        featured: true
    },
    {
        id: "fadedcc3",
        title: "Labradorinnoutajakerho ry",
        description: "Labradorinnoutajakerho ry on labradorinnoutajien oma yhdistys, joka edistää rodun jalostusta ja tarjoaa tietoa sekä harrastusmahdollisuuksia labradorinomistajille.",
        category: "other",
        language: "Suomi",
        url: "https://www.labradori.fi/",
        image: "https://bin.yhdistysavain.fi/1584146/rqRjSEkAogerEGs6nEu40cQJWN/PIENI_MUSTA_LABRADORINNOUTAJAKERHON_LOGO%20(1000%20x%201000%20px)%20(500%20x%20500%20px).png",
        location: "Hamina",
        featured: true
    },
    {
        id: "384121c1",
        title: "Whistleandwagdogtraining",
        description: "Koirien koulutusvideoita",
        category: "video",
        language: "Englanti",
        url: "https://www.facebook.com/whistleandwagdogtraining/reels/",
        image: "https://www.facebook.com/images/fb_icon_325x325.png"
    },
    {
        id: "c4745e07",
        title: "Suomen sileäkarvaiset noutajat ry",
        description: "Sivusto esittelee Suomen sileäkarvaiset noutajat ry:n toimintaa, rotua ja sen edistämistä. Yhdistys tarjoaa tietoa tapahtumista, kasvattajista ja pentuvälityksestä.",
        category: "other",
        language: "Suomi",
        url: "https://www.flatti.net/",
        image: "https://bin.yhdistysavain.fi/1591588/9cgAcGsRA4ZtmSblCUi60_e-zt/sskn%20logo%20240x240.png",
        location: "Kokkola"
    },
    {
        id: "022b4284",
        title: "Flattiviesti NOME-Extra 2023",
        description: "PDF-dokumentti, joka sisältää todella kattavan paketin nometietoutta.",
        category: "book",
        language: "Suomi",
        url: "https://bin.yhdistysavain.fi/1591588/vVmZRnbOpvW2cyyQV2m00_Sn71/Flattiviesti%20NOME-Extra%202023.pdf",
        image: "https://www.google.com/s2/favicons?domain=bin.yhdistysavain.fi&sz=128"
    },
    {
        id: "0c655f75",
        title: "Laura Hill: Advanced Retriever Training",
        description: "Kirja tarjoaa kattavan lähestymistavan noutajakoirien koulutukseen ja elämiseen, keskittyen kilpailutason saavuttamiseen ja koulutuskäytäntöjen parantamiseen.",
        category: "book",
        language: "Englanti",
        url: "https://www.adlibris.com/fi/kirja/advanced-retriever-training-9781785007552?utm_source=google&utm_medium=cpc&utm_campaign=AR-FI:%20BOK%20-%20pMAX%20-%20Generic%20-%20B%C3%B6cker%20ENG&gad_source=1&gad_campaignid=17349021347&gbraid=0AAAAAD7w-P-qqd6hCgG8kVsX4bg6GAGAa&gclid=CjwKCAiA3rPKBhBZEiwAhPNFQKFZlRrewkaQZ9hzeV89c_iQCi0oJIQcJ7AzaZtsaR6GiycF48YDgRoC4U0QAvD_BwE",
        image: "https://www.adlibris.com/images/9781785007552/advanced-retriever-training.jpg"
    },
    {
        id: "62da5fa2",
        title: "Jyry Tuominen: Noutajan pennusta metsästyskoiraksi",
        description: "Jyry Tuomisen erinomainen teos noutajan kouluttamisesta. Uusi painos ilmestynyt 2025 vuoden lopussa.",
        category: "book",
        language: "Suomi",
        url: "https://www.snj.fi/snj/tarvikemyynti/painotuotteet/",
        image: "https://bin.yhdistysavain.fi/1560643/bsgRCwNwcPp10khi8VUR0XiNPL/Noutajan%20pennusta%20mets%C3%A4styskoiraksi_kannet.jpg"
    },
    {
        id: "c9734c5c",
        title: "Kauppa - Metsäkulman eläinpalvelut",
        description: "Verkkokauppa, joka tarjoaa laajan valikoiman tuotteita koirille ja muille eläimille, mukaan lukien joulutarjoukset ja uutuudet.",
        category: "shop",
        language: "Suomi",
        url: "https://metsakulman.com/kauppa/",
        image: "https://metsakulman.com/wp-content/uploads/2019/09/69708584_417421082215704_2090182410539892736_o.jpg"
    },
    {
        id: "f984ec18",
        title: "Noutajatukku",
        description: "Noutajatukku tarjoaa laadukkaita tarvikkeita metsästyskoirien noutoharjoituksiin, kuten ACME pillit ja Firedog damit.",
        category: "shop",
        language: "Suomi",
        url: "https://www.noutajatukku.fi/",
        image: "https://primary.jwwb.nl/public/i/r/b/temp-ehjvdbyffezrccdrzrsz/lilli-and-orange-2-inc-water-dummy-high.jpg?enable-io=true&enable=upscale&fit=bounds&width=1200"
    },
    {
        id: "d7b81b21",
        title: "Damikauppa",
        description: "Damikauppa tarjoaa laajan valikoiman dummytuotteita, koiran leluja ja koulutusmateriaaleja, kuten pentupaketteja ja kaninvinkuja. Verkkokauppa keskittyy eettisiin ja laadukkaisiin koiratarvikkeisiin.",
        category: "shop",
        language: "Suomi",
        url: "https://www.damikauppa.fi/",
        image: "https://www.damikauppa.fi/tuotekuvat/1500x1500/damikauppa-logo_ilman-taustaa-iso.png"
    },
    {
        id: "83accc85",
        title: "Noutajakauppa",
        description: "Noutajakauppa tarjoaa laajan valikoiman noutajiin ja niiden ohjaajiin liittyviä varusteita sekä koulutustarvikkeita. Verkkokaupassa on myös jouluale ja erilaisia tarjouksia.",
        category: "shop",
        language: "Suomi",
        url: "https://www.noutajakauppa.fi/",
        image: "https://www.noutajakauppa.fi/wp-content/uploads/2025/10/4FAFB233-1368-4D6D-B430-1A3032A13055.jpeg",
        location: "Heinola"
    },
    {
        id: "c876fbce",
        title: "Noutavan koiran koulutusta",
        description: "Tarjoaa käytännön NOME-koulutuksia noutajille Kemiönsaarella, hyödyntäen palkitsemiseen perustuvaa menetelmää. Koulutukset tukevat koiran lajityypillistä käyttäytymistä ja tarjoavat mahdollisuuksia kehittää yhteistyötä omistajan kanssa.",
        category: "course",
        language: "Suomi",
        url: "https://www.scentalertdogs.fi/noutavan-koiran-koulutusta",
        image: "https://www.google.com/s2/favicons?domain=www.scentalertdogs.fi&sz=128",
        location: "Kemiönsaari"
    },
    {
        id: "54f70ca7",
        title: "NettiNoutaja",
        description: "NettiNoutaja tarjoaa verkkokursseja noutajakoirien kouluttamiseen palkitsemiseen perustuvin menetelmin. Kurssit sisältävät kattavaa teoriaa ja käytännön tukea.",
        category: "course",
        language: "Suomi",
        url: "https://www.nettinoutaja.fi/",
        image: "https://www.google.com/s2/favicons?domain=www.nettinoutaja.fi&sz=128"
    },
    {
        id: "41baeb8e",
        title: "Elite Training - Raine Rantanen Oy",
        description: "Elite training tarjoaa noutajien koulutusta kokemuksella ja ammattitaidolla, mukaan lukien yksityistunteja ja kursseja metsästyksestä koeharrastuksiin.",
        category: "trainer",
        language: "Suomi",
        url: "https://www.rrantanen.fi/elite-training/",
        image: "https://www.rrantanen.fi/wp-content/uploads/2024/06/Logo_uusitausta.png",
        location: "Kotka"
    },
    {
        id: "9e900d7d",
        title: "Noutajakoulu Murcas - Facebook",
        description: "Noutajakoulutusta",
        category: "trainer",
        language: "Suomi",
        url: "https://www.facebook.com/Noutajakoulu/",
        image: ""
    },
    {
        id: "58e67bc1",
        title: "Eräloimu - Noutajien koulutus",
        description: "Eräloimu tarjoaa metsästyskoirien ja noutajien koulutusta sekä eräruokapalveluita ja virkistyspäiviä luonnossa.",
        category: "trainer",
        language: "Suomi",
        url: "https://www.eraloimu.fi/",
        image: "https://4788d471d0.clvaw-cdnwnd.com/6fa6be95546afcdadc093b99d6646cf2/200000073-5ad835ad85/700/Er%C3%A4loimu_vaaka_turkoosi_ei%20taustaa.png?ph=4788d471d0",
        location: "Tuusniemi"
    },
    {
        id: "2e9a3a44",
        title: "Katin Koirakoulu",
        description: "Katin Koirakoulu tarjoaa koulutusta metsästyskoirille, erityisesti noutajille, sekä ryhmä- että yksityisopetusta. Koulutukset keskittyvät metsästyskokeisiin ja noutajien taitojen kehittämiseen.",
        category: "trainer",
        language: "Suomi",
        url: "https://www.katinkoirakoulu.com/",
        image: "https://www.katinkoirakoulu.com/uploads/1/0/7/9/107943037/mynamaen-koirakesku_orig.jpg",
        location: "Rusko"
    },
    {
        id: "fbf2bb83",
        title: "Suomen Noutajakoirajärjestö ry",
        description: "Suomen Noutajakoirajärjestö ry (SNJ) on valtakunnallinen organisaatio, joka edistää noutajien käyttötarkoitusta ja arvostusta. Järjestö tarjoaa koulutus- ja harrastusmahdollisuuksia noutajaharrastajille.",
        category: "other",
        language: "Suomi",
        url: "https://www.snj.fi/",
        image: "https://bin.yhdistysavain.fi/1560643/ukhWTGWd4pYAuoi1qjOt0d4ReA/SNJ_Monipuolinen-noutaja-naytos_2025.png"
    },
    {
        id: "e867a38d",
        title: "Villilä Luonto",
        description: "Villilä Luonto tarjoaa ainutlaatuisia kokemuksia ja koulutuspalveluja noutajakoirille kauniissa maalaismiljöössä. Koulutukset ja asiantuntijapalvelut keskittyvät luonnonvara-alaan ja koirankoulutukseen.",
        category: "trainer",
        language: "Suomi",
        url: "https://villila.net/",
        image: "https://villila.net/wp-content/uploads/2020/06/dac72e1c-18ca-4d46-9f70-d3483bdee21d.jpeg",
        location: "Kangasniemi"
    },
    {
        id: "b26b7df3",
        title: "Noutajien koulutus",
        description: "Koirakoulu Kompassi tarjoaa koulutusta noutajarotuisille koirille rodunomaisiin lajeihin, kuten noutamiseen ja tottelevaisuuteen. Kurssit ovat suunniteltu eri ikäisille koirille ja sisältävät myös omatoimitreenimahdollisuuksia.",
        category: "course",
        language: "Suomi",
        url: "https://www.koirakoulukompassi.com/categories/noutajat",
        image: "https://www.koirakoulukompassi.com/fi/tiedostot/4930?variant=medium",
        location: "Vantaa"
    },
    {
        id: "b73e6812",
        title: "Noutajien koulutus - Facebook ryhmä",
        description: "Facebook ryhmä noutajien koulutuksesta kiinnostuneille.",
        category: "other",
        language: "Suomi",
        url: "https://www.facebook.com/groups/noutajienkoulutus/",
        image: ""
    },
    {
        id: "25d061db",
        title: "THE DOG HOUSE with Adam & Jimmy",
        description: "Podcast, jossa Adam Campbell ja Jimmy Rodgers keskustelevat noutajakoirien koulutuksesta ja metsästyksestä vieraidensa kanssa.",
        category: "podcast",
        language: "Englanti",
        url: "https://podcasts.apple.com/fi/podcast/the-dog-house-with-adam-jimmy/id1551009162",
        image: ""
    },
    {
        id: "57f50fc4",
        title: "Jaana Tala - YouTube",
        description: "Jaana Talan YouTube-kanavalla jaetaan videoita noutajakoirien koulutuksesta ja muista aiheista. Mm. erään Nome-b ALO luokan kokeen kulku.",
        category: "video",
        language: "Suomi",
        url: "https://www.youtube.com/@jaanatala1303",
        image: "https://yt3.googleusercontent.com/ytc/AIdro_lEM37M_RknEjBt3VA1_mJjzmN3mFeK7PY6AAgowjY=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "05bf5368",
        title: "Super Retriever Series - YouTube",
        description: "Super Retriever Series esittelee parhaat koira- ja ohjaajatiimit ympäri maata, jotka kilpailevat noutajakokeissa ja Super Dock -tapahtumissa.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@SuperRetrieverSeries",
        image: "https://yt3.googleusercontent.com/M1NpWzV8XfmxheX1GtJD8Ck7_eq9Lc9ditmY9yYkb3Wq2TuoIK5du0agWqsbQBtqZ1hHwNNTIJ4=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "0963299b",
        title: "Super Retriever Series 'Behind the Line' - Podcast",
        description: "Podcast, jossa keskustellaan kilpailullisista noutajakoirista ja niiden ohjaajista. Isäntänä toimii Leo Joseph III.",
        category: "podcast",
        language: "Englanti",
        url: "https://podcasts.apple.com/fi/podcast/super-retriever-series-behind-the-line/id1506973181",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/46/6c/b5/466cb571-e26f-8414-c67d-683c57ea8330/mza_7369485429025864866.jpg/1200x1200bf-60.jpg"
    },
    {
        id: "037a50a0",
        title: "Riivattu Rakki",
        description: "Podcast, jossa keskustellaan koirista ja koiranomistajuudesta nykytieteen valossa. Juontajana toimii koiriin erikoistunut toimittaja Stefanie Lindroos.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/riivattu-rakki/id1643290487",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/44/14/fd/4414fd87-5c49-041f-160b-159ff8f8bb1a/mza_752128808149616405.jpg/1200x1200bf-60.jpg"
    },
    {
        id: "f3a0ceb7",
        title: "Perusasento - Podcast",
        description: "Perusasento-podcastissa keskustellaan koirien kanssa harrastamisesta, kouluttamisesta ja koiraperheen arjesta. Podcastissa käsitellään myös koiraharrastuksen haasteita ja ongelmia.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/perusasento/id1481974568",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/cf/20/72/cf20724c-d22e-53a6-9579-9440ef9243c1/mza_1668989270933827713.jpg/1200x1200bf-60.jpg"
    },
    {
        id: "8d3c7b8d",
        title: "Lone Duck’s Gun Dog Chronicles",
        description: "Podcast, jossa keskustellaan lintujahdista, noutajakoirista ja jaetaan tarinoita ystävien, ammattilaisten ja metsästyskavereiden kesken.",
        category: "podcast",
        language: "Englanti",
        url: "https://podcasts.apple.com/fi/podcast/lone-ducks-gun-dog-chronicles/id1432939362",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/28/7e/62/287e628b-94f2-4248-a099-74ddb3819af5/mza_6329249061418571913.png/1200x1200bf-60.jpg"
    },
    {
        id: "a3a8abba",
        title: "Koira haudattuna",
        description: "Jenna Lehtosen podcast, joka käsittelee koiramaailman epäkohtia ja metsästyskoirien pitoon liittyviä aiheita. Uusia jaksoja julkaistaan joka toinen viikko.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/koira-haudattuna/id1788683182",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/25/66/ed/2566edd4-f0c6-375a-f173-61e25849cada/mza_14545649530442885975.jpg/1200x1200bf-60.jpg"
    },
    {
        id: "4602d2e2",
        title: "Jalat maassa - Podcast",
        description: "Jalat maassa -podcastissa keskustellaan käytännönläheisesti eläinten kouluttamisesta ja hyvinvoinnista. Podcastissa käsitellään muun muassa koirien reaktiivisuutta ja eläinnäyttelijöiden maailmaa.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/jalat-maassa/id1603110433",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/4a/be/cb/4abecbce-6769-9e87-d5a2-47777ba57571/mza_9738355547062832187.jpeg/1200x1200bf-60.jpg"
    },
    {
        id: "64e138ca",
        title: "Hyvää elämää koiran kanssa - Podcast",
        description: "Kennelliiton podcastissa keskustellaan koirista, niiden omistajista ja elämästä hauvojen kanssa. Ohjelma tarjoaa tietoa ja vinkkejä niin uusille kuin kokeneille koiranomistajille.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/hyv%C3%A4%C3%A4-el%C3%A4m%C3%A4%C3%A4-koiran-kanssa/id1509647659",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/65/87/9e/65879eae-799e-9b78-cd0a-ae9680adee87/mza_14370763075393562597.jpg/1200x1200bf-60.jpg"
    },
    {
        id: "1811512b",
        title: "Hunt Test Hobo Podcast",
        description: "Hunt Test Hobo Podcast tarjoaa syvällisiä keskusteluja noutajakoirien koulutuksesta ja vinkkejä niin aloittelijoille kuin kokeneillekin kouluttajille.",
        category: "podcast",
        language: "Englanti",
        url: "https://podcasts.apple.com/fi/podcast/hunt-test-hobo-podcast/id1749635350",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/59/e5/2e/59e52e94-6032-bdd8-b0f1-375cc89ee953/mza_10134765373592444937.jpg/1200x1200bf-60.jpg"
    },
    {
        id: "f3a0ceb7",
        title: "Perusasento - Podcast",
        description: "Perusasento-podcastissa keskustellaan koirien kanssa harrastamisesta, kisaamisesta ja kouluttamisesta. Ohjelmassa käsitellään myös koiraperheen arkea sekä haasteita koiraharrastuksessa.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/perusasento/id1481974568",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/cf/20/72/cf20724c-d22e-53a6-9579-9440ef9243c1/mza_1668989270933827713.jpg/1200x1200bf-60.jpg"
    },
    {
        id: "42996590",
        title: "Mordor Gundogs - YouTube",
        description: "Mordor Gundogs on koulutuskoulu perhekoirille ja metsästyskoirille Skotlannissa. He tarjoavat koulutusta ja jalostusta erityistarpeisiin.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@MordorGundogs22",
        image: "https://yt3.googleusercontent.com/6o2wADccHrN9884M4UWQQRvusOBGNEPD9AfstonQQj1t26lcIkLLpumWEgCRAJs3Y_cxkwqCig=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "5ffada7a",
        title: "Kikopup - YouTube",
        description: "Kikopup tarjoaa koirankoulutusvideoita, jotka kattavat aiheita peruskoulutuksesta edistyneisiin tekniikoihin. Kouluttajana toimii tunnettu koirakouluttaja Emily Larlham.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@kikopup",
        image: "https://yt3.googleusercontent.com/v3VAJNLcMcsbLnzxxopjQ76_gBD4wOLk7cBO3mopbr6bF3LNKYBbALSaqY0RaE9nR4nz46Lnyg=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "ce6b372e",
        title: "Koiran mieli - YouTube",
        description: "YouTube-kanava, joka tarjoaa sisältöä koirien koulutuksesta ja hyvinvoinnista.",
        category: "video",
        language: "Suomi",
        url: "https://www.youtube.com/@koiranmieli",
        image: "https://yt3.googleusercontent.com/aApJRHCAQB_vFkBPT9FD4xbAb7y18q6sjZdxuy46gltgCUbsCASOi-vE6cwQwOFjw97lxKBOtec=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "cb1e73ad",
        title: "Hunt Test Hobo - YouTube",
        description: "Hunt Test Hobo on YouTube-kanava, joka tarjoaa syvällisiä keskusteluja ja oivalluksia noutajakoirien maailmasta.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@HuntTestHobo",
        image: "https://yt3.googleusercontent.com/IONKonhupoOh56AHvWgYeJ61JilbcxpmbXAw5RqlfJ9GsS_uuXPxPpeK9vHyZ8AsKDz_gxnY=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "30905ecd",
        title: "Think Twice Golden Retrievers - YouTube",
        description: "YouTube-kanava, joka tarjoaa tietoa noutajakoirista ja niiden koulutuksesta.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@thinktwicegoldenretrievers",
        image: "https://yt3.googleusercontent.com/Yuch-wr2cu9IevZP0QPJ8tCCZLCQIaOL_RapzFDRjes9pwQY5r1_8uhb0mz337Ysj0TO4EL74Q=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "f20b12e5",
        title: "Noutajatukku - YouTube",
        description: "Noutokouluttaja Pasi Pöppönen jakaa kokemuksiaan ja vinkkejä noutajakoirien koulutuksesta. Kanavalla on runsaasti sisältöä metsästyskoirien koulutukseen liittyen.",
        category: "video",
        language: "Suomi",
        url: "https://www.youtube.com/@Noutajatukku",
        image: "https://yt3.googleusercontent.com/sAPscHQ7XOyW_xb3C3LbbXhu5sacMjunfZUAwrCfNrsA0bsN8MWQPbsLExK-i2v3E8q1oY5M=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "f983a573",
        title: "Four easy marking drills for retrievers",
        description: "Artikkelissa esitellään neljä helppoa harjoitusta noutajakoirien merkitsemisen parantamiseksi, mikä on tärkeää tehokkaassa metsästyksessä.",
        category: "article",
        language: "Englanti",
        url: "https://ottertailkennels.com/easy-marking-drills-retrievers/",
        image: "https://ottertailkennels.com/wp-content/uploads/2022/01/maintaining-dog-training.jpeg"
    },
    {
        id: "af186163",
        title: "Haulikon ääniä",
        description: "Lataa haulikon ääniä - jos ei ole mahdollisuutta ampua oikealla haulikolla :D",
        category: "other",
        language: "Englanti",
        url: "https://pixabay.com/sound-effects/search/shotgun/",
        image: ""
    },
    {
        id: "f97d45b3",
        title: "Varma luoksetulo",
        description: "Artikkelissa käsitellään koiran luoksetulon kouluttamista ja sen tärkeyttä. Ohjeet auttavat omistajia opettamaan koiralleen varman luoksetulon eri tilanteissa.",
        category: "article",
        language: "Suomi",
        url: "https://www.hankikoira.fi/koiratietoa/ohjeita-tarkeimpien-taitojen-opettamiseen/varma-luoksetulo",
        image: "https://www.hankikoira.fi/sites/default/files/sisaltokuvat/20160129_4mg_8859.jpg"
    },
    {
        id: "f707872a",
        title: "Gundog Training Equipment",
        description: "Sporting Saint tarjoaa korkealaatuisia noutajakoirien koulutusvälineitä ja maaseutourheilutarvikkeita. He ovat tunnettuja brittiläisistä valmistajista ja perheyrityksestä.",
        category: "shop",
        language: "Englanti",
        url: "https://www.sportingsaint.co.uk/",
        image: "https://www.sportingsaint.co.uk/app/uploads/2025/12/Website-Front-v1.jpg"
    },
    {
        id: "b4c31ffa",
        title: "Dog and FieldEU",
        description: "Dog & Field Europe tarjoaa kaiken tarvittavan metsästyskoirien koulutukseen. Sivustolla on laaja valikoima koulutusvälineitä ja tarvikkeita.",
        category: "shop",
        language: "Englanti",
        url: "https://dogandfieldeu.nl/en",
        image: "http://dogandfieldeu.nl/cdn/shop/files/LOGO_D_F_EU.jpg?height=628&pad_color=fff&v=1672136646&width=1200"
    },
    {
        id: "a01ac0de",
        title: "RetrieverTraining.Net - the RTF",
        description: "Foorumi noutajien omistajille ja harrastajille, jossa keskustellaan jalostuksesta, koulutuksesta, terveydestä, käyttäytymisestä ja muista aiheista.",
        category: "other",
        language: "Englanti",
        url: "https://www.retrievertraining.net/",
        image: "https://images.platforum.cloud/logos/retrievertraining_net_profile.png?1"
    },
    {
        id: "a8d678af",
        title: "Noutajien metsästyskokeet - perusasiat haltuun",
        description: "Artikkelissa käsitellään noutajien metsästyskokeita ja annetaan vinkkejä pennun koulutukseen ja pohjatöiden tekemiseen.",
        category: "article",
        language: "Suomi",
        url: "https://sporttirakki.fi/2020/03/16/noutajien-metsastyskokeet-perusasiat-haltuun/",
        image: "https://sporttirakki.fi/wp-content/uploads/2018/07/noutaja_nome_metsästyskoe.jpg"
    },
    {
        id: "8e28a08b",
        title: "Jyry Tuominen: Linjan alkeiden opettaminen (Wagon wheel)",
        description: "Artikkelissa Jyry Tuominen käsittelee linjan alkeiden opettamista koirille, keskittyen täsmälliseen sivulla seuraamiseen ja erilaisten harjoitusten toteuttamiseen.",
        category: "article",
        language: "Suomi",
        url: "https://www.metsastysnoutajat.com/artikkelit/jyry-tuominen-linjan-alkeiden-op/",
        image: "https://www.google.com/s2/favicons?domain=www.metsastysnoutajat.com&sz=128"
    },
    {
        id: "7cf67068",
        title: "Heikki Nevalainen, Lea Kilpeläinen: Pehmeä, ohjaajapehmeä vai kohtuullisen kova",
        description: "Artikkelissa käsitellään noutajien luonteenpiirteitä ja koirayksilöiden eroja, sekä pehmeyden ja kovuuden käsitteitä koiran käyttäytymisessä.",
        category: "article",
        language: "Suomi",
        url: "https://www.metsastysnoutajat.com/artikkelit/heikki-nevalainen-lea-kilpelaine/",
        image: "https://www.google.com/s2/favicons?domain=www.metsastysnoutajat.com&sz=128"
    },
    {
        id: "b24d5b11",
        title: "Treenaanko oikeita asioita ja tarpeeksi?",
        description: "Artikkelissa pohditaan, treenaako koiraa tarpeeksi ja oikealla tavalla. Kirjoittaja jakaa omia kokemuksiaan treenisuunnitelmista ja -päiväkirjan käytöstä.",
        category: "article",
        language: "Suomi",
        url: "https://elamantapananoutajat.com/2024/11/12/treenaanko-oikeita-asioita-ja-tarpeeksi/",
        image: "https://elamantapananoutajat.com/wp-content/uploads/2024/11/siiri_poseeraa2-1-of-1.jpg"
    },
    {
        id: "cb893531",
        title: "Kouluttajia – Elämäntapana noutajat",
        description: "Sivulla on listattuna noutajien rodunomaista koulutusta tarjoavia yrityksiä eri puolilla Suomea.",
        category: "article",
        language: "Suomi",
        url: "https://elamantapananoutajat.com/kouluttajia-2/",
        image: "https://elamantapananoutajat.com/wp-content/uploads/2020/11/cropped-maisema-1-of-1.jpg?w=200"
    },
    {
        id: "42996590",
        title: "Mordor Gundogs - YouTube",
        description: "Mordor Gundogs on koulutuskoulu perhekoirille, metsästyskoirille ja niiden omistajille. He tarjoavat koulutusta ja jalostusta Skotlannissa.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@MordorGundogs22",
        image: "https://yt3.googleusercontent.com/6o2wADccHrN9884M4UWQQRvusOBGNEPD9AfstonQQj1t26lcIkLLpumWEgCRAJs3Y_cxkwqCig=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: "bcd4ce60",
        title: "Treenivinkkipankki",
        description: "Suomen Noutajakoirajärjestön kokoama treenivinkkipankki tarjoaa hyödyllisiä harjoituksia noutajien rodunomaisiin lajeihin liittyen, kuten palauttaminen, luovuttaminen ja erilaiset markkeerausharjoitukset.",
        category: "article",
        language: "Suomi",
        url: "https://www.snj.fi/snj/treenivinkkipankki/",
        image: "https://bin.yhdistysavain.fi/1560643/iTPsqga3GVRFCcrCGVvM0XiPE1@1200=yZGUx8xjGF/DSC00528-Edit.jpg"
    },
    {
        id: "3e8fe247",
        title: "Bill Hillmann - YouTube",
        description: "Bill Hillmannin koulutusmateriaali sisältää yli 250 syvällistä koulutusopetusta noutajien kouluttamiseen.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@hawkeyemedianet",
        image: "https://yt3.googleusercontent.com/ytc/AIdro_kn2pEngb3wHWgc6vsi_VWvDQuar3xaw_JIljM1-txDqog=s900-c-k-c0x00ffffff-no-rj",
        featured: true
    },
    {
        id: "23d621ce",
        title: "Metsästysnoutajat RY - Artikkelit",
        description: "Metsästysnoutajat RY:n erinomaiset artikkelit.",
        category: "article",
        language: "Suomi",
        url: "https://www.metsastysnoutajat.com/artikkelit/",
        image: "https://bin.yhdistysavain.fi/1590628/y2hbLIV5cSXLY0gIaLkb0U_KsR/riitan1.jpg",
        featured: true
    },
    {
        id: "9b29684e",
        title: "Nuuskuhommia podcast",
        description: "Nuuskuhommia on kotimainen noutajapodcast",
        category: "podcast",
        language: "Suomi",
        url: "https://www.youtube.com/@Nuuskuhommia",
        image: "https://yt3.googleusercontent.com/b8SzYIFc3g1oZZ7zg8Ha0EOAux6G8ogh8k8xDhTtOfR-XKvR2Mt2iSPLqn3tKQH55_twoWgx=s900-c-k-c0x00ffffff-no-rj",
        featured: true
    },
    {
        id: "967c10be",
        title: "Kuonovideo – Noutajan koulutus",
        description: "Videoartikkeli näyttää noutajan perusharjoituksia: noutoa, hakuruutua ja jälkeä.",
        category: "video",
        language: "Suomi",
        url: "https://kuono.fi",
        image: "https://kuono.fi/wp-content/uploads/2022/04/mobile-header.jpg"
    },
    {
        id: "2a0e2578",
        title: "Retrievers: Marking Enhancement Part III",
        description: "Ducks Unlimited -artikkeli opastaa muistimerkkien (sight & trailing) harjoittelua ja keskittymistä.",
        category: "article",
        language: "Englanti",
        url: "https://www.ducks.org/hunting/retriever-training/marking-enhancement-part-iii",
        image: "https://duazurecdn.azureedge.net/media-manager/20160804/526f75e8-c64a-481e-80d3-ea8e8c02f573/1200/1_20151125133021-07712891-Kaj-Carlson-hank15.jpg"
    },
    {
        id: "614de4c5",
        title: "Contrasting Marks – Miss Skeeter",
        description: "Podcastjakso selittää, miksi kontrastimerkit ovat vaikeita kokemattomille noutajille ja miten niihin voi harjoitella.",
        category: "podcast",
        language: "Englanti",
        url: "https://missskeeter.podbean.com/e/contrasting-marks/",
        image: "https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog4433056/Waiting_x4z7mj_300x300.jpg"
    },
    {
        id: "5fa2cce1",
        title: "Harri Siven: Noutajan koulutuksesta",
        description: "Painottaa johdonmukaisuutta, kärsivällisyyttä ja yhteistyön rakentamista.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/noutajan-koulutuksesta",
        image: ""
    },
    {
        id: "7e6951a7",
        title: "Riitta Jeramo: Markkeeraus",
        description: "Selittää oikean markkeerauksen ja kertoo harjoitusvinkkejä useilla dameilla.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/markkeeraus",
        image: ""
    },
    {
        id: "deab7452",
        title: "Jyry Tuominen: Linjan alkeiden opettaminen (Wagon wheel)",
        description: "Kuvaa wagon wheel -tekniikan ja korostaa toistoja ja tarkkoja käännöksiä.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/linjan-alkeet",
        image: "",
        featured: true
    },
    {
        id: "5511f03e",
        title: "Jyry Tuominen: Aseen käyttö noutajan koulutuksessa",
        description: "Neuvoo opettamaan koiraa seuraamaan ampumasuuntaa ja totuttamaan laukauksiin.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/aseen-kaytto",
        image: "",
        featured: true
    },
    {
        id: "3135bb81",
        title: "Sanna Sierilä: Vesityökoulutus",
        description: "Raportoi vesityökurssin harjoituksista: luottamuksen rakentamisesta veteen, dameista, ohjaajan käden seuraamisesta ja toistojen tärkeydestä.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/vesityotyoskentely",
        image: ""
    },
    {
        id: "8dc5764b",
        title: "Keski-Suomen noutajayhdistys: UKK",
        description: "Neuvoo aloittamaan koulutuksen jo 8-viikkoisena, tekemään leikkimielisiä nouto- ja hajuharjoituksia ja aloittamaan hakuruudun 6–8 kuukauden iässä.",
        category: "article",
        language: "Suomi",
        url: "https://ksnoutaja.fi/ukk",
        image: ""
    },
    {
        id: "bea3ed44",
        title: "Floki & Freya – blogisarja",
        description: "Kolmiosainen sarja: 1. osa pohtii ruokapalkkojen vs. kehujen käyttöä, 2. osa korostaa luottamusta ja hajutyötä, 3. osa neuvoo rauhallista ensikosketusta veteen.",
        category: "article",
        language: "Suomi",
        url: "https://flokifreya.blogspot.com",
        image: "https://www.google.com/s2/favicons?domain=flokifreya.blogspot.com&sz=128"
    },
    {
        id: "4d90880c",
        title: "Villilä Luonto: Onnistumisen kautta huipputassuksi",
        description: "Korostaa nykyaikaisia, positiivisia koulutusmenetelmiä ja kritisoi kovia otteita.",
        category: "article",
        language: "Suomi",
        url: "https://villila.net/blogi/onnistumisen-kautta",
        image: "https://villila.net/wp-content/uploads/2021/02/IMG_2990-uusittu-2.jpg"
    },
    {
        id: "45efdcb9",
        title: "Elämäntapana noutajat: Treenaanko oikeita asioita ja tarpeeksi?",
        description: "Pohdiskelee treenisuunnittelua, harjoituspäiväkirjoja ja treenin mielekkyyttä.",
        category: "article",
        language: "Suomi",
        url: "https://elamantapananoutajat.com",
        image: "https://elamantapananoutajat.com/wp-content/uploads/2024/11/pose-1-of-1.jpg"
    },
    {
        id: "65abb761",
        title: "Lintukoiran koulutus – Ollaan Koiriksi",
        description: "Kuvaa noutavan lintukoiran koulutuksen haasteita; korostaa lyhyitä, positiivisia harjoituksia ja listaa vuoden 2025 kurssit.",
        category: "article",
        language: "Suomi",
        url: "https://ollaankoiriksi.fi/lintukoirankoulutus",
        image: "https://www.google.com/s2/favicons?domain=ollaankoiriksi.fi&sz=128"
    },
    {
        id: "3343bea3",
        title: "Ducks Unlimited: Basic Retriever Training for Duck Hunting",
        description: "Robert Milnerin artikkeli painottaa palkitsemispohjaista koulutusta ja viittä peruskäytöstä.",
        category: "article",
        language: "Englanti",
        url: "https://www.ducks.org/hunting/retriever-training/basic-retriever-training",
        image: ""
    },
    {
        id: "c132ee4d",
        title: "Full Throttle Kennel: Jumpstarting Your Retriever's Training",
        description: "Rohkaisee aloittamaan treenin aikaisin, pitämään sessiot lyhyinä ja käyttämään varhaisissa merkkausharjoituksissa apulaisia.",
        category: "article",
        language: "Englanti",
        url: "https://fullthrottleretriever.com/blogs/news/jumpstarting-your-retrievers-training",
        image: ""
    },
    {
        id: "cba42591",
        title: "SportDOG: Transition to Water",
        description: "Neuvoo siirtymään maalta veteen pienin askelin; varmista perusnouto ja käytä check cordia tarvittaessa.",
        category: "article",
        language: "Englanti",
        url: "https://www.sportdog.com/transitions-to-water",
        image: ""
    },
    {
        id: "d6a75619",
        title: "Evan Graham: Cause and Effect – Trouble Shooting Training Problems",
        description: "Käsittelee, miten kouluttajan virheet vaikuttavat koiran käytökseen ja miten tasapainoinen harjoittelu pitää perustaidoista kiinni.",
        category: "article",
        language: "Englanti",
        url: "https://www.gundogsupply.com/smartarticles.html",
        image: "https://s.turbifycdn.com/aah/gundog/free-shipping-on-dog-training-collars-from-tritronics-sportdog-dt-systems-petsafe-dogtra-e-collar-technologies-304.png"
    },
    {
        id: "1d2f5f77",
        title: "Katin Koirakoulu: Noutajan pennun peruskoulutus",
        description: "Maksullinen opas, joka sisältää harjoitusten suunnittelua ja perustaitojen oppimista.",
        category: "course",
        language: "Suomi",
        url: "https://katinkoirakoulu.fi/pentu",
        image: ""
    },
    {
        id: "3c4ddce2",
        title: "Villilä Luonto: Vesityökurssi verkossa",
        description: "Viiden etäluennon kurssi, jossa harjoitellaan veteenlähetyksiä, vesiohjauksia ja maa- ja vesityöskentelyn yhdistämistä.",
        category: "course",
        language: "Suomi",
        url: "https://villila.net/kurssi/vesityokurssi-verkossa-alk-4-5-ja-11-5/",
        image: "https://villila.net/wp-content/uploads/2022/03/Hyppy-veteen-pieni-kuva-palvelulle.jpg"
    },
    {
        id: "f8c9c08c",
        title: "Tinttimaisterin noutajakurssit",
        description: "Alkeiskurssi kattaa hallinnan, palautukset, luoksetulon, pillinkäytön ja linjat; jatkokurssi syventää näitä taitoja ja valmistaa taipumuskokeeseen.",
        category: "course",
        language: "Suomi",
        url: "https://www.tinttimaisterin.fi/koirakoulu/kurssit/noutajakurssit/",
        image: "https://www.google.com/s2/favicons?domain=www.tinttimaisterin.fi&sz=128"
    },
    {
        id: "2257f8bd",
        title: "Cornerstone Gundog Academy",
        description: "Englanninkielinen verkkovalmennus, joka auttaa omistajaa kouluttamaan itsevarman retrieverin.",
        category: "course",
        language: "Englanti",
        url: "https://www.cornerstonegundogacademy.com",
        image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/6081/images/kFTbCRH3SDmqOzkFXX2q_c9s4AicbQB8bb6Ipt72w_cga_buildfromhere.jpg"
    },
    {
        id: "e2f4870e",
        title: "SNJ: Labradorinnoutaja",
        description: "Korostaa, että peruskoulutus on aloitettava pentuna, jotta aktiivinen ja iso koira pysyy hallinnassa.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/labradorinnoutaja",
        image: "https://www.google.com/s2/favicons?domain=noutajat.com&sz=128"
    },
    {
        id: "0630888e",
        title: "SNJ: Kultainennoutaja",
        description: "Kuvaa goldenin ystävälliseksi ja helposti koulutettavaksi; pysyy omistajan lähellä.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/kultainennoutaja",
        image: ""
    },
    {
        id: "4a4826b5",
        title: "SNJ: Nova Scotia Duck Tolling Retriever (toller)",
        description: "Energinen, itsepäinen ja leikkisä; tarvitsee määrätietoista koulutusta ja selkeät rajat.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/nova-scotia-duck-tolling-retriever",
        image: "https://www.google.com/s2/favicons?domain=noutajat.com&sz=128"
    },
    {
        id: "57f13ebd",
        title: "SNJ: Chesapeakelahden noutaja",
        description: "Älykäs ja sinnikäs mutta herkkä; jämäkkä mutta ystävällinen koulutus toimii.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/chesapeakelahden-noutaja",
        image: "https://www.google.com/s2/favicons?domain=noutajat.com&sz=128"
    },
    {
        id: "5f323620",
        title: "SNJ: Curly-coated noutaja",
        description: "Itsenäinen, hyvä uimari ja erinomainen muisti; koulutus pitää sovittaa sen omatoimisuuteen.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/rodut",
        image: "https://www.google.com/s2/favicons?domain=noutajat.com&sz=128"
    },
    {
        id: "0f930cd2",
        title: "Zoomalia: Flatcoated retriever",
        description: "Aktiivinen ja älykäs; tarvitsee henkistä ja fyysistä aktivointia, esim. tottelevaisuuskoulutus, noutopelit, flyball ja agility.",
        category: "article",
        language: "Englanti",
        url: "https://www.zoomalia.com/magazine/flat-coated-retriever",
        image: ""
    },
    {
        id: "7ba6c7a5",
        title: "Petspa: Labrador ja golden retriever",
        description: "Labradorit ovat älykkäitä ja energisiä (agility, vesipelastus); goldenit ovat ystävällisiä ja miellyttämisenhaluisia (positiivinen koulutus, varhainen sosiaalistaminen).",
        category: "article",
        language: "Englanti",
        url: "https://www.petspa.com",
        image: "https://www.google.com/s2/favicons?domain=www.petspa.com&sz=128"
    }
];
