
import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import AboutHero from '@/components/About/AboutHero';
import MissionVision from '@/components/About/MissionVision';
import History from '@/components/About/History';
import Team from '@/components/About/Team';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHero />
      <MissionVision />
      <History />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
