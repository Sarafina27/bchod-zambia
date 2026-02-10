import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    id: 1, 
    title: "Lusaka Highway Extension", 
    desc: "Major infrastructure project spanning 50+ km with modern design standards", 
    tag: "Civil Engineering",
    image: "from-primary to-purple-600",
    fullDesc: "Comprehensive highway design and construction management across Lusaka metropolitan area."
  },
  { 
    id: 2, 
    title: "Commercial District Development", 
    desc: "Multi-purpose commercial complex with cutting-edge structural engineering", 
    tag: "Structural Engineering",
    image: "from-secondary to-teal-600",
    fullDesc: "Integrated commercial and office space design with advanced structural systems."
  },
  { 
    id: 3, 
    title: "National Power Grid Upgrade", 
    desc: "Electrical systems for national distribution network", 
    tag: "Electrical Engineering",
    image: "from-accent to-lime-500",
    fullDesc: "Complete electrical infrastructure upgrade for national power distribution."
  },
];

export default function Projects() {
  return (
    <section className="py-48 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Showcasing our expertise in delivering world-class engineering solutions across diverse sectors.</p>
        </div>

        {/* Full-width projects grid */}
        <div className="space-y-6 md:space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
            >
              {/* Image Background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${p.image} group-hover:scale-110 transition-transform duration-700`}
              />

              {/* Dark overlay that intensifies on hover */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

              {/* Content container */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-10">
                {/* Tag */}
                <motion.span 
                  className="inline-block text-sm font-bold text-white bg-primary px-4 py-2 rounded-lg mb-4 w-fit"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 + 0.2 }}
                >
                  {p.tag}
                </motion.span>

                {/* Title */}
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-white mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 + 0.1 }}
                >
                  {p.title}
                </motion.h3>

                {/* Description - appears on hover */}
                <motion.p 
                  className="text-gray-200 text-lg line-clamp-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 + 0.15 }}
                >
                  {p.desc}
                </motion.p>

                {/* Learn more link - appears on hover */}
                <motion.div 
                  className="mt-6 flex items-center gap-2 group/link cursor-pointer"
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 + 0.2 }}
                >
                  <span className="text-white font-semibold group-hover/link:text-accent transition-colors">Learn More</span>
                  <span className="text-white group-hover/link:translate-x-2 transition-transform">→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}