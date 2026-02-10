import React from "react";

function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-container">
        <h2 className="section-title">About BCHOD Zambia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg"></div>
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              BCHOD Zambia is a leading consulting engineering firm committed to delivering innovative solutions in civil, structural, and electrical engineering.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With years of experience in the industry, we provide comprehensive engineering services to government, private sector, and international clients.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center p-6 bg-gradient-to-br from-primary to-purple-700 text-white rounded-xl shadow-md">
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="font-semibold">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-secondary to-teal-700 text-white rounded-xl shadow-md">
                <h3 className="text-4xl font-bold mb-2">100+</h3>
                <p className="font-semibold">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
export default About;