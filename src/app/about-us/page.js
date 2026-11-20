import Link from "next/link";
import Button from "@/components/common/Button";
import { companyInfo } from "@/data/company";
import { ShieldCheck, MapPin, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | SealForge Engineering",
  description: "Learn about SealForge Engineering - Indian precision manufacturing of industrial mechanical seals, water-lubricated cutlass bearings, and process pumps.",
};

export default function AboutPage() {
  return (
    <div className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-900 text-xs font-mono font-bold uppercase tracking-wider">
            <span>Precision · Performance · Trust</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            About SealForge Engineering
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Specialized Indian manufacturers of high-integrity mechanical seals, water-lubricated cutlass bearings, and industrial process pumps.
          </p>
        </div>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-7 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-950">Our Mission</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              To engineer mission-critical sealing and fluid-handling equipment that eliminates downtime and prevents hazardous emissions across global industries.
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-7 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-950">Quality & Standards</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Every unit undergoes strict hydrostatic and dynamic testing, built in adherence to ISO 5199, ISO 2858, and API 682 international standards.
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-7 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-950">Mumbai Works</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Located at {companyInfo.address.full}, providing rapid engineering consultation, custom drawings, and prompt pan-India dispatch.
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900"
          >
            ← Back to Homepage
          </Link>
          <Button
            variant="primary"
            href="/contact"
          >
            Contact Engineering Team
          </Button>
        </div>
      </div>
    </div>
  );
}

