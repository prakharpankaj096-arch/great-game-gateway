import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Code, Rocket, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
      title: "Plan",
      subtitle: "Understanding & Strategy",
      description: "We start by deeply understanding your vision, goals, and target users. Together, we define the core features, create user stories, and map out a clear product roadmap.",
      activities: [
        "Discovery call & requirement gathering",
        "Market research & competitor analysis",
        "Feature prioritization & MVP scope",
        "User experience design & wireframes",
        "Technical architecture planning",
        "Timeline & milestone definition"
      ],
      duration: "3-5 days"
    },
    {
      number: "02",
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Build",
      subtitle: "Development & Testing",
      description: "Our expert developers bring your product to life with clean, scalable code. We follow agile methodologies with regular check-ins to ensure we're building exactly what you need.",
      activities: [
        "Frontend & backend development",
        "Database setup & configuration",
        "API development & integration",
        "UI/UX implementation",
        "Quality assurance & testing",
        "Security & performance optimization"
      ],
      duration: "10-14 days"
    },
    {
      number: "03",
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "Launch",
      subtitle: "Deployment & Growth",
      description: "We deploy your product to production, ensure everything runs smoothly, and provide support as you start acquiring users. Your success is our success.",
      activities: [
        "Production deployment",
        "Domain & hosting setup",
        "Final testing & quality checks",
        "User documentation & training",
        "Launch support & monitoring",
        "Post-launch iterations & improvements"
      ],
      duration: "2-3 days"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container-custom mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">How We Work</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 3-step process that takes you from idea to launched product in just 3 weeks
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-full w-0.5 h-16 bg-border -translate-x-1/2 -mb-16" />
                  )}
                  
                  <Card className="border-border overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Left Side - Step Info */}
                        <div className="bg-muted/30 p-8 flex flex-col justify-center">
                          <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                          <div className="mb-4">{step.icon}</div>
                          <h2 className="text-3xl font-bold mb-2">{step.title}</h2>
                          <p className="text-lg text-primary font-semibold mb-4">{step.subtitle}</p>
                          <p className="text-muted-foreground mb-4">{step.description}</p>
                          <div className="inline-flex items-center text-sm font-semibold">
                            <span className="text-primary">Duration: {step.duration}</span>
                          </div>
                        </div>
                        
                        {/* Right Side - Activities */}
                        <div className="p-8 flex flex-col justify-center">
                          <h3 className="font-semibold mb-4 text-lg">What Happens:</h3>
                          <div className="space-y-3">
                            {step.activities.map((activity, i) => (
                              <div key={i} className="flex items-start space-x-3">
                                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Summary */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              From Idea to Launch in 3 Weeks
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
                
                <div className="space-y-8">
                  <div className="relative flex items-center">
                    <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2" />
                    <div className="md:block absolute left-0 w-4 h-4 bg-primary rounded-full md:hidden" />
                    <div className="ml-8 md:ml-0 md:w-1/2 md:pr-12">
                      <div className="font-semibold">Week 1</div>
                      <div className="text-muted-foreground">Planning & Design</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center">
                    <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2" />
                    <div className="md:block absolute left-0 w-4 h-4 bg-primary rounded-full md:hidden" />
                    <div className="ml-8 md:ml-0 md:w-1/2 md:pl-12 md:ml-auto">
                      <div className="font-semibold">Week 2</div>
                      <div className="text-muted-foreground">Development & Testing</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center">
                    <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2" />
                    <div className="md:block absolute left-0 w-4 h-4 bg-primary rounded-full md:hidden" />
                    <div className="ml-8 md:ml-0 md:w-1/2 md:pr-12">
                      <div className="font-semibold">Week 3</div>
                      <div className="text-muted-foreground">Final Polish & Launch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Project Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a free consultation and let's map out your product journey
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Process;