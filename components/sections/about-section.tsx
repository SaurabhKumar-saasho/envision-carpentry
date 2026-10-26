"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnvisionLogo } from "@/components/logo";
import { UserCheck, Phone, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-[#fdfbf9] via-[#f7f1e7] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 border-b border-border overflow-hidden"
    >
      {/* Soft angled linear lighting gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-transparent to-amber-500/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-200/30 via-transparent to-stone-300/30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Story, Range & Personal Commitment */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Badge
              variant="wood"
              className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider gap-2"
            >
              <UserCheck className="size-3.5 text-amber-800 dark:text-amber-400" />
              Our Firm & Standards
            </Badge>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              The Envision Carpentry Firm
            </h2>

            {/* Exact Paragraph 1 */}
            <p className="mt-6 text-base sm:text-lg text-foreground font-medium leading-relaxed">
              When you work with Envision Carpentry, you are not handed off to a sales rep or an anonymous revolving crew. You collaborate with an established team of dedicated craftsmen who inspect your home, explain your structural options, and deliver lasting results.
            </p>

            {/* Exact Paragraph 2 */}
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Envision Carpentry brings more than four decades of collective expertise in the trade, spanning from fine finish details like architectural crown trim and built-ins to heavy structural framing, additions, and multi-tier decks. That range matters. A team that understands the intricate structural anatomy of Western Pennsylvania homes is better at spotting why something is failing, and better at fixing it the right way the first time.
            </p>

            {/* Two Range Capabilities using Shadcn Card */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="rounded-xl border-stone-200/90 dark:border-stone-800 bg-gradient-to-br from-white via-[#fbf9f6] to-[#f4ede3] dark:from-stone-900 dark:via-stone-900/90 dark:to-stone-950 p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-card-foreground">
                  <span className="flex size-2 rounded-full bg-[var(--amber)]" />
                  Finish Details
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Custom crown molding, trim, wainscoting, built-ins, and fine architectural wood accents.
                </p>
              </Card>

              <Card className="rounded-xl border-stone-200/90 dark:border-stone-800 bg-gradient-to-br from-white via-[#fbf9f6] to-[#f4ede3] dark:from-stone-900 dark:via-stone-900/90 dark:to-stone-950 p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-card-foreground">
                  <span className="flex size-2 rounded-full bg-[var(--wood)]" />
                  Structural Framing
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Two-story decks, load-bearing walls, additions, doors, windows, and complete home remodeling.
                </p>
              </Card>
            </div>

            {/* Action Callout */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="tel:4125368229">
                <Button variant="wood" size="lg" className="rounded-xl font-bold shadow-sm">
                  <Phone className="size-4" />
                  Call (412) 536-8229
                </Button>
              </a>
              <span className="text-xs text-muted-foreground font-medium">
                Free Estimates • Pittsburgh & Surrounding Areas
              </span>
            </div>
          </div>

          {/* Right Column: Visual Composition with 2 Authentic Carpentry Work Photos */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            {/* Decorative warm background glow */}
            <div className="absolute -top-12 -right-12 size-72 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

            <div className="relative space-y-6">
              {/* Photo 1: Finish Carpentry & Millwork (Crown Trim & Wainscoting) */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-xl bg-card group">
                <img
                  src="/api/images/trim-craft.jpg"
                  alt="Master Carpenter fitting custom crown trim and architectural wainscoting"
                  className="w-full h-64 sm:h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/90 px-3 py-0.5 text-[11px] font-bold text-stone-950 uppercase tracking-wider backdrop-blur-xs">
                    Finish Detailing
                  </span>
                  <h4 className="mt-1.5 text-sm sm:text-base font-bold text-white">
                    Custom Crown Molding & Architectural Trim
                  </h4>
                  <p className="text-xs text-white/80">
                    Hand-fitted with micro-plane precision for seamless joints and longevity.
                  </p>
                </div>
              </div>

              {/* Photo 2: Structural Framing & Two-Story Decks */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-xl bg-card group">
                <img
                  src="/api/images/deck-framing.jpg"
                  alt="Custom two-story residential cedar deck and structural post framing"
                  className="w-full h-64 sm:h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--wood)] px-3 py-0.5 text-[11px] font-bold text-white uppercase tracking-wider backdrop-blur-xs">
                    Structural Carpentry
                  </span>
                  <h4 className="mt-1.5 text-sm sm:text-base font-bold text-white">
                    Two-Story Decks, Framing & Remodeling
                  </h4>
                  <p className="text-xs text-white/80">
                    Built to withstand decades of weather with heavy timber posts and code-compliant framing.
                  </p>
                </div>
              </div>

              {/* Overlapping Trust Seal Card */}
              <Card className="rounded-xl border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/90 p-4 shadow-md backdrop-blur-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <EnvisionLogo size="xs" className="h-10" />
                  <div>
                    <p className="text-xs font-bold text-foreground">Envision Carpentry LLC</p>
                    <p className="text-[11px] text-muted-foreground">Licensed & Insured • PA #184291</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-extrabold text-[var(--wood)] dark:text-[var(--amber)]">40+ Years</p>
                  <p className="text-[10px] uppercase font-semibold text-muted-foreground">In The Trade</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
