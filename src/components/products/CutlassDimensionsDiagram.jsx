"use client";

import React from "react";
import Image from "next/image";
import cutlassDimensionsImg from "@/assets/products/cutlass-bearing/cutlass-dimensions-diagram.webp";

/**
 * Full-width horizontal engineering cross-section diagram for Cutlass Bearings (Ds, OD, L, T).
 */
export default function CutlassDimensionsDiagram() {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#253664]">
          Dimensional Reference Diagram (mm)
        </span>
        <span className="text-[10px] font-mono text-slate-500 uppercase">
          Ds · OD · L · T
        </span>
      </div>

      <div className="relative w-full">
        <Image
          src={cutlassDimensionsImg}
          alt="Cutlass bearing dimensional cross-section diagram showing Shaft Diameter Ds, Outside Diameter OD, Length L, and Shell Thickness T"
          className="w-full h-auto object-contain"
          sizes="(max-width: 1024px) 100vw, 720px"
        />
      </div>
    </div>
  );
}
