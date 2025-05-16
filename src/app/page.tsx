import { HydrateClient } from "@/trpc/server";
import HeroSection from "./_components/landing_page/hero";
import Features from "./_components/landing_page/features-section";
import FooterSection from "./_components/landing_page/footer";
import CallToActionSection from "./_components/landing_page/cta-section";

export default function LandingPage() {
  return (
    <HydrateClient>
      <HeroSection />
      <Features />
      <CallToActionSection />
      <FooterSection />
    </HydrateClient>
  );
}
