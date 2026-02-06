import React from "react";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">BCHOD Zambia</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gray-100 text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Engineering Excellence for Zambia’s Future</h2>
        <p className="text-lg text-gray-600 mb-6">
          Delivering innovative solutions in civil, structural, and electrical engineering.
        </p>
        <a href="#services" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
          Explore Our Services
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-8">
        <Services />
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-8 bg-gray-50">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} BCHOD Zambia. All rights reserved.</p>
        <p>Member of the Engineering Institution of Zambia (EIZ)</p>
      </footer>
    </div>
  );
}

export default App;
