"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { selectionSteps } from "@/data/about";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";

export default function AboutProcess() {
  const listRef = useRef(null);
  const stepRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const mid = window.innerHeight * 0.5;

      let idx = 0;
      stepRefs.current.forEach((node, i) => {
        if (node && node.getBoundingClientRect().top < mid) idx = i;
      });
      setActive(idx);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i) =>
    stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <section className="relative bg-white py-14 sm:py-20 lg:py-24 border-b border-steel-200/80">
      {/* soft blue wash */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[520px] bg-[radial-gradient(ellipse_at_top_right,rgba(91,121,195,.08),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 items-start">
          {/* LEFT: Pinned on Desktop */}
          <div className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
                <span>HOW WE COLLABORATE WITH PLANT ENGINEERS</span>
              </div>
              <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-brand-900">
                Selection starts with your operating duty.
              </h2>
              <p className="mt-4 max-w-md text-sm sm:text-base leading-7 text-steel-600 font-normal">
                Good recommendations begin with the exact chemical, thermal, and hydraulic conditions your equipment faces. Here is our 4-step engineering workflow from duty datasheet to verified dispatch.
              </p>

              {/* Clickable step index (desktop) */}
              <ul className="mt-8 hidden space-y-2 lg:block">
                {selectionSteps.map((step, i) => {
                  const isActive = i === active;
                  return (
                    <li key={step.number}>
                      <button
                        type="button"
                        onClick={() => goTo(i)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all font-mono text-xs flex items-center justify-between ${
                          isActive
                            ? "bg-brand-950 text-white font-bold shadow-xs"
                            : "text-steel-600 hover:bg-steel-50 hover:text-brand-950"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className={isActive ? "text-bronze-400" : "text-steel-400"}>
                            {step.number}
                          </span>
                          <span>{step.title}</span>
                        </span>
                        {isActive && <ArrowRight className="w-3.5 h-3.5 text-bronze-400" />}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-6">
                <Button variant="primary" href="/contact">
                  Start an Engineering Selection
                </Button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Step Cards List */}
          <div ref={listRef} className="space-y-6">
            {selectionSteps.map((step, i) => {
              const isActive = i === active;
              return (
                <div
                  key={step.number}
                  ref={(el) => (stepRefs.current[i] = el)}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 space-y-4 ${
                    isActive
                      ? "bg-steel-50/90 border-brand-700/60 shadow-md"
                      : "bg-white border-steel-200/80 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-steel-200/60">
                    <span className="text-xs font-mono font-bold text-bronze-600 tracking-wider">
                      {step.detail}
                    </span>
                    <span className="text-sm font-mono font-bold text-steel-400">
                      // {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-brand-950 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-steel-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
