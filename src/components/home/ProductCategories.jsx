"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/common/Button";
import {
  Disc,
  Anchor,
  Activity,
  FileDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { productCategories } from "@/data/company";

export default function ProductCategories() {
  const [selectedCategory, setSelectedCategory] = useState("mechanical-seals");

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200" id="products">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header: Spacious & High Contrast */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-900 text-xs font-mono font-bold uppercase tracking-wider">
            <span>Manufactured in Mumbai, India</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Engineered Product Portfolio
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Precision manufactured for high pressure, abrasive slurry, corrosive chemical, and marine shaft installations.
          </p>

          {/* Clean 3-Pillar Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {productCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-sm ${
                    isActive
                      ? "bg-brand-700 text-white shadow-md scale-105"
                      : "bg-white text-slate-800 hover:text-brand-900 border border-slate-300 hover:border-brand-500"
                  }`}
                >
                  {cat.id === "mechanical-seals" && <Disc className="w-4 h-4" />}
                  {cat.id === "cutlass-bearings" && <Anchor className="w-4 h-4" />}
                  {cat.id === "industrial-pumps" && <Activity className="w-4 h-4" />}
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Product Category Display */}
        {productCategories.map((cat) => {
          if (cat.id !== selectedCategory) return null;

          return (
            <div key={cat.id} className="space-y-10 animate-in fade-in duration-200" id={cat.id}>
              {/* Category Overview Card */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{cat.badge}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    {cat.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {cat.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.features.map((feat, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-900 text-xs font-semibold"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                  <Button
                    variant="secondary"
                    href={cat.catalogueLink}
                    icon={FileDown}
                  >
                    Download PDF Catalogue
                  </Button>
                  <Button
                    variant="primary"
                    href="#technical-rfq"
                  >
                    Request Data Sheet
                  </Button>
                </div>
              </div>

              {/* Product Cards Grid: Spacious & High Contrast */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.products.map((prod, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border-2 border-slate-200 p-7 shadow-sm hover:shadow-lg hover:border-brand-500 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Code Badge */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-md bg-brand-50 text-brand-900 font-mono text-xs font-extrabold border border-brand-200">
                          {prod.code}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">SealForge OEM</span>
                      </div>

                      {/* Title & Desc */}
                      <div>
                        <h4 className="text-lg font-bold text-slate-950">
                          {prod.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                          {prod.desc}
                        </p>
                      </div>

                      {/* Technical Specs Callout */}
                      <div className="bg-slate-100 rounded-xl p-4 border border-slate-200 space-y-1 text-xs">
                        <div className="font-mono text-brand-900 font-bold uppercase text-[11px]">
                          Operating Parameters
                        </div>
                        <div className="text-slate-900 font-semibold leading-relaxed">
                          {prod.specs}
                        </div>
                      </div>

                      {/* Materials */}
                      <div className="text-xs text-slate-700 pt-1">
                        <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px] mb-1">
                          Materials:
                        </span>
                        <span className="leading-relaxed block text-slate-800">
                          {prod.materials}
                        </span>
                      </div>
                    </div>

                    {/* Card Action */}
                    <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                      <Link
                        href="#technical-rfq"
                        className="text-xs font-bold text-brand-700 hover:text-brand-900 inline-flex items-center gap-1"
                      >
                        <span>Quote this Model</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={cat.catalogueLink}
                        download
                        className="text-xs font-semibold text-slate-600 hover:text-brand-700 inline-flex items-center gap-1"
                      >
                        <FileDown className="w-3.5 h-3.5" />
                        <span>Specs</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
