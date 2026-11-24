"use client";

import React, { useState } from "react";
import {
  Send,
  UploadCloud,
  CheckCircle2,
  FileText,
  X,
  AlertCircle,
  Clock,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Phone,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import { companyInfo } from "@/data/company";

const enquiryTypes = [
  "Mechanical Seals (SF Series)",
  "Industrial Pumps (Metallic / Polymer)",
  "Cutlass Bearings (Water-Lubricated)",
  "Grundfos Pump Seal Replacement",
  "Application Engineering / Custom",
  "General Commercial Enquiry"
];

const natureOptions = [
  "New Project / Equipment Sizing",
  "Direct Replacement / Cross-Reference",
  "Frequent Failure Troubleshooting",
  "Bulk OEM Supply / Annual Contract"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    // Part 1: Contact Information
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    location: "",

    // Part 2: Enquiry Type & Nature
    enquiryType: "Mechanical Seals (SF Series)",
    nature: "Direct Replacement / Cross-Reference",

    // Part 3: Datasheet Operating Parameters (Page 5 Catalogue)
    equipment: "",
    fluidName: "",
    temperature: "",
    pressure: "",
    shaftDiameter: "",
    shaftSpeed: "",
    concentration: "",
    solidsContent: "",

    // Part 4: Specific Engineering Checkboxes
    hardFaces: false,
    chemicalPtfeFfkm: false,
    coolingJacket: false,
    polymerWetted: false,
    flangedShell: false,

    // Part 5: Narrative & Files
    message: ""
  });

  const [showAdvancedDatasheet, setShowAdvancedDatasheet] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setAttachedFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable RFQ processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="conversation" className="relative py-12 sm:py-16 lg:py-20 bg-steel-50 border-b border-steel-200/80">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(91,121,195,0.08),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <Reveal className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>START A CONVERSATION // RFQ DATASHEET</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-900 leading-tight">
            Tell us about your application.
          </h2>

          <p className="text-base sm:text-lg text-steel-600 leading-relaxed font-normal">
            Whether you need a mechanical seal recommendation, a non-API chemical pump, a custom cutlass bearing, or troubleshooting on an existing failure, submit your details below for engineering review.
          </p>
        </Reveal>

        {/* Form Container (Split: Left Technical Assurances, Right Form Console) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Engineering Protocol & Expectations */}
          <Reveal delay={100} className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-steel-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-bronze-600 uppercase tracking-widest block">
                  TECHNICAL CONSULTATION
                </span>
                <h3 className="text-xl font-bold text-brand-950">
                  What to Expect
                </h3>
                <p className="text-xs text-steel-500 leading-relaxed pt-1">
                  When you submit a technical enquiry or RFQ to SealForge:
                </p>
              </div>

              {/* Protocol Commitments */}
              <div className="space-y-4 pt-2 border-t border-steel-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-steel-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-brand-950 uppercase">
                      Application-Led Review
                    </h4>
                    <p className="text-[12px] text-steel-600 leading-relaxed mt-0.5">
                      Reviewed directly by rotating equipment engineers in Mumbai, not sales reps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-steel-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-brand-950 uppercase">
                      4 to 24 Hours Response
                    </h4>
                    <p className="text-[12px] text-steel-600 leading-relaxed mt-0.5">
                      Standard seal cross-references and cutlass bearing sizes quoted promptly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-steel-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-brand-950 uppercase">
                      Drawing Confidentiality
                    </h4>
                    <p className="text-[12px] text-steel-600 leading-relaxed mt-0.5">
                      Uploaded pump cross-sections, drawings, and chemical compositions are held strictly confidential.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Engineering Desk Card */}
              <div className="pt-4 border-t border-steel-100 rounded-2xl bg-steel-50/80 p-4 border border-steel-200/80 space-y-2">
                <span className="text-[10px] font-mono font-bold text-steel-500 uppercase tracking-wider block">
                  URGENT PLANT BREAKDOWN?
                </span>
                <p className="text-xs text-steel-600">
                  Call our Mumbai engineering desk directly for immediate emergency seal or pump dispatch:
                </p>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-mono font-bold text-brand-900 hover:text-brand-700 pt-1"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-700" />
                  <span>{companyInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: The RFQ Form Station */}
          <Reveal delay={150} className="lg:col-span-8">
            <div className="bg-white border border-steel-200/90 rounded-3xl p-6 sm:p-10 shadow-md shadow-brand-950/5">
              {submitted ? (
                /* Success State */
                <div className="py-12 text-center space-y-6 max-w-lg mx-auto">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-brand-950">
                      Enquiry Successfully Received
                    </h3>
                    <p className="text-sm text-steel-600 leading-relaxed">
                      Thank you, <strong className="text-brand-950">{formData.fullName}</strong>. Your engineering enquiry for <strong className="text-brand-950">{formData.enquiryType}</strong> has been logged with our Mumbai technical desk.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-steel-50 border border-steel-200 text-xs font-mono text-steel-600 space-y-1">
                    <div>Reference ID: SF-RFQ-{Math.floor(100000 + Math.random() * 900000)}</div>
                    <div>Estimated Review Window: 4 to 24 business hours</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        companyName: "",
                        workEmail: "",
                        phoneNumber: "",
                        location: "",
                        enquiryType: "Mechanical Seals (SF Series)",
                        nature: "Direct Replacement / Cross-Reference",
                        equipment: "",
                        fluidName: "",
                        temperature: "",
                        pressure: "",
                        shaftDiameter: "",
                        shaftSpeed: "",
                        concentration: "",
                        solidsContent: "",
                        hardFaces: false,
                        chemicalPtfeFfkm: false,
                        coolingJacket: false,
                        polymerWetted: false,
                        flangedShell: false,
                        message: ""
                      });
                      setAttachedFile(null);
                    }}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-700 hover:text-brand-950 underline underline-offset-4"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Interactive Form Fields */
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Select Requirement / Enquiry Type */}
                  <div className="space-y-3">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-900">
                      1. Product Category <span className="text-rose-600">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {enquiryTypes.map((type) => {
                        const isSelected = formData.enquiryType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, enquiryType: type }))
                            }
                            className={`px-3 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all text-left flex items-center justify-between ${
                              isSelected
                                ? "bg-brand-950 text-white shadow-xs border border-brand-950"
                                : "bg-steel-50 text-steel-700 hover:bg-steel-100 border border-steel-200/80"
                            }`}
                          >
                            <span className="truncate">{type}</span>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 shrink-0 ml-1.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Nature of Enquiry */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-semibold text-steel-700">
                      Enquiry Nature
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {natureOptions.map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans cursor-pointer border transition-colors ${
                            formData.nature === opt
                              ? "bg-brand-50/60 border-brand-700/60 text-brand-950 font-medium"
                              : "bg-white border-steel-200 text-steel-600 hover:bg-steel-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="nature"
                            value={opt}
                            checked={formData.nature === opt}
                            onChange={handleInputChange}
                            className="text-brand-700 focus:ring-brand-700 h-3.5 w-3.5"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Your Details (4 Grid Inputs + Location) */}
                  <div className="space-y-4 pt-4 border-t border-steel-100">
                    <div className="text-xs font-mono font-bold text-steel-400 uppercase tracking-widest">
                      // 2. YOUR DETAILS & CONTACT
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-steel-700">
                          Full Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g., Rajesh Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-steel-700">
                          Company / Plant Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g., Apex Chemicals Pvt Ltd"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>

                      {/* Work Email */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-steel-700">
                          Work Email <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="email"
                          name="workEmail"
                          required
                          value={formData.workEmail}
                          onChange={handleInputChange}
                          placeholder="engineering@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-steel-700">
                          Phone / WhatsApp Number <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          required
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Plant Location */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-semibold text-steel-700">
                        Plant / Delivery Location (City, State / Country)
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g., Dahej, Gujarat / Mumbai, Maharashtra"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Step 3: Application Operating Conditions & Equipment */}
                  <div className="space-y-4 pt-4 border-t border-steel-100">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-steel-400 uppercase tracking-widest">
                        // 3. EQUIPMENT & OPERATING PARAMETERS
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowAdvancedDatasheet(!showAdvancedDatasheet)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-700 hover:text-brand-950"
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span>{showAdvancedDatasheet ? "Hide Detailed Datasheet" : "+ Add Full Datasheet (Temp, Pressure, Speed)"}</span>
                        {showAdvancedDatasheet ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Equipment Make / Model */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-steel-700">
                          Equipment / Pump Make & Model
                        </label>
                        <input
                          type="text"
                          name="equipment"
                          value={formData.equipment}
                          onChange={handleInputChange}
                          placeholder="e.g., Grundfos CRN 32, Kirloskar, Sulzer, Agitator"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>

                      {/* Fluid Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-steel-700">
                          Fluid / Medium Handled
                        </label>
                        <input
                          type="text"
                          name="fluidName"
                          value={formData.fluidName}
                          onChange={handleInputChange}
                          placeholder="e.g., 30% HCl, Boiler Feed Water, Slurry, Crude Oil"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Collapsible / Expandable Datasheet Section */}
                    {showAdvancedDatasheet && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-steel-50 border border-steel-200/90 space-y-4">
                        <div className="text-[11px] font-mono font-bold text-bronze-600 uppercase tracking-wider">
                          Catalogue Datasheet Specifications (Page 5 Reference)
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div className="space-y-1">
                            <label className="block text-[11px] font-mono text-steel-600">
                              Temperature (°C)
                            </label>
                            <input
                              type="text"
                              name="temperature"
                              value={formData.temperature}
                              onChange={handleInputChange}
                              placeholder="e.g., 85 °C"
                              className="w-full px-2.5 py-2 rounded-lg bg-white border border-steel-200 text-xs text-brand-950"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="block text-[11px] font-mono text-steel-600">
                              Pressure (bar)
                            </label>
                            <input
                              type="text"
                              name="pressure"
                              value={formData.pressure}
                              onChange={handleInputChange}
                              placeholder="e.g., 12 bar"
                              className="w-full px-2.5 py-2 rounded-lg bg-white border border-steel-200 text-xs text-brand-950"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="block text-[11px] font-mono text-steel-600">
                              Shaft Dia (mm)
                            </label>
                            <input
                              type="text"
                              name="shaftDiameter"
                              value={formData.shaftDiameter}
                              onChange={handleInputChange}
                              placeholder="e.g., 45 mm"
                              className="w-full px-2.5 py-2 rounded-lg bg-white border border-steel-200 text-xs text-brand-950"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="block text-[11px] font-mono text-steel-600">
                              Speed (RPM)
                            </label>
                            <input
                              type="text"
                              name="shaftSpeed"
                              value={formData.shaftSpeed}
                              onChange={handleInputChange}
                              placeholder="e.g., 2900 RPM"
                              className="w-full px-2.5 py-2 rounded-lg bg-white border border-steel-200 text-xs text-brand-950"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          <div className="space-y-1">
                            <label className="block text-[11px] font-mono text-steel-600">
                              Fluid Concentration (%)
                            </label>
                            <input
                              type="text"
                              name="concentration"
                              value={formData.concentration}
                              onChange={handleInputChange}
                              placeholder="e.g., 98% concentrated, or 20% solution"
                              className="w-full px-2.5 py-2 rounded-lg bg-white border border-steel-200 text-xs text-brand-950"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="block text-[11px] font-mono text-steel-600">
                              Solids Content (TDS / Particle Size)
                            </label>
                            <input
                              type="text"
                              name="solidsContent"
                              value={formData.solidsContent}
                              onChange={handleInputChange}
                              placeholder="e.g., 5% abrasive sand, < 100 microns"
                              className="w-full px-2.5 py-2 rounded-lg bg-white border border-steel-200 text-xs text-brand-950"
                            />
                          </div>
                        </div>

                        {/* Specific checkboxes */}
                        <div className="pt-2 border-t border-steel-200/70 space-y-2">
                          <span className="block text-[11px] font-mono text-steel-500 font-semibold uppercase">
                            Special Feature Requirements:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            <label className="flex items-center gap-2 cursor-pointer text-steel-700">
                              <input
                                type="checkbox"
                                name="hardFaces"
                                checked={formData.hardFaces}
                                onChange={handleInputChange}
                                className="rounded text-brand-700 focus:ring-brand-700"
                              />
                              <span>Hard Faces (SiC / Tungsten Carbide for slurry)</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-steel-700">
                              <input
                                type="checkbox"
                                name="chemicalPtfeFfkm"
                                checked={formData.chemicalPtfeFfkm}
                                onChange={handleInputChange}
                                className="rounded text-brand-700 focus:ring-brand-700"
                              />
                              <span>PTFE Bellows or FFKM for severe acid attack</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-steel-700">
                              <input
                                type="checkbox"
                                name="coolingJacket"
                                checked={formData.coolingJacket}
                                onChange={handleInputChange}
                                className="rounded text-brand-700 focus:ring-brand-700"
                              />
                              <span>Cooling Jacket / API Flush Plan required</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-steel-700">
                              <input
                                type="checkbox"
                                name="flangedShell"
                                checked={formData.flangedShell}
                                onChange={handleInputChange}
                                className="rounded text-brand-700 focus:ring-brand-700"
                              />
                              <span>Flanged Cutlass Bearing Shell required</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Your Message */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-semibold text-steel-700">
                        Requirement Details / Existing Failure Mode <span className="text-rose-600">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us what you need help with (dimensions, replacement model code, recurring leakage, or new plant sizing requirement)..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors resize-y"
                      />
                    </div>

                    {/* Custom Drawing / Document Upload */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-semibold text-steel-700">
                        Upload Pump Drawing / Existing Seal Photo / Datasheet (Optional)
                      </label>
                      <div className="relative border-2 border-dashed border-steel-300 hover:border-brand-700 rounded-2xl p-4 sm:p-6 text-center transition-colors bg-steel-50/50">
                        {attachedFile ? (
                          <div className="flex items-center justify-between bg-white border border-steel-200 rounded-xl p-3">
                            <div className="flex items-center gap-3 truncate">
                              <FileText className="w-5 h-5 text-brand-700 shrink-0" />
                              <div className="text-left truncate">
                                <span className="text-xs font-mono font-bold text-brand-950 block truncate">
                                  {attachedFile.name}
                                </span>
                                <span className="text-[11px] text-steel-500 font-mono">
                                  {(attachedFile.size / 1024).toFixed(1)} KB
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={removeFile}
                              className="p-1 rounded-lg text-steel-400 hover:text-rose-600 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <label className="cursor-pointer block space-y-2">
                            <UploadCloud className="w-8 h-8 text-brand-700 mx-auto" />
                            <div className="text-xs text-steel-600">
                              <span className="font-bold text-brand-700 hover:underline">
                                Click to upload
                              </span>{" "}
                              or drag and drop drawing / datasheet
                            </div>
                            <p className="text-[11px] font-mono text-steel-400">
                              PDF, STEP, DWG, PNG, or JPG (up to 25 MB)
                            </p>
                            <input
                              type="file"
                              onChange={handleFileChange}
                              className="hidden"
                              accept=".pdf,.dwg,.dxf,.step,.stp,.png,.jpg,.jpeg,.doc,.docx"
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Transmitting RFQ..." : "Submit Enquiry →"}
                    </Button>

                    <div className="text-xs font-mono text-steel-500 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Encrypted & Confidential Engineering Desk</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
