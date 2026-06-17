import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import HowToUse from "./components/HowToUse/HowToUse";
import VideoSection from "./components/VideoSection/VideoSection";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <HowToUse />
      <VideoSection />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;