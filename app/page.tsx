import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Ambient glow — barely visible, adds depth to the dark void */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.035) 0%, transparent 70%)",
        }}
      />

      <Navigation />
      <Hero />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
