
import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import ServicesHero from '@/components/Services/ServicesHero';
import ServicesGrid from '@/components/Services/ServicesGrid';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Services;
