"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { EnvisionLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  MapPin,
  Hammer,
  Home as HomeIcon,
  Layers,
  Droplets,
  Warehouse,
  DoorOpen,
  Paintbrush,
  HardHat,
  ShieldCheck,
  Star,
  Award,
  Sparkles,
} from "lucide-react";

const servicesList = [
  {
    title: "Remodeling & Renovations",
    desc: "Kitchens, bathrooms, room makeovers & additions",
    icon: HomeIcon,
    tag: "Popular",
    href: "/services/remodeling",
  },
  {
    title: "Custom Carpentry / Wood Works",
    desc: "Bespoke built-ins, crown molding & wainscoting",
    icon: Hammer,
    tag: "Specialty",
    href: "/services/carpentry",
  },
  {
    title: "Structural Framing & Decks",
    desc: "Heavy timber decks, wall removal & code framing",
    icon: HardHat,
    href: "/services/framing",
  },
  {
    title: "Flooring Installation & Repair",
    desc: "Hardwood, luxury vinyl plank & subfloors",
    icon: Layers,
    href: "/services/flooring",
  },
  {
    title: "Windows & Precision Doors",
    desc: "Energy-efficient replacements & custom entries",
    icon: DoorOpen,
    href: "/services/doors-windows",
  },
  {
    title: "Damage Restoration",
    desc: "Water, moisture, storm wear & structural repair",
    icon: Droplets,
    href: "/services/restoration",
  },
  {
    title: "Garage Construction & Renovation",
    desc: "Detached/attached builds & workshop conversions",
    icon: Warehouse,
    href: "/services/garages",
  },
  {
    title: "Interior & Finish Painting",
    desc: "Cabinet enameling & precision spray coatings",
    icon: Paintbrush,
    href: "/services/painting",
  },
];

