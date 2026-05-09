import { MarketingShell } from "@/components/MarketingShell";
import { AgencyHero } from "@/components/home/AgencyHero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <MarketingShell>
      <main className="min-h-screen bg-[#F5F7FB] text-[#0F172A]">
        <AgencyHero />
        <LogoMarquee />
        <ServicesShowcase />
        <FeaturedProjects />
        <WhyChooseUs />
        <ProcessTimeline />
        <Testimonials />
        <HomeFinalCTA />
      </main>
    </MarketingShell>
  );
}
