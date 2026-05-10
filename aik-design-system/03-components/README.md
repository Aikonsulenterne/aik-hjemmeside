# Komponent-mønstre

Kode-mønstre udtrukket fra det eksisterende AIK-site, klar til genbrug eller reference. Alle eksempler bruger Tailwind v4 og Next.js App Router.

| Mønster | Fil |
|---|---|
| Knapper (primary, secondary, link, Cal-booking) | [`buttons.md`](buttons.md) |
| Forms (newsletter, lead magnet, kontakt) | [`forms.md`](forms.md) |
| Hero-sektioner | [`hero-sections.md`](hero-sections.md) |
| CTA-sektioner (FinalCTA, RiskReversal) | [`cta-sections.md`](cta-sections.md) |
| Animationer (FadeIn, popup-in, marquee) | [`animations.md`](animations.md) |

## Vigtigt

Disse er **mønstre**, ikke et runtime-bibliotek. Hvis du skal bruge en knap i AIK-sitet, importér fra `src/components/ui/Button.tsx`. Brug filerne her som reference når du:

- Bygger noget nyt og vil følge AIKs konventioner
- Bootstraper et nyt AIK-projekt
- Forklarer mønstret til en ny udvikler eller designer
