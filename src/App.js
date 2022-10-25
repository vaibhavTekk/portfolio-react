import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="font-['JetBrains_Mono']">
      <Layout>
        <Hero />
        <About id="about" />
        <Skills />
        <Projects></Projects>
      </Layout>
    </div>
  );
}
