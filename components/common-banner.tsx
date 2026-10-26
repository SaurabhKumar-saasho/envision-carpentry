"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Award, Phone, ArrowRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BannerStatItem {
  value: string | React.ReactNode;
  label: string;
  sublabel?: string;
  color?: string;
}

export interface CommonBannerProps {
  /**
   * Breadcrumb hierarchy, e.g.:
   * [{ label: "Home", href: "/" }, { label: "About Us" }]
   */
  breadcrumbs?: BreadcrumbItem[];

  /** Optional pill badge text displayed above the H1 */
  badgeText?: string;

  /** Optional icon inside the badge (defaults to Award) */
  badgeIcon?: React.ReactNode;

  /** Main H1 Heading */
  title: React.ReactNode;

  /** Optional highlighted/accent word or phrase rendered in amber serif */
  titleHighlight?: string;

  /** Subtitle or descriptive paragraph text */
  description?: React.ReactNode;

  /** Custom background image path (defaults to warm wood workshop '/cta-banner-bg.jpg') */
  bgImage?: string;

  /** Image alt text */
  bgImageAlt?: string;

  /** Layout alignment: "center" (default, executive) or "left" */
  align?: "center" | "left";

  /** Primary call-to-action button */
  primaryCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };

  /** Secondary call-to-action button */
  secondaryCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };

  /** Optional trust metric stats (rendered in a compact luxury horizontal strip) */
  stats?: BannerStatItem[];

  /** Additional custom content */
  children?: React.ReactNode;

  /** Custom class overrides */
  className?: string;
}

