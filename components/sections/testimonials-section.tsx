"use client";

import React, { useState } from "react";
import {
  Star,
  Quote,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Hammer,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Testimonial {
  name: string;
  location: string;
  project: string;
  rating: number;
  year: string;
  highlight: string;
  quote: string;
  image: string;
  tag: string;
  initials: string;
  scope: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "The Henderson Family",
    location: "Squirrel Hill, Pittsburgh, PA",
    project: "Two-Story Cedar Deck & Structural Framing",
    rating: 5,
    year: "2024",
    highlight: "Mastered a difficult hillside grade with heavy timber framing built to code",
    quote:
      "We had two other contractors tell us our hillside slope in Squirrel Hill was too complicated. Envision Carpentry evaluated the yard, calculated the exact load-bearing post system required by PA code, and delivered the most rock-solid two-story deck we have ever stepped on. Seeing master craftsmen on site every single morning gave us total peace of mind.",
    image: "/api/images/deck-framing.jpg",
    tag: "Structural Carpentry",
    initials: "HF",
    scope: "Heavy Timber Post & Beam Deck",
  },
  {
    name: "David & Sarah Miller",
    location: "Shadyside, Pittsburgh, PA",
    project: "Historic Crown Molding & Custom Wainscoting",
    rating: 5,
    year: "2024",
    highlight: "Hand-coped corners with micro-plane accuracy on 1912 settling plaster walls",
    quote:
      "Our 1912 Victorian had settling walls and out-of-square corners that terrified other trim guys. Envision Carpentry coped and fitted every single crown molding joint with micro-plane precision. No gaps, no sloppy caulk to hide bad cuts. They are authentic craftsmen who respect historic architecture, and the dust containment in our living room was spotless every evening.",
    image: "/api/images/trim-craft.jpg",
    tag: "Finish Detailing",
    initials: "DM",
    scope: "Architectural Trim & Wainscot",
  },
  {
    name: "Michael R.",
    location: "Mt. Lebanon, PA",
    project: "Kitchen Remodel & Load-Bearing Wall Removal",
    rating: 5,
    year: "2025",
    highlight: "Seamless open-concept transition with steel-reinforced structural beam",
    quote:
      "What impressed me most was Envision Carpentry's upfront honesty. Their quote was detailed down to every fastener and 2x10 joist, and the final invoice didn't deviate by a single dollar. They opened up our kitchen and living room seamlessly with a recessed structural beam. If you want a firm that takes genuine pride in their craft, Envision is the only contractor you need to call.",
    image: "/api/images/service-remodel.jpg",
    tag: "Whole-Home Remodel",
    initials: "MR",
    scope: "Structural Wall Removal & Kitchen",
  },
  {
    name: "Robert & Elena Kowalski",
    location: "McKeesport, PA",
    project: "Custom Built-In Bookcases & Fireplace Mantel",
    rating: 5,
    year: "2024",
    highlight: "Flawless white oak grain matching with concealed wire chase integration",
    quote:
      "Envision Carpentry designed and built custom floor-to-ceiling white oak bookcases flanking our stone fireplace. The attention to grain matching, hidden cable channels, and soft-close cabinetry was beyond what we imagined. Their team is friendly, punctual, and treats your home like their own. Truly rare quality in Pittsburgh remodeling.",
    image: "/api/images/custom-woodwork.jpg",
    tag: "Custom Woodwork",
    initials: "RK",
    scope: "Floor-to-Ceiling Built-Ins",
  },
  {
    name: "Patricia Gallagher",
    location: "Butler, PA",
    project: "Whole-Home Exterior Doors, Windows & Trim",
    rating: 5,
    year: "2025",
    highlight: "Re-squared out-of-plumb frames and custom-milled vintage casing profiles",
    quote:
      "Replacing exterior doors and historic casing in an older Pennsylvania farmhouse is notoriously tricky. Envision Carpentry squared up out-of-plumb frames effortlessly. The weather sealing is airtight, and the custom trim profiles match our 70-year-old moldings perfectly. They completed everything on time and on budget.",
    image: "/api/images/service-doors.jpg",
    tag: "Doors & Trim",
    initials: "PG",
    scope: "Exterior Entries & Casings",
  },
];

