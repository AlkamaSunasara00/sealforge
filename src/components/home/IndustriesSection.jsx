import {
  Factory,
  Ship,
  Zap,
  Droplets,
  Pill,
  Hammer,
  CheckCircle2
} from "lucide-react";
import { industriesData } from "@/data/company";

const icons = [Factory, Ship, Zap, Droplets, Pill, Hammer];

export default function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200" id="industries">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-900 text-xs font-mono font-bold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5 text-brand-700" />
            <span>Mission-Critical Fluid Environments</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Industries Powered by SealForge
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Our sealing systems and pumps are deployed across core manufacturing facilities to prevent hazardous leaks, volatile emissions, and shaft seizure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-slate-200 p-7 hover:border-brand-500 hover:shadow-xl transition-all duration-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-xl bg-brand-50 border border-brand-200 text-brand-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-950">
                      {ind.stat}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-brand-900 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ISO 5199 & API 682 Engineered</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
