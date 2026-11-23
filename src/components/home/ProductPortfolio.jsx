"use client";

import React, { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";

const systems = [
  {
    id: "seals",
    name: "Mechanical seals",
    tagline: "Fluid containment for critical rotating equipment.",
    description:
      "Engineered to eliminate fugitive emissions and withstand severe corrosive fluids, abrasive slurries, and extreme pressures.",
    productImage: "/images/catalogue/mechanical-seals-p1.webp",
    ctaLabel: "Inquire seal duty",
    specs: [
      { label: "Standard", val: "DIN EN 12756 / API 682" },
      { label: "Pressure", val: "Vacuum to 40 bar" },
      { label: "Temperature", val: "-40°C to +260°C" },
      { label: "Shaft range", val: "Ø 18mm – 120mm" },
    ],
    configurations: [
      "Cartridge seals",
      "Balanced & unbalanced pusher seals",
      "PTFE / Teflon bellows seals",
      "Wave spring & agitator seals",
    ],
  },
  {
    id: "pumps",
    name: "Industrial pumps",
    tagline: "Severe chemical and industrial process fluid transfer.",
    description:
      "Reliable centrifugal and process pumps built for continuous 24/7 duties where fluid leakage or mechanical downtime is unacceptable.",
    productImage: "/images/catalogue/industrial-pumps-p1.webp",
    ctaLabel: "Inquire pump duty",
    specs: [
      { label: "Design", val: "End-suction centrifugal" },
      { label: "Metallurgy", val: "CF8M (316), Alloy 20, Poly" },
      { label: "Duty cycle", val: "Continuous 24/7" },
      { label: "Media", val: "Acids, solvents, corrosives" },
    ],
    configurations: [
      "Chemical process pumps",
      "Polymer lined acid pumps",
      "Heavy-duty volute castings",
      "Integrated mechanical sealing",
    ],
  },
  {
    id: "bearings",
    name: "Cutlass bearings",
    tagline: "Water-lubricated hydrodynamic shaft support.",
    description:
      "Precision naval brass or composite shells lined with grooved nitrile rubber. Delivers a low-friction water film with zero risk of oil pollution.",
    productImage: "/images/catalogue/cutlass-bearings-p1.webp",
    ctaLabel: "Inquire bearing duty",
    specs: [
      { label: "Shell", val: "Naval brass / composite" },
      { label: "Lining", val: "High-durometer nitrile" },
      { label: "Lubrication", val: "Process / seawater" },
      { label: "Pollution", val: "Zero oil leakage" },
    ],
    configurations: [
      "Marine stern tube bearings",
      "Vertical turbine pump bearings",
      "Water intake sleeve bushings",
      "Custom shaft diameters",
    ],
  },
];

function ProductRow({ sys, flip }) {
  const [open, setOpen] = useState(false);
  const keySpecs = sys.specs.slice(0, 3);
  const moreSpecs = sys.specs.slice(3);

  return (
    <article className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-16">
      {/* Studio stage */}
      <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[5/4] sm:aspect-[16/11] overflow-hidden rounded-[2rem] bg-[radial-gradient(ellipse_at_50%_30%,#ffffff_0%,#f1f3f6_55%,#e1e5eb_100%)] ring-1 ring-slate-200/80">
          {/* Floor falloff */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-300/40 to-transparent"
          />
          {/* Contact shadow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 bottom-[13%] h-7 w-1/2 -translate-x-1/2 rounded-[50%] bg-slate-900/25 blur-xl transition-all duration-700 ease-out group-hover:w-[44%] group-hover:bg-slate-900/20 motion-reduce:transition-none"
          />
          {/* Product */}
          <div className="absolute inset-x-[12%] top-[8%] bottom-[16%] transition-transform duration-700 ease-out group-hover:-translate-y-2 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
            <Image
              src={sys.productImage}
              alt={sys.name}
              fill
              sizes="(max-width: 1024px) 90vw, 700px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950">
          {sys.name}
        </h3>
        <p className="mt-3 text-lg text-slate-500 leading-snug">{sys.tagline}</p>
        <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-md">{sys.description}</p>

        {/* Key specs */}
        <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {keySpecs.map((sp) => (
            <div key={sp.label} className="flex items-baseline justify-between gap-6 py-3.5">
              <dt className="text-sm text-slate-500">{sp.label}</dt>
              <dd className="text-sm font-medium text-slate-950 text-right">{sp.val}</dd>
            </div>
          ))}
        </dl>

        {/* Expandable full specs */}
        <div
          id={`more-${sys.id}`}
          className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <dl className="divide-y divide-slate-200 border-b border-slate-200">
              {moreSpecs.map((sp) => (
                <div key={sp.label} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-sm text-slate-500">{sp.label}</dt>
                  <dd className="text-sm font-medium text-slate-950 text-right">{sp.val}</dd>
                </div>
              ))}
            </dl>
            <ul className="py-5 space-y-2">
              {sys.configurations.map((cfg) => (
                <li key={cfg} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="h-px w-4 bg-bronze-300" />
                  {cfg}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button
            variant="primary"
            href={`/contact?product=${sys.id}#conversation`}
            className="justify-center"
          >
            {sys.ctaLabel}
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={`more-${sys.id}`}
            onClick={() => setOpen((v) => !v)}
            className="text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 rounded-sm"
          >
            {open ? "Hide specifications" : "Full specifications"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductPortfolio() {
  return (
    <section
      id="portfolio"
      className="relative bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 leading-[1.05]">
              Three systems.
              <br />
              <span className="text-slate-400">One engineering standard.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SealForge develops high-integrity components for sealing, pumping, and rotating-shaft
              support across demanding industrial process environments.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 sm:mt-20 space-y-20 sm:space-y-28">
          {systems.map((sys, i) => (
            <Reveal key={sys.id}>
              <ProductRow sys={sys} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}