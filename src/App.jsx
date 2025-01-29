import About from "./components/About";
import Hero from "./components/hero";
import "./index.css";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
}

export default App;
