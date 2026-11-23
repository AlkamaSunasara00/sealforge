"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import finishedProductImg from "@/assets/contact/seal-forge-mechanical-seal.webp";
import { companyInfo } from "@/data/company";
import { Phone, Mail } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Architectural Block with Cinematic Photography */}
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#070d1c] text-white border border-slate-800 shadow-2xl shadow-black/20">
          {/* Background Industrial Stock Photo — NO GRIDS */}
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80"
              alt="Industrial plant twilight facility"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-30 filter brightness-90 contrast-125"
            />
            {/* Cinematic Film Vignette Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#070d1c] via-[#070d1c]/95 to-[#070d1c]/80"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            {/* Left Column: Heading, Copy & Action */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                {/* Eyebrow Label */}
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                  <span>TECHNICAL INQUIRY</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] uppercase text-white">
                  READY TO RESOLVE<br />
                  YOUR ROTATING EQUIPMENT<br />
                  <span className="text-slate-300">CHALLENGE?</span>
                </h2>

                {/* Supporting Copy */}
                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                  Tell us about your operating parameters, fluid chemistry, or equipment specifications. Our Mumbai engineering team will review your duty requirements and recommend the optimal solution.
                </p>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Button variant="white" href="/contact#conversation">
                    Start Technical Conversation
                  </Button>

                  <a
                    href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold font-mono tracking-wider uppercase text-slate-200 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-bronze-400" />
                    <span>Call: {companyInfo.phoneDisplay}</span>
                  </a>
                </div>

                {/* Technical Footnote */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-bronze-400" />
                    <span>{companyInfo.email}</span>
                  </div>
                  <div>MUMBAI MANUFACTURING WORKS</div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Clean, Dramatic Product Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <Reveal delay={150} className="w-full">
                <div className="relative w-72 sm:w-84 lg:w-96 aspect-square mx-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] transition-transform duration-500 ease-out hover:scale-105">
                  <Image
                    src={finishedProductImg}
                    alt="SealForge Engineered Mechanical Sealing Assembly"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain filter contrast-110 brightness-95"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
