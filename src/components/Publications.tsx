
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ExternalLink, Users, Calendar } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Clustering as a Catalyst for Big Data Classification (CC-BC)",
      authors: "Halder, M., Shopnil, S., Arafat, Y., Chowdhury, M. M., Hossain Jobayer, S., & Farid, D. M.",
      conference: "2023 26th International Conference on Computer and Information Technology (ICCIT)",
      publisher: "IEEE",
      doi: "10.1109/ICCIT60459.2023.10441188",
      year: "2023",
      type: "Conference Paper"
    },
    {
      title: "PTIN: Enriching Pedestrian Safety with an LSTM-GRU-Transformer Based Trajectory Imputation System for Autonomous Vehicles",
      authors: "Barua, D. K., Halder, M., Shopnil, S., & Islam, M. M.",
      conference: "2023 26th International Conference on Computer and Information Technology (ICCIT)",
      publisher: "IEEE",
      doi: "10.1109/ICCIT60459.2023.10441523",
      year: "2023",
      type: "Conference Paper"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Publications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Peer-reviewed research contributions at international conferences
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="secondary">{pub.type}</Badge>
                      <Badge variant="outline">{pub.year}</Badge>
                    </div>
                    <CardTitle className="font-playfair text-xl mb-4 group-hover:text-primary transition-colors duration-200">
                      {pub.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">{pub.conference}</p>
                    <p className="text-muted-foreground">Publisher: {pub.publisher}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <strong>DOI:</strong> {pub.doi}
                  </div>
                  <a 
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm font-medium">View Paper</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-accent/10">
            <CardContent className="p-0">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">IEEE</div>
                  <div className="text-sm text-muted-foreground">Publisher</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2023</div>
                  <div className="text-sm text-muted-foreground">Year</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