export function CommonBanner({
  breadcrumbs = [{ label: "Home", href: "/" }],
  badgeText,
  badgeIcon,
  title,
  titleHighlight,
  description,
  bgImage = "/cta-banner-bg.jpg",
  bgImageAlt = "Envision Carpentry Master Woodworking Workshop",
  align = "center",
  primaryCta,
  secondaryCta,
  stats,
  children,
  className = "",
}: CommonBannerProps) {
  const isCenter = align === "center";

  return (
    <section
      aria-label="Page Header"
      className={`relative overflow-hidden pt-36 sm:pt-36 lg:pt-40 pb-12 sm:pb-14 lg:pb-16 bg-stone-950 border-b border-stone-800/80 ${className}`}
    >
      {/* 
        ========================================================================
        ATMOSPHERIC BACKGROUND: AUTHENTIC CRAFTSMAN WORKSHOP & LUXURY LIGHTING
        ========================================================================
      */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Authentic Woodworking Workshop Photography Layer */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgImage}
          alt={bgImageAlt}
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125 saturate-90 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        />

        {/* Multi-layered Vignette & Dark Obsidian Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/92 via-stone-950/85 to-stone-950" />

        {/* Ambient Warm Golden Ceiling Spotlight */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[340px] rounded-full pointer-events-none opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(229,169,60,0.4) 0%, rgba(180,83,9,0.15) 50%, transparent 75%)",
          }}
        />

        {/* Subtle Architectural Fine Grid Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top Header Blur Shade & Bottom Transition Accent */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-stone-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
          
          {/* 
            ====================================================================
            1. BREADCRUMBS & BADGE (Combined Sleek Top Navigation Row)
            ====================================================================
          */}
          <div className="mb-4 sm:mb-5 flex flex-wrap items-center justify-center gap-2.5">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb">
                <ol className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-stone-900/80 px-3.5 py-1 text-xs font-medium text-stone-300 shadow-sm backdrop-blur-md">
                  {breadcrumbs.map((crumb, idx) => {
                    const isLast = idx === breadcrumbs.length - 1;
                    return (
                      <li key={idx} className="inline-flex items-center gap-1.5 sm:gap-2">
                        {idx > 0 && (
                          <ChevronRight className="size-3 text-stone-500 shrink-0" aria-hidden="true" />
                        )}

                        {isLast || !crumb.href ? (
                          <span
                            className="text-[var(--amber)] font-semibold tracking-wide"
                            aria-current="page"
                          >
                            {crumb.label}
                          </span>
                        ) : (
                          <Link
                            href={crumb.href}
                            className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
                          >
                            {idx === 0 && <Home className="size-3 text-stone-400" />}
                            <span>{crumb.label}</span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}

            {badgeText && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-2xs">
                {badgeIcon ?? <Award className="size-3 text-[var(--amber)]" />}
                <span>{badgeText}</span>
              </div>
            )}
          </div>

          {/* 
            ====================================================================
            2. MAIN H1 HEADING (Natural Flow & Luxury Serif Typography)
            ====================================================================
          */}
          <div className={`${isCenter ? "max-w-4xl" : "max-w-3xl"}`}>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-white leading-[1.15]">
              {title}
              {titleHighlight && (
                <>
                  {" "}
                  <span className="text-[var(--amber)] italic font-serif">
                    {titleHighlight}
                  </span>
                </>
              )}
            </h1>

            {/* Subtle Gold Center Divider */}
            {isCenter && (
              <div className="mx-auto mt-4 mb-3.5 h-[2px] w-16 bg-gradient-to-r from-transparent via-[var(--amber)] to-transparent rounded-full opacity-70" />
            )}

            {/* 
              ==================================================================
              3. SUBTITLE / DESCRIPTION (Crisp, Readable & Proportionate)
              ==================================================================
            */}
            {description && (
              <p
                className={`text-sm sm:text-base md:text-[17px] text-stone-300 font-normal leading-relaxed ${
                  isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
                }`}
              >
                {description}
              </p>
            )}

            {/* 
              ==================================================================
              4. ACTION BUTTONS (Compact, Balanced CTAs)
              ==================================================================
            */}
            {(primaryCta || secondaryCta) && (
              <div
                className={`mt-6 flex flex-wrap items-center gap-3 ${
                  isCenter ? "justify-center" : "justify-start"
                }`}
              >
                {primaryCta && (
                  primaryCta.href ? (
                    <a href={primaryCta.href}>
                      <Button
                        variant="amber"
                        size="default"
                        className="font-bold text-stone-950 shadow-md hover:scale-102 active:scale-98 transition-all h-10 px-5 text-xs sm:text-sm rounded-full cursor-pointer"
                      >
                        {primaryCta.icon ?? <Phone className="size-3.5 mr-1.5" />}
                        <span>{primaryCta.label}</span>
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="amber"
                      size="default"
                      onClick={primaryCta.onClick}
                      className="font-bold text-stone-950 shadow-md hover:scale-102 active:scale-98 transition-all h-10 px-5 text-xs sm:text-sm rounded-full cursor-pointer"
                    >
                      {primaryCta.icon ?? <Phone className="size-3.5 mr-1.5" />}
                      <span>{primaryCta.label}</span>
                    </Button>
                  )
                )}

                {secondaryCta && (
                  secondaryCta.href ? (
                    <a href={secondaryCta.href}>
                      <Button
                        variant="heroOutline"
                        size="default"
                        className="font-medium text-stone-200 border-white/20 hover:text-white hover:bg-white/10 h-10 px-5 text-xs sm:text-sm rounded-full cursor-pointer backdrop-blur-xs"
                      >
                        <span>{secondaryCta.label}</span>
                        {secondaryCta.icon ?? <ArrowRight className="size-3.5 ml-1.5" />}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="heroOutline"
                      size="default"
                      onClick={secondaryCta.onClick}
                      className="font-medium text-stone-200 border-white/20 hover:text-white hover:bg-white/10 h-10 px-5 text-xs sm:text-sm rounded-full cursor-pointer backdrop-blur-xs"
                    >
                      <span>{secondaryCta.label}</span>
                      {secondaryCta.icon ?? <ArrowRight className="size-3.5 ml-1.5" />}
                    </Button>
                  )
                )}
              </div>
            )}
          </div>

          {/* 
            ====================================================================
            5. COMPACT TRUST METRICS STRIP (Slim, Sophisticated Glass Ribbon)
            ====================================================================
          */}
          {stats && stats.length > 0 && (
            <div className="mt-8 w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-stone-900/60 backdrop-blur-md px-4 py-3 sm:py-3.5 shadow-xl">
              <div
                className={`grid grid-cols-2 ${
                  stats.length === 3
                    ? "sm:grid-cols-3"
                    : stats.length >= 4
                    ? "grid-cols-2 sm:grid-cols-4"
                    : "sm:grid-cols-2"
                } divide-y sm:divide-y-0 sm:divide-x divide-white/10 gap-y-2 sm:gap-y-0`}
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="px-2 py-1 sm:px-3 text-center">
                    <div
                      className={`text-base sm:text-lg lg:text-xl font-bold font-sans tracking-tight leading-tight ${
                        stat.color || "text-[var(--amber)]"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-stone-200 mt-0.5 leading-tight">
                      {stat.label}
                    </div>
                    {stat.sublabel && (
                      <div className="text-[10px] text-stone-400 mt-0.5 hidden md:block leading-tight">
                        {stat.sublabel}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Extra children slot */}
          {children && <div className="mt-4 w-full">{children}</div>}
        </div>
      </div>
    </section>
  );
}
