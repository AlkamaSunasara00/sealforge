import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Box,
  Building2,
  Check,
  ChevronsUp,
  ClipboardCheck,
  Crosshair,
  Droplets,
  Gauge,
  Layers,
  Ruler,
  Thermometer,
  ArrowUpRight,
  ChevronRight,
  Image as ImageIcon,
  Mail,
  Maximize2,
} from "lucide-react";
import Button from "@/components/common/Button";
import { companyInfo } from "@/data/company";
import { materialGuide } from "@/data/products";
import CutlassDimensionsDiagram from "./CutlassDimensionsDiagram";
import ProductCard from "./ProductCard";
import "./ProductDetailView.css";

const specLabels = {
  pumpType: "Pump type",
  impellerType: "Impeller type",
  shaftDiameter: "Shaft diameter",
  maxPressure: "Maximum pressure",
  temperature: "Operating temperature",
  speed: "Speed",
  standard: "Design standard",
  pumpModels: "Compatible pump series",
  sealConstructions: "Seal constructions",
  commonCodes: "Common OEM codes",
  capacity: "Flow capacity",
  head: "Differential head",
  maxTemp: "Maximum temperature",
  flange: "Flange rating",
  lubrication: "Lubrication medium",
  shellTypes: "Shell configurations",
  lining: "Elastomer lining",
};

const specIcons = {
  shaftDiameter: Ruler,
  maxPressure: Gauge,
  temperature: Thermometer,
  maxTemp: Thermometer,
  capacity: Droplets,
  head: ChevronsUp,
  pumpModels: Box,
  sealConstructions: Layers,
  standard: ClipboardCheck,
  lubrication: Droplets,
  shellTypes: Layers,
};

const materialLabels = {
  rotaryFace: "Rotary face",
  stationaryFace: "Stationary face",
  elastomers: "Secondary elastomers",
  springHardware: "Spring and metal hardware",
  impellerType: "Impeller geometry",
  sealing: "Shaft sealing",
  moc: "Wetted metallurgy",
  options: "Engineering options",
};

const quoteRequirements = {
  "mechanical-seals": [
    "Pump make, model and shaft diameter",
    "Fluid, operating pressure and temperature",
    "Existing seal code or drawing, if available",
  ],
  "industrial-pumps": [
    "Required flow and differential head",
    "Fluid, operating temperature and solids content",
    "Preferred construction material, if known",
  ],
  "cutlass-bearings": [
    "Shaft diameter, housing bore and bearing length",
    "Shell style and preferred material, if known",
    "Equipment and lubrication medium",
  ],
};

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const sectionOffset = "scroll-mt-32";
const heading = "text-[1.7rem] font-extrabold leading-tight tracking-tight text-brand-950 sm:text-4xl";

function DetailHeading({ id, icon: Icon, children }) {
  return (
    <div className="sf-product-section-heading flex items-center gap-3 sm:gap-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-900 text-bronze-300 sm:size-11">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h2 id={id} className={heading}>{children}</h2>
    </div>
  );
}
const inlineLink =
  "inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-950 hover:underline underline-offset-4";

function getHeroSpecs(product) {
  const specs = product.specs ?? {};
  const keys = {
    "mechanical-seals": product.referenceTable?.length
      ? ["pumpModels", "sealConstructions", "standard"]
      : ["shaftDiameter", "maxPressure", "temperature"],
    "industrial-pumps": ["capacity", "head", "maxTemp"],
    "cutlass-bearings": ["shaftDiameter", "lubrication", "shellTypes"],
  };

  return (keys[product.category] ?? Object.keys(specs))
    .filter((key) => specs[key])
    .slice(0, 3)
    .map((key) => [key, specs[key]]);
}

