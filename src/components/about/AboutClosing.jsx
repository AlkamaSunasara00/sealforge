import Button from "@/components/common/Button";
import Reveal from "@/components/about/Reveal";
import MagicRings from "@/components/about/MagicRings";

export default function AboutClosing() {
  return (
    <section className="bg-steel-50 px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-brand-800/70 bg-brand-950 shadow-2xl shadow-brand-950/15">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        >
          <MagicRings
            color="#d49938"
            colorTwo="#5b79c3"
            ringCount={6}
            motion="breathe"
            speed={0.35}
            lineThickness={1.6}
            glow={0.8}
            opacity={0.72}
            followMouse
            mouseInfluence={0.08}
            hoverScale={1.05}
            hoverIntensity={0.7}
            parallax={0.025}
            clickBurst={false}
            className="h-full w-full"
          />
        </div>

        <div className="relative mx-auto flex min-h-[400px] max-w-5xl items-center justify-center px-6 py-10 text-center sm:min-h-[440px] sm:px-8 sm:py-14 lg:min-h-[480px]">
          <Reveal className="flex w-full flex-col items-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-bronze-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
              <span>LET&apos;S TALK ENGINEERING</span>
            </div>
            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s find the right seal for your equipment.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-steel-200 sm:text-lg">
              Tell us about the duty. Our team can help you find a considered fit
              for your application.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-5">
              <Button variant="white" href="/contact">
                Request a quote
              </Button>
              <Button variant="primary" href="/catalogue">
                Browse products
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
