
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FlaskConical, Brain, Shield, Recycle, Calendar, MapPin } from 'lucide-react';

const Research = () => {
  const researchProjects = [
    {
      title: "Clustering as a Catalyst for Big Data Classification (CC-BC)",
      duration: "October 2023 – December 2023",
      course: "Machine learning",
      description: "Developed a novel clustering method to enhance big data classification, leading to significant improvements in predictive model accuracy",
      icon: Brain,
      institution: "United International University"
    },
    {
      title: "PTIN: Enriching Pedestrian Safety with an LSTM-GRU-Transformer Based Trajectory Imputation System for Autonomous Vehicles",
      duration: "October 2023 – December 2023", 
      course: "FYDP-1",
      description: "Created an advanced trajectory imputation system combining LSTM, GRU, and Transformer models to improve pedestrian safety",
      icon: Shield,
      institution: "United International University"
    },
    {
      title: "Structured Defense: GAN-Based Approaches to Enhance Attack Detection in Imbalanced Edge IoT Environments",
      duration: "October 2023 – January 2023",
      course: "Computer Security",
      description: "Investigated GANs and SMOTE for mitigating dataset imbalance in IoT security, enhancing model accuracy in attack detection",
      icon: Shield,
      institution: "United International University"
    },
    {
      title: "PCB Component Detection for Enhanced E-Waste Recycling",
      duration: "February 2024 – May 2024",
      course: "Green Computing", 
      description: "Developed an Automated Electronic Component Identification System utilizing YOLOv3, YOLOv5, YOLOv8, and YOLOv9 deep learning models to detect Electronic Components(ECs) from Printed Circuit Boards(PCBs)",
      icon: Recycle,
      institution: "United International University"
    }
  ];

  return (
    <section id="research" className="py-20">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Other Research
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive research experience across multiple domains of computer science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {researchProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-playfair text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{project.course}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{project.institution}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/5 to-accent/10">
            <CardContent className="p-0">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <FlaskConical className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Research Projects</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div className="text-center">
                  <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">ML/AI</div>
                  <div className="text-sm text-muted-foreground">Focus Areas</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div className="text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">Security</div>
                  <div className="text-sm text-muted-foreground">Specialization</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Research;
