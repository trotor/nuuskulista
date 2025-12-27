# Nuuskulista

**Hae aina uusin versio GitHubista ennen työskentelyä:** `git pull`

Suomen Noutajakoirajärjestön (SNJ) Nuusku-lehden artikkelin tukisivu. Listaa noutajakoirien koulutukseen liittyviä materiaaleja.

## Lisenssi

- **Koodi:** Avoin lähdekoodi (MIT)
- **Data (resources.js):** Yksityinen, ei uudelleenkäyttöoikeutta ilman lupaa
- **Jatkosuunnitelmat:** Luottamuksellisia (secret gist `.planning/`-kansiossa, gitignorattu)

## Sivusto

https://trotor.github.io/nuuskulista/

## Rakenne

- `index.html` - Julkinen sivu
- `resources.js` - Resurssien data
- `admin.html` + `server.js` - Hallintasivu (lokaali)

## Hallintasivu

```bash
npm run admin
```

Avaa http://localhost:3000/admin.html

Katso tarkemmat ohjeet: [ADMIN.md](ADMIN.md)

## Versionumero

Versionumero on `package.json`-tiedostossa muodossa `major.minor.build`.

- **Nosta build-numeroa** (viimeinen numero) joka kerta kun teet muutoksia koodiin
- **Nosta minor-numeroa** kun lisäät uusia ominaisuuksia
- **Nosta major-numeroa** kun teet suuria muutoksia

Versionumero näkyy admin-sivun ylälaidassa.

## Tekoälypromptit

`PROMPTS.md` sisältää promptteja resurssien etsimiseen.
