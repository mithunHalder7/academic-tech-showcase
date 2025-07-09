
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Sc in CSE",
      institution: "United International University",
      cgpa: "3.92",
      year: "2024",
      major: "Data Science",
      icon: GraduationCap,
      color: "primary"
    },
    {
      degree: "HSC",
      institution: "Government Science College",
      gpa: "4.58",
      year: "Completed",
      icon: Award,
      color: "secondary"
    },
    {
      degree: "SSC",
      institution: "Shaheed Police Smrity School",
      gpa: "5.00",
      year: "Completed",
      icon: Award,
      color: "accent"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Strong academic foundation with excellent performance across all levels of education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <edu.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">{edu.degree}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-3">
                <h3 className="font-semibold text-muted-foreground">{edu.institution}</h3>
                
                {edu.major && (
                  <div className="inline-block bg-accent px-3 py-1 rounded-full text-sm font-medium">
                    Major: {edu.major}
                  </div>
                )}
                
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.year}</span>
                </div>
                
                <div className="pt-2">
                  <div className="text-2xl font-bold text-primary">
                    {edu.cgpa || edu.gpa}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {edu.cgpa ? 'CGPA' : 'GPA'}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-accent/10">
            <CardContent className="p-0">
              <h3 className="font-playfair text-xl font-semibold mb-2">Academic Excellence</h3>
              <p className="text-muted-foreground">
                Consistent high performance throughout academic career with a focus on Data Science and research
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
