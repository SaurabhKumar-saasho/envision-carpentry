"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Hammer,
  Phone,
  CheckCircle2,
  Home as HomeIcon,
  Layers,
  Droplets,
  Warehouse,
  DoorOpen,
  Paintbrush,
  HardHat,
  ArrowRight,
} from "lucide-react";

export const servicesData = [
  {
    title: "Remodeling & Renovations",
    desc: "Full kitchen & bathroom remodeling, custom room makeovers, and seamless home additions built to last.",
    icon: HomeIcon,
    image: "/api/images/service-remodel.jpg",
    tag: "Popular",
  },
  {
    title: "Custom Carpentry / Wood Works",
    desc: "Bespoke built-ins, architectural crown molding & trim, framing, and specialty wood features.",
    icon: Hammer,
    image: "/api/images/service-carpentry.jpg",
    tag: "Specialty",
  },
  {
    title: "Flooring Installation & Repair",
    desc: "Precision hardwood, luxury vinyl plank, laminate, and custom tile flooring upgrades and repairs.",
    icon: Layers,
    image: "/api/images/service-flooring.jpg",
  },
  {
    title: "Damage Restoration",
    desc: "Thorough restoration and structural repair from water, storm damage, moisture, or general property wear.",
    icon: Droplets,
    image: "/api/images/service-restore.jpg",
  },
  {
    title: "Garage Construction & Renovation",
    desc: "Building new detached/attached garages, interior workshop build-outs, and functional living space conversions.",
    icon: Warehouse,
    image: "/api/images/service-garage.jpg",
  },
  {
    title: "Windows & Doors",
    desc: "Energy-efficient window replacements, custom exterior entry doors, and precision interior door installations.",
    icon: DoorOpen,
    image: "/api/images/service-doors.jpg",
  },
  {
    title: "Painting Services",
    desc: "High-grade interior and exterior professional painting with thorough prep work and crisp lines.",
    icon: Paintbrush,
    image: "/api/images/service-paint.jpg",
  },
  {
    title: "Custom Home Construction & Demolition",
    desc: "Safe controlled structural demolition, clean rebuilds, and ground-up residential custom carpentry.",
    icon: HardHat,
    image: "/api/images/service-framing.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#916344] via-[#805539] to-[#6e4933] text-white relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-black/[0.08] pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -left-64 top-12 size-[48rem] rounded-full pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle, transparent 0 40px, rgba(255,239,216,0.24) 41px 42px, transparent 43px 80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-72 -bottom-16 size-[54rem] rounded-full pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle, transparent 0 44px, rgba(255,239,216,0.24) 45px 46px, transparent 47px 88px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Full-Width Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-6 border-b border-white/15">
          {/* Left Column: Badge & Main Title */}
          <div className="max-w-2xl">
            <Badge variant="woodDark" className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider gap-2">
              <Hammer className="size-3.5 text-amber-300" />
              What We Do • Pittsburgh & Surrounding Areas
            </Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Pittsburgh Carpentry & <br className="hidden sm:inline" />
              Remodeling Services
            </h2>
          </div>

          {/* Right Column: Narrative, Trust Markers & Quick Call */}
          <div className="max-w-xl flex flex-col justify-between gap-4">
            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
              From fine architectural trim and custom millwork to structural framing and whole-home renovations, Envision Carpentry delivers every project with four decades of seasoned trade knowledge.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a href="tel:4125368229">
                <Button
                  variant="heroPrimary"
                  size="lg"
                  className="font-bold text-stone-950 bg-white hover:bg-amber-50 h-11 px-6 shadow-md rounded-xl"
                >
                  <Phone className="size-4 text-[var(--wood)] mr-1.5" />
                  Call (412) 536-8229
                </Button>
              </a>
              <div className="flex items-center gap-2.5 text-xs text-white/80 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-[var(--amber)]" />
                  Master craftsmen on every project
                </span>
                <span>•</span>
                <span>Free project quotes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of 8 Services using Shadcn Card and Badge */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((item, index) => {
            const IconComp = item.icon;
            return (
              <Card
                key={index}
                className="group rounded-2xl bg-white text-stone-900 shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border-stone-200/80 p-0"
              >
                {/* Card Image with Hover Zoom */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Badge (if present) */}
                  {item.tag && (
                    <Badge variant="amber" className="absolute top-3 left-3 shadow-md bg-[var(--amber)] text-stone-950">
                      {item.tag}
                    </Badge>
                  )}

                  <div className="absolute bottom-3 left-3 size-9 rounded-lg bg-stone-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-[var(--amber)] shadow-md">
                    <IconComp className="size-4.5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-[var(--wood)] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("quote");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-xs font-bold text-[var(--wood)] hover:text-amber-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                    <a
                      href="tel:4125368229"
                      className="size-7 rounded-full bg-stone-100 hover:bg-amber-100 flex items-center justify-center text-stone-700 hover:text-[var(--wood)] transition-colors"
                      title="Inquire about this service"
                    >
                      <Phone className="size-3.5" />
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
