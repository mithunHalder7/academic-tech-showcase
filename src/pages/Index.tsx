
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Publications from '@/components/Publications';
import Research from '@/components/Research';
import SoftwareProjects from '@/components/SoftwareProjects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Publications />
        <Research />
        <SoftwareProjects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
