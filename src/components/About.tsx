
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Professional Summary</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I am Mithun Halder, hopefully a soon-to-be graduate with a B.Sc in CSE from United International University, 
                      where I majored in Data Science. I have a strong academic foundation complemented by practical research experience, 
                      including the publication of two peer-reviewed papers at international conferences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-4">Research Interests</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Science'].map((interest) => (
                    <div key={interest} className="bg-accent/50 px-4 py-2 rounded-lg text-center font-medium">
                      {interest}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-4">Core Skills</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Student Engagement',
                    'Collaborative Learning', 
                    'Leadership and Mentorship'
                  ].map((skill) => (
                    <div key={skill} className="bg-primary/10 px-4 py-2 rounded-lg font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">01317801458</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">mhalder20041@bscse.uiu.ac.bd</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">House no: 150, Uttar Bhashantek, Dhaka 1206</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-primary/5 to-accent/20">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-4">Academic Goals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My research interests encompass machine learning, deep learning, and computer vision. 
                  I am passionate about advancing the field through innovative research and dedicated teaching, 
                  and I am eager to contribute to a dynamic academic environment as an instructor.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  My goal is to inspire and educate the next generation of computer scientists while 
                  continuing to explore cutting-edge research.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
