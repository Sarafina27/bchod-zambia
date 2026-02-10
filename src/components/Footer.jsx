import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Tailored Solution CTA */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-black via-gray-800 to-gray-700 rounded-xl p-8 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Looking for a tailored solution?</h3>
              <p className="text-sm text-gray-300 mt-1">Contact our specialists for a free consultation and feasibility review.</p>
            </div>
            <a href="/contact" className="inline-block bg-accent text-black font-semibold px-6 py-3 rounded-lg whitespace-nowrap">Get a Consultation</a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary" />
            <h3 className="text-white font-bold">BCHOD Zambia</h3>
          </div>
          <p className="text-sm text-gray-400">Engineering excellence for Zambia's future.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Civil Engineering</li>
            <li>Structural Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Electrical Engineering</li>
            <li>Project Management</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">Lusaka, Zambia</p>
          <p className="text-sm text-gray-400">info@bchodzambia.com</p>
          <p className="text-sm text-gray-400">+260 XXX XXX XXX</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {year} BCHOD Zambia. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;