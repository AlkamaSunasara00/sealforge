"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

/**
 * Compact, borderless steel-blue ProductCard with overhanging product image,
 * stacked navy series pill, product title, amber category label,
 * and bottom-right diagonal arrow.
 */
export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col h-full pt-16 sm:pt-[72px] focus:outline-none"
    >
      {/* Main Steel-Blue Card Body */}
      <div className="relative flex-1 flex flex-col items-center justify-end text-center rounded-[20px] bg-gradient-to-b from-[#cde0f0] to-[#bfd5e8] px-4 pt-[68px] sm:pt-[76px] pb-4 shadow-[0_12px_28px_-10px_rgba(10,25,47,0.18)] group-hover:shadow-[0_18px_36px_-12px_rgba(10,25,47,0.26)] group-focus-visible:ring-2 group-focus-visible:ring-[#0d3b66] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
        {/* Centered Transparent Product Image (~50% extending above card top edge) */}
        <div className="pointer-events-none absolute -top-16 sm:-top-[72px] left-1/2 -translate-x-1/2 w-[88%] max-w-[300px] h-32 sm:h-36 z-10 transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.03]">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 280px, 300px"
              className="object-contain drop-shadow-[0_12px_16px_rgba(10,25,47,0.22)]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center rounded-xl bg-white/70 text-slate-400 gap-1 shadow-sm">
              <ImageIcon className="w-6 h-6 stroke-[1.5]" />
              <span className="text-[10px] font-mono uppercase tracking-widest">
                No Image
              </span>
            </div>
          )}
        </div>

        {/* Stacked Text Content */}
        <div className="relative z-10 w-full flex flex-col items-center gap-1.5 px-1">
          {/* Navy Series Pill */}
          <span className="inline-flex items-center justify-center rounded-full bg-[#0d3b66] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-xs">
            {product.subLabel}
          </span>

          {/* Product Title (wraps naturally on mobile) */}
          <h3 className="mt-0.5 text-lg sm:text-xl font-bold leading-snug tracking-tight text-[#09192e] break-words">
            {product.name}
          </h3>

          {/* Amber Category Label */}
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#c47d10]">
            {product.categoryLabel}
          </span>
        </div>

        {/* Bottom-Right Arrow */}
        <span
          aria-hidden="true"
          className="absolute bottom-3.5 right-3.5 text-[#09192e] transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <ArrowUpRight className="w-5 h-5 stroke-[2.25]" />
        </span>
      </div>
    </Link>
  );
}
