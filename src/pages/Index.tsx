import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Zap, Rocket, TrendingUp, Code, Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";
import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";
import RotatingLogo from "@/components/RotatingLogo";
import BrandMarquee from "@/components/BrandMarquee";

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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 radial-glow" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom mx-auto text-center relative z-10"
        >
          <div className="mb-6">
            <RotatingLogo />
          </div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Turning Great Ideas into Great Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            We build exceptional MVPs and digital products that help startups and businesses scale from zero to hero
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="neon-border">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="neon-border">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Value Props */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <SectionHeader 
            title="What We Deliver" 
            subtitle="Three pillars of exceptional product development"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlowCard delay={0}>
              <div className="text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Launch your MVP in 3 weeks with our streamlined process
                </p>
              </div>
            </GlowCard>
            <GlowCard delay={0.1}>
              <div className="text-center">
                <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-muted-foreground">
                  Cutting-edge technology and modern development practices
                </p>
              </div>
            </GlowCard>
            <GlowCard delay={0.2}>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Built to Scale</h3>
                <p className="text-muted-foreground">
                  Products designed to grow from MVP to millions of users
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding relative">
        <div className="absolute inset-0 radial-glow" />
        <div className="container-custom mx-auto relative z-10">
          <SectionHeader 
            title="What We Build" 
            subtitle="End-to-end product development services to bring your vision to life"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlowCard key={index} delay={index * 0.1}>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="link" className="p-0 text-primary hover:text-primary-glow" asChild>
                  <Link to="/services">Learn More →</Link>
                </Button>
              </GlowCard>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild className="neon-border">
              <Link to="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20" />
        <div className="absolute inset-0 radial-glow" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your MVP?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Let's turn your idea into reality in just 3 weeks
          </p>
          <Button size="lg" asChild className="neon-border">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;