# Spacing & Layout

Brand guiden specificerer ikke spacing-systemet — denne fil dokumenterer det udtryk vi bruger på AIK-sitet, inspireret af **frame.io's whitespace-drevne minimalisme**.

## Principper

1. **Whitespace er en feature, ikke en mangel.** Tomt rum styrker brandet. Hvis du fristes til at fylde det op, så lad være.
2. **Store typografi + meget luft.** Frame.io-stil: hero-overskrifter må gerne fylde halvdelen af skærmen.
3. **Én ting ad gangen.** Hver sektion skal have ét primært budskab og max én primær CTA.
4. **Ingen støj.** Ingen unødvendige ikoner, dekorative streger, gradients eller mønstre. Hvis det ikke tjener et formål, fjern det.

## Container-bredder

Tailwind-konventioner brugt på sitet:

| Bredde | Klasse | Brug |
|---|---|---|
| Smal | `max-w-3xl` (768px) | Brødtekst, blog-artikler |
| Medium | `max-w-5xl` (1024px) | Centreret content i hero, FAQ |
| Bred | `max-w-7xl` (1280px) | Standard sektion-container |
| Fuld | `max-w-none` | Hero med fuld baggrund |

Default sektion-container:

```tsx
<section className="py-20 md:py-32">
  <div className="mx-auto max-w-7xl px-6 md:px-8">
    {/* indhold */}
  </div>
</section>
```

## Vertical rhythm

| Spacing | Klasse | Brug |
|---|---|---|
| Sektion (mobil → desktop) | `py-20 md:py-32` | Standard mellem sektioner |
| Sektion (kompakt) | `py-12 md:py-20` | Tæt-på-hinanden sektioner |
| Hero | `pt-32 md:pt-48 pb-20 md:pb-32` | Ekstra top-padding under fixed header |
| Element-mellemrum | `mb-6` (24px) eller `mb-8` (32px) | Mellem h2 og brødtekst |

## Grid

- 12-kolonne grids er sjældent nødvendige. Brug `flex` og `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` til kort.
- `gap-6 md:gap-8` til kort-grids.
- Brug **ikke** Bootstrap-stil 12-col layouts. Det er ikke det udtryk vi går efter.

## Animation

Holdt minimal — frame.io-stil er stille og præcis:

- **FadeIn** på sektioner ved scroll (Intersection Observer, 700ms transition, 8px translate).
- **Hover på knap:** `translate-y-[-2px]` + `shadow-lg`.
- **Hover på link:** animated underline (`hover-underline` utility).
- Ingen parallax. Ingen "wow"-animationer der trækker fokus.

Custom keyframes fra `globals.css`:
- `popup-in` — modaler/popups (0.3s, scale + translate)
- `overlay-in` — backdrop fade (0.2s)
- `marquee` — kunde-logo-bånd (25s linear infinite)

## Ikoner

- Sparsom brug. AIK er ikke et "ikon-tungt" brand.
- Når ikoner bruges: `lucide-react` eller simple SVG'er, **outline-stil**, samme farve som omgivende tekst (eller `text-primary` for accent).
- Aldrig: emoji 🤖, robot-ikoner, AI-clichéer (hjerne-ikon, gear-med-AI-tekst, robot-hånd).

## Borders & shadows

- Borders: `border border-gray-200` for lette dividers.
- Shadows: brug sparsomt. `shadow-sm` til kort der hover'es. `shadow-lg` til popups og hovered CTAs. Aldrig `shadow-2xl` — for tungt.
- Border-radius: `rounded-2xl` til kort, `rounded-full` til knapper, `rounded` (4px) til inputs.
