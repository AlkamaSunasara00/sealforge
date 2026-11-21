"use client";

import { UserRound, Phone, Mail, MapPin, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/about/Reveal";
import tarikSunasaraPortrait from "@/assets/founders/tarik-sunasara-chief-finance-sealforge.png";

const COMPANY = "SealForge Engineering Pvt. Ltd.";
const ADDRESS =
  "A1 Chunawala Compound, LBS Marg, Kurla (West), Mumbai 400070, Maharashtra, India";

const founders = [
  {
    name: "Salman Goga",
    role: "Director",
    bio: "Leads SealForge Engineering with a focus on precision mechanical sealing systems built for performance and trust.",
    image: "/team/salman.png", // transparent cutout (PNG/WebP)
    phone: "+91 95127 70767",
    email: "sales@sealforge.in",
    address: ADDRESS,
  },
  {
    name: "Tarik Sunasara",
    role: "Chief Finance Officer",
    bio: "Oversees finance and operations at SealForge, keeping the business as dependable as the seals it engineers.",
    image: tarikSunasaraPortrait,
    phone: "+91 84509 03994",
    email: "sales@sealforge.in",
    address: ADDRESS,
  },
];

function ContactRow({ icon: Icon, href, children }) {
  const content = (
    <>
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-bronze-300 ring-1 ring-white/10">
        <Icon size={14} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="text-[13px] leading-5 text-steel-100">{children}</span>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-start gap-3 rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-start gap-3">{content}</div>
  );
}

/* Faint concentric rings behind the portrait (seal / bearing motif) */
function Rings() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 400 533"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="white" strokeOpacity=".09">
        <circle cx="200" cy="190" r="90" />
        <circle cx="200" cy="190" r="140" />
        <circle cx="200" cy="190" r="195" />
        <circle cx="200" cy="190" r="255" strokeOpacity=".05" />
      </g>
      <circle
        cx="200"
        cy="190"
        r="140"
        stroke="#d4a24c"
        strokeOpacity=".22"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AboutFounders() {
  const [openFounder, setOpenFounder] = useState(null);
  const gridCols =
    founders.length === 2
      ? "md:grid-cols-2 md:max-w-3xl md:mx-auto"
      : "md:grid-cols-3";

  return (
    // NOTE: no overflow-hidden on this section or any parent, it breaks sticky
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:py-32">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[.17em] text-bronze-700">
              The people behind SealForge
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-900 sm:text-5xl">
              Founders driven by precision.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-steel-600">
            Precision. Performance. Trust. The principles every seal we
            engineer is built on.
          </p>
        </Reveal>

        {/* Mobile: sticky stacking | Desktop: normal grid */}
        <div
          className={`flex flex-col gap-8 pb-4 md:grid md:gap-5 md:pb-0 ${gridCols}`}
        >
          {founders.map((founder, index) => {
            const isOpen = openFounder === index;

            return (
              <div
                key={`${founder.name}-${index}`}
                className="sticky top-[var(--stack-top)] md:static"
                style={{ "--stack-top": `calc(7rem + ${index * 20}px)` }}
              >
                <Reveal delay={index * 120}>
                  <article
                    tabIndex={0}
                    aria-label={`${founder.name}, ${founder.role}`}
                    aria-expanded={isOpen}
                    onClick={(event) => {
                      if (event.target.closest("a, button")) return;
                      setOpenFounder(isOpen ? null : index);
                    }}
                    onKeyDown={(event) => {
                      if (event.target !== event.currentTarget) return;
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setOpenFounder(isOpen ? null : index);
                      }
                    }}
                    className="group relative h-[78svh] max-h-[640px] min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(160deg,#1e3a8a_0%,#14246b_40%,#0a1240_100%)] shadow-2xl shadow-brand-950/30 outline-none transition duration-300 ease-out focus-visible:ring-2 focus-visible:ring-bronze-400 md:aspect-[3/4] md:h-auto md:max-h-none md:min-h-0 md:shadow-sm md:hover:-translate-y-1 md:hover:shadow-xl md:hover:shadow-brand-900/20 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    {/* Background gradient layers (visible behind the cutout) */}
                    <div
                      className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_28%,rgba(99,132,255,.55),transparent_70%)]"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(212,162,76,.22),transparent_45%)]"
                      aria-hidden="true"
                    />
                    <Rings />
  
                    {/* Cutout photo or placeholder */}
                    {founder.image ? (
                      <Image
                        src={founder.image}
                        alt={`${founder.name}, ${founder.role} at SealForge`}
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        className="absolute inset-0 h-full w-full object-cover object-top drop-shadow-[0_20px_30px_rgba(5,10,40,.45)] transition duration-700 md:group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center pb-16">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/25 bg-brand-800 text-white shadow-lg shadow-brand-950/20">
                          <UserRound size={48} strokeWidth={1.2} aria-hidden="true" />
                        </div>
                      </div>
                    )}
  
                    {/* Bottom fade so text stays readable */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#070d33]/95 via-[#070d33]/50 to-transparent"
                      aria-hidden="true"
                    />
  
                    {/* Name stays visible on mobile while the details are closed. */}
                    {!isOpen && (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setOpenFounder(index);
                        }}
                        aria-expanded={false}
                        aria-label={`Show details for ${founder.name}`}
                        className="absolute inset-0 z-10 flex cursor-pointer items-end justify-between p-5 text-left md:hidden"
                      >
                        <span>
                          <span className="block text-xl font-semibold tracking-tight text-white">
                            {founder.name}
                          </span>
                          <span className="mt-1 block font-mono text-[10px] font-medium uppercase tracking-[.16em] text-steel-300">
                            {founder.role}
                          </span>
                        </span>
                        <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-brand-950/35 text-white backdrop-blur-sm">
                          <Plus size={16} aria-hidden="true" />
                        </span>
                      </button>
                    )}
  
                    {/* Desktop default state: name + role */}
                    <div className="absolute inset-x-0 bottom-0 hidden p-6 transition-all duration-300 md:block md:group-hover:translate-y-2 md:group-hover:opacity-0 md:group-focus-within:opacity-0 motion-reduce:transition-none">
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {founder.name}
                      </h3>
                      <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[.16em] text-steel-300">
                        {founder.role}
                      </p>
                    </div>
  
                    {/* Mobile details open on tap; desktop details open on hover or focus. */}
                    <div
                      className={`absolute inset-x-0 bottom-0 overflow-hidden rounded-t-2xl border-t border-white/20 bg-gradient-to-b from-[#2a46b8]/90 via-[#18297a]/95 to-[#0c1650]/[.98] p-5 shadow-[0_-12px_40px_rgba(5,10,40,.45)] backdrop-blur-xl transition-transform duration-500 ease-out sm:p-6 motion-reduce:transition-none ${
                        isOpen ? "translate-y-0" : "translate-y-full"
                      } md:translate-y-full md:group-hover:translate-y-0 md:group-focus-within:translate-y-0`}
                    >
                      {/* soft glows instead of the grid */}
                      <div
                        className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-bronze-500/25 blur-3xl"
                        aria-hidden="true"
                      />
                      <div
                        className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl"
                        aria-hidden="true"
                      />
                      {/* bronze accent line */}
                      <span
                        className="absolute left-5 top-0 h-[3px] w-12 rounded-b bg-bronze-500 sm:left-6"
                        aria-hidden="true"
                      />
  
                      <div className="relative mt-2">
                        <h3 className="text-xl font-semibold tracking-tight text-white">
                          {founder.name}
                        </h3>
                        <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[.16em] text-bronze-300">
                          {founder.role} Ã‚Â· {COMPANY}
                        </p>
  
                        <p className="mt-3 text-[13px] leading-6 text-steel-200">
                          {founder.bio}
                        </p>
  
                        <div className="mt-4 space-y-2.5 border-t border-white/15 pt-4">
                          <ContactRow
                            icon={Phone}
                            href={`tel:${founder.phone.replace(/\s/g, "")}`}
                          >
                            {founder.phone}
                          </ContactRow>
                          <ContactRow icon={Mail} href={`mailto:${founder.email}`}>
                            {founder.email}
                          </ContactRow>
                          <ContactRow icon={MapPin}>{founder.address}</ContactRow>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
