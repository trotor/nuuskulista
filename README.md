# Nuuskulista - Noutaja-aiheisia materiaaleja netissä

Kokoelma podcasteja, videoita ja muita resursseja noutajien koulutuksesta. Sivusto on luotu Nuusku-lehden artikkelia varten.

## Sivusto

**🔗 https://trotor.github.io/nuuskulista/**

<div align="center">
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://trotor.github.io/nuuskulista/" alt="QR-koodi sivustolle" />
  <p><em>Skannaa QR-koodi päästäksesi sivustolle</em></p>
</div>

---

## Pikaohjeet

### 📝 Haluan lisätä uuden resurssin
→ [Klikkaa tästä ja täytä lomake](https://github.com/trotor/nuuskulista/issues/new?template=lisaa-resurssi.yml)

### 👤 Olen ylläpitäjä ja haluan hyväksyä ehdotuksen
→ Mene [Pull requests -välilehdelle](https://github.com/trotor/nuuskulista/pulls)

### 🚀 Olen ylläpitäjä ja haluan aktivoida GitHub Pages
→ Seuraa ohjeita: [GitHub Pages -julkaisu](#github-pages--julkaisu-ylläpitäjälle)

---

## Uuden resurssin lisääminen

### Helppo tapa: GitHub Issue (suositeltu!)

**Kuka tahansa voi ehdottaa uusia resursseja - ei vaadi ohjelmointiosaamista!**

#### Vaihe 1: Avaa lomake

Mene osoitteeseen: [**Lisää uusi resurssi**](https://github.com/trotor/nuuskulista/issues/new?template=lisaa-resurssi.yml)

TAI

1. Mene osoitteeseen: https://github.com/trotor/nuuskulista
2. Klikkaa "Issues"-välilehteä
3. Klikkaa vihreää "New issue" -nappia
4. Valitse "Lisää uusi resurssi" -lomake (klikkaa "Get started")

#### Vaihe 2: Täytä lomake

**Esimerkkitapaus:** Lisätään podcast "Koirakaverit" jaksosta noutajan peruskoulutuksesta

Täytä kentät seuraavasti:

| Kenttä | Mitä kirjoitat | Esimerkki |
|--------|----------------|-----------|
| **Title** (otsikko) | Vapaamuotoinen otsikko | `Lisää podcast: Koirakaverit - Noutajan peruskoulutus` |
| **Resurssin nimi** | Podcastin/videon/artikkelin virallinen nimi | `Koirakaverit - Noutajan peruskoulutus` |
| **Kuvaus** | Lyhyt kuvaus sisällöstä (1-3 virkettä) | `Podcast-jakso jossa käydään läpi noutajan peruskoulutuksen vaiheet. Vieraina kaksi kokenutta noutajaohjaajaa, jotka jakavat käytännön vinkkejä.` |
| **Kategoria** | Valitse pudotusvalikosta | Valitse: `podcast` |
| **Kieli** | Valitse pudotusvalikosta | Valitse: `Suomi` |
| **Linkki** | Koko URL-osoite | `https://koirakaverit.fi/podcast/episode-15` |

#### Vaihe 3: Lähetä Issue

1. Tarkista että tiedot ovat oikein
2. Klikkaa vihreää **"Submit new issue"** -nappia

#### Vaihe 4: Odota automaatiota (1-2 minuuttia)

Kun olet lähettänyt Issuen:

1. **GitHub Action käynnistyy automaattisesti** (näkyy oranssilla pallolla Issuen yhteydessä)
2. Botti lukee lomakkeen tiedot
3. Botti lisää resurssin `resources.js`-tiedostoon
4. Botti päivittää päivämäärän
5. **Botti luo Pull Requestin** (saat ilmoituksen)
6. Botti kommentoi Issueen: "✅ Pull request on luotu automaattisesti!"

#### Vaihe 5: Hyväksy muutokset (vain ylläpitäjälle)

Kun Pull Request on luotu:

1. Klikkaa PR:n linkkiä Issuen kommentissa TAI mene "Pull requests" -välilehdelle
2. Tarkista muutokset:
   - Klikkaa "Files changed" -välilehteä
   - Tarkista että `resources.js` näyttää oikealta
3. Jos kaikki ok:
   - Mene takaisin "Conversation"-välilehdelle
   - Klikkaa vihreää **"Merge pull request"** -nappia
   - Klikkaa **"Confirm merge"**
4. Valmis! Issue sulkeutuu automaattisesti ja sivusto päivittyy muutamassa minuutissa

#### Kategoriat

Valitse sopiva kategoria:

- **podcast** - Podcastit ja äänitteet
- **video** - YouTube-videot, webinaarit, videokurssit
- **article** - Blogikirjoitukset, artikkelit, oppaat
- **course** - Verkkokurssit ja koulutusohjelmat
- **other** - Muut materiaalit (kirjat, PDF:t, yms.)

#### Kielet

Valitse materiaalin pääasiallinen kieli:

- **Suomi** - Suomenkieliset materiaalit
- **Englanti** - Englanninkieliset materiaalit
- **Ruotsi** - Ruotsinkieliset materiaalit
- **Muu** - Muut kielet (mainitse kuvauksessa mikä kieli)

---

### Manuaalinen tapa (kehittäjille)

Jos osaat käyttää Gitiä ja haluat tehdä muutokset suoraan:

1. Kloonaa repositorio
2. Avaa `resources.js` tiedosto
3. Lisää uusi resurssi `resources`-taulukkoon:

```javascript
{
    title: "Resurssin nimi",
    description: "Kuvaus resurssista",
    category: "podcast", // Vaihtoehdot: podcast, video, article, course, other
    language: "Suomi",
    url: "https://linkki-resurssiin.com"
},
```

4. Päivitä `lastUpdated`-päivämäärä tiedoston alussa
5. Commitoi ja pushaa muutokset:

```bash
git add resources.js
git commit -m "Lisätty: Resurssin nimi"
git push
```

GitHub Pages päivittyy automaattisesti muutaman minuutin kuluessa.

## GitHub Pages -julkaisu (ylläpitäjälle)

### Ensimmäinen kerta - Aktivoi GitHub Pages

1. Mene osoitteeseen: https://github.com/trotor/nuuskulista/settings/pages

2. **Source**-kohdassa:
   - Valitse **"Deploy from a branch"** (ei "GitHub Actions")

3. **Branch**-kohdassa:
   - Valitse **"main"** (ei "None"!)
   - Valitse **"/ (root)"**
   - Klikkaa **"Save"**

4. Odota 1-2 minuuttia ja päivitä sivu

5. Sivun yläosassa pitäisi näkyä vihreä laatikko:
   > "Your site is live at https://trotor.github.io/nuuskulista/"

6. Testaa: Avaa https://trotor.github.io/nuuskulista/ selaimessa

### Pull Requestien hyväksyminen

Kun joku (tai sinä itse) lähettää uuden resurssin GitHub Issuen kautta:

1. **Saat ilmoituksen** uudesta Pull Requestista (GitHub-sähköpostiin)

2. **Avaa PR:**
   - Mene https://github.com/trotor/nuuskulista/pulls
   - TAI klikkaa linkkiä ilmoituksessa

3. **Tarkista muutokset:**
   - Klikkaa "Files changed" -välilehteä
   - Näet mitä `resources.js`-tiedostoon on lisätty
   - Tarkista että:
     - Resurssin nimi on järkevä
     - Kuvaus on asiallinen
     - URL näyttää oikealta
     - Kategoria ja kieli ovat oikein

4. **Hyväksy tai hylkää:**

   **Jos hyväksyt:**
   - Mene takaisin "Conversation"-välilehdelle
   - Klikkaa vihreää **"Merge pull request"** -nappia
   - Klikkaa **"Confirm merge"**
   - Issue sulkeutuu automaattisesti
   - Sivusto päivittyy 1-2 minuutin kuluttua

   **Jos hylkäät:**
   - Klikkaa "Close pull request" -nappia
   - Kirjoita kommentti miksi hylkäsit (valinnainen)
   - Sulje myös Issue manuaalisesti

### Manuaaliset päivitykset

Jos teit muutoksia suoraan `resources.js`-tiedostoon:

```bash
git add resources.js
git commit -m "Lisätty uusia resursseja"
git push
```

GitHub Pages päivittyy automaattisesti 1-5 minuutin kuluessa.

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
