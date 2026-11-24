"use client";

import React, { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import {
  Thermometer,
  ShieldCheck,
  Atom,
  CheckCircle2,
  FileDown,
  ArrowRight
} from "lucide-react";

const materialCategories = [
  {
    id: "faces",
    name: "Sealing Face Pairings",
    summary:
      "Tribologically paired rotary and stationary faces engineered to withstand abrasive slurries, high PV values, and thermal shock.",
    items: [
      {
        name: "Silicon Carbide vs. Silicon Carbide (SSiC / SSiC)",
        hardness: "Extreme (HV > 2500)",
        duty: "Universal Chemical & Slurry",
        temp: "-40 °C to +200 °C",
        description:
          "Sintered alpha silicon carbide pairing offering near-diamond hardness, superior thermal conductivity, and universal chemical inertness in abrasive sludges and crystallization duties.",
      },
      {
        name: "Carbon Graphite vs. SSiC / Ceramic",
        hardness: "Self-Lubricating (Medium)",
        duty: "Clean Water, Hydrocarbons & Solvents",
        temp: "-30 °C to +200 °C",
        description:
          "Resin or antimony impregnated carbon rotary face paired with a ceramic or SSiC stationary seat. Delivers an exceptionally low friction coefficient in non-abrasive duties.",
      },
      {
        name: "Tungsten Carbide (Nickel / Cobalt Binder)",
        hardness: "High Fracture Toughness (HV ~ 1600)",
        duty: "Heavy Mineral Shock & Slurry",
        temp: "-20 °C to +180 °C",
        description:
          "High-density cemented carbide providing unmatched fracture toughness against hydraulic water hammer, solid grit impact, and heavy viscous media.",
      },
    ],
  },
  {
    id: "elastomers",
    name: "Secondary Elastomers",
    summary:
      "Resilient O-rings, boots, and bellows matched to fluid solvency, swelling indices, and process temperatures.",
    items: [
      {
        name: "NBR (Nitrile)",
        hardness: "70–80 Shore A",
        duty: "Oils, Water & Coolants",
        temp: "-30 °C to +120 °C",
        description:
          "Cost-effective general purpose elastomer with excellent resistance to mineral oils, lubricating oils, and utility water services.",
      },
      {
        name: "EPDM (Ethylene Propylene)",
        hardness: "70–75 Shore A",
        duty: "Steam, Hot Water & Dilute Alkalis",
        temp: "-40 °C to +150 °C",
        description:
          "Outstanding resistance to high-temperature steam, boiler feed water, and dilute caustic solutions. (Unsuitable for hydrocarbon oils).",
      },
      {
        name: "FKM (Fluorocarbon / Viton®)",
        hardness: "75–85 Shore A",
        duty: "Hydrocarbons, Fuels & Dilute Acids",
        temp: "-20 °C to +200 °C",
        description:
          "High thermal and chemical resistance against petroleum products, chlorinated hydrocarbons, and mild mineral acids.",
      },
      {
        name: "PTFE & FFKM Perfluoroelastomer",
        hardness: "Universal Chemical Grade",
        duty: "Boiling Acids, Solvents & Oxidizers",
        temp: "-50 °C to +300 °C",
        description:
          "Virgin PTFE bellows and FFKM perfluoroelastomer O-rings providing near-universal chemical immunity in aggressive organic synthesis and hot nitric/hydrochloric acids.",
      },
    ],
  },
  {
    id: "pumps",
    name: "Pump Metallurgy & Liners",
    summary:
      "Wet-end construction materials matching mechanical pressure containment with severe corrosive chemical handling.",
    items: [
      {
        name: "Austenitic Stainless Steel (CF8M / 316 SS)",
        hardness: "Metallic Overhung Standard",
        duty: "Industrial Solvents & General Chemicals",
        temp: "-30 °C to +200 °C",
        description:
          "Investment cast CF8M casing and closed/open impellers meeting ISO 5199 / ANSI B73.1 dimensional standards for reliable 24/7 service.",
      },
      {
        name: "Solid Moulded Polymers (PP / GRPP / UHMWPE)",
        hardness: "100% Metal-Free Wet End",
        duty: "Concentrated Pickling & Plating Acids",
        temp: "-10 °C to +80 °C (PP) / +100 °C (GRPP)",
        description:
          "Compression-moulded solid polymer pump bodies delivering complete immunity to hydrochloric acid, ferric chloride, and electroplating baths with zero metallic contact.",
      },
      {
        name: "Armoured Fluoropolymer Liners (PVDF / PFA)",
        hardness: "Ductile Iron Exterior Armour",
        duty: "Severe Corrosive Media up to 230 °C",
        temp: "-20 °C to +230 °C",
        description:
          "Combines the structural pressure rating of heavy ductile iron armour with the total chemical inertness of seamless transfer-moulded PFA / PVDF fluoropolymers.",
      },
    ],
  },
  {
    id: "standards",
    name: "Design & Metrology Standards",
    summary:
      "All SealForge components adhere to internationally recognized engineering and dimensional conventions.",
    items: [
      {
        name: "EN 12756 (formerly DIN 24960)",
        hardness: "Dimensional Cavity Standard",
        duty: "Mechanical Seal Envelope & Fitting",
        temp: "Standard L1k & L1n Lengths",
        description:
          "Governs the envelope dimensions, shaft tolerances, and working installation lengths of our SF-B, SF-U, SF-MJ, and SF-T series seals.",
      },
      {
        name: "ISO 5199 / ISO 2858",
        hardness: "Hydraulic Process Standard",
        duty: "Chemical Process Centrifugal Pumps",
        temp: "Heads to 160m | Flows to 600 m³/hr",
        description:
          "Defines mechanical design rules, shaft deflection limits, and mounting dimensions for our metallic and polymer-lined centrifugal pumps.",
      },
      {
        name: "ANSI B73.1 & ANSI B16.5 Class 150",
        hardness: "Chemical Overhung Standard",
        duty: "Flange Ratings & Casing Geometry",
        temp: "Pressures up to 21 bar",
        description:
          "Standardized dimensioning for open-impeller pumps and industrial raised-face flanged process connections.",
      },
    ],
  },
];

export default function MaterialsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCategory = materialCategories[activeTab];

  return (
    <section
      className="py-16 sm:py-20 lg:py-28 bg-slate-50 border-b border-slate-200"
      id="materials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
                <span>MATERIAL SCIENCE & ENGINEERING INTEGRITY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight">
                MATERIAL SELECTION MATCHED TO<br />
                <span className="text-slate-500">REAL OPERATING CONDITIONS.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Mechanical equipment reliability begins with material compatibility. A seal or pump failure is almost never random—it is caused by incorrect material selection for the fluid, temperature, or solids content.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-4">
              <Link
                href="/products#materials"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-brand-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors shadow-xs"
              >
                <span>View Full Material Guide</span>
                <ArrowRight className="w-4 h-4 text-brand-700" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Category Navigation Pills */}
        <Reveal delay={100}>
          <div className="flex items-center gap-2 sm:gap-3 border-b border-slate-200 pb-4 mb-10 overflow-x-auto">
            {materialCategories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === idx
                    ? "bg-[#253664] text-white shadow-md scale-102"
                    : "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tab Header Sub-summary */}
        <Reveal delay={150}>
          <div className="mb-6 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Atom className="w-5 h-5 text-brand-700 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {currentCategory.summary}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-brand-700 uppercase shrink-0 hidden sm:inline">
              ISO / DIN / ANSI COMPLIANT
            </span>
          </div>
        </Reveal>

        {/* Active Cards Grid */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-brand-600 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-950 leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-brand-50 text-brand-900 border border-brand-200 font-bold shrink-0">
                      {item.hardness}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <Thermometer className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{item.temp}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>Target Duty: {item.duty}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
