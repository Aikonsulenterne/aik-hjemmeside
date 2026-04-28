# Deployment Guide — AI Konsulenterne

Deployment er i to dele:

1. **Next.js frontend → Vercel** (gratis tier er nok)
2. **Strapi CMS → Strapi Cloud eller Hetzner** (koster 30-99 USD/mnd)

De to dele kan deployes uafhængigt, men Next.js skal vide hvor Strapi kører for at hente indhold.

---

## 🎯 Beslutning — hvor skal Strapi hostes?

| Option | Pris | Setup-tid | Vedligeholdelse | Anbefalet til |
|---|---|---|---|---|
| **Strapi Cloud** | 99 USD/mnd | 10 min | Ingen (managed) | Hvis I vil væk fra DevOps |
| **Hetzner + Docker** | ~30 kr/mnd | 1-2 timer | Opdateringer selv | Hvis I er tekniske |
| **Midlertidig: cloudflared named tunnel** | Gratis | 20 min | Skal køre lokalt 24/7 | KUN til demo/test |

**Anbefaling:** Start med **Strapi Cloud** + **14-dages gratis trial** → hvis det virker, enten behold eller migrér til Hetzner når I føler jer klar.

---

## Del 1: Deploy Next.js til Vercel

### Forudsætninger

- GitHub-konto (siden skal pushes til et repo — kan være privat)
- Vercel-konto (gratis — opret via GitHub login på [vercel.com](https://vercel.com))

### Trin 1 — Push koden til GitHub

Hvis repo'et ikke allerede er på GitHub:

```bash
cd "Ny AIK hjemmeside"
git init  # hvis ikke allerede gjort
git add .
git commit -m "Initial commit"

# Opret repo på github.com → kopier URL
git remote add origin git@github.com:<bruger>/aik-hjemmeside.git
git branch -M main
git push -u origin main
```

**⚠️ Tjek inden push:** `.env.local` skal være i `.gitignore` (det er den allerede).

### Trin 2 — Import projektet til Vercel

1. Gå til **[vercel.com/new](https://vercel.com/new)**
2. Klik **"Import Git Repository"**
3. Vælg AIK-repo'et
4. **Root Directory:** `./` (default — lad være som det er)
5. **Framework Preset:** Next.js (auto-detecteres)
6. **Build Command:** `npm run build` (default)

### Trin 3 — Tilføj environment variables

Inden du klikker "Deploy" — klik **"Environment Variables"** og tilføj:

**Cal.com (virker allerede):**
```
NEXT_PUBLIC_CAL_USERNAME = alexanderaik/45-min.-ai-afklaring
NEXT_PUBLIC_CAL_ORIGIN = https://app.cal.eu
NEXT_PUBLIC_CAL_EMBED_URL = https://app.cal.eu/embed/embed.js
```

**Strapi (skal matche din prod-Strapi URL — se Del 2):**
```
STRAPI_API_URL = https://din-strapi-url.strapiapp.com  (eller Hetzner URL)
STRAPI_API_TOKEN = <generér ny token i prod-Strapi>
REVALIDATE_SECRET = <generér en sikker streng, fx med `openssl rand -hex 32`>
```

**Cookiebot (tilføj senere når I har kontoen):**
```
NEXT_PUBLIC_COOKIEBOT_ID = <tomt indtil I har ID>
```

**Google Analytics (tilføj senere):**
```
NEXT_PUBLIC_GA_ID = <tomt indtil I har GA4-property>
```

**ActiveCampaign (tilføj senere):**
```
ACTIVECAMPAIGN_API_URL = 
ACTIVECAMPAIGN_API_KEY = 
ACTIVECAMPAIGN_LIST_ID = 
ACTIVECAMPAIGN_TAG = ai-guide-download
```

Tomme variabler er OK — siden virker uden dem (fallback-adfærd i koden).

### Trin 4 — Deploy

Klik **"Deploy"** → tager 2-3 min.

Du får en Vercel preview URL: `aik-hjemmeside-xxxx.vercel.app`

### Trin 5 — Custom domæne

Når du er klar til launch:

1. Vercel Dashboard → Project → **Settings** → **Domains**
2. Tilføj `ai-konsulenterne.dk`
3. Opdater DNS hos Simply (jeres domæneudbyder):
   - Type: `A` → Værdi: `76.76.21.21` (Vercel's IP)
   - Eller CNAME for www: `cname.vercel-dns.com`
4. Vent 1-24 timer på DNS-propagation

### Trin 6 — Redeploys

- Hver `git push` til `main` trigger automatisk deploy
- Andre branches får preview URLs
- Manual redeploy: Vercel Dashboard → Deployments → Redeploy

---

## Del 2: Deploy Strapi til produktion

### Option A: Strapi Cloud (anbefalet)

1. Gå til **[cloud.strapi.io](https://cloud.strapi.io)**
2. Opret konto → Start 14-dages trial
3. **"Create project"** → forbind jeres GitHub-repo
4. **Base directory:** `cms/`
5. Strapi detekterer automatisk config
6. Tilføj env vars fra `cms/.env` (JWT_SECRET, API_TOKEN_SALT osv.)
7. Deploy → får URL som `https://dit-projekt.strapiapp.com`

**Migrér data fra lokal SQLite:**
```bash
# Eksportér lokalt
cd cms
npm run strapi export -- --file backup.tar.gz --no-encrypt

# Importér i prod via Strapi Cloud admin
# (eller SSH + CLI, afhængigt af plan)
```

### Option B: Hetzner + Docker

Kompleks — kræver:
- Hetzner Cloud VPS (~30 kr/mnd CX21)
- Docker + Docker Compose
- PostgreSQL container
- Nginx reverse proxy + Let's Encrypt SSL
- Systemd service for auto-start

Kontakt mig (Claude) hvis I vælger denne vej — jeg kan lave dockerfile + compose config.

### Option C: Midlertidig cloudflared named tunnel

Hvis I bare vil launche Next.js nu og migrere Strapi senere:

```bash
# På din Mac — Strapi skal køre lokalt
npx cloudflared tunnel --url http://localhost:1337
```

Output: `https://xxxx.trycloudflare.com` — brug denne som `STRAPI_API_URL` i Vercel.

⚠️ Denne tunnel er **midlertidig** — dør når din Mac går i dvale. KUN til testing.

---

## ✅ Efter deploy — tjek-liste

- [ ] `https://din-domæne.com` loader forside
- [ ] `/cases` viser cases fra prod-Strapi
- [ ] Cal.com popup virker (klik "Få jeres gratis AI-plan")
- [ ] Nyhedsbrev-form på footer returnerer success
- [ ] `/privatlivspolitik`, `/cookiepolitik`, `/handelsbetingelser` loader
- [ ] Mobil-visning ser ok ud (test på telefon)
- [ ] Cookie-banner vises (når Cookiebot-ID er sat)
- [ ] GA4 tracker events (når GA-ID er sat)
- [ ] Webhook kører fra Strapi → `/api/revalidate?secret=...`

---

## 🔐 Sikkerhed — checklist før launch

- [ ] Alle API tokens er **read-only** hvor det er muligt
- [ ] `REVALIDATE_SECRET` er mindst 32 tegn random
- [ ] `.env.local` er i `.gitignore` (tjek: `git check-ignore .env.local`)
- [ ] Strapi admin har **stærk adgangskode** + 2FA enabled
- [ ] Strapi API har **ikke** write-permissions sat til public role

---

## 🚨 Rollback

Hvis noget går galt efter deploy:

**Vercel:**
- Dashboard → Deployments → find forrige good deployment → **"Promote to Production"**

**Strapi Cloud:**
- Dashboard → History → Revert til forrige version

---

*Opdateret: April 2026*
