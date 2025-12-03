import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import Navigation from "@/components/Navigation";

import Footer from "@/components/Footer";

import {
  Zap,
  Rocket,
  TrendingUp,
  ArrowRight,
  Code,
  Lightbulb,
  Target,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";



import FlipCard from "@/components/FlipCard";

import SectionHeader from "@/components/SectionHeader";

import RotatingLogo from "@/components/RotatingLogo";

import BrandMarquee from "@/components/BrandMarquee";

import SparkleButton from "@/components/SparkleButton";

const Index = () => {


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 radial-glow" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="container-custom mx-auto text-center relative z-10"
        >
          {/* Centered Glowing Logo Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
            className="mb-16 flex justify-center"
          >
            <RotatingLogo variant="hero" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs md:text-sm tracking-[0.4em] text-muted-foreground mb-8 uppercase font-medium"
          >
            Product Development Partner
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight"
          >
            Turning <span className="text-foreground">Great Ideas</span>
            <br />
            Into <span className="text-foreground">Great Products</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-accent-purple hover:opacity-90 text-white font-semibold px-12 py-7 text-lg rounded-full shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] transition-all duration-300 ease-out"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-border/60 hover:border-border-glow/60 bg-transparent text-foreground hover:bg-surface/50 px-12 py-7 text-lg rounded-full backdrop-blur-sm transition-all duration-300 ease-out"
              >
                <Link to="/contact">Book a Call</Link>
              </Button>
            </motion.div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
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
                  <h3 className="text-[1.73rem] font-bold mb-4 text-primary">
                    Speed Matters
                  </h3>
                  <ul className="space-y-2 text-left text-[1.15rem]">
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
                  <h3 className="text-[1.73rem] font-bold mb-4 text-primary">
                    Modern Stack
                  </h3>
                  <ul className="space-y-2 text-left text-[1.15rem]">
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
                  <h3 className="text-[1.73rem] font-bold mb-4 text-primary">
                    Growth Ready
                  </h3>
                  <ul className="space-y-2 text-left text-[1.15rem]">
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


      {/* What We Build */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 relative">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <SectionHeader
              title="What We Build"
              subtitle="Three pillars of exceptional product development"
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <FlipCard
              delay={0}
              frontContent={
                <div className="text-center">
                  <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">MVP Development</h3>
                  <p className="text-muted-foreground">
                    Build and launch your minimum viable product in weeks, not months
                  </p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-[1.73rem] font-bold mb-4 text-primary">
                    Launch Faster
                  </h3>
                  <ul className="space-y-2 text-left text-[1.15rem]">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Get to market in weeks, not months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Validate your idea with real users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Attract investors & early adopters</span>
                    </li>
                  </ul>
                </div>
              }
            />
            <FlipCard
              delay={0.1}
              frontContent={
                <div className="text-center">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Product Strategy</h3>
                  <p className="text-muted-foreground">
                    Transform your vision into a clear, actionable product roadmap
                  </p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-[1.73rem] font-bold mb-4 text-primary">
                    Strategic Planning
                  </h3>
                  <ul className="space-y-2 text-left text-[1.15rem]">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Align product with business goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Prioritize what actually matters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Make data-driven decisions</span>
                    </li>
                  </ul>
                </div>
              }
            />
            <FlipCard
              delay={0.2}
              frontContent={
                <div className="text-center">
                  <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI & SaaS</h3>
                  <p className="text-muted-foreground">
                    Leverage cutting-edge AI and SaaS solutions to build intelligent products
                  </p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-[1.73rem] font-bold mb-4 text-primary">
                    Smart Solutions
                  </h3>
                  <ul className="space-y-2 text-left text-[1.15rem]">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Full-stack SaaS development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>AI-powered automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom AI models for your needs</span>
                    </li>
                  </ul>
                </div>
              }
            />
          </div>
          <div className="flex justify-center mt-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent-purple hover:opacity-90 
                             text-white font-semibold py-7 text-lg rounded-full 
                             shadow-[0_0_40px_rgba(99,102,241,0.5)] 
                             hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] 
                             transition-all duration-300 ease-out group"
                >
                  <Link to="/services">
                    <span>View All Services</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      {/* Spacer */}
      <div className="h-24 md:h-32" />

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20" />
        <div className="absolute inset-0 radial-glow" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
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
