import React from "react";
import { ContactForm } from "../components/ContactForm";

function Contact() {
  return (
    <section className="py-32 bg-white">
      <div className="max-container">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Get in touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-gray-700">
              Reach out for project enquiries, consultancy, or a feasibility review. We'll respond within 2 business days.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">Lusaka, Zambia</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@bchodzambia.com</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Contact };
export default Contact;