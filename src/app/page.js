import HeroSection from "@/components/home/HeroSection";
import ProductCategories from "@/components/home/ProductCategories";
import MaterialsSection from "@/components/home/MaterialsSection";
import CataloguesSection from "@/components/home/CataloguesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TechnicalInquirySection from "@/components/home/TechnicalInquirySection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Showcase with interactive Product Series switcher & technical metrics */}
      <HeroSection />

      {/* 2. Detailed Product Portfolio: Mechanical Seals, Cutlass Bearings & Industrial Pumps */}
      <ProductCategories />

      {/* 3. Official Catalogues Section (Previews & Direct PDF downloads from user catalogue) */}
      <CataloguesSection />

      {/* 4. Materials of Construction, Chemical Compatibility & Elastomer Matrix */}
      <MaterialsSection />

      {/* 5. Industries Served: Marine, Chemical, Power, Water, Pharma, Mining */}
      <IndustriesSection />

      {/* 6. Technical RFQ & Seal Parameter Inquiry Sheet Form */}
      <TechnicalInquirySection />
    </div>
  );
}
