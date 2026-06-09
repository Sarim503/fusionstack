import { AboutBar } from "@/components/AboutBar";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutBar />
        <Services />
        <Projects />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
