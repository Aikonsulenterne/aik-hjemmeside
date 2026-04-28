import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

/**
 * On-demand revalidation endpoint.
 * Kaldes af Strapi webhook når indhold publiceres/opdateres.
 *
 * Webhook-opsætning i Strapi:
 *   Settings → Webhooks → Create new webhook
 *   URL: https://ai-konsulenterne.dk/api/revalidate?secret=YOUR_SECRET
 *   Events: entry.publish, entry.unpublish, entry.update, entry.delete
 *
 * Secret skal matche REVALIDATE_SECRET i .env.local.
 *
 * Test lokalt:
 *   curl -X POST "http://localhost:3001/api/revalidate?secret=XXX" \
 *     -H "Content-Type: application/json" \
 *     -d '{"model":"case"}'
 */

// Map Strapi model → Next.js cache tags der skal revalideres
const MODEL_TO_TAGS: Record<string, string[]> = {
  case: ["cases"],
  "team-member": ["team"],
  "blog-post": ["blog"],
  testimonial: ["testimonials"],
};

// Paths der skal ISR-revalideres per model
const MODEL_TO_PATHS: Record<string, string[]> = {
  case: ["/cases", "/"],
  "team-member": ["/om-os", "/"],
  "blog-post": ["/viden-om-ai"],
  testimonial: ["/"],
};

type StrapiWebhookPayload = {
  event?: string;
  model?: string;
  entry?: {
    id?: number;
    documentId?: string;
    slug?: string;
  };
};

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const expected = process.env.REVALIDATE_SECRET;

  if (expected && secret !== expected) {
    return NextResponse.json(
      { error: "Invalid secret" },
      { status: 401 },
    );
  }

  let payload: StrapiWebhookPayload = {};
  try {
    payload = await request.json();
  } catch {
    // Payload is optional — kan kaldes uden body for at revalidere alt
  }

  const model = payload.model;
  const slug = payload.entry?.slug;
  const revalidated: string[] = [];

  if (!model) {
    // No model — revalidér alt
    for (const tags of Object.values(MODEL_TO_TAGS)) {
      tags.forEach((t) => {
        revalidateTag(t, "max");
        revalidated.push(`tag:${t}`);
      });
    }
    return NextResponse.json({ revalidated, scope: "all" });
  }

  // Revalidér tags
  const tags = MODEL_TO_TAGS[model] ?? [];
  tags.forEach((t) => {
    revalidateTag(t, "max");
    revalidated.push(`tag:${t}`);
  });

  // Revalidér entity-specific tag (fx case-lavazza-hr-agent)
  if (slug) {
    const singular = model; // case, team-member, blog-post, testimonial
    revalidateTag(`${singular}-${slug}`, "max");
    revalidated.push(`tag:${singular}-${slug}`);
  }

  // Revalidér paths (ISR)
  const paths = MODEL_TO_PATHS[model] ?? [];
  paths.forEach((p) => {
    revalidatePath(p);
    revalidated.push(`path:${p}`);
  });

  // Specifik blog/case-side hvis slug er der
  if (slug) {
    if (model === "blog-post") {
      revalidatePath(`/viden-om-ai/${slug}`);
      revalidated.push(`path:/viden-om-ai/${slug}`);
    } else if (model === "case") {
      revalidatePath(`/cases/${slug}`);
      revalidated.push(`path:/cases/${slug}`);
    }
  }

  return NextResponse.json({
    revalidated,
    model,
    slug,
    timestamp: new Date().toISOString(),
  });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message:
      "Use POST with Strapi webhook payload. Include ?secret=XXX query param.",
  });
}
