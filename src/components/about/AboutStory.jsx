"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/about/Reveal";
import storyApplicationImg from "@/assets/about/story-01-application.webp";
import storyMaterialsImg from "@/assets/about/story-02-materials.webp";
import storyGuidanceImg from "@/assets/about/story-03-guidance.webp";

const chapters = [
  {
    step: "01",
    label: "Application reality",
    title: "A small part. A whole process.",
    text: "Seals, pump impellers and bearings face extreme heat, pressure, abrasive solids, and boiling chemicals. A small leak or face distortion can halt an entire plant. As a Mumbai-based rotating equipment manufacturer, SealForge builds for that exact operational reality.",
    highlight:
      "Engineered to eliminate volatile chemical leaks, costly downtime, and catastrophic shaft seizure.",
    src: storyApplicationImg,
    alt: "Navy SealForge pump connected to steel process pipework",
    position: "center 54%",
  },
  {
    step: "02",
    label: "Duty-matched engineering",
    title: "Matched to the real duty.",
    text: "We never recommend rotating equipment from a generic parts catalog. We review fluid chemistry, operating temperature (-20°C to 230°C), pressure (up to 25 bar), and solids concentration to ensure total material compatibility across faces, elastomers, and casings.",
    highlight:
      "Face pairings (SSiC, Carbon, TC) and fluoropolymer liners (PVDF, PFA) verified for duty.",
    src: storyMaterialsImg,
    alt: "Steel and dark sealing faces, an elastomer bellows, and a white polymer sample on a workbench",
    position: "center 62%",
  },
  {
    step: "03",
    label: "Actionable guidance",
    title: "Engineering guidance you can act on.",
    text: "Direct consultations with application engineers in Mumbai, CAD cross-section verification, standard EN 12756 / ISO 5199 compliance, and prompt pan-India dispatch. Every component is backed by clear engineering reasoning.",
    highlight:
      "Direct technical consultations, custom retrofit drawings, and prompt pan-India dispatch.",
    src: storyGuidanceImg,
    alt: "An engineer checks a seal ring with a caliper beside a cross-section drawing",
    position: "center 58%",
  },
];

function ChapterDetails({ chapter }) {
  return (
    <div className="max-w-lg space-y-4">
      <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
        {chapter.title}
      </h3>

      <p className="text-sm leading-relaxed text-white/85 sm:text-base">
        {chapter.text}
      </p>

      <p className="border-l-2 border-bronze-400 pl-4 text-sm font-medium leading-relaxed text-bronze-200">
        {chapter.highlight}
      </p>
    </div>
  );
}

function ChapterPhoto({ chapter, desktop = false }) {
  return (
    <Image
      src={chapter.src}
      alt={chapter.alt}
      fill
      sizes="(max-width: 1024px) 100vw, 1280px"
      className="object-cover"
      style={{ objectPosition: desktop ? chapter.position : "center" }}
    />
  );
}

export default function AboutStory() {
  const sectionId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState(true);
  const activeChapter = chapters[activeIndex];
  const desktopPanelId = `${sectionId}-desktop-panel`;

  return (
    <section
      aria-labelledby={`${sectionId}-heading`}
      className="border-b border-steel-200/80 bg-white py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-3 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-10">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-bronze-700">
              Our Purpose &amp; Engineering Mission
            </p>

            <h2
              id={`${sectionId}-heading`}
              className="mt-2 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-brand-950 sm:text-4xl lg:text-[2.75rem]"
            >
              Built for equipment that cannot afford to fail.
            </h2>
          </div>

          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-steel-700">
            In industrial fluid handling, a seal leak or pump breakdown is never
            an isolated issue—it halts production lines and creates
            environmental hazards. SealForge was founded to provide Indian
            industry with rotating equipment engineered to duty.
          </p>
        </Reveal>

        {/* Desktop photo stage */}
        <Reveal className="mt-6 hidden overflow-hidden rounded-2xl border border-brand-950/15 bg-[#0D1625] lg:block">
          <div
            role="group"
            aria-label="Engineering mission chapters"
            className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10"
          >
            {chapters.map((chapter, index) => {
              const selected = activeIndex === index;

              return (
                <button
                  key={chapter.step}
                  type="button"
                  aria-pressed={selected}
                  aria-controls={desktopPanelId}
                  onClick={() => {
                    setActiveIndex(index);
                    setMobileExpanded(true);
                  }}
                  className={`flex min-h-12 items-center gap-2.5 border-b-2 px-5 py-2.5 text-left text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bronze-300 motion-safe:transition-colors xl:px-6 cursor-pointer ${
                    selected
                      ? "border-bronze-400 bg-[#253664]/45 text-white"
                      : "border-transparent text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`font-mono text-xs ${
                      selected ? "text-bronze-300" : "text-slate-400"
                    }`}
                  >
                    {chapter.step}
                  </span>
                  <span>{chapter.label}</span>
                </button>
              );
            })}
          </div>

          <div
            id={desktopPanelId}
            className="relative isolate flex min-h-[350px] items-center overflow-hidden xl:min-h-[390px]"
          >
            {chapters.map((chapter, index) => (
              <div
                key={chapter.step}
                aria-hidden={index !== activeIndex}
                className={`pointer-events-none absolute inset-0 motion-safe:transition-opacity motion-safe:duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <ChapterPhoto chapter={chapter} desktop />
              </div>
            ))}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(8,15,27,.98) 0%, rgba(8,15,27,.93) 30%, rgba(8,15,27,.76) 50%, rgba(8,15,27,.22) 70%, transparent 92%)",
              }}
            />

            <div
              key={activeChapter.step}
              className="mission-copy relative z-10 w-[56%] p-7 xl:p-10"
            >
              <ChapterDetails chapter={activeChapter} />
            </div>
          </div>
        </Reveal>

        {/* Mobile and tablet chapters */}
        <div className="mt-5 divide-y divide-steel-200 border-y border-steel-200 lg:hidden">
          {chapters.map((chapter, index) => {
            const isOpen = activeIndex === index && mobileExpanded;
            const panelId = `${sectionId}-mobile-${chapter.step}`;

            return (
              <div key={chapter.step}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      setActiveIndex(index);
                      setMobileExpanded(!isOpen);
                    }}
                    className="flex min-h-12 w-full items-center gap-3 px-2 py-2.5 text-left text-sm font-semibold text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-bronze-700"
                    >
                      {chapter.step}
                    </span>

                    <span className="flex-1">{chapter.label}</span>

                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 shrink-0 motion-safe:transition-transform ${
                        isOpen ? "rotate-180 text-bronze-700" : ""
                      }`}
                    />
                  </button>
                </h3>

                <div id={panelId} hidden={!isOpen}>
                  {isOpen && (
                    <div className="mission-copy mb-4 overflow-hidden rounded-xl border border-brand-800/60 bg-[#0d1b3e]">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <ChapterPhoto chapter={chapter} />
                        {/* Subtle bottom overlay blending image into blue text panel */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0d1b3e] via-[#0d1b3e]/45 to-transparent"
                        />
                      </div>

                      <div className="bg-[#0d1b3e] px-5 pb-6 pt-3 sm:px-7 sm:pb-7">
                        <ChapterDetails chapter={chapter} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}