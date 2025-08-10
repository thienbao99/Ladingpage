import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BeforeAfter from "./components/BeforeAfter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <BeforeAfter /> 
      <Footer />
    </main>
  );
}
