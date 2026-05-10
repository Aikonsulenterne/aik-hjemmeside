# Typografi

> Kilde: AIK Brand Guideline v1.0 (2024), afsnit D.

Vi bruger skrifttypen **Raleway** til at kommunikere vores brand. Den er enkel og ligetil — ligesom vores ydelser er for vores kunder.

## Vægte

| Vægt | Værdi | Brug |
|---|---|---|
| **Bold** | 700 | Overskrifter (H1, H2) |
| **SemiBold** | 600 | Underoverskrifter (H3, H4), knapper |
| **Regular** | 400 | Brødtekst, labels |

## Hierarki (anbefalet skala)

Tailwind v4 default-størrelser fungerer fint. Disse er typiske valg på AIK-sitet:

| Element | Tailwind | px | Vægt | `tracking-heading` |
|---|---|---|---|---|
| Hero H1 | `text-5xl md:text-7xl` | 48–72 | Bold | ✅ |
| Section H2 | `text-3xl md:text-5xl` | 30–48 | Bold | ✅ |
| Sub H3 | `text-xl md:text-2xl` | 20–24 | SemiBold | – |
| H4 / kort-titel | `text-lg` | 18 | SemiBold | – |
| Brødtekst | `text-base` eller `text-lg` | 16–18 | Regular | – |
| Small / label | `text-sm` | 14 | Regular eller SemiBold | – |

`tracking-heading` er en custom utility (`letter-spacing: -0.02em`) som strammer store overskrifter — brug den til H1/H2.

## Letter-spacing & line-height

- **Overskrifter:** `tracking-tight` eller `tracking-heading`, line-height `1.1` (`leading-tight`).
- **Brødtekst:** default tracking, line-height `1.5–1.7` (`leading-relaxed`) for læsbarhed.
- **Small caps / labels:** `tracking-wider uppercase text-xs` for små brand-detaljer (fx "Juridisk", "Case study").

## Loading

I Next.js indlæses Raleway via `next/font/google` med vægte 400/600/700:

```ts
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-raleway",
});
```

## Aldrig

- ❌ Brug ikke andre fonte (Inter, Helvetica, system-ui) på AIK's branded overflader.
- ❌ Brug ikke italic medmindre det er bevidst (citater, `em`-tags). Raleway italic er ikke en del af brandet.
- ❌ Brug ikke `font-weight: 500`. Vi har tre vægte: 400, 600, 700.
- ❌ Brug ikke ALL CAPS undtagen små labels (≤12px) — det føles aggressivt og bryder det "nede på jorden"-udtryk.
