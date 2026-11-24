"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import {
  Droplet,
  Anchor,
  Zap,
  Waves,
  Factory,
  Mountain,
} from "lucide-react";

const sectors = [
  {
    id: "chemical",
    name: "Chemical & Petrochemical Processing",
    shortName: "Chemical",
    icon: Droplet,
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=80",
    duty: "Transferring hot acids, caustic alkalis, organic solvents, and hydrocarbons with zero seal leakage and corrosion-resistant polymer wet ends.",
    problem:
      "Aggressive media and volatile flash points rapidly attack conventional seal faces and elastomer O-rings, leading to sudden leaks and environmental downtime.",
    answer:
      "PTFE bellows (SF-P) and balanced cartridge seals (SF-B) paired with pure SSiC faces and solid polymer or fluoropolymer-lined chemical process pumps.",
    equipment: "Centrifugal chemical pumps, acid circulation loops, glass-lined reactors",
    build: [
      ["Seal Types", "SF-B Balanced, SF-P Outside PTFE Bellows"],
      ["Pumps", "Solid PP / PVDF & PFA-Lined Centrifugal Pumps"],
      ["Materials", "SSiC vs SSiC, FFKM / PTFE, Alloy C-276"],
    ],
  },
  {
    id: "marine",
    name: "Marine Propulsion & Shipbuilding",
    shortName: "Marine",
    icon: Anchor,
    image:
      "https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1000&q=80",
    duty: "Stern tube bearing systems, rudder bearings, strut bearings, and ballast water centrifugal pumps.",
    problem:
      "Submerged propeller shafts must operate with zero hydrocarbon oil leakage to meet maritime environmental laws while maintaining continuous low-friction shaft support.",
    answer:
      "Water-lubricated cutlass sleeve bearings (25 mm to 400 mm) in ASTM B21 naval brass, bronze, and composite shells, alongside seawater pumps and seals.",
    equipment: "Propeller stern tubes, rudder post bearings, strut brackets, bilge and ballast pumps",
    build: [
      ["Bearings", "Fluted water-lubricated cutlass sleeve & flanged bushings"],
      ["Shells", "Naval brass, bronze, stainless steel, phenolic composite"],
      ["Lubricant", "100% seawater fluid film, zero hydrocarbon oil"],
    ],
  },
  {
    id: "power",
    name: "Power Generation & Thermal Utilities",
    shortName: "Power",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80",
    duty: "Cooling water circulation, boiler feed assist, flue gas desulphurization, and condensate extraction.",
    problem:
      "High operating temperatures, low-lubricity demineralized water, and abrasive gypsum slurry in flue gas desulphurization cause extreme face degradation.",
    answer:
      "Hydraulically balanced process seals (SF-B) with hydrodynamic circulation channels and heavy-duty metallic centrifugal pumps engineered to ISO 5199.",
    equipment: "Boiler feed assist pumps, condensate extraction pumps, cooling tower circulation",
    build: [
      ["Seal Faces", "Resin/antimony carbon vs Silicon Carbide / Tungsten Carbide"],
      ["Metallurgy", "CF8M (316 SS) and ISO 5199 heavy-duty casings"],
      ["Cooling", "Thermosiphon circulation & API flush auxiliary plans"],
    ],
  },
  {
    id: "water-wastewater",
    name: "Water & Wastewater Treatment",
    shortName: "Water & WW",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",
    duty: "Submersible pump seals, non-clogging raw sewage handling, effluent transfer, and borehole water lift.",
    problem:
      "Suspended sand, stringy fibrous debris, and abrasive sewage sludge cause rapid spring clogging and face grooving in standard seals.",
    answer:
      "SF-S single coil spring non-clogging seals and SF-MJ elastomer bellows seals with Tungsten Carbide faces and open-impeller overhung pumps.",
    equipment: "Submersible sewage pumps, raw effluent transfer, borehole lift, sludge decanters",
    build: [
      ["Seals", "SF-S Single Coil Non-Clogging & SF-MJ Bellows"],
      ["Impellers", "Open and vortex impellers per ANSI B73.1"],
      ["Hard Faces", "Silicon Carbide vs Tungsten Carbide"],
    ],
  },
  {
    id: "fertilizer",
    name: "Fertilizer & Agro-Chemicals",
    shortName: "Fertilizer",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    duty: "Phosphoric and sulphuric acid circulation, ammoniacal solutions, and abrasive slurry pumping.",
    problem:
      "Hot crystallizing phosphate rock slurries and boiling sulphuric acid present simultaneous chemical corrosion and high-velocity abrasive erosion.",
    answer:
      "Armoured solid polymer pumps with compression-moulded UHMWPE / PVDF wet ends paired with external PTFE bellows (SF-P) or balanced slurry seals.",
    equipment: "Phosphoric acid transfer pumps, scrubber circulation loops, ammonia reactors",
    build: [
      ["Liners", "Transfer-moulded PVDF & PFA with ductile iron armour"],
      ["Seals", "External PTFE bellows & balanced cartridge seals"],
      ["Hardware", "Hastelloy C-276 springs and pure SSiC faces"],
    ],
  },
  {
    id: "mining",
    name: "Mining, Metals & Dredging",
    shortName: "Mining",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80",
    duty: "Cutterhead bearings, abrasive tailings slurries, pickling lines, and dewatering applications.",
    problem:
      "High mineral solid concentrations, coarse sand gouging, and severe vibration destroy ordinary mechanical components within weeks.",
    answer:
      "Water-flushed fluted cutlass bearings that harness water film to continuously flush sand particles, combined with heavy-duty Tungsten Carbide seals.",
    equipment: "Dredge cutterhead bearings, tailing pumps, steel mill pickling line pumps",
    build: [
      ["Bearings", "Fluted cutlass bearings with hydrodynamic grit flush channels"],
      ["Seals", "Tungsten Carbide face rings with protected springs"],
      ["Pumps", "Semi-open abrasive duty overhung centrifugal pumps"],
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
      className="relative overflow-hidden border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
              <span>DEMANDING INDUSTRIES WE SERVE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 uppercase leading-tight">
              TRUSTED ACROSS HIGH-CONSEQUENCE<br />
              <span className="text-slate-500">INDUSTRIAL OPERATIONS.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              From severe chemical synthesis and marine propulsion stern tubes to high-head utility pumping and mineral slurry transfer, SealForge components keep mission-critical rotating equipment running across India and worldwide.
            </p>
          </div>
        </Reveal>

        {/* Interactive Dial & Details Showcase */}
        <Reveal delay={150}>
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Dial Column with Image in Middle */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div
                  role="tablist"
                  aria-label="Industry sectors"
                  onKeyDown={onKeyDown}
                  className="relative mx-auto aspect-square w-full max-w-[26rem] sm:max-w-[28rem]"
                >
                  {/* Outer Orbit Track */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-[8%] rounded-full border border-slate-300/80"
                  />

                  {/* Rotating Selector Arm */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,0.8,0.2,1)] motion-reduce:transition-none"
                    style={{ transform: `rotate(${active * STEP}deg)` }}
                  >
                    <div className="absolute left-1/2 top-[8%] h-[42%] w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-700 via-bronze-500 to-transparent" />
                    <div className="absolute left-1/2 top-[8%] size-12 sm:size-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-700 bg-brand-50/50 shadow-sm" />
                  </div>

                  {/* Central Circular Aperture with High-Resolution Photography */}
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
                        {/* Vignette */}
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

                  {/* 6 Sector Nodes Orbiting the Track */}
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
                        className={`absolute flex size-11 sm:size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 ${
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

              {/* Details Column with Verified Engineering Content */}
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
                        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-950">
                          {s.name}
                        </h3>
                        <p className="text-sm font-semibold text-brand-900 leading-relaxed">
                          {s.duty}
                        </p>
                      </div>

                      {/* Problem vs Answer */}
                      <div className="space-y-3 border-l-2 border-brand-700/40 pl-4 py-1">
                        <div>
                          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
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
                            <dt className="w-24 shrink-0 text-xs font-mono font-bold uppercase text-slate-600">
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
                        <span className="font-mono font-bold uppercase text-slate-600 block text-[10px] mb-0.5">
                          TYPICAL ROTATING EQUIPMENT:
                        </span>
                        {s.equipment}
                      </p>

                      {/* Direct CTA Button */}
                      <div className="pt-1">
                        <Button
                          variant="primary"
                          href={`/contact?sector=${s.id}`}
                          tabIndex={on ? 0 : -1}
                        >
                          Inquire for Your Duty
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
