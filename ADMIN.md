# Ylläpitäjän ohjeet

## Hallintasivu (lokaali)

Node.js-pohjainen hallintasivu resurssien hallintaan.

### Käynnistys

```bash
npm install                        # Ensimmäisellä kerralla
OPENAI_API_KEY=xxx npm run admin   # Käynnistä palvelin (URL-haku vaatii avaimen)
```

Avaa http://localhost:3000/admin.html

### Resurssien lisääminen

Kolme tapaa lisätä resursseja:

| Tapa | Kuvaus |
|------|--------|
| **📝 Lomake** | Täytä kentät manuaalisesti |
| **🔗 URL** | Syötä linkki, LLM generoi otsikon ja kuvauksen automaattisesti |
| **{ } JSON** | Liitä yksi tai useampi resurssi JSON-muodossa |

### Muut toiminnot

- **Klikkaa resurssin nimeä** - muokkaa resurssia
- **🔗** - avaa linkin selaimessa
- **✏️** - muokkaa resurssia
- **✕** - poista resurssi
- **⋮⋮** - raahaa järjestääksesi

Muista klikata **💾 Tallenna** tallentaaksesi muutokset tiedostoon.

### URL-haun toiminta (AI)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Selain     │     │   server.js  │     │   OpenAI     │
│              │     │              │     │   API        │
│  Syötä URL   │────▶│  Hae sivu    │────▶│  Analysoi    │
│              │     │  (fetch)     │     │  (gpt-4o-    │
│  Esikatselu  │◀────│  Parsii HTML │◀────│   mini)      │
│              │     │  (cheerio)   │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
```

1. Syötät URL:n admin-sivulla
2. Backend hakee sivun ja parsii tekstisisällön
3. OpenAI generoi otsikon, kuvauksen, kategorian ja kielen
4. Tarkistat tuloksen ja lisäät resurssin

---

### Muutosten julkaisu

```bash
git add resources.js
git commit -m "Päivitetty resursseja"
git push
```

Sivusto päivittyy automaattisesti 1-2 minuutin kuluessa.

---

## Pull Requestien hyväksyminen

Kun joku ehdottaa uutta resurssia GitHub Issuen kautta:

1. Mene [Pull requests -välilehdelle](https://github.com/trotor/nuuskulista/pulls)
2. Tarkista muutokset "Files changed" -välilehdeltä
3. Hyväksy klikkaamalla **"Merge pull request"** → **"Confirm merge"**

Issue sulkeutuu automaattisesti ja sivusto päivittyy.

---

## Tiedostorakenne

| Tiedosto | Kuvaus |
|----------|--------|
| `index.html` | Julkinen pääsivu |
| `styles.css` | Sivuston tyylit |
| `resources.js` | Resurssien data |
| `app.js` | Sivuston toiminnallisuus |
| `admin.html` | Hallintasivu |
| `server.js` | Hallintasivun backend |

---

## Kategoriat ja kielet

**Kategoriat:**
- `podcast` - Podcastit ja äänitteet
- `video` - YouTube-videot, webinaarit
- `article` - Artikkelit ja oppaat
- `course` - Verkkokurssit
- `other` - Muut materiaalit

**Kielet:**
- `Suomi`, `Englanti`, `Ruotsi`, `Saksa`
