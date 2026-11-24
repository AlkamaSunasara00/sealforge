"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/components/about/Reveal";
import Button from "@/components/common/Button";
import finishedProductImg from "@/assets/contact/seal-forge-mechanical-seal.webp";
import { companyInfo } from "@/data/company";
import { Phone, Mail, MapPin, FileDown } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative py-14 sm:py-18 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Architectural Block with Cinematic Backdrop */}
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#070d1c] text-white border border-slate-800 shadow-2xl shadow-black/25">
          {/* Background Photography */}
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80"
              alt="Industrial process facility"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-25 filter brightness-90 contrast-125"
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
                  <span>LET&apos;S SOLVE YOUR SEALING & PUMPING CHALLENGE</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] uppercase text-white">
                  LET&apos;S FIND THE RIGHT SOLUTION<br />
                  FOR YOUR ROTATING<br />
                  <span className="text-slate-300">EQUIPMENT.</span>
                </h2>

                {/* Supporting Copy */}
                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                  Whether you need an engineered mechanical seal replacement, a chemical process pump, or a custom-machined cutlass bearing, our technical team is ready to evaluate your operating datasheet.
                </p>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Button variant="primary" href="/contact">
                    Request a Technical Quote
                  </Button>

                  <a
                    href="/downloads/sealforge-mechanical-seals-catalogue.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                  >
                    <FileDown className="w-4 h-4 text-bronze-300" />
                    <span>Download Catalogues (PDF)</span>
                  </a>
                </div>

                {/* Direct Technical Contact */}
                <div className="pt-8 mt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white/10 text-bronze-300 shrink-0">
                      <Phone className="w-4 h-4 text-bronze-300" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Direct Helpline</span>
                      <span className="font-bold text-white text-sm">{companyInfo.phoneDisplay}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white/10 text-bronze-300 shrink-0">
                      <Mail className="w-4 h-4 text-bronze-300" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Technical Inquiries</span>
                      <span className="font-bold text-white text-sm">{companyInfo.email}</span>
                    </div>
                  </a>

                  <div className="sm:col-span-2 flex items-start gap-2.5 pt-2 text-slate-400">
                    <MapPin className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                    <span className="text-xs leading-relaxed">
                      Works: {companyInfo.address.full}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: High-Impact Product Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <Reveal delay={150} className="w-full">
                <div className="relative w-72 sm:w-80 lg:w-96 aspect-square mx-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] transition-transform duration-500 ease-out hover:scale-105">
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
