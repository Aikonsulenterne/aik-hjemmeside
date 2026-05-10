// PostCSS-config for Next.js + Tailwind v4.
//
// Vigtigt: Strapi (i cms/-mappen) bruger Vite til at bygge sit admin-panel.
// Vite walker UP og finder denne config — uanset om vi har en lokal i cms/.
// Strapi Cloud installerer ikke root-deps, så @tailwindcss/postcss findes
// ikke i /opt/app/node_modules, og build crasher.
//
// Løsning: Tjek om modulet kan resolve fra denne config's location.
// - Vercel/Next.js build: modulet ER installeret → plugin loaded
// - Strapi Cloud build: modulet er IKKE installeret i root → plugin skippet
import { createRequire } from "module";

const require = createRequire(import.meta.url);

let plugins = {};
try {
  require.resolve("@tailwindcss/postcss");
  plugins = { "@tailwindcss/postcss": {} };
} catch {
  // Modulet kan ikke resolves fra dette location.
  // Sker når Strapi's Vite walker UP og loader config'en uden at
  // root-deps er installeret. Returner tom config så build'et fortsætter.
}

const config = { plugins };

export default config;
