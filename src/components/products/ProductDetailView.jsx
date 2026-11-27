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
  Image as ImageIcon,
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
  const stageRef = useRef(null);

  const handleMouseEnter = () => {
    if (!product.image) return;
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setIsZooming(true);
    }
  };

  const handleMouseMove = (e) => {
    if (!stageRef.current || !product.image) return;
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    setZoomPos({ x, y });
  };

  const specEntries = Object.entries(product.specs || {});
  const materialEntries = Object.entries(
    product.materials || product.construction || {}
  );

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#253664] selection:text-white">
      {/* Top Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap"
          >
            <Link href="/" className="hover:text-brand-950 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/products" className="hover:text-brand-950 transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link
              href={`/products#${product.category}`}
              className="hover:text-brand-950 transition-colors"
            >
              {product.categoryLabel}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-bold text-brand-950 truncate">
              {product.name}
            </span>
          </nav>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-700 hover:text-brand-950 transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Catalogue</span>
          </Link>
        </div>
      </div>

      {/* Main 2-Column Product Detail Section (Left Sticky Image + Right Full Specs) */}
      <section className="py-7 sm:py-10 lg:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: Sticky Image Stage (Sticks until all right-column info is scrolled) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 z-30 space-y-5">
              <div className="relative">
                <div
                  ref={stageRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={() => setIsZooming(false)}
                  onMouseMove={handleMouseMove}
                  className={`relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_50%_35%,#ffffff_0%,#f3f6fd_60%,#e5ecfb_100%)] border border-slate-200/90 shadow-sm p-6 sm:p-10 flex items-center justify-center ${
                    product.image ? "lg:cursor-zoom-in" : ""
                  }`}
                >
                  {/* Subtle Top Corner Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-xs border border-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-950">
                      {product.subLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#253664] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                      {product.categoryLabel}
                    </span>
                  </div>

                  {/* Studio Floor Falloff */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-300/35 to-transparent pointer-events-none"
                  />

                  {/* Dual-Layer Studio Contact & Ambient Shadow */}
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-3/5 h-6 bg-[#070d1c]/15 blur-xl rounded-full pointer-events-none transition-opacity duration-200 ${
                      isZooming ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-9 left-1/2 -translate-x-1/2 w-2/5 h-3 bg-[#070d1c]/25 blur-[5px] rounded-full pointer-events-none transition-opacity duration-200 ${
                      isZooming ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* In-Place Cursor-Tracked Zoom Image */}
                  <div
                    style={{
                      transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                      transform: isZooming && product.image ? "scale(2)" : "scale(1)",
                    }}
                    className="relative z-10 w-full h-full pointer-events-none transition-transform duration-200 ease-out will-change-transform"
                  >
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
                      <div className="w-full h-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300/90 bg-white/50 text-slate-400 gap-2.5">
                        <ImageIcon className="w-10 h-10 stroke-[1.4]" />
                        <span className="text-xs font-mono uppercase tracking-widest">
                          Product Image Placeholder
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sticky Quick Action Panel */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 uppercase font-semibold">
                    Configuration
                  </span>
                  <span className="font-bold text-brand-950">
                    {product.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    variant="primary"
                    href={`/contact?type=${encodeURIComponent(
                      product.categoryLabel
                    )}&series=${encodeURIComponent(product.name)}`}
                    className="w-full"
                  >
                    Request Technical Quote
                  </Button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Complete Technical Specifications & Details */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-8">
              {/* 1. Product Title & Tagline */}
              <div className="space-y-3 pb-6 border-b border-slate-200">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-bronze-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
                  <span>
                    {product.categoryLabel} · {product.subLabel}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-brand-950 uppercase leading-[1.08]">
                  {product.name}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {product.tagline}
                </p>

                {product.overview && product.overview.length > 0 && (
                  <div className="pt-2 space-y-3 text-sm text-slate-600 leading-relaxed">
                    {product.overview.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                )}

                {product.industries && product.industries.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    {product.industries.map((ind) => (
                      <span
                        key={ind}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold text-brand-950"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Operating Envelope & Technical Specifications */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-700">
                  <ShieldCheck className="w-4 h-4 text-bronze-600" />
                  <span>Operating Envelope &amp; Technical Specifications</span>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specEntries.map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-2xl bg-slate-50/80 border border-slate-200/90 p-4"
                    >
                      <dt className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500">
                        {specLabelMap[key] || key}
                      </dt>
                      <dd className="mt-1 text-sm sm:text-base font-bold text-brand-950 leading-snug">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* 3A. Materials of Construction / Metallurgy Matrix (Seals & Pumps) */}
              {materialEntries.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-700">
                    <Layers className="w-4 h-4 text-bronze-600" />
                    <span>Materials of Construction &amp; Hardware</span>
                  </div>

                  <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
                    {materialEntries.map(([key, value]) => (
                      <div
                        key={key}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 p-4 sm:px-5"
                      >
                        <dt className="sm:col-span-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
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

              {/* 3B. Cutlass Bearings: Outer Shells & Hydrodynamic Profiles */}
              {product.shells && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-700">
                    <Layers className="w-4 h-4 text-bronze-600" />
                    <span>Outer Shell Metallurgy Options</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.shells.map((sh) => (
                      <div
                        key={sh.type}
                        className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-2"
                      >
                        <h3 className="text-sm font-mono font-bold uppercase text-brand-950">
                          {sh.type}
                        </h3>
                        <p className="text-xs font-semibold text-bronze-700">
                          {sh.materials}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {sh.benefits}
                        </p>
                      </div>
                    ))}
                  </div>

                  {product.materialSelectionFactors && (
                    <div className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-xs text-slate-600">
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
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-700">
                    <span>03 / Shell Types (Cylindrical vs. Flanged)</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.shellTypesCards.map((shell) => (
                      <div
                        key={shell.name}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-[#253664]/40 hover:shadow-md transition-all duration-300 flex flex-col"
                      >
                        {/* Shell Image Stage */}
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
                            <div className="w-full h-full flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300/90 bg-white/60 text-slate-400 gap-1.5">
                              <ImageIcon className="w-6 h-6 stroke-[1.5]" />
                              <span className="text-[10px] font-mono uppercase tracking-widest">
                                {shell.name} Image
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Shell Features */}
                        <div className="p-4 sm:p-5 space-y-3 flex-1">
                          <h3 className="text-sm font-bold uppercase tracking-tight text-brand-950">
                            {shell.name}
                          </h3>
                          <ul className="space-y-1.5">
                            {shell.features.map((feat, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-bronze-600 mt-1.5 shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-600 leading-relaxed">
                    <strong className="font-mono uppercase text-brand-950 mr-2">
                      Custom Configurations:
                    </strong>
                    Special dimensions, flange arrangements, shell materials and customer drawings can be considered for engineered-to-order requirements.
                  </div>
                </div>
              )}

              {product.profiles && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-700">
                    <Cpu className="w-4 h-4 text-bronze-600" />
                    <span>04 / Hydrodynamic Rubber Lining Profiles</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.profiles.map((prof) => (
                      <div
                        key={prof.name}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-[#253664]/40 hover:shadow-md transition-all duration-300 flex flex-col"
                      >
                        {/* Profile Image Stage */}
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
                            <div className="w-full h-full flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300/90 bg-white/60 text-slate-400 gap-1.5">
                              <ImageIcon className="w-6 h-6 stroke-[1.5]" />
                              <span className="text-[10px] font-mono uppercase tracking-widest">
                                {prof.name} Image
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Profile Details */}
                        <div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col justify-between">
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

              {/* 4. Engineering Highlights & Features */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-700">
                    <CheckCircle2 className="w-4 h-4 text-bronze-600" />
                    <span>Engineering Highlights &amp; Design Features</span>
                  </div>

                  <ul className="space-y-3 rounded-2xl bg-slate-50/70 border border-slate-200 p-5 sm:p-6">
                    {product.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                      >
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 5. Typical Applications & Rotating Equipment */}
              {product.applications && product.applications.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-700">
                    <span>Typical Applications &amp; Equipment</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.applications.map((app, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 rounded-xl bg-white border border-slate-200 px-4 py-3 text-xs sm:text-sm font-medium text-brand-950"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze-600 shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Standard Cutlass Bearing Dimensions Diagram & Table (if present) */}
              {product.dimensionsTable && product.dimensionsTable.length > 0 && (
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-700">
                      <span>05 / Standard Reference Dimensions (mm)</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      Larger &amp; custom sizes up to 400 mm+ on request
                    </span>
                  </div>

                  {/* Full-Width Horizontal Cross-Section Diagram */}
                  <CutlassDimensionsDiagram />

                  <div className="overflow-x-auto max-h-[400px] rounded-2xl border border-slate-200 bg-white">
                    <table className="w-full text-left text-xs border-collapse min-w-[420px]">
                      <thead className="sticky top-0 bg-slate-50 border-b border-slate-200 text-brand-950 font-mono text-[11px]">
                        <tr>
                          <th className="p-3 font-bold uppercase tracking-wider">Shaft Dia (Ds)</th>
                          <th className="p-3 font-bold uppercase tracking-wider">Outside Dia (OD)</th>
                          <th className="p-3 font-bold uppercase tracking-wider">Length (L)</th>
                          <th className="p-3 font-bold uppercase tracking-wider">Shell Thickness (T)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono">
                        {product.dimensionsTable.map((row) => (
                          <tr key={row.ds} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3 font-bold text-brand-950">{row.ds} mm</td>
                            <td className="p-3 text-slate-700">{row.od} mm</td>
                            <td className="p-3 text-slate-700">{row.l} mm</td>
                            <td className="p-3 text-bronze-700 font-semibold">{row.t} mm</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 7. Standard Grundfos Seal Code Reference Table (if present) */}
              {product.referenceTable && product.referenceTable.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-700">
                    <span>Standard OEM Seal Code Reference</span>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                    <table className="w-full text-left text-xs border-collapse min-w-[540px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 text-brand-950 font-mono text-[11px]">
                          <th className="p-3.5 font-bold uppercase tracking-wider">Code</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Construction</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Faces / Elastomer</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Pump Models</th>
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
          </div>
        </div>
      </section>

      {/* Supporting Section 1: Material & Duty Selection Guidelines */}
      <section className="py-10 sm:py-12 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-bronze-600 block">
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
                <ArrowUpRight className="w-3.5 h-3.5 text-bronze-600" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {materialGuide.selectionRules.map((rule, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-5 space-y-2.5 shadow-2xs"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#253664] text-white text-xs font-mono font-bold">
                  0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Section 2: Related Products */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-bronze-600 block">
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
                <ArrowUpRight className="w-3.5 h-3.5 text-bronze-600" />
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
