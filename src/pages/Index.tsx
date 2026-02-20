import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import CommunityStories from "@/components/CommunityStories";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { TribalBand } from "@/components/TribalPatterns";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TribalBand />
        <Products />
        <TribalBand />
        <About />
        <CommunityStories />
        <TribalBand />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
