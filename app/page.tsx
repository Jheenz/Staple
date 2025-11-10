import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Showcase from "./components/showcase";
import VideoSection from "./components/vidsec";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Showcase />
        <VideoSection />
        <Footer />
      </main>
    </>
  );
}
