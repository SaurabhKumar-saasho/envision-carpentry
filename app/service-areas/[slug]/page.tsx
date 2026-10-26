import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CommonBanner } from "@/components/common-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { serviceAreasData } from "@/lib/service-areas-data";
import {
  MapPin,
  Building2,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Star,
  Compass,
  FileCheck2,
  HelpCircle,
  ChevronRight,
  Hammer,
} from "lucide-react";

interface ServiceAreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceAreasData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreasData[slug];

  if (!area) {
    return {
      title: "Service Area Not Found | Envision Carpentry LLC",
    };
  }

  return {
    title: area.metaTitle,
    description: area.metaDescription,
  };
}

export default async function ServiceAreaDetailPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params;
  const area = serviceAreasData[slug];

  if (!area) {
    notFound();
  }

  // Get other service areas for cross-navigation
  const otherAreas = Object.values(serviceAreasData).filter((a) => a.slug !== area.slug);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-[var(--amber)] selection:text-stone-950">
      <Header />

      <main>
        {/* 
          ======================================================================
          1. COMMON HERO BANNER (Breadcrumbs, H1, Badge, CTAs & Stats)
          ======================================================================
        */}
        <CommonBanner
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/service-areas" },
            { label: area.name },
          ]}
          badgeText={area.badge}
          badgeIcon={<MapPin className="size-3.5 text-[var(--amber)]" />}
          title={`Master Carpentry & Remodeling in`}
          titleHighlight={area.name}
          description={area.heroDescription}
          bgImage={area.bgImage}
          bgImageAlt={`${area.name} Master Carpentry & Remodeling`}
          primaryCta={{
            label: "Call (412) 536-8229",
            href: "tel:4125368229",
            icon: <Phone className="size-3.5 mr-1.5" />,
          }}
          secondaryCta={{
            label: "Request Free Estimate",
            href: "/#quote",
            icon: <ArrowRight className="size-3.5 ml-1.5" />,
          }}
          stats={area.stats}
        />

        {/* 
          ======================================================================
          2. LOCAL COMMUNITY ARCHITECTURAL OVERVIEW
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fdfbf9] via-[#f7f1e7] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <Badge variant="wood" className="gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="size-3.5 text-amber-800 dark:text-amber-400" />
                  {area.county} Specialist
                </Badge>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                  {area.architecturalContext.heading}
                </h2>

                <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
                  {area.overview}
                </p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {area.architecturalContext.description}
                </p>

                <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-card p-5 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <ShieldCheck className="size-4 text-emerald-500" />
                    Local Contractor Standards for {area.name}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                      <span>Seasoned master craftsmen on site from start to completion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                      <span>Full municipal permit coordination and code inspection sign-offs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                      <span>Daily dust barriers and high-efficiency home containment</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Visual Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-xl bg-card group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={area.bgImage}
                    alt={`${area.name} Carpentry & Remodeling`}
                    className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-flex items-center rounded-full bg-[var(--amber)] px-2.5 py-0.5 text-[10px] font-bold text-stone-950 uppercase tracking-wider">
                      {area.county}
                    </span>
                    <h3 className="mt-1.5 text-lg font-bold text-white">
                      Building in {area.name}
                    </h3>
                    <p className="text-xs text-white/80 mt-0.5">
                      PA Contractor License #184291 • Direct master craftsman accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          3. COMMUNITY ARCHITECTURAL CHALLENGES & SOLUTIONS
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#1c1815] via-[#241e1a] to-[#1c1815] text-white border-b border-stone-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="amber" className="mb-2.5 px-3.5 py-1 text-xs">
                Local Trade Knowledge
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Architectural Challenges Specific to {area.name}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                Older foundations, masonry settling, and steep hillside grades demand regional building expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {area.architecturalContext.challenges.map((c, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl border border-white/15 bg-stone-900/90 p-6 shadow-xl flex flex-col justify-between text-white"
                >
                  <div>
                    <div className="size-10 rounded-xl bg-amber-500/15 text-[var(--amber)] flex items-center justify-center font-bold font-serif text-lg mb-3">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-amber-300">
                    <CheckCircle2 className="size-3.5" />
                    <span>Envision Trade Solution</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          4. POPULAR SERVICES DELIVERED IN THIS AREA
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fbf8f4] via-[#f5eee4] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900/50 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="wood" className="mb-2.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                Full-Spectrum Carpentry
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Popular Carpentry Services in {area.name}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Explore our core trade disciplines requested by homeowners in your community.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {area.popularServices.map((srv, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-card p-6 shadow-sm flex flex-col justify-between hover:border-[var(--amber)]/60 transition-colors"
                >
                  <div>
                    <div className="size-10 rounded-xl bg-[#733e1e]/10 text-[#733e1e] dark:bg-amber-400/15 dark:text-amber-300 flex items-center justify-center mb-3">
                      <Hammer className="size-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border">
                    <Link
                      href={srv.link}
                      className="text-xs font-bold text-[#733e1e] dark:text-amber-300 hover:text-amber-800 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore Service Details</span>
                      <ChevronRight className="size-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          5. NEARBY COMMUNITIES & REGIONAL COVERAGE
          ======================================================================
        */}
        <section className="py-14 sm:py-16 bg-gradient-to-b from-[#1c1815] to-[#120e0c] text-white border-b border-stone-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-stone-900/60 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-300">Western PA Regional Coverage</p>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    Neighboring Communities Served Around {area.name}
                  </h3>
                </div>
                <Link href="/service-areas" className="text-xs font-bold text-amber-300 hover:underline flex items-center gap-1">
                  View All Service Areas <ChevronRight className="size-3.5" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {area.nearbyCommunities.map((cName, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-stone-800/80 px-3.5 py-1 text-xs text-stone-200"
                  >
                    <MapPin className="size-3 text-[var(--amber)]" />
                    {cName}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          6. LOCAL FAQS
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fbf8f4] via-[#f5eee4] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900/50 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge variant="wood" className="mb-2.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                Common Questions
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
                Frequently Asked Questions for {area.name} Homeowners
              </h2>
            </div>

            <div className="space-y-4">
              {area.faq.map((item, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-card p-6 shadow-sm"
                >
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2.5">
                    <HelpCircle className="size-4.5 text-[var(--amber)] shrink-0" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-7">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          7. HIGH-CONVERTING IN-PERSON ESTIMATE CTA BANNER
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#261309] via-[#35190c] to-[#261309] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <Badge variant="amber" className="mb-3 px-3.5 py-1 text-xs">
              Direct Firm Access
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Ready to Discuss Your {area.name} Project?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
              Speak directly with our master builders. We provide honest trade guidance, detailed in-person measurements in {area.name}, and upfront written proposals.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
              <a href="tel:4125368229">
                <Button
                  variant="amber"
                  size="lg"
                  className="font-bold text-stone-950 shadow-xl hover:scale-103 active:scale-97 transition-all h-12 px-7 text-sm rounded-full cursor-pointer"
                >
                  <Phone className="size-4 mr-1.5" />
                  Call (412) 536-8229
                </Button>
              </a>

              <a href="/#quote">
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="font-semibold text-white border-white/30 hover:bg-white/10 h-12 px-7 text-sm rounded-full cursor-pointer"
                >
                  <span>Request Free In-Person Estimate</span>
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
              </a>
            </div>

            <p className="mt-4 text-[11px] text-white/60">
              Serving {area.name} and {area.county} • PA Contractor License #184291
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
