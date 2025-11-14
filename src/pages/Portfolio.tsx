import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

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
          <div className="container-custom mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real products, real results. See how we've helped startups and businesses bring their ideas to life.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="card-hover border-border overflow-hidden">
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
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-border">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-4xl">⭐⭐⭐⭐⭐</div>
                    <p className="text-muted-foreground mb-4">
                      "g8g transformed our idea into a fully functional product in just 3 weeks. The team was professional, responsive, and delivered beyond our expectations."
                    </p>
                    <div className="font-semibold">Client Name</div>
                    <div className="text-sm text-muted-foreground">CEO, Company</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to See Your Project Here?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create your success story together
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;