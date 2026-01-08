# Deployment-ohjeet

## Ympäristöt

### 1. Testisivu (muikea.fi/noutajalista)
- **URL:** https://muikea.fi/noutajalista/
- **API:** https://muikea.fi/noutajalista/api/
- **Käyttö:** Testaus ja kehitys
- **Deployment:** Automaattinen (GitHub Actions)

### 2. Tuotanto (noutajalista.fi)
- **URL:** https://noutajalista.fi/
- **API:** https://noutajalista.fi/api/
- **Käyttö:** Virallinen julkinen sivusto
- **Deployment:** Manuaalinen tai tagged release

---

## GitHub Secrets

Aseta seuraavat secrets GitHub repositoryssä (`Settings` → `Secrets and variables` → `Actions`):

```
VM_SSH_KEY      = SSH private key (id_ed25519) VM:lle
VM_USER         = dino
VM_HOST         = 75.119.143.90 (tai muikea.fi)
```

### SSH-avaimen luominen

Jos SSH-avain puuttuu:

```bash
# Luo uusi SSH-avainpari
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy_key

# Kopioi julkinen avain VM:lle
ssh-copy-id -i ~/.ssh/github_deploy_key.pub dino@75.119.143.90

# Kopioi yksityinen avain GitHub Secretsiin
cat ~/.ssh/github_deploy_key
# → Kopioi tulos VM_SSH_KEY secretiin
```

---

## Deployment-workflowt

### 1. `deploy.yml` - Automaattinen testideployment

**Triggerit:**
- Push to `main` branch
- Muutokset frontend/backend-tiedostoihin
- Manuaalinen workflow dispatch

**Mitä tekee:**
1. Synkronoi tiedostot VM:lle (`~/noutajalista/`)
2. Asentaa npm-riippuvuudet
3. Käynnistää PM2:n uudelleen
4. Testaa että API vastaa

**Käyttö:**
```bash
# Commit ja push käynnistävät automaattisesti
git add .
git commit -m "Update frontend"
git push
```

### 2. `deploy-production.yml` - Tuotantodeployment

**Triggerit:**
- Tagged release
- Manuaalinen workflow dispatch (vaatii hyväksynnän)

**Mitä tekee:**
1. Sama kuin `deploy.yml`
2. Vaatii "production" environment-hyväksynnän GitHubissa

**Käyttö:**

```bash
# Luo release
git tag -a v1.5.0 -m "Release 1.5.0"
git push origin v1.5.0
```

TAI

GitHub Actions → `Deploy to Production` → `Run workflow`

---

## VM:n rakenne

```
/home/dino/sites/noutajalista/
├── index.html              # Julkinen sivu
├── app.js                  # Frontend JS
├── styles.css              # Tyylit
├── resources.js            # Resurssit
├── tracking-server.js      # Backend API
├── tracking.db             # SQLite-tietokanta
├── package.json
├── node_modules/
└── noutajalista.fi.nginx   # Nginx-konfiguraatio (kopio)
```

### Nginx-konfiguraatio

**Testisivu:** `/etc/nginx/sites-available/muikea`
```nginx
location /noutajalista/api/ {
    proxy_pass http://localhost:3001/api/;
}

location /noutajalista {
    alias /home/dino/sites/noutajalista;
    index index.html;
    try_files $uri $uri/ /noutajalista/index.html;
}
```

**Tuotanto:** `/etc/nginx/sites-available/noutajalista.fi`
```nginx
# Linkki: sudo ln -s /home/dino/sites/noutajalista/noutajalista.fi.nginx /etc/nginx/sites-enabled/noutajalista.fi
# Tiedosto: ~/sites/noutajalista/noutajalista.fi.nginx
```

### PM2 prosessit

```bash
pm2 list
pm2 logs noutajalista-tracking
pm2 restart noutajalista-tracking
pm2 stop noutajalista-tracking
```

---

## Manuaalinen deployment

Jos GitHub Actions ei toimi:

```bash
# Paikallisesti
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude 'tracking.db' \
  ./ dino@75.119.143.90:~/sites/noutajalista/

# VM:llä
ssh dino@75.119.143.90
cd ~/sites/noutajalista
. ~/.nvm/nvm.sh
npm install --production
pm2 restart noutajalista-tracking
```

---

## DNS-asetukset (kun valmis)

Kun noutajalista.fi on valmis käyttöön:

```
noutajalista.fi        A    75.119.143.90
www.noutajalista.fi    A    75.119.143.90
```

### SSL-sertifikaatti

```bash
ssh dino@75.119.143.90

# Hae Let's Encrypt -sertifikaatti
sudo certbot certonly --webroot \
  -w /home/dino/sites/noutajalista \
  -d noutajalista.fi \
  -d www.noutajalista.fi

# Aktivoi Nginx-konfiguraatio
sudo ln -s /home/dino/sites/noutajalista/noutajalista.fi.nginx /etc/nginx/sites-enabled/noutajalista.fi
sudo nginx -t
sudo systemctl reload nginx
```

---

## Vianmääritys

### API ei vastaa
```bash
ssh dino@75.119.143.90
pm2 logs noutajalista-tracking
pm2 restart noutajalista-tracking
curl http://localhost:3001/api/stats
```

### Nginx-virheet
```bash
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

### Deployment epäonnistuu
- Tarkista GitHub Secrets (VM_SSH_KEY, VM_USER, VM_HOST)
- Tarkista SSH-yhteys: `ssh dino@75.119.143.90`
- Tarkista PM2 status: `pm2 list`
