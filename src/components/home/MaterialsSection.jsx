"use client";

import { useState } from "react";
import {
  Thermometer,
  FileDown,
  Atom
} from "lucide-react";
import { materialMatrix } from "@/data/company";

export default function MaterialsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200" id="materials">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider">
              <Atom className="w-3.5 h-3.5 text-amber-700" />
              <span>Catalogue Pages 02–04 Technical Data</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
              Materials & Fluid Compatibility
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Optimal seal performance depends on matching face hardness, metallurgy, and elastomeric flexibility to fluid temperature and pressure.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/downloads/sealforge-mechanical-seals-catalogue.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-xl transition-colors"
            >
              <FileDown className="w-4 h-4 text-brand-700" />
              <span>Download Material Guide</span>
            </a>
          </div>
        </div>

        {/* Category Tabs: High Contrast */}
        <div className="flex items-center gap-3 border-b-2 border-slate-200 mb-10 overflow-x-auto pb-3">
          {materialMatrix.map((mat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === idx
                  ? "bg-brand-700 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200"
              }`}
            >
              {mat.category}
            </button>
          ))}
        </div>

        {/* Active Tab Content: Spacious & High Contrast */}
        {activeCategory === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialMatrix[0].items.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-7 shadow-sm hover:border-brand-500 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-extrabold text-slate-950">{item.name}</h4>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-50 text-brand-900 border border-brand-200 font-bold">
                    {item.rating}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm font-mono font-extrabold text-brand-900 bg-white p-3 rounded-xl border border-slate-200">
                  <Thermometer className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{item.temp}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Recommended Media:
                  </span>
                  <p className="text-sm text-slate-800 leading-relaxed font-medium">
                    {item.fluids}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materialMatrix[1].items.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-7 shadow-sm hover:border-brand-500 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-extrabold text-slate-950">{item.name}</h4>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-100 text-amber-950 font-bold border border-amber-300">
                    {item.hardness}
                  </span>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 font-semibold">
                  <span className="text-slate-900">Application: </span>
                  Centrifugal process pumps, slurry transfer, high thermal dissipation.
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materialMatrix[2].items.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-7 shadow-sm hover:border-brand-500 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-extrabold text-slate-950">{item.name}</h4>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-50 text-brand-900 font-bold border border-brand-200">
                    {item.standard}
                  </span>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 font-semibold">
                  <span className="text-slate-900">Certification: </span>
                  Positive Material Identification (PMI) & test reports provided.
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
