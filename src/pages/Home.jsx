import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Hero />
      <Services />
      <Projects />
    </motion.div>
  );
}

export { Home };