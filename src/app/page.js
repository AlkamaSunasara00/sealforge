import HeroSection from "@/components/home/HeroSection";
import ProductPortfolio from "@/components/home/ProductPortfolio";
import MaterialsSection from "@/components/home/MaterialsSection";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import EngineeringStory from "@/components/home/EngineeringStory";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata = {
  title: "SealForge | Mechanical Seals, Industrial Pumps & Cutlass Bearings",
  description:
    "SealForge manufactures precision mechanical seals (SF Series), industrial centrifugal pumps, and water-lubricated cutlass bearings in Mumbai, India. Engineered for severe duty.",
  keywords: [
    "SealForge",
    "mechanical seal manufacturer India",
    "industrial pump manufacturer",
    "water lubricated cutlass bearing",
    "balanced mechanical seals",
    "polymer lined chemical pump",
    "Grundfos replacement seal",
    "stern tube cutlass bearing",
    "EN 12756 mechanical seal",
    "ISO 5199 centrifugal pump",
    "A1 Chunawala Compound Kurla West"
  ],
  alternates: { canonical: "https://www.sealforge.in/" },
  openGraph: {
    title: "SealForge | Mechanical Seals, Industrial Pumps & Cutlass Bearings",
    description:
      "SealForge manufactures precision mechanical seals (SF Series), industrial centrifugal pumps, and water-lubricated cutlass bearings in Mumbai, India.",
    url: "https://www.sealforge.in/",
    siteName: "SealForge",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      url: "https://www.sealforge.in/",
      name: "SealForge",
      description: "Indian manufacturer of mechanical seals, industrial pumps and water-lubricated cutlass bearings.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.sealforge.in/products?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.sealforge.in/#organization",
      name: "SealForge",
      url: "https://www.sealforge.in",
      logo: "https://www.sealforge.in/sealforge.svg",
      slogan: "Precision. Performance. Trust.",
      email: "sales@sealforge.in",
      telephone: "+91 99878 15272",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A1 Chunawala Compound, LBS Marg, Kurla (West)",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400070",
        addressCountry: "IN",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="w-full flex flex-col">
        {/* Section 01: Hero — Brand Value Proposition & Trust Strip */}
        <HeroSection />

        {/* Section 02: Three Product Pillars (Mechanical Seals, Pumps, Bearings) */}
        <ProductPortfolio />

        {/* Section 03: Material Science & High-Duty Engineering Standards */}
        <MaterialsSection />

        {/* Section 04: Demanding Industries Served */}
        <ApplicationsSection />

        {/* Section 05: Application-First Selection Workflow (4 Steps) */}
        <EngineeringStory />

        {/* Section 06: Final Conversion CTA & Direct Engineering Helpline */}
        <FinalCtaSection />
      </main>
    </>
  );
}
