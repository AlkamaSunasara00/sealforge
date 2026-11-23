"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import {
  Droplet,
  Flame,
  Zap,
  Waves,
  Mountain,
  Anchor,
  ShieldCheck,
  Factory,
} from "lucide-react";

const sectors = [
  {
    id: "chemical",
    name: "Chemical & Petrochemical",
    shortName: "Chemical",
    icon: Droplet,
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=80",
    duty: "Corrosive acids, organic solvents & aggressive chemical polymerization",
    problem:
      "Aggressive media and volatile flash points rapidly attack conventional seal faces and elastomer O-rings, leading to sudden leaks and environmental downtime.",
    answer:
      "PTFE bellows and cartridge mechanical seals engineered with pure sintered Silicon Carbide (SSiC) faces and FFKM perfluoroelastomers for zero chemical degradation.",
    equipment: "Centrifugal chemical pumps, glass-lined reactors, acid circulation loops",
    build: [
      ["Faces", "Sintered Silicon Carbide (SSiC vs SSiC)"],
      ["Geometry", "PTFE bellows / Single or double cartridge"],
      ["Elastomers", "FFKM perfluoroelastomers"],
    ],
  },
  {
    id: "oil-gas",
    name: "Oil & Gas Refining",
    shortName: "Oil & Gas",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    duty: "Volatile hydrocarbons, light ends & high vapor pressure containment",
    problem:
      "Vaporizing light ends, high shaft speeds, and swinging stuffing box pressures demand rigorous API 682 containment and zero fugitive hydrocarbon emissions.",
    answer:
      "Heavy-duty API 682 cartridge assemblies featuring stationary multi-spring geometry, dual pressurized barrier fluid systems, and secondary containment.",
    equipment: "Crude transfer pumps, refinery booster pumps, pipeline compressors",
    build: [
      ["Faces", "Premium Carbon vs Silicon Carbide, API 682"],
      ["Geometry", "Stationary multi-spring cartridge assembly"],
      ["Support", "Dual pressurized barrier fluid circulation"],
    ],
  },
  {
    id: "power",
    name: "Power Generation",
    shortName: "Power",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80",
    duty: "High-temperature boiler feed, condensate return & high-energy loops",
    problem:
      "Shaft speeds above 3,600 RPM and ultra-pure demineralized water with almost no natural lubricity leave seal faces starved of hydrodynamic boundary film.",
    answer:
      "Hydraulically balanced seals pairing antimony-impregnated carbon against Tungsten Carbide with engineered hydrodynamic circulation channels.",
    equipment: "Boiler feed pumps, condensate extraction pumps, cooling tower circulation",
    build: [
      ["Faces", "Resin/antimony carbon vs Tungsten Carbide"],
      ["Geometry", "Hydraulically balanced precision geometry"],
      ["Circulation", "Hydrodynamic boundary circulation channels"],
    ],
  },
  {
    id: "water-wastewater",
    name: "Water & Wastewater",
    shortName: "Water",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",
    duty: "Abrasive grit, sand silt, sewage sludge & heavy solids handling",
    problem:
      "Suspended sand, gravel, and crystalline fibrous particles create severe face scoring and spring clogging in conventional mechanical seals.",
    answer:
      "Hard-faced Tungsten Carbide against Silicon Carbide combinations with encapsulated non-clogging wave springs and cutlass rubber sleeve bearings.",
    equipment: "Submersible sewage pumps, sludge transfer, raw water intake stations",
    build: [
      ["Faces", "Tungsten Carbide vs Silicon Carbide"],
      ["Spring", "Encapsulated non-clogging wave spring"],
      ["Bearings", "Water-lubricated cutlass rubber sleeves"],
    ],
  },
  {
    id: "mining",
    name: "Mining & Mineral Slurry",
    shortName: "Mining",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80",
    duty: "Heavy mineral tailings, froth flotation & concentrated ore slurries",
    problem:
      "Extreme slurry abrasion and high volume of suspended mineral solids destroy standard seal faces within weeks of continuous duty.",
    answer:
      "Heavy-duty slurry seals engineered with wide face geometry, Tungsten Carbide wear rings, and dedicated non-clogging external flushing ports.",
    equipment: "Froth flotation pumps, thickener underflow, cyclone feed pumps",
    build: [
      ["Faces", "Solid Tungsten Carbide, wide face geometry"],
      ["Body", "Heavy-duty slurry seal with wear rings"],
      ["Flushing", "Non-clogging external flush injection"],
    ],
  },
  {
    id: "marine",
    name: "Marine & Propulsion",
    shortName: "Marine",
    icon: Anchor,
    image:
      "https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1000&q=80",
    duty: "Seawater stern tubes, rudder struts & submerged propeller shaft support",
    problem:
      "Submerged propeller shafts must operate with zero hydrocarbon oil leakage to meet maritime environmental laws while maintaining continuous low-friction lubrication.",
    answer:
      "Water-lubricated cutlass bearings manufactured with naval brass or composite shells lined with grooved nitrile rubber, alongside seawater mechanical seals.",
    equipment: "Propeller stern tubes, rudder post bearings, bilge and ballast pumps",
    build: [
      ["Shell", "Naval brass (ASTM B21) or composite"],
      ["Lining", "High-durometer grooved nitrile rubber"],
      ["Lubricant", "Seawater fluid film, 100% zero oil leakage"],
    ],
  },
  {
    id: "pharma",
    name: "Pharmaceutical & Sanitary",
    shortName: "Pharma",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    duty: "WFI, sterile batching, active ingredients & CIP/SIP thermal cycles",
    problem:
      "Zero dead legs or crevices can be tolerated, and steam-in-place cycles at 135°C must not degrade elastomer seals or contaminate pure batches.",
    answer:
      "Crevice-free, electro-polished 316L stainless steel assemblies equipped with FDA USP Class VI compliant elastomers and sterile flush barriers.",
    equipment: "WFI distribution loops, bio-reactors and agitators, sanitary transfer pumps",
    build: [
      ["Metallurgy", "Electro-polished 316L, crevice-free"],
      ["Geometry", "Hygienic flush profile, zero dead legs"],
      ["Elastomers", "USP Class VI FDA-grade elastomers"],
    ],
  },
  {
    id: "sugar",
    name: "Sugar & Agro-Processing",
    shortName: "Sugar",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    duty: "Viscous raw sugarcane juice, heavy molasses & crystallizing syrups",
    problem:
      "Heavy sugar syrups crystallize rapidly between faces during shutdowns, causing face adhesion, scoring, and coil spring binding.",
    answer:
      "Balanced cartridge seals engineered with external wave springs and a dedicated quench barrier that washes sugar crystals away before adhesion occurs.",
    equipment: "Juice extraction pumps, molasses transfer pumps, boiling pan agitators",
    build: [
      ["Faces", "Balanced cartridge faces, hard-to-hard"],
      ["Spring", "External non-clogging wave spring"],
      ["Barrier", "Quench fluid barrier clears crystal build-up"],
    ],
  },
];

