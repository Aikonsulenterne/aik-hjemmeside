# Hero-sektioner

Reference: `src/components/sections/Hero.tsx`.

## Anatomi

```
┌──────────────────────────────────────────────┐
│                                              │
│  [hero-glow orange orb i baggrunden]         │
│                                              │
│  EYEBROW (small caps, gray-500)              │
│                                              │
│  H1 — STOR, BOLD, ÉN LINJE PR. TANKE         │
│  evt. orange highlight på et nøgleord        │
│                                              │
│  Sub-headline — 1-2 sætninger, gray-700      │
│                                              │
│  [PRIMARY CTA]   [SECONDARY CTA]             │
│                                              │
│  Trust-strip (logos, små, sløvet)            │
│                                              │
└──────────────────────────────────────────────┘
```

## Struktur

```tsx
<section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden">
  <div className="hero-glow" />

  <div className="relative mx-auto max-w-5xl px-6 md:px-8 text-center">
    <p className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-6">
      AI-løsninger til danske SMV'er
    </p>

    <h1 className="tracking-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
      Spar én dag om ugen <br />
      med <span className="text-primary">skræddersyet AI</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
      Vi bygger AI-agenter, der gør jeres processer hurtigere — uden at I skal røre en kodelinje.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button cal size="lg">Book gratis afklaring</Button>
      <Button href="/cases" variant="secondary" size="lg">Se cases</Button>
    </div>
  </div>
</section>
```

## Regler

1. **Én primær CTA.** Hvis du føler trang til to ligeværdige CTAs — gør den ene secondary.
2. **Headline må fylde.** Frame.io-stil: `text-7xl` på desktop er ikke for stort.
3. **Højest ét orange ord** i headline (visuel ankerpunkt). Ikke hele headline i orange.
4. **Sub-headline skal kvantificere.** Helst med tal, tid eller risiko-fjernelse.
5. **`hero-glow` er valgfri** — kun på forsiden eller hovedsider, ikke på alle sider.
6. **Trust-strip** under hero med kunde-logoer (gråtone, fadet) er stærk social proof tidligt.

## Hero-typer

- **Konverterings-hero (forside):** alt ovenstående.
- **Side-hero (cases, om-os):** mindre `pt-24 md:pt-32`, ingen `hero-glow`, evt. ingen sub-CTA.
- **Landingsside (lead magnet):** dropper secondary CTA, fokus på ét formular-felt.

## Anti-mønstre

- ❌ Stock-foto af en robot eller "futuristisk" 3D-render.
- ❌ Animerede partikler eller "AI matrix"-baggrund.
- ❌ Tre CTAs ved siden af hinanden.
- ❌ Headline i to forskellige farver ("Spar **tid** og **penge**" — vælg én).
- ❌ "Velkommen til AIK" — taler ikke til værdi for kunden.
