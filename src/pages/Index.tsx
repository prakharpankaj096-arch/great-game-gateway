import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Zap, Rocket, TrendingUp, Code, Lightbulb, Target } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "MVP Development",
      description: "Build and launch your minimum viable product in weeks, not months",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Product Strategy",
      description: "Transform your vision into a clear, actionable product roadmap",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "AI & SaaS",
      description: "Leverage cutting-edge AI and SaaS solutions for your business",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container-custom mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">g8g</h1>
            <span className="text-5xl md:text-7xl">♾</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turning Great Ideas into Great Products
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We build exceptional MVPs and digital products that help startups and businesses scale from zero to hero
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-border">
              <CardContent className="pt-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Launch your MVP in 3 weeks with our streamlined process
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover border-border">
              <CardContent className="pt-6 text-center">
                <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-muted-foreground">
                  Cutting-edge technology and modern development practices
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover border-border">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Built to Scale</h3>
                <p className="text-muted-foreground">
                  Products designed to grow from MVP to millions of users
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end product development services to bring your vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-border">
                <CardContent className="pt-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/services">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your MVP?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's turn your idea into reality in just 3 weeks
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;