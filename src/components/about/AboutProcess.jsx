"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ClipboardList, PackageCheck, Ruler } from "lucide-react";

import { selectionSteps } from "@/data/about";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import dutyAnalysisImg from "@/assets/home/duty-analysis-industrial-engineering.webp";
import compatibilityImg from "@/assets/about/story-02-materials.webp";
import dimensionalImg from "@/assets/about/story-03-guidance.webp";
import dispatchImg from "@/assets/home/industrial-quality-dispatch.webp";

const stepVisuals = [
  {
    label: "Operating duty sheet",
    icon: ClipboardList,
    image: dutyAnalysisImg,
    alt: "Engineer reviewing industrial pump and seal operating duty parameters",
    fields: ["Fluid chemistry", "Temperature", "Pressure", "Flow"],
  },
  {
    label: "Material compatibility",
    image: compatibilityImg,
    alt: "Sealing faces, an elastomer bellows, and a polymer sample on an engineering workbench",
  },
  {
    label: "Dimensional verification",
    icon: Ruler,
    image: dimensionalImg,
    alt: "A seal ring being measured with a caliper beside a cross-section drawing",
  },
  {
    label: "Dispatch & technical support",
    icon: PackageCheck,
    image: dispatchImg,
    alt: "SealForge quality inspection and industrial dispatch packaging",
    fields: ["Dispatch", "Technical documentation", "Application support"],
  },
];

function StepVisual({ visual }) {
  const Icon = visual.icon;

  return (
    <figure className="relative m-0 min-h-[144px] overflow-hidden rounded-xl border border-[#E8DFD2] bg-[#F5F1EA] p-3.5">
      <figcaption className="relative z-10 flex items-center gap-2 text-xs font-semibold text-brand-950">
        {Icon && (
          <Icon aria-hidden="true" className="h-4 w-4 text-bronze-700" />
        )}
        {visual.label}
      </figcaption>

      {visual.image && (
        <div className="relative mt-2.5 aspect-[4/3] overflow-hidden rounded-lg bg-[#0D1625]">
          <Image
            src={visual.image}
            alt={visual.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
            className="object-cover"
          />
        </div>
      )}

      {visual.fields && (
        <ul className="mt-3 grid grid-cols-2 gap-1.5">
          {visual.fields.map((field) => (
            <li
              key={field}
              className="flex min-h-8 items-center rounded-md border border-[#E8DFD2] bg-[#FFFDFA] px-2 py-1 text-[11px] leading-snug text-steel-700"
            >
              {field}
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}

export default function AboutProcess() {
  const workflowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasSteps = selectionSteps.length > 0;
  const showDesktopTrack = selectionSteps.length > 1;

  useEffect(() => {
    const workflow = workflowRef.current;
    if (!workflow) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(workflow);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="about-process-heading"
      className="border-b border-[#E8DFD2] bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-4 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-12">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-bronze-700">
              How we collaborate with plant engineers
            </p>

            <h2
              id="about-process-heading"
              className="mt-3 max-w-xl text-3xl font-bold leading-tight tracking-tight text-brand-950 sm:text-4xl lg:text-5xl"
            >
              Selection starts with your operating duty.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-steel-700">
            Good recommendations begin with the exact chemical, thermal, and
            hydraulic conditions your equipment faces. Here is our 4-step
            engineering workflow from duty datasheet to verified dispatch.
          </p>
        </Reveal>

        <div
          ref={workflowRef}
          className="mt-7 overflow-hidden rounded-2xl border border-[#E8DFD2] bg-[#FFFDFA] sm:mt-9"
        >
          <div className="border-b border-[#E8DFD2] px-4 py-3 sm:px-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-900">
              Engineering workflow
            </p>
          </div>

          {hasSteps && (
            <div className="px-4 py-5 sm:px-6 sm:py-6">
              <div className="relative">
                {showDesktopTrack && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-5 hidden h-px bg-[#DCCDB9] lg:block"
                    style={{
                      left: `${50 / selectionSteps.length}%`,
                      right: `${50 / selectionSteps.length}%`,
                    }}
                  >
                    <div
                      className={`h-full origin-left bg-bronze-600 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out ${isVisible
                          ? "scale-x-100"
                          : "motion-safe:scale-x-0"
                        }`}
                    />
                  </div>
                )}

                <ol
                  role="list"
                  className="relative m-0 grid list-none p-0 lg:grid-cols-[var(--step-columns)]"
                  style={{
                    "--step-columns": `repeat(${selectionSteps.length}, minmax(0, 1fr))`,
                  }}
                >
                  {selectionSteps.map((step, index) => {
                    const visual = stepVisuals[index];

                    return (
                      <li
                        key={step.number}
                        className="relative grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 pb-6 last:pb-0 sm:gap-x-4 lg:flex lg:flex-col lg:gap-0 lg:px-3 lg:pb-0 xl:px-4"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute bottom-0 left-5 top-5 w-px bg-[#DCCDB9] [li:last-child>&]:hidden lg:hidden"
                        />

                        <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#DCCDB9] bg-[#FFFDFA] font-mono text-xs font-bold text-bronze-700 lg:self-center">
                          {step.number}
                        </span>

                        <div className="min-w-0 lg:mt-5 lg:flex lg:flex-1 lg:flex-col">
                          <div className="min-w-0">
                            {step.detail && (
                              <p className="font-mono text-[11px] font-semibold uppercase leading-snug tracking-wide text-bronze-700">
                                {step.detail}
                              </p>
                            )}

                            <h3 className="mt-1 text-lg font-bold leading-tight tracking-tight text-brand-950">
                              {step.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-steel-700">
                              {step.description}
                            </p>
                          </div>

                          {visual && (
                            <div className="mt-3 max-w-md lg:mt-auto lg:max-w-none lg:pt-4">
                              <StepVisual visual={visual} />
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          )}

          <div className="flex justify-start border-t border-[#E8DFD2] bg-[#F5F1EA] px-4 py-4 sm:justify-end sm:px-6">
            <Button variant="primary" href="/contact">
              Start an Engineering Selection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}