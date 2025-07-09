
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <Avatar className="w-80 h-80 border-4 border-primary/20 shadow-xl">
                <AvatarImage 
                  src="/lovable-uploads/3b80f3f3-f919-434e-8649-8388d5a9aa6f.png" 
                  alt="Mithun Halder - Computer Science Researcher"
                  className="object-cover"
                />
                <AvatarFallback className="text-6xl font-serif font-bold text-primary">MH</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text">About Me</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>
                I am a dedicated Computer Science researcher and software developer with a passion for 
                advancing the field through innovative research and practical applications. My work spans 
                across multiple domains including Machine Learning, Deep Learning, and Computer Vision.
              </p>
              
              <p>
                With a strong foundation in both theoretical research and practical software development, 
                I bridge the gap between academic research and real-world applications. My experience 
                includes developing cutting-edge solutions, publishing research papers, and mentoring 
                the next generation of computer scientists.
              </p>
              
              <p>
                I am committed to contributing to the advancement of technology through rigorous research, 
                collaborative innovation, and the development of scalable software solutions that address 
                complex real-world challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <h3 className="font-semibold text-primary mb-2">Research Focus</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Machine Learning</li>
                  <li>• Deep Learning</li>
                  <li>• Computer Vision</li>
                  <li>• Natural Language Processing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Technical Skills</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Python, Java, C++</li>
                  <li>• TensorFlow, PyTorch</li>
                  <li>• Research & Development</li>
                  <li>• Academic Writing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
