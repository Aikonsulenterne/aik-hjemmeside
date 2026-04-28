# Strapi CMS — Setup & Workflow

AI Konsulenterne's CMS kører som sit eget Strapi 5-projekt i `/cms`-folderen.
Next.js-siden henter indhold via REST API.

---

## 📁 Struktur

```
Ny AIK hjemmeside/
├── cms/                          # Strapi 5 CMS (separat projekt)
│   ├── src/api/
│   │   ├── case/                 # Cases content type
│   │   ├── team-member/          # Team members content type
│   │   ├── blog-post/            # Blog posts content type
│   │   └── testimonial/          # Testimonials content type
│   ├── config/
│   ├── database/                 # SQLite db (dev)
│   └── .env                      # Strapi egne secrets
├── src/
│   ├── app/                      # Next.js App Router
│   └── lib/strapi.ts             # Strapi API client
└── .env.local                    # Next.js env (STRAPI_API_URL, token)
```

---

## 🚀 Første gang — onboarding

### 1. Start Strapi
```bash
cd cms
npm run develop
```

Admin-UI'en åbner på **http://localhost:1337/admin**

### 2. Opret admin-bruger
Første gang Strapi startes, beder den dig oprette en admin-bruger.
Brug din rigtige email og et stærkt password — du vil bruge det hver dag.

### 3. Generér API token (læseadgang til Next.js)

I admin-UI'en:

1. Gå til **Settings** → **API Tokens**
2. Klik **Create new API Token**
3. Udfyld:
   - **Name:** `Next.js frontend (read)`
   - **Description:** `Read-only token for Next.js`
   - **Token duration:** `Unlimited`
   - **Token type:** `Read-only`
4. Klik **Save** → kopier token (vises kun én gang!)

### 4. Sæt token i Next.js .env.local

```bash
# ai-konsulenterne.dk/.env.local
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=<pasted token fra forrige trin>
```

### 5. Enable public read permissions (alternativ til token)

Hvis du hellere vil have offentlig read uden token:

1. **Settings** → **Users & Permissions** → **Roles** → **Public**
2. For hver content type (Case, Team Member, Blog Post, Testimonial):
   - Check **find** og **findOne**
3. Klik **Save**

---

## 📝 Daglig workflow

### Start både Next.js og Strapi

**Terminal 1 — Next.js:**
```bash
cd "Ny AIK hjemmeside"
npm run dev
```

**Terminal 2 — Strapi:**
```bash
cd "Ny AIK hjemmeside/cms"
npm run develop
```

Begge skal køre. Next.js på `:3000`, Strapi på `:1337`.

### Opret indhold

1. Gå til **http://localhost:1337/admin**
2. I venstre sidebar: klik fx **Cases**
3. **Create new entry** → udfyld felterne → **Save** → **Publish**
4. Gå til Next.js (`:3000/cases`) — hard refresh → indhold vises

---

## 🗂 Content Types

### 📌 Case
Kundecases vist på `/cases` og i CaseHighlight-sektionen på forsiden.

| Felt | Type | Krævet | Beskrivelse |
|---|---|---|---|
| title | string | ✅ | Overskrift |
| slug | uid | ✅ | URL-segment (auto fra title) |
| customer | string | ✅ | Kundens navn |
| customerLogo | media | – | Logo (billede) |
| category | enum | ✅ | intern-ai / webshop / vidensbase / hr / andet |
| challenge | text | ✅ | Udfordringen |
| solution | richtext | ✅ | Løsningen (markdown) |
| result | richtext | ✅ | Resultater |
| featured | boolean | – | Vis som hero-case på forsiden |
| order | integer | – | Manuel sortering (lavere = højere) |
| image | media | – | Featured billede |
| seoTitle | string | – | Override SEO-title |
| seoDescription | text | – | Override SEO-description |

### 👥 Team Member
Holdet på `/om-os` og i Team-sektionen på forsiden.

| Felt | Type | Krævet | Beskrivelse |
|---|---|---|---|
| name | string | ✅ | Fulde navn |
| role | string | ✅ | Titel/rolle |
| bio | text | – | Kort bio |
| photo | media | – | Portrætfoto |
| linkedinUrl | string | – | LinkedIn URL |
| email | email | – | |
| order | integer | ✅ | Sortering (Alexander = 0) |
| isPrimary | boolean | – | Marker primær kontaktperson (hero) |

### 📰 Blog Post
Artikler på `/viden-om-ai`.

| Felt | Type | Krævet | Beskrivelse |
|---|---|---|---|
| title | string | ✅ | Overskrift |
| slug | uid | ✅ | URL (auto fra title) |
| excerpt | text | ✅ | Sammenfatning (max 300) |
| content | richtext | ✅ | Hovedindhold (markdown) |
| author | string | – | Forfatter (default: AI Konsulenterne) |
| category | enum | – | guide / case-story / tech-dive / business-case / compliance / news |
| featuredImage | media | – | Hero-billede |
| seoTitle | string | – | Override SEO-title (max 60) |
| seoDescription | text | – | Override meta desc (max 160) |
| keywords | json | – | Array, fx `["AI", "SMV", "GDPR"]` |
| readingTime | integer | – | Minutter |

