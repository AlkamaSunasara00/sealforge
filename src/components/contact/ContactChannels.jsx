"use client";

import React from "react";
import Reveal from "@/components/about/Reveal";
import { companyInfo } from "@/data/company";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactChannels() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-white border-b border-steel-200/80 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Eyebrow & Header */}
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>DIRECT CONTACT CHANNELS & REGISTERED OFFICE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-900">
            Reach Our Technical Desk Directly
          </h2>
        </div>

        {/* 3 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Channel 1: Call Application Engineering */}
          <Reveal delay={50} className="h-full">
            <div className="h-full bg-steel-50/70 border border-steel-200/90 hover:border-brand-700 rounded-2xl p-6 sm:p-7 space-y-4 transition-all duration-300 shadow-xs hover:shadow-md group">
              <div className="w-11 h-11 rounded-xl bg-white border border-steel-200 text-brand-700 flex items-center justify-center font-bold shadow-2xs group-hover:bg-brand-950 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-steel-400 uppercase tracking-wider block font-semibold">
                  Call Application Engineering
                </span>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                  className="text-lg sm:text-xl font-bold font-mono text-brand-950 hover:text-brand-700 transition-colors mt-0.5 block"
                >
                  {companyInfo.phoneDisplay}
                </a>
              </div>
              <p className="text-xs sm:text-sm text-steel-600 leading-relaxed">
                Available Monday – Saturday, 9:00 AM – 6:30 PM IST for immediate technical assistance and urgent breakdown support.
              </p>
            </div>
          </Reveal>

          {/* Channel 2: Email Technical Sales */}
          <Reveal delay={100} className="h-full">
            <div className="h-full bg-steel-50/70 border border-steel-200/90 hover:border-bronze-600 rounded-2xl p-6 sm:p-7 space-y-4 transition-all duration-300 shadow-xs hover:shadow-md group">
              <div className="w-11 h-11 rounded-xl bg-white border border-steel-200 text-bronze-600 flex items-center justify-center font-bold shadow-2xs group-hover:bg-bronze-600 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-steel-400 uppercase tracking-wider block font-semibold">
                  Email Technical Sales
                </span>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-lg sm:text-xl font-bold font-mono text-brand-950 hover:text-brand-700 transition-colors mt-0.5 block truncate"
                >
                  {companyInfo.email}
                </a>
              </div>
              <p className="text-xs sm:text-sm text-steel-600 leading-relaxed">
                Send equipment datasheets, pump drawings, or tender specifications. We respond within 24 business hours.
              </p>
            </div>
          </Reveal>

          {/* Channel 3: Registered Office & Facility */}
          <Reveal delay={150} className="h-full">
            <div className="h-full bg-steel-50/70 border border-steel-200/90 hover:border-brand-700 rounded-2xl p-6 sm:p-7 space-y-4 transition-all duration-300 shadow-xs hover:shadow-md group">
              <div className="w-11 h-11 rounded-xl bg-white border border-steel-200 text-brand-700 flex items-center justify-center font-bold shadow-2xs group-hover:bg-brand-950 group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-steel-400 uppercase tracking-wider block font-semibold">
                  Registered Office & Facility
                </span>
                <a
                  href="#location"
                  className="text-sm sm:text-base font-bold font-mono text-brand-950 hover:text-brand-700 transition-colors mt-0.5 block leading-snug"
                >
                  A1 Chunawala Compound, LBS Marg, Kurla (West), Mumbai 400 070
                </a>
              </div>
              <p className="text-xs sm:text-sm text-steel-600 leading-relaxed">
                Maharashtra, India. Direct logistical connectivity to domestic industrial zones and international shipping ports.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
