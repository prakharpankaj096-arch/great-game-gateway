import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProductDesign = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground font-sans">
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-start justify-start overflow-hidden">
                <div className="absolute inset-0 radial-glow opacity-20" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-left relative z-10 max-w-5xl pt-40 pl-6 pr-6"
                >
                    <span className="block text-sm md:text-base font-medium tracking-wider mb-6 text-muted-foreground">
                        Product Design
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-8">
                        Product Design That Drives Results
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                        Beautiful interfaces mean nothing if users can't accomplish their goals. We design digital products that are intuitive, conversion-focused, and built to scale—backed by research, not guesswork.
                    </p>
                </motion.div>
            </section>

            {/* Our Approach Section */}
            <section className="py-20 md:py-32 px-6 bg-background">
                <div className="container-custom mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            Our Approach
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Research-Driven Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-surface border border-border rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Research-Driven Design
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                We start with user research, competitive analysis, and journey mapping—understanding your users before designing a single screen. No assumptions, only data.
                            </p>
                        </motion.div>

                        {/* Complete UI/UX Process */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-surface border border-border rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Complete UI/UX Process
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                From wireframes to high-fidelity prototypes, we craft every screen with purpose. Our designs include responsive layouts, micro-interactions, and comprehensive design systems that ensure consistency as you grow.
                            </p>
                        </motion.div>

                        {/* Built for Development */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-surface border border-border rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Built for Development
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Our designers collaborate with developers from day one. Every design is technically feasible, performance-optimized, and delivered with detailed specs—no "impossible to build" surprises.
                            </p>
                        </motion.div>

                        {/* Tested with Real Users */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-surface border border-border rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Tested with Real Users
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                We validate designs through usability testing before handoff. Problems get caught in prototypes, not production, saving you time and costly revisions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What You Get Section */}
            <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-background via-background-light to-background">
                <div className="container-custom mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            What You Get
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Deliverables Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-surface border border-border rounded-3xl p-10 md:p-12"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                                Complete Deliverables
                            </h3>
                            <ul className="space-y-4 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="text-foreground mr-3 mt-1 text-2xl">•</span>
                                    <span>Complete Figma files</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-foreground mr-3 mt-1 text-2xl">•</span>
                                    <span>Interactive prototypes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-foreground mr-3 mt-1 text-2xl">•</span>
                                    <span>Scalable design system</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-foreground mr-3 mt-1 text-2xl">•</span>
                                    <span>Developer handoff documentation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-foreground mr-3 mt-1 text-2xl">•</span>
                                    <span>Accessibility compliance (WCAG 2.1 AA)</span>
                                </li>
                            </ul>
                            <p className="mt-6 text-foreground font-semibold">
                                Everything your team needs to build with confidence.
                            </p>
                        </motion.div>

                        {/* Design That Converts Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-surface border border-border rounded-3xl p-10 md:p-12"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                                Design That Converts
                            </h3>
                            <ul className="space-y-4 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="text-foreground mr-3 mt-1 text-2xl">•</span>
                                    <span>Mobile-first responsive design</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-foreground mr-3 mt-1 text-2xl">•</span>
                                    <span>Sub-3-second load optimization</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-foreground mr-3 mt-1 text-2xl">•</span>
                                    <span>Interfaces focused on your key metrics</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-foreground mr-3 mt-1 text-2xl">•</span>
                                    <span>Whether that's sign-ups, purchases, or engagement</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Investment Section */}
            <section className="py-20 md:py-32 px-6 bg-background">
                <div className="container-custom mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-surface border border-border rounded-3xl p-12 md:p-16 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                            Investment & Timeline
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-surface/50 rounded-2xl p-6 border border-border">
                                <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Investment</p>
                                <p className="text-2xl md:text-3xl font-bold text-foreground">$10,000-$85,000</p>
                                <p className="text-sm text-muted-foreground mt-2">depending on scope</p>
                            </div>

                            <div className="bg-surface/50 rounded-2xl p-6 border border-border">
                                <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Timeline</p>
                                <p className="text-2xl md:text-3xl font-bold text-foreground">6-16 weeks</p>
                                <p className="text-sm text-muted-foreground mt-2">from start to handoff</p>
                            </div>

                            <div className="bg-surface/50 rounded-2xl p-6 border border-border">
                                <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Result</p>
                                <p className="text-2xl md:text-3xl font-bold text-foreground">Products users love</p>
                                <p className="text-sm text-muted-foreground mt-2">and businesses scale</p>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-5 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
                        >
                            Start Your Product Design Project
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProductDesign;
