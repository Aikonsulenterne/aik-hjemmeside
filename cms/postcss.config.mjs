// Tom PostCSS-config for Strapi.
// Forhindrer at Strapis admin-build (Vite/PostCSS) finder Next.js's
// postcss.config.mjs i parent-mappen, som har @tailwindcss/postcss
// (ikke en del af Strapi's dependencies).
//
// Tom plugins-array betyder: ingen PostCSS-transformationer for Strapi —
// hvilket er korrekt, da Strapi har sin egen styling.
export default {
  plugins: [],
};
