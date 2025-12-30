# Nuuskulista

**Hae aina uusin versio GitHubista ennen työskentelyä:** `git pull`

Suomen Noutajakoirajärjestön (SNJ) Nuusku-lehden artikkelin tukisivu. Listaa noutajakoirien koulutukseen liittyviä materiaaleja.

## Lisenssi

- **Koodi:** Avoin lähdekoodi (MIT)
- **Data (resources.js):** Yksityinen, ei uudelleenkäyttöoikeutta ilman lupaa
- **Jatkosuunnitelmat:** Luottamuksellisia (secret gist `.planning/`-kansiossa, gitignorattu)

## Sivusto

**Tuotanto:** https://www.noutajalista.fi/
**GitHub Pages:** https://trotor.github.io/nuuskulista/

## Rakenne

### Julkinen sivusto
- `index.html` - Julkinen pääsivu
- `app.js` - Sivuston toiminnallisuus (suodatus, popup-ohjeet)
- `styles.css` - Sivuston tyylit
- `resources.js` - Resurssien data

### Hallintasivusto (lokaali)
- `admin.html` - Hallintasivu
- `server.js` - Hallintasivun backend (Express + OpenAI)
- `enrich-resources.js` - Työkalu resurssien rikastamiseen (metadata, paikkakunnat)

## Hallintasivu

```bash
npm run admin
```

Avaa http://localhost:3000/admin.html

Katso tarkemmat ohjeet: [ADMIN.md](ADMIN.md)

## Versionumero ja versiohistoria

Versionumero on `package.json`-tiedostossa muodossa `major.minor.build`.

- **Nosta build-numeroa** (viimeinen numero) joka kerta kun teet muutoksia koodiin
- **Nosta minor-numeroa** kun lisäät uusia ominaisuuksia
- **Nosta major-numeroa** kun teet suuria muutoksia

**Muista päivittää myös `changelog`-kenttä `package.json`:ssa** kun nostat versionumeroa:
```json
"changelog": [
  { "version": "1.3.0", "date": "2024-12-28", "changes": ["Muutos 1", "Muutos 2"] },
  ...
]
```

Versionumero näkyy admin-sivun ylälaidassa (klikkaa nähdäksesi versiohistoria).

## Tekoälypromptit

`PROMPTS.md` sisältää promptteja resurssien etsimiseen.
