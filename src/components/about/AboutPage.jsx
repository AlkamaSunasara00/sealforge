"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutProducts from "@/components/about/AboutProducts";
import AboutStandards from "@/components/about/AboutStandards";
import AboutProcess from "@/components/about/AboutProcess";
import AboutClosing from "@/components/about/AboutClosing";

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#253664] selection:text-white">
      {/* 1. Hero & Brand Purpose */}
      <AboutHero />

      {/* 2. The Industrial Challenge & Our Mission */}
      <AboutStory />

      {/* 3. Three Engineering Divisions Under One Roof */}
      <AboutProducts />

      {/* 4. Engineering Standards & Material Science Integrity */}
      <AboutStandards />

      {/* 5. How We Collaborate with Plant & Marine Engineers */}
      <AboutProcess />

      {/* 6. Registered Mumbai Facility & Engineering Consultation CTA */}
      <AboutClosing />
    </div>
  );
}
