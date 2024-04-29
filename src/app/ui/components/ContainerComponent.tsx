"use client";

import Hero from "../home/hero/Hero";
import Experience from "../experience/Experience";

const ContainerComponent = () => {
  return (
    <main className="w-full mx-auto relative -z-10">
      <Hero />
      <Experience />
    </main>
  );
};

export default ContainerComponent;
