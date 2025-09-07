import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import IntroSection from "./components/IntroSection";
import FeaturesSection from "./components/FeaturesSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import StatsSection from "./components/StatsSection";
import ProcessSection from "./components/ProcessSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <IntroSection />
      <FeaturesSection />
      <BeforeAfterSection />
      <StatsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
