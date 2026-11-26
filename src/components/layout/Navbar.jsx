"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { companyInfo } from "@/data/company";
import Button from "@/components/common/Button";
import logoImg from "@/assets/logos/sealforge.svg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const updateScroll = () => {
      const y = window.scrollY;
      // Hysteresis prevents rapid hide/show toggling near a single threshold
      setScrolled((prev) => {
        if (!prev && y > 60) return true;
        if (prev && y < 12) return false;
        return prev;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Constant-height layout spacer prevents page jump / scroll-loop jitter */}
      <div className="h-[84px] sm:h-[88px] w-full shrink-0" aria-hidden="true" />

      <header
        className={`fixed top-0 inset-x-0 z-50 w-full transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "-translate-y-7" : "translate-y-0"
        }`}
      >
        {/* Top Info Strip (Fixed 28px / h-7) */}
        <div
          className={`h-7 bg-[#091124] text-white border-b border-slate-800 transition-opacity duration-250 ease-out ${
            scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between text-[11px] sm:text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </span>
              <span className="text-slate-600 hidden md:inline">|</span>
              <span className="text-amber-300 font-semibold tracking-wide hidden md:inline text-[11px] uppercase">
                Precision · Performance · Trust
              </span>
            </div>

            <div className="flex items-center gap-5 font-mono">
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 text-white hover:text-amber-300 transition-colors font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{companyInfo.phoneDisplay}</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-slate-200 hover:text-white transition-colors hidden sm:inline"
              >
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Compact Main Navbar (Fixed 56px mobile / 60px desktop) */}
        <nav
          className={`w-full h-14 sm:h-[60px] bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-300 ${
            scrolled ? "shadow-md" : "shadow-none"
          }`}
        >
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group transition-opacity duration-200 hover:opacity-90">
              <Image
                src={logoImg}
                alt="SealForge"
                priority
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className="px-3.5 py-2 text-sm font-bold text-slate-900 hover:text-brand-700 transition-colors rounded-lg"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-brand-900 hover:bg-slate-100 transition-colors rounded-lg"
              >
                Products
              </Link>

              <Link
                href="/about"
                className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-brand-900 hover:bg-slate-100 transition-colors rounded-lg"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-brand-900 hover:bg-slate-100 transition-colors rounded-lg"
              >
                Contact
              </Link>
            </div>

            {/* Primary CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="primary" href="/contact">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/contact"
                className="px-3.5 py-1.5 text-xs font-bold text-white bg-brand-700 rounded-lg shadow-sm"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 shadow-xl">
              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-bold text-slate-900 hover:bg-slate-50"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-bold text-slate-800 hover:text-brand-700 hover:bg-slate-50"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-bold text-slate-800 hover:text-brand-700 hover:bg-slate-50"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-bold text-slate-800 hover:text-brand-700 hover:bg-slate-50"
                >
                  Contact
                </Link>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 rounded-xl shadow"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl font-mono"
                >
                  <Phone className="w-4 h-4 text-brand-700" />
                  <span>{companyInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
