import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CommonBanner } from "@/components/common-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
  Phone,
  ArrowRight,
  Hammer,
  HardHat,
  Home as HomeIcon,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Recent Work & Portfolio | Envision Carpentry LLC - Pittsburgh, PA",
  description:
    "View completed residential carpentry, two-story timber decks, crown molding, built-ins, and full-home remodeling projects by Envision Carpentry LLC in Pittsburgh, PA.",
};

const projectGallery = [
  {
    title: "Hillside Two-Story Cedar Timber Deck",
    category: "Structural Carpentry",
    location: "Squirrel Hill, PA",
    year: "2024",
    image: "/api/images/deck-framing.jpg",
    specs: [
      "Custom load-bearing post system on steep slope grade",
      "Engineered structural sway bracing complying with PA code",
      "Heavy timber joist layout with hidden fastener decking",
      "Integrated matching cedar perimeter privacy rail",
    ],
  },
  {
    title: "Hand-Coped Historic Crown Trim & Wainscot",
    category: "Finish Detailing",
    location: "Shadyside, PA",
    year: "2024",
    image: "/api/images/trim-craft.jpg",
    specs: [
      "Custom 3-piece crown molding coped to 1912 plaster walls",
      "Wainscoting paneling with hand-beveled architectural stiles",
      "Micro-plane scribing to compensate for out-of-square corners",
      "Ultra-clean daily HEPA dust containment in formal living area",
    ],
  },
  {
    title: "Floor-to-Ceiling White Oak Built-In Library",
    category: "Custom Woodwork",
    location: "McKeesport, PA",
    year: "2024",
    image: "/api/images/custom-woodwork.jpg",
    specs: [
      "Grain-matched select grade white oak bookcases & mantel",
      "Concealed internal wire chases for TV & audio components",
      "Soft-close lower storage cabinetry with flush-mount pulls",
      "Factory-grade satin clear coat highlighting natural timber tone",
    ],
  },
  {
    title: "Open-Concept Kitchen & Beam Installation",
    category: "Whole-Home Remodel",
    location: "Mt. Lebanon, PA",
    year: "2025",
    image: "/api/images/service-remodel.jpg",
    specs: [
      "Structural removal of 18-foot load-bearing partition wall",
      "Recessed flush steel-reinforced beam engineering",
      "Custom kitchen island with butcher block and storage casework",
      "Seamless hardwood floor interlacing into open dining area",
    ],
  },
  {
    title: "Historic Farmhouse Entry Doors & Trim Casing",
    category: "Doors & Trim",
    location: "Butler, PA",
    year: "2025",
    image: "/api/images/service-doors.jpg",
    specs: [
      "Re-squaring settled 70-year-old door frames for airtight seal",
      "Custom-milled vintage casing profile duplication",
      "High-performance thermal weatherstripping & multipoint hardware",
      "Preserved authentic Pennsylvania exterior architecture",
    ],
  },
  {
    title: "Architectural Coffered Dining Room Ceiling",
    category: "Specialty Carpentry",
    location: "Fox Chapel, PA",
    year: "2024",
    image: "/api/images/service-carpentry.jpg",
    specs: [
      "Laser-leveled symmetrical beam grid on 22-foot ceiling",
      "Interior crown detailing recessed in every coffered bay",
      "Concealed low-voltage ambient perimeter lighting channels",
      "High-end paint-grade smooth finish with razor-crisp lines",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-[var(--amber)] selection:text-stone-950">
      <Header />

      <main>
        {/* Reusable Common Hero Banner */}
        <CommonBanner
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Recent Work" },
          ]}
          badgeText="Verified Portfolio • 40+ Years of Craftsmanship • PA License #184291"
          badgeIcon={<Sparkles className="size-3.5 text-[var(--amber)]" />}
          title="Master Workmanship &"
          titleHighlight="Featured Project Portfolio"
          description="Every project represents meticulous attention to wood science, structural stability, and architectural aesthetics. Browse recent residential builds across Pittsburgh and Western Pennsylvania."
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
              value: "500+ Projects",
              label: "Completed Across Western PA",
              sublabel: "Homes of every era & style",
              color: "text-[var(--amber)]",
            },
            {
              value: "100%",
              label: "Master Craftsmen On Site",
              sublabel: "Holding the tools every day",
              color: "text-white",
            },
            {
              value: "40+ Years",
              label: "Trade Legacy",
              sublabel: "Continuous building mastery",
              color: "text-amber-400",
            },
            {
              value: "5.0 ★",
              label: "Client Rating",
              sublabel: "Verified homeowner reviews",
              color: "text-emerald-400",
            },
          ]}
        />

        {/* Gallery Grid */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-[#fdfbf9] via-[#f7f1e7] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectGallery.map((project, idx) => (
                <Card
                  key={idx}
                  className="rounded-3xl border border-stone-200/90 dark:border-stone-800 bg-card shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden p-0 flex flex-col justify-between group"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-stone-950">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-950/85 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="size-3" />
                        {project.location} • {project.year}
                      </p>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                        Project Specifications:
                      </h4>
                      <ul className="space-y-2 text-xs text-foreground font-medium">
                        {project.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <a href="/#quote" className="w-full">
                        <Button variant="heroPrimary" size="sm" className="w-full font-bold text-xs bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950">
                          Request Quote for Similar Build
                          <ArrowRight className="size-3 ml-1" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-[#261309] via-[#35190c] to-[#261309] text-white text-center">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Have a Project You Want Built to Last?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
              Contact Envision Carpentry today for an in-person walkthrough and an itemized written estimate.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:4125368229">
                <Button variant="amber" size="xl" className="font-bold text-stone-950 h-13 px-8 text-base rounded-2xl shadow-xl">
                  <Phone className="size-5" />
                  Call (412) 536-8229
                </Button>
              </a>
              <a href="/#quote">
                <Button variant="heroOutline" size="xl" className="font-semibold text-white border-white/40 h-13 px-8 text-base rounded-2xl">
                  Request Free Estimate
                  <ArrowRight className="size-5 ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
