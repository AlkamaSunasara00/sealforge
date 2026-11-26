"use client";

import React from "react";
import Link from "next/link";
import { Layers, Disc, Activity, Anchor, ArrowUpRight } from "lucide-react";

const categories = [
  { id: "all", label: "All Products", icon: Layers, count: "13" },
  { id: "mechanical-seals", label: "Mechanical Seals", icon: Disc, count: "7" },
  { id: "industrial-pumps", label: "Industrial Pumps", icon: Activity, count: "5" },
  { id: "cutlass-bearings", label: "Cutlass Bearings", icon: Anchor, count: "1" },
];

export default function ProductsFilterBar({ selectedCategory, setSelectedCategory }) {
  return (
    <nav
      aria-label="Product categories"
      className="sticky top-[56px] sm:top-[60px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#253664] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-brand-950"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isSelected ? "text-bronze-300" : "text-slate-500"
                  }`}
                />
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.5 rounded-md ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-white text-slate-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Quick Action */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-700 hover:text-brand-950 shrink-0 transition-colors"
        >
          <span>Custom Sizing</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-bronze-600" />
        </Link>
      </div>
    </nav>
  );
}
