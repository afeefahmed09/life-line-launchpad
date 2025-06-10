
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Calendar, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white pt-20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-medical-yellow/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-medical-pink/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Health is Our 
              <span className="block bg-gradient-to-r from-medical-yellow to-medical-orange bg-clip-text text-transparent">
                Priority
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Experience world-class healthcare with our team of expert doctors 
              and state-of-the-art medical facilities. We're here for you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-medical-green to-medical-teal text-white hover:from-medical-green/90 hover:to-medical-teal/90 shadow-lg hover-lift">
                  Book Appointment
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary glass-effect hover-lift">
                Emergency Call
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Medical professionals" 
                className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-medical-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl shadow-2xl hover-lift">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-medical-green to-medical-teal p-3 rounded-full pulse-slow">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-600">Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
