import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
      </main>
    </>
  );
}
