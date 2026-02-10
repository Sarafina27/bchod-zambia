import React from "react";
import ServicesList from "../components/Services";

function Services() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
      <ServicesList />
    </section>
  );
}

export { Services };
export default Services;
