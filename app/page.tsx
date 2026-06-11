import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import AboutSnippet from "@/components/about-snippet";
import Services from "@/components/services";
import FeaturedSlider from "@/components/slider";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <AboutSnippet />
        <Services />
        <FeaturedSlider />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}