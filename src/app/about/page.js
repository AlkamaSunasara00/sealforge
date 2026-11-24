import AboutPage from "@/components/about/AboutPage";

export const metadata = {
  title: "About SealForge | Indian Engineering for Rotating Equipment",
  description:
    "Learn about SealForge, a Mumbai-based manufacturer of mechanical seals, industrial centrifugal pumps, and water-lubricated cutlass bearings built for severe duty.",
  keywords: [
    "About SealForge",
    "mechanical seal manufacturer Mumbai",
    "industrial pump engineering India",
    "cutlass bearing manufacturer",
    "rotating equipment sealing solutions",
    "chemical process pump manufacturer",
    "water lubricated sleeve bearing supplier",
    "A1 Chunawala Compound Kurla West"
  ],
  alternates: { canonical: "https://www.sealforge.in/about" },
  openGraph: {
    title: "About SealForge | Indian Engineering for Rotating Equipment",
    description:
      "Learn about SealForge, a Mumbai-based manufacturer of mechanical seals, industrial centrifugal pumps, and water-lubricated cutlass bearings built for severe duty.",
    url: "https://www.sealforge.in/about",
    siteName: "SealForge",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      url: "https://www.sealforge.in/about",
      name: "About SealForge",
      description:
        "SealForge is a Mumbai-based manufacturer of mechanical seals, industrial pumps and water-lubricated cutlass bearings.",
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
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.sealforge.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://www.sealforge.in/about",
        },
      ],
    },
  ],
};

export default function AboutRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AboutPage />
    </>
  );
}
