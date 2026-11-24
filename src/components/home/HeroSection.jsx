"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import FloatingLines from "@/components/common/FloatingLines";
import cartridgeSealImg from "@/assets/contact/seal-forge-cartridge-seal.png";
import { ArrowRight, ShieldCheck, Gauge, Layers } from "lucide-react";

const trustHighlights = [
  {
    icon: ShieldCheck,
    title: "7 Mechanical Seal Families",
    desc: "From balanced process seals up to 25 bar to PTFE bellows and Grundfos replacements.",
    link: "/products#mechanical-seals",
  },
  {
    icon: Gauge,
    title: "Metallic & Polymer Centrifugal Pumps",
    desc: "Non-API overhung pumps engineered to ISO 5199 and ANSI B73.1 (up to 600 m³/hr).",
    link: "/products#industrial-pumps",
  },
  {
    icon: Layers,
    title: "25 mm to 400 mm Cutlass Bearings",
    desc: "Fluted water-lubricated sleeve bearings in naval brass, bronze, and composite shells.",
    link: "/products#cutlass-bearings",
  },
];

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[90svh] flex flex-col justify-between overflow-hidden bg-[#070d1c] text-white">
      {/* Background Interactive Floating Lines Fluid Dynamics */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-auto">
        <FloatingLines
          linesGradient={["#253664", "#4a6fa5", "#9a6a1a", "#ffffff"]}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={12}
          lineDistance={5}
          bendStrength={-0.45}
          interactive
          clickSwirl
          animationSpeed={0.7}
          amplitude={1.1}
          glow={1.1}
          brightness={1.15}
          depthOfField={0.45}
          edgeFade={0.1}
          opacity={0.9}
          className="w-full h-full"
        />

        {/* Minimal Subtle Edge Vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#070d1c]/40 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#070d1c]/30 via-transparent to-[#070d1c]/60 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Body */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-12 lg:px-8 lg:pt-20 lg:pb-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Refined Editorial Typography */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 z-10 max-w-2xl">
            <Reveal>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                <span>PRECISION • PERFORMANCE • TRUST</span>
              </div>

              {/* Controlled, Proportional Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black leading-[1.08] tracking-[-0.03em] uppercase text-white">
                ENGINEERED<br />
                TO KEEP<br />
                <span className="text-slate-300">INDUSTRY MOVING.</span>
              </h1>

              {/* Subtitle from home.md */}
              <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
                SealForge is an Indian engineering manufacturer of high-reliability mechanical seals, non-API overhung pumps, and water-lubricated cutlass bearings. We help plant engineers, pump OEMs, and marine operators keep rotating equipment leak-free and running under demanding industrial duties.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <Button variant="primary" href="/products">
                  Explore Our Products
                </Button>
                <Button variant="white" href="/contact">
                  Consult an Engineer
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean, Borderless Mechanical Seal Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Reveal delay={150} className="w-full">
              <div className="relative mx-auto w-full max-w-[440px] sm:max-w-[480px] lg:max-w-none flex items-center justify-center transition-transform duration-500 ease-out hover:scale-[1.02]">
                <div className="relative w-full aspect-[1024/682] drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]">
                  <Image
                    src={cartridgeSealImg}
                    alt="SealForge Precision Engineered Cartridge Mechanical Seal"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-contain filter contrast-[1.06] brightness-[0.98]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Trust Strip: Key Capability Highlights */}
      <div className="relative border-t border-white/10 bg-[#070d1c]/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {trustHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.link}
                  className={`group flex items-start gap-4 pt-4 md:pt-0 ${
                    idx > 0 ? "md:pl-6" : ""
                  } hover:opacity-90 transition-opacity`}
                >
                  <div className="p-2.5 rounded-xl bg-brand-900/60 border border-brand-700/40 text-bronze-300 shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-bronze-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-white group-hover:text-bronze-300 transition-colors">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-bronze-300" />
                    </div>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
