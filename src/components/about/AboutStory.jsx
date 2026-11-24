"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Reveal from "@/components/about/Reveal";
import { ShieldCheck, Sliders, CheckCircle2 } from "lucide-react";

const chapters = [
  {
    step: "01",
    tag: "APPLICATION REALITY",
    title: "A small part. A whole process.",
    text: "Seals, pump impellers and bearings face extreme heat, pressure, abrasive solids, and boiling chemicals. A small leak or face distortion can halt an entire plant. As a Mumbai-based rotating equipment manufacturer, SealForge builds for that exact operational reality.",
    highlight: "Engineered to eliminate volatile chemical leaks, costly downtime, and catastrophic shaft seizure.",
    src: "/images/catalogue/mechanical-seals-p1.webp",
    alt: "SealForge mechanical seal assembly",
    pos: "center 48%",
    spec: "SF-MS // HEAVY DUTY SEALING",
  },
  {
    step: "02",
    tag: "DUTY-MATCHED ENGINEERING",
    title: "Matched to the real duty.",
    text: "We never recommend rotating equipment from a generic parts catalog. We review fluid chemistry, operating temperature (-20°C to 230°C), pressure (up to 25 bar), and solids concentration to ensure total material compatibility across faces, elastomers, and casings.",
    highlight: "Face pairings (SSiC, Carbon, TC) and fluoropolymer liners (PVDF, PFA) verified for duty.",
    src: "/images/catalogue/industrial-pumps-p3.webp",
    alt: "SealForge industrial pump impellers",
    pos: "center 34%",
    spec: "SF-PP // CORROSIVE FLUID DUTY",
  },
  {
    step: "03",
    tag: "ACTIONABLE GUIDANCE",
    title: "Engineering guidance you can act on.",
    text: "Direct consultations with application engineers in Mumbai, CAD cross-section verification, standard EN 12756 / ISO 5199 compliance, and prompt pan-India dispatch. Every component is backed by clear engineering reasoning.",
    highlight: "Direct technical consultations, custom retrofit drawings, and prompt pan-India dispatch.",
    src: "/images/catalogue/cutlass-bearings-p2.webp",
    alt: "SealForge water-lubricated cutlass bearing",
    pos: "center 86%",
    spec: "SF-CB // WATER LUBRICATION",
  },
];

const clamp = (value, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

function StorySlide({ chapter, index }) {
  const imageRight = index % 2 === 0;

  return (
    <div
      className={[
        "grid h-full w-full items-center",
        "grid-rows-[45%_1fr]",
        "gap-6",
        "sm:grid-rows-[48%_1fr]",
        "sm:gap-8",
        "lg:grid-cols-12",
        "lg:grid-rows-1",
        "lg:gap-12 xl:gap-16",
      ].join(" ")}
    >
      {/* Product Image Stage */}
      <div
        className={[
          "relative order-1 h-full min-h-0 flex items-center justify-center",
          "lg:col-span-6",
          imageRight ? "lg:order-2" : "lg:order-1",
        ].join(" ")}
      >
        <div className="relative w-full h-[88%] max-h-[460px] rounded-3xl bg-gradient-to-b from-white via-steel-50/70 to-steel-100/40 border border-steel-200/80 shadow-[0_16px_36px_rgba(15,35,65,0.06)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-[radial-gradient(circle,rgba(37,54,100,0.06)_0%,transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-steel-500 pb-2">
            <span className="font-bold text-brand-900 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
              {chapter.spec}
            </span>
            <span className="text-steel-400 font-medium">SEALFORGE WORKS</span>
          </div>

          <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 py-2">
            <img
              data-img
              src={chapter.src}
              alt={chapter.alt}
              loading={index === 0 ? "eager" : "lazy"}
              style={{
                objectPosition: chapter.pos,
              }}
              className="h-full max-h-[300px] w-auto max-w-full object-contain drop-shadow-[0_18px_28px_rgba(16,26,53,0.14)] will-change-transform transition-transform duration-300"
            />
          </div>

          <div className="relative z-10 pt-2 border-t border-steel-200/60 flex items-center justify-between text-[11px] font-mono text-steel-400">
            <span>ENGINEERED SPECIFICATION</span>
            <span className="text-bronze-600 font-bold uppercase">{chapter.tag}</span>
          </div>
        </div>
      </div>

      {/* Text Narrative */}
      <div
        className={[
          "order-2 flex flex-col justify-center",
          "lg:col-span-6",
          imageRight ? "lg:order-1" : "lg:order-2",
        ].join(" ")}
      >
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-600">
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-500" />
            <span>CHAPTER {chapter.step} // {chapter.tag}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-950 tracking-tight leading-tight">
            {chapter.title}
          </h3>

          <p className="text-sm sm:text-base text-steel-600 leading-relaxed font-normal">
            {chapter.text}
          </p>

          <div className="p-4 rounded-2xl bg-steel-50 border border-steel-200/80 flex items-start gap-3 text-xs sm:text-sm text-brand-950 font-medium">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span>{chapter.highlight}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutStory() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-white border-b border-steel-200/80 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>OUR PURPOSE & ENGINEERING MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-900 leading-tight">
            Built for equipment that cannot afford to fail.
          </h2>

          <p className="text-base sm:text-lg text-steel-600 leading-relaxed font-normal">
            In industrial fluid handling, a seal leak or pump breakdown is never an isolated issue—it halts production lines and creates environmental hazards. SealForge was founded to provide Indian industry with rotating equipment engineered to duty.
          </p>
        </Reveal>

        {/* Chapters Tabs & Stage */}
        <div className="space-y-8">
          {/* Chapter Selector Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 border-b border-steel-200 pb-2 overflow-x-auto">
            {chapters.map((ch, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={ch.step}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? "bg-brand-950 text-white shadow-xs"
                      : "text-steel-600 hover:text-brand-900 hover:bg-steel-50"
                  }`}
                >
                  <span className={isActive ? "text-bronze-400" : "text-steel-400"}>
                    {ch.step}
                  </span>
                  <span>{ch.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Chapter Display */}
          <Reveal key={activeIdx} delay={40}>
            <div className="min-h-[460px]">
              <StorySlide chapter={chapters[activeIdx]} index={activeIdx} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
