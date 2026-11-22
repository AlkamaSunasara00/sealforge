"use client";

import React from "react";
import Reveal from "@/components/about/Reveal";
import { companyInfo } from "@/data/company";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import Button from "@/components/common/Button";

export default function ContactLocation() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "A1 Chunawala Compound, LBS Marg, Kurla West, Mumbai 400070"
  )}`;

  return (
    <section id="location" className="relative py-10 sm:py-12 lg:py-14 bg-steel-50/60 border-b border-steel-200/80 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Compact Horizontal Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
                <span>VISIT SEALFORGE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-900 leading-tight">
                Registered Office & Works
              </h2>
              <p className="text-sm text-steel-600 max-w-xl">
                Located on LBS Marg, Kurla (West), Mumbai. Supporting engineering consultations, component drop-offs, and Pan-India dispatch.
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
            {/* 1. Address */}
            <div className="bg-white border border-steel-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-steel-50 border border-steel-200 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-steel-400 uppercase tracking-wider block">
                  WORKS ADDRESS
                </span>
                <p className="text-sm text-steel-800 leading-snug">
                  <strong className="text-brand-950 block">A1 Chunawala Compound</strong>
                  LBS Marg, Kurla (West),<br />
                  Mumbai 400 070, Maharashtra, India
                </p>
              </div>
            </div>

            {/* 2. Direct Channels */}
            <div className="bg-white border border-steel-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-steel-50 border border-steel-200 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-steel-400 uppercase tracking-wider block">
                  DIRECT CONTACT
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
                </div>
              </div>
            </div>

            {/* 3. Desk Hours */}
            <div className="bg-white border border-steel-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-steel-50 border border-steel-200 text-bronze-600 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-steel-400 uppercase tracking-wider block">
                  OPERATING HOURS
                </span>
                <p className="text-sm font-mono font-bold text-brand-950">
                  Mon – Sat: 9:00 AM – 7:00 PM IST
                </p>
                <p className="text-xs text-steel-500">
                  Walk-in consultations & component drop-offs
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Wide Horizontal Panoramic Map (Clean, natural colors, zero dark overlays) */}
        <Reveal delay={150}>
          <div className="w-full h-[280px] sm:h-[320px] lg:h-[340px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-steel-200/90 shadow-xs">
            <iframe
              title="SealForge Works Mumbai Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.835955678442!2d72.8804!3d19.0728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8916d7a4c7f%3A0x1d4a8e9e4f5a6b0c!2sKurla%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
