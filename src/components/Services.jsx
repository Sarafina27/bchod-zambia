import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Project Management",
    description: "End-to-end project planning, coordination and delivery to keep scope, cost and schedule aligned.",
    fullDescription: "Our project management services ensure seamless coordination across all phases of your project. We manage timelines, budgets, resources, and stakeholder communication to deliver results on time and within scope.",
    gradient: "from-black via-gray-700 to-primary",
    accent: "bg-primary",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Civil Engineering",
    description: "Infrastructure design & site works — roads, drainage, earthworks, and public utilities.",
    fullDescription: "We design and oversee civil infrastructure projects including highways, drainage systems, earthworks, and public utilities. Our expertise spans feasibility studies, detailed design, and construction supervision.",
    gradient: "from-primary to-purple-700",
    accent: "bg-primary",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 20v-8l8-4 8 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 10v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 10v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Mechanical Engineering",
    description: "HVAC, plant equipment, and mechanical systems design for reliable operation and efficiency.",
    fullDescription: "From HVAC system design to mechanical plant and equipment installation, we provide comprehensive mechanical engineering solutions. Our focus is on efficiency, reliability, and cost-effectiveness.",
    gradient: "from-secondary to-teal-600",
    accent: "bg-secondary",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Structural Engineering",
    description: "Robust structural solutions for buildings and bridges — analysis, detailing and inspections.",
    fullDescription: "Our structural engineers design safe, cost-effective solutions for buildings and bridges. We conduct detailed analysis, create construction documents, and provide on-site supervision to ensure compliance and quality.",
    gradient: "from-indigo-600 to-primary",
    accent: "bg-indigo-600",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Electrical Engineering",
    description: "Power systems, distribution design and electrical safety to keep projects energized and compliant.",
    fullDescription: "We design electrical systems for power distribution, lighting, fire safety, and communications. Our solutions meet all regulatory standards and best practices for safety and efficiency.",
    gradient: "from-accent to-lime-500",
    accent: "bg-accent",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// Extended array for seamless infinite scroll
const extendedServices = [...services, ...services, ...services];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="pt-40 pb-20 bg-white relative z-10 overflow-hidden">
          <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Scroll to explore • Click to learn more</p>
          </div>
        </div>

        {/* Infinite scrolling container */}
        <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide w-full">
          <motion.div 
            className="flex gap-4 min-w-max"
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {extendedServices.map((s, idx) => (
              <motion.div
                key={`${s.id}-${idx}`}
                className="flex-shrink-0 w-80 h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300 bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedService(s)}
              >
                {/* Icon at top */}
                <div className="h-32 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white text-gray-900">
                    {s.icon}
                  </div>
                </div>

                {/* Content - centered title only */}
                <div className="h-40 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {s.title}
                  </h3>
                  <div className={`mt-4 h-1 w-8 rounded-full ${s.accent}`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal Popup - Cleaner */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient background */}
              <div className={`bg-gradient-to-br ${selectedService.gradient} p-8 relative`}>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full text-white transition"
                >
                  ×
                </button>
                
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white/25 text-white mb-4">
                  {selectedService.icon}
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {selectedService.title}
                </h2>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedService.fullDescription}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition"
                  >
                    Close
                  </button>
                  <a
                    href="/contact"
                    className="flex-1 px-4 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide scrollbar styling */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}