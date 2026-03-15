import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import HowItWorks from "@/components/HowItWorks";

import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <StatsBanner />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Timeline />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
