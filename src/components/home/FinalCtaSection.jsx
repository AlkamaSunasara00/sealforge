"use client";

import React from "react";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import MagicRings from "@/components/about/MagicRings";
import { companyInfo } from "@/data/company";
import { Phone, Mail, MapPin } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="bg-steel-50 px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16 border-b border-slate-200">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-brand-800/70 bg-brand-950 shadow-2xl shadow-brand-950/15">
        {/* Animated MagicRings Background (Matches About Page CTA) */}
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

        <div className="relative mx-auto flex max-w-4xl items-center justify-center px-5 py-11 text-center sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <Reveal className="flex w-full flex-col items-center">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
              <span>LET&apos;S SOLVE YOUR SEALING &amp; PUMPING CHALLENGE</span>
            </div>

            {/* Main Heading */}
            <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight uppercase text-white">
              LET&apos;S FIND THE RIGHT SOLUTION FOR YOUR{" "}
              <span className="text-bronze-400">ROTATING EQUIPMENT.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-[1.0625rem] leading-relaxed text-steel-200 font-normal">
              Whether you need an engineered mechanical seal replacement, a chemical process pump, or a custom-machined cutlass bearing, our technical team is ready to evaluate your operating datasheet.
            </p>

            {/* Action CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
              <Button variant="white" href="/contact">
                Request a Technical Quote
              </Button>

              <Button variant="primary" href="/products">
                Explore Products
              </Button>
            </div>

            {/* Direct Contact Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-mono text-steel-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>Kurla (West), Mumbai 400 070</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>Direct: {companyInfo.phoneDisplay}</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Email: {companyInfo.email}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
