"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Layers, ShieldCheck, Cpu } from "lucide-react";
import { aboutProducts } from "@/data/about";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";

export default function AboutProducts() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-brand-950 text-white py-14 sm:py-20 lg:py-24">
      {/* ambient glows */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-bronze-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
              <span>THREE SPECIALIZED DIVISIONS, ONE ENGINEERING CORE</span>
            </div>
            <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              Three product lines.{" "}
              <span className="bg-gradient-to-r from-bronze-300 to-bronze-500 bg-clip-text text-transparent">
                One engineering approach.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-steel-300">
            Fluid properties, operating pressure, temperature envelope and environment guide the selection across every single product family.
          </p>
        </Reveal>

        {/* 3 Large Architectural Division Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {aboutProducts.map((p, idx) => (
            <Reveal key={p.number} delay={idx * 80} className="h-full">
              <div className="h-full flex flex-col justify-between rounded-3xl bg-brand-900/40 border border-white/10 hover:border-bronze-400/60 p-8 transition-all duration-300 hover:bg-brand-900/60 shadow-lg group">
                <div className="space-y-6">
                  {/* Top Header & Tag */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-bronze-400 uppercase tracking-widest">
                      DIVISION {p.number}
                    </span>
                    <span className="text-[11px] font-mono text-steel-400">
                      {p.code}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {p.name}
                    </h3>
                    <div className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-bronze-300">
                      {p.badge}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-steel-300 leading-relaxed font-normal">
                    {p.description}
                  </p>

                  {/* Material Highlight */}
                  <div className="p-3.5 rounded-xl bg-black/20 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-steel-400 uppercase tracking-wider block font-semibold">
                      Key Metallurgies & Face Pairs:
                    </span>
                    <span className="text-xs text-steel-200 font-sans">
                      {p.materials}
                    </span>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 border-t border-white/10 mt-6">
                  <Button variant="primary" href={p.href}>
                    Explore Division
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
