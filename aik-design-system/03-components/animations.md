# Animationer

AIKs animationsstil er **stille og præcis** — frame.io-inspireret. Animation må aldrig stjæle fokus fra indholdet.

## FadeIn — sektioner ved scroll

Reference: `src/components/ui/FadeIn.tsx`.

Wrapper-komponent der bruger `IntersectionObserver` til at fade indhold ind når det kommer i viewport.

```tsx
<FadeIn delay={0}>
  <h2>Headline</h2>
</FadeIn>

<FadeIn delay={150}>
  <p>Sub-tekst der fader ind 150ms efter</p>
</FadeIn>

<FadeIn delay={300}>
  <Button>CTA</Button>
</FadeIn>
```

**Stagger:** brug `delay` på 100-200ms intervaller mellem elementer i samme sektion. Aldrig over 500ms — brugeren skal ikke vente.

**Transition:** 700ms ease-out, opacity 0→1, translateY 8px→0.

## popup-in — modaler og popups

Bruges af `PopupPhone` og lignende. CSS-keyframe i `globals.css`:

```css
@keyframes popup-in {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
```

Påfør med `className="animate-popup-in"`.

## overlay-in — backdrop fade

Til modal-backdrops:

```tsx
<div className="fixed inset-0 bg-black/50 animate-overlay-in" />
```

## marquee — kunde-logo bånd

Til social proof-bjælker hvor logoer scroller horisontalt:

```tsx
<div className="overflow-hidden">
  <div className="flex gap-12 animate-marquee">
    {/* dupliker logoerne to gange for sømløs loop */}
    {logos.concat(logos).map(...)}
  </div>
</div>
```

25 sekunder pr. cyklus, lineær. Pause på hover er ikke standard — lad det køre.

## Hover-effekter

| Element | Effekt |
|---|---|
| Knap | `hover:-translate-y-0.5 hover:shadow-lg` (200ms) |
| Link | `hover-underline` (animeret orange streg) |
| Kort | `hover:shadow-md hover:-translate-y-1` (200ms) |
| Logo i header | ingen — logoer skal være stabile |

## Aldrig

- ❌ Parallax-scrolling
- ❌ Blob-animations / floating shapes
- ❌ "Typewriter"-effekter på headlines
- ❌ Konfetti, sparkles, glitter
- ❌ Auto-playing video uden brugerens samtykke
- ❌ Hover-effekter der ændrer layout (push omkring elementer)

## Reduced motion

Respektér `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Tilføj denne regel i `globals.css` hvis ikke allerede til stede. Vores brand er "nede på jorden" — det inkluderer at respektere brugere der har slået animationer fra.
