"use client";

import React, { useState } from "react";
import ProductsHero from "./ProductsHero";
import ProductsFilterBar from "./ProductsFilterBar";
import MechanicalSealsSection from "./MechanicalSealsSection";
import IndustrialPumpsSection from "./IndustrialPumpsSection";
import CutlassBearingsSection from "./CutlassBearingsSection";
import MaterialsGuideSection from "./MaterialsGuideSection";
import ProductsCtaSection from "./ProductsCtaSection";

export default function ProductsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const showAll = selectedCategory === "all";
  const showSeals = showAll || selectedCategory === "mechanical-seals";
  const showPumps = showAll || selectedCategory === "industrial-pumps";
  const showBearings = showAll || selectedCategory === "cutlass-bearings";
  const showMaterials = showAll || selectedCategory === "materials-guide";

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#253664] selection:text-white">
      {/* 1. Category Hero with Search Console */}
      <ProductsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 2. Sticky Category Switch Bar */}
      <ProductsFilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 3. Category 01: Mechanical Seals (7 SF Series) */}
      {showSeals && <MechanicalSealsSection searchQuery={searchQuery} />}

      {/* 4. Category 02: Industrial Pumps (5 Configurations) */}
      {showPumps && <IndustrialPumpsSection searchQuery={searchQuery} />}

      {/* 5. Category 03: Cutlass Bearings (25–400mm & 4 Profiles) */}
      {showBearings && <CutlassBearingsSection />}

      {/* 6. Material Science Guide & EN 12756 Selection Rules */}
      {showMaterials && <MaterialsGuideSection />}

      {/* 7. Technical RFQ & Custom Engineering CTA */}
      <ProductsCtaSection />
    </div>
  );
}
