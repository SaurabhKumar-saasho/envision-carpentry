import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CommonBanner } from "@/components/common-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/services-data";
import {
  Hammer,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Star,
  Compass,
  FileCheck2,
  Clock,
  Sparkles,
  HelpCircle,
  ChevronRight,
  Layers,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found | Envision Carpentry LLC",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Get other services for cross-linking
  const otherServices = Object.values(servicesData).filter((s) => s.slug !== service.slug);

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
            { label: "Services", href: "/services" },
            { label: service.shortTitle },
          ]}
          badgeText={service.badge}
          badgeIcon={<Hammer className="size-3.5 text-[var(--amber)]" />}
          title={service.title}
          titleHighlight={service.heroHighlight}
          description={service.heroDescription}
          bgImage={service.bgImage}
          bgImageAlt={service.title}
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
          stats={service.stats}
        />

        {/* 
          ======================================================================
          2. DETAILED SERVICE OVERVIEW & CRAFTSMAN PHILOSOPHY
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fdfbf9] via-[#f7f1e7] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Narrative Overview */}
              <div className="lg:col-span-7 space-y-5">
                <Badge variant="wood" className="gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                  <Compass className="size-3.5 text-amber-800 dark:text-amber-400" />
                  Our Architectural Approach
                </Badge>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                  {service.subtitle}
                </h2>

                <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
                  {service.overview}
                </p>

                <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-card p-5 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <ShieldCheck className="size-4 text-emerald-500" />
                    The Envision Guarantee for {service.shortTitle}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                      <span>Dedicated master builders on site holding the tools every day</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                      <span>Itemized written proposals honored down to the dollar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                      <span>Full Pennsylvania municipal code and permit compliance (PA #184291)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Visual Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-xl bg-card group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-flex items-center rounded-full bg-[var(--amber)] px-2.5 py-0.5 text-[10px] font-bold text-stone-950 uppercase tracking-wider">
                      Master Craftsmanship
                    </span>
                    <h3 className="mt-1.5 text-lg font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-0.5">
                      Executed directly by our seasoned trade craftsmen across Western PA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          3. CORE CAPABILITIES & TECHNICAL SPECIFICATIONS
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#1c1815] via-[#241e1a] to-[#1c1815] text-white border-b border-stone-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="amber" className="mb-2.5 px-3.5 py-1 text-xs">
                Technical Capabilities
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Specialized Disciplines &amp; Engineering Specs
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                Every detail is planned for structural stability, aesthetic perfection, and lasting performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {service.keyCapabilities.map((cap, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl border border-white/15 bg-stone-900/90 p-6 sm:p-7 shadow-xl flex flex-col justify-between text-white"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                      <span className="size-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[11px] font-extrabold">
                        {idx + 1}
                      </span>
                      <span>Discipline 0{idx + 1}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                      {cap.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                      Technical Standards &amp; Fasteners:
                    </p>
                    {cap.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-stone-200">
                        <CheckCircle2 className="size-3.5 text-[var(--amber)] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          4. 5-STEP DIRECT CRAFTSMAN WORKFLOW
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fbf8f4] via-[#f5eee4] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900/50 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="wood" className="mb-2.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                Our Execution Process
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                How We Execute Your Project from Day One
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Direct builder oversight, transparent milestone updates, and thorough daily site containment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {service.processSteps.map((step, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-card p-5 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black font-serif text-[var(--amber)]">
                      {step.step}
                    </span>
                    <h3 className="text-sm font-bold text-foreground mt-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          5. REGIONAL FOCUS: BUILT FOR WESTERN PENNSYLVANIA
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#181513] via-[#211a15] to-[#181513] text-white border-b border-stone-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl border border-white/15 bg-stone-900/80 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <Badge variant="amber" className="px-3.5 py-1 text-xs">
                    Regional Climate &amp; Architecture
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {service.regionalFocus.title}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
                    {service.regionalFocus.description}
                  </p>
                  <div className="pt-2 space-y-2.5">
                    {service.regionalFocus.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                        <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center items-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <FileCheck2 className="size-10 text-[var(--amber)] mb-3" />
                  <h4 className="text-base font-bold text-white">Licensed PA Contractor</h4>
                  <p className="text-xs text-stone-300 mt-1 max-w-xs">
                    Fully registered under Pennsylvania Home Improvement Act #184291. All permits handled directly.
                  </p>
                  <a href="tel:4125368229" className="mt-4">
                    <Button variant="amber" size="sm" className="font-bold text-stone-950 rounded-full">
                      <Phone className="size-3.5 mr-1.5" />
                      Call (412) 536-8229
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          6. FREQUENTLY ASKED QUESTIONS
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fbf8f4] via-[#f5eee4] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900/50 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="wood" className="mb-2.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                Got Questions?
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Frequently Asked Questions About {service.shortTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faq.map((item, idx) => (
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
          7. EXPLORE OTHER CARPENTRY DISCIPLINES
          ======================================================================
        */}
        <section className="py-14 sm:py-16 bg-gradient-to-b from-[#1c1815] to-[#120e0c] text-white border-b border-stone-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-300">Full-Spectrum Capabilities</p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Explore Related Carpentry Services</h3>
              </div>
              <Link href="/services" className="text-xs font-bold text-amber-300 hover:underline flex items-center gap-1">
                View All 8 Services <ChevronRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {otherServices.slice(0, 4).map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group rounded-xl border border-white/10 bg-stone-900/70 p-4 hover:border-[var(--amber)]/50 hover:bg-stone-900 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[var(--amber)] transition-colors">
                      {other.shortTitle}
                    </h4>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                      {other.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-stone-500 group-hover:text-white transition-colors mt-3 flex items-center gap-1">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          8. HIGH-CONVERTING IN-PERSON ESTIMATE CTA BANNER
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#261309] via-[#35190c] to-[#261309] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <Badge variant="amber" className="mb-3 px-3.5 py-1 text-xs">
              Start Your Project
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Ready to Discuss Your {service.shortTitle} Project?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
              Speak directly with our master builders. We provide honest trade guidance, detailed in-person measurements, and guaranteed itemized estimates.
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
              Direct master craftsman communication • Zero sales pressure • PA License #184291
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
