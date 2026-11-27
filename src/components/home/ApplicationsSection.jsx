"use client";

import React, { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import petrochemImg from "@/assets/home/Petrochemicle.webp";
import marineImg from "@/assets/home/marine-shipyard.webp";
import powerImg from "@/assets/home/power-generation-plant.webp";
import waterImg from "@/assets/home/water-treatment-facility.webp";
import fertilizerImg from "@/assets/home/fertilizer-manufacturing-plant.webp";
import miningImg from "@/assets/home/mining-processing-facility.webp";
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
    image: petrochemImg,
    duty: "Transferring hot acids, caustic alkalis, organic solvents, and hydrocarbons with zero seal leakage and corrosion-resistant polymer wet ends.",
    answer:
      "PTFE bellows (SF-P) and balanced cartridge seals (SF-B) paired with pure SSiC faces and solid polymer or fluoropolymer-lined chemical process pumps.",
    equipment: "Centrifugal chemical pumps, acid circulation loops, glass-lined reactors",
    build: [
      { label: "Seal Types", value: "SF-B Balanced, SF-P PTFE Bellows" },
      { label: "Pumps", value: "Solid PP / PVDF & PFA-Lined" },
      { label: "Materials", value: "SSiC vs SSiC, FFKM, Alloy C-276" },
    ],
  },
  {
    id: "marine",
    name: "Marine Propulsion & Shipbuilding",
    shortName: "Marine",
    icon: Anchor,
    image: marineImg,
    duty: "Stern tube bearing systems, rudder bearings, strut bearings, and ballast water centrifugal pumps engineered for zero hydrocarbon oil pollution.",
    answer:
      "Water-lubricated cutlass sleeve bearings (25 mm to 400 mm) in ASTM B21 naval brass, bronze, and composite shells, alongside seawater pumps and seals.",
    equipment: "Propeller stern tubes, rudder post bearings, strut brackets, bilge & ballast pumps",
    build: [
      { label: "Bearings", value: "Fluted Cutlass Sleeve & Flanged" },
      { label: "Shells", value: "Naval Brass, Bronze, SS, Composite" },
      { label: "Lubricant", value: "100% Seawater (Zero Oil)" },
    ],
  },
  {
    id: "power",
    name: "Power Generation & Thermal Utilities",
    shortName: "Power",
    icon: Zap,
    image: powerImg,
    duty: "Cooling water circulation, boiler feed assist, flue gas desulphurization, and condensate extraction under high thermal stress.",
    answer:
      "Hydraulically balanced process seals (SF-B) with hydrodynamic circulation channels and heavy-duty metallic centrifugal pumps engineered to ISO 5199.",
    equipment: "Boiler feed assist pumps, condensate extraction pumps, cooling tower circulation",
    build: [
      { label: "Seal Faces", value: "Antimony Carbon vs SSiC / TC" },
      { label: "Metallurgy", value: "CF8M (316 SS), ISO 5199 Casings" },
      { label: "Cooling", value: "Thermosiphon & API Flush Plans" },
    ],
  },
  {
    id: "water-wastewater",
    name: "Water & Wastewater Treatment",
    shortName: "Water & WW",
    icon: Waves,
    image: waterImg,
    duty: "Submersible pump seals, non-clogging raw sewage handling, effluent transfer, and borehole water lift with suspended solids.",
    answer:
      "SF-S single coil spring non-clogging seals and SF-MJ elastomer bellows seals with Tungsten Carbide faces and open-impeller overhung pumps.",
    equipment: "Submersible sewage pumps, raw effluent transfer, borehole lift, sludge decanters",
    build: [
      { label: "Seals", value: "SF-S Single Coil & SF-MJ Bellows" },
      { label: "Impellers", value: "Open & Vortex (ANSI B73.1)" },
      { label: "Hard Faces", value: "Silicon Carbide vs Tungsten Carbide" },
    ],
  },
  {
    id: "fertilizer",
    name: "Fertilizer & Agro-Chemicals",
    shortName: "Fertilizer",
    icon: Factory,
    image: fertilizerImg,
    duty: "Phosphoric and sulphuric acid circulation, ammoniacal solutions, and abrasive slurry pumping in corrosive environments.",
    answer:
      "Armoured solid polymer pumps with compression-moulded UHMWPE / PVDF wet ends paired with external PTFE bellows (SF-P) or balanced slurry seals.",
    equipment: "Phosphoric acid transfer pumps, scrubber circulation loops, ammonia reactors",
    build: [
      { label: "Liners", value: "Transfer-Moulded PVDF & PFA" },
      { label: "Seals", value: "External PTFE Bellows & Slurry" },
      { label: "Hardware", value: "Hastelloy C-276 & Pure SSiC" },
    ],
  },
  {
    id: "mining",
    name: "Mining, Metals & Dredging",
    shortName: "Mining",
    icon: Mountain,
    image: miningImg,
    duty: "Cutterhead bearings, abrasive tailings slurries, pickling lines, and dewatering applications with coarse mineral grit.",
    answer:
      "Water-flushed fluted cutlass bearings that harness water film to continuously flush sand particles, combined with heavy-duty Tungsten Carbide seals.",
    equipment: "Dredge cutterhead bearings, tailing pumps, steel mill pickling line pumps",
    build: [
      { label: "Bearings", value: "Fluted Cutlass (Grit Flush)" },
      { label: "Seals", value: "Tungsten Carbide Face Rings" },
      { label: "Pumps", value: "Semi-Open Abrasive Duty" },
    ],
  },
];

