import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Lightbulb, Sparkles, Wrench, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "MVP Development",
      description: "We build your minimum viable product end-to-end, from concept to launch. Get to market in 3 weeks with a fully functional product that validates your idea and attracts users.",
      features: [
        "Full-stack development",
        "User authentication & authorization",
        "Database design & setup",
        "Responsive UI/UX design",
        "Deployment & hosting",
        "Post-launch support"
      ]
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
      title: "Product Strategy & Roadmapping",
      description: "Transform your vision into a clear, actionable roadmap. We help you define features, prioritize development, and create a strategy that aligns with your business goals.",
      features: [
        "Market research & analysis",
        "Feature prioritization",
        "User story mapping",
        "Technical architecture planning",
        "Timeline & milestone planning",
        "Risk assessment & mitigation"
      ]
    },
    {
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "AI & SaaS Development",
      description: "Leverage the power of artificial intelligence and build scalable SaaS products. From chatbots to predictive analytics, we integrate cutting-edge AI into your platform.",
      features: [
        "AI model integration",
        "Natural language processing",
        "Machine learning pipelines",
        "Multi-tenant SaaS architecture",
        "API development & integration",
        "Real-time data processing"
      ]
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Custom Development",
      description: "Need something unique? We build custom solutions tailored to your specific requirements. Whether it's an internal tool, automation, or complex integration, we've got you covered.",
      features: [
        "Custom web applications",
        "API development & integration",
        "Workflow automation",
        "Third-party integrations",
        "Legacy system modernization",
        "Performance optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container-custom mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end product development services designed to turn your ideas into successful products
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-border overflow-hidden h-full">
                    <CardHeader className="bg-muted/30">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            {service.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                            <p className="text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-4">What's Included:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild>
                        <Link to="/contact">Enquire Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Preview */}
        <section className="section-padding bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-custom mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A streamlined approach to building great products
            </p>
            <Button size="lg" asChild>
              <Link to="/process">Learn How We Work</Link>
            </Button>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-custom mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Your Product
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a free consultation to discuss your project
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;