"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import mechanicalSealsImg from "@/assets/mechenical-seals-main.webp";
import pumpsImg from "@/assets/pumps-main.webp";
import cutlassBearingImg from "@/assets/cutlass-bearing-main.webp";

const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";
const EASE_IN_OUT = "cubic-bezier(0.42, 0, 0.58, 1)";
const HOLD_MS = 5200;
const TRANSITION_MS = 750;

const SLIDES = [
  {
    id: "mechanical-seals",
    name: "Mechanical Seals",
    eyebrow: "01 / FLUID CONTAINMENT",
    lines: ["PRECISION", "MECHANICAL", "SEALS."],
    description:
      "EN 12756 balanced, unbalanced, bellows, and OEM replacement seals engineered for zero-leakage containment in severe process duties.",
    specs: ["EN 12756 Compliant", "Up to 25 Bar", "SiC / Carbon / Viton"],
    primaryLabel: "Explore Seals",
    primaryHref: "/products",
    image: mechanicalSealsImg,
    alt: "SealForge Precision Engineered Mechanical Seal",
  },
  {
    id: "industrial-pumps",
    name: "Industrial Centrifugal Pumps",
    eyebrow: "02 / PROCESS TRANSFER",
    lines: ["CORROSION", "RESISTANT", "PUMPS."],
    description:
      "Non-API overhung centrifugal pumps in metallic, solid polymer, and fluoropolymer-lined builds for corrosive chemical transfer.",
    specs: ["ISO 5199 / ANSI B73.1", "PP / PVDF / PFA Lined", "Zero-Leakage Ready"],
    primaryLabel: "Explore Pumps",
    primaryHref: "/products",
    image: pumpsImg,
    alt: "SealForge Industrial Overhung Centrifugal Pump",
  },
  {
    id: "cutlass-bearings",
    name: "Water-Lubricated Cutlass Bearings",
    eyebrow: "03 / SHAFT SUPPORT",
    lines: ["WATER", "LUBRICATED", "BEARINGS."],
    description:
      "Fluted nitrile-lined sleeve and flanged cutlass bearings built for silent, hydrodynamic shaft support in marine and hydro turbines.",
    specs: ["25 mm – 400 mm Bore", "Naval Brass / Bronze", "Hydrodynamic Flutes"],
    primaryLabel: "Explore Bearings",
    primaryHref: "/products",
    image: cutlassBearingImg,
    alt: "SealForge Water-Lubricated Cutlass Bearing",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState(null);
  const [isEntering, setIsEntering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const parallaxRef = useRef(null);
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;

    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      setStageSize({ width: rect.width, height: rect.height });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const advanceToSlide = useCallback(
    (targetIndex) => {
      if (exitingIndex !== null || targetIndex === activeIndex) return;

      if (prefersReducedMotion) {
        setActiveIndex(targetIndex);
        return;
      }

      setExitingIndex(activeIndex);
      setActiveIndex(targetIndex);
      setIsEntering(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsEntering(false);
        });
      });
    },
    [activeIndex, exitingIndex, prefersReducedMotion]
  );

  useEffect(() => {
    if (exitingIndex !== null) return undefined;

    const timer = setTimeout(() => {
      const next = (activeIndex + 1) % SLIDES.length;
      advanceToSlide(next);
    }, HOLD_MS);

    return () => clearTimeout(timer);
  }, [activeIndex, exitingIndex, advanceToSlide]);

  useEffect(() => {
    if (exitingIndex === null) return undefined;
    const cleanup = setTimeout(() => {
      setExitingIndex(null);
    }, TRANSITION_MS);
    return () => clearTimeout(cleanup);
  }, [exitingIndex]);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !sectionRef.current || !parallaxRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    const offsetX = (nx * 14).toFixed(2);
    const offsetY = (ny * 10).toFixed(2);
    parallaxRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = "translate3d(0px, 0px, 0px)";
    }
  };

  const nextIndex = (activeIndex + 1) % SLIDES.length;
  const currentSlide = SLIDES[activeIndex];
  const exitingSlide = exitingIndex !== null ? SLIDES[exitingIndex] : null;
  const isTransitioning = exitingIndex !== null;

  // Actual preview offset inside the image stage so the ~25% cutout sits cleanly in the bottom-right corner
  const insetPx = stageSize.width >= 640 ? 6 : 4;
  const featuredTransform =
    stageSize.width >= 640
      ? "translate3d(-18px, -14px, 0) scale(0.9)"
      : "translate3d(-12px, -10px, 0) scale(0.88)";
  const previewTransform =
    stageSize.width > 0 && stageSize.height > 0
      ? `translate3d(${(stageSize.width * 0.38 - insetPx).toFixed(2)}px, ${(
          stageSize.height * 0.38 -
          insetPx
        ).toFixed(2)}px, 0) scale(0.24)`
      : "translate3d(38%, 38%, 0) scale(0.24)";

  const getEnterLineStyle = (idx) => {
    if (prefersReducedMotion) return {};
    if (isEntering) {
      return {
        opacity: 0,
        transform: "translate3d(0, 16px, 0)",
        filter: "blur(6px)",
        transition: "none",
      };
    }
    return {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      filter: "blur(0px)",
      transitionProperty: "opacity, transform, filter",
      transitionDuration: "600ms",
      transitionTimingFunction: EASE_OUT,
      transitionDelay: `${90 + idx * 80}ms`,
    };
  };

  const getEnterBlockStyle = (delayMs) => {
    if (prefersReducedMotion) return {};
    if (isEntering) {
      return {
        opacity: 0,
        transform: "translate3d(0, 14px, 0)",
        filter: "blur(4px)",
        transition: "none",
      };
    }
    return {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      filter: "blur(0px)",
      transitionProperty: "opacity, transform, filter",
      transitionDuration: "600ms",
      transitionTimingFunction: EASE_OUT,
      transitionDelay: `${delayMs}ms`,
    };
  };

  const getSlideImageStyle = (idx) => {
    const isFeatured = idx === activeIndex;
    const isPreview = idx === nextIndex;
    const isExiting = idx === exitingIndex;

    if (prefersReducedMotion) {
      if (isFeatured) {
        return {
          opacity: 1,
          transform: featuredTransform,
          zIndex: 20,
          transition: "opacity 220ms ease-in-out",
        };
      }
      if (isPreview) {
        return {
          opacity: 1,
          transform: previewTransform,
          zIndex: 15,
          transition: "opacity 220ms ease-in-out",
        };
      }
      return {
        opacity: 0,
        transform: featuredTransform,
        zIndex: 10,
        transition: "opacity 220ms ease-in-out",
      };
    }

    if (isFeatured) {
      return {
        opacity: 1,
        transform: featuredTransform,
        zIndex: 20,
        transition: `transform ${TRANSITION_MS}ms ${EASE_IN_OUT}, opacity ${TRANSITION_MS}ms ${EASE_IN_OUT}`,
      };
    }

    if (isExiting) {
      return {
        opacity: 0,
        transform: "translate3d(-52px, -14px, 0) scale(0.86)",
        zIndex: 10,
        transition: `transform ${TRANSITION_MS}ms ${EASE_IN_OUT}, opacity ${TRANSITION_MS}ms ${EASE_IN_OUT}`,
      };
    }

    if (isPreview) {
      return {
        opacity: 1,
        transform: previewTransform,
        zIndex: 15,
        transition: isTransitioning
          ? "opacity 320ms ease-in-out 430ms"
          : "opacity 240ms ease-in-out",
      };
    }

    return {
      opacity: 0,
      transform: previewTransform,
      zIndex: 5,
      transition: "none",
    };
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate min-h-[calc(100svh-84px)] sm:min-h-[calc(100svh-88px)] flex items-center overflow-hidden bg-[#070d1c] text-white"
    >
      {/* Clean Static Engineering Backdrop */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.06]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(37,54,100,0.28)_0%,rgba(7,13,28,0)_62%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070d1c]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d1c]/30 via-transparent to-[#070d1c]/65" />
      </div>

      {/* Main Hero Container */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-5 pb-12 sm:px-6 sm:pt-6 sm:pb-16 lg:px-8 lg:pt-6 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Wider Text Column */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 relative">
            {/* Exiting Slide Text Layer (fades out seamlessly without leaving an empty gap) */}
            {exitingSlide && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 animate-[heroFadeOut_340ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
              >
                <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-bronze-300 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                  <span>{exitingSlide.eyebrow}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.15rem] font-bold leading-[1.05] tracking-[-0.025em] uppercase text-white">
                  {exitingSlide.lines.map((line, idx) => (
                    <span
                      key={`${exitingSlide.id}-exit-${idx}`}
                      className={`block ${
                        idx === exitingSlide.lines.length - 1 ? "text-bronze-400" : ""
                      }`}
                    >
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="mt-4 max-w-lg text-sm sm:text-base md:text-[1.0625rem] text-slate-300 leading-relaxed">
                  {exitingSlide.description}
                </p>
              </div>
            )}

            {/* Active Slide Text Layer */}
            <div key={currentSlide.id} className="relative">
              {/* Eyebrow */}
              <div
                style={getEnterBlockStyle(40)}
                className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-bronze-300 mb-3 will-change-[opacity,transform,filter]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                <span>{currentSlide.eyebrow}</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.15rem] font-bold leading-[1.05] tracking-[-0.025em] uppercase text-white">
                {currentSlide.lines.map((line, idx) => (
                  <span
                    key={`${currentSlide.id}-line-${idx}`}
                    style={getEnterLineStyle(idx)}
                    className={`block will-change-[opacity,transform,filter] ${
                      idx === currentSlide.lines.length - 1 ? "text-bronze-400" : ""
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              {/* Short Description */}
              <p
                style={getEnterBlockStyle(280)}
                className="mt-4 max-w-lg text-sm sm:text-base md:text-[1.0625rem] text-slate-300 leading-relaxed font-normal will-change-[opacity,transform,filter]"
              >
                {currentSlide.description}
              </p>

              {/* Compact Modern Engineering Spec Chips */}
              <div
                style={getEnterBlockStyle(330)}
                className="mt-5 flex flex-wrap items-center gap-2 will-change-[opacity,transform,filter]"
              >
                {currentSlide.specs.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono tracking-wide text-slate-200 backdrop-blur-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Two Common Buttons Side by Side */}
              <div
                style={getEnterBlockStyle(380)}
                className="mt-7 flex flex-wrap items-center gap-4 will-change-[opacity,transform,filter]"
              >
                <Button variant="primary" href={currentSlide.primaryHref}>
                  {currentSlide.primaryLabel}
                </Button>
                <Button variant="white" href="/contact">
                  Consult an Engineer
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Large Product Showcase with Continuous Preview-to-Featured Motion */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            {/* Subtle Ambient Spotlight Behind Product */}
            <div
              className="pointer-events-none absolute inset-0 m-auto h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,87,157,0.28)_0%,rgba(182,129,42,0.08)_48%,transparent_72%)] blur-2xl"
              aria-hidden="true"
            />

            <div
              ref={parallaxRef}
              className="relative w-full flex items-center justify-center will-change-transform transition-transform duration-300 ease-out"
            >
              <div
                ref={stageRef}
                className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[580px] aspect-[4/3] overflow-hidden"
              >
                {SLIDES.map((slide, idx) => {
                  const isPreview = idx === nextIndex;
                  const isInteractivePreview = isPreview && !isTransitioning;
                  const style = getSlideImageStyle(idx);

                  return (
                    <div
                      key={slide.id}
                      style={style}
                      className={`absolute inset-0 flex items-center justify-center origin-center will-change-[transform,opacity] ${
                        isInteractivePreview ? "pointer-events-auto" : "pointer-events-none"
                      }`}
                    >
                      {isInteractivePreview ? (
                        <button
                          type="button"
                          onClick={() => advanceToSlide(idx)}
                          aria-label={`Show ${slide.name}`}
                          className="relative w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400/80 rounded-full"
                        >
                          <Image
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            priority={idx === 0}
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 48vw, 540px"
                            className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] filter contrast-[1.04] brightness-[0.98]"
                          />
                        </button>
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={slide.image}
                            alt={idx === activeIndex ? slide.alt : ""}
                            aria-hidden={idx !== activeIndex}
                            fill
                            priority={idx === 0}
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 48vw, 540px"
                            className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] filter contrast-[1.04] brightness-[0.98]"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroFadeOut {
          from {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0px);
          }
          to {
            opacity: 0;
            transform: translate3d(0, -8px, 0);
            filter: blur(6px);
          }
        }
      `}</style>
    </section>
  );
}
