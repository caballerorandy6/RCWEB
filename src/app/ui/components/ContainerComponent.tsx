"use client";

import Hero from "../home/hero/Hero";
import Experience from "../experience/Experience";
import Projects from "@/app/ui/projects/Projects";
import About from "@/app/ui/about/About";

const ContainerComponent = () => {
  return (
    <main className="lg:w-7/12 mx-auto">
      <Hero />
      <Experience />
      <Projects />
      <About />
    </main>
  );
};

export default ContainerComponent;
