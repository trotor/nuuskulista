# Mukauttamisohje - Luo oma listaussivustosi

Tämä projekti on suunniteltu uudelleenkäytettäväksi. Voit luoda oman listaussivustosi muokkaamalla `config.js`-tiedostoa.

## Pika-aloitus

1. **Forkkaa projekti GitHubissa**
   ```bash
   # Tai kloonaa suoraan
   git clone https://github.com/trotor/nuuskulista.git my-list
   cd my-list
   npm install
   ```

2. **Muokkaa `config.js`-tiedostoa**

   Avaa `config.js` ja muuta seuraavat kohdat omaksesi:

   ```javascript
   // Brändinimet ja tekstit
   brand: {
     name: "Oma Listapalvelusi",           // Sivuston nimi
     tagline: "Kaikki X:stä yhdestä paikasta",
     description: "Kuvaus sivustostasi",
     emoji: "📚",                           // Emoji logoksi
     logoAlt: "Alt-teksti logolle"
   },

   // Domain-nimet
   domains: {
     production: "omadomain.fi",
     github: {
       user: "sinun-käyttäjä",
       repo: "sinun-repo"
     }
   },

   // Värit (muuta brändiväreiksi)
   theme: {
     primary: "#2c5f2d",      // Pääväri
     secondary: "#97bc62",    // Toissijainen väri
     primaryDark: "#1f4420"   // Tumma versio
   }
   ```

3. **Muokkaa AI-prompteja**

   ```javascript
   ai: {
     systemPrompt: `Olet avustaja joka analysoi nettisivuja
     [OMAN AIHEESI] listaa varten.

     Kategoriat:
     - podcast: Podcastit
     - video: Videot
     - article: Artikkelit
     ...
     `,
   }
   ```

4. **Muokkaa sanasto (valinnainen)**

   Jos aiheellasi ei ole tarvetta sanastolle, poista se käytöstä:

   ```javascript
   glossary: {
     enabled: false  // Poista sanasto käytöstä
   }
   ```

   Tai muokkaa omaksi:

   ```javascript
   glossary: {
     enabled: true,
     title: "Oman Aiheesi Sanasto",
     sections: [
       {
         title: "Perustermit",
         terms: [
           { term: "Termi1", definition: "Selitys..." }
         ]
       }
     ]
   }
   ```

5. **Käynnistä ja testaa**

   ```bash
   npm run admin  # http://localhost:3000/admin.html
   ```

## Mitä EI tarvitse muuttaa

Seuraavat tiedostot toimivat automaattisesti `config.js`:n perusteella:

✅ **Backend:**
- `server.js` - Hallintasivun backend
- `enrich-resources.js` - Resurssien rikastaminen
- `tracking-server.js` - Klikkausten tracking

✅ **Konfiguraatio:**
- `config.js` - Kaikki mukautukset täällä!

## Mitä PITÄÄ muuttaa

❗ **Frontend** (ei vielä refaktoroitu):
- `index.html` - Pääsivu (sisältää kovakoodattuja tekstejä)
- `admin.html` - Hallintasivu (sisältää kovakoodattuja tekstejä)
- `app.js` - Frontendin logiikka
- `styles.css` - CSS-värit

⚠️ **Huom:** Frontend-refaktointi on kesken. Toistaiseksi sinun täytyy muokata näitä tiedostoja manuaalisesti.

## Esimerkkejä mukautuksista

### Esimerkki 1: Kirjalistaussivusto

```javascript
// config.js
module.exports = {
  brand: {
    name: "Kirjalista",
    tagline: "Parhaat kirjat aiheesta X",
    emoji: "📚"
  },

  ai: {
    systemPrompt: `Analysoi kirja-arvosteluja ja kirjalistoja.

    Kategoriat:
    - book: Kirjat
    - article: Artikkelit kirjoista
    - podcast: Kirja-aiheisia podcasteja
    - video: Kirja-arvosteluja videolla
    `
  },

  glossary: {
    enabled: false  // Ei tarvita kirjalistalle
  }
}
```

### Esimerkki 2: Reseptilistaus

```javascript
// config.js
module.exports = {
  brand: {
    name: "Reseptilista",
    tagline: "Parhaat reseptit netistä",
    emoji: "🍳"
  },

  categories: [
    { id: "video", label: "Videoresepti" },
    { id: "article", label: "Kirjallinen resepti" },
    { id: "course", label: "Kokkikurssi" },
    { id: "shop", label: "Raaka-ainekauppa" }
  ],

  ai: {
    systemPrompt: `Analysoi reseptisivuja.

    Palauta JSON:
    {
      "title": "Reseptin nimi",
      "description": "Lyhyt kuvaus",
      "category": "video|article|course|shop",
      "language": "Suomi|Englanti"
    }
    `
  }
}
```

## Edistyneet mukautukset

### Kategorioiden muokkaus

Jos haluat omia kategorioita:

```javascript
categories: [
  {
    id: "uusi_kategoria",
    label: "Uusi Kategoria",
    labelFi: "Uusi Kategoria",
    description: "Kuvaus"
  }
]
```

### Kielten muokkaus

```javascript
languages: [
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ja", name: "日本語", flag: "🇯🇵" }  // Lisää uusia!
]
```

### Värien muokkaus

Vaihda brändivärit:

```javascript
theme: {
  primary: "#FF5733",      // Oranssi
  secondary: "#C70039",    // Punainen
  primaryDark: "#900C3F"   // Tumman punainen
}
```

## Deployment

1. **GitHub Pages:**
   - Muuta `package.json`:n `homepage`-kenttä
   - Push GitHubiin
   - Aktivoi GitHub Pages Settings-välilehdeltä

2. **Oma palvelin:**
   - Katso `DEPLOYMENT.md` ohjeita
   - Muokkaa `noutajalista.fi.nginx` → `omadomain.fi.nginx`

## Tuki ja kehitys

- **Dokumentaatio:** Katso `CLAUDE.md` ja `ADMIN.md`
- **Ongelmat:** Avaa issue GitHubissa
- **Pull requestit:** Tervetulleita!

## Lisenssi

- **Koodi:** MIT License (vapaa uudelleenkäyttö)
- **Data (`resources.js`):** Tämä projekti - ei uudelleenkäyttöä ilman lupaa
- **Omat mukautuksesi:** Sinun omasi!

---

## Roadmap

🚧 **Tulossa:**
- [ ] Frontend-refaktointi (index.html, app.js)
- [ ] Automaattinen teemojen generointi
- [ ] Multi-tenant tuki (useita sivustoja samalla koodipohjalla)
- [ ] Plugin-arkkitehtuuri

💡 **Ideoita?** Avaa issue GitHubissa!
