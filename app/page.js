import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import IntroSection from "./components/IntroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <IntroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
