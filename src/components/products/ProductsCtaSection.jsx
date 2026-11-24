"use client";

import React from "react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import MagicRings from "@/components/about/MagicRings";
import { companyInfo } from "@/data/company";
import { Phone, Mail, FileText, ArrowRight, Download } from "lucide-react";

export default function ProductsCtaSection() {
  return (
    <section className="bg-steel-50 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-brand-800/80 bg-brand-950 shadow-2xl shadow-brand-950/20">
        {/* Magic Rings Canvas */}
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
        <div className="relative mx-auto flex min-h-[460px] max-w-5xl items-center justify-center px-6 py-14 text-center sm:min-h-[500px] sm:px-8 sm:py-18 lg:min-h-[540px]">
          <Reveal className="flex w-full flex-col items-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 mb-6 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
              <span>TECHNICAL SELECTION & CUSTOM SIZING</span>
            </div>

            {/* Headline */}
            <h2 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight uppercase text-white">
              Need Application Engineering <br />
              <span className="bg-gradient-to-r from-bronze-300 via-bronze-400 to-bronze-500 bg-clip-text text-transparent">
                or a Custom Quotation?
              </span>
            </h2>

            {/* Narrative */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-steel-200 sm:text-lg font-normal">
              Every rotating equipment duty is unique. Share your operating fluid, operating temperature, pressure, speed, and shaft diameter. Our engineering team in Mumbai will verify material compatibility and recommend the optimal configuration.
            </p>

            {/* Dual CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button variant="white" href="/contact">
                Submit Equipment Datasheet →
              </Button>
              <Button
                variant="primary"
                href="/downloads/sealforge-mechanical-seals-catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF Catalogues
              </Button>
            </div>

            {/* Direct Helpline Strip */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-steel-300">
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>Direct Engineering Helpline: {companyInfo.phoneDisplay}</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Email RFQ: {companyInfo.email}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
