import { NextResponse } from "next/server";
import { getApprovedReviews } from "@/lib/feedback-store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const reviews = await getApprovedReviews();
    return NextResponse.json({ reviews });
  } catch (error) {
    console.error("[reviews GET]", error);
    return NextResponse.json({ reviews: [] });
  }
}
