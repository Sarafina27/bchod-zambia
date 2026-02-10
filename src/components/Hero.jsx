import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

function Hero() {
  return (
    <motion.section className="relative text-white overflow-hidden min-h-[80vh] py-48 md:py-56 flex items-center"
      initial="hidden" animate="show" variants={container}
      >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://bchodzimbabwe.co.zw/wp-content/uploads/2021/07/webhome2_128.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl -mr-40 -mt-40" />
      <div className="relative max-container py-28 md:py-40 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Practical engineering solutions across civil, structural, mechanical and electrical disciplines — delivered with precision.
          </p>
          <div className="flex justify-center gap-4">
           
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export { Hero };
export default Hero;