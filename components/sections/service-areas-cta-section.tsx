"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export const serviceAreasList = [
  "Pittsburgh, PA",
  "McKeesport, PA",
  "Butler, PA",
  "Aliquippa, PA",
  "Beaver Falls, PA",
  "Clairton, PA",
  "Duquesne, PA",
];

export function ServiceAreasCtaSection() {
  return (
    <section className="py-20 bg-[#24170f] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/cta-banner-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -left-64 top-8 size-[48rem] rounded-full pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle, transparent 0 40px, rgba(255,239,216,0.24) 41px 42px, transparent 43px 80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-72 -bottom-16 size-[54rem] rounded-full pointer-events-none opacity-15"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle, transparent 0 44px, rgba(255,239,216,0.24) 45px 46px, transparent 47px 88px)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <Badge variant="amber" className="mb-4 px-3.5 py-1 text-xs gap-2">
          <MapPin className="size-3.5 text-[var(--amber)]" />
          Service Areas • Western Pennsylvania
        </Badge>

        {/* Main CTA Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
          Ready to Start Your Project With Envision Carpentry?
        </h2>

        <p className="mt-3 text-sm sm:text-base text-white leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
          From finish trim and crown molding to heavy structural framing, decks, and whole-home remodeling.
          Call today for honest advice, direct communication, and a free in-person estimate.
        </p>

        {/* Primary Action Buttons using Shadcn Button */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
          <a href="tel:4125368229">
            <Button
              variant="amber"
              size="lg"
              className="font-bold text-stone-950 h-11 px-7 text-sm rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <Phone className="size-4" />
              Call (412) 536-8229
            </Button>
          </a>

          <Button
            variant="heroOutline"
            size="lg"
            className="font-semibold text-white h-11 px-7 text-sm rounded-xl border-white/40 hover:bg-white/10"
            onClick={() => {
              const el = document.getElementById("services");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore All Services
            <ArrowRight className="size-4" />
          </Button>
        </div>

        {/* SERVICE AREAS IN BADGE AND LINK FORM */}
        <div className="mt-8 pt-6">
          <div className="mx-auto mb-6 h-px w-16 bg-amber-400/70" />
          <p className="text-xs font-bold uppercase tracking-widest text-amber-200 mb-3.5 drop-shadow-md">
            Serving Homeowners Across:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
            {serviceAreasList.map((area, idx) => (
              <a
                key={idx}
                href="tel:4125368229"
                title={`Contact Envision Carpentry for services in ${area}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-stone-950/65 hover:bg-[var(--amber)] hover:border-transparent px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white hover:text-stone-950 transition-all duration-200 shadow-xs hover:shadow-md hover:scale-105"
              >
                <MapPin className="size-3 text-[var(--amber)] group-hover:text-stone-950 transition-colors" />
                <span>{area}</span>
                <ArrowRight className="size-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>

          <p className="mt-3.5 text-xs text-white/90 font-medium drop-shadow-md">
            Also serving surrounding Allegheny, Beaver, Butler, and Westmoreland County communities.
          </p>
        </div>
      </div>
    </section>
  );
}
