
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

const CTASection = () => {
  const handleEmergencyCall = () => {
    // Open phone dialer with the emergency number
    window.location.href = 'tel:+15551234567';
  };

  return (
    <section className="hero-gradient text-white section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-medical-yellow/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-medical-pink/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Care of Your 
            <span className="block bg-gradient-to-r from-medical-yellow to-medical-orange bg-clip-text text-transparent">
              Health?
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Don't wait until it's too late. Schedule your appointment today and let our 
            expert medical team take care of your health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-medical-green to-medical-teal text-white hover:from-medical-green/90 hover:to-medical-teal/90 shadow-xl hover-lift px-8 py-4 text-lg">
                Schedule Appointment
                <Calendar className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleEmergencyCall}
              className="border-2 border-white text-white hover:bg-white hover:text-primary glass-effect hover-lift px-8 py-4 text-lg transition-all duration-300"
            >
              Call Now: (555) 123-4567
              <Phone className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
