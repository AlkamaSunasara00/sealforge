import React from "react";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata = {
  title: "Contact SealForge | Let's Solve the Application",
  description:
    "Have a sealing, pumping or rotating-equipment requirement? Talk directly to SealForge engineers in Mumbai. Technical consultation, custom shaft sizing, and quotations.",
  keywords: [
    "contact SealForge",
    "mechanical seals supplier Mumbai",
    "industrial pumps enquiry",
    "cutlass bearings RFQ",
    "application engineering support",
    "seal replacement cross reference",
    "SealForge contact number",
    "A1 Chunawala Compound Kurla West"
  ],
  alternates: {
    canonical: "https://www.sealforge.in/contact",
  },
  openGraph: {
    title: "Contact SealForge | Let's Solve the Application",
    description:
      "Tell us what you're working with. Our team helps identify the right product, configuration, or engineering solution for your application.",
    url: "https://www.sealforge.in/contact",
    siteName: "SealForge",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      url: "https://www.sealforge.in/contact",
      name: "Contact SealForge",
      description:
        "Technical inquiries, quotations, and office location in Kurla (West), Mumbai.",
      about: { "@id": "https://www.sealforge.in/#organization" },
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
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 99878 15272",
        contactType: "technical support and sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
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
          name: "Contact",
          item: "https://www.sealforge.in/contact",
        },
      ],
    },
  ],
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageContent />
    </>
  );
}
