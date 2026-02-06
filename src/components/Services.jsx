import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const querySnapshot = await getDocs(collection(db, "services"));
      setServices(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchServices();
  }, []);

  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <ul className="space-y-2">
        {services.map(service => (
          <li key={service.id} className="border-b pb-2">
            <strong>{service.name}</strong> — {service.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
