"use client";

import React from "react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import {
  FlaskConical,
  Thermometer,
  Gauge,
  RotateCw,
  Wrench,
  Layers,
  ArrowRight
} from "lucide-react";

const factors = [
  {
    label: "Fluid Chemistry",
    metric: "Corrosives & Slurries",
    desc: "Acids, hydrocarbons, crystal content, abrasive particulates, and polymerizing solutions.",
    icon: FlaskConical
  },
  {
    label: "Operating Temperature",
    metric: "-30°C to +260°C",
    desc: "Cryogenic duties through high-temperature thermal fluids, requiring elastomer or Kalrez O-rings.",
    icon: Thermometer
  },
  {
    label: "System Pressure",
    metric: "Vacuum to 35 bar",
    desc: "Suction, discharge & barrier fluid pressure ratings engineered to prevent face separation.",
    icon: Gauge
  },
  {
    label: "Rotational Speed",
    metric: "Up to 3,600+ RPM",
    desc: "Shaft velocity, dynamic runout, and PV limits guiding balanced seal face geometry.",
    icon: RotateCw
  },
  {
    label: "Equipment Configuration",
    metric: "Pumps & Mixers",
    desc: "Centrifugal pumps, top-entry reactor agitators, positive displacement, or marine stern tubes.",
    icon: Wrench
  },
  {
    label: "Material Compatibility",
    metric: "SSiC / TC / Hastelloy",
    desc: "Silicon Carbide, Tungsten Carbide, Carbon Graphite, 316L SS, Hastelloy C, and PTFE.",
    icon: Layers
  }
];

export default function ContactApplicationSupport() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-steel-50 border-b border-steel-200/80 overflow-hidden">
      {/* Ambient lighting wash */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(91,121,195,0.08),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Main Advisory Container */}
        <div className="bg-white border border-steel-200/90 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-md shadow-brand-950/5 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <Reveal className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
                <span>APPLICATION SUPPORT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 tracking-tight leading-tight">
                Every application has different operating conditions.
              </h2>

              <p className="text-base sm:text-lg text-steel-700 leading-relaxed font-normal">
                Fluid, temperature, pressure, speed, equipment configuration and material compatibility can all influence the right solution.
              </p>

              <p className="text-sm sm:text-base text-steel-600 leading-relaxed">
                Share your application details with us and our team will help you work toward a suitable product or configuration.
              </p>

              <div className="pt-2">
                <Button variant="primary" href="#conversation">
                  Talk to Our Engineers
                </Button>
              </div>
            </Reveal>

            {/* Right Factors Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {factors.map((f, i) => {
                const IconComponent = f.icon;
                return (
                  <Reveal key={i} delay={i * 60}>
                    <div className="h-full p-4 rounded-2xl bg-steel-50/80 border border-steel-200/90 hover:border-brand-700/60 transition-all duration-200 space-y-2 group">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-white border border-steel-200 text-brand-700 flex items-center justify-center shrink-0 group-hover:bg-brand-950 group-hover:text-white transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-bronze-600 uppercase tracking-wider">
                          {f.metric}
                        </span>
                      </div>

                      <div className="pt-1">
                        <h4 className="text-xs font-mono font-bold text-brand-950 uppercase">
                          {f.label}
                        </h4>
                        <p className="text-[11px] text-steel-600 leading-relaxed mt-1">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
