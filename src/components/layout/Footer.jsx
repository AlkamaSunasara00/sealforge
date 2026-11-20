"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  FileDown,
  ArrowRight,
  ShieldCheck,
  Disc,
  ExternalLink,
  CheckCircle,
  ArrowUp,
  Cpu
} from "lucide-react";
import { companyInfo, cataloguesData } from "@/data/company";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080e1d] text-slate-200 relative overflow-hidden border-t-2 border-slate-800" id="contact">
      {/* Top Laser Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 via-brand-400 to-transparent" />

      {/* 1. Pre-Footer Callout: Spacious & High Contrast */}
      <div className="border-b border-slate-800/80 bg-[#0c152b]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-amber-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Mumbai Works & Engineering Active</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Need Application Sizing or Urgent Seal Retrofit?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Our application engineers in Kurla (West), Mumbai provide certified dimensional drawings, API flush plan recommendations, and rapid dispatch across India and overseas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="#technical-rfq"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-brand-700 hover:bg-brand-600 rounded-xl shadow-lg transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-mono transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{companyInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid: Spacious, High Contrast */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Column 1: Brand & Office (Width: 4/12) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <div className="h-11 w-auto flex items-center">
                <Image
                  src="/sealforge-white.svg"
                  alt="SealForge"
                  width={220}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                {companyInfo.tagline}
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Specialized Indian manufacturers of high-integrity mechanical seals, water-lubricated cutlass sleeve bearings, and corrosive-service chemical pumps for rotating equipment.
            </p>

            {/* Registered Office Box */}
            <div className="bg-[#101b36] rounded-xl p-5 border border-slate-700/80 space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>REGISTERED OFFICE & WORKS</span>
              </div>
              <p className="text-slate-200 leading-relaxed text-xs">
                {companyInfo.address.full}
              </p>
              <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300 font-mono">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-amber-300 transition-colors"
                >
                  {companyInfo.email}
                </a>
                <span className="text-amber-400 font-bold">{companyInfo.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Products (Width: 3/12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <Disc className="w-4 h-4 text-amber-400" />
              <span>Product Lines</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="#mechanical-seals" className="hover:text-white transition-colors block">
                  SF-B Balanced Mechanical Seals
                </Link>
              </li>
              <li>
                <Link href="#mechanical-seals" className="hover:text-white transition-colors block">
                  SF-U Unbalanced General Duty
                </Link>
              </li>
              <li>
                <Link href="#mechanical-seals" className="hover:text-white transition-colors block">
                  SF-C Cartridge Package Seals
                </Link>
              </li>
              <li>
                <Link href="#mechanical-seals" className="hover:text-white transition-colors block">
                  SF-S Single & Multi-Spring
                </Link>
              </li>
              <li>
                <Link href="#mechanical-seals" className="hover:text-white transition-colors block">
                  SF-G Grundfos Pump Replacement
                </Link>
              </li>
              <li>
                <Link href="#cutlass-bearings" className="hover:text-white transition-colors block">
                  Cutlass Sleeve Bearings (25–400mm)
                </Link>
              </li>
              <li>
                <Link href="#cutlass-bearings" className="hover:text-white transition-colors block">
                  Flanged Marine Shaft Bearings
                </Link>
              </li>
              <li>
                <Link href="#industrial-pumps" className="hover:text-white transition-colors block">
                  ISO 5199 Metallic Process Pumps
                </Link>
              </li>
              <li>
                <Link href="#industrial-pumps" className="hover:text-white transition-colors block">
                  Polymer-Lined Chemical Pumps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Materials & Specs (Width: 2/12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-400" />
              <span>Standards</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>SS 316 Metallurgy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Hastelloy C-276</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>SSiC Silicon Carbide</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Tungsten Carbide</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>FFKM & FKM Viton</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>PTFE & EPDM</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>API 682 Flush Plans</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>ANSI B16.5 Flanges</span>
              </li>
            </ul>
          </div>

          {/* Column 4: PDF Catalogues (Width: 3/12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <FileDown className="w-4 h-4 text-amber-400" />
              <span>Catalogues</span>
            </h4>
            <div className="space-y-3">
              {cataloguesData.map((cat) => (
                <a
                  key={cat.id}
                  href={cat.pdfPath}
                  download
                  className="group block p-3.5 rounded-xl bg-[#101b36] border border-slate-700 hover:border-amber-400 transition-all"
                >
                  <div className="flex items-center justify-between text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    <span className="truncate pr-1">{cat.title.replace(" Catalogue", "")}</span>
                    <FileDown className="w-4 h-4 text-amber-400 shrink-0" />
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center justify-between font-mono">
                    <span>{cat.pages} Pages</span>
                    <span className="text-amber-400 font-semibold">{cat.size} · PDF</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Technical Disclaimer */}
        <div className="mt-14 pt-8 border-t border-slate-800">
          <div className="bg-[#0d162d] rounded-xl p-5 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white uppercase tracking-wider block mb-1">
                Engineering Specification Disclaimer (Catalogue Page 11)
              </span>
              <p>
                Dimensions, materials, operating limits, and performance charts published herein are for engineering guidance. Because chemical composition, viscosity, vaporization margins, and dynamic loads vary per installation, SealForge reserves the right to revise specifications without prior notice. Contact SealForge application engineering with certified fluid parameters for formal layout validation.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Bottom Legal Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>© {new Date().getFullYear()} SealForge Engineering. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-white transition-colors">
              Registered Office
            </Link>
            <Link href="#catalogues" className="hover:text-white transition-colors">
              Catalogues
            </Link>
            <a
              href="https://www.sealforge.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 font-mono"
            >
              <span>sealforge.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors ml-2"
              title="Back to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
