
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Brain, Eye, Stethoscope, Activity, Users } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced cardiac procedures and treatments for all cardiovascular conditions.',
      gradient: 'card-gradient-pink',
      iconBg: 'bg-gradient-to-r from-medical-pink to-medical-red',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care for brain and nervous system disorders with cutting-edge diagnostic tools.',
      gradient: 'card-gradient-purple',
      iconBg: 'bg-gradient-to-r from-medical-purple to-primary',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries and vision correction.',
      gradient: 'card-gradient-blue',
      iconBg: 'bg-gradient-to-r from-primary to-medical-teal',
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare services for patients of all ages with comprehensive medical care.',
      gradient: 'card-gradient-green',
      iconBg: 'bg-gradient-to-r from-medical-green to-medical-teal',
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response team and critical care specialists.',
      gradient: 'card-gradient-orange',
      iconBg: 'bg-gradient-to-r from-medical-orange to-medical-yellow',
    },
    {
      icon: Users,
      title: 'Pediatrics',
      description: 'Specialized healthcare services designed specifically for children and adolescents.',
      gradient: 'card-gradient-teal',
      iconBg: 'bg-gradient-to-r from-medical-teal to-medical-green',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-medical-purple bg-clip-text text-transparent mb-6">
            Complete Medical Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of medical services ensures that all your healthcare 
            needs are met under one roof with the highest standards of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`${service.gradient} border-0 hover-lift group cursor-pointer`}>
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
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

export default ServicesGrid;
