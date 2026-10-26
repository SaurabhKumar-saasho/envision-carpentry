import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CommonBanner } from "@/components/common-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Home as HomeIcon,
  Hammer,
  Layers,
  Droplets,
  Warehouse,
  DoorOpen,
  Paintbrush,
  HardHat,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Carpentry & Remodeling Services | Envision Carpentry LLC - Pittsburgh, PA",
  description:
    "Explore our full-spectrum carpentry, architectural trim, structural framing, decks, and whole-home remodeling services in Pittsburgh and Western Pennsylvania. PA License #184291.",
};

const fullServicesList = [
  {
    id: "remodeling",
    title: "Whole-Home Remodeling & Renovations",
    subtitle: "Kitchens, Bathrooms & Open-Concept Transformations",
    desc: "Complete interior transformations designed to maximize both functionality and architectural beauty. From opening up cramped floor plans with recessed load-bearing beams to high-end custom kitchen cabinetry and spa-inspired master bathrooms.",
    icon: HomeIcon,
    image: "/api/images/service-remodel.jpg",
    features: [
      "Load-bearing wall removal & steel-reinforced beam installation",
      "Custom kitchen cabinetry, island build-outs & stone surrounds",
      "Master bathroom renovations & moisture-sealed tile substrates",
      "Seamless room additions engineered to match original framing",
    ],
    tag: "Most Popular",
  },
  {
    id: "carpentry",
    title: "Architectural Millwork & Custom Wood Works",
    subtitle: "Crown Molding, Built-Ins & Bespoke Joinery",
    desc: "Fine finish carpentry is our hallmark. We hand-cope every corner joint, plane out irregular surfaces in older homes, and construct bespoke built-ins that look like they were part of the home's original blueprint.",
    icon: Hammer,
    image: "/api/images/custom-woodwork.jpg",
    features: [
      "Multi-piece architectural crown molding & hand-coped corners",
      "Floor-to-ceiling custom bookcases, library shelving & window seats",
      "Custom fireplace mantels, hearth surrounds & wainscoting panels",
      "Concealed wire management channels & integrated LED accent channels",
    ],
    tag: "Master Specialty",
  },
  {
    id: "framing",
    title: "Structural Timber Framing & Decks",
    subtitle: "Two-Story Decks, Additions & Hillside Grade Engineering",
    desc: "Heavy timber carpentry built to endure Pennsylvania's climate extremes. We engineer complex multi-story decks on steep Allegheny County slopes, adhering strictly to PA structural codes and load formulas.",
    icon: HardHat,
    image: "/api/images/deck-framing.jpg",
    features: [
      "Two-story cedar, pressure-treated & composite deck systems",
      "Deep concrete pier footings & engineered hillside post bracing",
      "Structural headers, subfloors, ceiling joists & roof trusses",
      "Code-compliant safety railings, stair systems & ADA ramps",
    ],
    tag: "Heavy Structural",
  },
  {
    id: "flooring",
    title: "Hardwood & Luxury Flooring Installation",
    subtitle: "Solid Oak, Engineered Hardwood & Subfloor Leveling",
    desc: "A beautiful floor is only as good as the subfloor underneath. We inspect joist deflection, eliminate squeaks, and install hardwood, luxury vinyl plank (LVP), and engineered flooring with tight border thresholds.",
    icon: Layers,
    image: "/api/images/service-flooring.jpg",
    features: [
      "Site-finished and pre-finished solid hardwood installation",
      "Heavy-duty waterproof luxury vinyl plank (LVP) systems",
      "Subfloor repair, joist sistering & laser self-leveling",
      "Custom stair treads, risers, baseboards & quarter-round trim",
    ],
  },
  {
    id: "doors-windows",
    title: "Precision Windows & Architectural Doors",
    subtitle: "Exterior Entries, French Doors & Historical Casings",
    desc: "Older Pennsylvania homes are notoriously out-of-plumb. We re-square rough openings, insulate perimeter voids, and install energy-efficient windows and heirloom exterior entry doors that shut with bank-vault precision.",
    icon: DoorOpen,
    image: "/api/images/service-doors.jpg",
    features: [
      "Custom exterior solid wood, fiberglass & steel security entries",
      "Historical casing replication to match 100-year-old moldings",
      "Airtight flashing, expanding thermal foam & weatherstripping",
      "Interior solid-core doors, pocket doors & sliding barn doors",
    ],
  },
  {
    id: "restoration",
    title: "Damage Restoration & Structural Remediation",
    subtitle: "Water, Moisture, Storm Wear & Sagging Joists",
    desc: "Rapid, thorough structural restoration when unexpected damage threatens your home's integrity. We remove rotten timbers, sister joists, rebuild water-damaged framing, and restore finishes to pristine condition.",
    icon: Droplets,
    image: "/api/images/service-restore.jpg",
    features: [
      "Structural lumber rot removal & heavy-duty timber reinforcement",
      "Drywall, plaster & subfloor water-damage remediation",
      "Moisture-barrier installation & preventative framing treatment",
      "Detailed repair documentation for homeowner insurance claims",
    ],
  },
  {
    id: "garages",
    title: "Garage Construction & Workshop Conversions",
    subtitle: "Detached Builds, Attached Expansions & Man Caves",
    desc: "Turn neglected vehicle space into an insulated, functional workshop, home gym, or bonus living area. We also construct custom detached and attached garages from excavation and framing to siding and doors.",
    icon: Warehouse,
    image: "/api/images/service-garage.jpg",
    features: [
      "Ground-up stick-built detached & attached residential garages",
      "Workshop build-outs with heavy-duty workbenches & tool storage",
      "Insulation, drywall, electrical prep & overhead door framing",
      "Bonus room & in-law suite conversions over existing garages",
    ],
  },
  {
    id: "painting",
    title: "High-Grade Interior & Finish Painting",
    subtitle: "Cabinet Enameling, Trim Coating & Clean Spray Finishes",
    desc: "Flawless carpentry deserves an equally pristine coat of finish. We provide professional interior painting, furniture-grade cabinet spraying, and crisp trim lines with thorough dust containment.",
    icon: Paintbrush,
    image: "/api/images/service-paint.jpg",
    features: [
      "Flawless cabinet and millwork enameling with ultra-smooth sheen",
      "Thorough wall prep, nail-hole spackling & caulk-free joint lines",
      "Low-VOC and zero-VOC premium Benjamin Moore & Sherwin-Williams finishes",
      "HEPA-filtered air scrubbers and floor-to-ceiling zip dust walls",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-[var(--amber)] selection:text-stone-950">
      <Header />

      <main>
        {/* Reusable Common Hero Banner */}
        <CommonBanner
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
          badgeText="Full-Spectrum Carpentry & Remodeling • PA License #184291"
          badgeIcon={<Hammer className="size-3.5 text-[var(--amber)]" />}
          title="Precision Finish Craftsmanship &"
          titleHighlight="Structural Framing Services"
          description="From bespoke architectural trim, custom built-ins, and historic crown molding to two-story decks, wall removals, and whole-home remodeling. Every service is executed directly by our seasoned master craftsmen."
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
              value: "8 Services",
              label: "Core Trade Disciplines",
              sublabel: "Finish detailing to heavy structural",
              color: "text-[var(--amber)]",
            },
            {
              value: "100%",
              label: "Master Craftsmen On Site",
              sublabel: "Zero outsourced third-party subs",
              color: "text-white",
            },
            {
              value: "40+ Years",
              label: "Trade Mastery",
              sublabel: "Western Pennsylvania heritage",
              color: "text-amber-400",
            },
            {
              value: "Upfront",
              label: "Itemized Proposals",
              sublabel: "No surprise change orders",
              color: "text-emerald-400",
            },
          ]}
        />

        {/* Detailed Services Catalog */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-[#fdfbf9] via-[#f7f1e7] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <Badge variant="wood" className="gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="size-3.5 text-[var(--amber)]" />
                Comprehensive Capabilities
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Our 8 Core Carpentry &amp; Remodeling Disciplines
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Whether your residence requires surgical trim repair or ground-up structural framing, our team has the tools, engineering background, and hands-on discipline to deliver flawless results.
              </p>
            </div>

            <div className="space-y-12">
              {fullServicesList.map((service, idx) => {
                const IconComponent = service.icon;
                const isEven = idx % 2 === 1;

                return (
                  <Card
                    key={service.id}
                    id={service.id}
                    className="rounded-3xl border border-stone-200/90 dark:border-stone-800 bg-card overflow-hidden shadow-lg p-0 transition-all hover:shadow-xl"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                      {/* Image Column (5/12) */}
                      <div className={`lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[320px] bg-stone-950 overflow-hidden ${isEven ? "lg:order-2" : ""}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                        {service.tag && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--amber)] px-3 py-1 text-[11px] font-bold text-stone-950 uppercase tracking-wider shadow-md">
                              {service.tag}
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                            Service 0{idx + 1}
                          </p>
                          <h4 className="text-lg font-bold text-white mt-0.5">{service.title}</h4>
                        </div>
                      </div>

                      {/* Content Column (7/12) */}
                      <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${isEven ? "lg:order-1" : ""}`}>
                        <div>
                          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[var(--wood)] dark:text-[var(--amber)] mb-2">
                            <IconComponent className="size-4" />
                            <span>{service.subtitle}</span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {service.desc}
                          </p>
                        </div>

                        {/* Bulleted Capabilities */}
                        <div className="pt-4 border-t border-border">
                          <h5 className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">
                            Key Project Capabilities:
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-foreground">
                            {service.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Row */}
                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <Link href={`/services/${service.id}`}>
                            <Button variant="amber" size="default" className="font-bold text-stone-950 h-10 px-5 text-xs rounded-xl shadow-sm">
                              Explore Service Details
                              <ArrowRight className="size-3.5 ml-1.5" />
                            </Button>
                          </Link>
                          <a href="/#quote">
                            <Button variant="outline" size="default" className="font-semibold text-xs h-10 px-4 rounded-xl border-border hover:bg-amber-500/10">
                              Request Free Estimate
                            </Button>
                          </a>
                          <a
                            href="tel:4125368229"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-[var(--wood)] dark:hover:text-[var(--amber)] transition-colors ml-auto"
                          >
                            <Phone className="size-3.5 text-[var(--amber)]" />
                            <span>(412) 536-8229</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4-Step Project Delivery Process */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-[#1c1815] via-[#241e1a] to-[#1c1815] text-white border-b border-stone-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="amber" className="mb-3 px-4 py-1.5 text-xs">
                How We Deliver
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Our 4-Step Craftsmanship Process
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                Predictable, clean, and transparent from initial phone call to the final nail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-stone-900/90 border border-white/10 space-y-4">
                <span className="size-10 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-base flex items-center justify-center border border-amber-500/30">
                  01
                </span>
                <h4 className="text-lg font-bold text-white">Direct Phone Intake</h4>
                <p className="text-xs text-white/75 leading-relaxed">
                  Speak directly with a lead builder within 24 hours to discuss project scope, timeline, and preliminary options.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-900/90 border border-white/10 space-y-4">
                <span className="size-10 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-base flex items-center justify-center border border-amber-500/30">
                  02
                </span>
                <h4 className="text-lg font-bold text-white">In-Home Inspection</h4>
                <p className="text-xs text-white/75 leading-relaxed">
                  We walk your home, evaluate framing, take precision measurements, and check structural load paths with a builder&apos;s eye.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-900/90 border border-white/10 space-y-4">
                <span className="size-10 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-base flex items-center justify-center border border-amber-500/30">
                  03
                </span>
                <h4 className="text-lg font-bold text-white">Itemized Written Quote</h4>
                <p className="text-xs text-white/75 leading-relaxed">
                  You receive a transparent proposal detailing materials, milestones, and labor down to every fastener. Zero surprise invoices.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-900/90 border border-white/10 space-y-4">
                <span className="size-10 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-base flex items-center justify-center border border-amber-500/30">
                  04
                </span>
                <h4 className="text-lg font-bold text-white">Turnkey Execution</h4>
                <p className="text-xs text-white/75 leading-relaxed">
                  Our master craftsmen personally construct your project, protect your home with daily dust barriers, and leave the site spotless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-[#261309] via-[#35190c] to-[#261309] text-white text-center">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Discuss Your Project Scope?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
              Call our team directly or request a free in-person estimate across Pittsburgh and Western PA.
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
