import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutFounders from "@/components/about/AboutFounders";
import AboutProducts from "@/components/about/AboutProducts";
import AboutProcess from "@/components/about/AboutProcess";
import AboutClosing from "@/components/about/AboutClosing";

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutHero />
      <AboutStory />
      <AboutFounders />
      <AboutProducts />
      <AboutProcess />
      <AboutClosing />
    </div>
  );
}
