import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";

import Footer from "./components/Footer";
import FloatingContactBtn from "./components/FloatingContactBtn";

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col bg-white text-gray-900">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-secondary" />
              <h1 className="text-xl font-bold tracking-tight">BCHOD Zambia</h1>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink to="/" end className={({isActive}) => isActive ? "text-primary font-semibold" : "hover:text-primary"}>Home</NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? "text-primary font-semibold" : "hover:text-primary"}>About</NavLink>
              <NavLink to="/services" className={({isActive}) => isActive ? "text-primary font-semibold" : "hover:text-primary"}>Services</NavLink>
              <NavLink to="/team" className={({isActive}) => isActive ? "text-primary font-semibold" : "hover:text-primary"}>Team</NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? "text-primary font-semibold" : "hover:text-primary"}>Contact</NavLink>
            </nav>

            <div className="hidden md:block">
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </header>

        <main className="grow pb-48">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <FloatingContactBtn />
        <Footer />
      </div>
    </Router>
  );
}

export { App };
export default App;