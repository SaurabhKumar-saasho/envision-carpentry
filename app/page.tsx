import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { QuickAnswerSection } from "@/components/sections/quick-answer-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ServiceAreasCtaSection } from "@/components/sections/service-areas-cta-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-[var(--amber)] selection:text-stone-950">
      {/* Executive Responsive Navigation (Fixed transparent on large desktop, mobile offcanvas drawer) */}
      <Header />

      <main>
        {/* 1. Hero Section: Direct value proposition, owner badge, stats, and primary actions */}
        <HeroSection />

        {/* 2. Quick Answer SEO Section: Instant Pittsburgh carpentry verification card */}
        <QuickAnswerSection />

        {/* 3. About Section: Who You Are Hiring (Envision Carpentry firm background, finish detailing vs structural framing) */}
        <AboutSection />

        {/* 4. Services Section: 8 core carpentry & remodeling specialties */}
        <ServicesSection />

        {/* 5. Service Areas & Direct Call Banner: Western PA coverage & PA Contractor License #184291 */}
        <ServiceAreasCtaSection />

        {/* 6. Why Choose Us: 3 Craftsmanship standards & the Envision Executive Guarantee */}
        <WhyChooseSection />

        {/* 7. Quote Section: Online project estimate form & direct phone consultation */}
        <QuoteSection />

        {/* 8. Testimonials Section: Verified 5.0-star client reviews carousel with project photo showcase */}
        <TestimonialsSection />
      </main>

      {/* Dedicated Executive Footer */}
      <Footer />
    </div>
  );
}
