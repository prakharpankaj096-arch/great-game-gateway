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

    <div className="container-custom mx-auto relative z-10">
      {/* Section header */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
          How We Work
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
          {/* Slider / “pill” with animated label */}
          <div className="relative h-10 md:h-12 px-8 md:px-10 rounded-full bg-background/60 border border-border/40 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeStep.label}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-sm md:text-base font-medium tracking-[0.25em] uppercase text-primary"
              >
                {activeStep.label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Progress / step indicators */}
          <div className="flex items-center gap-3 md:gap-4">
            {STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={step.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group focus:outline-none"
                >
                  <motion.div
                    className="h-1.5 rounded-full bg-primary/20"
                    animate={{
                      width: isActive ? 64 : 32,
                      opacity: isActive ? 1 : 0.45,
                    }}
                    transition={{ duration: 0.25 }}
                  />
                  <span className="mt-2 block text-xs text-muted-foreground/80 group-hover:text-foreground transition-colors text-center">
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom: active step content */}
        <div className="mt-10 md:mt-12 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
          {/* Left: heading + description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.heading}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">
                {activeStep.heading}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {activeStep.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Right: small meta box */}
          <motion.div
            key={activeStep.duration}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl bg-background/60 border border-border/40 p-4 md:p-5 text-sm md:text-base"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Duration
            </p>
            <p className="font-medium mb-4">{activeStep.duration}</p>
            <p className="text-xs text-muted-foreground">
              This step is fully collaborative – you’ll get checkpoints,
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
    </div>

  </section >;
};
export default ProcessSection;