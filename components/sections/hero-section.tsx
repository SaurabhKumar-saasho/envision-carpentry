"use client";

import React from "react";
import {
  Phone,
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";

export function HeroSection() {
  const scrollToQuote = () => {
    const el = document.getElementById("quote");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    const el = document.getElementById("services");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden border-b border-stone-800 min-h-[680px] sm:min-h-[740px] lg:min-h-[820px] xl:min-h-[880px] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 bg-[#261309]"
    >
      {/* 
        ========================================================================
        FULL-BLEED BACKGROUND PHOTOGRAPHY & HORIZONTAL BROWN FADE GRADIENT
        ========================================================================
      */}
      <div className="absolute inset-0 z-0">
        {/* Full-width On-site Craftsmanship Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-img.jpg"
          alt="Envision Carpentry - Pittsburgh's Premier Carpentry & Remodeling Firm on-site"
          className="w-full h-full object-cover object-[center_right] lg:object-[68%_center]"
        />

        {/* 
          Left-to-Right Warm Saddle / Chestnut Brown Fade Gradient 
          Matches the reference design: Solid rich brown covering the text area 
          on the left, smoothly dissolving into the photography on the right.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#32170b] via-[#3a1b0d] via-[#431f10]/98 via-[#4b2312]/85 via-[#532714]/40 to-transparent pointer-events-none" />

        {/* Top subtle fade gradient for navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

        {/* Bottom subtle grounding vignette */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 
        ========================================================================
        MIDDLE: HERO CONTENT & FLOATING CARDS
        ========================================================================
      */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 flex-1 flex flex-col justify-center py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: Main Typography & CTAs (Exact match to reference mockup) */}
          <div className="lg:col-span-7 xl:col-span-7 max-w-2xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#5c2d16]/80 px-4 py-1.5 backdrop-blur-xs shadow-sm mb-5">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-200/95">
                Pittsburgh Carpentry & Remodeling
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-bold tracking-tight text-white leading-[1.04]">
              <span className="block">Carpentry &amp;</span>
              <span className="block">Remodeling</span>
              <span className="mt-3 block font-serif text-2xl sm:text-3xl md:text-4xl font-normal italic leading-tight text-[#fdeed9]">
                for Pittsburgh Homes
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 sm:mt-6 max-w-lg text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal">
              From custom woodwork and flooring to doors, restoration, and full kitchen or bath remodels, get skilled help for your home.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              {/* White View Our Work Button */}
              <button
                type="button"
                onClick={scrollToWork}
                className="group inline-flex items-center gap-2 rounded-full bg-white text-stone-950 font-bold px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base shadow-xl hover:bg-stone-100 transition-all cursor-pointer active:scale-95"
              >
                <Sparkles className="size-4 text-amber-500 fill-amber-500" />
                <span>View Our Work</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Golden Amber Request a Free Estimate Button */}
              <button
                type="button"
                onClick={scrollToQuote}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--amber)] hover:bg-[var(--amber-hover)] text-stone-950 font-bold px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base shadow-xl transition-all cursor-pointer active:scale-95"
              >
                <Phone className="size-4 fill-stone-950 text-stone-950" />
                <span>Request a Free Estimate</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Floating Master Craftsmanship Glassmorphic Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-end lg:pt-28">
            <div className="w-full max-w-md rounded-2xl border border-amber-500/30 bg-stone-950/80 backdrop-blur-md p-5 sm:p-6 shadow-2xl text-white relative">
              <div className="text-[10px] sm:text-xs font-bold tracking-widest text-[var(--amber)] uppercase">
                Master Craftsmanship
              </div>
              <blockquote className="mt-2 text-sm sm:text-base font-serif italic text-white/95 leading-snug">
                &ldquo;Our dedicated team oversees every cut, joint, and build to ensure lasting structural integrity.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs sm:text-sm text-stone-300 font-medium">
                — Envision Carpentry LLC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        BOTTOM-LEFT NOTCH CARD: 40+ Years | Local | 100% Accountability
        (Exact curved ivory bottom-left notch container from reference image)
        ========================================================================
      */}
      <div className="relative z-20 w-fit">
        <div className="rounded-tr-3xl sm:rounded-tr-4xl bg-[#faf7f2] dark:bg-stone-900 text-stone-900 dark:text-stone-100 px-6 sm:px-10 py-5 sm:py-6 shadow-2xl border-t-2 border-r-2 border-stone-200/90 dark:border-stone-800 flex items-center gap-5 sm:gap-8">
          {/* Item 1: 40+ Years */}
          <div className="flex items-center gap-3">
            <div className="size-10 sm:size-11 rounded-full bg-[#733e1e]/10 flex items-center justify-center text-[#733e1e] dark:text-[var(--amber)] shrink-0">
              <Users className="size-5 sm:size-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
                40+ Years
              </div>
              <div className="text-[11px] sm:text-xs text-stone-600 dark:text-stone-400 font-medium whitespace-nowrap">
                Hands-On Experience
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-9 w-px bg-stone-300 dark:bg-stone-700" />

          {/* Item 2: Local Pittsburgh Pro */}
          <div className="flex items-center gap-3">
            <div className="size-10 sm:size-11 rounded-full bg-[#733e1e]/10 flex items-center justify-center text-[#733e1e] dark:text-[var(--amber)] shrink-0">
              <ShieldCheck className="size-5 sm:size-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
                Local
              </div>
              <div className="text-[11px] sm:text-xs text-stone-600 dark:text-stone-400 font-medium whitespace-nowrap">
                Pittsburgh Firm
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-9 w-px bg-stone-300 dark:bg-stone-700" />

          {/* Item 3: 100% Accountability */}
          <div className="flex items-center gap-3">
            <div className="size-10 sm:size-11 rounded-full bg-[#733e1e]/10 flex items-center justify-center text-[#733e1e] dark:text-[var(--amber)] shrink-0">
              <ThumbsUp className="size-5 sm:size-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
                100%
              </div>
              <div className="text-[11px] sm:text-xs text-stone-600 dark:text-stone-400 font-medium whitespace-nowrap">
                Accountability
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
