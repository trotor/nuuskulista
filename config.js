/**
 * Konfiguraatiotiedosto - Mukauta tämä omalle aiheellesi
 *
 * Tämä tiedosto sisältää kaikki aihe- ja brändispesifit asetukset.
 * Muokkaa näitä arvoja luodaksesi oman listaussivuston.
 */

module.exports = {
  // Brändinimet ja tekstit
  brand: {
    name: "Nuuskulista",
    tagline: "Noutaja-aiheisia materiaaleja netissä",
    description: "Listaa noutajakoirien koulutukseen liittyviä materiaaleja verkosta. Suomen Noutajakoirajärjestön (SNJ) Nuusku-lehden artikkelin tukisivu.",
    emoji: "🐕",
    logoAlt: "Noutajalista - Kaikki noutajista yhdestä paikasta"
  },

  // Domain-nimet
  domains: {
    production: "noutajalista.fi",
    productionWww: "www.noutajalista.fi",
    test: "muikea.fi/noutajalista",
    testWww: "www.muikea.fi",
    github: {
      user: "trotor",
      repo: "nuuskulista",
      url: "https://github.com/trotor/nuuskulista"
    }
  },

  // Väriteemat (CSS-värit)
  theme: {
    primary: "#2c5f2d",      // Tumma vihreä
    secondary: "#97bc62",    // Vaalean vihreä
    primaryDark: "#1f4420",  // Erittäin tumma vihreä

    // Kategoriapohjainen värikoodaus
    categoryColors: {
      podcast: "rgba(156, 39, 176, 0.9)",   // Violetti
      video: "rgba(244, 67, 54, 0.9)",      // Punainen
      article: "rgba(33, 150, 243, 0.9)",   // Sininen
      course: "rgba(255, 152, 0, 0.9)",     // Oranssi
      trainer: "rgba(76, 175, 80, 0.9)",    // Vihreä
      shop: "rgba(0, 188, 212, 0.9)",       // Syaani
      book: "rgba(121, 85, 72, 0.9)",       // Ruskea
      other: "rgba(158, 158, 158, 0.9)"     // Harmaa
    }
  },

  // Kategoriat
  categories: [
    {
      id: "podcast",
      label: "Podcast",
      labelFi: "Podcast",
      description: "Podcastit ja äänitteet"
    },
    {
      id: "video",
      label: "Video",
      labelFi: "Video",
      description: "YouTube-videot, webinaarit, videokurssit"
    },
    {
      id: "article",
      label: "Artikkeli",
      labelFi: "Artikkeli",
      description: "Artikkelit, blogit, oppaat"
    },
    {
      id: "course",
      label: "Kurssi",
      labelFi: "Kurssi",
      description: "Verkkokurssit, koulutusohjelmat"
    },
    {
      id: "trainer",
      label: "Kouluttaja",
      labelFi: "Kouluttaja",
      description: "Kouluttajat, valmentajat"
    },
    {
      id: "shop",
      label: "Kauppa",
      labelFi: "Kauppa",
      description: "Verkkokaupat, tarvikkeet"
    },
    {
      id: "book",
      label: "Kirja",
      labelFi: "Kirja",
      description: "Kirjat ja oppaat"
    },
    {
      id: "other",
      label: "Muu",
      labelFi: "Muu",
      description: "Muut materiaalit"
    }
  ],

  // Kielet
  languages: [
    { code: "fi", name: "Suomi", flag: "🇫🇮" },
    { code: "en", name: "Englanti", flag: "🇬🇧" },
    { code: "sv", name: "Ruotsi", flag: "🇸🇪" },
    { code: "de", name: "Saksa", flag: "🇩🇪" }
  ],

  // AI-promptit (OpenAI)
  ai: {
    // Pääprompt resurssien analysoinnille
    systemPrompt: `Olet avustaja joka analysoi nettisivuja noutajakoirien koulutusmateriaalien listaa varten.

Palauta JSON-muodossa:
{
  "title": "Resurssin nimi (lyhyt, kuvaava)",
  "description": "1-2 virkkeen kuvaus sisällöstä suomeksi",
  "category": "podcast|video|article|course|trainer|shop|other",
  "language": "Suomi|Englanti|Ruotsi|Saksa"
}

Kategoriat:
- podcast: Podcastit, äänitteet
- video: YouTube, webinaarit, videokurssit
- article: Artikkelit, blogit, oppaat
- course: Verkkokurssit, koulutusohjelmat
- trainer: Kouluttajat, valmentajat
- shop: Verkkokaupat, tarvikkeet
- other: Muut

Tunnista kieli sisällöstä. Palauta VAIN JSON, ei muuta tekstiä.`,

    // Prompt paikkakuntien etsimiselle
    locationPrompt: `Olet avustaja joka etsii paikkakuntia suomalaisilta verkkosivuilta.

TÄRKEÄÄ - Palauta "null" seuraavissa tapauksissa:
- Verkkokaupat ja verkkokurssit (toimivat koko Suomessa)
- Podcastit ja YouTube-kanavat (digitaalinen sisältö)
- Koko Suomen kattavat palvelut
- Valtakunnalliset järjestöt (esim. kennelliitot)

Palauta paikkakunta VAIN jos:
- Kyseessä on paikallinen koirakouluttaja tai valmentaja
- Fyysinen koulutuspaikka tai kennel tietyllä paikkakunnalla
- Palvelu on selkeästi sidottu yhteen paikkakuntaan

Palauta VAIN paikkakunnan nimi (esim. "Kuopio" tai "Helsinki") tai "null".
Älä palauta mitään muuta tekstiä. Älä palauta osoitteita, vain paikkakunnan nimi.`,

    // User-Agent tunnisteet
    userAgent: {
      server: "Nuuskulista/1.0",
      enricher: "NoutajalistaBot/1.0"
    }
  },

  // Sanasto (aihekohtainen)
  glossary: {
    enabled: true,
    title: "Noutajasanasto",
    buttonText: "📖 Noutajasanasto",
    sections: [
      {
        title: "Kokeet ja lyhenteet",
        terms: [
          { term: "NOU", definition: "Noutajakoe, virallinen kennelliiton kokeemuoto" },
          { term: "NOME-A", definition: "Noutajien metsästyskoe A-luokka" },
          { term: "NOME-B", definition: "Noutajien metsästyskoe B-luokka" },
          { term: "WT", definition: "Working Test, noutajien koulutuskoe" },
          { term: "MEJÄ", definition: "Metsästysjäljestely, virallinen kennelliiton kokeemuoto" },
          { term: "FT", definition: "Field Trial, noutajien kenttäkoetoiminta" }
        ]
      },
      {
        title: "Perustyöskentely",
        terms: [
          { term: "Markkeeraus", definition: "Koira seuraa silmällä pudonneen linnun tai damin lentoradan ja merkkaa putoamispaikan" },
          { term: "Ohjaus", definition: "Koiran ohjaaminen etäältä pillimerkeillä ja kädellä haluttuun suuntaan" },
          { term: "Haku", definition: "Koira etsii ja hakee pudonneen linnun tai damin ilman tarkkaa näköyhteyttä" },
          { term: "Walk-up", definition: "Kävellen eteneminen linjassa, odottaen ammuttavia lintuja" }
        ]
      },
      {
        title: "Välineet ja termit",
        terms: [
          { term: "Dami/Dummy", definition: "Koulutusnukke joka simuloi ammuttua lintua" },
          { term: "Stadga", definition: "Rauhallisuus ja paikallaan pysyminen ammuntatilanteessa" },
          { term: "Steadiness", definition: "Rauhallisuus, koira ei lähde noutamaan ennen lähettämismerkkiä" },
          { term: "Blind", definition: "Sokkonouto - koira ei näe pudonnutta kohdetta vaan ohjataan sinne" }
        ]
      },
      {
        title: "Pillihallinta",
        terms: [
          { term: "Stop-pilli", definition: "Yksi pitkä ääni: STOP (koira pysähtyy ja istuu)" },
          { term: "Paluupilli", definition: "Useita lyhyitä ääniä: tule takaisin" },
          { term: "Lähettäminen", definition: "Nimi + käsiohje suuntaan (ei pillimerkkiä)" }
        ]
      }
    ]
  },

  // Kategorioiden paikkakuntarelevanssi
  locationRelevantCategories: ['trainer', 'shop', 'course', 'other'],

  // Tracking API
  tracking: {
    port: 3001,
    healthPath: '/health',
    statsPath: '/api/stats',
    trackPath: '/api/track'
  },

  // Admin-palvelin
  admin: {
    port: 3000,
    path: '/admin.html'
  }
};
