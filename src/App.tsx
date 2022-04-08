import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TechStack />
      <Experiences />
      <Footer />
    </>
  )
}