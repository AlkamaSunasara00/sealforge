"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

/**
 * Modern studio-stage ProductCard with GPU-composited hover transitions
 * and straight pass-through arrow indicator beside the title.
 */
export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col justify-between h-full overflow-hidden rounded-[1.75rem] bg-[#f4f7fb] ring-1 ring-slate-200/90 hover:ring-[#253664]/40 shadow-[0_14px_34px_-22px_rgba(7,13,28,0.18)] transition-[border-color,box-shadow] duration-300 ease-out"
    >
      {/* Top Bar: Series Tag */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-5">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white ring-1 ring-slate-200/80 text-[11px] font-mono font-bold uppercase tracking-widest text-[#253664]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#b6812a]" />
          <span>{product.subLabel}</span>
        </span>
      </div>

      {/* Center: Studio Product Showcase Stage */}
      <div className="relative aspect-[4/3] w-full mx-auto px-6 py-4 flex items-center justify-center">
        {/* Subtle Studio Stage Backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-x-3 inset-y-1 rounded-2xl bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#eef3f9_70%,#e4ebf4_100%)] ring-1 ring-white/80 pointer-events-none"
        />

        {/* Studio Floor Falloff */}
        <div
          aria-hidden="true"
          className="absolute inset-x-3 bottom-1 h-1/3 rounded-b-2xl bg-gradient-to-t from-slate-300/35 to-transparent pointer-events-none"
        />

        {/* GPU-Composited Ambient Halo on Hover */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(37,54,100,0.14)_0%,rgba(182,129,42,0.08)_45%,transparent_70%)] opacity-0 scale-90 transform-gpu transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100 group-hover:scale-105 pointer-events-none"
        />

        {/* Dual-Layer Studio Contact & Ambient Shadow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 bottom-4 -translate-x-1/2 w-[58%] h-5 rounded-[50%] bg-[#070d1c]/15 blur-lg transform-gpu transition-[opacity,transform] duration-300 ease-out group-hover:scale-x-90 group-hover:opacity-65 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 bottom-5 -translate-x-1/2 w-[38%] h-2.5 rounded-[50%] bg-[#070d1c]/25 blur-[4px] transform-gpu transition-[opacity,transform] duration-300 ease-out group-hover:scale-x-75 group-hover:opacity-50 pointer-events-none"
        />

        {/* Product Image or Empty Studio Placeholder */}
        <div className="relative z-10 w-full h-full transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.04]">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
              className="object-contain p-2 drop-shadow-[0_18px_26px_rgba(7,13,28,0.20)]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300/90 bg-white/50 text-slate-400 gap-2">
              <ImageIcon className="w-7 h-7 stroke-[1.5]" />
              <span className="text-[10px] font-mono uppercase tracking-widest">
                Image Placeholder
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom: Floating Inset Title Dock with Pass-Through Arrow */}
      <div className="relative z-10 m-3 mt-0 overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-slate-200/80 shadow-[0_8px_20px_-12px_rgba(7,13,28,0.12)]">
        {/* Smooth GPU Opacity Layer for Navy Inversion */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#070d1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
        />

        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#b6812a] group-hover:text-bronze-300 transition-colors duration-300 ease-out block">
              {product.categoryLabel}
            </span>

            <h3 className="mt-1 text-base sm:text-lg font-semibold text-[#070d1c] group-hover:text-white tracking-tight leading-snug transition-colors duration-300 ease-out">
              {product.name}
            </h3>
          </div>

          {/* Circular Pass-Through Arrow (Diagonal Bottom-Left to Top-Right Motion) */}
          <span className="relative w-10 h-10 rounded-full shrink-0 bg-slate-100 text-[#070d1c] ring-1 ring-slate-200/80 group-hover:ring-[#253664] flex items-center justify-center overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[#253664] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
            />
            <span className="relative z-10 w-4 h-4 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 transform-gpu transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0" />
              <ArrowUpRight className="w-4 h-4 absolute inset-0 text-white -translate-x-6 translate-y-6 opacity-0 transform-gpu transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