### 💬 Testimonial
Kunde-citater brugt rundt omkring på siden.

| Felt | Type | Krævet | Beskrivelse |
|---|---|---|---|
| quote | text | ✅ | Selve citatet |
| authorName | string | ✅ | |
| authorTitle | string | ✅ | Jobtitel |
| company | string | ✅ | |
| companyLogo | media | – | |
| authorPhoto | media | – | |
| rating | integer (1-5) | – | |
| featured | boolean | – | Vis på forsiden |
| order | integer | – | Sortering |

---

## 🧠 Sådan henter du indhold i Next.js

Brug functions fra `@/lib/strapi`:

```ts
import { getCases, getTeamMembers, getBlogPosts, getTestimonials } from "@/lib/strapi";

// Forside
const featuredCases = await getCases({ featured: true, limit: 1 });
const team = await getTeamMembers();
const testimonials = await getTestimonials({ featured: true });

// Cases-side
const cases = await getCases();

// Enkelt case
import { getCaseBySlug } from "@/lib/strapi";
const caseData = await getCaseBySlug("lavazza-hr-agent");

// Blog
const posts = await getBlogPosts(10);
const post = await getBlogPostBySlug("hvordan-kommer-vi-i-gang-med-ai");
```

**Billeder:**
```ts
import { strapiImageUrl } from "@/lib/strapi";

const imageUrl = strapiImageUrl(caseData.image);
// Returns: "http://localhost:1337/uploads/lavazza_abc123.jpg"
```

---

## 🔄 Øjeblikkelig revalidering (webhook)

Default: Indhold caches i Next.js i 60 sekunder (ISR).
For **øjeblikkelig opdatering** når du publicerer i Strapi, opsæt en webhook:

### 1. Tjek at REVALIDATE_SECRET er sat i `.env.local`
```
REVALIDATE_SECRET=aik-revalidate-2026-local-dev-secret
```

(Skift til noget mere sikkert i produktion — fx `openssl rand -hex 32`)

### 2. Opret webhook i Strapi admin
**Settings → Webhooks → Create new webhook**

- **Name:** `Next.js revalidate`
- **URL (dev):** `http://localhost:3000/api/revalidate?secret=aik-revalidate-2026-local-dev-secret`
- **URL (prod):** `https://ai-konsulenterne.dk/api/revalidate?secret=<din-prod-secret>`
- **Headers:** ingen yderligere nødvendige
- **Events** — tjek disse:
  - `Entry > publish`
  - `Entry > unpublish`
  - `Entry > update`
  - `Entry > delete`

Klik **Save** → **Enable**.

### 3. Test webhook

Rediger en case i Strapi, klik **Save** + **Publish**.
Hard refresh `/cases` på Next.js — ændringen er live med det samme (i stedet for at vente 60 sek).

Test manuelt:
```bash
curl -X POST "http://localhost:3000/api/revalidate?secret=aik-revalidate-2026-local-dev-secret" \
  -H "Content-Type: application/json" \
  -d '{"model":"case","entry":{"slug":"lavazza-hr-agent"}}'
```

Svar skal være:
```json
{
  "revalidated": ["tag:cases", "tag:case-lavazza-hr-agent", "path:/cases", "path:/"],
  "model": "case"
}
```

### 4. Hvilke models triggerer hvad

| Strapi model | Tags revalideret | Paths revalideret |
|---|---|---|
| `case` | `cases`, `case-{slug}` | `/cases`, `/` |
| `team-member` | `team` | `/om-os`, `/` |
| `blog-post` | `blog`, `blog-{slug}` | `/viden-om-ai`, `/viden-om-ai/{slug}` |
| `testimonial` | `testimonials` | `/` |

---

## 🚢 Produktion

### Deploy Strapi
To gode muligheder:

1. **Strapi Cloud** (nemmest, 99 USD/mnd)
   - Zero-config, automatiske opdateringer
2. **Self-hosted på Hetzner** (ca. 30 kr/mnd)
   - Docker container + PostgreSQL
   - Kræver lidt DevOps

### Migrér fra SQLite til PostgreSQL
Dev SQLite er perfekt til lokalt arbejde. I produktion skal PostgreSQL bruges:

```bash
cd cms
npm install pg
# Opdater config/database.ts med PostgreSQL-credentials
# Eksportér data: npm run strapi export -- -f backup.tar.gz.enc
# Importér efter PG er sat op: npm run strapi import -- -f backup.tar.gz.enc
```

---

## 🐛 Fejlfinding

### Strapi vil ikke starte
```bash
cd cms
rm -rf .cache .tmp dist
npm run develop
```

### "Field not found" fejl i Next.js
Content type er ikke publiceret. I Strapi admin → content type → **Publish**.

### 403 Forbidden fra API
Enten mangler token i `.env.local` eller permissions er ikke sat til public.

### Typer ændret efter schema-redigering
```bash
cd cms
rm -rf dist
npm run develop
```

---

## 📚 Ressourcer

- [Strapi 5 docs](https://docs.strapi.io/)
- [Strapi v5 migration guide](https://docs.strapi.io/dev-docs/migration/v4-to-v5)
- [REST API reference](https://docs.strapi.io/dev-docs/api/rest)

---

*Opdateret: April 2026 — Strapi 5.42.1*
