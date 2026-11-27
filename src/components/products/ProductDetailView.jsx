import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  ChevronRight,
  Image as ImageIcon,
  Mail,
  Maximize2,
} from "lucide-react";
import Button from "@/components/common/Button";
import { cataloguesData, companyInfo } from "@/data/company";
import { materialGuide } from "@/data/products";
import CutlassDimensionsDiagram from "./CutlassDimensionsDiagram";
import ProductCard from "./ProductCard";

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
const heading = "text-2xl font-extrabold tracking-tight text-brand-950 sm:text-4xl";
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
    <dl className="divide-y divide-steel-200 border-y border-steel-200">
      {entries.map(([key, value]) => (
        <div key={key} className="grid gap-1 px-3 py-3.5 even:bg-steel-50 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6 sm:px-4">
          <dt className="text-sm text-steel-600">{labels[key] ?? key}</dt>
          <dd className="text-sm font-semibold leading-relaxed text-brand-950">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProductImage({ product }) {
  return (
    <div className="relative isolate min-w-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-brand-100 [clip-path:polygon(0_0,96%_0,100%_7%,100%_100%,4%_100%,0_93%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-px -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_center,#fff_18%,#f3f6fd_63%,#e5ecfb_100%)] [clip-path:polygon(0_0,96%_0,100%_7%,100%_100%,4%_100%,0_93%)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#25366412_1px,transparent_1px),linear-gradient(to_bottom,#25366412_1px,transparent_1px)] bg-size-[28px_28px] [mask-image:radial-gradient(ellipse,#0000_22%,#000_94%)]" />
        <div className="absolute inset-[10%] rounded-full border border-dashed border-brand-300/60" />
        <div className="absolute inset-x-[12%] top-1/2 h-px bg-brand-300/35" />
        <div className="absolute inset-y-[9%] left-1/2 w-px bg-brand-300/35" />
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
              className="object-contain p-6 pb-12 drop-shadow-[0_20px_22px_rgba(16,26,53,0.22)] sm:p-9 sm:pb-14"
            />
            <a
              href={typeof product.image === "string" ? product.image : product.image.src}
              target="_blank"
              rel="noopener"
              aria-label="View full product image (opens in a new tab)"
              className="absolute bottom-3 right-3 inline-flex min-h-11 items-center gap-2 border border-brand-200 bg-white px-3 text-xs font-bold text-brand-900 transition-colors hover:bg-brand-50 sm:bottom-4 sm:right-4"
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
    <div role="region" aria-label={label} tabIndex={0} className="overflow-x-auto border border-steel-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
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
  const catalogue = cataloguesData.find(({ id }) => id === product.category);
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
    <div className="w-full bg-white text-steel-900">
      <div className="relative isolate bg-brand-950 text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#253664,transparent_65%)]" />
        <div className={container}>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-white/15 py-4 text-xs text-brand-200">
            <Link href="/" className="hover:text-white hover:underline">Home</Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <Link href="/products" className="hover:text-white hover:underline">Products</Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <Link href={`/products#${product.category}`} className="hover:text-white hover:underline">{product.categoryLabel}</Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <span aria-current="page" className="text-white">{product.name}</span>
          </nav>

          <div className="grid items-center gap-7 py-8 sm:gap-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:py-14">
            <div className="min-w-0">
              <p className="w-fit border-l-2 border-bronze-400 pl-3 font-mono text-xs font-bold uppercase tracking-widest text-bronze-300">{product.subLabel}</p>
              <h1 className="mt-4 text-[clamp(2.25rem,5.2vw,4.7rem)] font-extrabold leading-[1.04] tracking-tight text-balance">{product.name}</h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-100 sm:text-lg">{product.tagline}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 sm:mt-8">
                <Button href="#quote" variant="white">Request a quote</Button>
                <a href="#specifications" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-brand-100 hover:text-white hover:underline">
                  View specs <ArrowDown className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <ProductImage product={product} />
          </div>
        </div>

        {heroSpecs.length > 0 && (
          <div className="border-t border-white/15 bg-white/[.04]">
            <dl className={`${container} grid divide-y divide-white/15 sm:auto-cols-fr sm:grid-flow-col sm:divide-x sm:divide-y-0`}>
              {heroSpecs.map(([key, value]) => (
                <div key={key} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-baseline gap-3 py-3 sm:block sm:px-4 sm:py-5 sm:first:pl-0 lg:px-6">
                  <dt className="font-mono text-xs font-semibold text-brand-200">{specLabels[key] ?? key}</dt>
                  <dd className="text-sm font-bold leading-snug text-white sm:mt-1.5 sm:text-lg">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>

      <div className="sticky top-14 z-40 border-b border-steel-200 bg-white/95 backdrop-blur sm:top-[60px]">
        <nav aria-label="Product details" className={`${container} flex gap-5 overflow-x-auto sm:gap-7`}>
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="inline-flex min-h-12 shrink-0 items-center border-b-2 border-transparent px-0.5 text-sm font-bold text-brand-800 hover:border-bronze-500 hover:text-brand-950 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-600">
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className={`${container} grid items-start gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12`}>
        <div className="min-w-0 space-y-12 sm:space-y-16">
          <section id="specifications" aria-labelledby="specifications-title" className={sectionOffset}>
            <h2 id="specifications-title" className={heading}>{hasDimensions || hasOemCodes ? "Technical specifications" : "Operating specifications"}</h2>
            {product.overview?.length > 0 && (
              <div className="mt-4 max-w-prose space-y-3 text-sm leading-relaxed text-steel-700 sm:text-base">
                {product.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            )}
            {product.badge && <p className="mt-3 text-sm font-semibold text-brand-700">{product.badge}</p>}
            <div className="mt-5"><SpecRows entries={specEntries} labels={specLabels} /></div>
          </section>

          {hasConstruction && (
            <section id="construction" aria-labelledby="construction-title" className={sectionOffset}>
              <h2 id="construction-title" className={heading}>Materials and construction</h2>
              <div className="mt-5">
                {materialEntries.length > 0 && <SpecRows entries={materialEntries} labels={materialLabels} />}
                <BearingConstruction product={product} />
              </div>
            </section>
          )}

          {product.features?.length > 0 && (
            <section aria-labelledby="features-title">
              <h2 id="features-title" className={heading}>Design features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="border-l-2 border-bronze-500 bg-brand-50 px-4 py-4 text-sm font-medium leading-relaxed text-brand-950">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {hasApplications && (
            <section id="applications" aria-labelledby="applications-title" className={sectionOffset}>
              <h2 id="applications-title" className={heading}>Typical applications</h2>
              <ul className="mt-5 grid list-disc gap-x-8 gap-y-2 border-y border-steel-200 py-4 pl-5 text-sm leading-relaxed text-steel-700 marker:text-bronze-600 sm:grid-cols-2 sm:text-base">
                {product.applications.map((application) => <li key={application}>{application}</li>)}
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
              <h2 id="reference-title" className={heading}>{hasDimensions ? "Reference dimensions" : "OEM seal code reference"}</h2>
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

        <aside aria-labelledby="resources-title" className="border border-brand-100 border-t-2 border-t-bronze-500 bg-brand-50 p-5 lg:sticky lg:top-32">
          <h2 id="resources-title" className="text-lg font-extrabold text-brand-950">Selection resources</h2>
          {catalogue && (
            <a href={catalogue.pdfPath} download className="mt-4 flex min-h-11 items-center justify-between gap-3 border border-brand-200 bg-white px-3 py-2 text-sm font-bold text-brand-950 hover:border-brand-400">
              <span>Download catalogue <span className="mt-0.5 block text-xs font-medium text-steel-600">PDF · {catalogue.size}</span></span>
              <ArrowDownToLine className="size-4 shrink-0 text-brand-700" aria-hidden="true" />
            </a>
          )}
          <Link href="/products#materials" className={`${inlineLink} mt-4`}>
            Material selection guide <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <details className="mt-4 border-t border-brand-200 pt-3">
            <summary className="cursor-pointer py-1 text-sm font-bold text-brand-800">Compatibility checks</summary>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-steel-700">
              {materialGuide.selectionRules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </details>
        </aside>
      </div>

      <section id="quote" aria-labelledby="quote-title" className={`${sectionOffset} border-y border-brand-800 bg-brand-950 text-white`}>
        <div className={`${container} grid gap-7 py-9 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,.8fr)] lg:gap-14`}>
          <div>
            <h2 id="quote-title" className="text-2xl font-extrabold tracking-tight sm:text-4xl">Request a technical quote</h2>
            <p className="mt-3 text-sm text-brand-100 sm:text-base">{product.name}</p>
            <Button href={quoteEmail} variant="white" icon={<Mail className="size-4" />} className="mt-5">Email SealForge</Button>
            <p className="mt-3 break-all text-sm text-brand-200">{companyInfo.email}</p>
          </div>
          {requirements.length > 0 && (
            <div className="border-t border-brand-700 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
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
              <Link href="/products" className={inlineLink}>View full catalogue <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
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
