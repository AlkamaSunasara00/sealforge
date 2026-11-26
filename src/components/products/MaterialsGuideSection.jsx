"use client";

import React, { useState } from "react";
import Reveal from "@/components/about/Reveal";
import { materialGuide } from "@/data/products";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function MaterialsGuideSection() {
  const [activeTab, setActiveTab] = useState("faces");

  return (
    <section
      id="materials"
      className="relative py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Clean Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
                <span>APPLICATION ENGINEERING GUIDE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-950 uppercase leading-[1.08]">
                MATERIAL GUIDE &amp;{" "}
                <span className="text-bronze-700">EN 12756 SELECTION RULES.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md font-normal">
              Match sealing faces, secondary elastomers, and wetted metallurgy to fluid chemistry, solids, and temperature.
            </p>
          </div>
        </Reveal>

        {/* Clean Tabbed Reference Console */}
        <Reveal delay={80}>
          <div className="rounded-3xl bg-slate-50/70 border border-slate-200/90 p-5 sm:p-8 lg:p-10 space-y-8">
            {/* Tab Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-bronze-600 block">
                  Catalogue Technical Reference
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-950 tracking-tight mt-0.5">
                  Compatibility &amp; Operational Limits
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab("faces")}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "faces"
                      ? "bg-[#253664] text-white shadow-xs"
                      : "text-slate-600 hover:text-brand-950 hover:bg-slate-50"
                  }`}
                >
                  Primary Faces
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("elastomers")}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "elastomers"
                      ? "bg-[#253664] text-white shadow-xs"
                      : "text-slate-600 hover:text-brand-950 hover:bg-slate-50"
                  }`}
                >
                  Secondary Elastomers
                </button>
              </div>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto rounded-2xl bg-white border border-slate-200">
              {activeTab === "faces" ? (
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-brand-950 font-mono text-[11px]">
                      <th className="p-4 font-bold uppercase tracking-wider">Face Material</th>
                      <th className="p-4 font-bold uppercase tracking-wider">Key Advantages</th>
                      <th className="p-4 font-bold uppercase tracking-wider">Recommended Services</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {materialGuide.primaryFaces.map((f, i) => (
                      <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-4 font-mono font-bold text-brand-950 whitespace-nowrap">
                          {f.name}
                        </td>
                        <td className="p-4 text-slate-700 leading-relaxed">
                          {f.advantages}
                        </td>
                        <td className="p-4 text-slate-600 leading-relaxed">
                          {f.applications}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-brand-950 font-mono text-[11px]">
                      <th className="p-4 font-bold uppercase tracking-wider">Elastomer</th>
                      <th className="p-4 font-bold uppercase tracking-wider">Temp Range</th>
                      <th className="p-4 font-bold uppercase tracking-wider">Compatibility</th>
                      <th className="p-4 font-bold uppercase tracking-wider">Limitation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {materialGuide.secondaryElastomers.map((el, i) => (
                      <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-4 font-mono font-bold text-brand-950 whitespace-nowrap">
                          {el.name}
                        </td>
                        <td className="p-4 font-mono text-bronze-700 font-bold whitespace-nowrap">
                          {el.temp}
                        </td>
                        <td className="p-4 text-slate-700 leading-relaxed">
                          {el.compatibility}
                        </td>
                        <td className="p-4 text-slate-500 leading-relaxed">
                          {el.limitation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Core Material Selection Rules */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-950 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-bronze-600 shrink-0" />
                <span>Core Material Selection Rules</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {materialGuide.selectionRules.map((rule, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
