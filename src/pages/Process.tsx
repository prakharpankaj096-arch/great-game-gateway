import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProcessSection from "../components/ProcessSection";

const Process = () => {
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

        {/* Scroll-Based Process Animation */}
        <ProcessSection />

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