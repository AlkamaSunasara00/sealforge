import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import mechanicalSealBlueprint from "@/assets/about/mechanical-seal-blueprint.webp";

export default function AboutHero() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-brand-950 text-white">
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${mechanicalSealBlueprint.src})`,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 -z-20 bg-brand-950/82"
        aria-hidden="true"
      />

      {/* Subtle engineering grid */}
      <div
        className="bg-grid-pattern absolute inset-0 -z-15 opacity-[0.07]"
        aria-hidden="true"
      />

      {/* Center readability overlay */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,35,65,0.22)_0%,rgba(5,12,27,0.68)_55%,rgba(5,12,27,0.94)_100%)]"
        aria-hidden="true"
      />

      {/* Bottom transition */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-t from-brand-950 to-transparent"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 pt-8 pb-12 text-center sm:px-6 sm:pt-10 sm:pb-14 lg:px-8 lg:pt-12 lg:pb-16">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            {/* Section Eyebrow Label */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 mb-2.5 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
              <span>INDIAN ENGINEERING FOR A BETTER TOMORROW</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Precision Engineering for{" "}
              <span className="text-bronze-400">Rotating Equipment</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-steel-200 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg font-normal">
              Headquartered in Mumbai, India, SealForge is a specialized engineering manufacturer focused on three critical rotating-equipment disciplines: <strong>Mechanical Seals</strong>, <strong>Industrial Centrifugal Pumps</strong>, and <strong>Water-Lubricated Cutlass Bearings</strong>. We exist to solve the persistent challenges of fluid leakage, severe corrosion, and mechanical wear across industrial and marine operations.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
              <Button variant="primary" href="/products">
                Explore Our Products
              </Button>

              <Button variant="white" href="/contact">
                Talk to an Engineer
              </Button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-bronze-500/50"
        aria-hidden="true"
      />
    </section>
  );
}
