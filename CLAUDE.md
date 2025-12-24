# Nuuskulista

**Hae aina uusin versio GitHubista ennen työskentelyä:** `git pull`

Suomen Noutajakoirajärjestön (SNJ) Nuusku-lehden artikkelin tukisivu. Sivusto listaa noutajakoirien koulutukseen liittyviä materiaaleja: podcasteja, videoita, artikkeleita ja kursseja.

## Sivuston osoite

https://trotor.github.io/nuuskulista/

## Tekninen rakenne

Yksinkertainen staattinen sivusto ilman build-työkaluja:
- `index.html` - Pääsivu
- `styles.css` - Tyylit (vihreä värimaailma)
- `resources.js` - Resurssien data (tätä päivitetään)
- `app.js` - Sivuston toiminnallisuus (suodatus, renderointi)

## Resurssien lisääminen

Resurssit lisätään `resources.js`-tiedostoon. Jokaisella resurssilla on:
- `title` - Nimi
- `description` - Kuvaus
- `category` - podcast/video/article/course/other
- `language` - Suomi/Englanti/Ruotsi/Muu
- `url` - Linkki

Muista päivittää `lastUpdated`-päivämäärä.

## Automaatio

GitHub Actions -workflow (`.github/workflows/add-resource.yml`) luo automaattisesti Pull Requestin kun joku täyttää Issue-lomakkeen (`.github/ISSUE_TEMPLATE/lisaa-resurssi.yml`).

## Julkaisu

GitHub Pages, deploy from branch (main). Päivittyy automaattisesti kun main-haaraan pushataan.

## Tekoälypromptit

`PROMPTS.md` sisältää promptteja eri tekoälyille (ChatGPT ym.) noutaja-aiheisten materiaalien etsimiseen.

## Hallintasivu (lokaali)

`admin.html` on paikallinen hallintasivu resurssien järjestämiseen ja poistamiseen. Ei mene GitHubiin.

Käyttö:
1. Avaa `admin.html` selaimessa
2. Raahaa resursseja järjestääksesi niitä
3. Klikkaa ✕ poistaaksesi resurssin
4. Klikkaa "Tallenna muutokset" ja kopioi uusi `resources.js`-sisältö
