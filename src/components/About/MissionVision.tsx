
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Eye, Users } from 'lucide-react';

const MissionVision = () => {
  const values = [
    {
      icon: Heart,
      title: 'Our Mission',
      description: 'To provide compassionate, high-quality healthcare services that improve the lives of our patients and strengthen our community.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading healthcare provider in the region, recognized for excellence in patient care, medical innovation, and community service.'
    },
    {
      icon: Users,
      title: 'Our Values',
      description: 'Compassion, Excellence, Integrity, Innovation, and Respect guide everything we do in our commitment to patient care.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
