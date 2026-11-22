"use client";

import React from "react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import MagicRings from "@/components/about/MagicRings";
import { companyInfo } from "@/data/company";
import { Phone, Mail } from "lucide-react";

export default function ContactFinalCta() {
  return (
    <section className="bg-steel-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-brand-800/70 bg-brand-950 text-white shadow-2xl shadow-brand-950/15">
        {/* Interactive Breathing Magic Rings Canvas */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        >
          <MagicRings
            color="#d49938"
            colorTwo="#5b79c3"
            ringCount={6}
            motion="breathe"
            speed={0.35}
            lineThickness={1.6}
            glow={0.8}
            opacity={0.72}
            followMouse
            mouseInfluence={0.08}
            hoverScale={1.05}
            hoverIntensity={0.7}
            parallax={0.025}
            clickBurst={false}
            className="h-full w-full"
          />
        </div>

        {/* Content Container */}
        <div className="relative mx-auto flex min-h-[420px] max-w-5xl items-center justify-center px-6 py-10 text-center sm:min-h-[460px] sm:px-8 sm:py-14 lg:min-h-[500px]">
          <Reveal className="flex w-full flex-col items-center">
            {/* Standard Eyebrow Label on Dark Background */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
              <span>HAVE AN APPLICATION TO SOLVE?</span>
            </div>

            {/* Main Headline */}
            <h2 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase">
              LET&apos;S TALK ENGINEERING.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-steel-200 sm:text-lg font-normal">
              From mechanical seals and industrial pumps to cutlass bearings and application-specific requirements, we&apos;re ready to understand the problem and work toward the right solution.
            </p>

            {/* Dual Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button variant="white" href="#conversation">
                Talk to Our Engineers
              </Button>
              <Button variant="primary" href="/#products">
                Explore Products
              </Button>
            </div>

            {/* Direct Communication Bar */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-steel-300">
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-bronze-400" />
                <span>Direct: {companyInfo.phoneDisplay}</span>
              </a>

              <span className="text-white/20 hidden sm:inline">•</span>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Email: {companyInfo.email}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
