"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2, Phone, ArrowRight } from "lucide-react";

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-24 bg-gradient-to-b from-[#fcf9f5] via-[#f5eee4] to-[#ece1d2] dark:from-stone-950 dark:via-stone-900/50 dark:to-stone-950 border-b border-border relative overflow-hidden">
      {/* Smooth linear lighting overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-transparent to-amber-500/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-200/35 via-transparent to-stone-300/30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="wood" className="gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            <Award className="size-3.5 text-amber-800 dark:text-amber-400" />
            The Envision Standard • Established 1980
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Craftsmanship Built on Forty Years <br className="hidden sm:inline" />
            of Dedicated Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            When you choose Envision Carpentry, you don&apos;t deal with commissioned sales reps or disconnected subcontractors.
            You partner directly with an established firm of dedicated craftsmen who personally evaluate your home, engineer every joint, and guarantee every cut.
          </p>
        </div>

        {/* 3 Architectural Craftsmanship Cards using Shadcn Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Direct Master Stewardship */}
          <Card className="rounded-3xl border-stone-200/90 dark:border-stone-800 bg-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1 p-0">
            <div className="relative h-60 w-full overflow-hidden bg-stone-900">
              <img
                src="/api/images/custom-woodwork.jpg"
                alt="Custom bespoke architectural woodcraft and finished joinery"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/90 border border-white/20 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider backdrop-blur-md">
                  01 / Firm Stewardship
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Dedicated Craftsmen On Site</p>
                <h3 className="text-lg font-bold text-white">Direct With Envision Carpentry</h3>
              </div>
            </div>

            <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                From your initial in-home consultation to the final coat of finish, our seasoned craftsmen personally oversee and execute your project. No middlemen, no call centers, and zero subcontractor markups.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-border/70 text-xs font-semibold text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Personal walkthrough & direct team communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Accountable master craftsmen executing the work</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Direct answers without corporate bureaucracy</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Pillar 2: Structural to Finish Range */}
          <Card className="rounded-3xl border-stone-200/90 dark:border-stone-800 bg-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1 p-0">
            <div className="relative h-60 w-full overflow-hidden bg-stone-900">
              <img
                src="/api/images/deck-framing.jpg"
                alt="Heavy timber framing and structural cedar deck construction"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/90 border border-white/20 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider backdrop-blur-md">
                  02 / Whole-House Range
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Heavy Framing to Fine Trim</p>
                <h3 className="text-lg font-bold text-white">Full-Spectrum Versatility</h3>
              </div>
            </div>

            <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A rare trade breadth: four decades of structural experience handling multi-story decks, wall removals, and home additions with the exact same precision as seamless crown molding and custom wainscoting.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-border/70 text-xs font-semibold text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Structural framing, posts & code-compliant decks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Architectural crown molding, trim & doors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Deep expertise in historic Western PA home anatomy</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Pillar 3: Upfront Integrity & Site Care */}
          <Card className="rounded-3xl border-stone-200/90 dark:border-stone-800 bg-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1 p-0">
            <div className="relative h-60 w-full overflow-hidden bg-stone-900">
              <img
                src="/api/images/trim-craft.jpg"
                alt="Precision wainscoting and architectural trim detailing"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/90 border border-white/20 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider backdrop-blur-md">
                  03 / Integrity & Respect
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Predictable & Clean</p>
                <h3 className="text-lg font-bold text-white">Honest Estimates & Clean Sites</h3>
              </div>
            </div>

            <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your home is treated with the highest standard of care. Transparent in-person estimates with no hidden surprise change orders, clean daily dust containment, and respect for your family&apos;s schedule.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-border/70 text-xs font-semibold text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Clear, honest written estimates with zero surprises</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Daily dust barrier protection & site cleanup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Fully licensed and insured in Pennsylvania</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Luxury Executive Trust Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#171412] via-[#2a1d16] to-[#171412] text-white p-8 sm:p-10 shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Smooth linear lighting overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <Badge variant="amber" className="mb-3 px-3.5 py-1 text-xs">
                The Envision Firm Guarantee
              </Badge>
              <blockquote className="text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug">
                &ldquo;Over 40 years of combined craftsmanship, and a firm commitment that you will always know where your project stands.&rdquo;
              </blockquote>
              <p className="mt-2 text-xs sm:text-sm text-stone-400 font-serif italic">
                — Envision Carpentry LLC • Pittsburgh, PA
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a href="tel:4125368229">
                <Button
                  variant="amber"
                  size="xl"
                  className="font-bold text-stone-950 h-13 px-8 text-base shadow-xl hover:scale-105 active:scale-95 transition-all rounded-xl"
                >
                  <Phone className="size-4" />
                  Call (412) 536-8229
                </Button>
              </a>
              <Button
                variant="heroOutline"
                size="xl"
                className="font-semibold text-white h-13 px-8 text-base border-stone-700 hover:bg-white/10 rounded-xl"
                onClick={() => {
                  const el = document.getElementById("services");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Services
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
