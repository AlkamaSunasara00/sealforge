import Link from "next/link";
import Image from "next/image";
import { FileDown, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { cataloguesData } from "@/data/company";

export const metadata = {
  title: "Product Catalogues | SealForge Engineering",
  description: "Download official SealForge PDF catalogues for Mechanical Seals, Cutlass Bearings, and Industrial Process Pumps.",
};

export default function CataloguePage() {
  return (
    <div className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-900 text-xs font-mono font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-brand-700" />
            <span>Official Technical Literature</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            SealForge Product Catalogues
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Download our complete technical engineering publications containing dimensional tables, material matrices, API flush piping plans, and application data sheets.
          </p>
        </div>

        {/* Catalogues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cataloguesData.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[3/4] w-full bg-[#0a1329] border-b-2 border-slate-200">
                  <Image
                    src={cat.coverImg}
                    alt={cat.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md bg-slate-900/90 text-white text-xs font-mono font-bold border border-slate-700">
                      {cat.pages} Pages
                    </span>
                    <span className="px-3 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-mono font-extrabold shadow-sm">
                      {cat.size}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block">
                    {cat.series}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950">{cat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={cat.pdfPath}
                  download
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 shadow-md transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF ({cat.size})</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="pt-8 border-t border-slate-200 flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900"
          >
            ← Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-brand-900"
          >
            Contact Engineering Team →
          </Link>
        </div>
      </div>
    </div>
  );
}

