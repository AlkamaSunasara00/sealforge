"use client";

import React from "react";
import { Disc, Activity, Anchor, BookOpen, Layers } from "lucide-react";

const categories = [
  { id: "all", label: "All Products", icon: Layers, count: "13" },
  { id: "mechanical-seals", label: "Mechanical Seals", icon: Disc, count: "7 Series" },
  { id: "industrial-pumps", label: "Industrial Pumps", icon: Activity, count: "5 Types" },
  { id: "cutlass-bearings", label: "Cutlass Bearings", icon: Anchor, count: "25–400 mm" },
  { id: "materials-guide", label: "Material Science Guide", icon: BookOpen, count: "EN 12756" },
];

export default function ProductsFilterBar({ selectedCategory, setSelectedCategory }) {
  const scrollToCategory = (catId) => {
    setSelectedCategory(catId);
    if (catId !== "all") {
      const el = document.getElementById(catId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav aria-label="Product categories" className="sticky top-[69px] z-40 bg-white/95 backdrop-blur-md border-b border-steel-200/90 shadow-xs py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all whitespace-nowrap ${
                  isSelected
                    ? "bg-brand-950 text-white shadow-sm border border-brand-950"
                    : "bg-steel-50 text-steel-700 hover:bg-steel-100 hover:text-brand-950 border border-steel-200/80"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-bronze-400" : "text-steel-400"}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    isSelected ? "bg-white/20 text-white" : "bg-steel-200/60 text-steel-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        <a
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-700 hover:text-brand-950 shrink-0"
        >
          <span>Need Custom Sizing?</span>
          <span className="text-bronze-600">Talk to Engineers →</span>
        </a>
      </div>
    </nav>
  );
}
