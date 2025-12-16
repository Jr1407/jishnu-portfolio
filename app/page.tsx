import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievents";
import Address from "../components/Address";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Achievements />
      <Address />
      <Contact />
    </main>
  );
}
