"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";

const differentiators = [
  {
    num: "01",
    title: "APPLICATION-FIRST ENGINEERING",
    tagline: "Duty dictates the design — never stock catalogue pressure.",
    description:
      "We evaluate chemical composition, solids concentration, pressure spikes, and speed before suggesting any seal face or pump metallurgy. You get an engineered solution that prevents recurring failures."
  },
  {
    num: "02",
    title: "DIRECT ACCESS TO ENGINEERS",
    tagline: "Speak directly with engineers, not third-party resellers.",
    description:
      "Your technical inquiry connects you directly with mechanical and tribology engineers in Mumbai who understand fluid dynamics and mechanical seal failure mechanisms."
  },
  {
    num: "03",
    title: "COMPLETE ROTATING CAPABILITY",
    tagline: "Seals, process pumps & cutlass bearings in unified harmony.",
    description:
      "Instead of coordinating multiple vendors, SealForge provides an integrated rotating equipment portfolio engineered to work seamlessly together under harsh operating conditions."
  },
  {
    num: "04",
    title: "RAPID TURNAROUND & OBSOLETE RETROFITS",
    tagline: "Mumbai works with domestic fabrication and testing.",
    description:
      "In-house precision machining, lapping, and hydrostatic testing allow us to supply direct drop-in replacements for discontinued or long-lead OEM imported mechanical seals."
  }
];

export default function WhySealForge() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
              <span>WHY SEALFORGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 uppercase leading-tight">
              ENGINEERING INTEGRITY.<br />
              <span className="text-slate-500">WITHOUT THE NOISE.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Industrial operations do not need generic sales pitches — they need mechanical integrity that holds under pressure, temperature, and continuous runtime.
            </p>
          </div>
        </Reveal>

        {/* 2-Column Showcase: Editorial Image + Differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Atmospheric Workshop Facility Photo */}
          <div className="lg:col-span-5 flex">
            <Reveal className="w-full h-full">
              <div className="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden shadow-md group">
                <Image
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern precision manufacturing facility floor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter brightness-95 contrast-110 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <span className="text-xs font-mono font-bold text-bronze-300 uppercase tracking-widest block">
                    MUMBAI WORKS
                  </span>
                  <h3 className="text-xl font-bold tracking-tight">
                    In-House Fabrication & Test Bench
                  </h3>
                  <p className="text-xs text-slate-300">
                    Dedicated facility for CNC turning, face lapping, and hydrostatic pressure testing.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Clean Differentiators */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {differentiators.map((item, idx) => (
              <Reveal key={item.num} delay={idx * 60} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3 transition-all duration-300 hover:border-slate-300 hover:bg-white shadow-2xs">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="font-mono text-xs font-bold text-bronze-600">
                        // {item.num}
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase">
                        STANDARD
                      </span>
                    </div>

                    <h4 className="text-base font-bold tracking-tight text-slate-950 uppercase">
                      {item.title}
                    </h4>

                    <p className="text-xs font-semibold text-brand-900 leading-snug">
                      {item.tagline}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-slate-400">
                    ISO 9001 COMPLIANT WORKS
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
