import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProcessSection from "@/components/ProcessSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Sparkles, Zap, Clock, Target, Rocket } from "lucide-react";

const Process = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const timelineOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const timelineScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const timelineItems = [
    {
      week: "Week 1",
      title: "Planning & Design",
      gradient: "from-primary via-accent-blue to-accent-purple",
      items: [
        "Discovery & requirements gathering",
        "User research & persona development",
        "Wireframing & UI/UX design",
        "Technical architecture planning",
      ],
    },
    {
      week: "Week 2",
      title: "Development & Testing",
      gradient: "from-accent-blue via-accent-purple to-primary",
      items: [
        "Core feature development",
        "Database & API integration",
        "Authentication & security setup",
        "Quality assurance & bug fixes",
      ],
    },
    {
      week: "Week 3",
      title: "Final Polish & Launch",
      gradient: "from-accent-purple via-primary to-accent-blue",
      items: [
        "Performance optimization",
        "Final UI/UX refinements",
        "Deployment & monitoring setup",
        "Launch & post-launch support",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-16 px-4 bg-gradient-to-b from-background via-background-light to-background overflow-hidden">
          <div className="absolute inset-0 radial-glow" />
          <div className="container-custom mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 md:mb-12"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xs md:text-sm tracking-[0.4em] text-muted-foreground mb-6 uppercase font-medium"
              >
                Our Process
              </motion.p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                From Idea to{" "}
                <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
                  Launch
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A streamlined, predictable process that transforms your vision into a production-ready product in record time.
              </p>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
            >
              {[
                { label: "Days to MVP", value: "21", icon: Clock, gradient: "from-primary to-accent-blue" },
                { label: "Sprint Cycles", value: "3", icon: Target, gradient: "from-accent-blue to-accent-purple" },
                { label: "Success Rate", value: "100%", icon: Zap, gradient: "from-accent-purple to-primary" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative p-6 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/30 backdrop-blur-sm transition-all group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-10 h-10 mb-4 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-20 inline-flex items-center justify-center border border-primary/20`}>
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Scroll-Based Process Animation */}
        <ProcessSection />

        {/* Enhanced Timeline Summary */}
        <section ref={timelineRef} className="section-padding bg-gradient-to-b from-background via-background-light to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <motion.div
            style={{ opacity: timelineOpacity, scale: timelineScale }}
            className="container-custom mx-auto relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                From Idea to Launch in{" "}
                <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
                  3 Weeks
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured timeline that ensures every milestone is met with precision and quality.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Animated Timeline Line */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent-blue to-accent-purple md:-translate-x-1/2"
                  style={{ transformOrigin: "top" }}
                />

                <div className="space-y-12 md:space-y-16">
                  {timelineItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="relative flex items-start"
                    >
                      {/* Animated Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                        className="hidden md:block absolute left-1/2 w-8 h-8 bg-gradient-to-br from-primary via-accent-blue to-accent-purple rounded-full -translate-x-1/2 shadow-[0_0_20px_rgba(99,102,241,0.6)] z-10"
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                        className="md:hidden absolute left-0 w-8 h-8 bg-gradient-to-br from-primary via-accent-blue to-accent-purple rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)] z-10"
                      />

                      {/* Content Card */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className={`ml-12 md:ml-0 md:w-1/2 ${
                          index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                        } relative group`}
                      >
                        <div className="relative p-8 rounded-2xl bg-card/60 border border-white/10 hover:border-primary/40 backdrop-blur-sm transition-all overflow-hidden">
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                          
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                          <div className="relative z-10">
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.1 }}
                              className="font-bold text-2xl mb-3 bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent"
                            >
                              {item.week}
                            </motion.div>
                            <motion.h3
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.2 }}
                              className="text-primary font-semibold text-xl mb-6"
                            >
                              {item.title}
                            </motion.h3>
                            <ul className="space-y-3">
                              {item.items.map((listItem, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.2 + 0.3 + i * 0.05 }}
                                  className="flex items-start gap-3 text-muted-foreground group/item"
                                >
                                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                                  <span className="group-hover/item:text-foreground transition-colors">{listItem}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced CTA */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-blue/10 to-accent-purple/20" />
          <div className="absolute inset-0 radial-glow" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-custom mx-auto text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
                Journey?
              </span>
            </h2>
            <p className="text-xl mb-10 text-muted-foreground max-w-2xl mx-auto">
              Book a free consultation and let's map out your product journey together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-lg px-12 py-8 rounded-full bg-gradient-to-r from-primary via-accent-blue to-accent-purple hover:opacity-90 text-white font-semibold shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] transition-all group"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Process;