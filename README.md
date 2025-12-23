# Nuuskulista - Noutaja-aiheisia materiaaleja netissä

Kokoelma podcasteja, videoita ja muita resursseja noutajien koulutuksesta. Sivusto on luotu Nuusku-lehden artikkelia varten.

## Sivusto

**🔗 https://trotor.github.io/nuuskulista/**

<div align="center">
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://trotor.github.io/nuuskulista/" alt="QR-koodi sivustolle" />
  <p><em>Skannaa QR-koodi päästäksesi sivustolle</em></p>
</div>

## Uuden resurssin lisääminen

### Helppo tapa: GitHub Issue (suositeltu!)

**Kuka tahansa voi ehdottaa uusia resursseja:**

1. Mene osoitteeseen: [**Lisää uusi resurssi**](https://github.com/trotor/nuuskulista/issues/new?template=lisaa-resurssi.yml)
2. Täytä lomake (nimi, kuvaus, kategoria, kieli, linkki)
3. Lähetä Issue
4. Botti luo automaattisesti Pull Requestin
5. Ylläpitäjä tarkistaa ja hyväksyy muutoksen

Tämä toimii myös ylläpitäjälle itselleen - nopein tapa lisätä resursseja!

### Manuaalinen tapa (kehittäjille)

Jos haluat tehdä muutokset suoraan:

1. Avaa `resources.js` tiedosto
2. Lisää uusi resurssi `resources`-taulukkoon:

```javascript
{
    title: "Resurssin nimi",
    description: "Kuvaus resurssista",
    category: "podcast", // Vaihtoehdot: podcast, video, article, course, other
    language: "Suomi",
    url: "https://linkki-resurssiin.com"
},
```

3. Päivitä `lastUpdated`-päivämäärä
4. Commitoi ja pushaa muutokset

### Kategoriat

Käytettävissä olevat kategoriat:
- `podcast` - Podcastit
- `video` - Videot
- `article` - Artikkelit
- `course` - Kurssit
- `other` - Muut materiaalit

## GitHub Pages -julkaisu

### Ensimmäinen kerta

1. Luo uusi GitHub-repositorio
2. Pushaa kaikki tiedostot repositorioon:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/KÄYTTÄJÄNIMI/REPO-NIMI.git
   git push -u origin main
   ```

3. Mene GitHub-repositorioon Settings > Pages
4. Valitse Source: "Deploy from a branch"
5. Valitse Branch: "main" ja folder: "/ (root)"
6. Paina "Save"

Sivusto on käytettävissä osoitteessa: `https://KÄYTTÄJÄNIMI.github.io/REPO-NIMI/`

### Päivitysten julkaisu

Kun olet lisännyt uusia resursseja `resources.js`-tiedostoon:

```bash
git add resources.js
git commit -m "Lisätty uusia resursseja"
git push
```

GitHub Pages päivittyy automaattisesti muutaman minuutin kuluessa.

## Tiedostorakenne

- `index.html` - Pääsivu
- `styles.css` - Sivuston tyylitiedosto
- `resources.js` - Resurssien data (päivitä tätä!)
- `app.js` - Sivuston toiminnallisuus
- `README.md` - Tämä tiedosto

## Sivuston ominaisuudet

- Responsiivinen suunnittelu (toimii mobiilissa ja työpöydällä)
- Suodatus kategorioiden mukaan
- Helppo päivittää - muokkaa vain `resources.js`-tiedostoa
- Vihreä värimaailma (noutajakoira-aiheinen)

## Tekniset yksityiskohdat

Sivusto on rakennettu puhtaalla HTML:llä, CSS:llä ja JavaScriptillä ilman ulkoisia riippuvuuksia. Tämä tekee siitä:
- Nopean
- Helposti ylläpidettävän
- Toimivan suoraan GitHub Pagesissa ilman buildeja
