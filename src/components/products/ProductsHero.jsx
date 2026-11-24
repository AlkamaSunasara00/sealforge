"use client";

import React from "react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import mechanicalSealBlueprint from "@/assets/about/mechanical-seal-blueprint.webp";
import { companyInfo } from "@/data/company";
import { ShieldCheck, Search, SlidersHorizontal, ArrowDown } from "lucide-react";

export default function ProductsHero({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-brand-950 text-white">
      {/* CAD Blueprint Motion / Technical Background */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${mechanicalSealBlueprint.src})`,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 -z-20 bg-brand-950/85"
        aria-hidden="true"
      />

      {/* Center readability radial wash */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,35,65,0.25)_0%,rgba(5,12,27,0.70)_55%,rgba(5,12,27,0.95)_100%)]"
        aria-hidden="true"
      />

      {/* Bottom transition gradient */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-t from-brand-950 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-4xl space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 animate-pulse" />
              <span>PRECISION • PERFORMANCE • TRUST</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black leading-[1.08] tracking-[-0.025em] uppercase text-white">
              Mechanical Seals, Industrial Pumps <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-bronze-300 via-bronze-400 to-bronze-500 bg-clip-text text-transparent">
                & Cutlass Bearings.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto max-w-3xl text-sm sm:text-base lg:text-lg text-steel-200 leading-relaxed font-normal">
              Engineered for zero-leakage fluid containment and rotating equipment reliability across aggressive chemical processing, marine propulsion, power generation, and demanding municipal utilities.
            </p>

            {/* Key Trust Telemetry Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-steel-300">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-bronze-400 font-bold">7</span>
                <span>Seal Families (SF Series)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-bronze-400 font-bold">5</span>
                <span>Centrifugal Pump Designs</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-bronze-400 font-bold">25–400mm</span>
                <span>Water-Lubricated Bearings</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>EN 12756 & ISO 5199 Standards</span>
              </div>
            </div>

            {/* Global Search Bar */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-1.5 shadow-2xl focus-within:border-bronze-400 transition-colors">
                <Search className="w-5 h-5 text-steel-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search series (e.g., SF-B, Grundfos, PVDF, 25 bar, cutlass)..."
                  className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-steel-400 focus:outline-none font-sans"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-xs font-mono text-steel-400 hover:text-white px-2 py-1"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-bronze-500/50"
        aria-hidden="true"
      />
    </section>
  );
}
