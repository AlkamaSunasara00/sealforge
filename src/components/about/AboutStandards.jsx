import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import Reveal from "@/components/about/Reveal";
import { engineeringStandards } from "@/data/about";

import sealDimensionsImg from "@/assets/about/standards/seal-dimensions.webp";
import flangeRatingImg from "@/assets/about/standards/flange-rating.webp";
import endSuctionPumpImg from "@/assets/about/standards/end-suction-pump.webp";
import processPumpImg from "@/assets/about/standards/process-pump.webp";

const standardVisuals = [
  { code: /12756|24960/, image: sealDimensionsImg },
  { code: /B16\s*\.?\s*5/i, image: flangeRatingImg },
  { code: /B73\s*\.?\s*1/i, image: endSuctionPumpImg },
  { code: /5199|2858/, image: processPumpImg },
];

const materialIntegrity = [
  {
    category: "Primary Sealing Faces",
    items:
      "Sintered Silicon Carbide (SSiC), Tungsten Carbide (TC), Resin & Antimony Carbon Graphite, 99.5% Alumina Ceramic.",
  },
  {
    category: "Secondary Elastomers & Bellows",
    items:
      "Genuine NBR, EPDM, FKM (Viton), Perfluoroelastomer (FFKM), and pure virgin/glass-filled PTFE.",
  },
  {
    category: "Pump Metallurgy & Polymers",
    items:
      "Carbon Steel, CF8M (316SS), Hastelloy C-276, Solid PP / GRPP / UHMWPE, and thick PVDF / FEP / PFA wetted liners.",
  },
  {
    category: "Cutlass Bearing Alloys & Shells",
    items:
      "Naval Brass, Marine Phosphor Bronze, Stainless Steel, and Non-Metallic Phenolic Resin Composites.",
  },
];

const qualityChecks = [
  "Face Flatness within 2 Helium Light Bands (0.0006 mm)",
  "Hydrostatic Bench Pressure Testing",
  "Material Test Certificates (MTC)",
];

const standardEntries = engineeringStandards
  .map((standard) => {
    const visualIndex = standardVisuals.findIndex(({ code }) =>
      code.test(standard.code),
    );

    return {
      standard,
      image: standardVisuals[visualIndex]?.image,
      order: visualIndex < 0 ? standardVisuals.length : visualIndex,
    };
  })
  .sort((a, b) => a.order - b.order);

function StandardCard({ standard, image, index }) {
  return (
    <article className="group grid grid-cols-12 items-stretch overflow-hidden rounded-xl border border-slate-200/90 bg-white transition-colors duration-200 hover:border-[#253664]/45">
      {/* Left: Standard Code, Title & Description */}
      <div className="col-span-7 flex flex-col justify-center p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-bold text-[#b6812a]">
            0{index + 1}
          </span>
          <span className="text-slate-300">/</span>
          <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#253664]">
            {standard.code}
          </p>
        </div>

        <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-brand-950 sm:text-lg">
          {standard.title}
        </h3>

        <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
          {standard.description}
        </p>
      </div>

      {/* Right: Studio Hardware Visual */}
      {image && (
        <div
          aria-hidden="true"
          className="col-span-5 flex items-center justify-center border-l border-slate-200/80 bg-gradient-to-br from-slate-50 to-[#eaf0f8] p-3 sm:p-4"
        >
          <div className="relative h-28 w-full sm:h-36 lg:h-40">
            <Image
              src={image}
              alt={standard.title}
              fill
              sizes="(max-width: 1024px) 40vw, 240px"
              className="object-contain object-center drop-shadow-[0_12px_18px_rgba(10,17,34,0.16)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-105"
            />
          </div>
        </div>
      )}
    </article>
  );
}

export default function AboutStandards() {
  return (
    <section
      aria-labelledby="about-standards-heading"
      className="border-b border-slate-200 bg-slate-50/70 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl space-y-2.5">
            <p className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#b6812a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b6812a]" />
              <span>Rigorous Engineering Standards &amp; Quality Integrity</span>
            </p>

            <h2
              id="about-standards-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-brand-950 sm:text-4xl lg:text-[2.75rem]"
            >
              Engineering standards aligned with global industry.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            SealForge products are designed, machined, and quality-tested in
            accordance with recognized international mechanical and hydraulic
            standards for direct interchangeability.
          </p>
        </Reveal>

        {/* Clean 2x2 Side-by-Side Standards Grid */}
        <Reveal className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-2 lg:gap-5">
          {standardEntries.map(({ standard, image }, index) => (
            <StandardCard
              key={standard.code}
              standard={standard}
              image={image}
              index={index}
            />
          ))}
        </Reveal>

        {/* Material Science & QA Traceability */}
        <Reveal className="mt-8 rounded-xl border border-slate-200/90 bg-white p-5 sm:mt-10 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1.5">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#b6812a]">
                Material Science &amp; Traceability
              </p>

              <h3 className="text-xl font-bold leading-tight tracking-tight text-brand-950 sm:text-2xl">
                Uncompromising Material Integrity Across Every Component
              </h3>
            </div>

            <span className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
              <ShieldCheck
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-emerald-600"
              />
              100% Tested &amp; Verified
            </span>
          </div>

          <dl className="mt-6 grid gap-x-8 md:grid-cols-2">
            {materialIntegrity.map(({ category, items }) => (
              <div key={category} className="border-t border-slate-200 py-3.5">
                <dt className="text-sm font-bold text-brand-950">{category}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-600">
                  {items}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-2 grid list-none divide-y divide-white/10 rounded-lg bg-[#070d1c] p-4 text-xs leading-relaxed text-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {qualityChecks.map((check) => (
              <li
                key={check}
                className="flex items-start gap-2.5 py-2 md:px-4 md:py-0 first:md:pl-0 last:md:pr-0"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-bronze-400"
                />
                <span>{check}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
