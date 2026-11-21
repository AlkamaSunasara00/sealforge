"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/about/Reveal";

const chapters = [
  {
    tag: "The problem",
    title: "A small part. A whole process.",
    text: "Seals face heat, pressure, solids and aggressive chemicals. When one leaks, a whole process can stop. As a mechanical seal manufacturer in India, we build for that reality.",
    caption: "Mechanical seal assembly",
    alt: "SealForge mechanical seal shown in the product catalogue",
    src: "/images/catalogue/mechanical-seals-p1.webp",
    pos: "center 48%",
  },
  {
    tag: "The approach",
    title: "Matched to the duty.",
    text: "We start with the fluid, temperature, pressure, speed and solids, then check material compatibility for the complete seal assembly. The right answer starts with the duty, not a one-size-fits-all part number.",
    caption: "Industrial pump impellers",
    alt: "SealForge open and semi-open industrial pump impellers",
    src: "/images/catalogue/industrial-pumps-p3.webp",
    pos: "center 34%",
  },
  {
    tag: "What you get",
    title: "Guidance you can act on.",
    text: "Seals, pumps and bearings in standard or custom sizes, with clear engineering guidance behind every recommendation.",
    caption: "Water-lubricated cutlass bearing",
    alt: "SealForge cutlass bearing from the product catalogue",
    src: "/images/catalogue/cutlass-bearings-p2.webp",
    pos: "center 86%",
  },
];

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const STICKY_TOP = 96; // px: keep in sync with the "top-24" class below

function Slide({ c, i, still }) {
  const imgRight = i % 2 === 0; // 1st: image right. 2nd: image left. 3rd: image right.
  return (
    <div
      className={`grid h-full items-center gap-6 lg:grid-cols-2 lg:gap-16 ${
        still ? "" : "grid-rows-[38%_1fr] lg:grid-rows-1"
      }`}
    >
      {/* text */}
      <div className={`order-2 flex flex-col gap-4 lg:gap-5 ${imgRight ? "lg:order-1" : "lg:order-2"}`}>
        <p className="font-mono text-xs font-semibold uppercase tracking-[.14em] text-bronze-700">
          {c.tag}
        </p>
        <h3 className="text-3xl font-bold leading-tight tracking-tight text-brand-900 sm:text-4xl lg:text-5xl">
          {c.title}
        </h3>
        <p className="max-w-lg text-base leading-8 text-steel-600">{c.text}</p>
      </div>

      {/* image */}
      <div
        className={`order-1 h-full min-h-0 ${imgRight ? "lg:order-2" : "lg:order-1"} ${
          still ? "aspect-[4/3] lg:aspect-auto lg:h-[420px]" : ""
        }`}
      >
        <div className="relative h-full w-full overflow-hidden border border-steel-200 bg-steel-100">
          <img
            data-img
            src={c.src}
            alt={c.alt}
            loading={i === 0 ? "eager" : "lazy"}
            style={{ objectPosition: c.pos }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out"
          />
          <p className="absolute inset-x-0 bottom-0 border-t border-steel-200 bg-white/95 px-4 py-3 text-xs font-semibold text-brand-900 sm:px-5 sm:py-4 sm:text-sm">
            {c.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutStory() {
  const n = chapters.length;
  const wrap = useRef(null);
  const box = useRef(null);
  const slides = useRef([]);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let raf;
    let last = 0;

    const update = () => {
      if (!wrap.current || !box.current) return;
      const r = wrap.current.getBoundingClientRect();
      const range = Math.max(1, r.height - box.current.offsetHeight);
      const p = clamp((STICKY_TOP - r.top) / range);
      const pos = p * (n - 1);

      slides.current.forEach((el, i) => {
        if (!el) return;
        const o = pos - i; // 0 = this slide is in focus
        const a = Math.abs(o);
        const vis = clamp((0.5 - a) * 4); // holds fully visible, then fades
        const side = i % 2 === 0 ? 1 : -1;
        el.style.opacity = String(vis);
        el.style.visibility = vis > 0 ? "visible" : "hidden";
        el.style.transform = `translate3d(0, ${-o * 28}px, 0)`;
        el.style.pointerEvents = a < 0.5 ? "auto" : "none";
        const img = el.querySelector("[data-img]");
        if (img) {
          img.style.transform = `translate3d(${o * side * 12}px,0,0) scale(${1 + clamp(a) * 0.03})`;
        }
      });

      const idx = Math.round(pos);
      if (idx !== last) {
        last = idx;
        setActive(idx);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced, n]);

  return (
    <section id="our-story" className="bg-steel-50">
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:px-8 sm:pt-24 lg:pt-28">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-brand-900 sm:text-5xl">
            Built for equipment that cannot afford to fail.
          </h2>
        </Reveal>
      </div>

      {reduced ? (
        /* Reduced motion: plain stacked story, no pinning */
        <div className="mx-auto max-w-7xl space-y-16 px-6 py-16 sm:px-8">
          {chapters.map((c, i) => (
            <Slide key={c.title} c={c} i={i} still />
          ))}
        </div>
      ) : (
        <div
          ref={wrap}
          className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
          style={{ height: `${n * 100}svh` }}
        >
          {/* The sticky box */}
          <div
            ref={box}
            className="sticky top-24 flex h-[calc(100svh-7rem)] min-h-[540px] flex-col border border-steel-200 bg-white p-5 shadow-sm sm:p-8 lg:p-12"
          >
            <div className="relative min-h-0 flex-1">
              {chapters.map((c, i) => (
                <div
                  key={c.title}
                  ref={(el) => (slides.current[i] = el)}
                  className="absolute inset-0 will-change-transform"
                  style={{ opacity: i === 0 ? 1 : 0, visibility: i === 0 ? "visible" : "hidden" }}
                >
                  <Slide c={c} i={i} />
                </div>
              ))}
            </div>

            {/* progress */}
            <div className="mt-5 flex items-center gap-4" aria-hidden="true">
              <div className="flex flex-1 gap-1.5">
                {chapters.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 transition-colors duration-500 ${
                      i === active ? "bg-bronze-500" : "bg-steel-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
