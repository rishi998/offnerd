"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { STATIC_TESTIMONIALS } from "@/data/testimonials";
import type { PublicReview } from "@/lib/feedback-types";
import { SectionHeader } from "@/components/ui/SectionHeader";

const AUTO_SCROLL_MS = 5500;
const DESKTOP_VISIBLE = 3;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rating ? "h-4 w-4 fill-[#FACC15] text-[#CA8A04]" : "h-4 w-4 text-[#E2E8F0]"}
          aria-hidden
        />
      ))}
    </div>
  );
}

function avatarInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ review }: { review: PublicReview }) {
  return (
    <article className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-7 shadow-[0_24px_64px_-32px_rgba(15,23,42,0.2)] backdrop-blur-xl">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2563EB]/[0.04] via-transparent to-[#FACC15]/[0.06]"
      />
      <Quote className="absolute right-5 top-5 h-8 w-8 text-[#BFDBFE]/80" aria-hidden />
      <Stars rating={review.rating} />
      <blockquote className="relative mt-4 flex-1 text-sm font-medium leading-relaxed text-[#334155] md:text-[0.95rem]">
        &ldquo;{review.review}&rdquo;
      </blockquote>
      <footer className="relative mt-6 flex items-center gap-3 border-t border-[#E5E7EB]/80 pt-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1e40af] text-xs font-bold text-white shadow-md">
          {avatarInitials(review.name)}
        </span>
        <div>
          <p className="text-sm font-bold text-[#0F172A]">{review.name}</p>
          <p className="text-xs font-semibold text-[#64748B]">{review.company}</p>
        </div>
      </footer>
    </article>
  );
}

export function TestimonialsSection() {
  const [reviews, setReviews] = useState<PublicReview[]>(STATIC_TESTIMONIALS);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const count = reviews.length;
  const maxIndex = Math.max(0, count - DESKTOP_VISIBLE);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data: { reviews?: PublicReview[] }) => {
        if (data.reviews?.length) {
          const merged = [...data.reviews];
          const ids = new Set(merged.map((r) => r.id));
          for (const s of STATIC_TESTIMONIALS) {
            if (!ids.has(s.id)) merged.push(s);
          }
          setReviews(merged);
        }
      })
      .catch(() => undefined);
  }, []);

  const visibleDesktop = useMemo(() => {
    if (count === 0) return [];
    return Array.from({ length: Math.min(DESKTOP_VISIBLE, count) }, (_, i) => reviews[(index + i) % count]);
  }, [count, index, reviews]);

  const next = useCallback(() => {
    setIndex((i) => (count <= DESKTOP_VISIBLE ? 0 : i >= maxIndex ? 0 : i + 1));
  }, [count, maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (count <= DESKTOP_VISIBLE ? 0 : i <= 0 ? maxIndex : i - 1));
  }, [count, maxIndex]);

  useEffect(() => {
    if (reduceMotion || paused || count <= DESKTOP_VISIBLE) return;
    const id = window.setInterval(next, AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, [next, paused, reduceMotion, count]);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F5F7FB] via-[#EEF2FF]/40 to-[#F5F7FB]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Clients Say"
          subtitle="Founders and operators who ship with us — from SaaS and commerce to healthcare and automation."
        />

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current == null) return;
            const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
            if (Math.abs(delta) > 48) delta < 0 ? next() : prev();
            touchStartX.current = null;
          }}
        >
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[index]?.id ?? index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                {reviews[index] ? <TestimonialCard review={reviews[index]} /> : null}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden gap-5 md:grid md:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleDesktop.map((review) => (
                <motion.div
                  key={`${review.id}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <TestimonialCard review={review} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {count > DESKTOP_VISIBLE ? (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="grid h-10 w-10 place-items-center rounded-xl border border-[#E2E8F0] bg-white/90 text-[#0F172A] shadow-sm transition hover:border-[#CBD5E1] hover:shadow-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <motion.div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={[
                      "h-2 rounded-full transition-all duration-300",
                      i === index ? "w-6 bg-[#2563EB]" : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]",
                    ].join(" ")}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </motion.div>
              <button
                type="button"
                onClick={next}
                className="grid h-10 w-10 place-items-center rounded-xl border border-[#E2E8F0] bg-white/90 text-[#0F172A] shadow-sm transition hover:border-[#CBD5E1] hover:shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          ) : null}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-[#64748B]">
          Worked with us?{" "}
          <Link href="/feedback" className="font-semibold text-[#2563EB] hover:underline">
            Share your experience
          </Link>
        </p>
      </div>
    </section>
  );
}
