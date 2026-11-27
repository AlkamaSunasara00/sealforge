"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import ProductCard from "./ProductCard";
import ProductsCtaSection from "./ProductsCtaSection";
import CutlassDimensionsDiagram from "./CutlassDimensionsDiagram";
import { materialGuide } from "@/data/products";
import {
  ChevronRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Cpu,
  Ruler,
  Factory,
  Image as ImageIcon,
  ZoomIn,
} from "lucide-react";

const specLabelMap = {
  pumpType: "Pump Type",
  impellerType: "Impeller Type",
  shaftDiameter: "Shaft Diameter",
  maxPressure: "Max Pressure",
  temperature: "Temperature Range",
  speed: "Speed",
  standard: "Design Standard",
  pumpModels: "Compatible Pump Series",
  sealConstructions: "Seal Constructions",
  commonCodes: "Standard OEM Codes",
  capacity: "Capacity (Flow)",
  head: "Differential Head",
  maxTemp: "Max Temperature",
  flange: "Flange Rating",
  lubrication: "Lubrication Medium",
  shellTypes: "Shell Configurations",
  lining: "Elastomer Lining",
};

const materialLabelMap = {
  rotaryFace: "Rotary Face",
  stationaryFace: "Stationary Face",
  elastomers: "Secondary Elastomers",
  springHardware: "Spring & Metal Hardware",
  impellerType: "Impeller Geometry",
  sealing: "Shaft Sealing",
  moc: "Wetted Metallurgy (MOC)",
  options: "Engineering Options",
};

