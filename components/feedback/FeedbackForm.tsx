"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Star } from "lucide-react";
import { primaryButtonClass } from "@/components/marketing/MarketingButtons";

type FormState = "idle" | "loading" | "success" | "error";

export function FeedbackForm() {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      review: String(form.get("review") ?? "").trim(),
      email: String(form.get("email") ?? "").trim() || undefined,
      rating,
    };

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Failed to submit feedback");

      setState("success");
      e.currentTarget.reset();
      setRating(5);
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center rounded-3xl border border-[#86EFAC]/60 bg-[#F0FDF4]/90 px-8 py-14 text-center shadow-[0_20px_56px_-28px_rgba(22,163,74,0.25)]"
          >
            <CheckCircle2 className="h-12 w-12 text-[#16A34A]" aria-hidden />
            <h3 className="font-heading mt-4 text-2xl font-bold text-[#0F172A]">Thank you for your feedback</h3>
            <p className="mt-2 max-w-md text-sm font-medium text-[#64748B]">
              Your review was submitted successfully. Once approved, it may appear on our homepage.
            </p>
            <button
              type="button"
              onClick={() => setState("idle")}
              className="mt-6 text-sm font-semibold text-[#2563EB] hover:underline"
            >
              Submit another review
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            className="space-y-5 rounded-3xl border border-[#E5E7EB]/90 bg-white/80 p-6 shadow-[0_24px_64px_-32px_rgba(15,23,42,0.16)] backdrop-blur-xl md:p-8"
          >
            <motion.div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-[#0F172A]">Name *</span>
                <input
                  name="name"
                  required
                  minLength={2}
                  className="mt-2 w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[#0F172A]">Company *</span>
                <input
                  name="company"
                  required
                  minLength={2}
                  className="mt-2 w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                  placeholder="Company or brand"
                />
              </label>
            </motion.div>

            <label className="block">
              <span className="text-sm font-semibold text-[#0F172A]">Email (optional)</span>
              <input
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                placeholder="you@company.com"
              />
            </label>

            <div>
              <span className="text-sm font-semibold text-[#0F172A]">Rating *</span>
              <motion.div className="mt-2 flex gap-1" role="radiogroup" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((value) => {
                  const active = value <= (hoverRating || rating);
                  return (
                    <motion.button
                      key={value}
                      type="button"
                      whileTap={{ scale: 0.92 }}
                      onMouseEnter={() => setHoverRating(value)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(value)}
                      className="rounded-lg p-1 outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40"
                      aria-label={`${value} star${value > 1 ? "s" : ""}`}
                    >
                      <Star
                        className={active ? "h-7 w-7 fill-[#FACC15] text-[#CA8A04]" : "h-7 w-7 text-[#CBD5E1]"}
                        aria-hidden
                      />
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-[#0F172A]">Review *</span>
              <textarea
                name="review"
                required
                minLength={20}
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                placeholder="Tell us about your experience working with us..."
              />
            </label>

            {error ? (
              <p className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm font-medium text-[#B91C1C]">{error}</p>
            ) : null}

            <motion.button
              type="submit"
              disabled={state === "loading"}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={`${primaryButtonClass} w-full disabled:cursor-not-allowed disabled:opacity-70`}
            >
              {state === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Submitting...
                </>
              ) : (
                "Submit feedback"
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
