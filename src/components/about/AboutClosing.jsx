import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import MagicRings from "@/components/about/MagicRings";
import { companyInfo } from "@/data/company";
import { Phone, Mail, MapPin } from "lucide-react";

export default function AboutClosing() {
  return (
    <section className="bg-steel-50 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-brand-800/70 bg-brand-950 shadow-2xl shadow-brand-950/15">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        >
          <MagicRings
            color="#d49938"
            colorTwo="#5b79c3"
            ringCount={6}
            motion="breathe"
            speed={0.35}
            lineThickness={1.6}
            glow={0.8}
            opacity={0.72}
            followMouse
            mouseInfluence={0.08}
            hoverScale={1.05}
            hoverIntensity={0.7}
            parallax={0.025}
            clickBurst={false}
            className="h-full w-full"
          />
        </div>

        <div className="relative mx-auto flex min-h-[440px] max-w-5xl items-center justify-center px-6 py-12 text-center sm:min-h-[480px] sm:px-8 sm:py-16 lg:min-h-[520px]">
          <Reveal className="flex w-full flex-col items-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
              <span>VISIT OUR MUMBAI ENGINEERING FACILITY</span>
            </div>
            <h2 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase">
              Contact Our Mumbai Engineering Office.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-steel-200 sm:text-lg font-normal">
              Located in Mumbai, SealForge serves process plants, pump OEMs, and marine operators across India and global export markets. Tell us your operating parameters and we will recommend the right solution.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button variant="white" href="/contact">
                Request an Engineering Consultation
              </Button>
              <Button variant="primary" href="/products">
                Explore Product Range
              </Button>
            </div>

            {/* Direct Contact Bar */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-steel-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>Kurla (West), Mumbai 400 070</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>Direct: {companyInfo.phoneDisplay}</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Email: {companyInfo.email}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