export default function ProductDetailView({ product, relatedProducts }) {
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [activeTab, setActiveTab] = useState("specs");
  const stageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    setZoomPos({ x, y });
  };

  const specEntries = Object.entries(product.specs || {});
  const materialEntries = Object.entries(
    product.materials || product.construction || {}
  );
  const hasCutlassDetails = Boolean(
    product.shells || product.shellTypesCards || product.profiles
  );
  const hasTables = Boolean(
    (product.dimensionsTable && product.dimensionsTable.length > 0) ||
      (product.referenceTable && product.referenceTable.length > 0)
  );

  // Pick up to 4 headline specs for the dark header strip
  const highlightSpecs = specEntries.slice(0, 4);

  const tabs = [
    { id: "specs", label: "Specifications", icon: ShieldCheck },
    ...(materialEntries.length > 0 || hasCutlassDetails
      ? [{ id: "materials", label: "Materials & Build", icon: Layers }]
      : []),
    ...((product.features && product.features.length > 0) ||
    (product.applications && product.applications.length > 0)
      ? [{ id: "applications", label: "Features & Duty", icon: Factory }]
      : []),
    ...(hasTables ? [{ id: "tables", label: "Dimensions & Codes", icon: Ruler }] : []),
    { id: "all", label: "Full Sheet", icon: Cpu },
  ];

  const showSection = (tabId) => activeTab === "all" || activeTab === tabId;

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#253664] selection:text-white">
      {/* 1. Dark Engineering Hero Header + Integrated Breadcrumb */}
      <header className="relative isolate overflow-hidden bg-[#070d1c] text-white border-b border-white/10">
        {/* Subtle Engineering Grid & Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-pattern-dark opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full bg-[#253664]/45 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-bronze-500/10 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:pb-10 space-y-6">
          {/* Top Breadcrumb Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-400 overflow-x-auto no-scrollbar whitespace-nowrap"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <Link href="/products" className="hover:text-white transition-colors">
                Products
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <Link
                href={`/products#${product.category}`}
                className="hover:text-white transition-colors"
              >
                {product.categoryLabel}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="font-bold text-bronze-300 truncate">
                {product.name}
              </span>
            </nav>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-bronze-300 transition-colors shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Catalogue</span>
            </Link>
          </div>

          {/* Series Title + Quick Spec Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-bronze-300">
                <span className="w-1.5 h-1.5 rounded-[1px] bg-bronze-400" />
                <span>
                  {product.categoryLabel} · {product.subLabel}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight uppercase leading-[1.06] text-white">
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                {product.tagline}
              </p>
            </div>

            {/* Right: 2x2 Key Operating Metrics Strip */}
            {highlightSpecs.length > 0 && (
              <div className="lg:col-span-5 grid grid-cols-2 gap-2.5">
                {highlightSpecs.map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-[4px] bg-white/[0.04] border border-white/10 px-3.5 py-2.5 backdrop-blur-xs"
                  >
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 truncate">
                      {specLabelMap[key] || key}
                    </span>
                    <span className="mt-0.5 block text-xs sm:text-sm font-bold text-bronze-300 truncate">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 2. Main 2-Column Technical Showcase */}
      <section className="py-10 sm:py-14 lg:py-16 border-b border-slate-200 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: Sticky Showcase Stage + Dark Engineering Action Dock */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 z-30 space-y-5">
              {/* Studio Stage with External Right Bracket Rail (Matches ProductCard) */}
              <div className="relative pr-2 pb-1">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-3 bottom-3 right-0 w-[14px] z-0 rounded-tr-[3px] rounded-br-[3px] border-t-[1.5px] border-r-[1.5px] border-b-[1.5px] border-l-0 border-[#253664]/30"
                />

                <div
                  ref={stageRef}
                  onMouseEnter={() => product.image && setIsZooming(true)}
                  onMouseLeave={() => setIsZooming(false)}
                  onMouseMove={handleMouseMove}
                  className={`relative z-10 aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-sm bg-[radial-gradient(ellipse_at_50%_38%,#ffffff_0%,#f3f6fd_65%,#e7eef9_100%)] border border-slate-200/90 shadow-[0_14px_34px_-22px_rgba(7,13,28,0.22)] p-6 sm:p-10 flex items-center justify-center ${
                    product.image ? "lg:cursor-crosshair" : ""
                  }`}
                >
                  {/* Top Corner Series & Zoom Hint */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[#253664] text-white text-[10px] font-mono font-bold uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-[1px] bg-bronze-400" />
                      <span>{product.subLabel}</span>
                    </span>

                    {product.image && (
                      <span className="hidden lg:inline-flex items-center gap-1 px-2 py-1 rounded-[2px] bg-white/90 border border-slate-200 text-[10px] font-mono text-slate-500">
                        <ZoomIn className="w-3 h-3 text-[#253664]" />
                        <span>Hover to inspect</span>
                      </span>
                    )}
                  </div>

                  {/* Studio Floor Falloff & Contact Shadow */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-300/30 to-transparent pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3/5 h-5 bg-[#070d1c]/14 blur-xl rounded-full pointer-events-none"
                  />

                  <div className="relative z-10 w-full h-full pointer-events-none">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-contain p-4 drop-shadow-[0_22px_34px_rgba(7,13,28,0.22)]"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center rounded-[3px] border border-dashed border-slate-300/90 bg-white/60 text-slate-400 gap-2.5">
                        <ImageIcon className="w-10 h-10 stroke-[1.4]" />
                        <span className="text-xs font-mono uppercase tracking-widest">
                          Product Image Placeholder
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hover Lens Reticle */}
                  {isZooming && product.image && (
                    <div
                      aria-hidden="true"
                      style={{
                        left: `clamp(0px, calc(${zoomPos.x}% - 64px), calc(100% - 128px))`,
                        top: `clamp(0px, calc(${zoomPos.y}% - 64px), calc(100% - 128px))`,
                      }}
                      className="hidden lg:block absolute w-32 h-32 z-20 rounded-[3px] border-2 border-[#253664]/60 bg-[#253664]/10 backdrop-blur-[1px] shadow-sm pointer-events-none"
                    />
                  )}
                </div>

                {/* Desktop Flyout Zoomed Preview Panel */}
                {isZooming && product.image && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-0 left-[calc(100%+1.5rem)] w-[440px] xl:w-[500px] aspect-square z-50 rounded-sm bg-white border border-slate-200/90 shadow-[0_28px_70px_-15px_rgba(7,13,28,0.34)] overflow-hidden pointer-events-none"
                  >
                    <div className="relative w-full h-full bg-[radial-gradient(ellipse_at_50%_35%,#ffffff_0%,#f3f6fd_60%,#e5ecfb_100%)] p-10">
                      <div
                        style={{
                          transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                          transform: "scale(2.6)",
                        }}
                        className="relative w-full h-full will-change-transform"
                      >
                        <Image
                          src={product.image}
                          alt=""
                          fill
                          sizes="500px"
                          className="object-contain p-4"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Dark Navy Action Dock */}
              <div className="rounded-sm bg-[#070d1c] text-white border border-slate-800 p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-slate-400 uppercase tracking-wider">
                    Configuration
                  </span>
                  <span className="font-bold text-bronze-300 text-right">
                    {product.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    variant="white"
                    href={`/contact?type=${encodeURIComponent(
                      product.categoryLabel
                    )}&series=${encodeURIComponent(product.name)}`}
                    className="w-full"
                  >
                    Request Technical Quote
                  </Button>
                </div>

                {product.industries && product.industries.length > 0 && (
                  <div className="pt-2 border-t border-white/10 space-y-2">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      Target Industries
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.industries.map((ind) => (
                        <span
                          key={ind}
                          className="px-2 py-0.5 rounded-[2px] bg-white/[0.06] border border-white/10 text-[10px] font-mono text-slate-200"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Overview + Tabbed Engineering Specifications */}
            <div className="lg:col-span-7 space-y-7">
              {/* Engineering Overview */}
              {product.overview && product.overview.length > 0 && (
                <div className="rounded-sm bg-white border border-slate-200/90 p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#253664]">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#b6812a]" />
                    <span>Engineering Overview</span>
                  </div>
                  <div className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
                    {product.overview.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Segmented Technical Navigation Tabs */}
              <div className="sticky top-[56px] sm:top-[60px] z-20 bg-slate-50/95 backdrop-blur-md py-2 -mx-1 px-1">
                <div
                  role="tablist"
                  aria-label="Product technical sections"
                  className="flex items-center gap-1 p-1 rounded-[4px] bg-white border border-slate-200/90 shadow-2xs overflow-x-auto no-scrollbar"
                >
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTab(tab.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-[3px] text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#253664] text-white shadow-2xs"
                            : "text-slate-600 hover:text-brand-950 hover:bg-slate-100"
                        }`}
                      >
                        <Icon
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isActive ? "text-bronze-300" : "text-slate-400"
                          }`}
                        />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab 1: Operating Envelope & Technical Specifications */}
              {showSection("specs") && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-950">
                      <ShieldCheck className="w-4 h-4 text-[#b6812a]" />
                      <span>01 / Operating Envelope &amp; Specifications</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {specEntries.length} Parameters
                    </span>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {specEntries.map(([key, value]) => (
                      <div
                        key={key}
                        className="group/spec rounded-[4px] bg-white border border-slate-200/90 hover:border-[#253664]/45 p-4 transition-colors"
                      >
                        <dt className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 group-hover/spec:text-[#b6812a] transition-colors">
                          {specLabelMap[key] || key}
                        </dt>
                        <dd className="mt-1 text-sm sm:text-[15px] font-bold text-brand-950 leading-snug">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Tab 2: Materials of Construction & Cutlass Shells/Profiles */}
              {showSection("materials") && (
                <div className="space-y-6">
                  {materialEntries.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-950">
                        <Layers className="w-4 h-4 text-[#b6812a]" />
                        <span>02 / Materials of Construction &amp; Hardware</span>
                      </div>

                      <dl className="divide-y divide-slate-200 rounded-[4px] border border-slate-200/90 bg-white overflow-hidden">
                        {materialEntries.map(([key, value]) => (
                          <div
                            key={key}
                            className="grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 p-4 sm:px-5 hover:bg-slate-50/70 transition-colors"
                          >
                            <dt className="sm:col-span-4 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                              {materialLabelMap[key] || key}
                            </dt>
                            <dd className="sm:col-span-8 text-sm font-medium text-brand-950 leading-relaxed">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}

                  {product.shells && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-950">
                        <Layers className="w-4 h-4 text-[#b6812a]" />
                        <span>Outer Shell Metallurgy Options</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {product.shells.map((sh) => (
                          <div
                            key={sh.type}
                            className="rounded-[4px] bg-white border border-slate-200/90 p-4 space-y-2"
                          >
                            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-950">
                              {sh.type}
                            </h3>
                            <p className="text-xs font-semibold text-[#b6812a]">
                              {sh.materials}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {sh.benefits}
                            </p>
                          </div>
                        ))}
                      </div>

                      {product.materialSelectionFactors && (
                        <div className="rounded-[4px] bg-white border border-slate-200 px-4 py-3 text-xs text-slate-600">
                          <strong className="font-mono uppercase text-brand-950 mr-2">
                            Selection Criteria:
                          </strong>
                          {product.materialSelectionFactors.join(" • ")}
                        </div>
                      )}
                    </div>
                  )}

                  {product.shellTypesCards && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-950">
                        <span>Shell Types (Cylindrical vs. Flanged)</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {product.shellTypesCards.map((shell) => (
                          <div
                            key={shell.name}
                            className="group overflow-hidden rounded-[4px] border border-slate-200 bg-white hover:border-[#253664]/40 transition-all duration-300 flex flex-col"
                          >
                            <div className="relative aspect-[16/10] w-full bg-[radial-gradient(circle_at_50%_45%,#ffffff_0%,#f1f5f9_75%,#e2e8f0_100%)] border-b border-slate-100 p-4 flex items-center justify-center">
                              {shell.image ? (
                                <Image
                                  src={shell.image}
                                  alt={shell.name}
                                  fill
                                  sizes="(max-width: 640px) 100vw, 320px"
                                  className="object-contain p-3 drop-shadow-[0_10px_18px_rgba(7,13,28,0.16)] transition-transform duration-300 group-hover:scale-[1.04]"
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center rounded-[3px] border border-dashed border-slate-300/90 bg-white/60 text-slate-400 gap-1.5">
                                  <ImageIcon className="w-6 h-6 stroke-[1.5]" />
                                  <span className="text-[10px] font-mono uppercase tracking-widest">
                                    {shell.name} Image
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="p-4 space-y-2.5 flex-1">
                              <h3 className="text-sm font-bold uppercase tracking-tight text-brand-950">
                                {shell.name}
                              </h3>
                              <ul className="space-y-1.5">
                                {shell.features.map((feat, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#b6812a] mt-1.5 shrink-0" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[4px] bg-white border border-slate-200 px-4 py-3 text-xs text-slate-600 leading-relaxed">
                        <strong className="font-mono uppercase text-brand-950 mr-2">
                          Custom Configurations:
                        </strong>
                        Special dimensions, flange arrangements, shell materials and customer drawings can be considered for engineered-to-order requirements.
                      </div>
                    </div>
                  )}

                  {product.profiles && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-950">
                        <Cpu className="w-4 h-4 text-[#b6812a]" />
                        <span>Hydrodynamic Rubber Lining Profiles</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {product.profiles.map((prof) => (
                          <div
                            key={prof.name}
                            className="group overflow-hidden rounded-[4px] border border-slate-200 bg-white hover:border-[#253664]/40 transition-all duration-300 flex flex-col"
                          >
                            <div className="relative aspect-[16/10] w-full bg-[radial-gradient(circle_at_50%_45%,#ffffff_0%,#f1f5f9_75%,#e2e8f0_100%)] border-b border-slate-100 p-4 flex items-center justify-center">
                              {prof.image ? (
                                <Image
                                  src={prof.image}
                                  alt={prof.name}
                                  fill
                                  sizes="(max-width: 640px) 100vw, 320px"
                                  className="object-contain p-3 drop-shadow-[0_10px_18px_rgba(7,13,28,0.16)] transition-transform duration-300 group-hover:scale-[1.04]"
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center rounded-[3px] border border-dashed border-slate-300/90 bg-white/60 text-slate-400 gap-1.5">
                                  <ImageIcon className="w-6 h-6 stroke-[1.5]" />
                                  <span className="text-[10px] font-mono uppercase tracking-widest">
                                    {prof.name} Image
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                              <div className="space-y-1.5">
                                <h3 className="text-sm font-bold uppercase tracking-tight text-brand-950">
                                  {prof.name}
                                </h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  <strong className="text-slate-900">Geometry:</strong>{" "}
                                  {prof.description}
                                </p>
                              </div>
                              <p className="text-xs text-slate-700 leading-relaxed pt-2 border-t border-slate-100">
                                <strong className="text-brand-700">Function:</strong>{" "}
                                {prof.function}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Engineering Highlights & Applications */}
              {showSection("applications") && (
                <div className="space-y-6">
                  {product.features && product.features.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-950">
                        <CheckCircle2 className="w-4 h-4 text-[#b6812a]" />
                        <span>03 / Engineering Highlights &amp; Design Features</span>
                      </div>

                      <ul className="divide-y divide-slate-100 rounded-[4px] bg-white border border-slate-200/90">
                        {product.features.map((feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 p-4 text-sm text-slate-700 leading-relaxed"
                          >
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.applications && product.applications.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-950">
                        <Factory className="w-4 h-4 text-[#b6812a]" />
                        <span>Typical Applications &amp; Equipment</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {product.applications.map((app, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 rounded-[4px] bg-white border border-slate-200/90 px-4 py-3 text-xs sm:text-sm font-medium text-brand-950"
                          >
                            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#b6812a] shrink-0" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 4: Reference Dimensions & OEM Code Tables */}
              {showSection("tables") && hasTables && (
                <div className="space-y-6">
                  {product.dimensionsTable && product.dimensionsTable.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-950">
                          <Ruler className="w-4 h-4 text-[#b6812a]" />
                          <span>04 / Standard Reference Dimensions (mm)</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500">
                          Custom sizes up to 400 mm+ on request
                        </span>
                      </div>

                      <CutlassDimensionsDiagram />

                      <div className="overflow-x-auto max-h-[400px] rounded-[4px] border border-slate-200 bg-white">
                        <table className="w-full text-left text-xs border-collapse min-w-[420px]">
                          <thead className="sticky top-0 bg-[#070d1c] text-white font-mono text-[11px]">
                            <tr>
                              <th className="p-3 font-bold uppercase tracking-wider">Shaft Dia (Ds)</th>
                              <th className="p-3 font-bold uppercase tracking-wider">Outside Dia (OD)</th>
                              <th className="p-3 font-bold uppercase tracking-wider">Length (L)</th>
                              <th className="p-3 font-bold uppercase tracking-wider text-bronze-300">Shell Thickness (T)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-mono">
                            {product.dimensionsTable.map((row) => (
                              <tr key={row.ds} className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-3 font-bold text-brand-950">{row.ds} mm</td>
                                <td className="p-3 text-slate-700">{row.od} mm</td>
                                <td className="p-3 text-slate-700">{row.l} mm</td>
                                <td className="p-3 text-[#b6812a] font-semibold">{row.t} mm</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {product.referenceTable && product.referenceTable.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-950">
                        <Ruler className="w-4 h-4 text-[#b6812a]" />
                        <span>Standard OEM Seal Code Reference</span>
                      </div>

                      <div className="overflow-x-auto rounded-[4px] border border-slate-200 bg-white">
                        <table className="w-full text-left text-xs border-collapse min-w-[540px]">
                          <thead>
                            <tr className="bg-[#070d1c] text-white font-mono text-[11px]">
                              <th className="p-3.5 font-bold uppercase tracking-wider">Code</th>
                              <th className="p-3.5 font-bold uppercase tracking-wider">Construction</th>
                              <th className="p-3.5 font-bold uppercase tracking-wider">Faces / Elastomer</th>
                              <th className="p-3.5 font-bold uppercase tracking-wider text-bronze-300">Pump Models</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {product.referenceTable.map((row) => (
                              <tr key={row.code} className="hover:bg-slate-50/70 transition-colors">
                                <td className="p-3.5 font-mono font-bold text-brand-950 whitespace-nowrap">
                                  {row.code}
                                </td>
                                <td className="p-3.5 text-slate-700">
                                  {row.construction}
                                </td>
                                <td className="p-3.5 text-slate-600">
                                  {row.combination}
                                </td>
                                <td className="p-3.5 text-slate-700 font-medium">
                                  {row.models}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Section 1: Material & Duty Selection Guidelines */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b6812a] block">
                  Engineering Verification
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-brand-950">
                  Selection &amp;{" "}
                  <span className="text-bronze-700">Compatibility Rules</span>
                </h2>
              </div>
              <Link
                href="/products#materials"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-700 hover:text-brand-950"
              >
                <span>Open Full Material Guide</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#b6812a]" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {materialGuide.selectionRules.map((rule, idx) => (
              <div
                key={idx}
                className="group relative rounded-[4px] bg-slate-50/70 border border-slate-200/90 hover:border-[#253664]/45 p-5 space-y-3 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-[2px] bg-[#253664] text-white text-[11px] font-mono font-bold">
                    0{idx + 1}
                  </span>
                  <span className="h-[2px] w-8 bg-slate-200 group-hover:bg-[#b6812a] transition-colors" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Section 2: Related Products */}
      <section className="py-14 sm:py-18 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b6812a] block">
                  Explore More Solutions
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-brand-950">
                  Related{" "}
                  <span className="text-bronze-700">SealForge Products</span>
                </h2>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-700 hover:text-brand-950"
              >
                <span>View All 13 Products</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#b6812a]" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.slug} product={rel} />
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Section 3: Technical Inquiry CTA */}
      <ProductsCtaSection />
    </div>
  );
}
