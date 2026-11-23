"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* High-Contrast Top Bar */}
      <div className="bg-[#091124] text-white text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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

          <div className="flex items-center gap-5 text-xs font-mono">
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

      {/* Main Spacious Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200 py-3.5"
            : "bg-white border-b border-slate-200 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo with Ample Breathing Room */}
          <Link href="/" className="flex items-center group transition-transform duration-200 hover:opacity-90">
            <div className="h-10 sm:h-12 w-auto flex items-center">
              <Image
                src={logoImg}
                alt="SealForge"
                priority
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
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
              href="/#products"
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
            <Button
              variant="primary"
              href="/#technical-rfq"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/#technical-rfq"
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
                href="/#products"
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
                href="/#technical-rfq"
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
  );
}
