import About from "@/components/sections/About";
import ContactSection from "@/components/sections/ContactSection";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Page() {
  return (
    <>
      <Navbar scrollEffect />
      {/* TODO: Fix all border radiuses */}
      <Hero />
      <Skills />
      <About />
      <Projects />
      <ContactSection />
      {/* <Match /> */}
    </>
  );
}
