
import React from 'react';

const ServicesHero = () => {
  return (
    <section className="hero-gradient text-white pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-medical-yellow/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-medical-pink/10 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Our 
            <span className="bg-gradient-to-r from-medical-yellow to-medical-orange bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Comprehensive healthcare services with state-of-the-art technology 
            and experienced medical professionals dedicated to your wellbeing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
