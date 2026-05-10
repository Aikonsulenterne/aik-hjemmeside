# Knapper

Reference: `src/components/ui/Button.tsx`.

## Variants

| Variant | Brug |
|---|---|
| `primary` | Hoved-CTA (én pr. sektion). Orange baggrund, hvid tekst. |
| `secondary` | Sekundær handling. Sort outline, hvid baggrund. |

## Størrelser

| Size | px-padding | Brug |
|---|---|---|
| `sm` | `px-5 py-2` | Inline-knapper, footers, kompakte UI |
| `default` | `px-6 py-3` | Standard CTAs i sektioner |
| `lg` | `px-7 py-3` (mobil) → `px-8 py-3.5` (desktop) | Hero-CTA |

## Form

- **Altid `rounded-full`** (pill-shape) — brand-konvention.
- Font: `font-semibold`, `text-sm` (eller `text-base` på `lg` desktop).
- Hover: `-translate-y-0.5` + `shadow-lg` + farve-skift.

## Tailwind-klasser

```tsx
// Primary
<button className="inline-flex items-center justify-center font-semibold rounded-full
                   bg-primary text-white hover:bg-primary-dark
                   transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg
                   px-6 py-3 text-sm">
  Book et møde
</button>

// Secondary
<button className="inline-flex items-center justify-center font-semibold rounded-full
                   border-2 border-gray-900 text-gray-900
                   hover:bg-gray-900 hover:text-white
                   transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg
                   px-6 py-3 text-sm">
  Læs mere
</button>
```

## Modes

Den eksisterende `Button`-komponent understøtter tre modes:

1. **Plain button** — `<Button>Klik</Button>` → `<button>`
2. **Link** — `<Button href="/cases">Se cases</Button>` → `next/link`
3. **Cal.com booking** — `<Button cal>Book et møde</Button>` → åbner Cal-modal i popup

`cal`-mode kræver `NEXT_PUBLIC_CAL_USERNAME` env var. Falder gracefully tilbage til en almindelig knap hvis env mangler.

## Copy-konventioner

- **Primary CTA:** *"Book et møde"*, *"Book en gratis afklaring"*, *"Book 45 min med Alexander"*
- **Secondary:** *"Læs mere"*, *"Se cases"*, *"Hent guiden"*
- Aldrig: *"Click here"*, *"Submit"*, *"Send"* uden kontekst, *"Learn more"* (engelsk)

## Antal CTAs pr. sektion

**Max én primary CTA pr. sektion.** Hvis du har flere CTAs, gør den ene `primary` og resten `secondary`. Visuel støj og to ligeværdige CTAs nedsætter konvertering.
