import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Zap, Rocket, TrendingUp, Code, Lightbulb, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FlipCard from "@/components/FlipCard";
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
      <section className="relative pt-32 pb-24 px-4 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 radial-glow" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom mx-auto text-center relative z-10"
        >
          <div className="mb-8">
            <RotatingLogo />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm md:text-base tracking-[0.3em] text-muted-foreground/80 mb-6 uppercase"
          >
            Product Development Partner
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            Turning <span className="gradient-text">Great Ideas</span>
            <br />
            Into <span className="gradient-text">Great Products</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              asChild 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-2 border-foreground/20 hover:border-primary/60 text-foreground hover:text-primary px-12 py-6 text-lg rounded-full backdrop-blur-sm transition-all"
            >
              <Link to="/contact">Book a Call</Link>
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
            <FlipCard
              delay={0}
              frontContent={
                <div className="text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-muted-foreground">
                    Launch your MVP in 3 weeks with our streamlined process
                  </p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Speed Matters</h3>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Rapid prototyping & iteration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Agile development methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Weekly milestone delivery</span>
                    </li>
                  </ul>
                </div>
              }
            />
            <FlipCard
              delay={0.1}
              frontContent={
                <div className="text-center">
                  <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                  <p className="text-muted-foreground">
                    Cutting-edge technology and modern development practices
                  </p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Modern Stack</h3>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>AI-powered features & automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cloud-native architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Latest frameworks & best practices</span>
                    </li>
                  </ul>
                </div>
              }
            />
            <FlipCard
              delay={0.2}
              frontContent={
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Built to Scale</h3>
                  <p className="text-muted-foreground">
                    Products designed to grow from MVP to millions of users
                  </p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Growth Ready</h3>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Scalable infrastructure from day one</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Performance optimization built-in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Easy to maintain & extend</span>
                    </li>
                  </ul>
                </div>
              }
            />
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
              <FlipCard
                key={index}
                delay={index * 0.1}
                frontContent={
                  <div>
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                }
                backContent={
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                      <p className="text-foreground/90 mb-4">{service.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/40 hover:bg-primary/20 group" 
                      asChild
                    >
                      <Link to="/services">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                }
              />
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