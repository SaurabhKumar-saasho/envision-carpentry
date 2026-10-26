"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

export function QuickAnswerSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#fbf8f3] via-[#f5eee3] to-[#ede3d3] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 border-b border-border py-9 overflow-hidden">
      {/* Soft linear gradient lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-stone-200/40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <Card className="rounded-2xl border-stone-200/90 dark:border-stone-800 bg-gradient-to-br from-white via-[#faf8f4] to-[#f3ecdf] dark:from-stone-900 dark:via-stone-900/95 dark:to-stone-950 p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle top amber accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--wood)] via-[var(--amber)] to-[var(--wood)]" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--wood)] dark:text-[var(--amber)] mb-2">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              Quick Answer • Verified Carpentry & Remodeling Firm
            </div>
            <p className="text-base sm:text-lg text-foreground font-semibold leading-relaxed">
              <strong>Envision Carpentry LLC</strong> is a premier Pittsburgh carpentry and remodeling firm with more than 40 years of combined trade craftsmanship.
            </p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Our skilled team handles crown molding and trim, decks and railings, door and window installation, structural framing, and full remodeling projects for homeowners across Pittsburgh and the surrounding area.
            </p>
          </div>
          <a href="tel:4125368229" className="shrink-0">
            <Button variant="amber" size="lg" className="font-bold text-stone-950 shadow-md hover:scale-[1.02] transition-transform">
              <Phone className="size-4" />
              Speak With Our Team
            </Button>
          </a>
        </Card>
      </div>
    </section>
  );
}
