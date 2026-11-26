"use client";

import React from "react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import { companyInfo } from "@/data/company";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ProductsCtaSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl border border-slate-200/90 shadow-[0_24px_60px_-24px_rgba(10,17,34,0.2)]">
            {/* Left 7 Cols: Deep Navy Narrative & Actions */}
            <div className="lg:col-span-7 relative isolate bg-[#070d1c] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#253664]/45 blur-3xl"
              />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                  <span>TECHNICAL SELECTION &amp; CUSTOM SIZING</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-[1.08] uppercase text-white">
                  NEED APPLICATION ENGINEERING{" "}
                  <span className="text-bronze-400">OR A CUSTOM QUOTE?</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  Share your fluid chemistry, operating temperature, pressure, shaft speed, and diameter. Our Mumbai application engineers will verify compatibility and recommend the exact build.
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button variant="white" href="/contact">
                  Submit Equipment Datasheet
                </Button>
              </div>
            </div>

            {/* Right 5 Cols: White Direct Contact Desk */}
            <div className="lg:col-span-5 bg-white text-slate-900 p-8 sm:p-10 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-bronze-600 block mb-3">
                Mumbai Application Desk
              </span>
              <h3 className="text-xl font-bold text-brand-950 tracking-tight mb-5">
                Speak Directly With Engineering
              </h3>

              <dl className="divide-y divide-slate-200 border-y border-slate-200">
                <div className="py-3.5 flex items-center justify-between gap-3">
                  <dt className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase">
                    <Phone className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                    <span>Helpline</span>
                  </dt>
                  <dd>
                    <a
                      href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1 text-sm font-mono font-bold text-brand-950 hover:text-brand-700 transition-colors"
                    >
                      <span>{companyInfo.phoneDisplay}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-bronze-600" />
                    </a>
                  </dd>
                </div>

                <div className="py-3.5 flex items-center justify-between gap-3">
                  <dt className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase">
                    <Mail className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                    <span>Email RFQ</span>
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="inline-flex items-center gap-1 text-sm font-mono font-bold text-brand-950 hover:text-brand-700 transition-colors"
                    >
                      <span>{companyInfo.email}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-bronze-600" />
                    </a>
                  </dd>
                </div>

                <div className="py-3.5 flex items-start justify-between gap-4">
                  <dt className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 uppercase shrink-0 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                    <span>Facility</span>
                  </dt>
                  <dd className="text-xs text-slate-700 leading-relaxed text-right font-medium">
                    A1 Chunawala Compound, LBS Marg, Kurla (West), Mumbai 400 070
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
