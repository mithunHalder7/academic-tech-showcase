
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "01317801458",
      href: "tel:01317801458"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "mhalder20041@bscse.uiu.ac.bd",
      href: "mailto:mhalder20041@bscse.uiu.ac.bd"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "House no: 150, Uttar Bhashantek, Dhaka 1206",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View Profile",
      href: "https://www.linkedin.com/in/mithun-halder-824307240/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate on research projects or discuss opportunities in academia and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center">
                  <Send className="h-6 w-6 mr-3" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always excited to discuss research opportunities, collaborate on innovative projects, 
                  or explore teaching positions. Whether you're interested in my research in machine learning 
                  and computer vision, or looking for a dedicated educator, I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                        <contact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        {contact.href === '#' ? (
                          <div className="font-medium">{contact.value}</div>
                        ) : (
                          <a 
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-medium text-primary hover:text-primary/80 transition-colors duration-200 flex items-center"
                          >
                            {contact.value}
                            {contact.href.startsWith('http') && (
                              <ExternalLink className="h-3 w-3 ml-1" />
                            )}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/20">
              <CardContent className="p-0">
                <h3 className="font-playfair text-xl font-semibold mb-4">Research Interests</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Science'].map((interest) => (
                    <div key={interest} className="bg-background px-3 py-2 rounded-lg text-center text-sm font-medium">
                      {interest}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  Open to collaborating on cutting-edge research projects and exploring new frontiers in AI and computer science.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-playfair text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <a href="mailto:mhalder20041@bscse.uiu.ac.bd">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a 
                      href="https://www.linkedin.com/in/mithun-halder-824307240/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/20">
            <CardContent className="p-0">
              <p className="text-muted-foreground">
                "My goal is to inspire and educate the next generation of computer scientists while continuing to explore cutting-edge research."
              </p>
              <p className="font-playfair font-semibold mt-2">- Mithun Halder</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
