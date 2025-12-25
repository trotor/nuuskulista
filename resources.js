// Päivitä tätä tiedostoa lisätäksesi uusia resursseja
// Muista päivittää myös lastUpdated-päivämäärä!

const lastUpdated = "25.12.2025";

const resources = [
    {
        title: "THE DOG HOUSE with Adam & Jimmy",
        description: "Podcast, jossa Adam Campbell ja Jimmy Rodgers keskustelevat noutajakoirien koulutuksesta ja metsästyksestä vieraidensa kanssa.",
        category: "podcast",
        language: "Englanti",
        url: "https://podcasts.apple.com/fi/podcast/the-dog-house-with-adam-jimmy/id1551009162",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/4e/15/69/4e156992-0254-0efb-b164-ebcc820434f1/mza_16165731168018148821.jpg/1200x1200bf-60.jpg"
    },
    {
        title: "Jaana Tala - YouTube",
        description: "Jaana Talan YouTube-kanavalla jaetaan videoita noutajakoirien koulutuksesta ja muista aiheista. Mm. erään Nome-b ALO luokan kokeen kulku.",
        category: "video",
        language: "Suomi",
        url: "https://www.youtube.com/@jaanatala1303",
        image: "https://yt3.googleusercontent.com/ytc/AIdro_lEM37M_RknEjBt3VA1_mJjzmN3mFeK7PY6AAgowjY=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Super Retriever Series - YouTube",
        description: "Super Retriever Series esittelee parhaat koira- ja ohjaajatiimit ympäri maata, jotka kilpailevat noutajakokeissa ja Super Dock -tapahtumissa.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@SuperRetrieverSeries",
        image: "https://yt3.googleusercontent.com/M1NpWzV8XfmxheX1GtJD8Ck7_eq9Lc9ditmY9yYkb3Wq2TuoIK5du0agWqsbQBtqZ1hHwNNTIJ4=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Super Retriever Series 'Behind the Line' - Podcast",
        description: "Podcast, jossa keskustellaan kilpailullisista noutajakoirista ja niiden ohjaajista. Isäntänä toimii Leo Joseph III.",
        category: "podcast",
        language: "Englanti",
        url: "https://podcasts.apple.com/fi/podcast/super-retriever-series-behind-the-line/id1506973181",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/46/6c/b5/466cb571-e26f-8414-c67d-683c57ea8330/mza_7369485429025864866.jpg/1200x1200bf-60.jpg"
    },
    {
        title: "Riivattu Rakki",
        description: "Podcast, jossa keskustellaan koirista ja koiranomistajuudesta nykytieteen valossa. Juontajana toimii koiriin erikoistunut toimittaja Stefanie Lindroos.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/riivattu-rakki/id1643290487",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/44/14/fd/4414fd87-5c49-041f-160b-159ff8f8bb1a/mza_752128808149616405.jpg/1200x1200bf-60.jpg"
    },
    {
        title: "Perusasento - Podcast",
        description: "Perusasento-podcastissa keskustellaan koirien kanssa harrastamisesta, kouluttamisesta ja koiraperheen arjesta. Podcastissa käsitellään myös koiraharrastuksen haasteita ja ongelmia.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/perusasento/id1481974568",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/cf/20/72/cf20724c-d22e-53a6-9579-9440ef9243c1/mza_1668989270933827713.jpg/1200x1200bf-60.jpg"
    },
    {
        title: "Lone Duck’s Gun Dog Chronicles",
        description: "Podcast, jossa keskustellaan lintujahdista, noutajakoirista ja jaetaan tarinoita ystävien, ammattilaisten ja metsästyskavereiden kesken.",
        category: "podcast",
        language: "Englanti",
        url: "https://podcasts.apple.com/fi/podcast/lone-ducks-gun-dog-chronicles/id1432939362",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/28/7e/62/287e628b-94f2-4248-a099-74ddb3819af5/mza_6329249061418571913.png/1200x1200bf-60.jpg"
    },
    {
        title: "Koira haudattuna",
        description: "Jenna Lehtosen podcast, joka käsittelee koiramaailman epäkohtia ja metsästyskoirien pitoon liittyviä aiheita. Uusia jaksoja julkaistaan joka toinen viikko.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/koira-haudattuna/id1788683182",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/25/66/ed/2566edd4-f0c6-375a-f173-61e25849cada/mza_14545649530442885975.jpg/1200x1200bf-60.jpg"
    },
    {
        title: "Jalat maassa - Podcast",
        description: "Jalat maassa -podcastissa keskustellaan käytännönläheisesti eläinten kouluttamisesta ja hyvinvoinnista. Podcastissa käsitellään muun muassa koirien reaktiivisuutta ja eläinnäyttelijöiden maailmaa.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/jalat-maassa/id1603110433",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/4a/be/cb/4abecbce-6769-9e87-d5a2-47777ba57571/mza_9738355547062832187.jpeg/1200x1200bf-60.jpg"
    },
    {
        title: "Hyvää elämää koiran kanssa - Podcast",
        description: "Kennelliiton podcastissa keskustellaan koirista, niiden omistajista ja elämästä hauvojen kanssa. Ohjelma tarjoaa tietoa ja vinkkejä niin uusille kuin kokeneille koiranomistajille.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/hyv%C3%A4%C3%A4-el%C3%A4m%C3%A4%C3%A4-koiran-kanssa/id1509647659",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/65/87/9e/65879eae-799e-9b78-cd0a-ae9680adee87/mza_14370763075393562597.jpg/1200x1200bf-60.jpg"
    },
    {
        title: "Hunt Test Hobo Podcast",
        description: "Hunt Test Hobo Podcast tarjoaa syvällisiä keskusteluja noutajakoirien koulutuksesta ja vinkkejä niin aloittelijoille kuin kokeneillekin kouluttajille.",
        category: "podcast",
        language: "Englanti",
        url: "https://podcasts.apple.com/fi/podcast/hunt-test-hobo-podcast/id1749635350",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/59/e5/2e/59e52e94-6032-bdd8-b0f1-375cc89ee953/mza_10134765373592444937.jpg/1200x1200bf-60.jpg"
    },
    {
        title: "Perusasento - Podcast",
        description: "Perusasento-podcastissa keskustellaan koirien kanssa harrastamisesta, kisaamisesta ja kouluttamisesta. Ohjelmassa käsitellään myös koiraperheen arkea sekä haasteita koiraharrastuksessa.",
        category: "podcast",
        language: "Suomi",
        url: "https://podcasts.apple.com/fi/podcast/perusasento/id1481974568",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/cf/20/72/cf20724c-d22e-53a6-9579-9440ef9243c1/mza_1668989270933827713.jpg/1200x1200bf-60.jpg"
    },
    {
        title: "Mordor Gundogs - YouTube",
        description: "Mordor Gundogs on koulutuskoulu perhekoirille ja metsästyskoirille Skotlannissa. He tarjoavat koulutusta ja jalostusta erityistarpeisiin.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@MordorGundogs22",
        image: "https://yt3.googleusercontent.com/6o2wADccHrN9884M4UWQQRvusOBGNEPD9AfstonQQj1t26lcIkLLpumWEgCRAJs3Y_cxkwqCig=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Kikopup - YouTube",
        description: "Kikopup tarjoaa koirankoulutusvideoita, jotka kattavat aiheita peruskoulutuksesta edistyneisiin tekniikoihin. Kouluttajana toimii tunnettu koirakouluttaja Emily Larlham.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@kikopup",
        image: "https://yt3.googleusercontent.com/v3VAJNLcMcsbLnzxxopjQ76_gBD4wOLk7cBO3mopbr6bF3LNKYBbALSaqY0RaE9nR4nz46Lnyg=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Koiran mieli - YouTube",
        description: "YouTube-kanava, joka tarjoaa sisältöä koirien koulutuksesta ja hyvinvoinnista.",
        category: "video",
        language: "Suomi",
        url: "https://www.youtube.com/@koiranmieli",
        image: "https://yt3.googleusercontent.com/aApJRHCAQB_vFkBPT9FD4xbAb7y18q6sjZdxuy46gltgCUbsCASOi-vE6cwQwOFjw97lxKBOtec=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Hunt Test Hobo - YouTube",
        description: "Hunt Test Hobo on YouTube-kanava, joka tarjoaa syvällisiä keskusteluja ja oivalluksia noutajakoirien maailmasta.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@HuntTestHobo",
        image: "https://yt3.googleusercontent.com/IONKonhupoOh56AHvWgYeJ61JilbcxpmbXAw5RqlfJ9GsS_uuXPxPpeK9vHyZ8AsKDz_gxnY=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Think Twice Golden Retrievers - YouTube",
        description: "YouTube-kanava, joka tarjoaa tietoa noutajakoirista ja niiden koulutuksesta.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@thinktwicegoldenretrievers",
        image: "https://yt3.googleusercontent.com/Yuch-wr2cu9IevZP0QPJ8tCCZLCQIaOL_RapzFDRjes9pwQY5r1_8uhb0mz337Ysj0TO4EL74Q=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Noutajatukku - YouTube",
        description: "Noutokouluttaja Pasi Pöppönen jakaa kokemuksiaan ja vinkkejä noutajakoirien koulutuksesta. Kanavalla on runsaasti sisältöä metsästyskoirien koulutukseen liittyen.",
        category: "video",
        language: "Suomi",
        url: "https://www.youtube.com/@Noutajatukku",
        image: "https://yt3.googleusercontent.com/sAPscHQ7XOyW_xb3C3LbbXhu5sacMjunfZUAwrCfNrsA0bsN8MWQPbsLExK-i2v3E8q1oY5M=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Four easy marking drills for retrievers",
        description: "Artikkelissa esitellään neljä helppoa harjoitusta noutajakoirien merkitsemisen parantamiseksi, mikä on tärkeää tehokkaassa metsästyksessä.",
        category: "article",
        language: "Englanti",
        url: "https://ottertailkennels.com/easy-marking-drills-retrievers/",
        image: "https://ottertailkennels.com/wp-content/uploads/2022/01/maintaining-dog-training.jpeg"
    },
    {
        title: "Haulikon ääniä",
        description: "Lataa haulikon ääniä - jos ei ole mahdollisuutta ampua oikealla haulikolla :D",
        category: "other",
        language: "Englanti",
        url: "https://pixabay.com/sound-effects/search/shotgun/",
        image: ""
    },
    {
        title: "Varma luoksetulo",
        description: "Artikkelissa käsitellään koiran luoksetulon kouluttamista ja sen tärkeyttä. Ohjeet auttavat omistajia opettamaan koiralleen varman luoksetulon eri tilanteissa.",
        category: "article",
        language: "Suomi",
        url: "https://www.hankikoira.fi/koiratietoa/ohjeita-tarkeimpien-taitojen-opettamiseen/varma-luoksetulo",
        image: "https://www.hankikoira.fi/sites/default/files/sisaltokuvat/20160129_4mg_8859.jpg"
    },
    {
        title: "Gundog Training Equipment",
        description: "Sporting Saint tarjoaa korkealaatuisia noutajakoirien koulutusvälineitä ja maaseutourheilutarvikkeita. He ovat tunnettuja brittiläisistä valmistajista ja perheyrityksestä.",
        category: "shop",
        language: "Englanti",
        url: "https://www.sportingsaint.co.uk/",
        image: "https://www.sportingsaint.co.uk/app/uploads/2025/12/Website-Front-v1.jpg"
    },
    {
        title: "Dog and FieldEU",
        description: "Dog & Field Europe tarjoaa kaiken tarvittavan metsästyskoirien koulutukseen. Sivustolla on laaja valikoima koulutusvälineitä ja tarvikkeita.",
        category: "shop",
        language: "Englanti",
        url: "https://dogandfieldeu.nl/en",
        image: "http://dogandfieldeu.nl/cdn/shop/files/LOGO_D_F_EU.jpg?height=628&pad_color=fff&v=1672136646&width=1200"
    },
    {
        title: "RetrieverTraining.Net - the RTF",
        description: "Foorumi noutajien omistajille ja harrastajille, jossa keskustellaan jalostuksesta, koulutuksesta, terveydestä, käyttäytymisestä ja muista aiheista.",
        category: "other",
        language: "Englanti",
        url: "https://www.retrievertraining.net/",
        image: "https://images.platforum.cloud/logos/retrievertraining_net_profile.png?1"
    },
    {
        title: "Noutajien metsästyskokeet - perusasiat haltuun",
        description: "Artikkelissa käsitellään noutajien metsästyskokeita ja annetaan vinkkejä pennun koulutukseen ja pohjatöiden tekemiseen.",
        category: "article",
        language: "Suomi",
        url: "https://sporttirakki.fi/2020/03/16/noutajien-metsastyskokeet-perusasiat-haltuun/",
        image: "https://sporttirakki.fi/wp-content/uploads/2018/07/noutaja_nome_metsästyskoe.jpg"
    },
    {
        title: "Jyry Tuominen: Linjan alkeiden opettaminen (Wagon wheel)",
        description: "Artikkelissa Jyry Tuominen käsittelee linjan alkeiden opettamista koirille, keskittyen täsmälliseen sivulla seuraamiseen ja erilaisten harjoitusten toteuttamiseen.",
        category: "article",
        language: "Suomi",
        url: "https://www.metsastysnoutajat.com/artikkelit/jyry-tuominen-linjan-alkeiden-op/",
        image: "https://www.google.com/s2/favicons?domain=www.metsastysnoutajat.com&sz=128"
    },
    {
        title: "Heikki Nevalainen, Lea Kilpeläinen: Pehmeä, ohjaajapehmeä vai kohtuullisen kova",
        description: "Artikkelissa käsitellään noutajien luonteenpiirteitä ja koirayksilöiden eroja, sekä pehmeyden ja kovuuden käsitteitä koiran käyttäytymisessä.",
        category: "article",
        language: "Suomi",
        url: "https://www.metsastysnoutajat.com/artikkelit/heikki-nevalainen-lea-kilpelaine/",
        image: "https://www.google.com/s2/favicons?domain=www.metsastysnoutajat.com&sz=128"
    },
    {
        title: "Treenaanko oikeita asioita ja tarpeeksi?",
        description: "Artikkelissa pohditaan, treenaako koiraa tarpeeksi ja oikealla tavalla. Kirjoittaja jakaa omia kokemuksiaan treenisuunnitelmista ja -päiväkirjan käytöstä.",
        category: "article",
        language: "Suomi",
        url: "https://elamantapananoutajat.com/2024/11/12/treenaanko-oikeita-asioita-ja-tarpeeksi/",
        image: "https://elamantapananoutajat.com/wp-content/uploads/2024/11/siiri_poseeraa2-1-of-1.jpg"
    },
    {
        title: "Kouluttajia – Elämäntapana noutajat",
        description: "Sivulla on listattuna noutajien rodunomaista koulutusta tarjoavia yrityksiä eri puolilla Suomea.",
        category: "article",
        language: "Suomi",
        url: "https://elamantapananoutajat.com/kouluttajia-2/",
        image: "https://elamantapananoutajat.com/wp-content/uploads/2020/11/cropped-maisema-1-of-1.jpg?w=200"
    },
    {
        title: "Mordor Gundogs - YouTube",
        description: "Mordor Gundogs on koulutuskoulu perhekoirille, metsästyskoirille ja niiden omistajille. He tarjoavat koulutusta ja jalostusta Skotlannissa.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@MordorGundogs22",
        image: "https://yt3.googleusercontent.com/6o2wADccHrN9884M4UWQQRvusOBGNEPD9AfstonQQj1t26lcIkLLpumWEgCRAJs3Y_cxkwqCig=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Treenivinkkipankki",
        description: "Suomen Noutajakoirajärjestön kokoama treenivinkkipankki tarjoaa hyödyllisiä harjoituksia noutajien rodunomaisiin lajeihin liittyen, kuten palauttaminen, luovuttaminen ja erilaiset markkeerausharjoitukset.",
        category: "article",
        language: "Suomi",
        url: "https://www.snj.fi/snj/treenivinkkipankki/",
        image: "https://bin.yhdistysavain.fi/1560643/iTPsqga3GVRFCcrCGVvM0XiPE1@1200=yZGUx8xjGF/DSC00528-Edit.jpg"
    },
    {
        title: "Bill Hillmann - YouTube",
        description: "Bill Hillmannin koulutusmateriaali sisältää yli 250 syvällistä koulutusopetusta noutajien kouluttamiseen.",
        category: "video",
        language: "Englanti",
        url: "https://www.youtube.com/@hawkeyemedianet",
        image: "https://yt3.googleusercontent.com/ytc/AIdro_kn2pEngb3wHWgc6vsi_VWvDQuar3xaw_JIljM1-txDqog=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Metsästysnoutajat RY - Artikkelit",
        description: "Metsästysnoutajat RY:n erinomaiset artikkelit.",
        category: "article",
        language: "Suomi",
        url: "https://www.metsastysnoutajat.com/artikkelit/",
        image: "https://bin.yhdistysavain.fi/1590628/y2hbLIV5cSXLY0gIaLkb0U_KsR/riitan1.jpg"
    },
    {
        title: "Nuuskuhommia podcast",
        description: "Nuuskuhommia on kotimainen noutajapodcast",
        category: "podcast",
        language: "Suomi",
        url: "https://www.youtube.com/@Nuuskuhommia",
        image: "https://yt3.googleusercontent.com/b8SzYIFc3g1oZZ7zg8Ha0EOAux6G8ogh8k8xDhTtOfR-XKvR2Mt2iSPLqn3tKQH55_twoWgx=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Kuonovideo – Noutajan koulutus",
        description: "Videoartikkeli näyttää noutajan perusharjoituksia: noutoa, hakuruutua ja jälkeä.",
        category: "video",
        language: "Suomi",
        url: "https://kuono.fi",
        image: "https://kuono.fi/wp-content/uploads/2022/04/mobile-header.jpg"
    },
    {
        title: "Retrievers: Marking Enhancement Part III",
        description: "Ducks Unlimited -artikkeli opastaa muistimerkkien (sight & trailing) harjoittelua ja keskittymistä.",
        category: "article",
        language: "Englanti",
        url: "https://www.ducks.org/hunting/retriever-training/marking-enhancement-part-iii",
        image: "https://duazurecdn.azureedge.net/media-manager/20160804/526f75e8-c64a-481e-80d3-ea8e8c02f573/1200/1_20151125133021-07712891-Kaj-Carlson-hank15.jpg"
    },
    {
        title: "Contrasting Marks – Miss Skeeter",
        description: "Podcastjakso selittää, miksi kontrastimerkit ovat vaikeita kokemattomille noutajille ja miten niihin voi harjoitella.",
        category: "podcast",
        language: "Englanti",
        url: "https://missskeeter.podbean.com/e/contrasting-marks/",
        image: "https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog4433056/Waiting_x4z7mj_300x300.jpg"
    },
    {
        title: "Harri Siven: Noutajan koulutuksesta",
        description: "Painottaa johdonmukaisuutta, kärsivällisyyttä ja yhteistyön rakentamista.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/noutajan-koulutuksesta",
        image: ""
    },
    {
        title: "Riitta Jeramo: Markkeeraus",
        description: "Selittää oikean markkeerauksen ja kertoo harjoitusvinkkejä useilla dameilla.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/markkeeraus",
        image: ""
    },
    {
        title: "Jyry Tuominen: Linjan alkeiden opettaminen (Wagon wheel)",
        description: "Kuvaa wagon wheel -tekniikan ja korostaa toistoja ja tarkkoja käännöksiä.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/linjan-alkeet",
        image: ""
    },
    {
        title: "Jyry Tuominen: Aseen käyttö noutajan koulutuksessa",
        description: "Neuvoo opettamaan koiraa seuraamaan ampumasuuntaa ja totuttamaan laukauksiin.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/aseen-kaytto",
        image: ""
    },
    {
        title: "Sanna Sierilä: Vesityökoulutus",
        description: "Raportoi vesityökurssin harjoituksista: luottamuksen rakentamisesta veteen, dameista, ohjaajan käden seuraamisesta ja toistojen tärkeydestä.",
        category: "article",
        language: "Suomi",
        url: "https://metsastysnoutajat.fi/artikkelit/vesityotyoskentely",
        image: ""
    },
    {
        title: "Keski-Suomen noutajayhdistys: UKK",
        description: "Neuvoo aloittamaan koulutuksen jo 8-viikkoisena, tekemään leikkimielisiä nouto- ja hajuharjoituksia ja aloittamaan hakuruudun 6–8 kuukauden iässä.",
        category: "article",
        language: "Suomi",
        url: "https://ksnoutaja.fi/ukk",
        image: ""
    },
    {
        title: "Floki & Freya – blogisarja",
        description: "Kolmiosainen sarja: 1. osa pohtii ruokapalkkojen vs. kehujen käyttöä, 2. osa korostaa luottamusta ja hajutyötä, 3. osa neuvoo rauhallista ensikosketusta veteen.",
        category: "article",
        language: "Suomi",
        url: "https://flokifreya.blogspot.com",
        image: "https://www.google.com/s2/favicons?domain=flokifreya.blogspot.com&sz=128"
    },
    {
        title: "Villilä Luonto: Onnistumisen kautta huipputassuksi",
        description: "Korostaa nykyaikaisia, positiivisia koulutusmenetelmiä ja kritisoi kovia otteita.",
        category: "article",
        language: "Suomi",
        url: "https://villila.net/blogi/onnistumisen-kautta",
        image: "https://villila.net/wp-content/uploads/2021/02/IMG_2990-uusittu-2.jpg"
    },
    {
        title: "Elämäntapana noutajat: Treenaanko oikeita asioita ja tarpeeksi?",
        description: "Pohdiskelee treenisuunnittelua, harjoituspäiväkirjoja ja treenin mielekkyyttä.",
        category: "article",
        language: "Suomi",
        url: "https://elamantapananoutajat.com",
        image: "https://elamantapananoutajat.com/wp-content/uploads/2024/11/pose-1-of-1.jpg"
    },
    {
        title: "Lintukoiran koulutus – Ollaan Koiriksi",
        description: "Kuvaa noutavan lintukoiran koulutuksen haasteita; korostaa lyhyitä, positiivisia harjoituksia ja listaa vuoden 2025 kurssit.",
        category: "article",
        language: "Suomi",
        url: "https://ollaankoiriksi.fi/lintukoirankoulutus",
        image: "https://www.google.com/s2/favicons?domain=ollaankoiriksi.fi&sz=128"
    },
    {
        title: "Ducks Unlimited: Basic Retriever Training for Duck Hunting",
        description: "Robert Milnerin artikkeli painottaa palkitsemispohjaista koulutusta ja viittä peruskäytöstä.",
        category: "article",
        language: "Englanti",
        url: "https://www.ducks.org/hunting/retriever-training/basic-retriever-training",
        image: ""
    },
    {
        title: "Full Throttle Kennel: Jumpstarting Your Retriever's Training",
        description: "Rohkaisee aloittamaan treenin aikaisin, pitämään sessiot lyhyinä ja käyttämään varhaisissa merkkausharjoituksissa apulaisia.",
        category: "article",
        language: "Englanti",
        url: "https://fullthrottleretriever.com/blogs/news/jumpstarting-your-retrievers-training",
        image: ""
    },
    {
        title: "SportDOG: Transition to Water",
        description: "Neuvoo siirtymään maalta veteen pienin askelin; varmista perusnouto ja käytä check cordia tarvittaessa.",
        category: "article",
        language: "Englanti",
        url: "https://www.sportdog.com/transitions-to-water",
        image: ""
    },
    {
        title: "Evan Graham: Cause and Effect – Trouble Shooting Training Problems",
        description: "Käsittelee, miten kouluttajan virheet vaikuttavat koiran käytökseen ja miten tasapainoinen harjoittelu pitää perustaidoista kiinni.",
        category: "article",
        language: "Englanti",
        url: "https://www.gundogsupply.com/smartarticles.html",
        image: "https://s.turbifycdn.com/aah/gundog/free-shipping-on-dog-training-collars-from-tritronics-sportdog-dt-systems-petsafe-dogtra-e-collar-technologies-304.png"
    },
    {
        title: "Katin Koirakoulu: Noutajan pennun peruskoulutus",
        description: "Maksullinen opas, joka sisältää harjoitusten suunnittelua ja perustaitojen oppimista.",
        category: "course",
        language: "Suomi",
        url: "https://katinkoirakoulu.fi/pentu",
        image: ""
    },
    {
        title: "Villilä Luonto: Vesityökurssi verkossa",
        description: "Viiden etäluennon kurssi, jossa harjoitellaan veteenlähetyksiä, vesiohjauksia ja maa- ja vesityöskentelyn yhdistämistä.",
        category: "course",
        language: "Suomi",
        url: "https://villila.net/kurssi/vesityokurssi-verkossa-alk-4-5-ja-11-5/",
        image: "https://villila.net/wp-content/uploads/2022/03/Hyppy-veteen-pieni-kuva-palvelulle.jpg"
    },
    {
        title: "Tinttimaisterin noutajakurssit",
        description: "Alkeiskurssi kattaa hallinnan, palautukset, luoksetulon, pillinkäytön ja linjat; jatkokurssi syventää näitä taitoja ja valmistaa taipumuskokeeseen.",
        category: "course",
        language: "Suomi",
        url: "https://www.tinttimaisterin.fi/koirakoulu/kurssit/noutajakurssit/",
        image: "https://www.google.com/s2/favicons?domain=www.tinttimaisterin.fi&sz=128"
    },
    {
        title: "Cornerstone Gundog Academy",
        description: "Englanninkielinen verkkovalmennus, joka auttaa omistajaa kouluttamaan itsevarman retrieverin.",
        category: "course",
        language: "Englanti",
        url: "https://www.cornerstonegundogacademy.com",
        image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/6081/images/kFTbCRH3SDmqOzkFXX2q_c9s4AicbQB8bb6Ipt72w_cga_buildfromhere.jpg"
    },
    {
        title: "SNJ: Labradorinnoutaja",
        description: "Korostaa, että peruskoulutus on aloitettava pentuna, jotta aktiivinen ja iso koira pysyy hallinnassa.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/labradorinnoutaja",
        image: "https://www.google.com/s2/favicons?domain=noutajat.com&sz=128"
    },
    {
        title: "SNJ: Kultainennoutaja",
        description: "Kuvaa goldenin ystävälliseksi ja helposti koulutettavaksi; pysyy omistajan lähellä.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/kultainennoutaja",
        image: ""
    },
    {
        title: "SNJ: Nova Scotia Duck Tolling Retriever (toller)",
        description: "Energinen, itsepäinen ja leikkisä; tarvitsee määrätietoista koulutusta ja selkeät rajat.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/nova-scotia-duck-tolling-retriever",
        image: "https://www.google.com/s2/favicons?domain=noutajat.com&sz=128"
    },
    {
        title: "SNJ: Chesapeakelahden noutaja",
        description: "Älykäs ja sinnikäs mutta herkkä; jämäkkä mutta ystävällinen koulutus toimii.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/chesapeakelahden-noutaja",
        image: "https://www.google.com/s2/favicons?domain=noutajat.com&sz=128"
    },
    {
        title: "SNJ: Curly-coated noutaja",
        description: "Itsenäinen, hyvä uimari ja erinomainen muisti; koulutus pitää sovittaa sen omatoimisuuteen.",
        category: "article",
        language: "Suomi",
        url: "https://noutajat.com/rodut",
        image: "https://www.google.com/s2/favicons?domain=noutajat.com&sz=128"
    },
    {
        title: "Zoomalia: Flatcoated retriever",
        description: "Aktiivinen ja älykäs; tarvitsee henkistä ja fyysistä aktivointia, esim. tottelevaisuuskoulutus, noutopelit, flyball ja agility.",
        category: "article",
        language: "Englanti",
        url: "https://www.zoomalia.com/magazine/flat-coated-retriever",
        image: ""
    },
    {
        title: "Petspa: Labrador ja golden retriever",
        description: "Labradorit ovat älykkäitä ja energisiä (agility, vesipelastus); goldenit ovat ystävällisiä ja miellyttämisenhaluisia (positiivinen koulutus, varhainen sosiaalistaminen).",
        category: "article",
        language: "Englanti",
        url: "https://www.petspa.com",
        image: "https://www.google.com/s2/favicons?domain=www.petspa.com&sz=128"
    }
];
