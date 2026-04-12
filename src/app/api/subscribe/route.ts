import { NextRequest, NextResponse } from "next/server";

const AC_URL = process.env.ACTIVECAMPAIGN_API_URL;
const AC_KEY = process.env.ACTIVECAMPAIGN_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email er påkrævet" },
        { status: 400 }
      );
    }

    // If ActiveCampaign isn't configured, just accept the submission
    if (!AC_URL || !AC_KEY) {
      console.log(`[Subscribe] Email modtaget (AC ikke konfigureret): ${email}`);
      return NextResponse.json({ success: true });
    }

    // Create or update contact in ActiveCampaign
    const response = await fetch(`${AC_URL}/api/3/contact/sync`, {
      method: "POST",
      headers: {
        "Api-Token": AC_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact: {
          email,
          fieldValues: [
            {
              field: "source",
              value: "ai-guide-download",
            },
          ],
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Subscribe] ActiveCampaign error:", errorText);
      return NextResponse.json(
        { error: "Noget gik galt. Prøv igen." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Subscribe] Error:", error);
    return NextResponse.json(
      { error: "Noget gik galt. Prøv igen." },
      { status: 500 }
    );
  }
}
