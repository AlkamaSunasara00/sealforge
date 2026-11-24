"use client";

import React from "react";
import Reveal from "@/components/about/Reveal";
import { engineeringStandards } from "@/data/about";
import { ShieldCheck, Ruler, CheckCircle2, Layers, Award, FileCheck } from "lucide-react";

const materialIntegrity = [
  {
    category: "Primary Sealing Faces",
    items: "Sintered Silicon Carbide (SSiC), Tungsten Carbide (TC), Resin & Antimony Carbon Graphite, 99.5% Alumina Ceramic."
  },
  {
    category: "Secondary Elastomers & Bellows",
    items: "Genuine NBR, EPDM, FKM (Viton), Perfluoroelastomer (FFKM), and pure virgin/glass-filled PTFE."
  },
  {
    category: "Pump Metallurgy & Polymers",
    items: "Carbon Steel, CF8M (316SS), Hastelloy C-276, Solid PP / GRPP / UHMWPE, and thick PVDF / FEP / PFA wetted liners."
  },
  {
    category: "Cutlass Bearing Alloys & Shells",
    items: "Naval Brass, Marine Phosphor Bronze, Stainless Steel, and Non-Metallic Phenolic Resin Composites."
  }
];

export default function AboutStandards() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-steel-50 border-b border-steel-200/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[450px] w-[450px] bg-[radial-gradient(ellipse_at_top_left,rgba(91,121,195,0.08),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>RIGOROUS ENGINEERING STANDARDS & QUALITY INTEGRITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-900 leading-tight">
            Engineering standards aligned with global industry.
          </h2>

          <p className="text-base sm:text-lg text-steel-600 leading-relaxed font-normal">
            SealForge products are designed, machined, and quality-tested in accordance with recognized international mechanical and hydraulic standards, ensuring direct interchangeability and long-term operating safety.
          </p>
        </Reveal>

        {/* 4 Global Engineering Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringStandards.map((std, idx) => (
            <Reveal key={std.code} delay={idx * 60}>
              <div className="h-full bg-white border border-steel-200/90 rounded-2xl p-6 space-y-3 shadow-xs hover:border-brand-700/60 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-steel-50 border border-steel-200 text-brand-700 flex items-center justify-center font-bold">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-brand-700 block">
                    {std.code}
                  </span>
                  <h3 className="text-base font-bold text-brand-950 mt-1">
                    {std.title}
                  </h3>
                </div>
                <p className="text-xs text-steel-600 leading-relaxed">
                  {std.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Material Science & Inspection Matrix */}
        <Reveal delay={120}>
          <div className="bg-white border border-steel-200/90 rounded-3xl p-6 sm:p-10 shadow-md shadow-brand-950/5 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-steel-100">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-bronze-600 uppercase tracking-wider">
                  MATERIAL SCIENCE & TRACEABILITY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-950">
                  Uncompromising Material Integrity Across Every Component
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full shrink-0">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Tested & Verified</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materialIntegrity.map((mat, i) => (
                <div key={i} className="p-4 rounded-xl bg-steel-50/70 border border-steel-200/80 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-brand-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
                    {mat.category}
                  </span>
                  <p className="text-xs sm:text-sm text-steel-700 leading-relaxed font-sans">
                    {mat.items}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-steel-500 border-t border-steel-100">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Face Flatness within 2 Helium Light Bands (0.0006 mm)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Hydrostatic Bench Pressure Testing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Material Test Certificates (MTC)
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
