"use client";

import React, { useState } from "react";
import Reveal from "@/components/about/Reveal";
import { materialGuide } from "@/data/products";
import { ShieldCheck, BookOpen, AlertCircle, CheckCircle2, ChevronRight, Layers } from "lucide-react";

export default function MaterialsGuideSection() {
  const [activeTab, setActiveTab] = useState("faces");

  return (
    <section id="materials-guide" className="relative py-16 sm:py-24 bg-steel-50/70 border-b border-steel-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>APPLICATION ENGINEERING GUIDE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-950 uppercase leading-tight">
            Material Guide & Selection Rules. <br className="hidden sm:inline" />
            <span className="text-steel-500 font-bold">EN 12756 Standard Alignment.</span>
          </h2>

          <p className="text-base sm:text-lg text-steel-600 leading-relaxed font-normal">
            Mechanical seal and rotating equipment performance depends strictly on the chemical compatibility of sealing faces, secondary elastomers, and metallic hardware with the pumped fluid and operating envelope.
          </p>
        </Reveal>

        {/* Tabbed Interactive Guide Console */}
        <div className="bg-white border border-steel-200/90 rounded-3xl p-6 sm:p-10 shadow-lg shadow-brand-950/5 space-y-8">
          {/* Console Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-steel-100">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-bronze-600 uppercase tracking-widest block">
                TECHNICAL REFERENCE // CATALOGUE SECTION 2
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-950">
                Compatibility & Operational Limits
              </h3>
            </div>

            {/* Switch Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-steel-100 border border-steel-200/80">
              <button
                type="button"
                onClick={() => setActiveTab("faces")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeTab === "faces"
                    ? "bg-brand-950 text-white shadow-xs"
                    : "text-steel-600 hover:text-brand-950 hover:bg-white"
                }`}
              >
                1. Primary Faces
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("elastomers")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeTab === "elastomers"
                    ? "bg-brand-950 text-white shadow-xs"
                    : "text-steel-600 hover:text-brand-950 hover:bg-white"
                }`}
              >
                2. Secondary Elastomers
              </button>
            </div>
          </div>

          {/* Tab 1: Primary Faces Table */}
          {activeTab === "faces" && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-steel-200 bg-steel-50/80 text-brand-950 font-mono">
                      <th className="p-3.5 font-bold uppercase tracking-wider">Face Material</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">Typical Advantages</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">Typical Applications / Selection</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-steel-100 font-sans">
                    {materialGuide.primaryFaces.map((f, i) => (
                      <tr key={i} className="hover:bg-steel-50/50 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-brand-950 whitespace-nowrap">
                          {f.name}
                        </td>
                        <td className="p-3.5 text-steel-700 leading-relaxed">
                          {f.advantages}
                        </td>
                        <td className="p-3.5 text-steel-600 leading-relaxed">
                          {f.applications}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Secondary Elastomers Table */}
          {activeTab === "elastomers" && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-steel-200 bg-steel-50/80 text-brand-950 font-mono">
                      <th className="p-3.5 font-bold uppercase tracking-wider">Elastomer / Material</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">Temperature Guide</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">General Compatibility</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">Important Limitation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-steel-100 font-sans">
                    {materialGuide.secondaryElastomers.map((el, i) => (
                      <tr key={i} className="hover:bg-steel-50/50 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-brand-950 whitespace-nowrap">
                          {el.name}
                        </td>
                        <td className="p-3.5 font-mono text-bronze-700 font-semibold whitespace-nowrap">
                          {el.temp}
                        </td>
                        <td className="p-3.5 text-steel-700 leading-relaxed">
                          {el.compatibility}
                        </td>
                        <td className="p-3.5 text-steel-500 leading-relaxed">
                          {el.limitation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Core Material Selection Rules (Section 2.6 Catalogue) */}
          <div className="p-6 rounded-2xl bg-steel-50 border border-steel-200/90 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-950 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-bronze-600" />
              <span>Core Material Selection Rules (Section 2.6 Catalogue Reference):</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-steel-700">
              {materialGuide.selectionRules.map((rule, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
