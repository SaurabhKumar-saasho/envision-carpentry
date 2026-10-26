import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Hammer,
  ShieldCheck,
  Award,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  Compass,
  FileCheck2,
  Star,
  Quote,
} from "lucide-react";

import { CommonBanner } from "@/components/common-banner";

export const metadata: Metadata = {
  title: "About Us | Envision Carpentry LLC - Pittsburgh Master Craftsmen",
  description:
    "Learn about Envision Carpentry LLC, Pittsburgh’s premier residential carpentry and remodeling firm. Built on over 40 years of trade craftsmanship, structural timber framing, and architectural finish detailing across Western PA.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-[var(--amber)] selection:text-stone-950">
      <Header />

      <main>
        {/* 
          ======================================================================
          1. REUSABLE COMMON HERO BANNER (Breadcrumbs, H1, Badge, CTAs & Stats)
          ======================================================================
        */}
        <CommonBanner
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
          badgeText="Established 1980 • Pittsburgh, PA • PA License #184291"
          badgeIcon={<Award className="size-3.5 text-[var(--amber)]" />}
          title="Master Carpentry Built on"
          titleHighlight="Forty Years of Trade Discipline"
          description="Envision Carpentry LLC is an established Pittsburgh residential carpentry and remodeling firm. We bridge the gap between time-honored architectural millwork and heavy structural framing, bringing generational trade discipline and direct craftsman accountability to every home we touch."
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
          stats={[
            {
              value: "40+ Years",
              label: "Generational Expertise",
              sublabel: "Continuous hands-on trade mastery",
              color: "text-[var(--amber)]",
            },
            {
              value: "PA #184291",
              label: "State Licensed Contractor",
              sublabel: "Fully registered, bonded & insured",
              color: "text-white",
            },
            {
              value: (
                <span className="flex items-center gap-1.5">
                  5.0 <Star className="size-4.5 fill-amber-400" />
                </span>
              ),
              label: "Verified Client Rating",
              sublabel: "100% positive homeowner feedback",
              color: "text-amber-400",
            },
            {
              value: "100%",
              label: "Direct Accountability",
              sublabel: "Zero outsourced third-party subs",
              color: "text-emerald-400",
            },
          ]}
        />

        {/* 
          ======================================================================
          2. OUR STORY & PHILOSOPHY (Concise, High-Impact Narrative)
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fdfbf9] via-[#f7f1e7] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <Badge variant="wood" className="gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                  <Compass className="size-3.5 text-amber-800 dark:text-amber-400" />
                  Our Story &amp; Heritage
                </Badge>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                  Where Traditional Guild Discipline Meets Modern Engineering
                </h2>

                <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
                  Envision Carpentry was founded on a straightforward commitment: true carpentry is about understanding the enduring structural physics of wood and honoring the architectural character of every home.
                </p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  With over 40 years of hands-on building across Pittsburgh and Western Pennsylvania, our master builders navigate settling historic Victorians, steep hillside foundations, and bespoke interior millwork. Unlike sales brokers who outsource jobs to revolving crews, our lead craftsmen personally plan, measure, and build your project on site every day.
                </p>

                {/* Compact Quote Callout */}
                <div className="rounded-xl border-l-4 border-[var(--amber)] bg-amber-500/10 p-4 sm:p-5 relative">
                  <Quote className="size-6 text-[var(--amber)]/30 absolute top-3 right-3 pointer-events-none" />
                  <blockquote className="text-sm sm:text-base font-serif italic text-foreground leading-relaxed">
                    &ldquo;Understanding grain tension, deflection formulas, and structural load physics is the difference between woodwork that warps in two years and architectural builds that stand for generations.&rdquo;
                  </blockquote>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--amber)]">
                    — The Envision Craftsmanship Standard
                  </p>
                </div>
              </div>

              {/* Right Column: Visual Photo & Quick Standards Card */}
              <div className="lg:col-span-5 space-y-5">
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-xl bg-card group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/custom-woodwork.jpg"
                    alt="Master joinery and fine architectural woodwork"
                    className="w-full h-72 sm:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-flex items-center rounded-full bg-[var(--amber)] px-2.5 py-0.5 text-[10px] font-bold text-stone-950 uppercase tracking-wider">
                      Heirloom Millwork
                    </span>
                    <h4 className="mt-1.5 text-base font-bold text-white">
                      Bespoke Architectural Woodcraft
                    </h4>
                    <p className="text-xs text-white/80">
                      Hand-fitted cabinetry, mantels, and precision grain matching.
                    </p>
                  </div>
                </div>

                <Card className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-card p-5 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2.5 flex items-center gap-2">
                    <ShieldCheck className="size-4 text-emerald-500" />
                    Our Core Operating Principles
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                      <span>Dedicated master craftsmen on site every day</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                      <span>Transparent, itemized pricing without surprise change orders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                      <span>Daily dust barriers &amp; clean home containment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                      <span>Direct phone access to lead builders throughout the project</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          3. DUAL-SPECTRUM MASTERY: Finish Millwork vs. Structural Framing
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#1c1815] via-[#241e1a] to-[#1c1815] text-white border-b border-stone-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="amber" className="mb-2.5 px-3.5 py-1 text-xs">
                Dual-Spectrum Trade Mastery
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Micro-Precision Trim &amp; Heavy Structural Framing
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                Most companies specialize in only one discipline. Envision Carpentry unites high-end architectural millwork with certified structural engineering under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Discipline A: Finish Trim */}
              <Card className="rounded-2xl border border-white/15 bg-stone-900/90 overflow-hidden shadow-xl flex flex-col p-0 text-white group">
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-stone-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/trim-craft.jpg"
                    alt="Finish carpentry and crown molding"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-stone-900/90 border border-white/20 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 uppercase tracking-wider backdrop-blur-md">
                      Pillar 01 • Micro-Precision
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Architectural Finish Carpentry
                    </h3>
                    <p className="text-xs text-white/80 mt-0.5">
                      Custom crown molding, wainscoting, mantels &amp; historic casings
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Hand-coped corners, precision micro-planing for uneven plaster, and bespoke millwork designed to match historic architectural profiles.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-white/90 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-[var(--amber)] shrink-0" />
                      <span>Hand-coped joints</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-[var(--amber)] shrink-0" />
                      <span>Custom built-ins</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-[var(--amber)] shrink-0" />
                      <span>Wainscot panels</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-[var(--amber)] shrink-0" />
                      <span>Concealed wiring chases</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Discipline B: Structural Framing */}
              <Card className="rounded-2xl border border-white/15 bg-stone-900/90 overflow-hidden shadow-xl flex flex-col p-0 text-white group">
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-stone-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/deck-framing.jpg"
                    alt="Structural timber deck framing"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-stone-900/90 border border-white/20 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 uppercase tracking-wider backdrop-blur-md">
                      Pillar 02 • Heavy Engineering
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Structural Timber Framing &amp; Additions
                    </h3>
                    <p className="text-xs text-white/80 mt-0.5">
                      Multi-tier hillside decks, load-bearing removals &amp; room additions
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Certified load path engineering, deep concrete hillside pier systems, and recessed structural beam installations complying with PA building codes.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-white/90 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-[var(--amber)] shrink-0" />
                      <span>Code-certified framing</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-[var(--amber)] shrink-0" />
                      <span>Steel-reinforced beams</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-[var(--amber)] shrink-0" />
                      <span>Hillside deck footings</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-[var(--amber)] shrink-0" />
                      <span>Weather-tight entries</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          4. WHY WORK WITH ENVISION (3 Core Differentiators)
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fbf8f4] via-[#f5eee4] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900/50 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="wood" className="mb-2.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                Uncompromising Standards
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Why Pittsburgh Homeowners Trust Envision
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Direct craftsman accountability, regional trade mastery, and guaranteed upfront pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <Card className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-card p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="size-11 rounded-xl bg-amber-500/15 text-[var(--amber)] flex items-center justify-center mb-4">
                    <Hammer className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Zero Subcontractor Hand-offs</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    You work directly with seasoned master craftsmen who personally hold the tools and manage your build from day one to final walkthrough.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5" />
                  <span>100% Direct Craftsman Crew</span>
                </div>
              </Card>

              {/* Pillar 2 */}
              <Card className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-card p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="size-11 rounded-xl bg-amber-500/15 text-[var(--amber)] flex items-center justify-center mb-4">
                    <MapPin className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Western PA Architecture Experts</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Decades navigating settling 1910 plaster walls, steep Allegheny County hillside lots, and historic molding replications across Western PA.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5" />
                  <span>Allegheny &amp; Surrounding Counties</span>
                </div>
              </Card>

              {/* Pillar 3 */}
              <Card className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-card p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="size-11 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <FileCheck2 className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Licensed, Insured &amp; Guaranteed</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    State licensed contractor (<strong>PA #184291</strong>), comprehensive commercial liability, workers&apos; comp, and written workmanship warranties.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5" />
                  <span>Written Workmanship Warranty</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          5. FOCUSED CALL-TO-ACTION BANNER
          ======================================================================
        */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#261309] via-[#35190c] to-[#261309] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <Badge variant="amber" className="mb-3 px-3.5 py-1 text-xs">
              Start Your Project
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Ready to Discuss Your Carpentry or Remodeling Vision?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
              Speak directly with our master builders for honest trade guidance, detailed in-person walkthroughs, and itemized proposals.
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
                  <span>Request Free Estimate</span>
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
              </a>
            </div>

            <p className="mt-4 text-[11px] text-white/60">
              Direct communication • No high-pressure sales • Licensed in PA (PA #184291)
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
