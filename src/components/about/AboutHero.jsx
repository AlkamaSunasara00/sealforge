import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import { aboutProducts } from "@/data/about";

export default function AboutHero() {
  return (
    <section className="bg-brand-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-14 pt-5 sm:px-8 sm:pb-16 sm:pt-7 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:pb-20 lg:pt-11">
        <Reveal>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="mb-4 block font-mono text-sm font-medium uppercase tracking-[.16em] text-steel-300">
              About SealForge
            </span>
            Indian engineering for a better tomorrow.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-steel-200 sm:text-lg">
            SealForge is a Mumbai-based mechanical seal manufacturer in India,
            making mechanical seals, industrial pumps and cutlass bearings. We
            help pump makers, plant engineers and marine operators keep
            rotating equipment sealed and running, with products matched to
            the fluid, the duty and the environment.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
            <Button variant="primary" href="/#products">
              Explore our products
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-bronze-300"
            >
              Talk to an engineer <MoveUpRight size={15} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="border border-steel-200 bg-white p-6 text-brand-900 shadow-xl shadow-brand-950/20 sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-steel-200 pb-5">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-bronze-700">
                  Our product range
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
                  Made for the duty.
                </h2>
              </div>
              <span className="font-mono text-xs font-semibold text-brand-500">
                01 / 03
              </span>
            </div>
            <div className="divide-y divide-steel-200">
              {aboutProducts.map((product) => (
                <Link
                  key={product.number}
                  href={product.href}
                  className="group flex gap-4 py-5 transition-colors hover:bg-steel-50"
                >
                  <span className="pt-0.5 font-mono text-xs font-semibold text-bronze-700">
                    {product.number}
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center justify-between gap-4">
                      <span className="text-base font-semibold text-brand-900">
                        {product.name}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-brand-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bronze-700"
                      />
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-steel-600">
                      {product.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/#products"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-bronze-700"
            >
              View all products <MoveUpRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="h-1 bg-brand-700" aria-hidden="true" />
    </section>
  );
}
