"use client";

import React, { useState } from "react";
import Reveal from "@/components/about/Reveal";
import { ChevronDown, HelpCircle, ShieldCheck, Clock, RefreshCw, Ruler, Award } from "lucide-react";

const faqs = [
  {
    id: "turnaround",
    icon: Clock,
    question: "How quickly will I receive an engineering recommendation and quote?",
    answer:
      "For standard mechanical seals, cutlass bearings, and standard centrifugal pumps, our engineering team in Mumbai typically responds within 4 to 24 business hours. Complex slurry, high-temperature, or polymer-lined acid pump applications requiring custom hydraulic calculations are quoted within 48 hours."
  },
  {
    id: "interchange",
    icon: RefreshCw,
    question: "Can SealForge supply replacements for imported or obsolete mechanical seals?",
    answer:
      "Yes. We routinely cross-reference and manufacture direct drop-in replacements for standard EN 12756 (DIN 24960) seals, elastomer bellows (MG1, MG12, MG13, JC series), and Grundfos pump seals (including BQQE, BQQV, DQQE, HQQE, and cartridge designs). We eliminate long import lead times and high OEM markups while matching or exceeding original specifications."
  },
  {
    id: "custom-bearings",
    icon: Ruler,
    question: "Can cutlass bearings be manufactured to custom dimensions?",
    answer:
      "Absolutely. While our standard catalogue covers shafts from 25 mm to 400 mm in both metric and imperial sizes, SealForge regularly manufactures custom outer diameters, custom axial lengths, split-shell housings, and specialized flanged arrangements tailored to your housing drawings and operating clearances."
  },
  {
    id: "certifications",
    icon: Award,
    question: "Do you provide material test certificates and quality reports?",
    answer:
      "Yes. All engineered deliveries can be accompanied by raw material test certificates (MTC), face flatness inspection reports (measured within 2 helium light bands), hydrostatic pressure test certifications, and dynamic balancing verification upon request."
  },
  {
    id: "duty-selection",
    icon: ShieldCheck,
    question: "What if I do not have a full chemical or mechanical datasheet?",
    answer:
      "You don't need a complete laboratory analysis. Provide what you know—pump make, fluid type, motor speed, and general operating temperature. Our application engineers will cross-examine historical service data, advise on material pairings (e.g. SSiC vs Carbon, or PVDF lining), and guide you to the right selection."
  }
];

export default function ContactFaq() {
  const [openId, setOpenId] = useState("turnaround");

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white border-b border-steel-200/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] bg-[radial-gradient(ellipse_at_top_right,rgba(91,121,195,0.06),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-900 leading-tight">
            What to Expect When Working with SealForge.
          </h2>

          <p className="text-base sm:text-lg text-steel-600 leading-relaxed font-normal">
            Clear engineering answers to common inquiries regarding quotations, custom retrofits, OEM interchangeability, and quality validation.
          </p>
        </Reveal>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;

            return (
              <Reveal key={faq.id} delay={idx * 60}>
                <div
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "bg-steel-50/90 border-brand-700/60 shadow-sm"
                      : "bg-white border-steel-200/90 hover:border-steel-300 shadow-2xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-brand-950 text-white"
                            : "bg-steel-100 text-brand-700"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-base sm:text-lg font-bold text-brand-950 tracking-tight">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-brand-950 text-white"
                          : "bg-steel-100 text-steel-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-steel-200/60">
                      <p className="text-sm sm:text-base text-steel-700 leading-relaxed pl-14">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
