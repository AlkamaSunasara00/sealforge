"use client";

import React from "react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import sealForgeMechanicalSeal from "@/assets/contact/seal-forge-mechanical-seal.webp";
import { companyInfo } from "@/data/company";

export default function ContactHero() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-brand-950 text-white">
      {/* Mechanical seal blueprint background */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${sealForgeMechanicalSeal.src})`,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 -z-20 bg-brand-950/80"
        aria-hidden="true"
      />

      {/* Center readability overlay */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,35,65,0.22)_0%,rgba(5,12,27,0.65)_55%,rgba(5,12,27,0.92)_100%)]"
        aria-hidden="true"
      />

      {/* Bottom transition */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-t from-brand-950 to-transparent"
        aria-hidden="true"
      />

      {/* Main content - equal top and bottom spacing */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            {/* Section Eyebrow Label */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
              <span>LET&apos;S SOLVE YOUR APPLICATION</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Contact SealForge:
              <span className="block text-steel-300 font-normal mt-1">
                Application Engineering & Technical Enquiries
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-steel-200 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg font-normal">
              Have a fluid sealing, chemical pumping, or rotating shaft support requirement? Speak directly with SealForge application engineers. Whether you need an OEM cross-reference, a high-temperature balanced seal, a lined acid pump, or a custom-machined cutlass bearing, our technical desk is ready to assist.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
              <Button variant="primary" href="#conversation">
                Submit Technical Enquiry
              </Button>

              <Button variant="white" href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}>
                Call {companyInfo.phoneDisplay}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-bronze-500/50"
        aria-hidden="true"
      />
    </section>
  );
}
