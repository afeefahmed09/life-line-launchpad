
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '50+', label: 'Expert Doctors', color: 'from-medical-pink to-medical-red' },
    { number: '10,000+', label: 'Happy Patients', color: 'from-medical-green to-medical-teal' },
    { number: '25+', label: 'Years Experience', color: 'from-medical-purple to-primary' },
    { number: '24/7', label: 'Emergency Service', color: 'from-medical-orange to-medical-yellow' },
  ];

  return (
    <section className="medical-gradient text-white section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover-lift">
              <div className={`inline-block p-6 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
              </div>
              <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
