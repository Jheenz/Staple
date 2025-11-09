import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Showcase from "./components/showcase";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Showcase />
      </main>
    </>
  );
}
