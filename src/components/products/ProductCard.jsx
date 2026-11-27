"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

/**
 * External Skew-Bracket Rail ProductCard:
 * crisp 4px corners, an external right-side bracket rail (mirroring Button.jsx)
 * that slides outward on hover, plus a stepped top series index tab.
 */
export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative block h-full pt-2.5 pr-2"
    >
      {/* External Right Geometric Bracket Rail (Mirrors Button.jsx right bracket) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[18px] bottom-[8px] right-0 w-[14px] z-0 rounded-tr-[3px] rounded-br-[3px] border-t-[1.5px] border-r-[1.5px] border-b-[1.5px] border-l-0 border-[#253664]/35 group-hover:border-[#b6812a] group-hover:translate-x-[4px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      />

      {/* Main Card Body */}
      <div className="relative z-10 flex flex-col justify-between h-full rounded-sm bg-white border border-slate-200/90 group-hover:border-[#253664]/50 shadow-[0_10px_24px_-18px_rgba(7,13,28,0.18)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {/* Stepped External Top Series Tab (Skewed like Button.jsx) */}
        <div className="absolute -top-3 left-4 z-20">
          <span className="inline-flex items-center -skew-x-[16deg] rounded-[2px] bg-[#253664] group-hover:bg-[#070d1c] border border-white/20 px-3 py-1 shadow-xs transition-colors duration-300">
            <span className="skew-x-[16deg] inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-white">
              <span className="w-1.5 h-1.5 rounded-[1px] bg-bronze-400" />
              <span>{product.subLabel}</span>
            </span>
          </span>
        </div>

        {/* Center: Compact Studio Product Showcase Stage */}
        <div className="relative aspect-[16/10] w-full mx-auto px-4 pt-5 pb-2 flex items-center justify-center overflow-hidden">
          {/* Subtle Studio Stage Backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-x-3 top-4 bottom-1.5 rounded-[2px] bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#f1f5f9_75%,#e6edf6_100%)] border border-slate-200/60 pointer-events-none"
          />

          {/* Ambient Halo on Hover */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-[radial-gradient(circle,rgba(37,54,100,0.12)_0%,rgba(182,129,42,0.08)_45%,transparent_70%)] opacity-0 scale-90 transform-gpu transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100 group-hover:scale-105 pointer-events-none"
          />

          {/* Studio Contact Shadow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 bottom-3 -translate-x-1/2 w-[50%] h-3.5 rounded-[50%] bg-[#070d1c]/14 blur-md transform-gpu transition-[opacity,transform] duration-300 ease-out group-hover:scale-x-90 group-hover:opacity-60 pointer-events-none"
          />

          {/* Product Image or Empty Studio Placeholder */}
          <div className="relative z-10 w-full h-full transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-[1.03]">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-contain p-1.5 drop-shadow-[0_14px_20px_rgba(7,13,28,0.18)]"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center rounded-[2px] border border-dashed border-slate-300/90 bg-white/60 text-slate-400 gap-1.5">
                <ImageIcon className="w-6 h-6 stroke-[1.5]" />
                <span className="text-[10px] font-mono uppercase tracking-widest">
                  Image Placeholder
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom: Compact Footer Dock with Button-Matched Skewed Arrow */}
        <div className="relative z-10 border-t border-slate-200/80 bg-white px-4 py-3 overflow-hidden rounded-b-sm">
          {/* Smooth GPU Opacity Layer for Navy Inversion */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#070d1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
          />

          <div className="relative z-10 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#b6812a] group-hover:text-bronze-300 transition-colors duration-300 ease-out block">
                {product.categoryLabel}
              </span>

              <h3 className="mt-0.5 text-sm sm:text-base font-semibold text-[#070d1c] group-hover:text-white tracking-tight leading-snug transition-colors duration-300 ease-out">
                {product.name}
              </h3>
            </div>

            {/* Crisp Upright Square Pass-Through Arrow Button */}
            <span className="relative w-8 h-8 rounded-[3px] shrink-0 bg-slate-100 text-[#070d1c] border border-slate-200/90 group-hover:border-[#b6812a]/80 flex items-center justify-center overflow-hidden transition-colors duration-300">
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[#253664] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
              />
              <span className="relative z-10 w-4 h-4 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 transform-gpu transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0" />
                <ArrowUpRight className="w-4 h-4 absolute inset-0 text-white -translate-x-5 translate-y-5 opacity-0 transform-gpu transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
