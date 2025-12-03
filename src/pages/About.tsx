import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-background via-background-light to-background relative overflow-hidden">
          <div className="absolute inset-0 radial-glow opacity-20" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="container-custom mx-auto text-center relative z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              About <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">g8g</span> ♾
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              We believe every great idea deserves to become a great product. That's why we exist – to help innovators, entrepreneurs, and businesses transform their visions into reality.
            </motion.p>
          </motion.div>
        </section>

        {/* Story */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent" />
          <div className="container-custom mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Our Story
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-4 text-lg text-muted-foreground"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  g8g stands for "Great to Great" – a philosophy inspired by the infinity symbol ♾, representing continuous growth and unlimited potential. We founded g8g with a simple belief: great ideas shouldn't die due to lack of technical execution.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Too many brilliant concepts never see the light of day because building a product feels overwhelming, expensive, or time-consuming. We're here to change that. With our streamlined MVP development process, we help you launch in weeks, not months, without compromising on quality.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Our team has built products for startups that went on to raise millions, enterprises looking to innovate, and solo founders with game-changing ideas. Every project starts with understanding your vision and ends with a product that works, scales, and delights users.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/30 relative overflow-hidden">
          <div className="container-custom mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], type: "spring", stiffness: 100 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <CardContent className="pt-6 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Target className="h-12 w-12 text-primary mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      To empower innovators by transforming their ideas into exceptional products that drive real business results. We make world-class product development accessible, fast, and reliable.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], type: "spring", stiffness: 100 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <CardContent className="pt-6 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Eye className="h-12 w-12 text-primary mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Our Vision</h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      To be the go-to partner for turning ideas into products that scale from MVP to millions of users. We envision a world where great ideas become great products, infinitely ♾.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent" />
          <div className="container-custom mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A passionate group of designers, developers, and strategists dedicated to bringing your vision to life
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: i * 0.1, 
                    duration: 0.8, 
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <CardContent className="pt-6 text-center relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                      >
                        <Users className="h-12 w-12 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">Team Member</h3>
                      <p className="text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors">Role</p>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                        Passionate about building products that make a difference
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-blue/10 to-accent-purple/20" />
          <div className="absolute inset-0 radial-glow opacity-15" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="container-custom mx-auto text-center relative z-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Ready to Work{" "}
              <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
                Together?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xl mb-8 text-muted-foreground"
            >
              Let's build something great together
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple hover:opacity-90 text-white font-semibold shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] transition-all duration-300" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:border-primary/60 bg-transparent hover:bg-primary/10 transition-all duration-300" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;