
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Star, Users, Building2 } from 'lucide-react';

const SoftwareProjects = () => {
  const projects = [
    {
      title: "Review-Meter: Comprehensive Rating Platform",
      description: "Created a comprehensive rating and review platform for various media",
      tools: ["HTML", "CSS", "Bootstrap", "jQuery", "PHP"],
      icon: Star,
      category: "Web Application"
    },
    {
      title: "HRMS++: Elevating Organizational Efficiency", 
      description: "Developed an organizational management system with advanced leave and attendance management features",
      tools: ["HTML", "CSS", "React", "MongoDB", "ExpressJS"],
      icon: Building2,
      category: "Management System"
    },
    {
      title: "UIU Healthcare: Making Medical Care Easier",
      description: "Built an online medical appointment, prescription, and hospital locator system",
      tools: ["HTML", "CSS", "Bootstrap", "jQuery", "PHP"],
      icon: Users,
      category: "Healthcare System"
    },
    {
      title: "UIU World: Enriching Campus Connectivity",
      description: "Implemented a campus communication and club management platform",
      tools: ["HTML", "CSS", "Laravel", "MySQL"],
      icon: Globe,
      category: "Social Platform"
    }
  ];

  const getToolColor = (tool: string) => {
    const colors: { [key: string]: string } = {
      'HTML': 'bg-orange-100 text-orange-800',
      'CSS': 'bg-blue-100 text-blue-800', 
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'React': 'bg-cyan-100 text-cyan-800',
      'PHP': 'bg-purple-100 text-purple-800',
      'MySQL': 'bg-blue-100 text-blue-800',
      'MongoDB': 'bg-green-100 text-green-800',
      'Laravel': 'bg-red-100 text-red-800',
      'Bootstrap': 'bg-purple-100 text-purple-800',
      'jQuery': 'bg-blue-100 text-blue-800',
      'ExpressJS': 'bg-gray-100 text-gray-800'
    };
    return colors[tool] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Software Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Full-stack web applications showcasing practical software development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <CardTitle className="font-playfair text-xl group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex} 
                        variant="secondary"
                        className={`${getToolColor(tool)} border-0`}
                      >
                        {tool}
                      </Badge>
                    ))}
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
                  <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div className="text-center">
                  <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">Full-Stack</div>
                  <div className="text-sm text-muted-foreground">Development</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div className="text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">Web</div>
                  <div className="text-sm text-muted-foreground">Applications</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SoftwareProjects;
