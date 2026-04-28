/**
 * One-time seed af AIK CMS data.
 *
 * Køres automatisk ved bootstrap hvis Cases-collection er tom.
 * Idempotent — tjekker altid om data allerede er der.
 */

import type { Core } from "@strapi/strapi";

async function publishAllDrafts(strapi: Core.Strapi, uid: string): Promise<number> {
  const docs = await strapi.documents(uid as "api::case.case").findMany({
    status: "draft",
  });
  let published = 0;
  for (const doc of docs) {
    try {
      await strapi.documents(uid as "api::case.case").publish({
        documentId: doc.documentId,
      });
      published++;
    } catch (err) {
      strapi.log.warn(`[seed] Kunne ikke publicere ${uid}/${doc.documentId}:`, err);
    }
  }
  return published;
}

export async function seedIfEmpty(strapi: Core.Strapi): Promise<void> {
  const existingCases = await strapi
    .documents("api::case.case")
    .count({ status: "published" });

  if (existingCases > 0) {
    strapi.log.info(
      `[seed] ${existingCases} publicerede cases findes — springer seed over`,
    );
    return;
  }

  // Hvis der er drafts (fra tidligere seed-kørsel), publicér dem i stedet for at duplikere
  const existingDrafts = await strapi
    .documents("api::case.case")
    .count({ status: "draft" });

  if (existingDrafts > 0) {
    strapi.log.info(
      `[seed] ${existingDrafts} cases findes som drafts — publicerer dem nu`,
    );
    const c = await publishAllDrafts(strapi, "api::case.case");
    const t = await publishAllDrafts(strapi, "api::team-member.team-member");
    const ts = await publishAllDrafts(strapi, "api::testimonial.testimonial");
    strapi.log.info(
      `[seed] ✅ Publicerede: ${c} cases, ${t} team members, ${ts} testimonials`,
    );
    return;
  }

  strapi.log.info("[seed] Starter seed af AIK data...");

  // ============ CASES ============
  await strapi.documents("api::case.case").create({
    status: "published",
    data: {
      title: "Datasikker HR-agent der svarer så medarbejderne ikke skal",
      slug: "lavazza-hr-agent",
      customer: "Lavazza",
      category: "hr",
      challenge:
        "Lavazzas HR-afdeling brugte uforholdsmæssigt meget tid på at besvare de samme spørgsmål fra medarbejdere — ferieregler, lønforhold, pension, interne politikker. Samtidig var GDPR-compliance og datasikkerhed et ufravigeligt krav.",
      solution:
        "Vi byggede en datasikker AI-agent trænet på Lavazzas interne HR-dokumenter, personalehåndbog og politikker. Agenten kører i et lukket miljø der garanterer at data aldrig forlader virksomhedens kontrol — og aldrig bruges til at træne offentlige modeller.",
      result:
        "HR-afdelingen frigjort fra rutineopgaver. Medarbejderne får svar på sekunder i stedet for dage. Fuld GDPR-compliance og fuld kontrol over data. Adoption er høj, fordi agenten taler Lavazzas eget sprog.",
      featured: true,
      order: 0,
      seoTitle: "Datasikker HR-AI hos Lavazza | AI Case Study",
      seoDescription:
        "Sådan byggede vi en GDPR-compliant HR-agent til Lavazza der frigjorde tid i hele HR-afdelingen.",
    },
  });

  await strapi.documents("api::case.case").create({
    status: "published",
    data: {
      title: "AI-automatiseret ordrehåndtering og kundeservice",
      slug: "wunderwear-automation",
      customer: "Wunderwear",
      category: "webshop",
      challenge:
        "Wunderwear oplevede vækst i bestillinger og kundeservice-henvendelser, men team-størrelsen skulle ikke stige lineært. Ordrehåndtering og repetitive kundeservice-spørgsmål tog stadig mere tid.",
      solution:
        "AI-løsning der automatiserer ordrebehandling på tværs af Shopify og internt CRM, plus en AI-kundeservice-agent der besvarer 80% af gentagne spørgsmål om levering, returnering og produktdetaljer.",
      result:
        "Markant reduktion i manuel ordrehåndtering. Kundeservice kan fokusere på komplekse cases i stedet for standard-henvendelser. 24/7 tilgængelighed.",
      featured: false,
      order: 1,
    },
  });

  await strapi.documents("api::case.case").create({
    status: "published",
    data: {
      title: "Strategisk AI-rådgivning og implementering",
      slug: "indkom-ai-partnerskab",
      customer: "INDKOM",
      category: "intern-ai",
      challenge:
        "INDKOM ønskede at forstå hvor AI kunne skabe værdi i deres B2B-processer, men manglede intern ekspertise til at vurdere mulighederne og implementere løsninger.",
      solution:
        "Vi fungerede som deres eksterne AI-afdeling: kortlagde processer, identificerede 3 konkrete use-cases og byggede løsningerne ind i deres eksisterende systemer.",
      result:
        "Klar AI-strategi og implementerede løsninger der sparer tid i hverdagen. Medarbejderne trænet så de bruger AI aktivt i stedet for at se det som noget fjernt.",
      featured: false,
      order: 2,
    },
  });

  await strapi.documents("api::case.case").create({
    status: "published",
    data: {
      title: "AI-agent på tværs af CRM, Shopify og interne systemer",
      slug: "jm-band-ai-agent",
      customer: "J.M Band",
      category: "intern-ai",
      challenge:
        "J.M Band havde data spredt på tværs af CRM, Shopify og diverse interne systemer. Det var svært at få overblik og træffe beslutninger hurtigt.",
      solution:
        "Skræddersyet AI-agent der henter og analyserer data på tværs af alle systemer, så medarbejderne får indsigt og svar uden at skulle hoppe mellem platforme.",
      result:
        "Hurtigere beslutninger. Data fra alle systemer tilgængeligt via samme grænseflade. Reduceret friktion i hverdagen.",
      featured: false,
      order: 3,
    },
  });

  // ============ TEAM ============
  await strapi.documents("api::team-member.team-member").create({
    status: "published",
    data: {
      name: "Alexander",
      role: "Grundlægger & AI-konsulent",
      bio: "Alexander er grundlægger af AI Konsulenterne og den person du kommer til at snakke med på første møde. Han har hjulpet en lang række danske SMV'er med at finde de rette AI-muligheder og komme i gang.",
      order: 0,
      isPrimary: true,
    },
  });

  for (let i = 2; i <= 4; i++) {
    await strapi.documents("api::team-member.team-member").create({
      status: "published",
      data: {
        name: "Navn kommer",
        role: i === 2 ? "AI-udvikler" : i === 3 ? "AI-konsulent" : "Udvikler",
        order: i - 1,
        isPrimary: false,
        },
    });
  }

  // ============ TESTIMONIALS ============
  await strapi.documents("api::testimonial.testimonial").create({
    status: "published",
    data: {
      quote:
        "AI Konsulenterne har givet os en datasikker HR-agent der aflaster afdelingen i hverdagen. De forstod vores krav til GDPR fra start.",
      authorName: "HR-afdeling",
      authorTitle: "HR",
      company: "Lavazza",
      rating: 5,
      featured: true,
      order: 0,
    },
  });

  await strapi.documents("api::testimonial.testimonial").create({
    status: "published",
    data: {
      quote:
        "Vi anede ikke hvor vi skulle starte med AI. Alexander og holdet hjalp os med at identificere de rigtige processer og komme konkret videre.",
      authorName: "Ledelse",
      authorTitle: "Direktion",
      company: "INDKOM",
      rating: 5,
      featured: true,
      order: 1,
    },
  });

  await strapi.documents("api::testimonial.testimonial").create({
    status: "published",
    data: {
      quote:
        "Vores kundeservice-team har fået tiden tilbage til at fokusere på de komplekse henvendelser — standard-spørgsmålene klares af AI'en.",
      authorName: "Kundeservice-chef",
      authorTitle: "Kundeservice",
      company: "Wunderwear",
      rating: 5,
      featured: false,
      order: 2,
    },
  });

  strapi.log.info("[seed] ✅ Seed færdig: 4 cases, 4 team members, 3 testimonials");
}
