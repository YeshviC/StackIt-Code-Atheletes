import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HeroSectionHeader from "./components/HeroSectionHeader";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-20 px-4">
        <HeroSection />
        <LatestQuestions />
        <TopContributers />
      </main>

      <Footer />
    </>
  );
}

