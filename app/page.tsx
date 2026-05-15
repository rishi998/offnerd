import dynamic from "next/dynamic";
import { MarketingShell } from "@/components/MarketingShell";
import { AgencyHero } from "@/components/home/AgencyHero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { StatsSection } from "@/components/home/StatsSection";
import { CountriesSection } from "@/components/home/CountriesSection";
import { DomainStatsSection } from "@/components/home/DomainStatsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AchievementsSection } from "@/components/home/AchievementsSection";

const TestimonialsSection = dynamic(
  () => import("@/components/home/TestimonialsSection").then((m) => m.TestimonialsSection),
  { loading: () => <div className="mx-auto h-96 max-w-7xl animate-pulse rounded-3xl bg-white/50" /> },
);

export default function Home() {
  return (
    <MarketingShell>
      <main className="min-h-screen overflow-x-hidden bg-[#F5F7FB] text-[#0F172A]">
        <AgencyHero />
        <LogoMarquee />
        <StatsSection />
        <CountriesSection />
        <DomainStatsSection />
        <ServicesShowcase />
        <FeaturedProjects />
        <WhyChooseUs />
        <AchievementsSection />
        <ProcessTimeline />
        <TestimonialsSection />
        <HomeFinalCTA />
      </main>
    </MarketingShell>
  );
}
