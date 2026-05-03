import { mergeConfig, type UserConfig } from "vite";

/**
 * Custom Vite config for Strapi admin panel.
 *
 * Vigtigt: vi sætter css.postcss til en tom inline-config for at forhindre
 * Vite i at søge filsystemet efter postcss.config.mjs. Uden dette finder
 * Vite Next.js's postcss.config i parent-mappen, som refererer til
 * @tailwindcss/postcss og crasher Strapi-builden.
 */
export default (config: UserConfig) => {
  return mergeConfig(config, {
    css: {
      postcss: {
        plugins: [],
      },
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};
