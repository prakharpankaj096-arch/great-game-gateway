"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

type Step = {
    label: string;
    heading: string;
    description: string;
    duration: string;
    color: string;
};

const STEPS: Step[] = [
    {
        label: "Plan",
        heading: "Plan – Understand & Architect",
        description:
            "We dive deep into your vision, define the problem, map user journeys, and prioritize features for an MVP that actually moves the needle.",
        duration: "Days 1–5",
        color: "from-blue-500 to-blue-700",
    },
    {
        label: "Build",
        heading: "Build – Design, Develop, Iterate",
        description:
            "Our team designs your experience, builds the product using a modern stack, and ships in tight, feedback-driven sprints.",
        duration: "Days 6–15",
        color: "from-purple-500 to-purple-700",
    },
    {
        label: "Launch",
        heading: "Launch – Ship, Measure, Improve",
        description:
            "We deploy, monitor, and optimize your product, setting you up with analytics, feedback loops, and a roadmap for the next release.",
        duration: "Days 16–21",
        color: "from-pink-500 to-pink-700",
    },
];

const AUTO_STEP_INTERVAL = 4000; // 4 seconds

const ProcessSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Auto-cycle through steps
    useEffect(() => {
        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % STEPS.length);
        }, AUTO_STEP_INTERVAL);
        return () => clearInterval(id);
    }, []);

    const activeStep = STEPS[activeIndex];

    return (
        <section
            ref={containerRef}
            id="process"
            className="relative py-24 md:py-32 overflow-hidden bg-[#0a0e27]"
        >
            <div className="container mx-auto relative z-10 px-6">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase mb-4">
                        How We Work
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white">
                        How We Build Products
                    </h2>
                    <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                        A simple, transparent 3-step process that takes you from idea to
                        launched product in just 3 weeks.
                    </p>
                </div>

                {/* PARALLAX CARDS CONTAINER */}
                <div className="relative h-96 md:h-[500px] overflow-visible rounded-3xl mb-12">
                    {STEPS.map((step, index) => {
                        const speed = 0.2 + index * 0.3; // Different speeds: 0.2, 0.5, 0.8
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={step.label}
                                className={`absolute h-48 w-72 md:h-64 md:w-96 bg-gradient-to-r ${step.color} rounded-2xl shadow-2xl flex flex-col items-center justify-center text-white text-center p-6 cursor-pointer transition-all duration-300`}
                                style={{
                                    transform: `translateY(${scrollY * speed}px)`,
                                    zIndex: isActive ? 30 : 10 + index,
                                    left: `${15 + index * 20}%`,
                                    top: `${10 + index * 15}%`,
                                    opacity: isActive ? 1 : 0.7,
                                    scale: isActive ? 1.05 : 1,
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => setActiveIndex(index)}
                                whileHover={{ scale: 1.05, opacity: 1 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                    {step.label}
                                </h3>
                                <p className="text-sm md:text-base opacity-90">
                                    {step.duration}
                                </p>
                            </motion.div>
                        );
                    })}

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-0 right-0 text-center text-gray-400 z-50">
                        ↓ Scroll to see parallax effect ↓
                    </div>
                </div>

                {/* Active Step Details */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                            {activeStep.heading}
                        </h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            {activeStep.description}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Bottom tagline */}
                <div className="text-center mt-10 md:mt-12">
                    <p className="text-sm md:text-base text-gray-300">
                        From idea to launch in 3 weeks – with{" "}
                        <span className="text-blue-400 font-medium">zero guesswork</span> in
                        between.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
