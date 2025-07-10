import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
