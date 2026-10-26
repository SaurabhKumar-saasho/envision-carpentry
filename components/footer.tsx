"use client";

import React from "react";
import { EnvisionLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Phone,
  ArrowRight,
  MapPin,
  Hammer,
  ShieldCheck,
  Award,
  UserCheck,
  Clock,
  CheckCircle2,
  ChevronUp,
} from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number | string>(2025);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerServices = [
    "Remodeling & Renovations",
    "Custom Carpentry & Woodworks",
    "Structural Framing & Decks",
    "Windows & Custom Doors",
    "Finish Trim & Crown Molding",
    "Hardwood & Flooring",
    "Garage Construction",
    "Damage & Restoration",
  ];

  const footerAreas = [
    "Pittsburgh, PA",
    "McKeesport, PA",
    "Butler, PA",
    "Aliquippa, PA",
    "Beaver Falls, PA",
    "Clairton, PA",
    "Duquesne, PA",
  ];

  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-white relative overflow-hidden">
      {/* Subtle warm amber ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--wood)]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Quick Call-to-Action Strip */}
      <div className="border-b border-stone-800/80 bg-stone-900/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="size-12 rounded-2xl bg-[var(--amber)]/15 border border-[var(--amber)]/30 flex items-center justify-center text-[var(--amber)] shrink-0 hidden sm:flex">
              <Hammer className="size-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Have a residential carpentry or remodeling project in mind?
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-0.5">
                Call our team directly for honest guidance and a free in-person estimate.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a href="tel:4125368229">
              <Button
                variant="amber"
                size="lg"
                className="font-bold text-stone-950 shadow-md h-11 px-6 text-sm"
              >
                <Phone className="size-4 mr-1.5" />
                Call (412) 536-8229
              </Button>
            </a>
            <Button
              variant="heroOutline"
              size="lg"
              className="font-semibold text-white border-stone-700 hover:bg-stone-800 h-11 px-6 text-sm"
              onClick={() => {
                const el = document.getElementById("quote");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#quote";
                }
              }}
            >
              Request Estimate
              <ArrowRight className="size-4 ml-1.5 text-[var(--amber)]" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main 4-Column Directory */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1 (5/12): Brand Overview & Heritage */}
          <div className="lg:col-span-5 space-y-6">
            <a href="/" className="inline-block transition-transform hover:scale-102">
              <EnvisionLogo size="md" className="h-16 w-auto" />
            </a>

            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              Envision Carpentry LLC is a premier residential carpentry and remodeling firm. Built on over 40 years of trade craftsmanship, we specialize in whole-home remodeling, structural decks, additions, and architectural crown molding.
            </p>

            <div className="pt-1">
              <a
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--amber)] hover:underline"
              >
                Learn more about our firm &amp; standards →
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-800 bg-stone-900 px-3 py-1 text-xs font-semibold text-stone-300">
                <Award className="size-3 text-[var(--amber)]" />
                Est. 1980 • 40+ Years
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-800 bg-stone-900 px-3 py-1 text-xs font-semibold text-stone-300">
                <ShieldCheck className="size-3 text-emerald-400" />
                Licensed & Insured in PA
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-800 bg-stone-900 px-3 py-1 text-xs font-semibold text-stone-300">
                <UserCheck className="size-3 text-[var(--amber)]" />
                Master Craftsmen On Every Project
              </span>
            </div>
          </div>

          {/* Column 2 (2/12): Main Navigation & Services */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="/about" className="hover:text-white hover:underline transition-colors block">
                  About Our Firm
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white hover:underline transition-colors block">
                  Carpentry Services
                </a>
              </li>
              <li>
                <a href="/work" className="hover:text-white hover:underline transition-colors block">
                  Recent Work &amp; Portfolio
                </a>
              </li>

              <li>
                <a href="/service-areas" className="hover:text-white hover:underline transition-colors block">
                  Service Areas &amp; Map
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white hover:underline transition-colors block font-semibold text-[var(--amber)]">
                  Contact &amp; Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 (2/12): Core Service Areas */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Service Areas
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              {footerAreas.map((area, idx) => (
                <li key={idx}>
                  <a
                    href="/service-areas"
                    title={`Carpentry in ${area}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <MapPin className="size-3 text-stone-600 group-hover:text-[var(--amber)] transition-colors shrink-0" />
                    <span>{area}</span>
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/service-areas"
                  className="text-xs font-bold text-[var(--amber)] hover:underline inline-block"
                >
                  View All Regional Areas →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 (3/12): Direct Master Access */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Direct Contact
            </p>

            <div className="rounded-2xl border border-stone-800 bg-stone-900/80 p-5 space-y-3.5 text-xs">
              <div>
                <p className="text-stone-400 uppercase tracking-wider text-[10px] font-bold">Direct Firm Inquiries</p>
                <a
                  href="tel:4125368229"
                  className="text-lg font-bold text-white hover:text-amber-300 transition-colors block mt-0.5"
                >
                  (412) 536-8229
                </a>
                <p className="text-stone-400 text-[11px] mt-0.5">Envision Carpentry LLC • Pittsburgh, PA</p>
              </div>

              <div className="pt-3 border-t border-stone-800 text-stone-300 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Clock className="size-3.5 text-[var(--amber)] shrink-0" />
                  <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-[var(--amber)] shrink-0" />
                  <span>Pittsburgh, PA & Surrounding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  <span>Free In-Person Estimates</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-stone-500 leading-relaxed">
              General Carpentry & Remodeling Contractor. All inquiries received and answered directly by the Envision Carpentry team.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Attribution Bar */}
      <div className="border-t border-stone-800/80 bg-stone-950 py-6 text-xs text-stone-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} Envision Carpentry LLC. All rights reserved. Registered & Insured in Pennsylvania.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-stone-400 font-medium">Envision Carpentry LLC • PA License #184291</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ChevronUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