const serviceAreasList = [
  {
    name: "Pittsburgh (Citywide)",
    highlight: "Allegheny County core & historic homes",
    href: "/service-areas/pittsburgh",
  },
  {
    name: "Squirrel Hill",
    highlight: "Victorian millwork & hillside decks",
    href: "/service-areas/squirrel-hill",
  },
  {
    name: "Shadyside",
    highlight: "Historic crown molding & wainscoting",
    href: "/service-areas/shadyside",
  },
  {
    name: "Mt. Lebanon",
    highlight: "Kitchen wall removals & open concepts",
    href: "/service-areas/mt-lebanon",
  },
  {
    name: "Fox Chapel",
    highlight: "Estate joinery & coffered ceilings",
    href: "/service-areas/fox-chapel",
  },
  {
    name: "Sewickley",
    highlight: "Historic restoration & custom built-ins",
    href: "/service-areas/sewickley",
  },
  {
    name: "Cranberry Township",
    highlight: "Butler County basements & timber decks",
    href: "/service-areas/cranberry-township",
  },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isServices = pathname === "/services";
  const isWork = pathname === "/work";
  const isContact = pathname === "/contact";
  const isAreas = pathname === "/service-areas";

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
  const areasTimeout = useRef<NodeJS.Timeout | null>(null);

  // Track scroll position for backdrop blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setAreasOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile offcanvas menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handlers for Services hover
  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
    setAreasOpen(false);
  };
  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  // Handlers for Areas hover
  const handleAreasEnter = () => {
    if (areasTimeout.current) clearTimeout(areasTimeout.current);
    setAreasOpen(true);
    setServicesOpen(false);
  };
  const handleAreasLeave = () => {
    areasTimeout.current = setTimeout(() => {
      setAreasOpen(false);
    }, 180);
  };

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAreasOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-stone-950/98 backdrop-blur-md shadow-2xl border-b border-white/15 py-2.5"
            : "bg-stone-950/90 border-b border-white/10 lg:bg-transparent lg:border-transparent lg:shadow-none py-3 lg:py-4.5"
        } text-white`}
      >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between gap-3 lg:gap-6 xl:gap-8 flex-nowrap">
          {/* 
            ====================================================================
            LEFT: Envision Logo (Bold & Prominent)
            ====================================================================
          */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/"
              onClick={closeAllMenus}
              className="flex items-center gap-3 transition-transform hover:scale-103 group"
              aria-label="Envision Carpentry LLC - Home"
            >
              <EnvisionLogo
                size="md"
                className="h-12 sm:h-14 lg:h-16 xl:h-20 w-auto shrink-0 drop-shadow-md"
              />
            </a>
          </div>

          {/* 
            ====================================================================
            MIDDLE: Desktop Navigation Menu (Crisp, Non-Wrapping, Responsive)
            ====================================================================
          */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 2xl:gap-4 flex-nowrap shrink-0 font-sans">
            {/* Home Link */}
            <a
              href="/"
              className={`relative px-3 xl:px-3.5 py-2 text-[16px] xl:text-[18px] font-semibold transition-colors tracking-normal whitespace-nowrap shrink-0 ${
                isHome ? "text-white" : "text-white/85 hover:text-white"
              }`}
            >
              <span>Home</span>
              {isHome && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2.5px] bg-[var(--amber)] rounded-full" />
              )}
            </a>

            {/* About Us Link */}
            <a
              href="/about"
              className={`relative px-3 xl:px-3.5 py-2 text-[16px] xl:text-[18px] font-semibold transition-colors tracking-normal whitespace-nowrap shrink-0 ${
                isAbout ? "text-white" : "text-white/85 hover:text-white"
              }`}
            >
              <span>About Us</span>
              {isAbout && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2.5px] bg-[var(--amber)] rounded-full" />
              )}
            </a>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative shrink-0"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                className={`inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-2 text-[16px] xl:text-[18px] font-semibold transition-all cursor-pointer tracking-normal whitespace-nowrap shrink-0 ${
                  servicesOpen
                    ? "text-[var(--amber)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span className="whitespace-nowrap">Services</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 shrink-0 ${
                    servicesOpen ? "rotate-180 text-[var(--amber)]" : "text-white/80"
                  }`}
                />
              </button>

              {/* Services Mega Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] rounded-2xl border border-white/15 bg-stone-950/98 p-5 shadow-2xl backdrop-blur-xl transition-all duration-200 origin-top z-50 ${
                  servicesOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {/* Dropdown Header */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <Hammer className="size-4 text-[var(--amber)]" />
                    <span className="font-bold uppercase tracking-wider text-white">
                      Full-Spectrum Residential Carpentry
                    </span>
                  </div>
                  <span className="text-white/60">Pittsburgh & Western PA</span>
                </div>

                {/* 2-Column Services Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {servicesList.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={closeAllMenus}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-all duration-150"
                      >
                        <div className="size-9 rounded-lg bg-stone-900 border border-white/10 flex items-center justify-center text-[var(--amber)] shrink-0 group-hover:bg-[var(--amber)] group-hover:text-stone-950 transition-colors">
                          <IconComp className="size-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-xs font-bold text-white group-hover:text-[var(--amber)] transition-colors truncate">
                              {item.title}
                            </p>
                            {item.tag && (
                              <span className="rounded bg-[var(--amber)]/20 px-1.5 py-0.2 text-[9px] font-bold text-[var(--amber)] shrink-0">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-white/70 line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Dropdown Footer Strip */}
                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs bg-stone-900/60 -mx-5 -mb-5 px-5 py-3 rounded-b-2xl">
                  <span className="text-white/80">
                    Need a custom built-in or historic trim match?
                  </span>
                  <a
                    href="/services"
                    onClick={closeAllMenus}
                    className="font-bold text-[var(--amber)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All 8 Services Page</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* SERVICE AREAS DROPDOWN */}
            <div
              className="relative shrink-0"
              onMouseEnter={handleAreasEnter}
              onMouseLeave={handleAreasLeave}
            >
              <button
                type="button"
                onClick={() => setAreasOpen(!areasOpen)}
                aria-expanded={areasOpen}
                className={`inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-2 text-[16px] xl:text-[18px] font-semibold transition-all cursor-pointer tracking-normal whitespace-nowrap shrink-0 ${
                  areasOpen
                    ? "text-[var(--amber)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span className="whitespace-nowrap">Service Areas</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 shrink-0 ${
                    areasOpen ? "rotate-180 text-[var(--amber)]" : "text-white/80"
                  }`}
                />
              </button>

              {/* Service Areas Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[460px] rounded-2xl border border-white/15 bg-stone-950/98 p-5 shadow-2xl backdrop-blur-xl transition-all duration-200 origin-top z-50 ${
                  areasOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-[var(--amber)]" />
                    <span className="font-bold uppercase tracking-wider text-white">
                      Western Pennsylvania Coverage
                    </span>
                  </div>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Local Service
                  </span>
                </div>

                {/* Cities Grid */}
                <div className="space-y-1">
                  {serviceAreasList.map((area, idx) => (
                    <a
                      key={idx}
                      href={area.href}
                      onClick={closeAllMenus}
                      className="group flex items-center justify-between p-2 rounded-xl hover:bg-white/10 transition-all text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin className="size-3.5 text-stone-500 group-hover:text-[var(--amber)] transition-colors" />
                        <div>
                          <p className="font-bold text-white group-hover:text-[var(--amber)] transition-colors">
                            {area.name}
                          </p>
                          <p className="text-[10px] text-white/60">{area.highlight}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                        Explore →
                      </span>
                    </a>
                  ))}
                </div>

                {/* Counties Footer */}
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-white/70 flex items-center justify-between">
                  <span>Serving Allegheny, Beaver, Butler & Westmoreland</span>
                  <a
                    href="/service-areas"
                    onClick={closeAllMenus}
                    className="text-[var(--amber)] font-bold hover:underline"
                  >
                    View All Areas →
                  </a>
                </div>
              </div>
            </div>

            {/* Recent Work Link */}
            <a
              href="/work"
              className={`relative px-3 xl:px-3.5 py-2 text-[16px] xl:text-[18px] font-semibold transition-colors tracking-normal whitespace-nowrap shrink-0 ${
                isWork ? "text-white" : "text-white/85 hover:text-white"
              }`}
            >
              <span>Recent Work</span>
              {isWork && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2.5px] bg-[var(--amber)] rounded-full" />
              )}
            </a>


            {/* Contact Link */}
            <a
              href="/contact"
              className={`relative px-3 xl:px-3.5 py-2 text-[16px] xl:text-[18px] font-semibold transition-colors tracking-normal whitespace-nowrap shrink-0 ${
                isContact ? "text-white" : "text-white/85 hover:text-white"
              }`}
            >
              <span>Contact</span>
              {isContact && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2.5px] bg-[var(--amber)] rounded-full" />
              )}
            </a>
          </nav>

          {/* 
            ====================================================================
            RIGHT: Direct Phone & Quote CTA
            ====================================================================
          */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 flex-nowrap">
            {/* Phone Link Pill */}
            <a
              href="tel:4125368229"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-stone-950/70 hover:bg-stone-900 px-4 py-2 text-xs xl:text-sm font-semibold text-white hover:text-amber-300 transition-all shadow-xs backdrop-blur-md whitespace-nowrap shrink-0"
              title="Call Envision Carpentry directly"
            >
              <Phone className="size-3.5 text-[var(--amber)] shrink-0" />
              <span className="whitespace-nowrap">412-536-0187</span>
            </a>

            {/* Quote Estimate Button */}
            <Button
              variant="amber"
              size="default"
              onClick={() => {
                closeAllMenus();
                const el = document.getElementById("quote");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#quote";
                }
              }}
              className="font-bold text-stone-950 shadow-md h-9 xl:h-10 px-5 text-xs xl:text-sm tracking-wide rounded-full hover:scale-103 active:scale-97 transition-all whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Request a Free Estimate</span>
              <ArrowRight className="size-3.5 ml-1 shrink-0" />
            </Button>
          </div>

          {/* 
            ====================================================================
            MOBILE MENU TOGGLE BUTTON
            ====================================================================
          */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:4125368229"
              className="size-9 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center text-[var(--amber)]"
              aria-label="Call Envision Carpentry"
            >
              <Phone className="size-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="size-10 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      </header>

      {/* 
        ========================================================================
        MOBILE OFFCANVAS BACKDROP OVERLAY
        ========================================================================
      */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeAllMenus}
        aria-hidden="true"
      />

      {/* 
        ========================================================================
        MOBILE OFFCANVAS SIDE DRAWER (Slide in from Right)
        ========================================================================
      */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm sm:max-w-md bg-stone-950 border-l border-white/15 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Offcanvas Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
          <a href="/" onClick={closeAllMenus} className="flex items-center gap-2.5">
            <EnvisionLogo size="sm" className="h-11 w-auto" />
          </a>
          <button
            type="button"
            onClick={closeAllMenus}
            className="size-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Offcanvas Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3.5">
          {/* Main Links */}
          <div className="space-y-1">
            <a
              href="/"
              onClick={closeAllMenus}
              className={`block px-3.5 py-2.5 rounded-xl text-base font-bold transition-colors ${
                !isAbout ? "bg-white/15 text-[var(--amber)]" : "text-white hover:bg-white/10"
              }`}
            >
              Home
            </a>
            <a
              href="/about"
              onClick={closeAllMenus}
              className={`block px-3.5 py-2.5 rounded-xl text-base font-bold transition-colors ${
                isAbout ? "bg-white/15 text-[var(--amber)]" : "text-white hover:bg-white/10"
              }`}
            >
              About Us
            </a>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl border border-white/10 bg-stone-900/60 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3.5 py-3 text-base font-bold text-white cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Hammer className="size-4 text-[var(--amber)]" />
                  <span>Services</span>
                </div>
                <ChevronDown
                  className={`size-4 text-white/70 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-[var(--amber)]" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1 border-t border-white/10">
                  {servicesList.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.href}
                      onClick={closeAllMenus}
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {s.title}
                    </a>
                  ))}
                  <div className="pt-2">
                    <a
                      href="/services"
                      onClick={closeAllMenus}
                      className="block text-center py-2 rounded-lg bg-[var(--amber)]/15 text-[var(--amber)] font-bold text-xs"
                    >
                      Explore All 8 Services →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Service Areas Accordion */}
            <div className="rounded-xl border border-white/10 bg-stone-900/60 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="w-full flex items-center justify-between px-3.5 py-3 text-base font-bold text-white cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-[var(--amber)]" />
                  <span>Service Areas</span>
                </div>
                <ChevronDown
                  className={`size-4 text-white/70 transition-transform duration-200 ${
                    mobileAreasOpen ? "rotate-180 text-[var(--amber)]" : ""
                  }`}
                />
              </button>

              {mobileAreasOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1 border-t border-white/10">
                  {serviceAreasList.map((a, idx) => (
                    <a
                      key={idx}
                      href={a.href}
                      onClick={closeAllMenus}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span>{a.name}</span>
                      <span className="text-[10px] text-amber-300 font-bold">Explore →</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/work"
              onClick={closeAllMenus}
              className={`block px-3.5 py-2.5 rounded-xl text-base font-bold transition-colors ${
                isWork ? "bg-white/15 text-[var(--amber)]" : "text-white hover:bg-white/10"
              }`}
            >
              Recent Work
            </a>


            <a
              href="/contact"
              onClick={closeAllMenus}
              className={`block px-3.5 py-2.5 rounded-xl text-base font-bold transition-colors ${
                isContact ? "bg-white/15 text-[var(--amber)]" : "text-white hover:bg-white/10"
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Offcanvas Sticky Footer Actions */}
        <div className="p-5 border-t border-white/15 bg-stone-900/70 space-y-3 shrink-0">
          <a href="tel:4125368229" onClick={closeAllMenus} className="block">
            <Button
              variant="heroPrimary"
              size="lg"
              className="w-full font-bold text-stone-950 bg-white hover:bg-amber-50 h-12 text-sm shadow-md"
            >
              <Phone className="size-4 mr-2 text-[var(--wood)]" />
              Call (412) 536-8229
            </Button>
          </a>

          <Button
            variant="amber"
            size="lg"
            onClick={() => {
              closeAllMenus();
              const el = document.getElementById("quote");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#quote";
              }
            }}
            className="w-full font-bold text-stone-950 h-12 text-sm shadow-lg"
          >
            Request Free Estimate
            <ArrowRight className="size-4 ml-1.5" />
          </Button>

          <p className="text-center text-[11px] text-white/50 pt-1">
            Licensed & Insured Master Carpenter • PA #184291
          </p>
        </div>
      </aside>
    </>
  );
}
