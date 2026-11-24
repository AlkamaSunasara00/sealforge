import React from "react";
import ProductsPageContent from "@/components/products/ProductsPageContent";

export const metadata = {
  title: "Industrial Mechanical Seals, Pumps & Bearings | SealForge",
  description:
    "Explore SealForge industrial mechanical seals (SF Series), non-API overhung pumps (metallic & polymer-lined), and water-lubricated cutlass bearings (25–400mm). Direct application engineering and custom manufacturing in Mumbai.",
  keywords: [
    "mechanical seal manufacturer India",
    "industrial centrifugal pumps",
    "cutlass bearings India",
    "balanced mechanical seal SF-B",
    "PTFE bellows mechanical seal",
    "polymer lined pump PVDF",
    "water lubricated sleeve bearing",
    "Grundfos replacement pump seal",
    "chemical process pump ISO 5199",
    "ANSI B73.1 overhung pump",
    "EN 12756 mechanical seal",
    "A1 Chunawala Compound Kurla West"
  ],
  alternates: {
    canonical: "https://www.sealforge.in/products",
  },
  openGraph: {
    title: "Industrial Mechanical Seals, Pumps & Bearings | SealForge",
    description:
      "Explore SealForge industrial mechanical seals (SF Series), non-API overhung pumps (metallic & polymer-lined), and water-lubricated cutlass bearings (25–400mm). Built for demanding rotating equipment.",
    url: "https://www.sealforge.in/products",
    siteName: "SealForge",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      url: "https://www.sealforge.in/products",
      name: "SealForge Products — Mechanical Seals, Industrial Pumps & Cutlass Bearings",
      description:
        "Complete product catalog of SealForge mechanical seals, chemical process centrifugal pumps, and water-lubricated sleeve bearings.",
      about: { "@id": "https://www.sealforge.in/#organization" },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Mechanical Seals (SF Series)",
            description: "Seven series covering balanced, unbalanced, PTFE bellows, and Grundfos replacement seals.",
            url: "https://www.sealforge.in/products#mechanical-seals"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industrial Centrifugal Pumps",
            description: "Non-API overhung pumps in metallic, solid polymer, and polymer-lined constructions up to 600 m³/hr.",
            url: "https://www.sealforge.in/products#industrial-pumps"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Water-Lubricated Cutlass Bearings",
            description: "Sleeve bearings for marine propulsion and vertical pumps from 25 mm to 400 mm shaft diameters.",
            url: "https://www.sealforge.in/products#cutlass-bearings"
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.sealforge.in/#organization",
      name: "SealForge",
      url: "https://www.sealforge.in",
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
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.sealforge.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://www.sealforge.in/products",
        },
      ],
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsPageContent />
    </>
  );
}
