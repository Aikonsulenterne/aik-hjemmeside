# AIK Design System

Source of truth for AI Konsulenternes brand-, design- og copy-mønstre.

## Hvad er det?

En statisk reference — Markdown, CSS-tokens og SVG-assets — som både mennesker og Claude kan slå op i når der bygges noget for AIK. Det er **ikke** et runtime npm-bibliotek, ikke Storybook, og ikke en Figma-fil. Det er kode-først dokumentation, der lever sammen med det produkt den beskriver.

## Hurtig start

- **Skal du bygge noget?** Læs [`CLAUDE.md`](CLAUDE.md) først.
- **Skal du sætte farver/font op i et nyt projekt?** Kopiér [`tokens/tailwind-theme.css`](tokens/tailwind-theme.css) ind i din `globals.css`.
- **Skal du bruge logoet?** Hent fra [`assets/logo/`](assets/logo/) og læs [`02-visual/logo.md`](02-visual/logo.md).
- **Skal du skrive copy?** Læs [`01-brand/voice-and-tone.md`](01-brand/voice-and-tone.md) og [`04-copy-patterns/`](04-copy-patterns/).

## Folder map

```
aik-design-system/
├── CLAUDE.md                # Master brief — start her
├── 01-brand/                # Identitet, målgruppe, slogan, stemme
├── 02-visual/               # Farver, typografi, logo, layout
├── 03-components/           # Komponent-mønstre (buttons, forms, hero, CTA…)
├── 04-copy-patterns/        # Konverteringsramme, headlines, dansk-konventioner
├── tokens/                  # CSS / Tailwind / JSON design tokens
├── assets/                  # Logo-SVG'er + font-noter
└── snippets/                # Page templates og setup-noter
```

## Versionering

Brand guide: **v1.0 (2024)**.
Dette repo følger AIKs kode-repo og opdateres når brand- eller designregler ændres.

## Kilde

Den oprindelige brand guide PDF (Version 1.0, 2024) er udgangspunktet for alt indhold under `01-brand/` og `02-visual/`. Hvor brand guiden er kort, har vi tilføjet konkrete eksempler og kode-mønstre baseret på det eksisterende AIK-site.
