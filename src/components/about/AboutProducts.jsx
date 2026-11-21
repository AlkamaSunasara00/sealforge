"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { aboutProducts } from "@/data/about";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";

/* Placeholder visual: rotating seal / bearing rings, varies per product.
   If a product has an `image` field, that is shown instead. */
function SealGraphic({ variant = 0 }) {
  const v = variant % 3;
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* soft core glow */}
      <circle cx="200" cy="200" r="60" fill="#d4a24c" fillOpacity=".16" />
      <circle cx="200" cy="200" r="30" fill="#d4a24c" fillOpacity=".5" />

      {/* slow rotating outer ring */}
      <g className="origin-center [transform-box:fill-box] animate-[spin_70s_linear_infinite] motion-reduce:animate-none">
        {v === 0 && (
          <>
            <circle cx="200" cy="200" r="170" stroke="white" strokeOpacity=".28" strokeWidth="14" strokeDasharray="3 9" />
            <circle cx="200" cy="200" r="140" stroke="white" strokeOpacity=".14" />
          </>
        )}
        {v === 1 && (
          <>
            <polygon
              points="200,40 338,120 338,280 200,360 62,280 62,120"
              stroke="white"
              strokeOpacity=".22"
            />
            <circle cx="200" cy="200" r="150" stroke="#d4a24c" strokeOpacity=".4" strokeDasharray="2 10" strokeLinecap="round" />
          </>
        )}
        {v === 2 && (
          <>
            <circle cx="200" cy="200" r="175" stroke="white" strokeOpacity=".16" />
            <circle cx="200" cy="200" r="175" stroke="white" strokeOpacity=".3" strokeWidth="6" strokeDasharray="60 40" />
            <path d="M200 20v40M200 340v40M20 200h40M340 200h40" stroke="#d4a24c" strokeOpacity=".6" strokeWidth="2" />
          </>
        )}
      </g>

      {/* counter-rotating inner rings */}
      <g className="origin-center [transform-box:fill-box] animate-[spin_45s_linear_infinite_reverse] motion-reduce:animate-none">
        <circle cx="200" cy="200" r="110" stroke="white" strokeOpacity=".22" strokeDasharray="1 7" strokeWidth="3" strokeLinecap="round" />
        <circle cx="200" cy="200" r="85" stroke="#d4a24c" strokeOpacity=".5" />
      </g>
    </svg>
  );
}

export default function AboutProducts() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      {/* ambient glows */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-bronze-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:py-32">
        <Reveal className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[.17em] text-bronze-300">
              03 / What we make
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Three product lines.{" "}
              <span className="bg-gradient-to-r from-bronze-300 to-bronze-500 bg-clip-text text-transparent">
                One engineering approach.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-steel-300">
            Fluid, duty and environment guide the selection across every line.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          {/* LEFT: product list (accordion on mobile, selector on desktop) */}
          <Reveal>
            <ul className="border-t border-white/15">
              {aboutProducts.map((product, index) => {
                const isActive = active === index;
                return (
                  <li
                    key={product.number}
                    onMouseEnter={() => setActive(index)}
                    className="relative border-b border-white/15"
                  >
                    {/* active indicator */}
                    <span
                      className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-bronze-500 transition-transform duration-500 ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                      aria-hidden="true"
                    />

                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      aria-expanded={isActive}
                      className="flex w-full cursor-pointer items-center gap-5 px-5 py-6 text-left outline-none transition-colors duration-300 hover:bg-white/[.035] focus-visible:bg-white/[.04] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bronze-400 sm:gap-7 sm:py-8"
                    >
                      <span
                        className={`font-mono text-xs transition-colors ${
                          isActive ? "text-bronze-300" : "text-steel-500"
                        }`}
                      >
                        {product.number}
                      </span>

                      <span className="flex-1">
                        <span
                          className={`block text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-3xl ${
                            isActive ? "text-white" : "text-steel-400"
                          }`}
                        >
                          {product.name}
                        </span>
                        <span className="mt-2 block font-mono text-[9px] tracking-[.16em] text-steel-400">
                          {product.code}
                        </span>
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
                          isActive
                            ? "rotate-45 border-bronze-400 text-bronze-300"
                            : "border-white/20 text-steel-300"
                        }`}
                      >
                        <Plus size={16} aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        size={20}
                        aria-hidden="true"
                        className={`hidden shrink-0 transition-all duration-300 lg:block ${
                          isActive
                            ? "translate-x-0 text-bronze-300 opacity-100"
                            : "-translate-x-2 text-steel-400 opacity-0"
                        }`}
                      />
                    </button>

                    {/* Mobile-only expandable details */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out lg:hidden ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="px-5 pb-7">
                          <p className="text-sm leading-7 text-steel-300">
                            {product.description}
                          </p>
                          <Button
                            variant="white"
                            href={product.href}
                            tabIndex={isActive ? 0 : -1}
                            icon={ArrowUpRight}
                            className="mt-5"
                          >
                            Explore {product.name}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* RIGHT: preview panel (desktop only) */}
          <Reveal delay={120} className="hidden lg:block">
            <div className="relative h-full min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 shadow-2xl shadow-black/30">
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_70%_25%,rgba(91,121,195,.32),transparent_70%)]"
                aria-hidden="true"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-950 via-brand-950/70 to-transparent"
                aria-hidden="true"
              />

              {aboutProducts.map((product, index) => {
                const isActive = active === index;
                return (
                  <div
                    key={product.number}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 flex flex-col justify-end p-10 transition-all duration-700 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    }`}
                  >
                    {/* ghost number */}
                    <span
                      className="absolute left-8 top-4 select-none font-mono text-[140px] font-bold leading-none text-white/[.05]"
                      aria-hidden="true"
                    >
                      {product.number}
                    </span>

                    {/* visual */}
                    <div className="absolute -right-10 -top-8 h-[400px] w-[400px]">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,.5)]"
                        />
                      ) : (
                        <SealGraphic variant={index} />
                      )}
                    </div>

                    {/* text */}
                    <div className="relative max-w-md">
                        <span className="inline-block rounded-full border border-bronze-300/25 bg-brand-950/35 px-3 py-1 font-mono text-[9px] tracking-[.16em] text-bronze-300 backdrop-blur">
                        {product.code}
                      </span>
                      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                        {product.name}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-steel-200">
                        {product.description}
                      </p>
                      <Button
                        variant="white"
                        href={product.href}
                        tabIndex={isActive ? 0 : -1}
                        icon={ArrowUpRight}
                        className="mt-6"
                      >
                        Explore {product.name}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="font-mono text-[9px] uppercase tracking-[.17em] text-steel-400">
            Engineered for real operating conditions
          </p>
          <Link
            href="/catalogue"
            className="group inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-bronze-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400"
          >
            Browse our catalogues
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
