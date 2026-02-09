import React from "react";
import ContactForm from "../components/ContactForm";


function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
      <p className="text-text mb-4">
        Get in touch with BCHOD Zambia for professional engineering services.
      </p>
      <ContactForm />   {/* pulling in your form here */}
    </section>
  );
}

export default Contact;   // <-- critical line