export default function ApplicationsSection() {
  const [active, setActive] = useState(0);
  const sector = sectors[active];

  return (
    <section
      id="applications"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clean Editorial Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
                <span>DEMANDING INDUSTRIES WE SERVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-950 uppercase leading-[1.08]">
                TRUSTED ACROSS HIGH-CONSEQUENCE<br />
                <span className="text-bronze-700">INDUSTRIAL OPERATIONS.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md font-normal">
              Engineered sealing, pumping, and bearing solutions built for continuous operation across six core industrial sectors.
            </p>
          </div>
        </Reveal>

        {/* Minimal Underline Tab Bar */}
        <Reveal delay={60}>
          <div
            role="tablist"
            aria-label="Industrial sectors"
            className="flex items-center gap-1 sm:gap-2 border-b border-slate-200 overflow-x-auto no-scrollbar mb-8"
          >
            {sectors.map((s, i) => {
              const Icon = s.icon;
              const on = i === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={`relative inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                    on
                      ? "text-brand-950"
                      : "text-slate-500 hover:text-brand-900"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      on ? "text-bronze-600" : "text-slate-400"
                    }`}
                  />
                  <span>{s.shortName}</span>

                  {/* Active Underline */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 inset-x-0 h-0.5 transition-all duration-300 ${
                      on ? "bg-[#253664] opacity-100" : "bg-transparent opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Spacious Asymmetric Showcase: Large Photo + Clean Hairline Spec Sheet */}
        <Reveal delay={120}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Crisp Photographic Stage */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_50px_-20px_rgba(10,17,34,0.18)]">
                {sectors.map((s, i) => (
                  <div
                    key={s.id}
                    aria-hidden={i !== active}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      i === active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 620px"
                      priority={i === 0}
                      className="object-cover object-center"
                    />
                  </div>
                ))}

                {/* Subtle bottom gradient for caption legibility */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#070d1c]/85 via-[#070d1c]/30 to-transparent"
                />

                {/* Clean Floating Equipment Caption */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-bronze-300 block">
                      Typical Equipment
                    </span>
                    <p className="mt-0.5 text-xs sm:text-sm font-medium text-white leading-snug">
                      {sector.equipment}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Pure Swiss Editorial Typography (Zero Nested Boxes) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-bold uppercase tracking-tight text-brand-950 leading-tight">
                  {sector.name}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {sector.duty}
                </p>
              </div>

              {/* SealForge Engineering Answer */}
              <div className="border-l-2 border-bronze-500 pl-4 py-0.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 block">
                  SealForge Engineering Solution
                </span>
                <p className="mt-1 text-sm font-medium text-slate-900 leading-relaxed">
                  {sector.answer}
                </p>
              </div>

              {/* Clean Hairline Spec Table */}
              <dl className="divide-y divide-slate-200 border-y border-slate-200">
                {sector.build.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <dt className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 shrink-0">
                      {b.label}
                    </dt>
                    <dd className="text-xs sm:text-sm font-semibold text-brand-950 text-right">
                      {b.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Action CTA */}
              <div className="pt-1">
                <Button
                  variant="primary"
                  href={`/contact?sector=${sector.id}`}
                >
                  Inquire for Your Duty
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
