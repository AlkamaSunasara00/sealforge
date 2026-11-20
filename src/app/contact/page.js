import Link from "next/link";
import Button from "@/components/common/Button";
import { companyInfo } from "@/data/company";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Us | SealForge Engineering",
  description: "Get in touch with SealForge Engineering Mumbai. Technical inquiries, quotations, and office location in Kurla (West), Mumbai.",
};

export default function ContactPage() {
  return (
    <div className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-900 text-xs font-mono font-bold uppercase tracking-wider">
            <span>Mumbai Headquarters</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Contact SealForge
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Reach out directly to our application engineering team for product inquiries, custom shaft sizing, or formal commercial pricing.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Office Address */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-7 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">Registered Office & Works</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {companyInfo.address.full}
            </p>
          </div>

          {/* Phone */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-7 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">Direct Hotline</h3>
            <p className="text-sm text-slate-700 leading-relaxed font-mono font-semibold">
              <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className="hover:text-brand-700">
                {companyInfo.phoneDisplay}
              </a>
            </p>
            <span className="text-xs text-slate-500 block">Mon–Sat: 9:00 AM – 7:00 PM IST</span>
          </div>

          {/* Email */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-7 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">Commercial & Sales Email</h3>
            <p className="text-sm text-slate-700 leading-relaxed font-mono font-semibold">
              <a href={`mailto:${companyInfo.email}`} className="hover:text-brand-700">
                {companyInfo.email}
              </a>
            </p>
            <span className="text-xs text-slate-500 block">Typical response within 4 hours</span>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            href="/#technical-rfq"
          >
            Submit Application Data Sheet (RFQ)
          </Button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-brand-900"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

