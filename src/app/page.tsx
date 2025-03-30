import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { CarouselProvider } from "@/components/providers/CarouselProvider";

export default function Home() {
  return (
    <main className="bg-dark text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Services />
      <CarouselProvider>
        <Testimonials />
      </CarouselProvider>
      <CTA />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
