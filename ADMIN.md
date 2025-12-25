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
- `trainer` - Kouluttajat ja valmentajat
- `shop` - Verkkokaupat ja tarvikkeet
- `other` - Muut materiaalit

**Kielet:**
- `Suomi`, `Englanti`, `Ruotsi`, `Saksa`

---

## Oma käyttöönotto (Fork)

Voit ottaa tämän projektin pohjaksi omalle resurssilistasivstolle.

### Vaihe 1: Forkkaa projekti

1. Mene osoitteeseen https://github.com/trotor/nuuskulista
2. Klikkaa **Fork** -nappia oikeassa yläkulmassa
3. Valitse oma GitHub-tilisi
4. Nyt sinulla on kopio: `https://github.com/SINUN-KÄYTTÄJÄ/nuuskulista`

### Vaihe 2: Aktivoi GitHub Pages

1. Mene forkkaamasi repon **Settings** → **Pages**
2. **Source**: valitse **Deploy from a branch**
3. **Branch**: valitse **main** ja **/ (root)**
4. Klikkaa **Save**
5. Odota 1-2 minuuttia, sivusto on osoitteessa:
   `https://SINUN-KÄYTTÄJÄ.github.io/nuuskulista/`

### Vaihe 3: Mukauta sisältö

Muokkaa nämä tiedostot omaan käyttöösi:

| Tiedosto | Mitä muuttaa |
|----------|--------------|
| `index.html` | Otsikko, kuvaus, tekijätiedot |
| `styles.css` | Värit (etsi `#2c5f2d` ja `#97bc62`) |
| `resources.js` | Tyhjennä esimerkit, lisää omat resurssit |
| `README.md` | Oma kuvaus ja linkit |

### Vaihe 4: Kloonaa ja käytä hallintasivua

```bash
git clone https://github.com/SINUN-KÄYTTÄJÄ/nuuskulista.git
cd nuuskulista
npm install
```

Luo `.env`-tiedosto (kopioi `.env.example`):
```
OPENAI_API_KEY=sk-xxx
```

Käynnistä hallintasivu:
```bash
npm run admin
```

---

## Päivitysten hakeminen alkuperäisestä

Kun alkuperäiseen projektiin tulee päivityksiä, voit hakea ne omaan forkkiisi:

### Ensimmäisellä kerralla: lisää upstream

```bash
git remote add upstream https://github.com/trotor/nuuskulista.git
```

### Päivitysten hakeminen

```bash
git fetch upstream
git merge upstream/main
```

Jos tulee konflikteja, ratkaise ne ja commitoi:
```bash
git add .
git commit -m "Yhdistetty päivitykset upstreamista"
git push
```

### Tarkista versio

Nykyinen versio näkyy tiedostossa `VERSION` ja `package.json`.

---

## Versiohistoria

| Versio | Päivämäärä | Muutokset |
|--------|------------|-----------|
| 1.0.0 | 25.12.2024 | Ensimmäinen julkaisu |
