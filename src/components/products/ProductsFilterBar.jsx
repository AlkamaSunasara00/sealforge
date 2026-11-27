"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Layers,
  Disc,
  Activity,
  Anchor,
  ArrowUpRight,
  Search,
  X,
} from "lucide-react";

const categories = [
  { id: "all", label: "All", fullLabel: "All Products", icon: Layers, count: 13 },
  { id: "mechanical-seals", label: "Seals", fullLabel: "Mechanical Seals", icon: Disc, count: 7 },
  { id: "industrial-pumps", label: "Pumps", fullLabel: "Industrial Pumps", icon: Activity, count: 5 },
  { id: "cutlass-bearings", label: "Bearings", fullLabel: "Cutlass Bearings", icon: Anchor, count: 1 },
];

export default function ProductsFilterBar({
  selectedCategory,
  setSelectedCategory,
  searchQuery = "",
  setSearchQuery,
  resultCount,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const hasSearch = searchQuery.trim().length > 0;

  return (
    <nav
      aria-label="Product catalogue filters"
      className="sticky top-[56px] sm:top-[60px] z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_6px_24px_-12px_rgba(10,17,34,0.12)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row md:items-center md:justify-between gap-2.5">
        {/* Left: Compact Segmented Category Rail */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100/90 border border-slate-200/70 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#253664] text-white shadow-xs"
                    : "text-slate-600 hover:text-brand-950 hover:bg-white/75"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isSelected ? "text-bronze-300" : "text-slate-400"
                  }`}
                />
                <span className="sm:hidden">{cat.label}</span>
                <span className="hidden sm:inline">{cat.fullLabel}</span>
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md tabular-nums ${
                    isSelected
                      ? "bg-white/15 text-bronze-200"
                      : "bg-white/80 text-slate-500 border border-slate-200/60"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Compact Search + Custom Sizing */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <div className="relative group flex-1 md:w-64 lg:w-72">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#253664] transition-colors" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery?.(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  if (hasSearch) {
                    setSearchQuery?.("");
                  } else {
                    inputRef.current?.blur();
                  }
                }
              }}
              placeholder="Search series, ISO 5199, PTFE..."
              aria-label="Search products"
              className="w-full h-8.5 pl-8 pr-16 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs font-medium text-brand-950 placeholder:text-slate-400 focus:bg-white focus:border-[#253664]/40 focus:ring-2 focus:ring-[#253664]/10 focus:outline-none transition-all"
            />

            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {hasSearch ? (
                <>
                  {typeof resultCount === "number" && (
                    <span className="text-[10px] font-mono font-bold text-slate-500 tabular-nums">
                      {resultCount}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setSearchQuery?.("")}
                    aria-label="Clear search"
                    className="p-0.5 rounded-md text-slate-400 hover:text-brand-950 hover:bg-slate-200/70 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </>
              ) : (
                <kbd className="hidden sm:inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-md bg-white border border-slate-200/90 text-[10px] font-mono font-semibold text-slate-400 shadow-2xs">
                  /
                </kbd>
              )}
            </div>
          </div>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-1.5 h-8.5 px-3 rounded-xl border border-slate-200/80 bg-slate-50/80 hover:bg-slate-100 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 hover:text-brand-950 shrink-0 transition-colors"
          >
            <span>Custom Sizing</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-bronze-600" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
