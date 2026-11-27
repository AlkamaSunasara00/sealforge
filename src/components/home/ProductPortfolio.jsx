"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import { ArrowUpRight } from "lucide-react";
import mechanicalSealsImg from "@/assets/mechenical-seals-main.webp";
import pumpsImg from "@/assets/pumps-main.webp";
import cutlassBearingImg from "@/assets/cutlass-bearing-main.webp";

const systems = [
  {
    id: "mechanical-seals",
    code: "01",
    name: "Mechanical Seals (SF Series)",
    eyebrow: "Rotating Shaft Sealing",
    standardTag: "EN 12756 / ISO",
    tagline: "Zero-Leakage Performance for Demanding Pump Services",
    summary:
      "Seven proven EN 12756 series—from balanced process seals (SF-B) handling up to 25 bar and 200 °C to outside PTFE bellows (SF-P), non-clogging single-spring (SF-S), elastomer bellows (SF-MJ), and direct Grundfos replacements (SF-G).",
    productImage: mechanicalSealsImg,
    ctaLabel: "Explore Mechanical Seals",
    ctaHref: "/products#mechanical-seals",
    specs: [
      { label: "Shaft Sizes", val: "10 mm to 100 mm" },
      { label: "Operating Pressure", val: "Up to 25 bar" },
      { label: "Temperature Limits", val: "-20 °C to +200 °C" },
      { label: "Standard Envelope", val: "EN 12756 / ISO" },
    ],
  },
  {
    id: "industrial-pumps",
    code: "02",
    name: "Industrial Pumps (Non-API Overhung)",
    eyebrow: "Severe Fluid Transfer",
    standardTag: "ISO 5199 / ANSI B73.1",
    tagline: "Robust Hydraulic Transfer for Clean, Slurry & Corrosive Media",
    summary:
      "Engineered for chemical process and harsh industrial duties—available in open/closed metallic impellers (ANSI B73.1, ISO 5199/2858), solid polymer moulded (PP/GRPP/UHMWPE), armoured polymer, and PVDF/FEP/PFA lined pumps up to 230 °C.",
    productImage: pumpsImg,
    ctaLabel: "Explore Industrial Pumps",
    ctaHref: "/products#industrial-pumps",
    specs: [
      { label: "Flow Capacity", val: "Up to 600 m³/hr" },
      { label: "Differential Head", val: "Up to 160 m" },
      { label: "Pressure Rating", val: "Up to 21 bar" },
      { label: "Fluid Temperature", val: "Up to 230 °C" },
    ],
  },
  {
    id: "cutlass-bearings",
    code: "03",
    name: "Cutlass Bearings (Water-Lubricated)",
    eyebrow: "Hydrodynamic Shaft Support",
    standardTag: "25 MM – 400 MM BORE",
    tagline: "Low-Friction, Water-Lubricated Shaft Support for Marine & Pumps",
    summary:
      "Sleeve and flanged bearings featuring resilient fluted rubber linings bonded inside naval brass, bronze, stainless steel, or composite shells—harnessing water to lubricate, cool, and continuously flush abrasive grit.",
    productImage: cutlassBearingImg,
    ctaLabel: "Explore Cutlass Bearings",
    ctaHref: "/products#cutlass-bearings",
    specs: [
      { label: "Shaft Diameters", val: "25 mm to 400 mm" },
      { label: "Shell Metallurgy", val: "Brass, Bronze, SS, Composite" },
      { label: "Lining Profiles", val: "Fluted, Spiral, Circular, Polygon" },
      { label: "Lubricant Duty", val: "100% Water (Zero Oil)" },
    ],
  },
];

function ProductCard({ sys, index }) {
  return (
    <article
      className="lg:sticky"
      style={{ top: `calc(84px + ${index * 14}px)` }}
    >
      <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-20px_rgba(10,17,34,0.16)] transition-all duration-300 hover:shadow-[0_28px_60px_-20px_rgba(10,17,34,0.22)]">
        {/* Subtle top brand accent hairline */}
        <div
          aria-hidden="true"
          className="h-1 w-full bg-gradient-to-r from-[#253664] via-[#3b579d] to-[#b6812a]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left: Full-Height Flush Studio Product Stage */}
          <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] lg:min-h-[380px] bg-[radial-gradient(ellipse_at_50%_40%,#ffffff_0%,#f2f6fc_65%,#e6eef9_100%)] border-b lg:border-b-0 lg:border-r border-slate-200/80 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Ambient floor shadow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 bottom-[8%] h-4 sm:h-5 w-3/5 -translate-x-1/2 rounded-[50%] bg-brand-950/15 blur-xl transition-all duration-500 group-hover:w-[55%] group-hover:bg-brand-950/20"
            />
            <div className="relative w-full h-52 sm:h-64 lg:h-full lg:min-h-[320px] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03]">
              <Image
                src={sys.productImage}
                alt={sys.name}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 84vw, 480px"
                className="object-contain drop-shadow-[0_18px_28px_rgba(10,17,34,0.16)]"
              />
            </div>
          </div>

          {/* Right: Narrative, Specs & Actions */}
          <div className="lg:col-span-7 p-5 sm:p-7 lg:p-9 flex flex-col justify-between space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-bronze-600">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
                <span>{sys.eyebrow}</span>
              </div>

              <h3 className="mt-1.5 text-xl sm:text-2xl lg:text-[1.75rem] font-bold tracking-tight text-brand-950 uppercase leading-tight">
                {sys.name}
              </h3>

              <p className="mt-1 text-xs sm:text-sm lg:text-base font-semibold text-brand-700 leading-snug">
                {sys.tagline}
              </p>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {sys.summary}
              </p>

              {/* Specs Matrix — Responsive 2x2 on mobile/tablet, 4-col on desktop */}
              <dl className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {sys.specs.map((sp) => (
                  <div
                    key={sp.label}
                    className="rounded-xl bg-slate-50 border border-slate-200/80 px-2.5 sm:px-3 py-2.5"
                  >
                    <dt className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 truncate">
                      {sp.label}
                    </dt>
                    <dd className="mt-0.5 text-xs sm:text-[13px] font-bold text-brand-950 leading-snug">
                      {sp.val}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <Button variant="primary" href={sys.ctaHref}>
                {sys.ctaLabel}
              </Button>

              <Link
                href={`/contact?product=${encodeURIComponent(sys.name)}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-700 hover:text-brand-950 transition-colors self-start sm:self-auto"
              >
                <span>Request Datasheet</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProductPortfolio() {
  return (
    <section
      id="portfolio"
      className="relative bg-slate-50/60 border-b border-slate-200 pt-14 pb-12 sm:pt-18 sm:pb-14 lg:pt-20 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
              <span>CORE ENGINEERING CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 uppercase leading-tight">
              PRECISION-ENGINEERED FOR<br />
              <span className="text-bronze-700">ROTATING EQUIPMENT RELIABILITY.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              SealForge develops high-integrity components across three core product divisions: mechanical seals, severe-duty centrifugal pumps, and water-lubricated cutlass bearings.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 sm:mt-12 flex flex-col gap-8 sm:gap-10 lg:gap-12">
          {systems.map((sys, i) => (
            <ProductCard key={sys.id} sys={sys} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
