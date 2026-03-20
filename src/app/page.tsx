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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "lil leaps",
  operatingSystem: "iOS",
  applicationCategory: "PhotographyApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free with in-app subscription. $9.99/year for premium.",
  },
  description:
    "Record a 5-second video of your baby once a week. lil leaps stitches them into a beautiful growth timelapse you'll treasure forever.",
  url: "https://lilleaps.com",
  downloadUrl: "https://apps.apple.com/us/app/lil-leaps/id6746146083",
  screenshot: "https://lilleaps.com/app-screenshot.jpg",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
