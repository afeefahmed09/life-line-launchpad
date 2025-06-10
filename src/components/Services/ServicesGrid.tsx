
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Brain, Eye, Stethoscope, Activity, Users } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced cardiac procedures and treatments for all cardiovascular conditions.',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care for brain and nervous system disorders with cutting-edge diagnostic tools.',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries and vision correction.',
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare services for patients of all ages with comprehensive medical care.',
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response team and critical care specialists.',
    },
    {
      icon: Users,
      title: 'Pediatrics',
      description: 'Specialized healthcare services designed specifically for children and adolescents.',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Medical Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of medical services ensures that all your healthcare 
            needs are met under one roof with the highest standards of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
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
