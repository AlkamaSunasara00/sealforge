"use client";

import React, { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import dutyAnalysisImg from "@/assets/home/duty-analysis-industrial-engineering.webp";
import compatibilityAnalysisImg from "@/assets/home/engineering-compatibility-analysis.webp";
import precisionManufacturingImg from "@/assets/home/precision-manufacturing-engineering.webp";
import qualityDispatchImg from "@/assets/home/industrial-quality-dispatch.webp";

const steps = [
  {
    step: "01",
    phase: "Operating Duty Review",
    title: "Duty Analysis & Fluid Review",
    short: "Duty Review",
    description:
      "You provide the fluid chemistry, operating temperature, suction/discharge pressure, shaft speed, and solids concentration. We evaluate vapour pressure margins to prevent face flashing.",
    image: dutyAnalysisImg,
    parameters: "Fluid Chemistry • Suction/Discharge Head • Operating Temp • Shaft RPM",
  },
  {
    step: "02",
    phase: "Engineering Selection",
    title: "Compatibility & Engineering Match",
    short: "Tribology Match",
    description:
      "Our engineers cross-reference face combinations (SSiC, Carbon, TC), elastomer grades (FKM, EPDM, FFKM), casing metallurgies, or cutlass clearances to eliminate premature failure risks.",
    image: compatibilityAnalysisImg,
    parameters: "Face Hardness • PV Limits • Chemical Swell Rating • Flush Geometry",
  },
  {
    step: "03",
    phase: "Precision Fabrication",
    title: "Precision Manufacturing & Fit",
    short: "Manufacturing",
    description:
      "Built in our Mumbai facility to exact drawings, standard metric/imperial dimensions (EN 12756, ISO 5199, ANSI B73.1), or engineered-to-order retrofit specifications.",
    image: precisionManufacturingImg,
    parameters: "EN 12756 Tolerances • Precision Lapping • Dynamic Balancing • Flange Alignment",
  },
  {
    step: "04",
    phase: "Quality Dispatch",
    title: "Dispatch & Application Support",
    short: "Dispatch & Support",
    description:
      "Delivered ready-to-install with complete technical documentation, mill test certificates, installation guidelines, and direct engineering backup for commissioning.",
    image: qualityDispatchImg,
    parameters: "100% Quality Checked • Installation Sheets • Serial Traceability • Ongoing Backup",
  },
];

export default function EngineeringStory() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-slate-50 border-b border-slate-200 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
              <span>HOW WE WORK — APPLICATION-FIRST SELECTION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 uppercase leading-tight">
              SELECTION STARTS WITH<br />
              <span className="text-bronze-700">YOUR OPERATING DUTY.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              We do not sell rotating equipment &quot;off a generic shelf.&quot; Our application engineers analyze your operating parameters to ensure first-time-right fit and extended mean time between maintenance (MTBM).
            </p>
          </div>
        </Reveal>

        {/* Expanding Panels */}
        <Reveal delay={150}>
          <ul className="flex h-[28rem] sm:h-[30rem] lg:h-[26rem] flex-col gap-2.5 sm:gap-3 lg:flex-row">
            {steps.map((st, i) => {
              const on = i === active;
              return (
                <li
                  key={st.step}
                  className={`min-h-0 min-w-0 basis-0 transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,0.8,0.2,1)] motion-reduce:transition-none ${
                    on ? "grow-[4.5]" : "grow"
                  }`}
                >
                  <article
                    tabIndex={0}
                    aria-label={`Stage ${st.step}: ${st.title}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-950 outline-none ring-offset-2 ring-offset-slate-50 focus-visible:ring-2 focus-visible:ring-brand-700 shadow-md"
                  >
                    {/* Background Photography */}
                    <Image
                      src={st.image}
                      alt={st.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      priority={i === 0}
                      className={`object-cover object-center transition-transform duration-700 ease-out motion-reduce:transition-none ${
                        on ? "scale-100" : "scale-105"
                      }`}
                    />

                    {/* Gradient Overlay for Readability */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30"
                    />

                    {/* Collapsed Dimming */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-slate-950 transition-opacity duration-500 motion-reduce:transition-none ${
                        on ? "opacity-0" : "opacity-45 group-hover:opacity-20"
                      }`}
                    />

                    {/* Collapsed State Minimal Tab Display */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 flex items-center justify-between px-5 transition-opacity duration-200 motion-reduce:transition-none lg:flex-col lg:items-center lg:justify-between lg:py-7 lg:px-0 ${
                        on ? "pointer-events-none opacity-0" : "opacity-100 delay-150"
                      }`}
                    >
                      <span className="font-mono text-xs font-bold text-bronze-300">
                        {st.step}
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-white lg:[writing-mode:vertical-rl] lg:rotate-180">
                        {st.short}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-amber-300 transition-colors" />
                    </div>

                    {/* Expanded State Clean Editorial Content */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-between p-6 sm:p-7 lg:p-8 text-white transition-[opacity,transform] duration-400 ease-out motion-reduce:transition-none ${
                        on
                          ? "translate-y-0 opacity-100 delay-150 motion-reduce:delay-0"
                          : "pointer-events-none translate-y-3 opacity-0"
                      }`}
                    >
                      {/* Top Header Tag */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-bronze-300">
                            STEP {st.step}
                          </span>
                          <span className="text-white/40 font-mono text-xs">•</span>
                          <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                            {st.phase}
                          </span>
                        </div>
                      </div>

                      {/* Main Narrative */}
                      <div className="space-y-3 max-w-xl">
                        <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
                          {st.title}
                        </h3>

                        <p className="text-xs sm:text-sm leading-relaxed text-slate-200 font-normal">
                          {st.description}
                        </p>

                        {/* Subtle Focal Parameters Text */}
                        <div className="pt-2 text-xs font-mono text-slate-300 font-medium">
                          {st.parameters}
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
