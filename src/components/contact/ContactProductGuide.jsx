"use client";

import React from "react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import { Disc, Activity, Anchor, Check } from "lucide-react";

export default function ContactProductGuide() {
  const products = [
    {
      id: "01",
      family: "Product Division 01",
      title: "MECHANICAL SEALS",
      tag: "EN 12756 STANDARDS",
      desc: "Sealing solutions for pumps and rotating equipment across demanding chemical, water and process duties.",
      features: [
        "7 Series: SF-B, SF-U, SF-P, SF-S, SF-T, SF-MJ, SF-G",
        "Balanced designs up to 25 bar; temps from -20°C to +200°C",
        "SSiC, Carbon, Tungsten Carbide & PTFE bellows faces",
        "Direct Grundfos (HQQE, BQQE) and MG1/JC interchange"
      ],
      link: "/products#mechanical-seals",
      buttonText: "Explore Mechanical Seals",
      variant: "primary"
    },
    {
      id: "02",
      family: "Product Division 02",
      title: "INDUSTRIAL PUMPS",
      tag: "ISO 5199 / ANSI B73.1",
      desc: "Non-API overhung centrifugal pumps engineered for corrosive chemicals, industrial water and severe slurries.",
      features: [
        "Open, semi-open & closed impellers in CS, 316SS & Hastelloy",
        "Solid polymer moulded wet-ends in PP, GRPP & UHMWPE",
        "Heavy-duty polymer lined (PVDF / FEP / PFA) up to 230°C",
        "Flows up to 600 m³/hr, heads to 160 m, pressures to 21 bar"
      ],
      link: "/products#industrial-pumps",
      buttonText: "Explore Industrial Pumps",
      variant: "primary"
    },
    {
      id: "03",
      family: "Product Division 03",
      title: "CUTLASS BEARINGS",
      tag: "WATER-LUBRICATED",
      desc: "Water-lubricated sleeve bearings for marine propulsion, stern tubes, vertical turbine pumps and dredging.",
      features: [
        "Naval brass, bronze, stainless steel & non-metallic shells",
        "Resilient fluted, spiral, circular & polygon rubber profiles",
        "Shaft diameters from 25 mm to 400 mm + custom sizes",
        "Zero oil leakage, low friction, continuous debris flushing"
      ],
      link: "/products#cutlass-bearings",
      buttonText: "Explore Cutlass Bearings",
      variant: "primary"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white border-b border-steel-200/80 overflow-hidden">
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[450px] w-[450px] bg-[radial-gradient(ellipse_at_center,rgba(212,153,56,0.06),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>NOT SURE WHAT YOU NEED?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-900 leading-tight">
            That&apos;s okay.
          </h2>

          <p className="text-base sm:text-lg text-steel-600 leading-relaxed font-normal">
            You don&apos;t need to have the complete specification before contacting us. Share whatever information you have, and our team can help you determine the right direction across our three core product lines.
          </p>
        </Reveal>

        {/* 3 Modern Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <Reveal key={p.id} delay={idx * 100} className="h-full">
              <div className="h-full bg-steel-50/70 border border-steel-200/90 hover:border-brand-700/80 rounded-3xl p-8 flex flex-col justify-between space-y-8 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-brand-950/5 group">
                <div className="space-y-6">
                  {/* Top Header & Tag */}
                  <div className="flex items-center justify-between pb-4 border-b border-steel-200/60">
                    <span className="text-xs font-mono font-bold text-bronze-600 uppercase tracking-widest">
                      {p.family}
                    </span>
                    <span className="text-[11px] font-mono text-steel-400">
                      // {p.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-950 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-steel-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <ul className="space-y-2.5 pt-2">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-steel-700">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-brand-950/5 text-brand-700 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 border-t border-steel-200/70">
                  <Button variant={p.variant} href={p.link}>
                    {p.buttonText}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
