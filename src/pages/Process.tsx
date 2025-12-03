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
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border md:-translate-x-1/2" />

                <div className="space-y-16">
                  <div className="relative flex items-start">
                    <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2" />
                    <div className="md:block absolute left-0 w-6 h-6 bg-primary rounded-full md:hidden" />
                    <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12">
                      <div className="font-bold text-xl mb-2">Week 1</div>
                      <div className="text-primary font-semibold text-lg mb-3">Planning & Design</div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Discovery & requirements gathering</li>
                        <li>• User research & persona development</li>
                        <li>• Wireframing & UI/UX design</li>
                        <li>• Technical architecture planning</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2" />
                    <div className="md:block absolute left-0 w-6 h-6 bg-primary rounded-full md:hidden" />
                    <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12 md:ml-auto">
                      <div className="font-bold text-xl mb-2">Week 2</div>
                      <div className="text-primary font-semibold text-lg mb-3">Development & Testing</div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Core feature development</li>
                        <li>• Database & API integration</li>
                        <li>• Authentication & security setup</li>
                        <li>• Quality assurance & bug fixes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2" />
                    <div className="md:block absolute left-0 w-6 h-6 bg-primary rounded-full md:hidden" />
                    <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12">
                      <div className="font-bold text-xl mb-2">Week 3</div>
                      <div className="text-primary font-semibold text-lg mb-3">Final Polish & Launch</div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Performance optimization</li>
                        <li>• Final UI/UX refinements</li>
                        <li>• Deployment & monitoring setup</li>
                        <li>• Launch & post-launch support</li>
                      </ul>
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