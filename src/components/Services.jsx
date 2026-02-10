import React from "react";

const services = [
  {
    id: 1,
    title: "Project Management",
    description:
      "End-to-end project planning, coordination and delivery to keep scope, cost and schedule aligned.",
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
    description:
      "Infrastructure design & site works — roads, drainage, earthworks, and public utilities.",
    gradient: "from-primary to-purple-700",
    accent: "bg-purple-700",
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
    description:
      "HVAC, plant equipment, and mechanical systems design for reliable operation and efficiency.",
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
    description:
      "Robust structural solutions for buildings and bridges — analysis, detailing and inspections.",
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
    description:
      "Power systems, distribution design and electrical safety to keep projects energized and compliant.",
    gradient: "from-accent to-lime-500",
    accent: "bg-accent",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
      <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Technical expertise with a modern, practical approach — blending professionalism with a cheeky spark.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article
              key={s.id}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`h-36 flex items-center justify-center ${s.gradient} text-white`}>
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-black/20">
                  <div className="text-white">{s.icon}</div>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="text-gray-600 flex-grow">{s.description}</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                    <span className={`inline-block w-3 h-3 rounded-full ${s.accent}`} />
                    Technical Service
                  </span>
                  <button className="text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 hover:opacity-95 transition">
                    Learn more
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl overflow-hidden">
          <div className="h-36 bg-gradient-to-r from-black via-gray-800 to-gray-700 flex items-center justify-between px-6 text-white">
            <div>
              <h4 className="text-lg font-bold">Looking for a tailored solution?</h4>
              <p className="text-sm text-gray-200">Contact our specialists for a free consultation and feasibility review.</p>
            </div>
            <a href="/contact" className="inline-block bg-accent text-black font-semibold px-5 py-2 rounded-md">Get a Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}