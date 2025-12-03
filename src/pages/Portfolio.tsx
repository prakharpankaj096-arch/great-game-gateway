import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder",
    company: "LaunchWave",
    quote:
      "They turned our rough idea into a polished MVP in just 3 weeks. The process was transparent, collaborative, and extremely fast.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Lead",
    company: "NorthSide Labs",
    quote:
      "Their product strategy work saved us months of trial and error. We finally have a clear roadmap that the whole team believes in.",
  },
  {
    name: "Rohit Kumar",
    role: "CTO",
    company: "Finlytix",
    quote:
      "The AI features they built into our SaaS product have completely changed how our customers use the platform.",
  },
  {
    name: "Emily Davis",
    role: "CEO",
    company: "BrightStack",
    quote:
      "Clean code, strong communication, and a real sense of ownership. It felt like having an in-house product team.",
  },
];

const TestimonialsSection = () => {
  // Duplicate testimonials so the marquee can loop seamlessly
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="container-custom mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
              Clients
            </span>{" "}
            Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Real stories from founders and teams we&apos;ve helped go from idea
            to launch.
          </motion.p>
        </motion.div>

        {/* Marquee wrapper */}
        <div
          className="
            relative
            overflow-hidden
            py-4
            before:pointer-events-none before:absolute before:inset-y-0 before:left-0
            before:w-24 before:bg-gradient-to-r before:from-background before:to-transparent
            after:pointer-events-none after:absolute after:inset-y-0 after:right-0
            after:w-24 after:bg-gradient-to-l after:from-background after:to-transparent
          "
        >
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30, // adjust speed (higher = slower)
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((t, index) => (
              <motion.div
                key={`${t.name}-${index}`}
                whileHover={{
                  scale: 1.05,
                  zIndex: 10,
                  y: -5,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="
                  group
                  min-w-[260px]
                  max-w-sm
                  md:min-w-[320px]
                  rounded-2xl
                  bg-card/60
                  border
                  border-white/10
                  hover:border-primary/30
                  shadow-[0_0_40px_rgba(0,0,0,0.35)]
                  backdrop-blur-xl
                  p-5 md:p-6
                  cursor-pointer
                  transition-all duration-300
                  overflow-hidden
                  relative
                "
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-4 md:mb-5 group-hover:text-foreground transition-colors">
                    "{t.quote}"
                  </p>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                      {t.name}
                    </span>
                    <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                      {t.role} · {t.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "FinTech SaaS Platform",
      category: "SaaS",
      description: "Built a comprehensive financial management platform that helps SMBs track expenses, manage invoices, and generate financial reports. Launched in 4 weeks and now serves 500+ active users.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      results: "500+ users, $50K MRR in 6 months",
      image: "🏦"
    },
    {
      title: "AI-Powered Job Matching",
      category: "AI/ML",
      description: "Developed an intelligent job matching platform using natural language processing to connect candidates with opportunities. The AI analyzes resumes and job descriptions for perfect matches.",
      tech: ["Next.js", "Python", "OpenAI", "MongoDB"],
      results: "10K+ matches, 85% accuracy rate",
      image: "🤖"
    },
    {
      title: "Healthcare Appointment System",
      category: "Healthcare",
      description: "Created a HIPAA-compliant telemedicine platform with video consultations, appointment scheduling, and patient records management. Reduced no-shows by 60%.",
      tech: ["React", "Firebase", "WebRTC", "Twilio"],
      results: "3K+ appointments, 60% reduction in no-shows",
      image: "🏥"
    },
    {
      title: "E-Commerce Marketplace",
      category: "E-Commerce",
      description: "Built a multi-vendor marketplace connecting local artisans with customers. Features include inventory management, payment processing, and shipping integration.",
      tech: ["React", "Express", "PostgreSQL", "Shopify API"],
      results: "100+ vendors, $200K GMV",
      image: "🛍️"
    },
    {
      title: "EdTech Learning Platform",
      category: "Education",
      description: "Designed and developed an interactive learning platform with video courses, quizzes, progress tracking, and certification. Helped 5K+ students upskill.",
      tech: ["Vue.js", "Django", "AWS", "Vimeo"],
      results: "5K+ students, 95% completion rate",
      image: "📚"
    },
    {
      title: "Logistics Tracking App",
      category: "Logistics",
      description: "Created a real-time shipment tracking system with route optimization, driver management, and customer notifications. Improved delivery times by 40%.",
      tech: ["React Native", "Node.js", "MongoDB", "Google Maps"],
      results: "1K+ deliveries/day, 40% faster delivery",
      image: "🚚"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-background via-background-light to-background relative overflow-hidden">
          <div className="absolute inset-0 radial-glow opacity-20" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="container-custom mx-auto text-center relative z-10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm tracking-[0.4em] text-muted-foreground mb-6 uppercase font-medium"
            >
              Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
                Work
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Real products, real results. See how we've helped startups and businesses bring their ideas to life.
            </motion.p>
          </motion.div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent" />
          <div className="container-custom mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="group relative border-border/50 overflow-hidden h-full bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

                    <CardHeader className="bg-muted/20 relative z-10">
                      <div className="flex items-start justify-between">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="text-5xl mb-4"
                        >
                          {project.image}
                        </motion.div>
                        <Badge 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 relative z-10">
                      <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm text-foreground/80">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.2 + i * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge 
                                variant="outline"
                                className="border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-1 text-sm text-foreground/80">Results:</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">
                          {project.results}
                        </p>
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button 
                          variant="link" 
                          className="p-0 text-primary hover:text-primary-glow transition-colors group/btn"
                        >
                          View Case Study{" "}
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ExternalLink className="ml-2 h-4 w-4 inline-block" />
                          </motion.span>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* CTA */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-blue/10 to-accent-purple/20" />
          <div className="absolute inset-0 radial-glow opacity-15" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-custom mx-auto text-center relative z-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Ready to See Your Project{" "}
              <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
                Here?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-8 text-muted-foreground"
            >
              Let's create your success story together
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-12 py-8 rounded-full bg-gradient-to-r from-primary via-accent-blue to-accent-purple hover:opacity-90 text-white font-semibold shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] transition-all"
                asChild
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;