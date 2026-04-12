const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || "";

type StrapiResponse<T> = {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type StrapiEntry<T> = {
  id: number;
  attributes: T;
};

async function fetchStrapi<T>(
  path: string,
  params?: Record<string, string>
): Promise<StrapiResponse<T>> {
  const url = new URL(`/api${path}`, STRAPI_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// Content types matching CLAUDE.md

export type CaseStudy = {
  titel: string;
  kunde: string;
  kundeLogo?: { url: string };
  udfordring: string;
  loesning: string;
  resultater: string;
  kategori: "Intern AI" | "Webshop" | "Vidensbase";
};

export type Testimonial = {
  citat: string;
  navn: string;
  titel: string;
  virksomhed: string;
  billede?: { url: string };
};

export type BlogPost = {
  titel: string;
  indhold: string;
  forfatter: string;
  dato: string;
  kategori: string;
  seoMeta?: {
    title: string;
    description: string;
  };
  slug: string;
};

export type TeamMember = {
  navn: string;
  titel: string;
  billede?: { url: string };
  bio: string;
  linkedinUrl?: string;
};

// API functions

export async function getCases() {
  return fetchStrapi<StrapiEntry<CaseStudy>[]>("/cases", {
    "populate": "*",
    "sort": "createdAt:desc",
  });
}

export async function getTestimonials() {
  return fetchStrapi<StrapiEntry<Testimonial>[]>("/testimonials", {
    "populate": "*",
  });
}

export async function getBlogPosts() {
  return fetchStrapi<StrapiEntry<BlogPost>[]>("/blog-posts", {
    "populate": "*",
    "sort": "dato:desc",
  });
}

export async function getBlogPost(slug: string) {
  return fetchStrapi<StrapiEntry<BlogPost>[]>("/blog-posts", {
    "filters[slug][$eq]": slug,
    "populate": "*",
  });
}

export async function getTeamMembers() {
  return fetchStrapi<StrapiEntry<TeamMember>[]>("/team-members", {
    "populate": "*",
  });
}

export function getStrapiMediaUrl(url: string): string {
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}
