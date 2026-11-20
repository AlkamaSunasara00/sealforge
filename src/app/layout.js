import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SealForge | Precision Industrial Seals, Bearings & Process Pumps",
  description:
    "SealForge manufactures precision-engineered mechanical seals (balanced, unbalanced, cartridge, OEM replacement), water-lubricated cutlass bearings, and industrial process pumps. Precision. Performance. Trust.",
  keywords: [
    "industrial mechanical seals",
    "balanced mechanical seal",
    "cartridge seal",
    "cutlass bearings",
    "water lubricated sleeve bearing",
    "chemical process pumps",
    "overhung centrifugal pump",
    "polymer lined pump",
    "SealForge Mumbai",
    "API 682 seals",
    "ISO 5199 pumps"
  ],
  authors: [{ name: "SealForge Engineering" }],
  icons: {
    icon: "/sealforge-white.svg",
    shortcut: "/sealforge-white.svg",
    apple: "/sealforge-white.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-steel-900 selection:bg-brand-700 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
