
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Brain, Eye, Stethoscope, Activity, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced cardiac procedures and treatments.',
      color: 'bg-gradient-to-r from-medical-pink to-medical-red',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care for brain and nervous system disorders.',
      color: 'bg-gradient-to-r from-medical-purple to-primary',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
      color: 'bg-gradient-to-r from-primary to-medical-teal',
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare services for patients of all ages and conditions.',
      color: 'bg-gradient-to-r from-medical-green to-medical-teal',
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response and critical care.',
      color: 'bg-gradient-to-r from-medical-orange to-medical-yellow',
    },
    {
      icon: Users,
      title: 'Pediatrics',
      description: 'Specialized healthcare services designed specifically for children.',
      color: 'bg-gradient-to-r from-medical-teal to-medical-green',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-medical-purple bg-clip-text text-transparent mb-6">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive healthcare services with state-of-the-art technology 
            and experienced medical professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-lg group">
              <CardHeader>
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
