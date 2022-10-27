import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Links from "./components/sections/Links";
import Navbar from "./components/Navbar";

import bg from "./assets/shapes/group14.png";

export default function Home() {
  return (
    <div
      className="font-['Space_Grotesk']"
      style={{ background: `url(${bg}) repeat-y`, backgroundSize: "cover", backgroundPositionY: "128px" }}
    >
      <Navbar />
      <Layout>
        <Hero />
        <About />
        <Skills id="skills" />
        <Projects id="projects" />
        <Links id="links" />
      </Layout>
    </div>
  );
}
