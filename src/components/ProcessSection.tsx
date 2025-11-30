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
};

export default ProcessSection;
