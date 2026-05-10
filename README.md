# AI Konsulenterne — Monorepo

Indeholder hjemmesiden (Next.js) og CMS'et (Strapi) som **adskilte** projekter for at undgå PostCSS/dependency-konflikter.

## Struktur

```
ai-konsulenterne/
├── web/          ← Next.js hjemmeside (deployes til Vercel)
├── cms/          ← Strapi CMS (deployes til Strapi Cloud)
├── aik-design-system/  ← AIK brand guidelines
└── *.md          ← Setup guides og dokumentation
```

## Lokal udvikling

### Hjemmeside (Next.js)
```bash
cd web
npm install
npm run dev          # → http://localhost:3000
```

### CMS (Strapi)
```bash
cd cms
npm install
npm run develop      # → http://localhost:1337/admin
```

Begge skal køre samtidigt i dev. Hjemmesiden henter indhold fra Strapi.

## Deployment

- **Vercel:** Root directory = `web/` — auto-deploy fra git push
- **Strapi Cloud:** Base directory = `cms/` — auto-deploy fra git push

Se `DEPLOY.md` for fuld guide.

## Dokumentation

- `CLAUDE.md` — Kodningsguidelines og brand-info
- `DEPLOY.md` — Hostingdetaljer (Vercel + Strapi Cloud)
- `STRAPI-SETUP.md` — Strapi content types og workflow
- `COOKIEBOT-SETUP.md` — Cookie consent setup
- `SEO-STRATEGI.md` — Keyword-strategi og content-kalender
