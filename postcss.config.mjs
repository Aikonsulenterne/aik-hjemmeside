// PostCSS-config for Next.js + Tailwind v4.
//
// Vigtigt: Strapi (i cms/-mappen) bruger Vite til at bygge sit admin-panel,
// og Vite walker UP i mappestrukturen og finder denne config — selv når
// vi har en lokal config i cms/. Strapi har ikke @tailwindcss/postcss i
// sine dependencies, så build crasher.
//
// Løsning: Returnér tom plugins-config når cwd er cms/ (Strapi context),
// og fuld Tailwind-config når cwd er root (Next.js context).
const isStrapiContext =
  process.cwd().endsWith("/cms") || process.cwd().endsWith("\\cms");

const config = {
  plugins: isStrapiContext
    ? {}
    : {
        "@tailwindcss/postcss": {},
      },
};

export default config;