function SpecRows({ entries, labels }) {
  return (
    <dl className="divide-y divide-steel-200 overflow-hidden rounded-lg border border-steel-200 bg-white">
      {entries.map(([key, value]) => (
        <div key={key} className="grid gap-1 px-4 py-3.5 even:bg-brand-50/50 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6 sm:px-5">
          <dt className="text-sm text-steel-600">{labels[key] ?? key}</dt>
          <dd className="text-sm font-semibold leading-relaxed text-brand-950">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProductImage({ product }) {
  return (
    <div className="sf-product-stage relative isolate min-w-0 overflow-hidden">
      <div aria-hidden="true" className="sf-product-stage-grid pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-3 -z-10 rounded-sm border border-brand-200/70 sm:inset-5">
        <div className="absolute -left-px -top-px size-5 border-l-2 border-t-2 border-bronze-600/70" />
        <div className="absolute -bottom-px -right-px size-5 border-b-2 border-r-2 border-bronze-600/70" />
        <div className="absolute inset-x-[14%] top-1/2 h-px bg-brand-200/75" />
        <div className="absolute inset-y-[11%] left-1/2 w-px bg-brand-200/75" />
        <div className="absolute inset-y-[11%] inset-x-[18%] rounded-[50%] border border-brand-200/65" />
      </div>
      <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
        {product.image ? (
          <>
            <Image
              src={product.image}
              alt={product.name}
              fill
              preload
              sizes="(min-width: 1280px) 610px, (min-width: 1024px) 50vw, 100vw"
              className="sf-product-stage-image object-contain p-6 pb-12 sm:p-9 sm:pb-14"
            />
            <a
              href={typeof product.image === "string" ? product.image : product.image.src}
              target="_blank"
              rel="noopener"
              aria-label="View full product image (opens in a new tab)"
              className="absolute bottom-4 right-4 z-10 inline-flex min-h-11 items-center gap-2 rounded-md border border-brand-200 bg-white/95 px-3 text-xs font-bold text-brand-900 shadow-sm transition-colors hover:border-brand-400 hover:bg-white sm:bottom-6 sm:right-6"
            >
              <Maximize2 className="size-3.5" aria-hidden="true" />
              Full image
            </a>
          </>
        ) : (
          <div className="absolute inset-0 grid place-content-center justify-items-center gap-2 text-sm text-steel-600">
            <ImageIcon className="size-9" aria-hidden="true" />
            Product image unavailable
          </div>
        )}
      </div>
    </div>
  );
}

function BearingConstruction({ product }) {
  return (
    <div className="space-y-9">
      {product.shells?.length > 0 && (
        <div>
          <h3 className="mb-3 text-lg font-bold text-brand-950">Outer shell materials</h3>
          <dl className="grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2">
            {product.shells.map((shell) => (
              <div key={shell.type} className="bg-white p-4 sm:p-5">
                <dt className="font-bold text-brand-950">{shell.type}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-steel-600">
                  <p className="mb-1 font-semibold text-brand-800">{shell.materials}</p>
                  <p>{shell.benefits}</p>
                </dd>
              </div>
            ))}
          </dl>
          {product.materialSelectionFactors?.length > 0 && (
            <p className="mt-3 text-sm leading-relaxed text-steel-600">
              <strong className="text-brand-950">Selection factors</strong>{" "}
              {product.materialSelectionFactors.join(" · ")}
            </p>
          )}
        </div>
      )}

      {product.shellTypesCards?.length > 0 && (
        <div>
          <h3 className="mb-3 text-lg font-bold text-brand-950">Shell configurations</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {product.shellTypesCards.map((shell) => (
              <article key={shell.name} className="border border-steel-200 bg-white">
                <BearingImage image={shell.image} alt={shell.name} />
                <div className="p-4 sm:p-5">
                  <h4 className="font-bold text-brand-950">{shell.name}</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-steel-600 marker:text-bronze-600">
                    {shell.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-steel-600">
            Ask about custom dimensions, flange arrangements and shell materials. You can include a drawing with your enquiry.
          </p>
        </div>
      )}

      {product.profiles?.length > 0 && (
        <div>
          <h3 className="mb-3 text-lg font-bold text-brand-950">Lubrication profiles</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {product.profiles.map((profile) => (
              <article key={profile.name} className="border border-steel-200 bg-white">
                <BearingImage image={profile.image} alt={profile.name} />
                <div className="space-y-2 p-4 text-sm leading-relaxed text-steel-600 sm:p-5">
                  <h4 className="text-base font-bold text-brand-950">{profile.name}</h4>
                  <p>{profile.description}</p>
                  <p>{profile.function}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BearingImage({ image, alt }) {
  if (!image) return null;

  return (
    <div className="relative aspect-[16/9] border-b border-steel-200 bg-brand-50">
      <Image src={image} alt={alt} fill sizes="(min-width: 1280px) 440px, (min-width: 640px) 50vw, 100vw" className="object-contain p-3" />
    </div>
  );
}

function ReferenceTable({ label, columns, rows }) {
  return (
    <div role="region" aria-label={label} tabIndex={0} className="overflow-x-auto rounded-lg border border-steel-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
      <table className="w-full min-w-[30rem] text-left text-sm">
        <caption className="sr-only">{label}</caption>
        <thead className="bg-brand-900 text-white">
          <tr>
            {columns.map(([key, title]) => (
              <th key={key} scope="col" className="px-4 py-3 font-semibold">{title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-steel-200 text-steel-700">
          {rows.map((row) => (
            <tr key={row[columns[0][0]]} className="even:bg-steel-50">
              <th scope="row" className="whitespace-nowrap px-4 py-3 font-mono font-bold text-brand-950">{row[columns[0][0]]}</th>
              {columns.slice(1).map(([key]) => <td key={key} className="px-4 py-3 leading-relaxed">{row[key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProductDetailView({ product, relatedProducts }) {
  const specEntries = Object.entries(product.specs ?? {});
  const materialEntries = Object.entries(product.materials ?? product.construction ?? {});
  const heroSpecs = getHeroSpecs(product);
  const hasConstruction = !!(
    materialEntries.length || product.shells?.length || product.shellTypesCards?.length || product.profiles?.length
  );
  const hasDimensions = !!product.dimensionsTable?.length;
  const hasOemCodes = !!product.referenceTable?.length;
  const hasApplications = !!product.applications?.length;
  const referenceTitle = hasDimensions ? "Dimensions" : "OEM reference";
  const requirements = quoteRequirements[product.category] ?? [];
  const emailSubject = encodeURIComponent(`Quote request — ${product.name}`);
  const emailBody = encodeURIComponent(
    `Hello SealForge,\n\nPlease quote ${product.name}.\n\n${requirements.map((item) => `${item}: `).join("\n")}\nQuantity: \n\nThank you.`
  );
  const quoteEmail = `mailto:${companyInfo.email}?subject=${emailSubject}&body=${emailBody}`;
  const sections = [
    ["specifications", "Specifications"],
    hasConstruction && ["construction", "Construction"],
    hasApplications && ["applications", "Applications"],
    (hasDimensions || hasOemCodes) && ["reference", referenceTitle],
    ["quote", "Request a quote"],
  ].filter(Boolean);

  return (
    <div className="sf-product-page w-full bg-white text-steel-900">
      <div className="sf-product-hero border-b border-brand-100 pb-6 sm:pb-8">
        <div className={container}>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-brand-900/12 py-4 text-xs text-brand-700">
            <Link href="/" className="hover:text-brand-950 hover:underline">Home</Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <Link href="/products" className="hover:text-brand-950 hover:underline">Products</Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <Link href={`/products#${product.category}`} className="hover:text-brand-950 hover:underline">{product.categoryLabel}</Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <span aria-current="page" className="font-semibold text-brand-950">{product.name}</span>
          </nav>

          <div className="grid items-center gap-7 py-7 sm:gap-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)] lg:gap-12 lg:py-11">
            <div className="min-w-0">
              <p className="sf-product-enter w-fit border-l-2 border-bronze-600 pl-3 font-mono text-xs font-bold uppercase tracking-widest text-bronze-800">{product.subLabel}</p>
              <h1 className="sf-product-enter mt-4 text-[clamp(2.2rem,4.45vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-brand-950 text-balance [--enter-delay:60ms]">{product.name}</h1>
              <p className="sf-product-enter mt-4 max-w-lg text-base leading-relaxed text-steel-700 [--enter-delay:120ms] sm:text-lg">{product.tagline}</p>
              <div className="sf-product-enter mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 [--enter-delay:170ms] sm:mt-8">
                <Button href="#quote" variant="primary">Request a quote</Button>
                <a href="#specifications" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-brand-800 hover:text-brand-950 hover:underline">
                  View specs <ArrowDown className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <ProductImage product={product} />
          </div>
        </div>

        {heroSpecs.length > 0 && (
          <div className={container}>
            <dl className="sf-product-metrics grid overflow-hidden rounded-lg border border-brand-800 divide-y divide-white/15 sm:auto-cols-fr sm:grid-flow-col sm:divide-x sm:divide-y-0">
              {heroSpecs.map(([key, value]) => {
                const Icon = specIcons[key] ?? Crosshair;
                return (
                  <div key={key} className="flex min-w-0 items-start gap-3 px-4 py-3.5 sm:p-4 lg:gap-4 lg:px-5">
                    <span className="sf-product-metric-icon grid size-9 shrink-0 place-items-center rounded-md text-bronze-300 sm:size-10">
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <dt className="font-mono text-xs font-semibold text-brand-200">{specLabels[key] ?? key}</dt>
                      <dd className="mt-1 text-sm font-bold leading-snug text-white sm:text-base lg:text-lg">{value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        )}
      </div>

      <div className="sticky top-14 z-40 border-b border-steel-200 bg-white/95 shadow-[0_7px_16px_-16px_#101a3566] backdrop-blur-md sm:top-[60px]">
        <nav aria-label="Product details" className={`${container} flex gap-3 overflow-x-auto sm:gap-5`}>
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="sf-product-nav-link inline-flex min-h-12 shrink-0 items-center rounded-md px-2 text-sm font-bold text-brand-800 hover:bg-brand-50 hover:text-brand-950 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-600">
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className={`${container} grid items-start gap-8 py-9 sm:py-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-10 xl:gap-14`}>
        <div className="min-w-0 space-y-11 sm:space-y-14">
          <section id="specifications" aria-labelledby="specifications-title" className={sectionOffset}>
            <DetailHeading id="specifications-title" icon={Gauge}>{hasDimensions || hasOemCodes ? "Technical specifications" : "Operating specifications"}</DetailHeading>
            {product.overview?.length > 0 && (
              <div className="mt-4 max-w-prose space-y-3 text-sm leading-relaxed text-steel-700 sm:text-base">
                {product.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            )}
            {product.badge && <p className="mt-4 w-fit rounded border border-brand-100 bg-brand-50 px-2.5 py-1.5 font-mono text-xs font-semibold text-brand-800">{product.badge}</p>}
            <div className="mt-5"><SpecRows entries={specEntries} labels={specLabels} /></div>
          </section>

          {hasConstruction && (
            <section id="construction" aria-labelledby="construction-title" className={sectionOffset}>
              <DetailHeading id="construction-title" icon={Layers}>Materials and construction</DetailHeading>
              <div className="mt-5">
                {materialEntries.length > 0 && <SpecRows entries={materialEntries} labels={materialLabels} />}
                <BearingConstruction product={product} />
              </div>
            </section>
          )}

          {product.features?.length > 0 && (
            <section aria-labelledby="features-title">
              <DetailHeading id="features-title" icon={Crosshair}>Design features</DetailHeading>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3 rounded-lg border border-brand-100 bg-brand-50/80 p-4 text-sm font-medium leading-relaxed text-brand-950">
                    <Check className="mt-0.5 size-4 shrink-0 text-bronze-800" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {hasApplications && (
            <section id="applications" aria-labelledby="applications-title" className={sectionOffset}>
              <DetailHeading id="applications-title" icon={Building2}>Typical applications</DetailHeading>
              <ul className="mt-5 grid gap-px overflow-hidden rounded-lg border border-steel-200 bg-steel-200 text-sm leading-relaxed text-steel-700 sm:grid-cols-2">
                {product.applications.map((application) => (
                  <li key={application} className="flex items-baseline gap-3 bg-white px-4 py-3.5">
                    <span className="size-1.5 shrink-0 rotate-45 bg-bronze-600" aria-hidden="true" />
                    {application}
                  </li>
                ))}
              </ul>
              {product.industries?.length > 0 && (
                <ul aria-label="Industries" className="mt-4 flex flex-wrap gap-2">
                  {product.industries.map((industry) => (
                    <li key={industry} className="border border-brand-100 bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-800">{industry}</li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {(hasDimensions || hasOemCodes) && (
            <section id="reference" aria-labelledby="reference-title" className={`${sectionOffset} space-y-5`}>
              <DetailHeading id="reference-title" icon={hasDimensions ? Ruler : ClipboardCheck}>{hasDimensions ? "Reference dimensions" : "OEM seal code reference"}</DetailHeading>
              {hasDimensions && (
                <>
                  <CutlassDimensionsDiagram />
                  <ReferenceTable
                    label="Standard bearing dimensions in millimetres"
                    columns={[["ds", "Shaft diameter (Ds)"], ["od", "Outside diameter (OD)"], ["l", "Length (L)"], ["t", "Shell thickness (T)"]]}
                    rows={product.dimensionsTable}
                  />
                  <p className="text-sm text-steel-600">Larger and custom sizes are available on request. All table values are in millimetres.</p>
                </>
              )}
              {hasOemCodes && (
                <ReferenceTable
                  label="OEM seal codes and compatible pump models"
                  columns={[["code", "Code"], ["construction", "Construction"], ["combination", "Faces / Elastomer"], ["models", "Pump models"]]}
                  rows={product.referenceTable}
                />
              )}
            </section>
          )}
        </div>

        <aside aria-labelledby="resources-title" className="overflow-hidden rounded-lg border border-brand-100 bg-brand-50 lg:sticky lg:top-32">
          <div className="flex items-center gap-2 border-b border-brand-100 bg-white px-4 py-3.5">
            <ClipboardCheck className="size-[18px] shrink-0 text-bronze-800" aria-hidden="true" />
            <h2 id="resources-title" className="text-sm font-extrabold text-brand-950">Selection resources</h2>
          </div>
          <div className="px-4 pb-4">
            <Link href="/products#materials" className={`${inlineLink} flex min-h-11 w-full justify-between`}>
              Material selection guide <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
            <details className="group border-t border-brand-200">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 text-sm font-bold text-brand-800 [&::-webkit-details-marker]:hidden">
                Compatibility checks
                <ChevronRight className="size-4 shrink-0 motion-safe:transition-transform group-open:rotate-90" aria-hidden="true" />
              </summary>
              <ul className="list-disc space-y-2 pb-1 pl-4 text-sm leading-relaxed text-steel-700">
                {materialGuide.selectionRules.map((rule) => <li key={rule}>{rule}</li>)}
              </ul>
            </details>
          </div>
        </aside>
      </div>

      <section id="quote" aria-labelledby="quote-title" className={`${sectionOffset} sf-product-quote border-y border-brand-800 text-white`}>
        <div className={`${container} grid gap-7 py-9 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,.8fr)] lg:gap-14`}>
          <div>
            <h2 id="quote-title" className="text-2xl font-extrabold tracking-tight sm:text-4xl">Request a technical quote</h2>
            <p className="mt-3 text-sm text-brand-100 sm:text-base">{product.name}</p>
            <Button href={quoteEmail} variant="white" icon={<Mail className="size-4" />} className="mt-5">Email SealForge</Button>
            <p className="mt-3 break-all text-sm text-brand-200">{companyInfo.email}</p>
          </div>
          {requirements.length > 0 && (
            <div className="rounded-lg border border-white/15 bg-white/[.06] p-4 sm:p-6">
              <h3 className="text-base font-bold">Include with your enquiry</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-100 marker:text-bronze-400">
                {requirements.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section aria-labelledby="related-title" className="bg-steel-50">
          <div className={`${container} py-10 sm:py-14`}>
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="related-title" className={heading}>Related products</h2>
              <Link href="/products" className={inlineLink}>Browse all products <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => <ProductCard key={related.slug} product={related} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
