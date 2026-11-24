"use client";

import React, { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import { mechanicalSeals } from "@/data/products";
import {
  ChevronDown,
  ChevronUp,
  Check,
  ShieldCheck,
  Sliders,
  ExternalLink,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";

function SealCard({ seal, idx }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between rounded-3xl bg-white border border-steel-200/90 hover:border-brand-700/60 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-brand-950/5 group overflow-hidden">
      <div>
        {/* Card Header & Badge */}
        <div className="p-6 sm:p-7 pb-4 flex items-center justify-between border-b border-steel-100">
          <div>
            <span className="text-xs font-mono font-bold text-bronze-600 uppercase tracking-widest block">
              {seal.series}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-950 tracking-tight mt-0.5">
              {seal.name}
            </h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-steel-100 text-brand-900 text-[11px] font-mono font-bold shrink-0">
            {seal.badge}
          </span>
        </div>

        {/* Product Stage Studio Preview */}
        <div className="relative h-60 w-full bg-[radial-gradient(ellipse_at_50%_30%,#ffffff_0%,#f4f6f9_55%,#e5e9f0_100%)] p-6 flex items-center justify-center overflow-hidden border-b border-steel-100">
          {/* Subtle Ambient Radial Highlight */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brand-700/5 pointer-events-none"
            aria-hidden="true"
          />

          {/* Contact shadow */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-brand-950/15 blur-lg rounded-full"
          />

          <img
            src={seal.image}
            alt={`${seal.name} - ${seal.series}`}
            className="relative z-10 max-h-48 w-auto object-contain drop-shadow-[0_16px_24px_rgba(16,26,53,0.18)] transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Tagline & Core Operating Telemetry */}
        <div className="p-6 sm:p-7 space-y-5">
          <p className="text-xs sm:text-sm text-steel-600 leading-relaxed font-normal min-h-[40px]">
            {seal.tagline}
          </p>

          {/* 4 Telemetry Metrics Grid */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <div className="p-2.5 rounded-xl bg-steel-50 border border-steel-200/80">
              <span className="text-[10px] font-mono text-steel-400 uppercase tracking-wider block font-semibold truncate">
                Shaft Diameter
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-brand-950 block truncate">
                {seal.specs.shaftDiameter || seal.specs.pumpModels || "Custom"}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-steel-50 border border-steel-200/80">
              <span className="text-[10px] font-mono text-steel-400 uppercase tracking-wider block font-semibold truncate">
                Operating Pressure
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-brand-950 block truncate">
                {seal.specs.maxPressure || seal.specs.commonCodes || "Engineered"}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-steel-50 border border-steel-200/80">
              <span className="text-[10px] font-mono text-steel-400 uppercase tracking-wider block font-semibold truncate">
                Temperature Limits
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-brand-950 block truncate">
                {seal.specs.temperature || seal.specs.sealConstructions || "Duty Matched"}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-steel-50 border border-steel-200/80">
              <span className="text-[10px] font-mono text-steel-400 uppercase tracking-wider block font-semibold truncate">
                Design Standard
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-brand-950 block truncate">
                {seal.specs.standard}
              </span>
            </div>
          </div>

          {/* Progressive Disclosure Toggle Button */}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-steel-50 hover:bg-steel-100/90 text-brand-900 border border-steel-200/80 text-xs font-mono font-bold transition-colors"
          >
            <span>{expanded ? "Hide Technical Specifications" : "View Full Technical Specifications"}</span>
            {expanded ? <ChevronUp className="w-4 h-4 text-bronze-600" /> : <ChevronDown className="w-4 h-4 text-steel-500" />}
          </button>

          {/* Expanded Engineering Matrix */}
          {expanded && (
            <div className="pt-4 border-t border-steel-200/70 space-y-4 text-xs">
              {/* Materials Matrix */}
              <div className="space-y-2">
                <span className="font-mono font-bold text-steel-500 uppercase tracking-wider block text-[10px]">
                  Material Options (Catalogue Datasheet):
                </span>
                <div className="space-y-1.5 p-3 rounded-xl bg-steel-50/80 border border-steel-200 text-steel-700">
                  <div>
                    <strong className="text-brand-950 font-mono">Rotary Face:</strong> {seal.materials.rotaryFace}
                  </div>
                  <div>
                    <strong className="text-brand-950 font-mono">Stationary Face:</strong> {seal.materials.stationaryFace}
                  </div>
                  <div>
                    <strong className="text-brand-950 font-mono">Elastomers:</strong> {seal.materials.elastomers}
                  </div>
                  <div>
                    <strong className="text-brand-950 font-mono">Spring & Hardware:</strong> {seal.materials.springHardware}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-1.5">
                <span className="font-mono font-bold text-steel-500 uppercase tracking-wider block text-[10px]">
                  Engineering Highlights:
                </span>
                <ul className="space-y-1">
                  {seal.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-steel-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="space-y-1.5">
                <span className="font-mono font-bold text-steel-500 uppercase tracking-wider block text-[10px]">
                  Typical Applications & Pumps:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {seal.applications.map((app, aIdx) => (
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

      {/* Card Conversion Footer */}
      <div className="p-6 sm:p-7 pt-0 border-t border-steel-100 flex items-center justify-between gap-3 mt-4">
        <Button
          variant="primary"
          href={`/contact?type=Mechanical%20Seals&series=${encodeURIComponent(seal.series)}`}
        >
          Inquire This Seal Duty
        </Button>

        <a
          href="/downloads/sealforge-mechanical-seals-catalogue.pdf"
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

export default function MechanicalSealsSection({ searchQuery = "" }) {
  const filteredSeals = mechanicalSeals.filter((s) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.series.toLowerCase().includes(q) ||
      s.tagline.toLowerCase().includes(q) ||
      s.badge.toLowerCase().includes(q) ||
      s.materials.rotaryFace.toLowerCase().includes(q) ||
      s.specs.standard.toLowerCase().includes(q)
    );
  });

  return (
    <section id="mechanical-seals" className="relative py-16 sm:py-24 bg-white border-b border-steel-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Category Header */}
        <Reveal className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>CATEGORY 01 // MECHANICAL SEALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-950 uppercase leading-tight">
            SF Series Mechanical Seals. <br className="hidden sm:inline" />
            <span className="text-steel-500 font-bold">Engineered for Zero Fugitive Emissions.</span>
          </h2>

          <p className="text-base sm:text-lg text-steel-600 leading-relaxed font-normal">
            Covering seven specialized series compliant with EN 12756 dimensional standards. From hydraulically balanced process seals operating up to 25 bar to outside-mounted PTFE bellows for severe boiling acids and direct Grundfos replacement seals.
          </p>
        </Reveal>

        {/* 7 Series Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredSeals.map((seal, idx) => (
            <Reveal key={seal.id} delay={idx * 60} className="h-full">
              <SealCard seal={seal} idx={idx} />
            </Reveal>
          ))}
        </div>

        {filteredSeals.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-steel-50 border border-steel-200 text-steel-500 font-mono text-sm">
            No mechanical seals match &ldquo;{searchQuery}&rdquo;. Try another term or view all categories.
          </div>
        )}
      </div>
    </section>
  );
}
