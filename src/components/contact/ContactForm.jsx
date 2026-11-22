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
  Phone
} from "lucide-react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import { companyInfo } from "@/data/company";

const enquiryTypes = [
  "Mechanical Seal",
  "Industrial Pump",
  "Cutlass Bearing",
  "Application Engineering",
  "Replacement / Cross Reference",
  "General Enquiry"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    enquiryType: "Mechanical Seal",
    equipment: "",
    operatingConditions: "",
    message: ""
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    // Simulate reliable RFQ submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="conversation" className="relative py-10 sm:py-12 lg:py-14 bg-steel-50 border-b border-steel-200/80">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(91,121,195,0.08),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-brand-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-900 leading-tight">
            Tell us a little about your requirement.
          </h2>

          <p className="text-base sm:text-lg text-steel-600 leading-relaxed font-normal">
            Whether you need a mechanical seal, industrial pump, cutlass bearing or help with an existing application, share the details with us and our team will get in touch.
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
                  When you submit an RFQ or engineering enquiry to SealForge:
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
                      Reviewed directly by rotating equipment engineers, not sales scripts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-steel-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-brand-950 uppercase">
                      &lt; 4 Hours Response
                    </h4>
                    <p className="text-[12px] text-steel-600 leading-relaxed mt-0.5">
                      Standard pump & seal cross references verified same business day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-steel-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-brand-950 uppercase">
                      CAD & IP Confidentiality
                    </h4>
                    <p className="text-[12px] text-steel-600 leading-relaxed mt-0.5">
                      Uploaded drawings and operating metrics are covered under non-disclosure.
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
                  Call our technical desk directly for immediate seal replacement assistance:
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
                    <div>Estimated Review Window: 2 to 4 business hours</div>
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
                        enquiryType: "Mechanical Seal",
                        equipment: "",
                        operatingConditions: "",
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
                      Enquiry Type <span className="text-rose-600">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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

                  {/* Step 2: Your Details (4 Grid Inputs) */}
                  <div className="space-y-4 pt-4 border-t border-steel-100">
                    <div className="text-xs font-mono font-bold text-steel-400 uppercase tracking-widest">
                      // YOUR DETAILS
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
                          placeholder="Enter your full name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-steel-700">
                          Company Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
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
                          placeholder="Enter your business email"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-steel-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Technical Parameters */}
                  <div className="space-y-4 pt-4 border-t border-steel-100">
                    <div className="text-xs font-mono font-bold text-steel-400 uppercase tracking-widest">
                      // YOUR REQUIREMENT
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Equipment / Application */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-steel-700">
                          Equipment / Application
                        </label>
                        <input
                          type="text"
                          name="equipment"
                          value={formData.equipment}
                          onChange={handleInputChange}
                          placeholder="e.g., KSB Megaflow, Sulzer, Reactor Agitator"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>

                      {/* Operating Conditions */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-steel-700">
                          Operating Conditions
                        </label>
                        <input
                          type="text"
                          name="operatingConditions"
                          value={formData.operatingConditions}
                          onChange={handleInputChange}
                          placeholder="e.g., 8 bar, 120°C, 2900 RPM, Hydrochloric acid"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Your Message */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-semibold text-steel-700">
                        Your Message <span className="text-rose-600">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us what you need help with (dimensions, failure mode, replacement model or custom design requirement)..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-steel-50/70 border border-steel-200 text-sm text-brand-950 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-700/20 focus:border-brand-700 transition-colors resize-y"
                      />
                    </div>

                    {/* Custom Drawing / Document Upload */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-semibold text-steel-700">
                        Drawing / Document (Optional)
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
                      {loading ? "Transmitting RFQ..." : "Send Enquiry"}
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
