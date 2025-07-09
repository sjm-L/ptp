import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
        <h1 className="text-5xl text-red-500 font-bold">Tailwind 잘 되나?</h1>
        <p className="text-lg mt-4 text-green-400">
          정상 작동 중이면 이 글은 초록색!
        </p>
      </div>
    </div>
  );
}

export default App;
