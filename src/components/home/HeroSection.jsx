"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import FloatingLines from "@/components/common/FloatingLines";
import cartridgeSealImg from "@/assets/contact/seal-forge-cartridge-seal.png";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[85svh] lg:min-h-[90svh] flex items-center overflow-hidden bg-[#070d1c] text-white">
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
          className="absolute inset-0 bg-gradient-to-r from-[#070d1c]/35 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#070d1c]/25 via-transparent to-[#070d1c]/35 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Refined Editorial Typography */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 z-10 max-w-2xl">
            <Reveal>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                <span>PRECISION ROTATING EQUIPMENT SOLUTIONS</span>
              </div>

              {/* Controlled, Proportional Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black leading-[1.08] tracking-[-0.03em] uppercase text-white">
                ENGINEERED<br />
                TO KEEP<br />
                <span className="text-slate-300">INDUSTRY MOVING.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
                High-integrity mechanical seals, industrial process pumps, and water-lubricated cutlass bearings engineered for demanding rotating equipment.
              </p>

              {/* Action Buttons (No info/text below them) */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <Button variant="primary" href="#portfolio">
                  Explore 3 Systems
                </Button>
                <Button variant="white" href="/contact#conversation">
                  Talk to an Engineer
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean, Borderless Mechanical Seal Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Reveal delay={150} className="w-full">
              <div className="relative mx-auto w-full max-w-[460px] sm:max-w-[520px] lg:max-w-none flex items-center justify-center transition-transform duration-500 ease-out hover:scale-[1.02]">
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
    </section>
  );
}
