"use client";

import React, { useState, useMemo } from "react";
import ProductsHero from "./ProductsHero";
import ProductsFilterBar from "./ProductsFilterBar";
import ProductCard from "./ProductCard";
import MaterialsGuideSection from "./MaterialsGuideSection";
import ProductsCtaSection from "./ProductsCtaSection";
import Reveal from "@/components/about/Reveal";
import { allProducts } from "@/data/products";

const categoryMeta = {
  "mechanical-seals": {
    id: "mechanical-seals",
    eyebrow: "Fluid Containment",
    title: "Mechanical Seals (SF Series)",
    subtitle:
      "Seven EN 12756 series covering balanced, unbalanced, outside PTFE bellows, single-spring, elastomer bellows, and Grundfos interchange seals.",
  },
  "industrial-pumps": {
    id: "industrial-pumps",
    eyebrow: "Process Transfer",
    title: "Industrial Centrifugal Pumps",
    subtitle:
      "Non-API overhung pumps built to ISO 5199, ISO 2858, and ANSI B73.1 in metallic, solid polymer, armoured, and fluoropolymer-lined constructions.",
  },
  "cutlass-bearings": {
    id: "cutlass-bearings",
    eyebrow: "Hydrodynamic Shaft Support",
    title: "Water-Lubricated Cutlass Bearings",
    subtitle:
      "Resilient fluted rubber sleeve and flanged bearings (25 mm – 400 mm) in naval brass, bronze, stainless steel, and composite shells.",
  },
};

export default function ProductsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return allProducts.filter((item) => {
      const matchesCat =
        selectedCategory === "all" || item.category === selectedCategory;
      if (!matchesCat) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.subLabel.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  const activeGroups = useMemo(() => {
    const order = ["mechanical-seals", "industrial-pumps", "cutlass-bearings"];
    return order
      .map((catId) => ({
        meta: categoryMeta[catId],
        items: filteredProducts.filter((p) => p.category === catId),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredProducts]);

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#253664] selection:text-white">
      {/* 1. Clean Hero */}
      <ProductsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 2. Sticky Category Filter Bar */}
      <ProductsFilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 3. Clean Product Catalogue Grid */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          {activeGroups.map((group) => (
            <div key={group.meta.id} id={group.meta.id} className="scroll-mt-32 space-y-8">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-slate-200">
                  <div className="space-y-2 max-w-2xl">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-bronze-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
                      <span>{group.meta.eyebrow}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-950 uppercase">
                      {group.meta.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                    {group.meta.subtitle}
                  </p>
                </div>
              </Reveal>

              {group.meta.id === "industrial-pumps" ? (
                <div className="space-y-12">
                  {[
                    "1. Metallic Overhung Pumps",
                    "2. Non-Metallic Overhung Pumps",
                    "3. Polymer-Lined Overhung / End-Suction Pumps",
                  ].map((subGroupName) => {
                    const subItems = group.items.filter(
                      (p) => p.subGroup === subGroupName
                    );
                    if (subItems.length === 0) return null;
                    return (
                      <div key={subGroupName} className="space-y-5">
                        <div className="flex items-center gap-3">
                          <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-brand-950 font-mono">
                            {subGroupName}
                          </h3>
                          <span className="flex-1 h-px bg-slate-200" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                          {subItems.map((product, idx) => (
                            <Reveal key={product.slug} delay={idx * 50} className="h-full">
                              <ProductCard product={product} />
                            </Reveal>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {group.items.map((product, idx) => (
                    <Reveal key={product.slug} delay={idx * 50} className="h-full">
                      <ProductCard product={product} />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          ))}

          {activeGroups.length === 0 && (
            <div className="rounded-3xl bg-white border border-slate-200 p-12 text-center space-y-3">
              <p className="text-base font-bold text-brand-950">
                No products matched &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-sm text-slate-500">
                Try searching by series (SF-B, SF-G), standard (ISO 5199, ANSI B73.1), or clear your search.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-2 inline-flex items-center px-4 py-2 rounded-xl bg-[#253664] text-white text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Material Guide & EN 12756 Reference */}
      <MaterialsGuideSection />

      {/* 5. Technical Consultation & RFQ CTA */}
      <ProductsCtaSection />
    </div>
  );
}
