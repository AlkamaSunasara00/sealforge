"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Reveal from "@/components/about/Reveal";
import { ShieldCheck, Sliders, CheckCircle2 } from "lucide-react";

const chapters = [
  {
    step: "01",
    tag: "APPLICATION REALITY",
    title: "A small part. A whole process.",
    text: "Seals face heat, pressure, solids and aggressive chemicals. When one leaks, a whole process can stop. As a mechanical seal manufacturer in India, we build for that reality.",
    highlight: "Engineered to prevent volatile leaks, costly downtime, and shaft seizure.",
    src: "/images/catalogue/mechanical-seals-p1.webp",
    alt: "SealForge mechanical seal assembly",
    pos: "center 48%",
    spec: "SF-MS // HEAVY DUTY SEALING",
  },
  {
    step: "02",
    tag: "DUTY-MATCHED ENGINEERING",
    title: "Matched to the duty.",
    text: "We start with the fluid, temperature, pressure, speed and solids, then check material compatibility for the complete seal assembly. The right answer starts with the duty, not a one-size-fits-all part number.",
    highlight: "Metallurgy & elastomer pairings verified against specific fluid chemistry.",
    src: "/images/catalogue/industrial-pumps-p3.webp",
    alt: "SealForge industrial pump impellers",
    pos: "center 34%",
    spec: "SF-PP // CORROSIVE FLUID DUTY",
  },
  {
    step: "03",
    tag: "ACTIONABLE GUIDANCE",
    title: "Guidance you can act on.",
    text: "Seals, pumps and bearings in standard or custom sizes, with clear engineering guidance behind every recommendation.",
    highlight: "Direct technical consultations, custom drawings, and prompt pan-India dispatch.",
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
      {/* =====================================================
          IMAGE: Clean, Premium Product Stage (Zero Background Grids)
          ===================================================== */}
      <div
        className={[
          "relative order-1 h-full min-h-0 flex items-center justify-center",
          "lg:col-span-6",
          imageRight ? "lg:order-2" : "lg:order-1",
        ].join(" ")}
      >
        {/* Soft, Pristine Architectural Podium (NO GRIDS) */}
        <div className="relative w-full h-[88%] max-h-[460px] rounded-3xl bg-gradient-to-b from-white via-steel-50/70 to-steel-100/40 border border-steel-200/80 shadow-[0_16px_36px_rgba(15,35,65,0.06)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          {/* Subtle Ambient Radial Highlight */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-[radial-gradient(circle,rgba(37,54,100,0.06)_0%,transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Specification Pill */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-steel-500 pb-2">
            <span className="font-bold text-brand-900 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
              {chapter.spec}
            </span>
            <span className="text-steel-400 font-medium">SEALFORGE WORKS</span>
          </div>

          {/* Product Photography */}
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

          {/* Bottom Verification Chip */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono pt-2 border-t border-steel-200/60">
            <span className="text-steel-500">MUMBAI, INDIA</span>
            <span className="text-brand-700 font-bold">100% BENCH TESTED</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTENT: High-Contrast, Authoritative Typography
          ===================================================== */}
      <div
        className={[
          "relative z-20 order-2 flex h-full flex-col justify-center",
          "lg:col-span-6",
          imageRight ? "lg:order-1" : "lg:order-2",
        ].join(" ")}
      >
        <div className="max-w-xl space-y-4 sm:space-y-5">
          {/* Chapter Eyebrow Label */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
            <span>CHAPTER {chapter.step} // {chapter.tag}</span>
          </div>

          {/* Headline */}
          <h3 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.14] tracking-[-0.025em] text-brand-900">
            {chapter.title}
          </h3>

          {/* Story Paragraph */}
          <p className="text-[15px] sm:text-base lg:text-[17px] leading-relaxed text-steel-700 font-normal">
            {chapter.text}
          </p>

          {/* Key Takeaway Callout */}
          <div className="pt-2">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-steel-200/80 flex items-start gap-3 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-steel-800 font-medium leading-relaxed">
                {chapter.highlight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutStory() {
  const n = chapters.length;

  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const slidesRef = useRef([]);

  const [activeSlide, setActiveSlide] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setReducedMotion(mediaQuery.matches);

    const handleChange = (event) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let animationFrame = 0;

    const updateSlides = () => {
      if (!wrapperRef.current || !stickyRef.current) {
        return;
      }

      const wrapper = wrapperRef.current.getBoundingClientRect();
      const stickyHeight = stickyRef.current.offsetHeight;

      /*
       * Reduced travel range so scrolling feels responsive and tight
       */
      const scrollRange = Math.max(1, wrapper.height - stickyHeight);
      const topOffset = window.innerWidth >= 1024 ? 80 : 20;

      const progress = clamp((topOffset - wrapper.top) / scrollRange);
      const position = progress * (n - 1);

      // Track the closest active slide index for navigation indicator
      const currentIndex = clamp(Math.round(position), 0, n - 1);
      setActiveSlide(currentIndex);

      slidesRef.current.forEach((slide, index) => {
        if (!slide) return;

        const offset = position - index;
        const distance = Math.abs(offset);

        /*
         * Tighter opacity fade curve: avoids long dead blanks
         */
        const opacity = clamp(1 - distance * 2.0);

        slide.style.opacity = String(opacity);
        slide.style.visibility = opacity > 0.01 ? "visible" : "hidden";

        /*
         * Gentle, refined vertical slide
         */
        slide.style.transform = `translate3d(0, ${-offset * 14}px, 0)`;

        /*
         * Product image moves slightly with parallax
         */
        const image = slide.querySelector("[data-img]");
        if (image) {
          const direction = index % 2 === 0 ? 1 : -1;
          const imageOffset = offset * direction * 10;
          const scale = 1 + Math.min(distance, 1) * 0.02;

          image.style.transform = `translate3d(${imageOffset}px, 0, 0) scale(${scale})`;
        }
      });
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateSlides);
    };

    updateSlides();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [n, reducedMotion]);

  // Jump to specific slide on indicator click
  const scrollToSlide = useCallback(
    (slideIdx) => {
      if (!wrapperRef.current || !stickyRef.current) return;
      const wrapperTop =
        wrapperRef.current.getBoundingClientRect().top + window.scrollY;
      const stickyHeight = stickyRef.current.offsetHeight;
      const scrollRange = Math.max(
        1,
        wrapperRef.current.offsetHeight - stickyHeight
      );
      const targetScroll =
        wrapperTop -
        (window.innerWidth >= 1024 ? 80 : 20) +
        (slideIdx / (n - 1)) * scrollRange;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    },
    [n]
  );

  return (
    <section id="our-story" className="bg-steel-50 border-t border-steel-200/60">
      {/* =====================================================
          SECTION HEADER: Equal, balanced vertical spacing
          ===================================================== */}
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-4 sm:px-6 sm:pt-12 sm:pb-6 lg:px-8 lg:pt-14 lg:pb-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-steel-200">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
                <span>HOW WE ENGINEER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-[-0.03em] text-brand-900">
                Built for equipment
                <br className="hidden sm:block" />
                <span className="text-steel-500">
                  {" "}that cannot afford to fail.
                </span>
              </h2>
            </div>

            {/* Interactive Chapter Indicator Strip */}
            <div className="hidden md:flex items-center gap-2 p-1.5 rounded-xl bg-white border border-steel-200 shadow-xs">
              {chapters.map((ch, idx) => (
                <button
                  key={ch.step}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    activeSlide === idx
                      ? "bg-brand-900 text-white shadow-xs"
                      : "text-steel-600 hover:text-brand-900 hover:bg-steel-50"
                  }`}
                >
                  <span className="opacity-70">{ch.step}.</span>
                  <span>{ch.tag.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          SCROLL STORY: Tighter, balanced sticky viewport
          ===================================================== */}
      {reducedMotion ? (
        <div className="mx-auto max-w-7xl space-y-12 px-6 pb-16 sm:px-8 lg:px-12">
          {chapters.map((chapter, index) => (
            <div key={chapter.title} className="min-h-[50svh]">
              <StorySlide chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      ) : (
        <div
          ref={wrapperRef}
          className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14"
          style={{
            /* Reduced from 300svh to 215svh for tight, responsive scroll travel */
            height: `${n * 72}svh`,
          }}
        >
          <div
            ref={stickyRef}
            className={[
              "sticky",
              "top-12 lg:top-20",
              "h-[calc(100svh-4rem)]",
              "min-h-[480px]",
              "max-h-[640px]",
              "lg:h-[calc(100svh-6rem)]",
              "lg:min-h-[520px]",
              "overflow-hidden",
            ].join(" ")}
          >
            <div className="relative h-full w-full">
              {chapters.map((chapter, index) => (
                <div
                  key={chapter.title}
                  ref={(element) => {
                    slidesRef.current[index] = element;
                  }}
                  className="absolute inset-0 will-change-transform"
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    visibility: index === 0 ? "visible" : "hidden",
                  }}
                >
                  <StorySlide chapter={chapter} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
