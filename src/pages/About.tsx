import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container-custom mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">g8g</span> ♾
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe every great idea deserves to become a great product. That's why we exist – to help innovators, entrepreneurs, and businesses transform their visions into reality.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  g8g stands for "Great to Great" – a philosophy inspired by the infinity symbol ♾, representing continuous growth and unlimited potential. We founded g8g with a simple belief: great ideas shouldn't die due to lack of technical execution.
                </p>
                <p>
                  Too many brilliant concepts never see the light of day because building a product feels overwhelming, expensive, or time-consuming. We're here to change that. With our streamlined MVP development process, we help you launch in weeks, not months, without compromising on quality.
                </p>
                <p>
                  Our team has built products for startups that went on to raise millions, enterprises looking to innovate, and solo founders with game-changing ideas. Every project starts with understanding your vision and ends with a product that works, scales, and delights users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower innovators by transforming their ideas into exceptional products that drive real business results. We make world-class product development accessible, fast, and reliable.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="pt-6">
                  <Eye className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the go-to partner for turning ideas into products that scale from MVP to millions of users. We envision a world where great ideas become great products, infinitely ♾.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A passionate group of designers, developers, and strategists dedicated to bringing your vision to life
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="card-hover border-border">
                  <CardContent className="pt-6 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Team Member</h3>
                    <p className="text-muted-foreground mb-2">Role</p>
                    <p className="text-sm text-muted-foreground">
                      Passionate about building products that make a difference
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build something great together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;