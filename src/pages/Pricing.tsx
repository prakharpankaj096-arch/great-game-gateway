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
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navigation />

            <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Choose the perfect plan for your business needs. No hidden fees.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative p-6 rounded-3xl border ${tier.border} bg-gradient-to-b ${tier.gradient} backdrop-blur-sm flex flex-col h-full group hover:scale-105 transition-transform duration-300`}
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <p className="text-sm text-white/60 mb-4 h-10">{tier.subtitle}</p>
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                                    {tier.price}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <p className="text-xs text-white/40 mb-4 min-h-[40px]">
                                    Best for: {tier.bestFor}
                                </p>
                                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10">
                                    Get Started
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-20 text-white/40 text-lg"
                >
                    We turn business ideas into real businesses — from MVP to enterprise.
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;
