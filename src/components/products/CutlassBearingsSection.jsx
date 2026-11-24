"use client";

import React, { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import { cutlassBearings } from "@/data/products";
import {
  Anchor,
  ShieldCheck,
  Check,
  Ruler,
  ExternalLink,
  Droplets,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function CutlassBearingsSection() {
  const [activeProfile, setActiveProfile] = useState(0);

  return (
    <section id="cutlass-bearings" className="relative py-16 sm:py-24 bg-white border-b border-steel-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Category Header */}
        <Reveal className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>CATEGORY 03 // CUTLASS BEARINGS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-950 uppercase leading-tight">
            Water-Lubricated Cutlass Bearings. <br className="hidden sm:inline" />
            <span className="text-steel-500 font-bold">Reliable Support for Rotating Shafts.</span>
          </h2>

          <p className="text-base sm:text-lg text-steel-600 leading-relaxed font-normal">
            SealForge Cutlass Bearings provide dependable, low-friction hydrodynamic shaft support for marine propulsion, stern tubes, and vertical pumps. Specially fluted elastomeric linings utilize process water for self-lubrication, cooling, and continuous debris flushing with zero risk of oil pollution.
          </p>
        </Reveal>

        {/* Main Architectural Showcase: Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Product Imagery Stage & Telemetry Badges */}
          <Reveal className="lg:col-span-6 flex flex-col justify-between">
            <div className="h-full rounded-3xl bg-[radial-gradient(ellipse_at_50%_30%,#ffffff_0%,#f4f6f9_55%,#e5e9f0_100%)] border border-steel-200/90 shadow-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-steel-200/70">
                <span className="text-xs font-mono font-bold text-bronze-600 uppercase">
                  METRIC & IMPERIAL SHAFT RANGE
                </span>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  100% Water-Lubricated
                </span>
              </div>

              {/* Product Visual */}
              <div className="relative my-8 flex items-center justify-center min-h-[260px]">
                <div
                  aria-hidden="true"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/5 h-8 bg-brand-950/20 blur-xl rounded-full"
                />
                <img
                  src={cutlassBearings.image}
                  alt="SealForge Cutlass Bearings"
                  className="relative z-10 max-h-56 w-auto object-contain drop-shadow-[0_20px_30px_rgba(16,26,53,0.2)] hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Telemetry Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-steel-200/70">
                <div className="p-3 rounded-xl bg-white border border-steel-200 text-center">
                  <span className="text-[10px] font-mono text-steel-400 uppercase block font-semibold">
                    Shaft Diameters
                  </span>
                  <span className="text-sm font-mono font-bold text-brand-950 mt-0.5 block">
                    25 mm to 400 mm
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-steel-200 text-center">
                  <span className="text-[10px] font-mono text-steel-400 uppercase block font-semibold">
                    Shell Configurations
                  </span>
                  <span className="text-sm font-mono font-bold text-brand-950 mt-0.5 block">
                    Cylindrical & Flanged
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Technical Details, Shells & Profiles */}
          <Reveal delay={60} className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Shell Metallurgy Selection */}
            <div className="p-6 sm:p-7 rounded-3xl bg-steel-50/70 border border-steel-200/90 space-y-4">
              <span className="text-xs font-mono font-bold text-brand-900 uppercase tracking-wider block">
                // 1. OUTER SHELL MATERIALS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cutlassBearings.shells.map((sh, sIdx) => (
                  <div key={sIdx} className="p-4 rounded-2xl bg-white border border-steel-200/80 space-y-2">
                    <strong className="text-sm font-bold text-brand-950 font-mono block">
                      {sh.type}
                    </strong>
                    <p className="text-xs text-bronze-700 font-medium">
                      {sh.materials}
                    </p>
                    <p className="text-xs text-steel-600 leading-relaxed font-sans">
                      {sh.benefits}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rubber Lining Profiles (4 Hydrodynamic Geometries) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-steel-50/70 border border-steel-200/90 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-brand-900 uppercase tracking-wider">
                  // 2. HYDRODYNAMIC LINING PROFILES
                </span>
                <span className="text-[11px] font-mono text-steel-500">
                  Select Profile:
                </span>
              </div>

              {/* Profile Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {cutlassBearings.profiles.map((p, pIdx) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setActiveProfile(pIdx)}
                    className={`p-2.5 rounded-xl text-xs font-mono font-bold transition-all text-center ${
                      activeProfile === pIdx
                        ? "bg-brand-950 text-white shadow-xs"
                        : "bg-white text-steel-700 border border-steel-200 hover:bg-steel-100"
                    }`}
                  >
                    {p.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Active Profile Info */}
              <div className="p-4 rounded-2xl bg-white border border-steel-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-bold text-brand-950">
                    {cutlassBearings.profiles[activeProfile].name}
                  </strong>
                  <span className="text-[10px] font-mono text-bronze-600 font-bold uppercase">
                    PROVEN HYDRODYNAMICS
                  </span>
                </div>
                <p className="text-xs text-steel-700 leading-relaxed">
                  <strong>Description:</strong> {cutlassBearings.profiles[activeProfile].description}
                </p>
                <p className="text-xs text-steel-600 leading-relaxed pt-1 border-t border-steel-100">
                  <strong>Key Function:</strong> {cutlassBearings.profiles[activeProfile].function}
                </p>
              </div>
            </div>

            {/* Conversion CTA Footer */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <Button
                variant="primary"
                href="/contact?type=Cutlass%20Bearings"
              >
                Inquire Cutlass Bearing Sizing
              </Button>

              <a
                href="/downloads/sealforge-cutlass-bearings-catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-steel-600 hover:text-brand-700 flex items-center gap-1.5"
              >
                <span>Download Bearing Catalogue (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
