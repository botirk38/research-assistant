import { HydrateClient } from "@/trpc/server";
import { Header } from "./_components/landing_page/header";
import { HeroSection } from "./_components/landing_page/hero";
import { FeaturesSection } from "./_components/landing_page/features-section";
import { PricingSection } from "./_components/landing_page/pricing-section";
import { FaqSection } from "./_components/landing_page/faq-section";
import { CtaSection } from "./_components/landing_page/cta-section";
import { Footer } from "./_components/landing_page/footer";
import { LogosSection } from "./_components/landing_page/logos-section";
import { HowItWorksSection } from "./_components/landing_page/how-it-works-section";
import { TestimonialsSection } from "./_components/landing_page/testimonial_section";

export default function LandingPage() {
  return (
    <HydrateClient>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <LogosSection />
          <FeaturesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </HydrateClient>
  );
}
