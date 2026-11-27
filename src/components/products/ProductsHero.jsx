"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import mechanicalSealBlueprint from "@/assets/about/mechanical-seal-blueprint.webp";
import heroCompositeImg from "@/assets/SealForge Industrial Pump and Components.webp";
// import heroCompositeImg from "@/assets/hero/products-hero-composite.webp";

const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function ProductsHero() {
  const [loaded, setLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const sectionRef = useRef(null);
  const blueprintRef = useRef(null);
  const glowRef = useRef(null);
  const backLineRef = useRef(null);
  const imageLayerRef = useRef(null);
  const frontLineRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);

    let raf1;
    let raf2;
    if (mq.matches) {
      setLoaded(true);
    } else {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          setLoaded(true);
        });
      });
    }

    return () => {
      mq.removeEventListener("change", update);
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    if (blueprintRef.current) {
      blueprintRef.current.style.transform = `translate3d(${(nx * -8).toFixed(2)}px, ${(ny * -5).toFixed(2)}px, 0) scale(1.04)`;
    }
    if (glowRef.current) {
      glowRef.current.style.transform = `translate3d(${(nx * -12).toFixed(2)}px, ${(ny * -8).toFixed(2)}px, 0)`;
    }
    if (backLineRef.current) {
      backLineRef.current.style.transform = `translate3d(${(nx * 10).toFixed(2)}px, ${(ny * 6).toFixed(2)}px, 0)`;
    }
    if (imageLayerRef.current) {
      imageLayerRef.current.style.transform = `translate3d(${(nx * 17).toFixed(2)}px, ${(ny * 10).toFixed(2)}px, 0)`;
    }
    if (frontLineRef.current) {
      frontLineRef.current.style.transform = `translate3d(${(nx * 24).toFixed(2)}px, ${(ny * 14).toFixed(2)}px, 0)`;
    }
  };

  const handleMouseLeave = () => {
    const reset = "translate3d(0px, 0px, 0px)";
    if (blueprintRef.current) {
      blueprintRef.current.style.transform = "translate3d(0px, 0px, 0px) scale(1.04)";
    }
    if (glowRef.current) glowRef.current.style.transform = reset;
    if (backLineRef.current) backLineRef.current.style.transform = reset;
    if (imageLayerRef.current) imageLayerRef.current.style.transform = reset;
    if (frontLineRef.current) frontLineRef.current.style.transform = reset;
  };

  const backLineAnimStyle = prefersReducedMotion
    ? {}
    : {
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translate3d(0, 0, 0)" : "translate3d(-8vw, 0, 0)",
        filter: loaded ? "blur(0px)" : "blur(8px)",
        transition: `opacity 850ms ${EASE_OUT} 40ms, transform 900ms ${EASE_OUT} 40ms, filter 850ms ${EASE_OUT} 40ms`,
      };

  const imageAnimStyle = prefersReducedMotion
    ? {}
    : {
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translate3d(0, 0, 0) scale(1)" : "translate3d(0, 28px, 0) scale(0.84)",
        filter: loaded ? "blur(0px)" : "blur(12px)",
        transition: `opacity 1000ms ${EASE_OUT} 120ms, transform 1100ms ${EASE_OUT} 120ms, filter 1000ms ${EASE_OUT} 120ms`,
      };

  const frontLineAnimStyle = prefersReducedMotion
    ? {}
    : {
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translate3d(0, 0, 0)" : "translate3d(8vw, 0, 0)",
        filter: loaded ? "blur(0px)" : "blur(8px)",
        transition: `opacity 850ms ${EASE_OUT} 180ms, transform 950ms ${EASE_OUT} 180ms, filter 850ms ${EASE_OUT} 180ms`,
      };

  const glowAnimStyle = prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: loaded ? 1 : 0,
        transform: loaded ? "scale(1)" : "scale(0.72)",
        transition: `opacity 1100ms ${EASE_OUT} 180ms, transform 1200ms ${EASE_OUT} 180ms`,
      };

  const shadowAnimStyle = prefersReducedMotion
    ? {}
    : {
        opacity: loaded ? 1 : 0,
        transform: loaded ? "scale(1)" : "scale(0.6)",
        transition: `opacity 900ms ${EASE_OUT} 300ms, transform 950ms ${EASE_OUT} 300ms`,
      };

  const buttonsAnimStyle = prefersReducedMotion
    ? {}
    : {
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
        filter: loaded ? "blur(0px)" : "blur(4px)",
        transition: `opacity 750ms ${EASE_OUT} 420ms, transform 800ms ${EASE_OUT} 420ms, filter 750ms ${EASE_OUT} 420ms`,
      };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate min-h-[640px] h-[calc(100svh-84px)] sm:h-[calc(100svh-88px)] max-h-[900px] flex flex-col items-center justify-center overflow-hidden bg-[#070d1c] text-white border-b border-white/10"
    >
      {/* Layer 0: Blueprint Background (moves slightly opposite on parallax) */}
      <div
        ref={blueprintRef}
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat opacity-20 will-change-transform transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${mechanicalSealBlueprint.src})`,
          transform: "translate3d(0px, 0px, 0px) scale(1.04)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-b from-[#070d1c]/85 via-[#070d1c]/78 to-[#070d1c]"
        aria-hidden="true"
      />

      {/* Layer 1: Soft Blue/Cyan Radial Glow behind product */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -z-10 inset-0 flex items-center justify-center will-change-transform transition-transform duration-300 ease-out"
        aria-hidden="true"
      >
        <div
          style={glowAnimStyle}
          className="h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] lg:h-[540px] lg:w-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16)_0%,rgba(37,54,100,0.28)_42%,transparent_72%)] blur-2xl"
        />
      </div>

      {/* Centered Composition */}
      <div className="mx-auto w-full px-3 sm:px-6 flex flex-col items-center justify-center text-center">
        <h1 className="relative w-full flex flex-col items-center justify-center">
          {/* Layer 2 (Back, z-1): Outline "ENGINEERED" — 90-95% viewport width */}
          <div
            ref={backLineRef}
            className="relative z-[1] w-full flex justify-center will-change-transform transition-transform duration-300 ease-out pointer-events-none"
          >
            <span
              style={{
                ...backLineAnimStyle,
                color: "rgba(255, 255, 255, 0.04)",
                WebkitTextStroke: "clamp(1.2px, 0.16vw, 2.2px) rgba(255, 255, 255, 0.56)",
              }}
              className="block text-[13.4vw] sm:text-[13.6vw] lg:text-[13.4vw] leading-[0.84] font-bold tracking-[-0.04em] uppercase whitespace-nowrap select-none will-change-[opacity,transform]"
            >
              ENGINEERED
            </span>
          </div>

          {/* Layer 3 (Middle, z-2): Product Image (~52% viewport width desktop, ~80% mobile, max ~52% hero height) */}
          <div
            ref={imageLayerRef}
            className="relative z-[2] -mt-[5.2vw] sm:-mt-[4.8vw] lg:-mt-[4.6vw] w-[80vw] sm:w-[62vw] md:w-[55vw] lg:w-[52vw] max-w-[760px] mx-auto will-change-transform transition-transform duration-300 ease-out"
          >
            <div
              style={imageAnimStyle}
              className="relative w-full flex flex-col items-center will-change-[opacity,transform,filter]"
            >
              {/* Idle Float Wrapper */}
              <div
                className={`relative w-full flex justify-center ${
                  prefersReducedMotion ? "" : "hero-idle-float"
                }`}
              >
                <Image
                  src={heroCompositeImg}
                  alt="SealForge Mechanical Seals, Industrial Pumps, and Cutlass Bearings"
                  priority
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 52vw"
                  className="w-full h-auto max-h-[38svh] sm:max-h-[46svh] lg:max-h-[48svh] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.85)]"
                />
              </div>

              {/* Ground Ellipse Shadow scaling slightly with float */}
              <div
                aria-hidden="true"
                style={shadowAnimStyle}
                className="w-full flex justify-center will-change-[opacity,transform]"
              >
                <div
                  className={`-mt-3 sm:-mt-4 h-5 sm:h-7 w-[68%] rounded-full bg-black/70 blur-xl pointer-events-none ${
                    prefersReducedMotion ? "" : "hero-shadow-pulse"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Layer 4 (Front, z-3): Solid Bronze-400 "CATALOGUE." cutting across product */}
          <div
            ref={frontLineRef}
            className="relative z-[3] -mt-[10.5vw] sm:-mt-[9.5vw] lg:-mt-[9vw] w-full flex justify-center will-change-transform transition-transform duration-300 ease-out pointer-events-none"
          >
            <span
              style={frontLineAnimStyle}
              className="relative block text-[13.4vw] sm:text-[13.6vw] lg:text-[13.4vw] leading-[0.84] font-bold tracking-[-0.04em] uppercase whitespace-nowrap select-none text-bronze-400 drop-shadow-[0_12px_28px_rgba(7,13,28,0.94)] will-change-[opacity,transform]"
            >
              CATALOGUE.
            </span>
          </div>
        </h1>

        {/* Layer 5 (Front, z-4): Buttons directly under "CATALOGUE." */}
        <div
          style={buttonsAnimStyle}
          className="relative z-[4] mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-4 will-change-[opacity,transform]"
        >
          <Button variant="primary" href="#mechanical-seals">
            Explore Products
          </Button>
          <Button variant="white" href="/contact">
            Consult an Engineer
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroIdleFloat {
          0%,
          100% {
            transform: translate3d(0, 0px, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }
        @keyframes heroShadowPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(0.92);
            opacity: 0.48;
          }
        }
        .hero-idle-float {
          animation: heroIdleFloat 6s ease-in-out infinite;
        }
        .hero-shadow-pulse {
          animation: heroShadowPulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
