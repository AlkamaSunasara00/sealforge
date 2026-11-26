import React from "react";
import { notFound } from "next/navigation";
import ProductDetailView from "@/components/products/ProductDetailView";
import {
  allProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";

export function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | SealForge",
    };
  }

  return {
    title: `${product.name} (${product.subLabel}) | SealForge`,
    description: `${product.tagline} Engineered and manufactured by SealForge in Mumbai, India.`,
    alternates: {
      canonical: `https://www.sealforge.in/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | SealForge`,
      description: product.tagline,
      url: `https://www.sealforge.in/products/${product.slug}`,
      siteName: "SealForge",
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.name,
        description: product.tagline,
        category: product.categoryLabel,
        brand: {
          "@type": "Brand",
          name: "SealForge",
        },
        manufacturer: {
          "@type": "Organization",
          name: "SealForge",
          url: "https://www.sealforge.in",
        },
        url: `https://www.sealforge.in/products/${product.slug}`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `https://www.sealforge.in/products/${product.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ProductDetailView product={product} relatedProducts={relatedProducts} />
    </>
  );
}
