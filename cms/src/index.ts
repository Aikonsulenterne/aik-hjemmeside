import type { Core } from "@strapi/strapi";
import { seedIfEmpty } from "./seed";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   * Kører seedIfEmpty som automatisk indsætter start-indhold
   * hvis Cases-collection er tom.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      await seedIfEmpty(strapi);
    } catch (err) {
      strapi.log.error("[seed] Seed fejlede:", err);
    }
  },
};
