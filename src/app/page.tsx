import { HydrateClient } from "@/trpc/server";
import HeroSection from "./_components/hero";
import Features from "./_components/features-section";
import FooterSection from "./_components/footer";
import CallToActionSection from "./_components/cta-section";

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
