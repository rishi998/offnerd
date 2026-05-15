import { NextResponse } from "next/server";
import { createReview } from "@/lib/feedback-store";
import type { FeedbackInput } from "@/lib/feedback-types";

function validate(body: unknown): FeedbackInput | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const company = typeof b.company === "string" ? b.company.trim() : "";
  const review = typeof b.review === "string" ? b.review.trim() : "";
  const rating = typeof b.rating === "number" ? b.rating : Number(b.rating);
  const email = typeof b.email === "string" && b.email.trim() ? b.email.trim() : undefined;

  if (name.length < 2 || company.length < 2 || review.length < 20) return null;
  if (!Number.isFinite(rating) || rating < 1 || rating > 5) return null;

  return { name, company, review, rating, email };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = validate(body);
    if (!input) {
      return NextResponse.json({ error: "Invalid feedback. Check all required fields." }, { status: 400 });
    }

    const review = await createReview(input);
    return NextResponse.json({ success: true, review }, { status: 201 });
  } catch (error) {
    console.error("[feedback POST]", error);
    return NextResponse.json({ error: "Unable to submit feedback right now." }, { status: 500 });
  }
}
