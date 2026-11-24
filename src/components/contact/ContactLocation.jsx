"use client";

import React from "react";
import Reveal from "@/components/about/Reveal";
import { companyInfo } from "@/data/company";
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from "lucide-react";
import Button from "@/components/common/Button";

export default function ContactLocation() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "A1 Chunawala Compound, LBS Marg, Kurla West, Mumbai 400070"
  )}`;

  return (
    <section id="location" className="relative py-12 sm:py-16 lg:py-20 bg-steel-50/60 border-b border-steel-200/80 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Horizontal Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
                <span>VISIT OUR MUMBAI FACILITY & LOGISTICS HUB</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-900 leading-tight">
                Centrally Located in Mumbai, Serving Industry Nationwide
              </h2>
              <p className="text-sm sm:text-base text-steel-600 max-w-2xl">
                Our Kurla (West) facility is strategically positioned in Mumbai, enabling rapid turnaround, prompt engineering meetings, and efficient dispatch across industrial belts including Gujarat, Maharashtra, South India, and international hubs.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                variant="primary"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </Button>
            </div>
          </div>
        </Reveal>

        {/* 3 Horizontal Details Cards (Segmented Row) */}
        <Reveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* 1. Address & Landmark */}
            <div className="bg-white border border-steel-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-steel-50 border border-steel-200 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-bold text-steel-400 uppercase tracking-wider block">
                  REGISTERED WORKS & FACILITY
                </span>
                <p className="text-sm text-steel-800 leading-snug">
                  <strong className="text-brand-950 block">SealForge</strong>
                  A1 Chunawala Compound, LBS Marg,<br />
                  Kurla (West), Mumbai 400 070, Maharashtra, India.
                </p>
                <p className="text-xs text-steel-500 pt-1 border-t border-steel-100">
                  <strong className="text-steel-700">Landmark:</strong> Located on LBS Marg with direct arterial access to WEH, EEH, and Airport Cargo Terminal.
                </p>
              </div>
            </div>

            {/* 2. Direct Channels */}
            <div className="bg-white border border-steel-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-steel-50 border border-steel-200 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-bold text-steel-400 uppercase tracking-wider block">
                  DIRECT CONTACT & RFQ
                </span>
                <div className="text-sm font-mono space-y-0.5">
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                    className="block font-bold text-brand-950 hover:text-brand-700 transition-colors"
                  >
                    {companyInfo.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="block text-steel-600 hover:text-brand-700 transition-colors truncate"
                  >
                    {companyInfo.email}
                  </a>
                  <p className="text-xs text-steel-500 font-sans pt-1 border-t border-steel-100">
                    Direct technical consultation & drawing reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Desk Hours */}
            <div className="bg-white border border-steel-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-steel-50 border border-steel-200 text-bronze-600 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-bold text-steel-400 uppercase tracking-wider block">
                  ENGINEERING DESK HOURS
                </span>
                <p className="text-sm font-bold text-brand-950">
                  Monday – Saturday: 9:00 AM – 6:30 PM IST
                </p>
                <p className="text-xs text-steel-500">
                  Sunday: Closed (Emergency breakdown hotline active)
                </p>
                <div className="pt-1 border-t border-steel-100 flex items-center gap-1.5 text-xs font-mono text-emerald-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Technical Support Active</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
