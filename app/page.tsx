import MouseBlobs from "./components/MouseBlobs";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Founders from "./components/Founders";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <MouseBlobs />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <Founders />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
