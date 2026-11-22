"use client";

import React from "react";
import ContactHero from "./ContactHero";
import ContactChannels from "./ContactChannels";
import ContactForm from "./ContactForm";
import ContactProductGuide from "./ContactProductGuide";
import ContactApplicationSupport from "./ContactApplicationSupport";
import ContactLocation from "./ContactLocation";
import ContactFinalCta from "./ContactFinalCta";

export default function ContactPageContent() {
  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#253664] selection:text-white">
      {/* 1. Hero matching AboutHero aesthetic exactly */}
      <ContactHero />

      {/* 2. Direct Channels (Call, Email, Visit) */}
      <ContactChannels />

      {/* 3. Interactive Conversation & Technical RFQ Form */}
      <ContactForm />

      {/* 4. Not Sure What You Need? (3 Product Cards) */}
      <ContactProductGuide />

      {/* 5. Application Support (Operating Conditions Factors) */}
      <ContactApplicationSupport />

      {/* 6. Visit SealForge (Mumbai Works & Directions) */}
      <ContactLocation />

      {/* 7. Have an Application to Solve? Let's Talk Engineering. */}
      <ContactFinalCta />
    </div>
  );
}
