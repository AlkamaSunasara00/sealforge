"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import { ArrowUpRight } from "lucide-react";
import sealingComponentsImg from "@/assets/home/precision-sealing-components.webp";
import elastomerComponentsImg from "@/assets/home/industrial-elastomer-components.webp";
import pumpManufacturingImg from "@/assets/home/industrial-pump-manufacturing.webp";
import engineeringInspectionImg from "@/assets/home/precision-engineering-inspection.webp";

const materialPillars = [
  {
    id: "faces",
    title: "Sealing Faces",
    badge: "Tribology",
    image: sealingComponentsImg,
    imageAlt: "Precision machined silicon carbide and metal sealing faces",
    specs: [
      { label: "SSiC vs. SSiC", val: "Slurries & Acids" },
      { label: "Carbon vs. SSiC", val: "Water & Oils" },
      { label: "Tungsten Carbide", val: "High Shock Duty" },
    ],
  },
  {
    id: "elastomers",
    title: "Elastomers",
    badge: "-50 °C to +300 °C",
    image: elastomerComponentsImg,
    imageAlt: "Chemical compatibility testing for industrial elastomers",
    specs: [
      { label: "NBR / EPDM", val: "Up to 150 °C" },
      { label: "FKM (Viton®)", val: "Up to 200 °C" },
      { label: "PTFE & FFKM", val: "Boiling Acids" },
    ],
  },
  {
    id: "pumps",
    title: "Pump Alloys & Liners",
    badge: "Up to 230 °C",
    image: pumpManufacturingImg,
    imageAlt: "Industrial stainless steel and polymer-lined pump fabrication",
    specs: [
      { label: "CF8M (316 SS)", val: "General Process" },
      { label: "PP / GRPP / UHMWPE", val: "Metal-Free Acids" },
      { label: "PVDF / FEP / PFA", val: "Armoured Liners" },
    ],
  },
  {
    id: "standards",
    title: "Design Standards",
    badge: "Global Fit",
    image: engineeringInspectionImg,
    imageAlt: "Precision metrology inspection and engineering blueprints",
    specs: [
      { label: "EN 12756", val: "Seal Cavities" },
      { label: "ISO 5199 / 2858", val: "Process Pumps" },
      { label: "ANSI B73.1", val: "Class 150 Flanges" },
    ],
  },
];

export default function MaterialsSection() {
  return (
    <section
      id="materials"
      className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
                <span>MATERIAL SCIENCE &amp; STANDARDS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950 uppercase tracking-tight leading-[1.08]">
                MATCHED TO REAL{" "}
                <span className="text-bronze-700">OPERATING CONDITIONS.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Right-first-time compatibility across sealing faces, elastomers, pump metallurgies, and international standards.
              </p>
            </div>

            <div className="shrink-0">
              <Button variant="primary" href="/products#materials">
                View Material Guide
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Modern Full-Bleed Image Cards with Inset Spec Tray */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {materialPillars.map((pillar, idx) => (
            <Reveal key={pillar.id} delay={idx * 70} className="h-full">
              <Link
                href="/products#materials"
                className="group relative flex flex-col justify-between min-h-[370px] sm:min-h-[400px] rounded-3xl overflow-hidden bg-[#070d1c] border border-slate-200/80 shadow-[0_16px_40px_-20px_rgba(10,17,34,0.35)] hover:shadow-[0_24px_50px_-16px_rgba(10,17,34,0.45)] transition-all duration-300"
              >
                {/* Full-Bleed Background Image */}
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 310px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-105"
                />

                {/* Subtle Top & Bottom Scrim for Depth */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-[#070d1c]/65 via-[#070d1c]/15 to-[#070d1c]/80"
                />

                {/* Top Bar: Badge + Micro Arrow */}
                <div className="relative z-10 flex items-center justify-between p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-[#070d1c]/70 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-bronze-300">
                    {pillar.badge}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-brand-950">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                {/* Bottom Inset Floating Spec Tray */}
                <div className="relative z-10 m-3 mt-auto rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-4.5 shadow-lg border border-white/80 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-extrabold text-brand-950 tracking-tight">
                      {pillar.title}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-bronze-500 shrink-0" />
                  </div>

                  <dl className="mt-1 divide-y divide-slate-200/70">
                    {pillar.specs.map((sp) => (
                      <div
                        key={sp.label}
                        className="flex items-baseline justify-between gap-2 py-2 text-xs"
                      >
                        <dt className="font-semibold text-slate-800">
                          {sp.label}
                        </dt>
                        <dd className="font-mono text-[11px] font-bold text-brand-700 text-right shrink-0">
                          {sp.val}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
