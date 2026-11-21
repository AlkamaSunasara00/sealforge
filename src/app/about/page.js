import AboutPage from "@/components/about/AboutPage";

export const metadata = {
  title: "About SealForge",
  description:
    "SealForge makes mechanical seals, industrial pumps and cutlass bearings in Mumbai, India. Meet our three founders and see how we work with you.",
  alternates: { canonical: "https://www.sealforge.in/about" },
  openGraph: {
    title: "About SealForge",
    description:
      "Indian engineering for a better tomorrow. Discover SealForge's products and approach to application-led recommendations.",
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
