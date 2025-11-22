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
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="container-custom mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from founders and teams we&apos;ve helped go from idea
            to launch.
          </p>
        </div>

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
            className="flex gap-6 md:gap-8"
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
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="
                  group
                  min-w-[260px]
                  max-w-sm
                  md:min-w-[320px]
                  rounded-2xl
                  bg-surface/70
                  border
                  border-border/50
                  shadow-[0_0_40px_rgba(0,0,0,0.35)]
                  backdrop-blur-xl
                  p-5 md:p-6
                  cursor-pointer
                "
              >
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-4 md:mb-5">
                  “{t.quote}”
                </p>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm md:text-base">
                    {t.name}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {t.role} · {t.company}
                  </span>
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
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container-custom mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real products, real results. See how we've helped startups and businesses bring their ideas to life.
            </p>
          </motion.div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="card-hover border-border overflow-hidden h-full">
                    <CardHeader className="bg-muted/30">
                      <div className="flex items-start justify-between">
                        <div className="text-5xl mb-4">{project.image}</div>
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-4">{project.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <Badge key={i} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-1 text-sm">Results:</h4>
                        <p className="text-sm text-muted-foreground">{project.results}</p>
                      </div>

                      <Button variant="link" className="p-0">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

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
              Ready to See Your Project Here?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create your success story together
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;