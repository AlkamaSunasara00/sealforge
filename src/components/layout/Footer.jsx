"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowUp,
  Globe
} from "lucide-react";
import { companyInfo } from "@/data/company";
import Button from "@/components/common/Button";
import logoWhite from "@/assets/logos/sealforge-white.svg";

// Clean social SVGs
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      href: `https://wa.me/919987815272?text=Hello%20SealForge%20Team%2C%20I%20have%20an%20industrial%20seal%20inquiry`,
      label: "Chat on WhatsApp"
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      href: "https://www.linkedin.com",
      label: "Follow on LinkedIn"
    },
    {
      name: "Twitter / X",
      icon: XIcon,
      href: "https://twitter.com",
      label: "Follow on X"
    },
    {
      name: "YouTube",
      icon: YouTubeIcon,
      href: "https://youtube.com",
      label: "Watch on YouTube"
    }
  ];

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products Range", href: "/products" },
    { name: "Request a Quote", href: "/#technical-rfq" },
    { name: "Contact & Location", href: "/contact" }
  ];

  return (
    <footer className="bg-[#070d1c] text-slate-200 relative overflow-hidden border-t-2 border-slate-800" id="contact">
      {/* 1. Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-65 motion-reduce:hidden z-0"
        aria-hidden="true"
      >
        <source src="/videos/sealforge-engineering.webm" type="video/webm" />
        <source src="/videos/sealforge-engineering.mp4" type="video/mp4" />
      </video>

      {/* 2. Contrast & Readability Overlay Layer (Lighter overlay so video stands out clearly) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#070d1c]/95 via-[#070d1c]/80 to-[#070d1c]/100 pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Top Gradient Laser Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 via-brand-500 to-transparent z-20" />

      {/* 3. Existing Footer Content (Z-Index above video & overlay) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Column 1: Brand, Tagline, Mission & Socials (Width: 5/12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <Link href="/" className="inline-block">
                <div className="h-10 sm:h-11 w-auto flex items-center">
                  <Image
                    src={logoWhite}
                    alt="SealForge"
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                {companyInfo.tagline}
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md font-normal">
              Specialized Indian manufacturers of high-integrity mechanical seals, water-lubricated cutlass sleeve bearings, and corrosive-service chemical pumps engineered for severe operating environments.
            </p>

            {/* Social Media Links */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block font-mono">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 hover:bg-brand-700 text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                      aria-label={s.label}
                      title={s.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Clean Page Navigation Links (Width: 3/12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Registered Office & Direct Action (Width: 4/12) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Registered Office & Works
            </h4>

            <div className="bg-[#0d162c] border border-slate-800 rounded-2xl p-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="font-bold text-white block text-xs uppercase tracking-wider">
                    Mumbai Facility
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {companyInfo.address.full}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-2.5 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                    className="text-white hover:text-amber-300 font-bold transition-colors"
                  >
                    {companyInfo.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-slate-200 hover:text-white transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <Button
                variant="primary"
                href="/#technical-rfq"
                className="w-full"
              >
                Submit Technical RFQ
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>© {new Date().getFullYear()} SealForge Engineering. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href="https://www.sealforge.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 font-mono"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>sealforge.in</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 transition-colors ml-2"
              title="Back to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Signature Architectural Accent: 70% Visible with Subtle Solid Color & Bottom Fade */}
      <div className="relative z-10 w-full overflow-hidden select-none pointer-events-none mt-2 sm:mt-4 h-[11.5vw] sm:h-[12.6vw] flex items-start justify-center">
        {/* Solid Muted Color Watermark with Smooth Bottom Fade */}
        <div className="w-full text-center font-black tracking-tight text-[16vw] sm:text-[18vw] leading-none uppercase text-white/35 -mt-1 sm:-mt-1.5 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_35%,rgba(0,0,0,0)_85%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_35%,rgba(0,0,0,0)_85%)]">
          SEALFORGE
        </div>

        {/* Seamless Bottom Edge Dissolve */}
        <div className="absolute inset-x-0 bottom-0 h-10 sm:h-16 bg-gradient-to-t from-[#070d1c] to-transparent pointer-events-none" />
      </div>
    </footer>
  );
}
