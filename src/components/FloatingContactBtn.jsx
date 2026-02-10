import React, { useState } from "react";
import { Link } from "react-router-dom";

function FloatingContactBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 bg-white rounded-2xl shadow-2xl p-6 mb-4 animate-fadeIn border border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-light"
          >
            ×
          </button>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Contact</h3>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Have a question about our services? We're here to help. Send us a message or visit our contact page.
          </p>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Contact Page
          </Link>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-2xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center text-3xl hover:scale-110 flex-shrink-0"
        title="Get in touch"
      >
        💬
      </button>
    </div>
  );
}

export { FloatingContactBtn };
export default FloatingContactBtn;