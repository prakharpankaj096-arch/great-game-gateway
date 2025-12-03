import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeatureSection from "@/components/FeatureSection";
import ServiceTierSection from "@/components/ServiceTierSection";
import {
  Sparkles, Zap, Target, Shield,
  Code2, Database, Layout, Smartphone,
  Bot, Workflow, BarChart3, Lock,
  Rocket, Layers, Cpu, Globe,
  Users, CreditCard, FileText, Map,
  TrendingUp, CheckCircle, Settings,
  Bell, Clock, BookOpen, Gauge,
  AlertCircle, Plus, ArrowRight
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-16 px-4 bg-gradient-to-b from-background via-background-light to-background overflow-hidden">
          <div className="absolute inset-0 radial-glow opacity-20" />
          <div className="container-custom mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 md:mb-20"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xs md:text-sm tracking-[0.4em] text-muted-foreground mb-6 uppercase font-medium"
              >
                Productized Services
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                The new standard for{" "}
                <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
                  productized services
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                With its meticulous design, breathtaking speed and opinionated yet flexible workflows, our sprint model unlocks your team's full potential. It is the tool of choice for high-performance teams to build products better.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* CLARITY48™ - 48-Hour Product Direction Sprint */}
        <ServiceTierSection
          title="CLARITY48™ — 48-Hour Product Direction Sprint"
          description="Before writing a single line of code, we ensure you're building the right thing. Our 48-hour sprint delivers a complete blueprint for your product with clear direction, user flows, and an actionable roadmap."
          gradient="from-green-400 to-emerald-600"
          tiers={[
            {
              name: "CORE",
              features: [
                "Lean PRD",
                "1-2 user flows",
                "Basic UI wireframe",
                "7-day build roadmap"
              ]
            },
            {
              name: "STANDARD",
              features: [
                "Full PRD (v1-ready)",
                "Full user journeys",
                "Feature prioritization",
                "UI blueprint",
                "2-week execution plan"
              ],
              highlighted: true
            },
            {
              name: "SCALE",
              features: [
                "Everything in STANDARD",
                "Competitive teardown",
                "Validation plan",
                "Market angle framing",
                "\"Beyond v1\" roadmap"
              ]
            }
          ]}
        />

        {/* AUTO-OPS SPRINT™ - 7-Day Automation Sprint */}
        <ServiceTierSection
          title="AUTO-OPS SPRINT™ — 7-Day Automation Sprint"
          description="Scale your operations without hiring more people. We build custom automation workflows to handle repetitive tasks, connect your systems, and create powerful dashboards that give you full visibility into your operations."
          gradient="from-purple-400 to-pink-600"
          tiers={[
            {
              name: "CORE",
              features: [
                "Ops audit",
                "2 workflows",
                "Lite ops hub (Airtable/Notion)",
                "Basic reporting automation"
              ]
            },
            {
              name: "STANDARD",
              features: [
                "4 workflows",
                "Full ops hub",
                "Reporting engine",
                "Error handling",
                "SOP documentation"
              ],
              highlighted: true
            },
            {
              name: "SCALE",
              features: [
                "5-7 workflows",
                "Multi-system integrations",
                "Team dashboards",
                "Alerts + monitoring",
                "Full documentation",
                "1-week post-sprint support"
              ]
            }
          ]}
        />

        {/* MVP21™ - 21-Day MVP Build Sprint */}
        <ServiceTierSection
          title="MVP21™ — 21-Day MVP Build Sprint"
          description="Launch your MVP in just 21 days. We focus on core value, speed to market, and scalable code quality. From concept to launch, we deliver a production-ready product that your users will love."
          gradient="from-blue-400 to-indigo-600"
          tiers={[
            {
              name: "CORE",
              features: [
                "Basic PRD",
                "Core UI",
                "No-code MVP",
                "Launch checklist",
                "1 iteration round"
              ]
            },
            {
              name: "STANDARD",
              features: [
                "Full PRD",
                "Full UI",
                "Complex workflows",
                "Automation blueprint",
                "Reporting dashboard",
                "Launch support"
              ],
              highlighted: true
            },
            {
              name: "SCALE",
              features: [
                "Multi-user system",
                "Internal tools",
                "Advanced automation",
                "Full dashboard suite",
                "2 iteration cycles",
                "Full documentation + training"
              ]
            }
          ]}
        />

        {/* ADD-ONS Section */}
        <FeatureSection
          title="Add-ons"
          description="Ready to extend your sprint? Add powerful upgrades to enhance your product with additional features, workflows, and support options tailored to your needs."
          gradient="from-orange-400 to-red-600"
          align="center"
          features={[
            {
              title: "Extra user flow",
              description: "Additional user flow documentation and wireframing for your product.",
              icon: Workflow
            },
            {
              title: "Extra feature spec",
              description: "Detailed specification for additional features beyond the core sprint scope.",
              icon: FileText
            },
            {
              title: "Competitive teardown",
              description: "In-depth analysis of competitor products and market positioning.",
              icon: TrendingUp
            },
            {
              title: "Extra automation workflow",
              description: "Additional custom automation workflow to streamline your operations.",
              icon: Bot
            },
            {
              title: "Automated reporting dashboard",
              description: "Custom dashboard with automated reports and real-time metrics.",
              icon: BarChart3
            },
            {
              title: "Notification/alert setup",
              description: "Configure alerts and notifications for your workflows and systems.",
              icon: Bell
            },
            {
              title: "Extra iteration cycle",
              description: "Additional round of iterations and refinements for your product.",
              icon: ArrowRight
            },
            {
              title: "1-week support extension",
              description: "Extended support period to help you transition smoothly after delivery.",
              icon: Clock
            },
            {
              title: "Priority delivery upgrade",
              description: "Expedited delivery with priority scheduling and faster turnaround.",
              icon: Zap
            },
            {
              title: "Team training",
              description: "Comprehensive training sessions for automation or product management.",
              icon: Users
            }
          ]}
        />

        {/* CTA Section */}
        <section className="py-20 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background-light to-background" />
          <div className="absolute inset-0 radial-glow opacity-15" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-custom mx-auto text-center relative z-10 px-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Ready to ship?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Stop planning and start building. Book a consultation to discuss your project.
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
                <Link to="/contact">Start Your Sprint</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;