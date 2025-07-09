
import React from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="section-padding w-full max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Mithun Halder</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Computer Science Researcher & Software Developer
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Passionate about advancing the field of computer science through innovative research and dedicated teaching. 
            Specializing in Machine Learning, Deep Learning, and Computer Vision with a strong foundation in practical software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Download CV
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://www.linkedin.com/in/mithun-halder-824307240/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
