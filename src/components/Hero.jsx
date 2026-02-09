import React from "react";

function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')", // place your image in public/hero-bg.jpg
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-6">
          Engineering Excellence for Zambia’s Future
        </h1>
        <p className="text-lg mb-8">
          Delivering innovative solutions in civil, structural, and electrical engineering.
        </p>
        <a
          href="#services"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
}

export default Hero;
