import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import type { FeedbackInput, FeedbackReview, PublicReview } from "@/lib/feedback-types";
import { getDb, isMongoConfigured, REVIEWS_COLLECTION } from "@/lib/mongodb";

const FILE_PATH = path.join(process.cwd(), "data", "reviews.json");

async function readFileReviews(): Promise<FeedbackReview[]> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
    const parsed = JSON.parse(raw) as FeedbackReview[];
    return parsed.map((r) => ({
      ...r,
      createdAt: new Date(r.createdAt),
    }));
  } catch {
    return [];
  }
}

async function writeFileReviews(reviews: FeedbackReview[]): Promise<void> {
  await fs.mkdir(path.dirname(FILE_PATH), { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(reviews, null, 2), "utf8");
}

function toPublic(review: FeedbackReview): PublicReview {
  return {
    id: review._id ?? randomUUID(),
    name: review.name,
    company: review.company,
    rating: review.rating,
    review: review.review,
    createdAt: new Date(review.createdAt).toISOString(),
  };
}

export async function createReview(input: FeedbackInput): Promise<PublicReview> {
  const doc: FeedbackReview = {
    ...input,
    approved: false,
    createdAt: new Date(),
  };

  if (isMongoConfigured()) {
    const db = await getDb();
    const result = await db.collection<FeedbackReview>(REVIEWS_COLLECTION).insertOne(doc);
    return toPublic({ ...doc, _id: result.insertedId.toString() });
  }

  const reviews = await readFileReviews();
  const id = randomUUID();
  const stored = { ...doc, _id: id };
  reviews.unshift(stored);
  await writeFileReviews(reviews);
  return toPublic(stored);
}

export async function getApprovedReviews(limit = 24): Promise<PublicReview[]> {
  if (isMongoConfigured()) {
    const db = await getDb();
    const rows = await db
      .collection<FeedbackReview>(REVIEWS_COLLECTION)
      .find({ approved: true })
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();

    return rows.map((r) => {
      const id = r._id;
      const idStr = id && typeof id === "object" && "toString" in id ? String(id) : String(id ?? "");
      return toPublic({
        ...r,
        _id: idStr,
        createdAt: new Date(r.createdAt),
      });
    });
  }

  const reviews = await readFileReviews();
  return reviews
    .filter((r) => r.approved)
    .slice(0, limit)
    .map(toPublic);
}
