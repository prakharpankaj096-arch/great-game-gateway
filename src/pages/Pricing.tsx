import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
    const tiers = [
        {
            name: "Starter",
            subtitle: "MVP Launch Pack",
            price: "$1,000",
            features: [
                "MVP development (web app)",
                "Basic UI/UX",
                "Core feature build-out",
                "Launch-ready prototype",
                "1 revision cycle",
                "Email support",
            ],
            bestFor: "Solo founders, early-stage experiments, pre-funding ideas",
            gradient: "from-blue-500/20 to-purple-500/20",
            border: "border-blue-500/30",
            hoverBorder: "hover:border-blue-500/80",
        },
        {
            name: "Growth",
            subtitle: "Business Expansion Pack",
            price: "$2500",
            features: [
                "Product strategy & feature roadmap",
                "Custom development (backend + frontend)",
                "AI-enabled workflows",
                "Performance optimization",
                "2 revision cycles",
            ],
            bestFor: "Small businesses, growing startups, early revenue teams",
            gradient: "from-purple-500/20 to-pink-500/20",
            border: "border-purple-500/30",
            hoverBorder: "hover:border-purple-500/80",
        },
        {
            name: "Pro",
            subtitle: "AI & SaaS Builder Pack",
            price: "$5,000",
            features: [
                "Full SaaS development",
                "AI agent / automation systems",
                "Database & cloud setup",
                "Scalable architecture",
                "Custom dashboards + admin",
                "4 revision cycles",
            ],
            bestFor: "Startup founders building SaaS, AI tools, B2B platforms",
            gradient: "from-pink-500/20 to-orange-500/20",
            border: "border-pink-500/30",
            hoverBorder: "hover:border-pink-500/80",
        },
        {
            name: "Enterprise",
            subtitle: "Custom Business Solutions",
            price: "$10,000",
            features: [
                "End-to-end custom development",
                "Business growth strategy",
                "AI integrations for operations",
                "Long-term technical partnership",
                "Dedicated team allocation",
                "24/7 support availability",
            ],
            bestFor: "Large scale operations needing dedicated resources",
            gradient: "from-orange-500/20 to-red-500/20",
            border: "border-orange-500/30",
            hoverBorder: "hover:border-orange-500/80",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
            <Navigation />

            <main className="flex-1 pt-24">
            <div className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground/60 mb-6"
                    >
                        Simple, Transparent Pricing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Choose the perfect plan for your business needs. No hidden fees.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                delay: index * 0.1, 
                                duration: 0.8, 
                                ease: [0.25, 0.1, 0.25, 1],
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`relative p-6 rounded-3xl border ${tier.border} ${tier.hoverBorder} bg-gradient-to-b ${tier.gradient} backdrop-blur-sm flex flex-col h-full group hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)] transition-all duration-300 overflow-hidden`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.1 }}
                                        className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors"
                                    >
                                        {tier.name}
                                    </motion.h3>
                                    <p className="text-sm text-muted-foreground mb-4 h-10 group-hover:text-foreground/80 transition-colors">{tier.subtitle}</p>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 150 }}
                                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
                                    >
                                        {tier.price}
                                    </motion.div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {tier.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.3 + i * 0.05, duration: 0.4 }}
                                            className="flex items-start gap-3 text-sm text-foreground/80 group-hover:text-foreground transition-colors"
                                        >
                                            <Check className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <p className="text-xs text-muted-foreground/60 mb-4 min-h-[40px] group-hover:text-muted-foreground transition-colors">
                                        Best for: {tier.bestFor}
                                    </p>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button className="w-full bg-card/60 hover:bg-card/80 text-foreground border border-border transition-all duration-300">
                                            Get Started
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center mt-16 md:mt-20 text-muted-foreground text-lg"
                >
                    We turn business ideas into real businesses — from MVP to enterprise.
                </motion.div>
            </div>
            </main>
            <Footer />
        </div>
    );
};

export default Pricing;
