import React from "react";

const projects = [
  { id:1, title: "Lusaka Highway Extension", desc: "Major infrastructure project spanning 50+ km", tag: "Civil", image: "from-primary to-purple-600" },
  { id:2, title: "Commercial District Development", desc: "Multi-purpose commercial complex", tag: "Structural", image: "from-secondary to-teal-600" },
  { id:3, title: "National Power Grid Upgrade", desc: "Electrical systems for national distribution", tag: "Electrical", image: "from-accent to-lime-500" },
];

export default function Projects() {
  return (
        <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Selected works demonstrating our approach and delivery capability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={p.id} className="group rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <div className={`h-36 bg-gradient-to-br ${p.image} group-hover:scale-105 transition-transform duration-300`} />
              <div className="p-4">
                <span className="inline-block text-xs font-bold text-white bg-black px-3 py-1 rounded-full mb-2">{p.tag}</span>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}