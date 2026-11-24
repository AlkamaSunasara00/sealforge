"use client";

import React, { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import { ArrowUpRight } from "lucide-react";

const systems = [
  {
    id: "mechanical-seals",
    name: "Mechanical Seals (SF Series)",
    eyebrow: "Pillar 01 • Rotating Shaft Sealing",
    tagline: "Zero-Leakage Performance for Demanding Pump Services",
    summary:
      "Covering 7 proven series designed in alignment with EN 12756 standards. From hydraulically balanced process seals (SF-B Series) handling up to 25 bar and 200 °C, to outside-mounted PTFE bellows seals (SF-P Series) for aggressive acids, non-clogging single-spring seals (SF-S Series), rubber bellows designs (SF-MJ Series), and direct-interchange Grundfos replacement seals (SF-G Series).",
    productImage: "/images/catalogue/mechanical-seals-p1.webp",
    ctaLabel: "Explore Mechanical Seals",
    ctaHref: "/products#mechanical-seals",
    specs: [
      { label: "Shaft Sizes", val: "10 mm to 100 mm" },
      { label: "Operating Pressure", val: "Up to 25 bar" },
      { label: "Temperature Limits", val: "-20 °C to +200 °C" },
      { label: "Standard Envelope", val: "EN 12756 / ISO" },
    ],
    configurations: [
      "SF-B Series: Balanced Process Seals (Up to 25 bar)",
      "SF-U Series: Unbalanced General Process (10–12 bar)",
      "SF-P Series: Outside PTFE Bellows for Aggressive Acids",
      "SF-S Series: Non-Clogging Single Coil Spring",
      "SF-T Series: Tapered Conical Spring Shaft Drive",
      "SF-MJ Series: Elastomer Bellows MG1 / MG12 Interchanges",
      "SF-G Series: Grundfos CR/CRN/NB Dropped-In Replacement",
    ],
  },
  {
    id: "industrial-pumps",
    name: "Industrial Pumps (Non-API Overhung)",
    eyebrow: "Pillar 02 • Severe Fluid Transfer",
    tagline: "Robust Hydraulic Transfer for Clean, Slurry & Corrosive Media",
    summary:
      "Designed for chemical process, utility, and harsh industrial services. Available in open/semi-open metallic impellers (ANSI B73.1), closed-impeller high-efficiency units (ISO 5199/2858 up to 600 m³/hr and 160 m head), solid polymer moulded pumps (PP/GRPP/UHMWPE), armoured polymer pumps, and heavy-duty polymer-lined pumps (PVDF/FEP/PFA) operating up to 230 °C.",
    productImage: "/images/catalogue/industrial-pumps-p1.webp",
    ctaLabel: "Explore Industrial Pumps",
    ctaHref: "/products#industrial-pumps",
    specs: [
      { label: "Flow Capacity", val: "Up to 600 m³/hr" },
      { label: "Differential Head", val: "Up to 160 m" },
      { label: "Pressure Rating", val: "Up to 21 bar" },
      { label: "Fluid Temperature", val: "Up to 230 °C" },
    ],
    configurations: [
      "Metallic Open Impeller (ANSI B73.1, up to 120 m³/hr, 95m head)",
      "Metallic Closed Impeller (ISO 5199 / 2858, up to 600 m³/hr, 160m head)",
      "Solid Polymer Moulded (PP / GRPP / UHMWPE for concentrated acids)",
      "Armoured Solid Polymer (Ductile iron armour + polymer wet end)",
      "Polymer-Lined Overhung (PVDF / FEP / PFA lining up to 230 °C)",
    ],
  },
  {
    id: "cutlass-bearings",
    name: "Cutlass Bearings (Water-Lubricated)",
    eyebrow: "Pillar 03 • Hydrodynamic Shaft Support",
    tagline: "Low-Friction, Water-Lubricated Shaft Support for Marine & Pumps",
    summary:
      "Engineered sleeve bearings featuring resilient, wear-resistant fluted rubber linings bonded inside metallic (naval brass, bronze, stainless steel) or non-metallic composite shells. The internal hydrodynamic grooves harness water to lubricate the shaft, dissipate heat, and continuously flush sand and abrasive grit.",
    productImage: "/images/catalogue/cutlass-bearings-p1.webp",
    ctaLabel: "Explore Cutlass Bearings",
    ctaHref: "/products#cutlass-bearings",
    specs: [
      { label: "Shaft Diameters", val: "25 mm to 400 mm" },
      { label: "Shell Metallurgy", val: "Naval Brass, Bronze, SS, Phenolic" },
      { label: "Housings", val: "Cylindrical Sleeve & Flanged" },
      { label: "Lubricant Duty", val: "100% Water (Zero Oil Pollution)" },
    ],
    configurations: [
      "Cylindrical Sleeve Bearings (ASTM B21 Naval Brass / Bronze)",
      "Flanged Sleeve Bearings with Precision Bolt Circles",
      "Non-Metallic Phenolic Composite Shells (Zero Galvanic Corrosion)",
      "4 Hydrodynamic Profiles: Fluted, Spiral, Circular, Polygon",
    ],
  },
];

function ProductRow({ sys, flip }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-14">
      {/* Studio Stage */}
      <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[5/4] sm:aspect-[16/11] overflow-hidden rounded-[2rem] bg-[radial-gradient(ellipse_at_50%_35%,#ffffff_0%,#f1f3f6_55%,#e1e5eb_100%)] ring-1 ring-slate-200/90 shadow-lg">
          {/* Floor Falloff */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-300/40 to-transparent"
          />
          {/* Contact Shadow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 bottom-[12%] h-7 w-1/2 -translate-x-1/2 rounded-[50%] bg-slate-900/25 blur-xl transition-all duration-700 ease-out group-hover:w-[46%] group-hover:bg-slate-900/20"
          />
          {/* Product Image */}
          <div className="absolute inset-x-[10%] top-[8%] bottom-[14%] transition-transform duration-700 ease-out group-hover:-translate-y-2">
            <Image
              src={sys.productImage}
              alt={sys.name}
              fill
              sizes="(max-width: 1024px) 90vw, 650px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Narrative & Specification Column */}
      <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
        <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-700 block mb-2">
          {sys.eyebrow}
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950">
          {sys.name}
        </h3>
        <p className="mt-2 text-base font-semibold text-brand-900 leading-snug">
          {sys.tagline}
        </p>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          {sys.summary}
        </p>

        {/* Core Specs Grid */}
        <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 py-4 border-y border-slate-200 bg-slate-50/70 rounded-xl px-4">
          {sys.specs.map((sp) => (
            <div key={sp.label} className="space-y-0.5">
              <dt className="text-xs font-mono text-slate-600 uppercase font-semibold">
                {sp.label}
              </dt>
              <dd className="text-sm font-bold text-slate-950">{sp.val}</dd>
            </div>
          ))}
        </dl>

        {/* Expandable Configurations */}
        <div
          id={`more-${sys.id}`}
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-4 pb-2 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-slate-600 block">
                Configurations & Series:
              </span>
              <ul className="space-y-1.5">
                {sys.configurations.map((cfg) => (
                  <li key={cfg} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-700 mt-2 shrink-0" />
                    <span>{cfg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button variant="primary" href={sys.ctaHref}>
            <span>{sys.ctaLabel}</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={`more-${sys.id}`}
            onClick={() => setOpen((v) => !v)}
            className="text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 transition-colors"
          >
            {open ? "Hide configurations" : "View configurations & series"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductPortfolio() {
  return (
    <section
      id="portfolio"
      className="relative bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
              <span>CORE ENGINEERING CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 uppercase leading-tight">
              PRECISION-ENGINEERED FOR<br />
              <span className="text-slate-500">ROTATING EQUIPMENT RELIABILITY.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              SealForge develops high-integrity components across three core product divisions: mechanical seals, severe-duty centrifugal pumps, and water-lubricated cutlass bearings.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 sm:mt-18 space-y-16 sm:space-y-24">
          {systems.map((sys, i) => (
            <Reveal key={sys.id}>
              <ProductRow sys={sys} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