const COUNT = sectors.length;
const STEP = 360 / COUNT;

export default function ApplicationsSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const sector = sectors[active];

  const go = (i) => {
    const next = (i + COUNT) % COUNT;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      go(active - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0);
    } else if (e.key === "End") {
      e.preventDefault();
      go(COUNT - 1);
    }
  };

  return (
    <section
      id="applications"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Header with Standardized Eyebrow */}
        <Reveal>
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
              <span>INDUSTRIAL APPLICATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 uppercase leading-tight">
              ENGINEERED AROUND<br />
              <span className="text-slate-500">THE APPLICATION DUTY.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              From severe chemical processing and abrasive mineral mining to naval propulsion stern tubes, SealForge components operate in mission-critical environments across major industrial sectors.
            </p>
          </div>
        </Reveal>

        {/* Interactive Dial & Details Showcase with Brand Colors */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Dial Column with Image in Middle */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div
                  role="tablist"
                  aria-label="Industry sectors"
                  onKeyDown={onKeyDown}
                  className="relative mx-auto aspect-square w-full max-w-[28rem] sm:max-w-[30rem]"
                >
                  {/* Outer Orbit Track */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-[8%] rounded-full border border-slate-300/80"
                  />

                  {/* Rotating Selector Arm with Brand Bronze Pointer */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,0.8,0.2,1)] motion-reduce:transition-none"
                    style={{ transform: `rotate(${active * STEP}deg)` }}
                  >
                    <div className="absolute left-1/2 top-[8%] h-[42%] w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-700 via-bronze-500 to-transparent" />
                    <div className="absolute left-1/2 top-[8%] size-12 sm:size-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-700 bg-brand-50/50 shadow-sm" />
                  </div>

                  {/* Central Circular Aperture with High-Resolution Stock Images */}
                  <div className="absolute inset-[20%] rounded-full overflow-hidden border-2 border-brand-700/20 shadow-xl bg-slate-950 flex items-center justify-center">
                    {sectors.map((s, i) => (
                      <div
                        key={s.id}
                        aria-hidden={i !== active}
                        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                          i === active ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={s.image}
                          alt={s.name}
                          fill
                          sizes="360px"
                          priority={i === 0}
                          className="object-cover object-center filter brightness-90 contrast-115"
                        />
                        {/* Subtle Vignette for Contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/40" />

                        {/* Floating Sector Pill Tag */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
                          <span className="px-3 py-1 rounded-full bg-[#070d1c]/80 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-white uppercase tracking-wider text-center shadow-md">
                            {s.shortName}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 8 Sector Nodes Orbiting the Track */}
                  {sectors.map((s, i) => {
                    const on = i === active;
                    const Icon = s.icon;
                    const rad = (i * STEP * Math.PI) / 180;
                    return (
                      <button
                        key={s.id}
                        ref={(el) => {
                          tabRefs.current[i] = el;
                        }}
                        type="button"
                        role="tab"
                        id={`sector-tab-${s.id}`}
                        aria-selected={on}
                        aria-controls={`sector-panel-${s.id}`}
                        aria-label={s.name}
                        title={s.name}
                        tabIndex={on ? 0 : -1}
                        onClick={() => setActive(i)}
                        style={{
                          left: `${50 + 42 * Math.sin(rad)}%`,
                          top: `${50 - 42 * Math.cos(rad)}%`,
                        }}
                        className={`absolute flex size-10 sm:size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 ${
                          on
                            ? "border-brand-700 bg-[#253664] text-white shadow-md scale-110"
                            : "border-slate-300 bg-white text-slate-600 hover:border-brand-700 hover:text-brand-900 hover:scale-105"
                        }`}
                      >
                        <Icon className="size-4 sm:size-5" strokeWidth={on ? 2 : 1.75} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Details Column with Brand Typography & Colors */}
              <div className="grid lg:col-span-6">
                {sectors.map((s, i) => {
                  const on = i === active;
                  return (
                    <div
                      key={s.id}
                      role="tabpanel"
                      id={`sector-panel-${s.id}`}
                      aria-labelledby={`sector-tab-${s.id}`}
                      aria-hidden={!on}
                      className={`col-start-1 row-start-1 space-y-6 transition-[opacity,transform,visibility] duration-500 ease-out motion-reduce:transition-none ${
                        on
                          ? "visible translate-y-0 opacity-100 delay-100 motion-reduce:delay-0"
                          : "invisible translate-y-3 opacity-0 pointer-events-none"
                      }`}
                    >
                      {/* Sector Title & Operating Duty */}
                      <div className="space-y-1.5">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-950">
                          {s.name}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-brand-900">
                          {s.duty}
                        </p>
                      </div>

                      {/* Problem vs Answer with Brand Accent Border */}
                      <div className="space-y-3 border-l-2 border-brand-700/40 pl-4 py-1">
                        <div>
                          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            OPERATING CHALLENGE:
                          </p>
                          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600 mt-0.5">
                            {s.problem}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700">
                            SEALFORGE SOLUTION:
                          </p>
                          <p className="text-xs sm:text-[13px] font-medium leading-relaxed text-slate-900 mt-0.5">
                            {s.answer}
                          </p>
                        </div>
                      </div>

                      {/* Build Specifications List */}
                      <dl className="divide-y divide-slate-200 border-y border-slate-200">
                        {s.build.map(([label, value], n) => (
                          <div key={label} className="flex items-baseline gap-3 py-2.5">
                            <span className="size-5 shrink-0 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-[10px] font-mono font-bold flex items-center justify-center">
                              {n + 1}
                            </span>
                            <dt className="w-24 shrink-0 text-xs font-mono font-bold uppercase text-slate-400">
                              {label}
                            </dt>
                            <dd className="text-xs sm:text-[13px] font-medium text-slate-900">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      {/* Typical Rotating Equipment */}
                      <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600">
                        <span className="font-mono font-bold uppercase text-slate-400 block text-[10px] mb-0.5">
                          TYPICAL ROTATING EQUIPMENT:
                        </span>
                        {s.equipment}
                      </p>

                      {/* Direct CTA Button */}
                      <div className="pt-1">
                        <Button
                          variant="primary"
                          href={`/contact?sector=${s.id}#conversation`}
                          tabIndex={on ? 0 : -1}
                        >
                          Discuss Your Duty
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
