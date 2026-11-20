"use client";

import { useState } from "react";
import {
  FileText,
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  ShieldCheck
} from "lucide-react";
import { companyInfo } from "@/data/company";

export default function TechnicalInquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    equipmentType: "Centrifugal Pump (Metallic)",
    shaftDiameter: "",
    fluidName: "",
    temperature: "",
    operatingPressure: "",
    speedRpm: "",
    directionOfRotation: "Clockwise (viewed from drive end)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 lg:py-28 bg-[#091124] text-white relative overflow-hidden" id="technical-rfq">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Technical Data Sheet (Catalogue Page 05)</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Request an Engineering Technical Quote
            </h2>

            <p className="text-base text-slate-200 leading-relaxed font-normal">
              Every pump cavity, marine shaft, and agitator vessel requires accurate thermal and pressure alignment. Provide your application parameters below and our Mumbai engineering team will respond with certified drawings and commercial quotation.
            </p>

            {/* Registered Office Box */}
            <div className="bg-[#101b38] border-2 border-slate-700 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-700 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Direct Engineering Hotline</span>
              </div>

              <div className="space-y-3.5 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white block">REGISTERED OFFICE:</span>
                    <span className="text-slate-300 text-xs">{companyInfo.address.full}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white mr-2">TELEPHONE:</span>
                    <a
                      href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                      className="text-white hover:text-amber-300 font-mono font-bold"
                    >
                      {companyInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white mr-2">EMAIL:</span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-white hover:text-amber-300 font-mono"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white mr-2">RESPONSE TIME:</span>
                    <span className="text-emerald-400 font-bold">Under 4 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Form with Bold High-Contrast Fields */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl p-8 sm:p-10 shadow-2xl border-2 border-slate-200">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-950">
                    Application Data Sheet Received
                  </h3>
                  <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our technical engineers at SealForge Mumbai are evaluating your fluid parameters and will revert with recommendations.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl text-xs font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-colors"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b-2 border-slate-200 pb-4">
                    <h3 className="text-2xl font-extrabold text-slate-950">
                      Technical Application Sheet
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                      Fill out your equipment & fluid details for face, metallurgy, and elastomer recommendation.
                    </p>
                  </div>

                  {/* 1. Operating Parameters */}
                  <div className="space-y-4">
                    <span className="text-xs font-extrabold text-brand-900 uppercase tracking-wider block">
                      1. Operating Conditions
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div>
                        <label className="block font-bold text-slate-900 mb-1.5">
                          Equipment Type *
                        </label>
                        <select
                          name="equipmentType"
                          value={formData.equipmentType}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 bg-white font-medium text-slate-900"
                        >
                          <option>Centrifugal Pump (Metallic)</option>
                          <option>Chemical Process Pump (Polymer-Lined)</option>
                          <option>Cutlass Bearing Marine Stern Tube</option>
                          <option>Cutlass Bearing Vertical Submerged Pump</option>
                          <option>Agitator / Reactor Vessel</option>
                          <option>Grundfos Drop-in Replacement</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-900 mb-1.5">
                          Shaft Diameter (mm / inch) *
                        </label>
                        <input
                          type="text"
                          name="shaftDiameter"
                          required
                          value={formData.shaftDiameter}
                          onChange={handleChange}
                          placeholder="e.g. 45 mm or 1.75 inch"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 text-slate-900 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-900 mb-1.5">
                          Fluid / Chemical Name *
                        </label>
                        <input
                          type="text"
                          name="fluidName"
                          required
                          value={formData.fluidName}
                          onChange={handleChange}
                          placeholder="e.g. Sulfuric Acid, Boiler Water, Hydrocarbon"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 text-slate-900 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-900 mb-1.5">
                          Temperature (°C)
                        </label>
                        <input
                          type="text"
                          name="temperature"
                          value={formData.temperature}
                          onChange={handleChange}
                          placeholder="e.g. 95°C"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 text-slate-900 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-900 mb-1.5">
                          Operating Pressure (Bar)
                        </label>
                        <input
                          type="text"
                          name="operatingPressure"
                          value={formData.operatingPressure}
                          onChange={handleChange}
                          placeholder="e.g. 16 Bar"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 text-slate-900 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-900 mb-1.5">
                          Shaft Speed (RPM)
                        </label>
                        <input
                          type="text"
                          name="speedRpm"
                          value={formData.speedRpm}
                          onChange={handleChange}
                          placeholder="e.g. 1450 or 2900 RPM"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 text-slate-900 font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2. Contact Details */}
                  <div className="space-y-4 pt-4 border-t-2 border-slate-200">
                    <span className="text-xs font-extrabold text-brand-900 uppercase tracking-wider block">
                      2. Company & Technical Contact
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div>
                        <label className="block font-bold text-slate-900 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 text-slate-900 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-900 mb-1.5">
                          Company / Plant Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 text-slate-900 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-900 mb-1.5">
                          Work Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 text-slate-900 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-900 mb-1.5">
                          Direct Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 text-slate-900 font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                        Notes, Drawing Ref #, or Existing Make
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Existing seal reference number, slurry concentration %, or specific metallurgy requirements..."
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-700 text-xs sm:text-sm text-slate-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-xl text-sm font-extrabold text-white bg-brand-700 hover:bg-brand-800 shadow-lg transition-all cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Evaluating Parameters...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Data Sheet for Technical Review</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
