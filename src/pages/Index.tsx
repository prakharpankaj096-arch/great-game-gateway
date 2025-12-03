import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import Navigation from "@/components/Navigation";

import Footer from "@/components/Footer";

import {
  Zap,
  Rocket,
  TrendingUp,
  Code,
  Lightbulb,
  Target,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";

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
      description: "Build and launch your minimum viable product in weeks, not months.",
      details: [
        "Start small. Win big.",
        "Build only what matters.",
        "Your idea, delivered fast.",
      ],
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Product Strategy",
      description: "Transform your vision into a clear, actionable product roadmap.",
      details: [
        "Clarity that moves you forward.",
        "Strategy built on insight.",
        "Know what to build next.",
      ],
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "AI & SaaS",
      description:
        "Leverage cutting-edge AI and SaaS solutions to build intelligent, scalable products.",
      details: [
        "Automation that empowers growth.",
        "Intelligence built in.",
        "AI that works instantly.",
      ],
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
          {/* Centered Glowing Logo Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-16 flex justify-center"
          >
            <RotatingLogo variant="hero" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs md:text-sm tracking-[0.4em] text-muted-foreground mb-8 uppercase font-medium"
          >
            Product Development Partner
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight"
          >
            Turning <span className="text-foreground">Great Ideas</span>
            <br />
            Into <span className="text-foreground">Great Products</span>
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
              className="bg-gradient-to-r from-primary to-accent-purple hover:opacity-90 text-white font-semibold px-12 py-7 text-lg rounded-full shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] transition-all"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-border/60 hover:border-border-glow/60 bg-transparent text-foreground hover:bg-surface/50 px-12 py-7 text-lg rounded-full backdrop-blur-sm transition-all"
            >
              <Link to="/contact">Book a Call</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* What We Deliver */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="What We Deliver"
              subtitle="Three pillars of exceptional product development"
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">
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
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Speed Matters
                  </h3>
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
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Modern Stack
                  </h3>
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
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Growth Ready
                  </h3>
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

      {/* Spacer */}


      {/* What We Build */}
      <section className="pt-12 pb-24 md:pt-16 md:pb-32 relative">
        <div className="absolute inset-0 radial-glow" />
        <div className="container-custom mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="What We Build"
              subtitle="End-to-end product development services to bring your vision to life"
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">
            {services.map((service, index) => (
              <FlipCard
                key={index}
                delay={index * 0.1}
                frontContent={
                  <div>
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                }
                backContent={
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-primary">
                        {service.title}
                      </h3>
                      <ul className="space-y-2 text-left mb-4">
                        {service.details?.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-foreground/90"
                          >
                            <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="link"
                      className="w-full mt-auto justify-center text-white hover:text-primary hover:no-underline p-0 mb-2"
                      asChild
                    >
                      <Link to="/services" className="flex items-center gap-2 group">
                        <span className="group-hover:underline underline-offset-4">Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            className="flex justify-center mt-12 md:mt-16"
          >
            <Button size="lg" asChild className="neon-border">
              <Link to="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Spacer */}
      {/* Spacer */}
      <div className="h-24 md:h-32" />

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent-purple/20 rounded-full blur-3xl"
          animate={{ 
            y: [-20, 20, -20],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent-blue/20 to-primary/30 rounded-full blur-3xl"
          animate={{ 
            y: [20, -20, 20],
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 via-accent-purple/10 to-accent-blue/10 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Decorative Icons */}
        <motion.div
          className="absolute top-16 right-[15%] hidden md:block"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket className="h-8 w-8 text-primary/40" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-[10%] hidden md:block"
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="h-6 w-6 text-accent-purple/40" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 left-[8%] hidden md:block"
          animate={{ 
            y: [-5, 15, -5],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Star className="h-5 w-5 text-accent-blue/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-[8%] hidden md:block"
          animate={{ 
            y: [5, -15, 5],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="h-6 w-6 text-primary/30" />
        </motion.div>

        <div className="container-custom mx-auto relative z-10">
          {/* Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative bg-card/40 backdrop-blur-2xl border border-border-glow/30 rounded-3xl p-10 md:p-16 text-center overflow-hidden"
          >
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-accent-purple/20 to-primary/20 opacity-50 blur-xl -z-10" />
            <motion.div 
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.1), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["200% 0", "-200% 0"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Let's Create Something Amazing</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent"
            >
              Ready to Build Your MVP?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl mx-auto"
            >
              Let's turn your idea into reality in just 3 weeks
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary via-accent-purple to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-primary-foreground font-semibold px-10 py-7 text-lg rounded-full shadow-[0_0_40px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.7)] transition-all duration-500 group"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Start Your Project</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </motion.div>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="text-muted-foreground hover:text-foreground hover:bg-surface/30 px-8 py-7 text-lg rounded-full transition-all"
              >
                <Link to="/contact">or Book a Free Call</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
