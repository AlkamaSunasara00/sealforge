"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { selectionSteps } from "@/data/about";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";

const READY_DETAILS = ["Fluid", "Temperature", "Pressure", "Speed", "Shaft size"];

export default function AboutProcess() {
  const listRef = useRef(null);
  const stepRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [fill, setFill] = useState(0);
  const [trackHeight, setTrackHeight] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const list = listRef.current;
      const last = stepRefs.current[selectionSteps.length - 1];
      if (!list || !last) return;

      const mid = window.innerHeight * 0.5;
      const rect = list.getBoundingClientRect();

      // line runs from first node centre (44px) to last node centre
      const height = last.offsetTop;
      setTrackHeight(height);
      setFill(Math.min(height, Math.max(0, mid - rect.top - 44)));

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

    // re-measure if content height changes (fonts, images, wrapping)
    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(onScroll) : null;
    if (ro && listRef.current) ro.observe(listRef.current);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro?.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i) =>
    stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    // NOTE: no overflow-hidden on this section or any parent, it breaks sticky
    <section className="relative bg-steel-50">
      {/* soft blue wash, top right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[520px] bg-[radial-gradient(ellipse_at_top_right,rgba(91,121,195,.10),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          {/* LEFT: pinned on desktop */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
                <span>HOW WE WORK</span>
              </div>
              <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-brand-900 sm:text-5xl">
                Selection starts with your duty.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-steel-600">
                Good recommendations begin with the conditions your equipment
                actually faces. Here&apos;s how we take an application from
                details to a considered recommendation.
              </p>

              {/* clickable step index (desktop) */}
              <ul className="mt-10 hidden space-y-1 lg:block">
                {selectionSteps.map((step, i) => {
                  const isActive = i === active;
                  return (
                    <li key={step.number}>
                      <button
                        type="button"
                        onClick={() => goTo(i)}
                        aria-current={isActive ? "step" : undefined}
                        className="group flex w-full cursor-pointer items-center gap-4 rounded-lg py-2 text-left outline-none transition-colors hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-brand-400"
                      >
                        <span
                          className={`h-px transition-all duration-500 ${
                            isActive
                              ? "w-10 bg-brand-700"
                              : "w-5 bg-steel-300 group-hover:w-8"
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={`font-mono text-xs transition-colors ${
                            isActive ? "text-brand-700" : "text-steel-400"
                          }`}
                        >
                          {step.number}
                        </span>
                        <span
                          className={`text-sm font-medium transition-colors ${
                            isActive
                              ? "text-brand-900"
                              : "text-steel-400 group-hover:text-steel-700"
                          }`}
                        >
                          {step.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* details to have ready */}
              <div className="mt-10 border-t border-steel-200 pt-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[.14em] text-steel-500">
                  Helpful details to have ready
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {READY_DETAILS.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-steel-200 bg-white px-3 py-1 text-xs font-medium text-steel-700"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <Button
                  variant="primary"
                  href="/contact"
                  className="mt-7"
                >
                  Send an enquiry
                </Button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: timeline */}
          <div ref={listRef} className="relative">
            {/* track */}
            <div
              className="absolute left-6 top-11 w-px -translate-x-1/2 bg-steel-300"
              style={{ height: trackHeight }}
              aria-hidden="true"
            />
            {/* fill */}
            <div
              className="absolute left-6 top-11 w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-400 to-brand-700"
              style={{ height: fill }}
              aria-hidden="true"
            />

            {selectionSteps.map((step, index) => {
              const isActive = index === active;
              const isDone = index < active;
              const isLast = index === selectionSteps.length - 1;

              return (
                <div
                  key={step.number}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className={`relative pl-16 sm:pl-20 ${
                    isLast ? "" : "pb-8 sm:pb-12"
                  }`}
                >
                  {/* node */}
                  <span
                    className={`absolute left-0 top-5 z-[1] flex h-12 w-12 items-center justify-center rounded-full border-2 font-mono text-sm font-semibold transition-all duration-500 ${
                      isActive
                        ? "scale-110 border-brand-700 bg-brand-700 text-white shadow-[0_0_0_7px_rgba(91,121,195,.16)]"
                        : isDone
                        ? "border-brand-900 bg-brand-900 text-white"
                        : "border-steel-300 bg-steel-50 text-steel-500"
                    }`}
                  >
                    {isDone ? (
                      <Check size={17} strokeWidth={2.5} aria-hidden="true" />
                    ) : (
                      step.number
                    )}
                  </span>

                  {/* card */}
                  <article
                    className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 sm:p-8 ${
                      isActive
                        ? "border-brand-800 bg-brand-900 shadow-xl shadow-brand-900/15 sm:-translate-y-0.5"
                        : isDone
                        ? "border-steel-200 bg-white shadow-sm"
                        : "border-steel-200/70 bg-white/70 opacity-80"
                    }`}
                  >
                    <span
                      className={`absolute inset-x-6 top-0 h-px transition-colors duration-500 sm:inset-x-8 ${
                        isActive ? "bg-bronze-400/80" : "bg-transparent"
                      }`}
                      aria-hidden="true"
                    />
                    {/* glow on active card */}
                    <div
                      className={`pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-brand-400/30 blur-3xl transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <p
                        className={`font-mono text-[10px] tracking-[.15em] transition-colors duration-500 ${
                          isActive ? "text-brand-200" : "text-steel-500"
                        }`}
                      >
                        {step.detail}
                      </p>
                      <h3
                        className={`mt-2 text-2xl font-semibold tracking-tight transition-colors duration-500 sm:text-[28px] ${
                          isActive ? "text-white" : "text-brand-900"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`mt-4 max-w-lg text-sm leading-7 transition-colors duration-500 ${
                          isActive ? "text-steel-200" : "text-steel-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
