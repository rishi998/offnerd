import type { Metadata } from "next";
import { MarketingShell } from "@/components/MarketingShell";
import { FeedbackForm } from "@/components/feedback/FeedbackForm";

export const metadata: Metadata = {
  title: "Share Feedback",
  description: "Tell us about your experience working with OFF Nerd — your review helps us improve and may appear on our homepage.",
};

export default function FeedbackPage() {
  return (
    <MarketingShell>
      <main className="min-h-screen bg-[#F5F7FB] py-12 md:py-20">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">Feedback</p>
          <h1 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
            Share your experience
          </h1>
          <p className="mt-4 text-base font-medium leading-relaxed text-[#64748B]">
            We value honest feedback from founders and teams we work with. Submissions are reviewed before appearing publicly.
          </p>
          <div className="mt-10">
            <FeedbackForm />
          </div>
        </div>
      </main>
    </MarketingShell>
  );
}
