"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileDown,
  BookOpen,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { cataloguesData } from "@/data/company";

export default function CataloguesSection() {
  const [activeModalCat, setActiveModalCat] = useState(null);
  const [modalPageIndex, setModalPageIndex] = useState(0);

  const openPreview = (cat) => {
    setActiveModalCat(cat);
    setModalPageIndex(0);
  };

  const closePreview = () => {
    setActiveModalCat(null);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200" id="catalogues">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-900 text-xs font-mono font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official Engineering Publications</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Download SealForge Catalogues
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Direct access to our complete technical references, dimensional tables, API flush plans, and material compatibility matrices.
          </p>
        </div>

        {/* 3 Catalogues Grid: Spacious & High Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cataloguesData.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-[3/4] w-full bg-[#0a1329] overflow-hidden border-b-2 border-slate-200">
                  <Image
                    src={cat.coverImg}
                    alt={cat.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1329] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md bg-slate-900/90 text-white text-xs font-mono font-bold border border-slate-700">
                      {cat.pages} Pages
                    </span>
                    <span className="px-3 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-mono font-extrabold shadow-sm">
                      {cat.size}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                      {cat.series}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-200 space-y-2">
                    <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-800">
                      {cat.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                <a
                  href={cat.pdfPath}
                  download
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 shadow-md transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Full PDF ({cat.size})</span>
                </a>
                <button
                  type="button"
                  onClick={() => openPreview(cat)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-slate-700 hover:text-brand-900 hover:bg-slate-100 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Catalogue Online</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Contrast Interactive Preview Modal */}
      {activeModalCat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border-2 border-slate-200 flex flex-col max-h-[92vh]">
            <div className="px-6 py-4 bg-[#091124] text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Page {modalPageIndex + 1} of {activeModalCat.previewPages.length}
                </span>
                <h3 className="text-base font-bold text-white">{activeModalCat.title}</h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activeModalCat.pdfPath}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={closePreview}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 bg-slate-900 overflow-auto flex items-center justify-center p-4 min-h-[420px]">
              <div className="relative w-full max-w-2xl aspect-[3/4] shadow-2xl rounded-lg overflow-hidden bg-white">
                <Image
                  src={activeModalCat.previewPages[modalPageIndex]}
                  alt={`Preview page ${modalPageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 750px"
                />
              </div>

              {activeModalCat.previewPages.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setModalPageIndex(
                        (prev) => (prev - 1 + activeModalCat.previewPages.length) % activeModalCat.previewPages.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white shadow-lg"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setModalPageIndex((prev) => (prev + 1) % activeModalCat.previewPages.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white shadow-lg"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-center gap-3 overflow-x-auto">
              {activeModalCat.previewPages.map((page, i) => (
                <button
                  key={i}
                  onClick={() => setModalPageIndex(i)}
                  className={`relative w-12 h-16 rounded border-2 overflow-hidden transition-all ${
                    modalPageIndex === i ? "border-brand-700 scale-105 shadow-md" : "border-slate-300 opacity-60"
                  }`}
                >
                  <Image src={page} alt={`Thumb ${i + 1}`} fill className="object-cover" sizes="48px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
