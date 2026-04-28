# Cookiebot — 5 minutters opsætning

Cookiebot er vores consent management platform (CMP). Den håndterer cookie-samtykke,
blokerer tracking-scripts før samtykke, og sikrer at vi overholder GDPR + EU's
"ePrivacy"-direktiv.

## 1. Opret konto (gratis for små sites)

1. Gå til **https://www.cookiebot.com/**
2. Klik **"Try for free"** eller **"Start free trial"**
3. Opret konto — vælg **Gratis plan** (op til 50 sider, nok til AIK)
4. Tilføj `ai-konsulenterne.dk` som domæne (eller dit test-domæne indtil launch)

## 2. Hent dit Domain Group ID (CBID)

I Cookiebot Manager:
1. Venstre menu → **Settings** → **Domain groups**
2. Kopier **Domain Group ID** (lang UUID-streng)
3. Det ligner: `abc12345-1234-1234-1234-abcdef123456`

## 3. Sæt ID i `.env.local`

```
NEXT_PUBLIC_COOKIEBOT_ID=abc12345-1234-1234-1234-abcdef123456
```

Rebuild: `npm run build && npm run start`

## 4. Hvad der sker automatisk

Efter ID er sat:

✅ **Consent-banner** vises automatisk første gang en bruger besøger siden
✅ **GA4 blokeres** indtil brugeren accepterer "Statistik"
✅ **Cal.com** respekterer consent (marketing-kategori)
✅ **Cookie-declaration** opdateres på `/cookiepolitik` med live liste
✅ **"Administrer cookies"-link** i footer virker

## 5. Consent-kategorier

Cookiebot deler cookies op i 4 kategorier:

| Kategori | Default | Bruges af |
|---|---|---|
| **Necessary** | Altid on | Session, CSRF, consent-gemning |
| **Preferences** | Off | — |
| **Statistics** | Off | Google Analytics |
| **Marketing** | Off | Cal.com booking (anset som marketing) |

Brugeren kan til- og fravælge hver kategori.

## 6. Google Consent Mode v2

Vi bruger **Google Consent Mode v2** som er påkrævet siden marts 2024 for EU-trafik.

Det betyder:
- GA4 sender **pinglede events** selv uden consent (uden personligt data)
- Modellering udfylder huller baseret på brugere der **har** accepteret
- I mister ikke al analytics bare fordi nogle afviser cookies

Sættes op automatisk i `src/components/Analytics.tsx` — ingen ekstra konfiguration nødvendig.

## 7. Test det

Efter launch eller i dev:

1. **Åbn siden i inkognito-mode** (for at få frisk consent-state)
2. Banner skal vises nederst/bund med "Accepter" / "Afvis" / "Tilpas"
3. Åbn DevTools → Network → filtrer "google-analytics" eller "gtag"
4. **Før accept:** Ingen requests til GA4 (eller kun Consent Mode-pings)
5. **Efter accept:** Fuld GA4-sporing aktiveres

## 8. Banner-udseende

Cookiebot-banneret kan styles i **Cookiebot Manager** under:
- **Settings** → **Popup** → **Design**

Hold det simpelt: hvid baggrund, AIK orange som accent-farve.
Anbefalet tekst:

> **Cookies på aikonsulenterne.dk**
>
> Vi bruger cookies til statistik og til at forbedre din oplevelse. Nødvendige cookies er altid on. Du kan til- eller fravælge resten.
>
> [Kun nødvendige] [Tilpas] [Accepter alle]

## 9. Fejlfinding

### Banneret vises ikke
- Tjek `NEXT_PUBLIC_COOKIEBOT_ID` er sat korrekt i `.env.local`
- Rebuild: dev-server skal genstartes efter ændringer i env
- Tjek browser-konsollen for script-fejl

### GA4 kører selv uden consent
- Tjek at `data-cookieconsent="statistics"` er på script-taggen
- Cookiebot `data-blockingmode="auto"` skal være sat
- Clear browser-cookies og test igen

### Cookie-erklæringen på /cookiepolitik er tom
- Gå til Cookiebot Manager → **Domains** → klik **"Scan now"**
- Det tager 5-30 min før scanning er færdig
- Refresh `/cookiepolitik`

---

*Opdateret: April 2026*
