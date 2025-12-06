import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const designSteps = [
    {
        id: 0,
        badge: "The Goal",
        title: "Results Driven Design",
        description: "", // Video only
        gradient: "from-gray-500/20 to-slate-500/20",
    },
    {
        id: 1,
        badge: "Phase 01",
        title: "Research Backed",
        description: "We dive deep into user behavior, market trends, and competitor analysis. This data-first approach ensures every design decision solves a real problem and drives measurable business growth.",
        gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
        id: 2,
        badge: "Phase 02",
        title: "Complete Process",
        description: "From initial low-fidelity wireframes to polished, high-fidelity prototypes, we craft intuitive user journeys. Our holistic process ensures your brand's digital presence is seamless, engaging, and premium.",
        gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
        id: 3,
        badge: "Phase 03",
        title: "Dev Ready",
        description: "We bridge the gap between design and development. By delivering pixel-perfect systems, comprehensive style guides, and detailed specifications, we ensure developers build faster and stay true to the vision.",
        gradient: "from-orange-500/20 to-red-500/20",
    },
    {
        id: 4,
        badge: "Phase 04",
        title: "User Tested",
        description: (
            <div className="flex w-full divide-x divide-white/20 mt-6">
                <div className="flex-1 flex flex-col pr-4">
                    <span className="text-5xl font-bold text-orange-500">50+</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider mt-2">User Tests</span>
                </div>
                <div className="flex-1 flex flex-col px-4">
                    <span className="text-5xl font-bold text-orange-500">80%</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider mt-2">Fewer Revisions</span>
                </div>
                <div className="flex-1 flex flex-col pl-4">
                    <span className="text-5xl font-bold text-orange-500">3x</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider mt-2">Faster Market</span>
                </div>
            </div>
        ),
        gradient: "from-pink-500/20 to-rose-500/20",
    },
];

const ProductDesignStickyScroll = () => {
    // We need a ref for the ENTIRE component (Hero + Scroll)
    const containerRef = useRef<HTMLDivElement>(null);

    // We also need a specific ref for the "Split View" section to track its steps
    const splitSectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: splitSectionRef, // Track steps relative to the split section only
        offset: ["start start", "end end"],
    });

    const [activeStep, setActiveStep] = useState(0);

    // Map scroll of the SPLIT section to steps
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const stepCount = designSteps.length;
            const stepSize = 1 / stepCount;

            // If we haven't reached the split section (latest < 0), stick to 0
            if (latest < 0) {
                setActiveStep(0);
                return;
            }

            const currentStep = Math.min(
                Math.floor(latest / stepSize),
                stepCount - 1
            );
            setActiveStep(currentStep);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div ref={containerRef} className="relative bg-black w-full">

            {/* ==============================================
             HERO SECTION (Full Screen, Centered)
           ============================================== */}
            <div className="h-screen w-full flex flex-col items-center justify-center p-8 text-center relative z-10 bg-black">
                {/* Background Glow */}
                <div className="absolute inset-0 radial-glow opacity-20 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="block text-sm md:text-base font-medium tracking-wider mb-6 text-muted-foreground uppercase">
                        Designing & Building What Matters
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white mb-6">
                        Your Product Journey Starts Here
                    </h1>
                </motion.div>
            </div>


            {/* ==============================================
             SPLIT VIEW SECTION (Sticky Left, Scroll Right)
           ============================================== */}
            <div ref={splitSectionRef} className="flex flex-col lg:flex-row relative">

                {/* LEFT COLUMN - STICKY TITLE */}
                <div className="hidden lg:flex w-1/2 h-screen sticky top-0 items-center justify-center p-16 border-r border-white/10 bg-black z-20">
                    {/* Content Container */}
                    <div className="w-full max-w-xl relative z-10">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <span className="text-primary font-mono text-base tracking-widest mb-6 block uppercase">
                                {designSteps[activeStep].badge}
                            </span>
                            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                                {designSteps[activeStep].title}
                            </h2>
                        </motion.div>
                    </div>

                    {/* Background Gradient for Active Step */}
                    <motion.div
                        key={`bg-${activeStep}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className={`absolute inset-0 bg-gradient-to-br ${designSteps[activeStep].gradient} pointer-events-none z-0`}
                    />
                </div>

                {/* RIGHT COLUMN - SCROLLING CONTENT */}
                <div className="w-full lg:w-1/2 bg-black relative z-10">
                    {designSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className="h-screen flex items-center justify-center p-8 md:p-16 border-b border-white/5 last:border-0"
                        >
                            <div className="max-w-xl">
                                {/* Mobile Only Title */}
                                <div className="lg:hidden mb-8">
                                    <span className="text-primary font-mono text-sm tracking-widest mb-2 block uppercase">
                                        {step.badge}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Reduced Font Size (text-lg md:text-xl) */}
                                {step.description && (
                                    <div className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-8">
                                        {step.description}
                                    </div>
                                )}

                                {/* VIDEO 1 PLACEHOLDER: Only show for "The Goal" (id: 0) */}
                                {step.id === 0 && (
                                    <div className="w-full aspect-video bg-black rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                                        <video
                                            className="w-full h-full object-cover"
                                            src="/videos/design-process.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProductDesignStickyScroll;
