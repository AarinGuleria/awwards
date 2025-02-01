import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default App;
