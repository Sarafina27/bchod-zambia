import React from "react";

function Team() {
  const teamMembers = [
    { name: "Eng. John Banda", role: "Structural Engineer" },
    { name: "Eng. Mary Phiri", role: "Electrical Engineer" },
    { name: "Eng. Peter Mwansa", role: "Civil Engineer" },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-primary mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4 bg-secondary text-white rounded-lg shadow">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Team };
export default Team;
