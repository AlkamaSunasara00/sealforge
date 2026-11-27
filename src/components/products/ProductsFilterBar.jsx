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
      className="lg:bg-white lg:rounded-2xl lg:border lg:border-slate-200/90 lg:shadow-[0_12px_32px_-16px_rgba(10,17,34,0.1)] lg:p-4"
    >
      <div className="flex flex-col gap-2.5 lg:gap-5">
        {/* Search Input (Bottom on mobile top-bar, Top on desktop sidebar) */}
        <div className="order-2 lg:order-1 space-y-2">
          <div className="hidden lg:flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Search Catalogue
            </span>
            {typeof resultCount === "number" && (
              <span className="text-[11px] font-mono font-semibold text-slate-400 tabular-nums">
                {resultCount} {resultCount === 1 ? "item" : "items"}
              </span>
            )}
          </div>

          <div className="relative group w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#253664] transition-colors" />
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
              className="w-full h-9 lg:h-10 pl-8.5 pr-16 rounded-xl bg-slate-100/80 lg:bg-slate-50 border border-slate-200/80 text-xs font-medium text-brand-950 placeholder:text-slate-400 focus:bg-white focus:border-[#253664]/40 focus:ring-2 focus:ring-[#253664]/10 focus:outline-none transition-all"
            />

            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {hasSearch ? (
                <>
                  {typeof resultCount === "number" && (
                    <span className="lg:hidden text-[10px] font-mono font-bold text-slate-500 tabular-nums">
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
        </div>

        {/* Category Filter (Top on mobile bar, Vertical list on desktop sidebar) */}
        <div className="order-1 lg:order-2 space-y-2">
          <div className="hidden lg:flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Categories
            </span>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100/90 border border-slate-200/70 overflow-x-auto no-scrollbar lg:flex-col lg:items-stretch lg:gap-1.5 lg:p-0 lg:bg-transparent lg:border-0 lg:overflow-visible">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center justify-between gap-2 px-2.5 sm:px-3 lg:px-3.5 py-1.5 lg:py-2.5 rounded-lg lg:rounded-xl text-xs lg:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#253664] text-white shadow-xs"
                      : "text-slate-600 hover:text-brand-950 hover:bg-white/75 lg:bg-slate-50/70 lg:hover:bg-slate-100 lg:border lg:border-slate-200/60"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 lg:gap-2.5 min-w-0">
                    <Icon
                      className={`w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0 ${
                        isSelected ? "text-bronze-300" : "text-slate-400"
                      }`}
                    />
                    <span className="sm:hidden">{cat.label}</span>
                    <span className="hidden sm:inline truncate">{cat.fullLabel}</span>
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md tabular-nums shrink-0 ${
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
        </div>

        {/* Desktop Sidebar Footer: Custom Sizing CTA */}
        <div className="hidden lg:block order-3 pt-4 border-t border-slate-200/80 space-y-2.5">
          <p className="text-xs text-slate-500 leading-relaxed">
            Need non-standard shaft sizes or custom metallurgy?
          </p>
          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-between h-9.5 px-3.5 rounded-xl border border-slate-200/90 bg-slate-50 hover:bg-[#253664] hover:border-[#253664] text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700 hover:text-white transition-colors group"
          >
            <span>Custom Sizing</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-bronze-600 group-hover:text-bronze-300 transition-colors" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
