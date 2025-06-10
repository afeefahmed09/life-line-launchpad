
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '50+', label: 'Expert Doctors' },
    { number: '10,000+', label: 'Happy Patients' },
    { number: '25+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Service' },
  ];

  return (
    <section className="medical-gradient text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
