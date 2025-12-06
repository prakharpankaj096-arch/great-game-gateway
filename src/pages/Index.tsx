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
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import FlipCard from "@/components/FlipCard";
import SectionHeader from "@/components/SectionHeader";
import BrandMarquee from "@/components/BrandMarquee";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-0 min-h-screen bg-black flex flex-col">
        {/* Background Glow */}
        <div className="absolute inset-0 radial-glow opacity-30 pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">

          {/* Screen 1: Title & Buttons */}
          <div className="h-screen flex flex-col justify-center items-center text-center sticky top-0 pt-32 pb-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xs md:text-sm tracking-[0.4em] text-muted-foreground mb-6 uppercase font-medium"
            >
              Product Development Partner
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
            >
              Turning <span className="text-white">Great Ideas</span>
              <br />
              Into <span className="text-white">Great Products</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:opacity-90 text-white font-semibold px-10 py-6 text-lg rounded-full shadow-[0_0_40px_rgba(255,95,21,0.5)] hover:shadow-[0_0_60px_rgba(255,95,21,0.7)] transition-all duration-300 ease-out"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-white/20 bg-transparent text-white px-10 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300 ease-out hover:border-primary hover:text-primary hover:shadow-[0_0_30px_rgba(255,95,21,0.4)] hover:scale-105"
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Screen 2: Split Video & Text */}
          <div className="h-screen flex flex-col lg:flex-row w-full relative bg-black z-20">
            {/* Left Column - Video */}
            <div className="hidden lg:flex w-1/2 h-full items-center justify-center p-8 border-r border-white/10 bg-black">
              <div className="w-full aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/Web_Design_Transformation_Video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Right Column - Mission Text */}
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center p-6 md:p-12 text-left">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-16 h-1 bg-primary mb-6" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white/90">
                  Transforming your vision into exceptional products through design and development.
                </h2>
              </motion.div>
            </div>
          </div>

          {/* Screen 3: "What We Deliver" (Joined) */}
          <div className="flex flex-col lg:flex-row bg-black relative z-20">
            {/* Left Column - Sticky Title */}
            <div className="hidden lg:flex w-1/2 h-screen sticky top-0 items-center justify-center p-16 border-r border-white/10">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-6xl lg:text-8xl font-bold text-white leading-tight mb-8">
                    What We <br /> <span className="text-primary">Deliver</span>
                  </h2>
                  <p className="text-2xl text-muted-foreground">
                    Three pillars of exceptional product development that set us apart.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Scrolling Content */}
            <div className="w-full lg:w-1/2 py-24 px-6 md:px-12 lg:px-20">
              <div className="space-y-32">
                {/* Item 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold mb-4 text-white">Speed Matters</h3>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Launch your MVP in 3 weeks. We prioritize rapid prototyping and iteration to get your product to market faster.
                  </p>

                </motion.div>

                {/* Item 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold mb-4 text-white">Modern Stack</h3>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Built on cutting-edge technology. We use cloud-native architecture and AI-powered automation to ensure scalability and performance.
                  </p>

                </motion.div>

                {/* Item 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold mb-4 text-white">Growth Ready</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                    <div className="text-center sm:border-r border-white/10">
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">100x</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Growth Capacity</div>
                    </div>
                    <div className="text-center sm:border-r border-white/10">
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">2s</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Avg Load Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50%</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Less Maintenance</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </div >
      </section >

      {/* Brand Marquee (Moved below Hero/Delivery) */}
      < div className="relative z-10 bg-background" >
        <BrandMarquee />
      </div >


      <div className="relative z-10 bg-background">

        {/* "What We Build" (Flip Cards) Section */}
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
                    <h3 className="text-[1.73rem] font-bold mb-4 text-white">
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
                    <h3 className="text-[1.73rem] font-bold mb-4 text-white">
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
                    <h3 className="text-[1.73rem] font-bold mb-4 text-white">
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
                    className="w-full bg-primary hover:opacity-90 
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
        <div className="h-24 md:h-32" />

        {/* CTA Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/5" />
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
    </div >
  );
};

export default Index;
