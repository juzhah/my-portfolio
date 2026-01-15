import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Match from "@/components/sections/Match";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Page() {
  return (
    <>
      {/* TODO: Fix all border radiuses */}
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Match />
    </>
  );
}
