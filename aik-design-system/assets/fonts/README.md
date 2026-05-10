# Fonts — Raleway

AIK bruger **Raleway** (Google Fonts).

## I Next.js (anbefalet)

Brug `next/font/google` — hostes lokalt af Next.js, ingen ekstern request.

```ts
// app/layout.tsx
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-raleway",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={raleway.variable}>
      <body>{children}</body>
    </html>
  );
}
```

I `globals.css`:

```css
@theme inline {
  --font-sans: var(--font-raleway);
}
```

## Uden Next.js (statisk HTML)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
  href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
  rel="stylesheet"
>
```

## Vægte vi bruger

- **400** — Regular (brødtekst)
- **600** — SemiBold (underoverskrifter, knapper)
- **700** — Bold (overskrifter)

Ingen andre vægte. Ingen italic.

## Self-hosting (offline / privacy)

Hvis projektet ikke må kalde Google Fonts (GDPR-strenge cases), download fra https://fonts.google.com/specimen/Raleway og host `.woff2`-filer lokalt:

```css
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/raleway-400.woff2") format("woff2");
}
/* gentag for 600 og 700 */
```

På AIK's site bruger vi `next/font/google` — Next.js downloader fontene ved build og serverer dem fra eget domæne, så ingen Google-request fra brugerens browser.
