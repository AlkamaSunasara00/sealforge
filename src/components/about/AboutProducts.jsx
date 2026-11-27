import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import LINEUP_IMAGE from "@/assets/about/SealForge Industrial Pump Components.png";

const divisions = [
  {
    code: "01",
    name: "Mechanical Seals",
    spec: "EN 12756 · Up to 25 Bar · -20 °C to +200 °C",
    href: "/products#mechanical-seals",
  },
  {
    code: "02",
    name: "Industrial Pumps",
    spec: "ISO 5199 / ANSI B73.1 · Up to 600 m³/hr · 230 °C",
    href: "/products#industrial-pumps",
  },
  {
    code: "03",
    name: "Cutlass Bearings",
    spec: "25 mm – 400 mm Bore · 100% Water-Lubricated",
    href: "/products#cutlass-bearings",
  },
];

export default function AboutProducts() {
  return (
    <section
      id="about-products"
      aria-labelledby="about-products-heading"
      className="relative isolate overflow-hidden bg-brand-950 pb-14 pt-14 text-white sm:pb-18 sm:pt-20 lg:pb-20 lg:pt-24 border-y border-white/10"
    >
      {/* Clean Studio Light Glow Behind Product Lineup */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 75% 42% at 50% 54%, rgba(142, 165, 221, 0.24) 0%, rgba(59, 87, 157, 0.18) 38%, transparent 72%)",
        }}
      />

      {/* Editorial Header */}
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.18em] uppercase text-bronze-300">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
              <span>THREE SPECIALIZED DIVISIONS</span>
            </div>

            <h2
              id="about-products-heading"
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl uppercase"
            >
              Three product lines.{" "}
              <span className="block text-bronze-400">
                One engineering approach.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-steel-300 sm:text-base">
            Fluid chemistry, operating pressure, and thermal limits guide material selection across our mechanical seals, industrial pumps, and water-lubricated cutlass bearings.
          </p>
        </div>
      </Reveal>

      {/* Full 100% Width Panoramic Product Lineup */}
      <Reveal delay={80} className="relative mt-8 sm:mt-10 lg:mt-12">
        {/* Focused Light Glow Directly Behind Lineup Hardware */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[8%] inset-y-[10%] -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14)_0%,rgba(142,165,221,0.22)_38%,transparent_72%)] blur-3xl"
        />
        <div className="relative mx-auto aspect-[3/1] w-full">
          <Image
            src={LINEUP_IMAGE}
            alt="SealForge mechanical seals, industrial pumps and impellers, and cutlass bearings arranged in a single lineup"
            fill
            sizes="100vw"
            className="object-contain object-center drop-shadow-[0_24px_48px_rgba(0,0,0,0.75)]"
          />
        </div>
        {/* Subtle Horizon Floor Line */}
        <div
          aria-hidden="true"
          className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </Reveal>

      {/* Hairline-Divided 3-Division Spec Strip */}
      <Reveal delay={120} className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10">
          {divisions.map((div) => (
            <Link
              key={div.code}
              href={div.href}
              className="group flex items-center justify-between gap-4 py-4 md:px-6 first:md:pl-0 last:md:pr-0 hover:bg-white/[0.03] transition-colors"
            >
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-bronze-400">
                    {div.code}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white group-hover:text-bronze-300 transition-colors">
                    {div.name}
                  </h3>
                </div>
                <p className="text-xs font-mono text-steel-300 truncate">
                  {div.spec}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-steel-400 group-hover:text-bronze-400 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </Reveal>

      {/* Primary CTA */}
      <Reveal
        delay={160}
        className="mx-auto mt-8 flex max-w-7xl justify-center px-4 sm:mt-10 sm:px-6 lg:px-8"
      >
        <Button variant="primary" href="/products">
          Explore All Products
        </Button>
      </Reveal>
    </section>
  );
}
