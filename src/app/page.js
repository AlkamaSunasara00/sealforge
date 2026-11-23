import HeroSection from "@/components/home/HeroSection";
import ProductPortfolio from "@/components/home/ProductPortfolio";
import EngineeringStory from "@/components/home/EngineeringStory";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import CustomEngineering from "@/components/home/CustomEngineering";
import WhySealForge from "@/components/home/WhySealForge";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata = {
  title: "SealForge | Precision Mechanical Seals, Industrial Pumps & Cutlass Bearings",
  description:
    "SealForge engineers high-integrity mechanical seals, industrial process pumps, and water-lubricated cutlass bearings for demanding rotating-equipment applications.",
  alternates: { canonical: "https://www.sealforge.in/" },
};

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 01. Hero — Cohesive Physical Engineering Composition */}
      <HeroSection />

      {/* 03. Product Portfolio — 3 Systems: Seals, Pumps, Bearings */}
      <ProductPortfolio />

      {/* 04. Engineering Story — 4-Stage Progressive Application Focus */}
      <EngineeringStory />

      {/* 05. Applications — 10 Industry Sectors */}
      <ApplicationsSection />

      {/* 06. Custom Engineering — Drawing to Finished Component */}
      <CustomEngineering />

      {/* 07. Why SealForge — 4 Core Principles */}
      <WhySealForge />

      {/* 08. Final Contact CTA — High-Impact Closure */}
      <FinalCtaSection />
    </div>
  );
}
