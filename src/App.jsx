
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        {/* Header / Navigation */}
        <header className="bg-primary text-white p-6 shadow sticky top-0 z-50">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold">BCHOD Zambia</h1>
            <nav className="space-x-6">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }
              >
                Our Team
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-secondary text-white text-center py-6 mt-12">
          <p>&copy; {new Date().getFullYear()} BCHOD Zambia. All rights reserved.</p>
          <p className="text-accent">Member of the Engineering Institution of Zambia (EIZ)</p>
        </footer>
      </div>
    </Router>
  );
}
