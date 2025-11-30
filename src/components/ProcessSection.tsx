"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Code2, Rocket, TestTube } from "lucide-react";
import { useRef } from "react";

const processes = [
  {
    icon: Lightbulb,
    title: "PLAN",
    timeline: "Days 1–10",
    phases: "Define → Research → Validate",
    description:
      "Identify the problem, target users, core features, and validate the idea.",
    gradient: "from-primary/10 via-accent-blue/5 to-transparent",
    iconColor: "text-primary",
  },
  {
    icon: Code2,
    title: "BUILD",
    timeline: "Days 11–35",
    phases: "Build → Design → Integrate",
    description:
      "Develop the MVP, create clean UI/UX, add auth, payments, and test.",
    gradient: "from-accent-blue/10 via-accent-purple/5 to-transparent",
    iconColor: "text-accent-blue",
  },
  {
    icon: TestTube,
    title: "PRE-LAUNCH",
    timeline: "Days 36–45",
    phases: "Test → Fix → Prepare",
    description:
      "Run a beta, gather feedback, fix issues, and prep launch content.",
    gradient: "from-accent-purple/10 via-primary/5 to-transparent",
    iconColor: "text-accent-purple",
  },
  {
    icon: Rocket,
    title: "LAUNCH",
    timeline: "Days 46–60",
    phases: "Launch → Support → Improve",
    description:
      "Go public, onboard users, patch issues fast, and start scaling.",
    gradient: "from-primary/10 via-accent-purple/5 to-transparent",
    iconColor: "text-primary",
  },
];

const ProcessCard = ({ process, index }: { process: (typeof processes)[0]; index: number }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.6, 0]);

  return (
    <div
      ref={container}
      style={{
        position: "sticky",
        top: "100px",
        marginBottom: "5vh",
        willChange: "transform",
      }}
    >
      <motion.div
        style={{ scale, opacity, willChange: "transform, opacity" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Card Container */}
        <div
          className={`
            relative w-full rounded-3xl overflow-hidden
            bg-black/90
            bg-gradient-to-br ${process.gradient}
            backdrop-blur-xl
            border border-white/5
          `}
          style={{
            zIndex: 10 + index,
            transform: "translateZ(0)",
          }}
        >
          {/* Card Content */}
          <div className="relative p-12 md:p-20 lg:p-28">
            {/* Title */}
            <div className="mb-6">
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-3 tracking-tight">
                {process.title}
              </h3>
              <p className="text-2xl md:text-3xl text-primary font-semibold mb-2">
                {process.timeline}
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                {process.phases}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-4xl">
              {process.description}
            </p>

            {/* Step Number */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12">
              <div className="text-9xl md:text-[12rem] font-bold text-white/5 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
type Step = {
  label: string;
  heading: string;
  description: string;
  duration: string;
};
const STEPS: Step[] = [{
  label: "Plan",
  heading: "Plan – Understand & Architect",
  description: "We dive deep into your vision, define the problem, map user journeys, and prioritize features for an MVP that actually moves the needle.",
  duration: "Days 1–5"
}, {
  label: "Build",
  heading: "Build – Design, Develop, Iterate",
  description: "Our team designs your experience, builds the product using a modern stack, and ships in tight, feedback-driven sprints.",
  duration: "Days 6–15"
}, {
  label: "Launch",
  heading: "Launch – Ship, Measure, Improve",
  description: "We deploy, monitor, and optimize your product, setting you up with analytics, feedback loops, and a roadmap for the next release.",
  duration: "Days 16–21"
}];
const AUTO_STEP_INTERVAL = 4000; // 4 seconds

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle through steps
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % STEPS.length);
    }, AUTO_STEP_INTERVAL);
    return () => clearInterval(id);
  }, []);
  const activeStep = STEPS[activeIndex];
  return <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <motion.div initial={{
      opacity: 0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: "-100px"
    }} transition={{
      duration: 0.6
    }} className="container-custom mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            HOW WE    
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            How We Build Products
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent 3-step process that takes you from idea to
            launched product in just 3 weeks.
          </p>
        </div>

        {/* Main card */}
        <div className="mx-auto max-w-4xl rounded-3xl bg-surface/60 border border-border/40 backdrop-blur-xl p-6 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
          {/* Top: animated step labels (Plan / Build / Launch) */}
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {/* Slider / "pill" with animated label */}
            <div className="relative h-10 md:h-12 px-8 md:px-10 rounded-full bg-background/60 border border-border/40 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span key={activeStep.label} initial={{
                y: 16,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} exit={{
                y: -16,
                opacity: 0
              }} transition={{
                duration: 0.35,
                ease: "easeOut"
              }} className="text-sm md:text-base font-medium tracking-[0.25em] uppercase text-primary">
                  {activeStep.label}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress / step indicators */}
            <div className="flex items-center gap-3 md:gap-4">
              {STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              return <button key={step.label} type="button" onClick={() => setActiveIndex(index)} className="group focus:outline-none">
                    <motion.div className="h-1.5 rounded-full bg-primary/20" animate={{
                  width: isActive ? 64 : 32,
                  opacity: isActive ? 1 : 0.45
                }} transition={{
                  duration: 0.25
                }} />
                    <span className="mt-2 block text-xs text-muted-foreground/80 group-hover:text-foreground transition-colors text-center">
                      {step.label}
                    </span>
                  </button>;
            })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="relative py-8 px-4 bg-gradient-to-b from-background via-background-light to-background">
      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-primary via-accent-blue to-accent-purple bg-clip-text text-transparent">
              Launch
            </span>
          </h2>
        </motion.div>

        {/* Cards Container - Optimized sticky scroll */}
        <div className="relative" style={{ paddingTop: "60vh", paddingBottom: "20vh" }}>
          {processes.map((process, index) => (
            <ProcessCard key={index} process={process} index={index} />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
            <span className="text-xs uppercase tracking-wider">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
          {/* Bottom: active step content */}
          <div className="mt-10 md:mt-12 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
            {/* Left: heading + description */}
            <AnimatePresence mode="wait">
              <motion.div key={activeStep.heading} initial={{
              opacity: 0,
              y: 16
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -16
            }} transition={{
              duration: 0.35,
              ease: "easeOut"
            }}>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">
                  {activeStep.heading}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {activeStep.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Right: small meta box */}
            <motion.div key={activeStep.duration} initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -16
          }} transition={{
            duration: 0.35,
            ease: "easeOut"
          }} className="rounded-2xl bg-background/60 border border-border/40 p-4 md:p-5 text-sm md:text-base">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Duration
              </p>
              <p className="font-medium mb-4">{activeStep.duration}</p>
              <p className="text-xs text-muted-foreground">
                This step is fully collaborative – you'll get checkpoints,
                reviews, and clear deliverables before we move to the next
                phase.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-sm md:text-base text-muted-foreground">
            From idea to launch in 3 weeks – with zero guesswork in between.
          </p>
        </div>
      </motion.div>
    </section>;
};
export default ProcessSection;