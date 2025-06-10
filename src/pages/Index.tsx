
import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import StatsSection from '@/components/Home/StatsSection';
import DoctorsSection from '@/components/Home/DoctorsSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CTASection from '@/components/Home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
