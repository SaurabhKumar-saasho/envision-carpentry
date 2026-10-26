"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CommonBanner } from "@/components/common-banner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  Send,
  CheckCircle2,
  Calendar,
  UserCheck,
  ArrowRight,
  FileCheck2,
} from "lucide-react";

const serviceAreasList = [
  "Pittsburgh",
  "Squirrel Hill",
  "Shadyside",
  "Mt. Lebanon",
  "Fox Chapel",
  "Sewickley",
  "Wexford",
  "Cranberry Township",
  "Upper St. Clair",
  "Bethel Park",
  "Moon Township",
  "Murrysville",
  "Butler",
  "Greensburg",
];

const servicesList = [
  "Whole-Home Remodeling & Renovations",
  "Architectural Crown Molding & Trim",
  "Custom Built-Ins & Cabinetry",
  "Structural Framing & Hillside Decks",
  "Flooring Installation & Repair",
  "Windows & Architectural Precision Doors",
  "Damage Restoration & Structural Remediation",
  "Garage Construction & Workshop Build-Outs",
  "Interior & Finish Painting",
  "Other Custom Woodwork / Carpentry",
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Pittsburgh",
    service: "Whole-Home Remodeling & Renovations",
    timeline: "As soon as possible",
    message: "",
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-[var(--amber)] selection:text-stone-950">
      <Header />

      <main>
        {/* Reusable Common Hero Banner */}
        <CommonBanner
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact & Estimates" },
          ]}
          badgeText="Direct Firm Access • No Sales Reps • PA License #184291"
          badgeIcon={<Calendar className="size-3.5 text-[var(--amber)]" />}
          title="Schedule Your Free In-Person"
          titleHighlight="Project Estimate"
          description="Speak directly with our master builders. Tell us about your home and your project goals. You will always know where your project stands from day one—honest trade guidance, upfront pricing, and no pressure."
          primaryCta={{
            label: "Call (412) 536-8229",
            href: "tel:4125368229",
            icon: <Phone className="size-3.5 mr-1.5" />,
          }}
          secondaryCta={{
            label: "Fill Out Intake Form",
            href: "#estimate-form",
            icon: <ArrowRight className="size-3.5 ml-1.5" />,
          }}
          stats={[
            {
              value: "24 Hours",
              label: "Callback Guarantee",
              sublabel: "Reviewed by lead builders",
              color: "text-[var(--amber)]",
            },
            {
              value: "100% Free",
              label: "In-Person Consultation",
              sublabel: "Detailed site measurements",
              color: "text-white",
            },
            {
              value: "PA #184291",
              label: "Licensed & Insured",
              sublabel: "Full liability & workers' comp",
              color: "text-amber-400",
            },
            {
              value: "Direct",
              label: "Team Contact",
              sublabel: "No call center brokers",
              color: "text-emerald-400",
            },
          ]}
        />

        {/* Main Contact Grid & Estimate Form */}
        <section id="estimate-form" className="py-20 sm:py-24 bg-gradient-to-b from-[#fdfbf9] via-[#f7f1e7] to-[#ede3d4] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column (5/12): Direct Access Details */}
              <div className="lg:col-span-5 space-y-6">
                <Card className="rounded-3xl border border-stone-200/90 dark:border-stone-800 bg-card p-7 sm:p-8 shadow-xl">
                  <div className="flex items-center gap-4 pb-6 border-b border-border">
                    <div className="size-14 rounded-2xl bg-amber-500/15 text-[var(--amber)] flex items-center justify-center border border-amber-500/30 shrink-0">
                      <Phone className="size-7" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Direct Phone Contact
                      </p>
                      <a
                        href="tel:4125368229"
                        className="text-2xl font-extrabold text-foreground hover:text-[var(--wood)] dark:hover:text-[var(--amber)] transition-colors block mt-0.5"
                      >
                        (412) 536-8229
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-xs sm:text-sm text-foreground">
                    <div className="flex items-start gap-3">
                      <Clock className="size-4 text-[var(--amber)] shrink-0 mt-0.5" />
                      <div>
                        <strong>Hours of Operation:</strong>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          Monday – Saturday: 7:00 AM – 6:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="size-4 text-[var(--amber)] shrink-0 mt-0.5" />
                      <div>
                        <strong>Primary Headquarters & Coverage:</strong>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          Pittsburgh, PA • Serving Allegheny, Beaver, Butler &amp; Westmoreland Counties
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong>Licensing &amp; Credentials:</strong>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          PA Home Improvement License #184291 • Fully Insured
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 3 Step Process Card */}
                <Card className="rounded-3xl border border-stone-200/90 dark:border-stone-800 bg-card p-7 sm:p-8 shadow-lg">
                  <h3 className="text-base font-bold text-foreground mb-5 flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[var(--amber)]" />
                    What to Expect After You Reach Out:
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="size-6 rounded-full bg-[var(--wood)]/10 text-[var(--wood)] dark:text-[var(--amber)] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        1
                      </span>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-foreground">Phone Scope Review</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          We discuss your ideas, timing, and preliminary design thoughts.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="size-6 rounded-full bg-[var(--wood)]/10 text-[var(--wood)] dark:text-[var(--amber)] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        2
                      </span>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-foreground">In-Home Inspection</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Our builders evaluate framing, check structural slopes, and measure details.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="size-6 rounded-full bg-[var(--wood)]/10 text-[var(--wood)] dark:text-[var(--amber)] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        3
                      </span>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-foreground">Guaranteed Written Quote</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Itemized materials and milestones down to the penny. Zero surprises.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column (7/12): Online Estimate Intake Form */}
              <div className="lg:col-span-7">
                <Card className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-[#261309] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                  {!formSubmitted ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setFormSubmitted(true);
                      }}
                      className="space-y-5"
                    >
                      <div>
                        <Badge variant="amber" className="mb-2">
                          Direct Project Intake
                        </Badge>
                        <h3 className="text-2xl font-bold tracking-tight text-white">
                          Tell Us About Your Project
                        </h3>
                        <p className="text-xs sm:text-sm text-white/75 mt-1">
                          All inquiries are reviewed directly by the Envision Carpentry team.
                        </p>
                      </div>

                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-white mb-1.5">
                            Full Name <span className="text-amber-400">*</span>
                          </label>
                          <Input
                            type="text"
                            required
                            placeholder="e.g. Eleanor Vance"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="border-white/20 bg-stone-900/90 text-white placeholder:text-white/40 focus-visible:ring-[var(--amber)]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-white mb-1.5">
                            Phone Number <span className="text-amber-400">*</span>
                          </label>
                          <Input
                            type="tel"
                            required
                            placeholder="(412) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="border-white/20 bg-stone-900/90 text-white placeholder:text-white/40 focus-visible:ring-[var(--amber)]"
                          />
                        </div>
                      </div>

                      {/* Email & Location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-white mb-1.5">
                            Email Address <span className="text-amber-400">*</span>
                          </label>
                          <Input
                            type="email"
                            required
                            placeholder="eleanor@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="border-white/20 bg-stone-900/90 text-white placeholder:text-white/40 focus-visible:ring-[var(--amber)]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-white mb-1.5">
                            Project Location
                          </label>
                          <select
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full rounded-xl border border-white/20 bg-stone-900 text-white px-4 py-2 text-sm focus:border-[var(--amber)] focus:outline-hidden transition-all"
                          >
                            {serviceAreasList.map((area, i) => (
                              <option key={i} value={area} className="bg-stone-900 text-white">
                                {area}
                              </option>
                            ))}
                            <option value="Other Western PA" className="bg-stone-900 text-white">
                              Other Western PA Community
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Service & Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-white mb-1.5">
                            Primary Service Needed
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full rounded-xl border border-white/20 bg-stone-900 text-white px-4 py-2 text-sm focus:border-[var(--amber)] focus:outline-hidden transition-all"
                          >
                            {servicesList.map((s, i) => (
                              <option key={i} value={s} className="bg-stone-900 text-white">
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-white mb-1.5">
                            Desired Timeline
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full rounded-xl border border-white/20 bg-stone-900 text-white px-4 py-2 text-sm focus:border-[var(--amber)] focus:outline-hidden transition-all"
                          >
                            <option value="As soon as possible">As soon as possible</option>
                            <option value="Within 2 to 4 weeks">Within 2 to 4 weeks</option>
                            <option value="1 to 3 months">1 to 3 months</option>
                            <option value="Flexible / Gathering Quotes">Flexible / Gathering Quotes</option>
                          </select>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div>
                        <label className="block text-xs font-bold text-white mb-1.5">
                          Project Scope &amp; Details
                        </label>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your home and goals (e.g., kitchen wall removal, custom oak library bookcases, replacement two-story deck, square footage, existing issues)..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="border-white/20 bg-stone-900/90 text-white placeholder:text-white/40 focus-visible:ring-[var(--amber)]"
                        />
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="amber"
                          size="xl"
                          className="w-full font-bold text-stone-950 h-13 text-base shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all rounded-xl"
                        >
                          <Send className="size-4 mr-2" />
                          Submit Free Estimate Request
                        </Button>
                        <p className="mt-3 text-center text-xs text-white/70">
                          🔒 Direct contact with Envision Carpentry LLC. No spam, no sales calls, no shared data.
                        </p>
                      </div>
                    </form>
                  ) : (
                    <div className="py-12 text-center space-y-6">
                      <div className="size-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                        <CheckCircle2 className="size-8" />
                      </div>
                      <div>
                        <Badge variant="emerald" className="mb-2">
                          Request Received
                        </Badge>
                        <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                          Thank You, {formData.name || "Neighbor"}!
                        </h3>
                        <p className="mt-3 text-sm text-white/85 max-w-md mx-auto leading-relaxed">
                          Envision Carpentry has received your request regarding{" "}
                          <strong className="text-amber-300">{formData.service}</strong> in{" "}
                          <strong className="text-amber-300">{formData.city}</strong>. Our team will review your project and contact you at{" "}
                          <strong className="text-white underline">{formData.phone || formData.email}</strong> within 24 hours.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-stone-900 border border-white/15 max-w-md mx-auto text-xs text-white/80">
                        <p className="font-semibold text-white">Need immediate scheduling or questions?</p>
                        <p className="mt-1">
                          Call our team directly at{" "}
                          <a href="tel:4125368229" className="font-bold text-[var(--amber)] hover:underline">
                            (412) 536-8229
                          </a>
                        </p>
                      </div>

                      <Button
                        variant="heroOutline"
                        size="lg"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            city: "Pittsburgh",
                            service: "Whole-Home Remodeling & Renovations",
                            timeline: "As soon as possible",
                            message: "",
                          });
                        }}
                        className="text-white border-white/30"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
