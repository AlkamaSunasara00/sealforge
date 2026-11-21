"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import {
  ArrowRight,
  FileDown,
  ShieldCheck,
  Disc,
  Anchor,
  Activity,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { companyInfo } from "@/data/company";

const heroTabs = [
  {
    id: "mechanical-seals",
    title: "Mechanical Seals",
    category: "Balanced & Cartridge Series",
    icon: Disc,
    badge: "API 682 & ISO 5199",
    detailImage: "/images/catalogue/mechanical-seals-p6.webp",
    headline: "SF-B Balanced & SF-C Cartridge Seals",
    specs: [
      { label: "Shaft Diameters", value: "14 mm to 150+ mm" },
      { label: "Pressure Rating", value: "Up to 35 bar" },
      { label: "Operating Temp", value: "-30°C to +220°C" },
      { label: "Face Materials", value: "SSiC, Carbon, Tungsten" }
    ],
    summary: "Precision balanced mechanical seals engineered for chemical pumps, hydrocarbons, and severe industrial services with zero fugitive emissions.",
    targetSection: "#mechanical-seals"
  },
  {
    id: "cutlass-bearings",
    title: "Cutlass Bearings",
    category: "Water-Lubricated Sleeves",
    icon: Anchor,
    badge: "25 mm to 400 mm+ Range",
    detailImage: "/images/catalogue/cutlass-bearings-p3.webp",
    headline: "Water-Lubricated Stern & Pump Bearings",
    specs: [
      { label: "Shaft Diameters", value: "25 mm to 400 mm+" },
      { label: "Shell Metallurgy", value: "Gunmetal Bronze, SS, Composites" },
      { label: "Lining Formula", value: "Fluted Nitrile Rubber" },
      { label: "Lubrication", value: "100% Water (Zero Oil)" }
    ],
    summary: "Engineered sleeve and flanged bearings offering hydrodynamic water lubrication, high abrasion resistance, and dependable shaft support.",
    targetSection: "#cutlass-bearings"
  },
  {
    id: "industrial-pumps",
    title: "Process Pumps",
    category: "Metallic & Polymer-Lined",
    icon: Activity,
    badge: "ISO 2858 & ANSI B16.5",
    detailImage: "/images/catalogue/industrial-pumps-p3.webp",
    headline: "Centrifugal Pumps for Corrosive Service",
    specs: [
      { label: "Max Flow Rate", value: "Up to 600 m³/hr" },
      { label: "Differential Head", value: "Up to 160 meters" },
      { label: "Lining Options", value: "Virgin PFA, FEP, PVDF" },
      { label: "Impeller Style", value: "Open, Semi-Open, Closed" }
    ],
    summary: "Heavy-duty overhung pumps designed for aggressive acids, corrosive chemicals, and abrasive slurry applications.",
    targetSection: "#industrial-pumps"
  }
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = heroTabs[activeTab];

  return (
    <section className="relative bg-[#0a1329] text-white overflow-hidden border-b-2 border-slate-800">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none" />

      {/* Main Content Container with Generous Breathing Room */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold, High-Contrast Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>{companyInfo.subheading}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Industrial Mechanical Seals,{" "}
              <span className="text-amber-400">
                Cutlass Bearings
              </span>{" "}
              & Process Pumps.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-medium">
              SealForge manufactures high-integrity mechanical seals (balanced, unbalanced, cartridge, OEM replacement), water-lubricated marine bearings (25mm to 400mm+), and corrosive-service chemical pumps engineered for maximum uptime.
            </p>

            {/* High-Contrast Feature Badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-slate-100 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>316SS & Hastelloy C-276</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SSiC & Carbon Faces</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>FKM, FFKM & PTFE</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Bench Tested</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                variant="primary"
                href="#technical-rfq"
              >
                Request a Quote
              </Button>

              <Button
                variant="secondary"
                href="/catalogue"
                icon={FileDown}
              >
                Explore Catalogues
              </Button>
            </div>
          </div>

          {/* Right Column: Clean, High-Contrast Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0f1b38] border-2 border-slate-700 rounded-2xl p-6 sm:p-7 shadow-2xl">
              {/* Clean 3-Tab Switcher */}
              <div className="grid grid-cols-3 gap-2 bg-[#091124] p-1.5 rounded-xl border border-slate-800 mb-6">
                {heroTabs.map((tab, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(idx)}
                      className={`py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? "bg-brand-700 text-white shadow-sm"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {tab.title}
                    </button>
                  );
                })}
              </div>

              {/* Showcase Content: High Contrast & Neat */}
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    {current.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {current.headline}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {current.summary}
                  </p>
                </div>

                {/* Clean Image Container */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-white border border-slate-700 p-2">
                  <Image
                    src={current.detailImage}
                    alt={current.headline}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>

                {/* 2x2 Specs Grid: Clear, High Contrast */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {current.specs.map((s, i) => (
                    <div key={i} className="bg-[#091124] p-3 rounded-lg border border-slate-800">
                      <span className="text-[11px] text-slate-400 block font-medium">{s.label}</span>
                      <span className="text-xs font-bold text-white font-mono mt-0.5 block">{s.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-1">
                  <Link
                    href={current.targetSection}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    <span>View {current.title} Range</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics: Spacious & High Contrast */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyInfo.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold">
                {stat.label}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <p className="text-xs text-slate-300">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
