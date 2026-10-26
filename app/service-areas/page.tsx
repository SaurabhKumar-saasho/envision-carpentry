import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CommonBanner } from "@/components/common-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Building2,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Star,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas | Envision Carpentry LLC - Pittsburgh & Western PA",
  description:
    "Envision Carpentry LLC provides residential carpentry, decks, architectural trim, and remodeling across Allegheny, Beaver, Butler, and Westmoreland counties. PA License #184291.",
};

const countyList = [
  {
    county: "Allegheny County (Primary Service Area)",
    description:
      "Our home base and core territory. From the historic brick Victorians of the East End to the hillside slope lots of the South Hills.",
    communities: [
      { name: "Pittsburgh (Citywide)", note: "Historic homes, masonry settling walls & row houses", slug: "pittsburgh" },
      { name: "Squirrel Hill", note: "Multi-tier hillside decks & Victorian millwork", slug: "squirrel-hill" },
      { name: "Shadyside", note: "Historic plaster crown molding & wainscoting", slug: "shadyside" },
      { name: "Mt. Lebanon", note: "Kitchen structural wall removals & open concepts", slug: "mt-lebanon" },
      { name: "Fox Chapel", note: "Custom architectural millwork & coffered ceilings", slug: "fox-chapel" },
      { name: "Sewickley", note: "Restoration carpentry & heirloom custom built-ins", slug: "sewickley" },
      { name: "Upper St. Clair", note: "Whole-home remodeling & custom additions", slug: "upper-st-clair" },
      { name: "Bethel Park", note: "Exterior door replacements & composite decks", slug: "bethel-park" },
      { name: "Moon Township", note: "Garage builds, workshop build-outs & flooring", slug: "moon-township" },
    ],
  },
  {
    county: "Butler County",
    description:
      "Serving high-growth residential communities and sprawling acreage properties with structural deck and custom trim craftsmanship.",
    communities: [
      { name: "Cranberry Township", note: "Custom finish basements, trim upgrades & decks", slug: "cranberry-township" },
      { name: "Butler", note: "Farmhouse casing restoration & airtight exterior doors" },
      { name: "Mars / Adams Township", note: "Custom built-in cabinetry & architectural woodwork" },
      { name: "Zelienople", note: "Vintage trim duplication & structural repair" },
    ],
  },
  {
    county: "Beaver & Westmoreland Counties",
    description:
      "Comprehensive carpentry coverage for heritage homes, river valley properties, and suburban additions.",
    communities: [
      { name: "Murrysville", note: "Multi-level hillside decks & kitchen remodeling", slug: "murrysville" },
      { name: "Greensburg", note: "Crown molding, structural framing & additions" },
      { name: "Beaver / Beaver Falls", note: "Historic home trim fitting & moisture restoration" },
      { name: "Wexford", note: "Luxury vinyl plank, hardwood & master suites", slug: "wexford" },
    ],
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-[var(--amber)] selection:text-stone-950">
      <Header />

      <main>
        {/* Reusable Common Hero Banner */}
        <CommonBanner
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas" },
          ]}
          badgeText="Western PA Regional Coverage • PA License #184291"
          badgeIcon={<MapPin className="size-3.5 text-[var(--amber)]" />}
          title="Residential Carpentry Across"
          titleHighlight="Western Pennsylvania"
          description="Providing master craftsmanship, custom architectural millwork, two-story hillside decks, and whole-home remodeling throughout Allegheny, Beaver, Butler, and Westmoreland counties."
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
              value: "4 Counties",
              label: "Regional Service Coverage",
              sublabel: "Allegheny, Beaver, Butler, Westmoreland",
              color: "text-[var(--amber)]",
            },
            {
              value: "30+ Towns",
              label: "Pittsburgh Communities",
              sublabel: "From city center to suburban acreage",
              color: "text-white",
            },
            {
              value: "100% Code",
              label: "PA Structural Compliance",
              sublabel: "Permits pulled & codes inspected",
              color: "text-amber-400",
            },
            {
              value: "Free",
              label: "On-Site Walkthroughs",
              sublabel: "Across all listed territories",
              color: "text-emerald-400",
            },
          ]}
        />

        {/* Territory Catalog */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-[#fdfbf9] via-[#f7f1e7] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <Badge variant="wood" className="gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-3">
                <Compass className="size-3.5 text-[var(--amber)]" />
                Regional Coverage
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Where We Build in Western Pennsylvania
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Every Pittsburgh neighborhood presents unique building conditions. We tailor our carpentry and structural engineering to the specific architectural era and terrain of your community.
              </p>
            </div>

            <div className="space-y-12">
              {countyList.map((region, idx) => (
                <Card
                  key={idx}
                  className="rounded-3xl border border-stone-200/90 dark:border-stone-800 bg-card p-8 sm:p-10 shadow-lg"
                >
                  <div className="border-b border-border pb-6 mb-6">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--wood)] dark:text-[var(--amber)] mb-1">
                      <MapPin className="size-4" />
                      Regional Territory 0{idx + 1}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      {region.county}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-3xl leading-relaxed">
                      {region.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {region.communities.map((comm, cIdx) => {
                      const content = (
                        <div
                          className="p-4 rounded-2xl bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 flex flex-col justify-between space-y-2 hover:border-[var(--amber)] hover:shadow-md transition-all h-full group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-foreground group-hover:text-[var(--wood)] dark:group-hover:text-[var(--amber)] transition-colors">
                              {comm.name}
                            </span>
                            <span className="text-[10px] font-bold text-[var(--wood)] dark:text-[var(--amber)] bg-amber-500/10 px-2 py-0.5 rounded-full">
                              {comm.slug ? "Explore →" : "Active"}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">{comm.note}</p>
                        </div>
                      );

                      return comm.slug ? (
                        <Link key={cIdx} href={`/service-areas/${comm.slug}`} className="block h-full">
                          {content}
                        </Link>
                      ) : (
                        <div key={cIdx} className="h-full">
                          {content}
                        </div>
                      );
                    })}
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
              Don&apos;t See Your Community Listed?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
              We frequently travel to neighboring Western PA townships. Call us directly to discuss your location and schedule an in-person consultation.
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
