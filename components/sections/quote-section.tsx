"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { servicesData } from "@/components/sections/services-section";
import { serviceAreasList } from "@/components/sections/service-areas-cta-section";
import {
  Calendar,
  Phone,
  UserCheck,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
} from "lucide-react";

export function QuoteSection() {
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Pittsburgh, PA",
    service: "Remodeling & Renovations",
    timeline: "As soon as possible",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section id="quote" className="py-24 bg-gradient-to-br from-[#874520] via-[#663317] to-[#3a1908] text-white relative overflow-hidden border-b border-white/10">
      {/* Smooth linear lighting overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-amber-500/15 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="woodDark" className="gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Calendar className="size-3.5 text-amber-300" />
            Direct Consultation • No Obligation
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Request Your Free In-Person Estimate
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed font-normal">
            Tell us about your home and your project goals. You will always know where your project stands from day one—honest advice, upfront pricing, and no pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* 
            ------------------------------------------------------------------
            LEFT COLUMN (5/12): Direct Access & What Happens Next
            ------------------------------------------------------------------
          */}
          <div className="lg:col-span-5 space-y-8">
            {/* Card 1: Immediate Direct Contact using Shadcn Card */}
            <Card className="rounded-3xl border-white/15 bg-stone-950/80 backdrop-blur-md p-7 sm:p-8 shadow-xl text-white">
              <div className="flex items-center gap-3 pb-6 border-b border-white/15">
                <div className="size-12 rounded-2xl bg-amber-500/20 text-[var(--amber)] flex items-center justify-center border border-amber-500/30">
                  <Phone className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">Prefer to call right now?</p>
                  <a
                    href="tel:4125368229"
                    className="text-xl sm:text-2xl font-extrabold text-white hover:text-amber-300 transition-colors"
                  >
                    (412) 536-8229
                  </a>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-xs sm:text-sm text-white/85">
                <div className="flex items-start gap-3">
                  <UserCheck className="size-4 text-[var(--amber)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Direct Firm Access:</strong> You speak directly with our experienced project leads, not a remote answering service or third-party lead portal.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="size-4 text-[var(--amber)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Availability:</strong> Mon – Sat: 7:00 AM – 6:00 PM across all Pittsburgh communities.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Credentials:</strong> Fully licensed & insured general carpentry contractor in Pennsylvania.
                  </span>
                </div>
              </div>
            </Card>

            {/* Card 2: The 3-Step Estimate Process using Shadcn Card */}
            <Card className="rounded-3xl border-white/15 bg-stone-950/80 backdrop-blur-md p-7 sm:p-8 shadow-xl text-white">
              <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[var(--amber)]" />
                What Happens After You Submit:
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <span className="size-7 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                    1
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">Direct Phone Consultation</p>
                    <p className="text-xs text-white/75 mt-0.5 leading-relaxed">
                      Our team reviews your project details and calls you directly within 24 hours to discuss your scope and timeline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="size-7 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                    2
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">In-Person Home Walkthrough</p>
                    <p className="text-xs text-white/75 mt-0.5 leading-relaxed">
                      An Envision master craftsman visits your home to inspect framing, measurements, and structural conditions with an experienced builder&apos;s eye.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="size-7 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-500/30">
                    3
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">Transparent Written Estimate</p>
                    <p className="text-xs text-white/75 mt-0.5 leading-relaxed">
                      You receive a detailed written proposal outlining materials, labor, and milestones. No surprise change orders or hidden fees.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* 
            ------------------------------------------------------------------
            RIGHT COLUMN (7/12): The Interactive Estimate Request Form
            ------------------------------------------------------------------
          */}
          <div className="lg:col-span-7">
            <Card className="rounded-3xl border-white/15 bg-stone-950/90 text-white p-8 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
              {!formSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div>
                    <Badge variant="amber" className="mb-1">
                      Online Project Intake
                    </Badge>
                    <h3 className="text-2xl font-bold tracking-tight text-white mt-1">
                      Tell Us About Your Project
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 mt-1">
                      All inquiries are reviewed directly by the Envision Carpentry team.
                    </p>
                  </div>

                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        Your Full Name <span className="text-amber-400">*</span>
                      </label>
                      <Input
                        type="text"
                        required
                        placeholder="e.g. John Miller"
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
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
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        className="border-white/20 bg-stone-900/90 text-white placeholder:text-white/40 focus-visible:ring-[var(--amber)]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                        className="border-white/20 bg-stone-900/90 text-white placeholder:text-white/40 focus-visible:ring-[var(--amber)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        Project Location (City / Area)
                      </label>
                      <select
                        value={quoteForm.city}
                        onChange={(e) => setQuoteForm({ ...quoteForm, city: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-stone-900 text-white px-4 py-2.5 text-sm focus:border-[var(--amber)] focus:outline-hidden focus:ring-2 focus:ring-[var(--amber)]/30 transition-all"
                      >
                        {serviceAreasList.map((area, i) => (
                          <option key={i} value={area} className="bg-stone-900 text-white">
                            {area}
                          </option>
                        ))}
                        <option value="Other Western PA" className="bg-stone-900 text-white">Other Western PA Community</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Service and Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={quoteForm.service}
                        onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-stone-900 text-white px-4 py-2.5 text-sm focus:border-[var(--amber)] focus:outline-hidden focus:ring-2 focus:ring-[var(--amber)]/30 transition-all"
                      >
                        {servicesData.map((s, i) => (
                          <option key={i} value={s.title} className="bg-stone-900 text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Other Custom Carpentry" className="bg-stone-900 text-white">Other Specialty Woodwork / Carpentry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        Desired Timeline
                      </label>
                      <select
                        value={quoteForm.timeline}
                        onChange={(e) => setQuoteForm({ ...quoteForm, timeline: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-stone-900 text-white px-4 py-2.5 text-sm focus:border-[var(--amber)] focus:outline-hidden focus:ring-2 focus:ring-[var(--amber)]/30 transition-all"
                      >
                        <option value="As soon as possible" className="bg-stone-900 text-white">As soon as possible</option>
                        <option value="Within 2 to 4 weeks" className="bg-stone-900 text-white">Within 2 to 4 weeks</option>
                        <option value="1 to 3 months" className="bg-stone-900 text-white">1 to 3 months</option>
                        <option value="Flexible / Gathering Estimates" className="bg-stone-900 text-white">Flexible / Gathering Estimates</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Message / Details using Shadcn Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-white mb-1.5">
                      Project Description & Scope
                    </label>
                    <Textarea
                      rows={4}
                      placeholder="Tell us about the work you need done (e.g. kitchen remodel, crown molding in living room, replacement deck, square footage, existing issues)..."
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                      className="border-white/20 bg-stone-900/90 text-white placeholder:text-white/40 focus-visible:ring-[var(--amber)]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="amber"
                      size="xl"
                      className="w-full font-bold text-stone-950 h-13 text-base shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all rounded-xl"
                    >
                      <Send className="size-4 mr-2" />
                      Request Free In-Person Estimate
                    </Button>
                    <p className="mt-3 text-center text-xs text-white/70">
                      🔒 Direct contact with Envision Carpentry. No spam, no sales calls, and no shared data.
                    </p>
                  </div>
                </form>
              ) : (
                /* Success Feedback Card */
                <div className="py-12 text-center space-y-6">
                  <div className="size-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="size-8" />
                  </div>

                  <div>
                    <Badge variant="emerald" className="mb-2">
                      Request Received
                    </Badge>
                    <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      Thank You, {quoteForm.name || "Neighbor"}!
                    </h3>
                    <p className="mt-3 text-sm text-white/85 max-w-md mx-auto leading-relaxed">
                      Envision Carpentry has received your request regarding{" "}
                      <strong className="text-amber-300">{quoteForm.service}</strong> in{" "}
                      <strong className="text-amber-300">{quoteForm.city}</strong>. Our team will review your project and contact you at{" "}
                      <strong className="text-white underline">{quoteForm.phone || quoteForm.email}</strong> within 24 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 border border-white/15 max-w-md mx-auto text-xs text-white/80">
                    <p className="font-semibold text-white">Need immediate assistance or scheduling?</p>
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
                      setQuoteForm({
                        name: "",
                        phone: "",
                        email: "",
                        city: "Pittsburgh, PA",
                        service: "Remodeling & Renovations",
                        timeline: "As soon as possible",
                        message: "",
                      });
                    }}
                    className="mt-4 text-xs font-semibold text-white border-white/30 hover:bg-white/10 rounded-xl"
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
  );
}
