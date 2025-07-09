
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Users, Trophy, Code, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Research & Academic",
      icon: Brain,
      skills: ["Student Engagement", "Collaborative Learning", "Leadership and Mentorship"],
      color: "primary"
    },
    {
      title: "Technical Interests", 
      icon: Cpu,
      skills: ["Machine Learning", "Deep Learning", "Computer Vision"],
      color: "secondary"
    },
    {
      title: "Programming & Development",
      icon: Code,
      skills: ["Full-Stack Development", "Web Applications", "Software Engineering"],
      color: "accent"
    }
  ];

  const technicalTools = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "PHP", level: 85 },
    { name: "Python", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Laravel", level: 70 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive skill set spanning research, teaching, and technical development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">{category.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-accent/30 px-4 py-3 rounded-lg text-center font-medium hover:bg-accent/50 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="p-8">
          <CardHeader className="text-center mb-8">
            <CardTitle className="font-playfair text-2xl flex items-center justify-center">
              <Database className="h-6 w-6 mr-3" />
              Technical Proficiency
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalTools.map((tool, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{tool.name}</span>
                    <span className="text-sm text-muted-foreground">{tool.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/5 to-accent/10">
            <CardContent className="p-0">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">3.92</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">Teaching</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div className="text-center">
                  <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">Research</div>
                  <div className="text-sm text-muted-foreground">Focus</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
