import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
        <section className="relative bg-gradient-to-br from-brandBlack via-brandGray to-black text-white overflow-hidden min-h-[80vh] py-48 md:py-56">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl -mr-40 -mt-40"></div>
      <div className="relative max-container py-28 md:py-40">
        <div className="max-w-3xl mx-auto text-center animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Practical engineering solutions across civil, structural, mechanical and electrical disciplines — delivered with precision.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn-primary">Start a Project</Link>
            <Link to="/services" className="px-6 py-2 rounded-lg border border-gray-300 text-white hover:border-primary transition">Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
export default Hero;