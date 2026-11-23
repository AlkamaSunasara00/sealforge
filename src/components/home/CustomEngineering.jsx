"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import finishedProductImg from "@/assets/contact/seal-forge-mechanical-seal.webp";
import { PenTool, Cpu, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: PenTool,
    title: "1. Reverse Engineering & Drafting",
    desc: "Send us a worn sample, equipment photo, or stuffing box dimensions. We generate precise 2D/3D CAD fabrication drawings."
  },
  {
    icon: Cpu,
    title: "2. Metallurgy & Tribology Upgrades",
    desc: "Upgrade standard factory soft faces to sintered Silicon Carbide, Tungsten Carbide, or Hastelloy springs to stop recurring failures."
  },
  {
    icon: ShieldCheck,
    title: "3. Precision Mumbai Works Fabrication",
    desc: "Manufactured in Mumbai, lapped to optical flatness within 2 light-bands, and 100% hydrostatic pressure bench tested."
  }
];

export default function CustomEngineering() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
              <span>CUSTOM ENGINEERING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 uppercase leading-tight">
              OBSOLETE OEM SEAL?<br />
              <span className="text-slate-500">WE ENGINEER DIRECT REPLACEMENTS.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Not every pump or rotating shaft fits an off-the-shelf catalog configuration. SealForge engineers custom mechanical seals, pump retrofits, and cutlass bearings tailored to non-standard envelopes and severe duties.
            </p>

            <div className="pt-2">
              <Button variant="primary" href="/contact#conversation">
                Discuss Custom Requirement
              </Button>
            </div>
          </div>
        </Reveal>

        {/* 2-Column Photo-Driven Engineering Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 3 Capabilities */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal className="space-y-3">
              {capabilities.map((cap, idx) => {
                const IconComp = cap.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs transition-all hover:border-slate-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-brand-700">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>

          {/* Right Column: Visual Workshop & Finished Component Showcase */}
          <div className="lg:col-span-7 flex">
            <Reveal delay={150} className="w-full">
              <div className="relative w-full rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-[#070d1c] text-white">
                {/* Background Workshop Stock Photo */}
                <div className="relative w-full h-[380px] sm:h-[420px]">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                    alt="Precision engineering workshop calibration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center opacity-30 filter brightness-90 contrast-125"
                  />

                  {/* Dark Vignette Overlay — NO GRIDS */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#070d1c] via-[#070d1c]/80 to-[#070d1c]/40"
                    aria-hidden="true"
                  />

                  {/* Floating Content & Product Overlay */}
                  <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between z-10">
                    {/* Top Tag */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-mono font-bold text-bronze-300 uppercase tracking-widest">
                        // DEDICATED MUMBAI MACHINING WORKS
                      </span>
                      <span className="text-xs font-mono text-emerald-400">
                        100% PRESSURE TESTED
                      </span>
                    </div>

                    {/* Central Finished Component Visual */}
                    <div className="relative my-2 w-full flex items-center justify-center">
                      <div className="relative w-56 sm:w-72 h-48 sm:h-56 drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] transition-transform duration-500 ease-out hover:scale-105">
                        <Image
                          src={finishedProductImg}
                          alt="Precision Machined Mechanical Seal Assembly"
                          fill
                          sizes="300px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Bottom Technical Indicators */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
                      <div>TOLERANCE: DIN EN 12756 FIT</div>
                      <div>SEAT LAPPING: 2 LIGHT-BANDS</div>
                      <div className="text-bronze-300">DISPATCH: 3–7 DAYS</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