export function TestimonialsSection() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const current = testimonialsData[testimonialIdx];

  const handleNext = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const scrollToQuote = () => {
    const el = document.getElementById("quote");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-[#fbf8f4] via-[#f5eee4] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900/50 dark:to-stone-950 border-b border-border relative overflow-hidden"
    >
      {/* Smooth linear lighting overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-transparent to-amber-500/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-200/35 via-transparent to-stone-300/30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-border/80">
          <div className="max-w-2xl">
            <Badge variant="wood" className="gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              <Star className="size-3.5 text-amber-500 fill-amber-500" />
              Verified Pittsburgh Reviews • 40+ Years of Trust
            </Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              What Western PA Homeowners <br className="hidden sm:inline" />
              Say About Envision Carpentry
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every review represents a real local home and an authentic relationship. You won&apos;t find sales promises here—just honest craftsmanship, personal accountability, and lasting quality.
            </p>
          </div>

          {/* Trust Metrics Badge Card */}
          <Card className="flex flex-wrap sm:flex-nowrap items-center gap-4 p-4 sm:p-5 rounded-2xl shadow-sm border-border bg-card">
            <div className="text-center sm:text-left pr-4 border-r border-border/80">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="mt-1 text-xl font-extrabold text-foreground">5.0 / 5.0</p>
              <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Perfect Rating</p>
            </div>

            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-semibold text-foreground">100% In-Person Estimates Honored</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-semibold text-foreground">Master Craftsmen on Every Project</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-semibold text-foreground">Zero Subcontractor Markups</span>
              </div>
            </div>
          </Card>
        </div>

        {/* The Main Testimonial Slider Card */}
        <div className="mt-12">
          <Card className="relative rounded-3xl border border-stone-200/90 dark:border-stone-800 bg-card shadow-xl overflow-hidden transition-all duration-300">
            {/* Top Bar: Progress counter & Next/Prev Controls */}
            <div className="px-6 sm:px-10 py-5 bg-stone-100/70 dark:bg-stone-900/70 border-b border-border flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--wood)] dark:text-[var(--amber)]">
                  Review {testimonialIdx + 1} of {testimonialsData.length}
                </span>
                <div className="h-1.5 w-24 sm:w-32 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--wood)] dark:bg-[var(--amber)] transition-all duration-300 rounded-full"
                    style={{ width: `${((testimonialIdx + 1) / testimonialsData.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  className="size-10 rounded-full hover:bg-[var(--wood)] hover:text-white dark:hover:bg-[var(--amber)] dark:hover:text-stone-950 cursor-pointer shadow-xs active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="size-10 rounded-full hover:bg-[var(--wood)] hover:text-white dark:hover:bg-[var(--amber)] dark:hover:text-stone-950 cursor-pointer shadow-xs active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="size-5" />
                </Button>
              </div>
            </div>

            {/* Slider Card Body: Quote & Project Photo */}
            <CardContent className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (7/12): Review Details & Quote */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                {/* Rating Stars & Year */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="size-5 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                      5.0 Verified Project
                    </span>
                  </div>

                  <Badge variant="secondary" className="px-3 py-1 text-[11px] font-semibold text-muted-foreground border-border">
                    Project Year: {current.year}
                  </Badge>
                </div>

                {/* Decorative Quote Mark & Main Text */}
                <div className="relative">
                  <Quote className="absolute -top-4 -left-3 size-12 text-amber-500/15 pointer-events-none rotate-180" />
                  <blockquote className="relative z-10 text-lg sm:text-xl lg:text-2xl font-serif font-medium text-foreground leading-relaxed italic">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Craftsmanship Highlight Pill */}
                <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 text-xs text-stone-900 dark:text-amber-200">
                  <CheckCircle2 className="size-4 text-[var(--amber)] shrink-0" />
                  <span>
                    <strong className="font-bold">Craftsmanship Highlight:</strong> {current.highlight}
                  </span>
                </div>

                {/* Client Metadata & Avatar */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar with Monogram */}
                    <div className="size-12 rounded-full bg-[var(--wood)] text-white font-bold text-sm flex items-center justify-center shadow-md border-2 border-white dark:border-stone-800">
                      {current.initials}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-foreground">
                          {current.name}
                        </h4>
                        <Badge variant="emerald" className="gap-1 text-[10px] font-bold py-0.5">
                          <ShieldCheck className="size-3" />
                          Verified Client
                        </Badge>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                        <MapPin className="size-3.5 text-[var(--amber)]" />
                        <span>{current.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Scope Tag */}
                  <div className="text-left sm:text-right">
                    <Badge variant="wood" className="text-xs font-bold px-3 py-1">
                      {current.scope}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Right Column (5/12): Authentic Project Photography */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-lg group bg-stone-900 aspect-4/3 sm:aspect-16/10 lg:aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.image}
                    alt={current.project}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Floating Project Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-950/85 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                      <Hammer className="size-3 text-[var(--amber)]" />
                      {current.tag}
                    </span>
                  </div>

                  {/* Project Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                      Actual Work Delivered
                    </p>
                    <h4 className="mt-1 text-sm sm:text-base font-bold text-white leading-snug">
                      {current.project}
                    </h4>
                    <p className="text-xs text-white/80 mt-0.5">
                      {current.location}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Slider Bottom Dot Pagination */}
            <div className="py-4 bg-stone-100/50 dark:bg-stone-900/50 border-t border-border flex items-center justify-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setTestimonialIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    testimonialIdx === idx
                      ? "w-8 bg-[var(--wood)] dark:bg-[var(--amber)]"
                      : "w-2.5 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </Card>

          {/* Quick Clickable Thumbnails Row */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {testimonialsData.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setTestimonialIdx(idx)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  testimonialIdx === idx
                    ? "border-[var(--wood)] dark:border-[var(--amber)] bg-card shadow-md ring-2 ring-[var(--wood)]/20 dark:ring-[var(--amber)]/20 -translate-y-0.5"
                    : "border-border bg-card/60 hover:bg-card hover:border-stone-400 opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-foreground truncate">{item.name}</span>
                  <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-0.5">
                    <Star className="size-2.5 fill-amber-500" />
                    5.0
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground truncate mt-0.5">{item.location}</p>
                <p className="text-[11px] font-medium text-[var(--wood)] dark:text-[var(--amber)] truncate mt-1">
                  {item.scope}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
