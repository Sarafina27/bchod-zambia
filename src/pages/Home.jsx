import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
    </div>
  );
}

export { Home };
export default Home;