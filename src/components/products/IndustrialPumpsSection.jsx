"use client";

import React, { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import { industrialPumps } from "@/data/products";
import {
  ChevronDown,
  ChevronUp,
  Check,
  ShieldCheck,
  Activity,
  ExternalLink,
  Flame,
  Layers,
} from "lucide-react";

function PumpCard({ pump, idx }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between rounded-3xl bg-white border border-steel-200/90 hover:border-brand-700/60 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-brand-950/5 group overflow-hidden">
      <div>
        {/* Card Header & Badge */}
        <div className="p-6 sm:p-7 pb-4 flex items-center justify-between border-b border-steel-100">
          <div>
            <span className="text-xs font-mono font-bold text-bronze-600 uppercase tracking-widest block">
              {pump.designReference}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-950 tracking-tight mt-0.5">
              {pump.name}
            </h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-steel-100 text-brand-900 text-[11px] font-mono font-bold shrink-0">
            {pump.badge}
          </span>
        </div>

        {/* Product Stage Studio Preview */}
        <div className="relative h-60 w-full bg-[radial-gradient(ellipse_at_50%_30%,#ffffff_0%,#f4f6f9_55%,#e5e9f0_100%)] p-6 flex items-center justify-center overflow-hidden border-b border-steel-100">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brand-700/5 pointer-events-none"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-brand-950/15 blur-lg rounded-full"
          />

          <img
            src={pump.image}
            alt={pump.name}
            className="relative z-10 max-h-48 w-auto object-contain drop-shadow-[0_16px_24px_rgba(16,26,53,0.18)] transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Tagline & Telemetry */}
        <div className="p-6 sm:p-7 space-y-5">
          <p className="text-xs sm:text-sm text-steel-600 leading-relaxed font-normal min-h-[40px]">
            {pump.tagline}
          </p>

          {/* 4 Telemetry Metrics Grid */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <div className="p-2.5 rounded-xl bg-steel-50 border border-steel-200/80">
              <span className="text-[10px] font-mono text-steel-400 uppercase tracking-wider block font-semibold truncate">
                Capacity (Flow)
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-brand-950 block truncate">
                {pump.specs.capacity}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-steel-50 border border-steel-200/80">
              <span className="text-[10px] font-mono text-steel-400 uppercase tracking-wider block font-semibold truncate">
                Total Head
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-brand-950 block truncate">
                {pump.specs.head}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-steel-50 border border-steel-200/80">
              <span className="text-[10px] font-mono text-steel-400 uppercase tracking-wider block font-semibold truncate">
                Max Pressure
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-brand-950 block truncate">
                {pump.specs.maxPressure}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-steel-50 border border-steel-200/80">
              <span className="text-[10px] font-mono text-steel-400 uppercase tracking-wider block font-semibold truncate">
                Max Temperature
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-brand-950 block truncate">
                {pump.specs.maxTemp}
              </span>
            </div>
          </div>

          {/* Expandable Specifications Toggle */}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-steel-50 hover:bg-steel-100/90 text-brand-900 border border-steel-200/80 text-xs font-mono font-bold transition-colors"
          >
            <span>{expanded ? "Hide Hydraulic Specifications" : "View Full Hydraulic Specifications"}</span>
            {expanded ? <ChevronUp className="w-4 h-4 text-bronze-600" /> : <ChevronDown className="w-4 h-4 text-steel-500" />}
          </button>

          {expanded && (
            <div className="pt-4 border-t border-steel-200/70 space-y-4 text-xs">
              {/* Construction Details */}
              <div className="space-y-2">
                <span className="font-mono font-bold text-steel-500 uppercase tracking-wider block text-[10px]">
                  Hydraulic & Materials Construction:
                </span>
                <div className="space-y-1.5 p-3 rounded-xl bg-steel-50/80 border border-steel-200 text-steel-700">
                  <div>
                    <strong className="text-brand-950 font-mono">Impeller Type:</strong> {pump.construction.impellerType}
                  </div>
                  <div>
                    <strong className="text-brand-950 font-mono">Materials (MOC):</strong> {pump.construction.moc}
                  </div>
                  <div>
                    <strong className="text-brand-950 font-mono">Sealing:</strong> {pump.construction.sealing}
                  </div>
                  <div>
                    <strong className="text-brand-950 font-mono">Design Standard:</strong> {pump.designReference} ({pump.specs.flange})
                  </div>
                </div>
              </div>

              {/* Target Applications */}
              <div className="space-y-1.5">
                <span className="font-mono font-bold text-steel-500 uppercase tracking-wider block text-[10px]">
                  Process & Industry Duties:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {pump.applications.map((app, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2 py-0.5 rounded-md bg-white border border-steel-200 text-[11px] text-steel-600"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-7 pt-0 border-t border-steel-100 flex items-center justify-between gap-3 mt-4">
        <Button
          variant="primary"
          href={`/contact?type=Industrial%20Pumps&model=${encodeURIComponent(pump.name)}`}
        >
          Inquire Pump Duty
        </Button>

        <a
          href="/downloads/sealforge-industrial-pumps-catalogue.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono font-bold text-steel-600 hover:text-brand-700 flex items-center gap-1"
        >
          <span>Datasheet</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function IndustrialPumpsSection({ searchQuery = "" }) {
  const filteredPumps = industrialPumps.filter((p) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.designReference.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.construction.moc.toLowerCase().includes(q)
    );
  });

  return (
    <section id="industrial-pumps" className="relative py-16 sm:py-24 bg-steel-50/60 border-b border-steel-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Category Header */}
        <Reveal className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>CATEGORY 02 // INDUSTRIAL PUMPS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-950 uppercase leading-tight">
            Non-API Overhung Centrifugal Pumps. <br className="hidden sm:inline" />
            <span className="text-steel-500 font-bold">Metallic, Solid Polymer & Lined Solutions.</span>
          </h2>

          <p className="text-base sm:text-lg text-steel-600 leading-relaxed font-normal">
            Designed for harsh industrial fluid-handling where hydraulic efficiency, chemical compatibility, and continuous uptime are critical. Capacities up to 600 m³/hr, heads up to 160 m, pressures up to 21 bar, and operating temperatures up to 230 °C.
          </p>
        </Reveal>

        {/* Pumps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPumps.map((pump, idx) => (
            <Reveal key={pump.id} delay={idx * 60} className="h-full">
              <PumpCard pump={pump} idx={idx} />
            </Reveal>
          ))}
        </div>

        {filteredPumps.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white border border-steel-200 text-steel-500 font-mono text-sm">
            No pumps match &ldquo;{searchQuery}&rdquo;. Try another term.
          </div>
        )}
      </div>
    </section>
  );
}
