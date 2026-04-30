// Tom PostCSS-config for Strapi.
// Forhindrer at Strapis admin-build (Vite/PostCSS) finder Next.js's
// postcss.config.mjs i parent-mappen — som har @tailwindcss/postcss
// som ikke er en del af Strapis dependencies.
module.exports = {};
